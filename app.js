
const MAX_INSTANCES = 5;
const META = {
  unimed: { title:'Declaração de Saúde Unimed', file:'DECLARACAO_SAUDE_UNIMED.html', badge:'UNIMED', theme:'unimed' },
  intermed: { title:'Declaração de Saúde Intermed', file:'DECLARACAO_SAUDE_INTERMED.html', badge:'INTERMED', theme:'intermed' }
};
let state = loadState();

function loadState() {
  return {
    activePanel:'unimed',
    counts:{unimed:1, intermed:1},
    activeTabs:{unimed:1, intermed:1}
  };
}
function saveState() {
  try { sessionStorage.setItem('ds_tabs_system_state_v27', JSON.stringify(state)); } catch(e) {}
}
function storageKey(op,id) {
  return `ds_tabs_${op}_${id}`;
}
function readStored(op,id) {
  try {
    return JSON.parse(sessionStorage.getItem(storageKey(op,id)) || 'null');
  } catch(e) {
    return null;
  }
}
function hasDataObj(data) {
  if(!data) return false;
  return Object.entries(data).some(([k,v]) => !['operator','instanceId'].includes(k) && String(v||'').trim() !== '');
}
function updateSidebarSelection() {
  ['unimed','intermed'].forEach(op => {
    const active = state.activePanel === op;
    let card = document.getElementById(`card-${op}`);
    if(!card){
      const btn = document.querySelector(`.decl-btn[data-op="${op}"]`);
      card = btn ? btn.closest('.sidebar-operator-card') : null;
    }
    const viz = document.getElementById(`viz-${op}`);
    if(card){
      card.classList.toggle('is-active', active);
      card.classList.toggle('is-inactive', !active);
    }
    if(viz){
      viz.disabled = !active;
      viz.setAttribute('aria-disabled', active ? 'false' : 'true');
      viz.title = active
        ? `Visualizar ${META[op].badge}`
        : `Selecione a declaração ${META[op].badge} para visualizar`;
    }
  });
}
function showPanel(op) {
  state.activePanel = op;
  saveState();
  const panel = document.getElementById(`panel-${op}`);
  if(panel && !panel.querySelector('.workspace')) buildWorkspace(op);
  document.querySelectorAll('.main-panel').forEach(p=>p.classList.remove('active'));
  if(panel) panel.classList.add('active');
  updateSidebarSelection();
}
function setActiveTab(op,id) {
  state.activeTabs[op] = id;
  saveState();
  buildWorkspace(op);
  showPanel(op);
}
function syncActiveTab(op) {
  const activeId = state.activeTabs[op] || 1;
  document.querySelectorAll(`#panel-${op} .chrome-tab`).forEach(btn => {
    btn.classList.toggle('active', Number(btn.dataset.id) === Number(activeId));
  });
  document.querySelectorAll(`#panel-${op} .tab-pane`).forEach(pane => {
    pane.classList.toggle('active', Number(pane.dataset.id) === Number(activeId));
  });
}
function buildWorkspace(op) {
  const panel = document.getElementById(`panel-${op}`);
  if(!panel) return;
  const activeId = state.activeTabs[op] || 1;
  panel.innerHTML = `
    <div class="panel-top">
      <div>
        <span class="badge ${META[op].theme}">${META[op].badge}</span>
        <h1>${META[op].title}</h1>
        <p>Instâncias em abas</p>
      </div>

      <div class="panel-top-actions" id="toolbar-${op}">
        <button type="button" class="mini-btn mini-clear" onclick="clearInstance('${op}', ${activeId})">Deixar em branco</button>
        <button type="button" class="mini-btn mini-add" onclick="addInstance('${op}')">+ Adicionar Instância</button>
      </div>
    </div>
    <div class="workspace">
      <div class="tabs-bar" id="tabs-${op}"></div>
      <div class="tabs-content" id="panes-${op}"></div>
    </div>`;
  buildTabsAndPanes(op);
}
function buildTabsAndPanes(op) {
  const tabsWrap = document.getElementById(`tabs-${op}`);
  const panesWrap = document.getElementById(`panes-${op}`);
  tabsWrap.innerHTML = '';
  panesWrap.innerHTML = '';
  for(let i=1;i<=state.counts[op];i++) {
    const hasData = hasDataObj(readStored(op,i));
    const tab = document.createElement('button');
    tab.className = `chrome-tab ${hasData ? 'has-data' : ''}`;
    tab.dataset.id = i;
    tab.innerHTML = `Instância ${i}<small>${hasData ? 'Preenchida' : 'Em branco'}</small><button class="tab-close" type="button" ${state.counts[op]===1 ? 'disabled' : ''} onclick="event.stopPropagation(); closeInstance('${op}', ${i})">×</button>`;
    tab.onclick = () => setActiveTab(op, i);
    tabsWrap.appendChild(tab);

    const pane = document.createElement('div');
    pane.className = 'tab-pane';
    pane.dataset.id = i;
    pane.innerHTML = `
      <iframe class="form-frame" id="frame-${op}-${i}" src="${META[op].file}?operator=${op}&instance=${i}"></iframe>`;
    panesWrap.appendChild(pane);
  }
  if((state.activeTabs[op] || 1) > state.counts[op]) state.activeTabs[op] = state.counts[op];
  syncActiveTab(op);
}
function refreshTabIndicators(op) {
  document.querySelectorAll(`#panel-${op} .chrome-tab`).forEach(tab => {
    const id = Number(tab.dataset.id);
    const filled = hasDataObj(readStored(op, id));
    tab.classList.toggle('has-data', filled);
    const small = tab.querySelector('small');
    if(small) small.textContent = filled ? 'Preenchida' : 'Em branco';
  });
}
function addInstance(op) {
  if(state.counts[op] >= MAX_INSTANCES) return;
  state.counts[op] += 1;
  state.activeTabs[op] = state.counts[op];
  saveState();
  buildWorkspace(op);
  showPanel(op);
}
function closeInstance(op,id) {
  if(state.counts[op] <= 1) return;
  for(let i=id;i<state.counts[op];i++) {
    const next = sessionStorage.getItem(storageKey(op, i + 1));
    if(next === null) sessionStorage.removeItem(storageKey(op, i));
    else sessionStorage.setItem(storageKey(op, i), next);
  }
  sessionStorage.removeItem(storageKey(op, state.counts[op]));
  state.counts[op] -= 1;
  if(state.activeTabs[op] === id) state.activeTabs[op] = Math.max(1, id - 1);
  else if(state.activeTabs[op] > id) state.activeTabs[op] -= 1;
  saveState();
  buildWorkspace(op);
  showPanel(op);
}
function clearInstance(op,id) {
  sessionStorage.removeItem(storageKey(op,id));
  const frame = document.getElementById(`frame-${op}-${id}`);
  try {
    frame.contentWindow.postMessage({type:'ds-clear-instance', operator:op, instanceId:id}, '*');
  } catch(e) {}
  setTimeout(()=>refreshTabIndicators(op), 30);
}

