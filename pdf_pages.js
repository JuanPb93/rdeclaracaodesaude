(function(){
  const base = new URL('.', document.currentScript ? document.currentScript.src : location.href).href;
  const u = (p) => new URL(p, base).href;
  window.DS_PDF_PAGES = {
    unimed: [
      u("pdfs/unimed_2026_p1.png"),
      u("pdfs/unimed_2026_p2.png"),
      u("pdfs/unimed_2026_p3.png"),
      u("pdfs/unimed_2026_p4.png"),
      u("pdfs/unimed_2026_p5.png"),
      u("pdfs/unimed_2026_p6.png"),
      u("pdfs/unimed_2026_p7.png")
    ],
    intermed: [
      u("pdfs/intermed_2026_p1.png"),
      u("pdfs/intermed_2026_p2.png"),
      u("pdfs/intermed_2026_p3.png"),
      u("pdfs/intermed_2026_p4.png"),
      u("pdfs/intermed_2026_p5.png"),
      u("pdfs/intermed_2026_p6.png"),
      u("pdfs/intermed_2026_p7.png")
    ]
  };
})();