window.addEventListener('message', (ev) => {
  if(ev.data && ev.data.type === 'ds-form-update') {
    sessionStorage.setItem(storageKey(ev.data.operator, ev.data.instanceId), JSON.stringify(ev.data.data || {}));
    refreshTabIndicators(ev.data.operator);
  }
});


function schemaForOperator(op) {
  // Lê as posições sempre em tempo de uso. Assim a tela abre mesmo que os arquivos do PDF carreguem depois.
  const schemas = window.PDF_POSITION_SCHEMAS || {};
  const fallback = window.PDF_POSITION_SCHEMA || schemas.unimed || {fields:[], pageWidth:210, pageHeight:297};
  return schemas[op] || fallback;
}

const SCHEMA_PAGE_WIDTH = 210;
const SCHEMA_PAGE_HEIGHT = 297;
function esc(v) {
  return String(v||'').replace(/[&<>"]/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[s]));
}
function normalizeValue(v) {
  return String(v || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toUpperCase();
}
function getValueByAliases(data, keys) {
  for(const key of keys) {
    if(Object.prototype.hasOwnProperty.call(data, key) && data[key] !== undefined && data[key] !== null && String(data[key]) !== '') {
      return data[key];
    }
  }
  return '';
}

function readFrameFormData(frame) {
  try {
    const doc = frame && frame.contentDocument;
    if(!doc) return null;
    const data = {};
    doc.querySelectorAll('input,select,textarea').forEach(el => {
      if(!el.name) return;
      if(el.type === 'radio') {
        if(el.checked) data[el.name] = el.value;
      } else {
        data[el.name] = el.value || '';
      }
    });
    return data;
  } catch(e) {
    return null;
  }
}

async function syncAllFrameData(op) {
  const waiters = [];
  for(let i=1;i<=state.counts[op];i++) {
    const frame = document.getElementById(`frame-${op}-${i}`);
    if(!frame) continue;

    // tentativa imediata de leitura direta do DOM do iframe
    const immediate = readFrameFormData(frame);
    if(immediate) {
      sessionStorage.setItem(storageKey(op, i), JSON.stringify(immediate));
    }

    // pede ao iframe para persistir o estado atual antes da visualização
    waiters.push(new Promise(resolve => {
      let done = false;
      const finish = () => {
        if(done) return;
        done = true;
        window.removeEventListener('message', onMsg);
        const latest = readFrameFormData(frame);
        if(latest) sessionStorage.setItem(storageKey(op, i), JSON.stringify(latest));
        resolve();
      };
      const onMsg = (ev) => {
        if(ev.data && ev.data.type === 'ds-sync-done' && ev.data.operator === op && String(ev.data.instanceId) === String(i)) {
          finish();
        }
      };
      window.addEventListener('message', onMsg);
      try {
        frame.contentWindow.postMessage({type:'ds-request-sync', operator:op, instanceId:i}, '*');
      } catch(e) {}
      setTimeout(finish, 180);
    }));
  }
  await Promise.all(waiters);
  refreshTabIndicators(op);
}


const PDF_FONT_SCALE = 0.75;
const PDF_LINE_HEIGHT = 1.14;

function base64ToUint8Array(base64) {
  const clean = String(base64 || '').replace(/^data:application\/pdf;base64,/, '').replace(/\s/g, '');
  const bin = atob(clean);
  const out = new Uint8Array(bin.length);
  for(let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

function cleanPdfText(value) {
  return String(value || '')
    .toLocaleUpperCase('pt-BR')
    .normalize('NFC')
    .replace(/[\u2010-\u2015]/g, '-')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/\u00A0/g, ' ')
    .replace(/[^\x09\x0A\x0D\x20-\x7E\u00A0-\u00FF]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function getPdfFieldValue(field, data) {
  if(field.type === 'check') {
    if(field.when && field.when.field) {
      const current = normalizeValue(getValueByAliases(data, [field.when.field]));
      const expected = normalizeValue(field.when.equals);
      return current === expected ? 'X' : '';
    }
    return '';
  }
  let raw = '';
  if(field.key === 'responsavelData') raw = getValueByAliases(data, ['responsavelData','dataLocal']);
  else raw = getValueByAliases(data, [field.key]);
  return cleanPdfText(raw);
}

function schemaWidth(schema) {
  return Number(schema.pageWidth || SCHEMA_PAGE_WIDTH || 210);
}
function schemaHeight(schema) {
  return Number(schema.pageHeight || SCHEMA_PAGE_HEIGHT || 297);
}
function mmToPdfX(mm, page, schema) {
  return (Number(mm) || 0) * (page.getWidth() / schemaWidth(schema));
}
function mmToPdfYFromTop(mm, page, schema) {
  return (Number(mm) || 0) * (page.getHeight() / schemaHeight(schema));
}
function mmToPdfW(mm, page, schema) {
  return (Number(mm) || 0) * (page.getWidth() / schemaWidth(schema));
}
function pdfFontSize(field) {
  return Math.max(6, (Number(field.fs) || 11) * PDF_FONT_SCALE);
}

function safeDrawText(page, value, options, fallbackFont) {
  try {
    page.drawText(value, options);
  } catch(err) {
    const safe = String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\x20-\x7E]/g, '');
    if(safe) page.drawText(safe, {...options, font: fallbackFont || options.font});
  }
}

function splitTextToLines(text, font, fontSize, maxWidth) {
  const words = String(text || '').split(/\s+/).filter(Boolean);
  const lines = [];
  let current = '';
  for(const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if(font.widthOfTextAtSize(candidate, fontSize) <= maxWidth || !current) {
      if(font.widthOfTextAtSize(candidate, fontSize) <= maxWidth) {
        current = candidate;
      } else {
        // palavra maior que a largura: quebra por caractere
        let part = '';
        for(const ch of word) {
          const c = part + ch;
          if(font.widthOfTextAtSize(c, fontSize) <= maxWidth || !part) part = c;
          else { lines.push(part); part = ch; }
        }
        current = part;
      }
    } else {
      lines.push(current);
      current = word;
    }
  }
  if(current) lines.push(current);
  return lines;
}

function maxLinesForField(field) {
  const key = field.key || '';
  if(key === 'comentarios') return 3;
  if(key === 'nome') return 1;
  if(/^q\d+_obs$/.test(key)) return 1;
  if(/^cid[ED]\d+$/.test(key)) return 1;
  if(/^desc[ED]\d+$/.test(key)) return 1;
  if(/^termoBeneficiario$/.test(key)) return 1;
  return 1;
}

function truncateToWidth(text, font, fontSize, maxWidth) {
  let value = String(text || '');
  if(font.widthOfTextAtSize(value, fontSize) <= maxWidth) return value;
  const ell = '...';
  while(value.length > 0 && font.widthOfTextAtSize(value + ell, fontSize) > maxWidth) {
    value = value.slice(0, -1);
  }
  return value ? value + ell : '';
}

function drawPdfTextField(page, field, value, font, fallbackFont, schema) {
  if(!value) return;
  const fontSize = pdfFontSize(field);
  const maxWidth = Math.max(1, mmToPdfW(field.w || 40, page, schema) - 2);
  const x0 = mmToPdfX(field.x || 0, page, schema);
  const top = mmToPdfYFromTop(field.y || 0, page, schema);
  const lineHeight = fontSize * PDF_LINE_HEIGHT;
  const maxLines = maxLinesForField(field);
  let lines = splitTextToLines(value, font, fontSize, maxWidth);
  if(lines.length > maxLines) {
    lines = lines.slice(0, maxLines);
    lines[maxLines - 1] = truncateToWidth(lines[maxLines - 1], font, fontSize, maxWidth);
  } else {
    lines = lines.map(line => truncateToWidth(line, font, fontSize, maxWidth));
  }
  lines.forEach((line, idx) => {
    if(!line) return;
    let x = x0;
    if(field.align === 'center') {
      x = x0 + (maxWidth - font.widthOfTextAtSize(line, fontSize)) / 2;
    } else if(field.align === 'right') {
      x = x0 + maxWidth - font.widthOfTextAtSize(line, fontSize);
    }
    // As posições do schema são medidas a partir do topo da folha.
    // No PDF, desenhamos usando a linha-base da fonte.
    const y = page.getHeight() - top - (fontSize * 0.92) - (idx * lineHeight);
    safeDrawText(page, line, {x, y, size: fontSize, font, lineHeight}, fallbackFont);
  });
}

function drawPdfCheckField(page, field, value, font, fallbackFont, schema) {
  if(value !== 'X') return;
  const fontSize = Math.max(8, (Number(field.fs) || 12) * 0.82);
  const boxW = mmToPdfW(field.w || 5, page, schema);
  const x0 = mmToPdfX(field.x || 0, page, schema);
  const top = mmToPdfYFromTop(field.y || 0, page, schema);
  const x = x0 + (boxW - font.widthOfTextAtSize('X', fontSize)) / 2;
  const y = page.getHeight() - top - fontSize * 1.05;
  safeDrawText(page, 'X', {x, y, size: fontSize, font}, fallbackFont);
}

async function buildFilledPdfBytes(op, docs) {
  if(!window.PDFLib || !window.DS_PDF_TEMPLATES || !window.DS_PDF_TEMPLATES[op]) {
    throw new Error('Biblioteca PDF ou modelo base não encontrado.');
  }
  const { PDFDocument, StandardFonts } = window.PDFLib;
  const schema = schemaForOperator(op);
  const templateBytes = base64ToUint8Array(window.DS_PDF_TEMPLATES[op]);
  const templateDoc = await PDFDocument.load(templateBytes);
  const outDoc = await PDFDocument.create();
  const textFont = await outDoc.embedFont(StandardFonts.HelveticaBold);
  const fallbackFont = await outDoc.embedFont(StandardFonts.Helvetica);
  const pageIndices = templateDoc.getPageIndices();

  for(const doc of docs) {
    const copiedPages = await outDoc.copyPages(templateDoc, pageIndices);
    copiedPages.forEach(p => outDoc.addPage(p));
    for(const field of schema.fields) {
      const pageIndex = Number(field.page || 1) - 1;
      const page = copiedPages[pageIndex];
      if(!page) continue;
      const value = getPdfFieldValue(field, doc.data || {});
      if(field.type === 'check') drawPdfCheckField(page, field, value, textFont, fallbackFont, schema);
      else drawPdfTextField(page, field, value, textFont, fallbackFont, schema);
    }
  }

  outDoc.setTitle(`${META[op].badge} - Declaração de Saúde`);
  outDoc.setProducer('R-Declaracao Saude v2.8');
  outDoc.setCreator('R-Declaracao Saude v2.8');
  return await outDoc.save();
}

async function visualize(op) {
  if(state.activePanel !== op) {
    updateSidebarSelection();
    return;
  }
  const win = window.open('', '_blank');
  if(!win) {
    alert('O navegador bloqueou a nova aba. Libere pop-ups para visualizar o PDF.');
    return;
  }
  const title = `${META[op].badge} - Visualização`;
  win.document.write(`<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><title>${title}</title><style>body{margin:0;font-family:Arial,Helvetica,sans-serif;background:#f1f5f9;color:#0f172a;display:flex;align-items:center;justify-content:center;height:100vh}.box{background:#fff;border:1px solid #d7e2ef;border-radius:18px;padding:24px 28px;box-shadow:0 10px 28px rgba(15,23,42,.10);font-weight:700}</style></head><body><div class="box">Gerando PDF real...</div></body></html>`);
  win.document.close();

  try {
    await syncAllFrameData(op);
    const docs = [];
    for(let i=1;i<=state.counts[op];i++) {
      const d = readStored(op,i) || {};
      docs.push({ instance:i, data:d });
    }
    const bytes = await buildFilledPdfBytes(op, docs);
    const blob = new Blob([bytes], {type:'application/pdf'});
    const url = URL.createObjectURL(blob);
    win.location.href = url;
    setTimeout(() => URL.revokeObjectURL(url), 120000);
  } catch(err) {
    console.error(err);
    win.document.open();
    win.document.write(`<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><title>Erro</title><style>body{font-family:Arial,Helvetica,sans-serif;background:#f8fafc;color:#0f172a;padding:28px}.box{max-width:720px;background:#fff;border:1px solid #fecaca;border-radius:16px;padding:20px;box-shadow:0 10px 28px rgba(15,23,42,.08)}h1{font-size:18px;color:#991b1b}</style></head><body><div class="box"><h1>Não foi possível gerar o PDF.</h1><p>${esc(err.message || err)}</p><p>Confira se os arquivos <strong>lib/pdf-lib.min.js</strong> e <strong>pdf_templates.js</strong> estão na pasta do sistema.</p></div></body></html>`);
    win.document.close();
  }
}

let __rdsBooted = false;

function bindSidebarButtons() {
  document.querySelectorAll('.decl-btn[data-op]').forEach(btn => {
    btn.onclick = () => showPanel(btn.dataset.op);
    btn.disabled = false;
    btn.removeAttribute('disabled');
  });
  document.querySelectorAll('.viz-btn[data-op]').forEach(btn => {
    btn.onclick = () => {
      const op = btn.dataset.op;
      if(state.activePanel !== op) return;
      visualize(op);
    };
  });
  updateSidebarSelection();
}

// Clique por delegação para os botões estáticos de fallback.
document.addEventListener('click', function(ev) {
  const btn = ev.target && ev.target.closest ? ev.target.closest('[data-action]') : null;
  if(!btn) return;
  const op = btn.getAttribute('data-op');
  const action = btn.getAttribute('data-action');
  const id = Number(btn.getAttribute('data-id') || (state.activeTabs && state.activeTabs[op]) || 1);
  if(action === 'clear') { ev.preventDefault(); clearInstance(op, id); }
  if(action === 'add') { ev.preventDefault(); addInstance(op); }
});

Object.assign(window, {
  showPanel,
  visualize,
  addInstance,
  closeInstance,
  clearInstance,
  setActiveTab,
  syncAllFrameData,
  buildFilledPdfBytes,
  schemaForOperator
});

function showBootError(err) {
  console.error(err);
  const content = document.querySelector('.content');
  if(content) {
    content.innerHTML = `<div class="card group-card" style="margin:20px;max-width:760px;border-color:#fecaca"><h3 style="color:#991b1b;margin-top:0">Erro ao abrir o sistema</h3><p>${esc(err && (err.message || err))}</p><p>Confira se todos os arquivos foram extraídos na mesma pasta e abra pelo Live Server/GitHub Pages.</p></div>`;
  }
}
function renderAll() {
  if(!document.getElementById('panel-unimed') || !document.getElementById('panel-intermed')) return;
  bindSidebarButtons();
  buildWorkspace('unimed');
  buildWorkspace('intermed');
  showPanel(state.activePanel || 'unimed');
  updateSidebarSelection();
  __rdsBooted = true;
}
function bootRDS() {
  try {
    if(__rdsBooted && document.querySelector('#panel-unimed .workspace')) return;
    renderAll();
  } catch(err) {
    showBootError(err);
  }
}
bootRDS();
document.addEventListener('DOMContentLoaded', bootRDS);
window.addEventListener('load', bootRDS);
setTimeout(bootRDS, 80);
setTimeout(bootRDS, 350);

window.RDS_APP_LOADED = true;
