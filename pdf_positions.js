// Posições dos campos do PDF.
// Ajuste aqui os valores x/y/w/fs em milímetros quando precisar calibrar.
// x maior = move para direita | y maior = move para baixo | fs = tamanho da fonte.

window.PDF_POSITION_SCHEMAS = {
  "unimed": {
    "operator": "generic",
    "pages": 7,
    "fields": [
      {
        "key": "vinculo_titular_check",
        "label": "Vínculo TITULAR",
        "page": 1,
        "x": 152.95,
        "y": 42.95,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "vinculo",
          "equals": "TITULAR"
        },
        "unit": "mm"
      },
      {
        "key": "vinculo_dependente_check",
        "label": "Vínculo DEPENDENTE",
        "page": 1,
        "x": 167.80,
        "y": 42.95,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "vinculo",
          "equals": "DEPENDENTE"
        },
        "unit": "mm"
      },
      {
        "key": "nome",
        "label": "Nome",
        "page": 1,
        "x": 29.15,
        "y": 43.15,
        "w": 120,
        "fs": 14,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "dataNascimento",
        "label": "Data de nascimento",
        "page": 2,
        "x": 19.45,
        "y": 46.64,
        "w": 43.2,
        "fs": 15,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "peso",
        "label": "Peso",
        "page": 2,
        "x": 64.38,
        "y": 46.64,
        "w": 66.5,
        "fs": 15,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "altura",
        "label": "Altura",
        "page": 2,
        "x": 132.43,
        "y": 46.64,
        "w": 65.6,
        "fs": 15,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "q31_sim_check",
        "label": "SQ31",
        "page": 2,
        "x": 165.2,
        "y": 104.05,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q31_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q31_nao_check",
        "label": "NQ31",
        "page": 2,
        "x": 184.55,
        "y": 104.05,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q31_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q31_obs",
        "label": "Obs Q31",
        "page": 2,
        "x": 65.55,
        "y": 124.2,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q32_sim_check",
        "label": "SQ32",
        "page": 2,
        "x": 165.2,
        "y": 128.19,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q32_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q32_nao_check",
        "label": "NQ32",
        "page": 2,
        "x": 184.55,
        "y": 128.19,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q32_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q32_obs",
        "label": "Obs Q32",
        "page": 2,
        "x": 65.55,
        "y": 149.79,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q33_sim_check",
        "label": "SQ33",
        "page": 2,
        "x": 165.2,
        "y": 153.85,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q33_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q33_nao_check",
        "label": "NQ33",
        "page": 2,
        "x": 184.55,
        "y": 153.85,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q33_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q33_obs",
        "label": "Obs Q33",
        "page": 2,
        "x": 65.55,
        "y": 171.35,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q34_sim_check",
        "label": "SQ34",
        "page": 2,
        "x": 165.2,
        "y": 175.30,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q34_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q34_nao_check",
        "label": "NQ34",
        "page": 2,
        "x": 184.55,
        "y": 175.30,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q34_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q34_obs",
        "label": "Obs Q34",
        "page": 2,
        "x": 65.55,
        "y": 201.41,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q35_sim_check",
        "label": "SQ35",
        "page": 2,
        "x": 165.2,
        "y": 205.28,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q35_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q35_nao_check",
        "label": "NQ35",
        "page": 2,
        "x": 184.55,
        "y": 205.28,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q35_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q35_obs",
        "label": "Obs Q35",
        "page": 2,
        "x": 65.55,
        "y": 226.63,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q36_sim_check",
        "label": "SQ36",
        "page": 2,
        "x": 165.2,
        "y": 230.55,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q36_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q36_nao_check",
        "label": "NQ36",
        "page": 2,
        "x": 184.55,
        "y": 230.55,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q36_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q36_obs",
        "label": "Obs Q36",
        "page": 2,
        "x": 65.55,
        "y": 247.78,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q37_sim_check",
        "label": "SQ37",
        "page": 3,
        "x": 165.2,
        "y": 23.93,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q37_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q37_nao_check",
        "label": "NQ37",
        "page": 3,
        "x": 184.66,
        "y": 23.93,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q37_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q37_obs",
        "label": "Obs Q37",
        "page": 3,
        "x": 65.55,
        "y": 45.47,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q38_sim_check",
        "label": "SQ38",
        "page": 3,
        "x": 165.2,
        "y": 49.12,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q38_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q38_nao_check",
        "label": "NQ38",
        "page": 3,
        "x": 184.66,
        "y": 49.12,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q38_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q38_obs",
        "label": "Obs Q38",
        "page": 3,
        "x": 65.55,
        "y": 67.38,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q39_sim_check",
        "label": "SQ39",
        "page": 3,
        "x": 165.2,
        "y": 70.94,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q39_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q39_nao_check",
        "label": "NQ39",
        "page": 3,
        "x": 184.66,
        "y": 70.94,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q39_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q39_obs",
        "label": "Obs Q39",
        "page": 3,
        "x": 65.55,
        "y": 88.44,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q310_sim_check",
        "label": "SQ310",
        "page": 3,
        "x": 165.2,
        "y": 92.04,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q310_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q310_nao_check",
        "label": "NQ310",
        "page": 3,
        "x": 184.66,
        "y": 92.04,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q310_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q310_obs",
        "label": "Obs Q310",
        "page": 3,
        "x": 65.55,
        "y": 113.46,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q311_sim_check",
        "label": "SQ311",
        "page": 3,
        "x": 165.2,
        "y": 117.17,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q311_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q311_nao_check",
        "label": "NQ311",
        "page": 3,
        "x": 184.66,
        "y": 117.17,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q311_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q311_obs",
        "label": "Obs Q311",
        "page": 3,
        "x": 65.55,
        "y": 143.51,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q312_sim_check",
        "label": "SQ312",
        "page": 3,
        "x": 165.2,
        "y": 147.17,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q312_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q312_nao_check",
        "label": "NQ312",
        "page": 3,
        "x": 184.66,
        "y": 147.17,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q312_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q312_obs",
        "label": "Obs Q312",
        "page": 3,
        "x": 65.55,
        "y": 168.73,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q313_sim_check",
        "label": "SQ313",
        "page": 3,
        "x": 165.2,
        "y": 172.32,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q313_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q313_nao_check",
        "label": "NQ313",
        "page": 3,
        "x": 184.66,
        "y": 172.32,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q313_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q313_obs",
        "label": "Obs Q313",
        "page": 3,
        "x": 65.55,
        "y": 188.36,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q314_sim_check",
        "label": "SQ314",
        "page": 3,
        "x": 165.2,
        "y": 191.92,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q314_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q314_nao_check",
        "label": "NQ314",
        "page": 3,
        "x": 184.66,
        "y": 191.92,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q314_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q314_obs",
        "label": "Obs Q314",
        "page": 3,
        "x": 65.55,
        "y": 205.3,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q315_sim_check",
        "label": "SQ315",
        "page": 3,
        "x": 165.2,
        "y": 208.93,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q315_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q315_nao_check",
        "label": "NQ315",
        "page": 3,
        "x": 184.66,
        "y": 208.93,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q315_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q315_obs",
        "label": "Obs Q315",
        "page": 3,
        "x": 65.55,
        "y": 227.43,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q316_sim_check",
        "label": "SQ316",
        "page": 3,
        "x": 165.13,
        "y": 231.15,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q316_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q316_nao_check",
        "label": "NQ316",
        "page": 3,
        "x": 184.66,
        "y": 231.15,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q316_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q316_obs",
        "label": "Obs Q316",
        "page": 3,
        "x": 65.55,
        "y": 249.67,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q317_sim_check",
        "label": "SQ317",
        "page": 4,
        "x": 165.13,
        "y": 23.93,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q317_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q317_nao_check",
        "label": "NQ317",
        "page": 4,
        "x": 184.66,
        "y": 23.93,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q317_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q317_obs",
        "label": "Obs Q317",
        "page": 4,
        "x": 65.55,
        "y": 35.92,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q318_sim_check",
        "label": "SQ318",
        "page": 4,
        "x": 165.13,
        "y": 39.72,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q318_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q318_nao_check",
        "label": "NQ318",
        "page": 4,
        "x": 184.66,
        "y": 39.72,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q318_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q318_obs",
        "label": "Obs Q318",
        "page": 4,
        "x": 65.55,
        "y": 53.09,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q319_sim_check",
        "label": "3.19 SIM",
        "page": 4,
        "x": 165.05,
        "y": 56.88,
        "w": 6.58,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q319_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q319_nao_check",
        "label": "3.19 NÃO",
        "page": 4,
        "x": 184.66,
        "y": 56.88,
        "w": 6.58,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q319_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q319_obs",
        "label": "3.19 Observação",
        "page": 4,
        "x": 65.55,
        "y": 65.87,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q320_sim_check",
        "label": "3.20 SIM",
        "page": 4,
        "x": 165.05,
        "y": 69.68,
        "w": 6.58,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q320_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q320_nao_check",
        "label": "3.20 NÃO",
        "page": 4,
        "x": 184.66,
        "y": 69.68,
        "w": 6.58,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q320_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q320_obs",
        "label": "3.20 Observação",
        "page": 4,
        "x": 65.55,
        "y": 78.78,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q321_sim_check",
        "label": "3.21 SIM",
        "page": 4,
        "x": 165.05,
        "y": 82.64,
        "w": 6.58,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q321_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q321_nao_check",
        "label": "3.21 NÃO",
        "page": 4,
        "x": 184.66,
        "y": 82.64,
        "w": 6.58,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q321_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q321_obs",
        "label": "3.21 Observação",
        "page": 4,
        "x": 65.55,
        "y": 94.78,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q322_sim_check",
        "label": "3.22 SIM",
        "page": 4,
        "x": 165.05,
        "y": 98.61,
        "w": 6.58,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q322_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q322_nao_check",
        "label": "3.22 NÃO",
        "page": 4,
        "x": 184.66,
        "y": 98.61,
        "w": 6.58,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q322_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q322_obs",
        "label": "3.22 Observação",
        "page": 4,
        "x": 65.55,
        "y": 106.32,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q323_sim_check",
        "label": "3.23 SIM",
        "page": 4,
        "x": 165.05,
        "y": 109.98,
        "w": 6.58,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q323_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q323_nao_check",
        "label": "3.23 NÃO",
        "page": 4,
        "x": 184.66,
        "y": 109.98,
        "w": 6.58,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q323_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q323_obs",
        "label": "3.23 Observação",
        "page": 4,
        "x": 65.55,
        "y": 119.23,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q324_sim_check",
        "label": "3.24 SIM",
        "page": 4,
        "x": 165.05,
        "y": 123,
        "w": 6.58,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q324_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q324_nao_check",
        "label": "3.24 NÃO",
        "page": 4,
        "x": 184.66,
        "y": 123,
        "w": 6.58,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q324_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q324_obs",
        "label": "3.24 Observação",
        "page": 4,
        "x": 65.55,
        "y": 132.14,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q325_sim_check",
        "label": "3.25 SIM",
        "page": 4,
        "x": 165.05,
        "y": 135.92,
        "w": 6.58,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q325_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q325_nao_check",
        "label": "3.25 NÃO",
        "page": 4,
        "x": 184.66,
        "y": 135.92,
        "w": 6.58,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q325_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q325_obs",
        "label": "3.25 Observação",
        "page": 4,
        "x": 65.55,
        "y": 154.54,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "comentarios",
        "label": "Comentários",
        "page": 4,
        "x": 20.80,
        "y": 179.17,
        "w": 177.5,
        "fs": 12,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "medicoNome",
        "label": "Nome médico",
        "page": 4,
        "x": 114.82,
        "y": 198.48,
        "w": 82.5,
        "fs": 12,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "medico_unimed_check",
        "label": "Médico Unimed",
        "page": 4,
        "x": 21.16,
        "y": 202.69,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "medicoOrientadorOpcao",
          "equals": "Sim, médico da operadora"
        },
        "unit": "mm"
      },
      {
        "key": "medico_particular_check",
        "label": "Médico Particular",
        "page": 4,
        "x": 21.16,
        "y": 207.58,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "medicoOrientadorOpcao",
          "equals": "Sim, médico particular de minha escolha"
        },
        "unit": "mm"
      },
      {
        "key": "medicoCRM",
        "label": "CRM",
        "page": 4,
        "x": 114.83,
        "y": 209,
        "w": 41.2,
        "fs": 14,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "medicoData",
        "label": "Data médico",
        "page": 4,
        "x": 159.33,
        "y": 209,
        "w": 37.6,
        "fs": 14,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "medico_nao_check",
        "label": "Médico Não",
        "page": 4,
        "x": 21.55,
        "y": 213.57,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "medicoOrientadorOpcao",
          "equals": "Não"
        },
        "unit": "mm"
      },
      {
        "key": "medicoAssinatura",
        "label": "Assinatura médico",
        "page": 4,
        "x": 114.9,
        "y": 220.39,
        "w": 82,
        "fs": 12,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "local",
        "label": "Local",
        "page": 5,
        "x": 19.72,
        "y": 130.90,
        "w": 66.3,
        "fs": 15,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "responsavelData",
        "label": "Data local",
        "page": 5,
        "x": 88.39,
        "y": 130.22,
        "w": 65.4,
        "fs": 15,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "responsavelNome",
        "label": "Nome responsável",
        "page": 5,
        "x": 29.85,
        "y": 169.65,
        "w": 112,
        "fs": 12,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "responsavelCPF",
        "label": "CPF responsável",
        "page": 5,
        "x": 27.45,
        "y": 174.35,
        "w": 70.08,
        "fs": 10,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "termoData",
        "label": "Termo - Data",
        "page": 6,
        "x": 112.38,
        "y": 42.02,
        "w": 67.2,
        "fs": 14,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "termoLocal",
        "label": "Termo - Local",
        "page": 6,
        "x": 54.06,
        "y": 42.60,
        "w": 56,
        "fs": 14,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "termoBeneficiario",
        "label": "Termo - Beneficiário",
        "page": 6,
        "x": 29.68,
        "y": 63.45,
        "w": 148,
        "fs": 12,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "cidE1",
        "label": "CID E1",
        "page": 6,
        "x": 11.16,
        "y": 102.33,
        "w": 15.4,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descE1",
        "label": "Descrição E1",
        "page": 6,
        "x": 27.45,
        "y": 102.33,
        "w": 73.2,
        "fs": 10,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidD1",
        "label": "CID D1",
        "page": 6,
        "x": 99.8,
        "y": 102.33,
        "w": 16.6,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descD1",
        "label": "Descrição D1",
        "page": 6,
        "x": 117.50,
        "y": 102.33,
        "w": 82,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidE2",
        "label": "CID E2",
        "page": 6,
        "x": 11.16,
        "y": 106.96,
        "w": 15.4,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descE2",
        "label": "Descrição E2",
        "page": 6,
        "x": 27.45,
        "y": 106.96,
        "w": 73.2,
        "fs": 10,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidD2",
        "label": "CID D2",
        "page": 6,
        "x": 99.8,
        "y": 106.96,
        "w": 16.6,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descD2",
        "label": "Descrição D2",
        "page": 6,
        "x": 117.50,
        "y": 106.96,
        "w": 82,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidE3",
        "label": "CID E3",
        "page": 6,
        "x": 11.16,
        "y": 111.59,
        "w": 15.4,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descE3",
        "label": "Descrição E3",
        "page": 6,
        "x": 27.45,
        "y": 111.59,
        "w": 73.2,
        "fs": 10,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidD3",
        "label": "CID D3",
        "page": 6,
        "x": 99.8,
        "y": 111.59,
        "w": 16.6,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descD3",
        "label": "Descrição D3",
        "page": 6,
        "x": 117.50,
        "y": 111.59,
        "w": 82,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidE4",
        "label": "CID E4",
        "page": 6,
        "x": 11.16,
        "y": 116.38,
        "w": 15.4,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descE4",
        "label": "Descrição E4",
        "page": 6,
        "x": 27.45,
        "y": 116.38,
        "w": 73.2,
        "fs": 10,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidD4",
        "label": "CID D4",
        "page": 6,
        "x": 99.8,
        "y": 116.38,
        "w": 16.6,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descD4",
        "label": "Descrição D4",
        "page": 6,
        "x": 117.50,
        "y": 116.38,
        "w": 82,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidE5",
        "label": "CID E5",
        "page": 6,
        "x": 11.16,
        "y": 121.11,
        "w": 15.4,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descE5",
        "label": "Descrição E5",
        "page": 6,
        "x": 27.45,
        "y": 121.11,
        "w": 73.2,
        "fs": 10,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidD5",
        "label": "CID D5",
        "page": 6,
        "x": 99.8,
        "y": 121.11,
        "w": 16.6,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descD5",
        "label": "Descrição D5",
        "page": 6,
        "x": 117.50,
        "y": 121.11,
        "w": 82,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidE6",
        "label": "CID E6",
        "page": 6,
        "x": 11.16,
        "y": 125.64,
        "w": 15.4,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descE6",
        "label": "Descrição E6",
        "page": 6,
        "x": 27.45,
        "y": 125.64,
        "w": 73.2,
        "fs": 10,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidD6",
        "label": "CID D6",
        "page": 6,
        "x": 99.8,
        "y": 125.64,
        "w": 16.6,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descD6",
        "label": "Descrição D6",
        "page": 6,
        "x": 117.50,
        "y": 125.64,
        "w": 82,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidE7",
        "label": "CID E7",
        "page": 6,
        "x": 11.16,
        "y": 130.37,
        "w": 15.4,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descE7",
        "label": "Descrição E7",
        "page": 6,
        "x": 27.45,
        "y": 130.37,
        "w": 73.2,
        "fs": 10,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidD7",
        "label": "CID D7",
        "page": 6,
        "x": 99.8,
        "y": 130.37,
        "w": 16.6,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descD7",
        "label": "Descrição D7",
        "page": 6,
        "x": 117.50,
        "y": 130.37,
        "w": 82,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidE8",
        "label": "CID E8",
        "page": 6,
        "x": 11.16,
        "y": 134.6,
        "w": 15.4,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descE8",
        "label": "Descrição E8",
        "page": 6,
        "x": 27.45,
        "y": 134.6,
        "w": 73.2,
        "fs": 10,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidD8",
        "label": "CID D8",
        "page": 6,
        "x": 99.8,
        "y": 134.6,
        "w": 16.6,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descD8",
        "label": "Descrição D8",
        "page": 6,
        "x": 117.50,
        "y": 134.6,
        "w": 82,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidE9",
        "label": "CID E9",
        "page": 6,
        "x": 11.16,
        "y": 139.33,
        "w": 15.4,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descE9",
        "label": "Descrição E9",
        "page": 6,
        "x": 27.45,
        "y": 139.33,
        "w": 73.2,
        "fs": 10,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidD9",
        "label": "CID D9",
        "page": 6,
        "x": 99.8,
        "y": 139.33,
        "w": 16.6,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descD9",
        "label": "Descrição D9",
        "page": 6,
        "x": 117.50,
        "y": 139.33,
        "w": 82,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidE10",
        "label": "CID E10",
        "page": 6,
        "x": 11.16,
        "y": 144.06,
        "w": 15.4,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descE10",
        "label": "Descrição E10",
        "page": 6,
        "x": 27.45,
        "y": 144.06,
        "w": 73.2,
        "fs": 10,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidD10",
        "label": "CID D10",
        "page": 6,
        "x": 99.8,
        "y": 144.06,
        "w": 16.6,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descD10",
        "label": "Descrição D10",
        "page": 6,
        "x": 117.50,
        "y": 144.06,
        "w": 82,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidE11",
        "label": "CID E11",
        "page": 6,
        "x": 11.16,
        "y": 148.89,
        "w": 15.4,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descE11",
        "label": "Descrição E11",
        "page": 6,
        "x": 27.45,
        "y": 148.89,
        "w": 73.2,
        "fs": 10,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidD11",
        "label": "CID D11",
        "page": 6,
        "x": 99.8,
        "y": 148.89,
        "w": 16.6,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descD11",
        "label": "Descrição D11",
        "page": 6,
        "x": 117.50,
        "y": 148.89,
        "w": 82,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidE12",
        "label": "CID E12",
        "page": 6,
        "x": 11.16,
        "y": 153.62,
        "w": 15.4,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descE12",
        "label": "Descrição E12",
        "page": 6,
        "x": 27.45,
        "y": 153.62,
        "w": 73.2,
        "fs": 10,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidD12",
        "label": "CID D12",
        "page": 6,
        "x": 99.8,
        "y": 153.62,
        "w": 16.6,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descD12",
        "label": "Descrição D12",
        "page": 6,
        "x": 117.50,
        "y": 153.62,
        "w": 82,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidE13",
        "label": "CID E13",
        "page": 6,
        "x": 11.16,
        "y": 158.35,
        "w": 15.4,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descE13",
        "label": "Descrição E13",
        "page": 6,
        "x": 27.45,
        "y": 158.35,
        "w": 73.2,
        "fs": 10,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidD13",
        "label": "CID D13",
        "page": 6,
        "x": 99.8,
        "y": 158.35,
        "w": 16.6,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descD13",
        "label": "Descrição D13",
        "page": 6,
        "x": 117.50,
        "y": 158.35,
        "w": 82,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidE14",
        "label": "CID E14",
        "page": 6,
        "x": 11.16,
        "y": 163.18,
        "w": 15.4,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descE14",
        "label": "Descrição E14",
        "page": 6,
        "x": 27.45,
        "y": 163.18,
        "w": 73.2,
        "fs": 10,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidD14",
        "label": "CID D14",
        "page": 6,
        "x": 99.8,
        "y": 163.18,
        "w": 16.6,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descD14",
        "label": "Descrição D14",
        "page": 6,
        "x": 117.50,
        "y": 163.18,
        "w": 82,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidE15",
        "label": "CID E15",
        "page": 6,
        "x": 11.16,
        "y": 167.89,
        "w": 15.4,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descE15",
        "label": "Descrição E15",
        "page": 6,
        "x": 27.45,
        "y": 167.89,
        "w": 73.2,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidD15",
        "label": "CID D15",
        "page": 6,
        "x": 99.8,
        "y": 167.89,
        "w": 16.6,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descD15",
        "label": "Descrição D15",
        "page": 6,
        "x": 117.50,
        "y": 167.89,
        "w": 82,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "termoCPF",
        "label": "Termo - CPF",
        "page": 7,
        "x": 37.1,
        "y": 56.65,
        "w": 61.14,
        "fs": 13,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "termoMedico",
        "label": "Termo - Nome do Médico",
        "page": 7,
        "x": 55.60,
        "y": 68.85,
        "w": 98.77,
        "fs": 12,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "termoCRM",
        "label": "Termo - CRM",
        "page": 7,
        "x": 38.65,
        "y": 72.95,
        "w": 42.33,
        "fs": 12,
        "type": "text",
        "when": null,
        "unit": "mm"
      }
    ],
    "unit": "mm",
    "pageWidth": 210,
    "pageHeight": 297
  },
  "intermed": {
    "operator": "generic",
    "pages": 7,
    "fields": [
      {
        "key": "vinculo_titular_check",
        "label": "Vínculo TITULAR",
        "page": 1,
        "x": 153.73,
        "y": 43.17,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "vinculo",
          "equals": "TITULAR"
        },
        "unit": "mm"
      },
      {
        "key": "vinculo_dependente_check",
        "label": "Vínculo DEPENDENTE",
        "page": 1,
        "x": 167.63,
        "y": 43.17,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "vinculo",
          "equals": "DEPENDENTE"
        },
        "unit": "mm"
      },
      {
        "key": "nome",
        "label": "Nome",
        "page": 1,
        "x": 30.16,
        "y": 42.98,
        "w": 120,
        "fs": 14,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "dataNascimento",
        "label": "Data de nascimento",
        "page": 2,
        "x": 19.45,
        "y": 46.64,
        "w": 43.2,
        "fs": 15,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "peso",
        "label": "Peso",
        "page": 2,
        "x": 64.38,
        "y": 46.64,
        "w": 66.5,
        "fs": 15,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "altura",
        "label": "Altura",
        "page": 2,
        "x": 132.43,
        "y": 46.64,
        "w": 65.6,
        "fs": 15,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "q31_sim_check",
        "label": "SQ31",
        "page": 2,
        "x": 165.39,
        "y": 104.14,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q31_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q31_nao_check",
        "label": "NQ31",
        "page": 2,
        "x": 184.8,
        "y": 104.14,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q31_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q31_obs",
        "label": "Obs Q31",
        "page": 2,
        "x": 65,
        "y": 124.2,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q32_sim_check",
        "label": "SQ32",
        "page": 2,
        "x": 165.39,
        "y": 128.38,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q32_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q32_nao_check",
        "label": "NQ32",
        "page": 2,
        "x": 184.8,
        "y": 128.38,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q32_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q32_obs",
        "label": "Obs Q32",
        "page": 2,
        "x": 65,
        "y": 148.29,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q33_sim_check",
        "label": "SQ33",
        "page": 2,
        "x": 165.39,
        "y": 152.51,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q33_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q33_nao_check",
        "label": "NQ33",
        "page": 2,
        "x": 184.8,
        "y": 152.51,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q33_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q33_obs",
        "label": "Obs Q33",
        "page": 2,
        "x": 65,
        "y": 169.85,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q34_sim_check",
        "label": "SQ34",
        "page": 2,
        "x": 165.39,
        "y": 173.82,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q34_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q34_nao_check",
        "label": "NQ34",
        "page": 2,
        "x": 184.8,
        "y": 173.82,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q34_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q34_obs",
        "label": "Obs Q34",
        "page": 2,
        "x": 65,
        "y": 199.91,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q35_sim_check",
        "label": "SQ35",
        "page": 2,
        "x": 165.39,
        "y": 203.86,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q35_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q35_nao_check",
        "label": "NQ35",
        "page": 2,
        "x": 184.8,
        "y": 203.86,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q35_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q35_obs",
        "label": "Obs Q35",
        "page": 2,
        "x": 65,
        "y": 225.13,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q36_sim_check",
        "label": "SQ36",
        "page": 2,
        "x": 165.39,
        "y": 228.99,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q36_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q36_nao_check",
        "label": "NQ36",
        "page": 2,
        "x": 184.8,
        "y": 228.99,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q36_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q36_obs",
        "label": "Obs Q36",
        "page": 2,
        "x": 65,
        "y": 245.78,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q37_sim_check",
        "label": "SQ37",
        "page": 3,
        "x": 165.45,
        "y": 24.36,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q37_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q37_nao_check",
        "label": "NQ37",
        "page": 3,
        "x": 184.86,
        "y": 24.36,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q37_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q37_obs",
        "label": "Obs Q37",
        "page": 3,
        "x": 65,
        "y": 44.97,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q38_sim_check",
        "label": "SQ38",
        "page": 3,
        "x": 165.45,
        "y": 48.97,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q38_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q38_nao_check",
        "label": "NQ38",
        "page": 3,
        "x": 185.25,
        "y": 48.97,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q38_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q38_obs",
        "label": "Obs Q38",
        "page": 3,
        "x": 65,
        "y": 66.88,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q39_sim_check",
        "label": "SQ39",
        "page": 3,
        "x": 165.45,
        "y": 70.87,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q39_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q39_nao_check",
        "label": "NQ39",
        "page": 3,
        "x": 185.25,
        "y": 70.87,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q39_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q39_obs",
        "label": "Obs Q39",
        "page": 3,
        "x": 65,
        "y": 87.94,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q310_sim_check",
        "label": "SQ310",
        "page": 3,
        "x": 165.45,
        "y": 91.92,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q310_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q310_nao_check",
        "label": "NQ310",
        "page": 3,
        "x": 185.25,
        "y": 91.92,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q310_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q310_obs",
        "label": "Obs Q310",
        "page": 3,
        "x": 65,
        "y": 112.96,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q311_sim_check",
        "label": "SQ311",
        "page": 3,
        "x": 165.45,
        "y": 117.06,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q311_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q311_nao_check",
        "label": "NQ311",
        "page": 3,
        "x": 185.25,
        "y": 117.06,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q311_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q311_obs",
        "label": "Obs Q311",
        "page": 3,
        "x": 65,
        "y": 143.01,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q312_sim_check",
        "label": "SQ312",
        "page": 3,
        "x": 165.45,
        "y": 147.04,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q312_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q312_nao_check",
        "label": "NQ312",
        "page": 3,
        "x": 185.25,
        "y": 147.04,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q312_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q312_obs",
        "label": "Obs Q312",
        "page": 3,
        "x": 65,
        "y": 168.23,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q313_sim_check",
        "label": "SQ313",
        "page": 3,
        "x": 165.45,
        "y": 172.13,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q313_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q313_nao_check",
        "label": "NQ313",
        "page": 3,
        "x": 185.25,
        "y": 172.13,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q313_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q313_obs",
        "label": "Obs Q313",
        "page": 3,
        "x": 65,
        "y": 187.86,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q314_sim_check",
        "label": "SQ314",
        "page": 3,
        "x": 165.45,
        "y": 191.85,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q314_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q314_nao_check",
        "label": "NQ314",
        "page": 3,
        "x": 185.25,
        "y": 191.85,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q314_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q314_obs",
        "label": "Obs Q314",
        "page": 3,
        "x": 65,
        "y": 204.8,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q315_sim_check",
        "label": "SQ315",
        "page": 3,
        "x": 165.45,
        "y": 208.81,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q315_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q315_nao_check",
        "label": "NQ315",
        "page": 3,
        "x": 185.25,
        "y": 208.81,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q315_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q315_obs",
        "label": "Obs Q315",
        "page": 3,
        "x": 65,
        "y": 226.93,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q316_sim_check",
        "label": "SQ316",
        "page": 3,
        "x": 165.45,
        "y": 230.94,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q316_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q316_nao_check",
        "label": "NQ316",
        "page": 3,
        "x": 185.25,
        "y": 230.94,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q316_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q316_obs",
        "label": "Obs Q316",
        "page": 3,
        "x": 65,
        "y": 249.17,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q317_sim_check",
        "label": "SQ317",
        "page": 4,
        "x": 165.45,
        "y": 22.50,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q317_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q317_nao_check",
        "label": "NQ317",
        "page": 4,
        "x": 185.25,
        "y": 22.50,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q317_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q317_obs",
        "label": "Obs Q317",
        "page": 4,
        "x": 65,
        "y": 34.42,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q318_sim_check",
        "label": "SQ318",
        "page": 4,
        "x": 165.45,
        "y": 38.20,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q318_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q318_nao_check",
        "label": "NQ318",
        "page": 4,
        "x": 185.25,
        "y": 38.20,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q318_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q318_obs",
        "label": "Obs Q318",
        "page": 4,
        "x": 65,
        "y": 51.59,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q319_sim_check",
        "label": "3.19 SIM",
        "page": 4,
        "x": 165.38,
        "y": 55.42,
        "w": 6.58,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q319_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q319_nao_check",
        "label": "3.19 NÃO",
        "page": 4,
        "x": 185.25,
        "y": 55.42,
        "w": 6.58,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q319_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q319_obs",
        "label": "3.19 Observação",
        "page": 4,
        "x": 65,
        "y": 64.37,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q320_sim_check",
        "label": "3.20 SIM",
        "page": 4,
        "x": 165.38,
        "y": 68.19,
        "w": 6.58,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q320_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q320_nao_check",
        "label": "3.20 NÃO",
        "page": 4,
        "x": 185.25,
        "y": 68.19,
        "w": 6.58,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q320_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q320_obs",
        "label": "3.20 Observação",
        "page": 4,
        "x": 65,
        "y": 77.28,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q321_sim_check",
        "label": "3.21 SIM",
        "page": 4,
        "x": 165.35,
        "y": 81.17,
        "w": 6.58,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q321_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q321_nao_check",
        "label": "3.21 NÃO",
        "page": 4,
        "x": 185.25,
        "y": 81.17,
        "w": 6.58,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q321_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q321_obs",
        "label": "3.21 Observação",
        "page": 4,
        "x": 65,
        "y": 93.28,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q322_sim_check",
        "label": "3.22 SIM",
        "page": 4,
        "x": 165.35,
        "y": 97.10,
        "w": 6.58,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q322_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q322_nao_check",
        "label": "3.22 NÃO",
        "page": 4,
        "x": 185.25,
        "y": 97.10,
        "w": 6.58,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q322_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q322_obs",
        "label": "3.22 Observação",
        "page": 4,
        "x": 65,
        "y": 104.32,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q323_sim_check",
        "label": "3.23 SIM",
        "page": 4,
        "x": 165.35,
        "y": 108.64,
        "w": 6.58,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q323_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q323_nao_check",
        "label": "3.23 NÃO",
        "page": 4,
        "x": 185.25,
        "y": 108.64,
        "w": 6.58,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q323_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q323_obs",
        "label": "3.23 Observação",
        "page": 4,
        "x": 65,
        "y": 117.23,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q324_sim_check",
        "label": "3.24 SIM",
        "page": 4,
        "x": 165.35,
        "y": 121.60,
        "w": 6.58,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q324_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q324_nao_check",
        "label": "3.24 NÃO",
        "page": 4,
        "x": 185.25,
        "y": 121.60,
        "w": 6.58,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q324_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q324_obs",
        "label": "3.24 Observação",
        "page": 4,
        "x": 65,
        "y": 130.14,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "q325_sim_check",
        "label": "3.25 SIM",
        "page": 4,
        "x": 165.35,
        "y": 134.21,
        "w": 6.58,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q325_resposta",
          "equals": "SIM"
        },
        "unit": "mm"
      },
      {
        "key": "q325_nao_check",
        "label": "3.25 NÃO",
        "page": 4,
        "x": 185.25,
        "y": 134.21,
        "w": 6.58,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "q325_resposta",
          "equals": "NÃO"
        },
        "unit": "mm"
      },
      {
        "key": "q325_obs",
        "label": "3.25 Observação",
        "page": 4,
        "x": 65,
        "y": 151.01,
        "w": 134,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "comentarios",
        "label": "Comentários",
        "page": 4,
        "x": 20.99,
        "y": 176.17,
        "w": 177,
        "fs": 12,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "medicoNome",
        "label": "Nome médico",
        "page": 4,
        "x": 115.82,
        "y": 195.98,
        "w": 82.5,
        "fs": 12,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "medico_unimed_check",
        "label": "Médico Unimed",
        "page": 4,
        "x": 22.16,
        "y": 200.69,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "medicoOrientadorOpcao",
          "equals": "Sim, médico da operadora"
        },
        "unit": "mm"
      },
      {
        "key": "medico_particular_check",
        "label": "Médico Particular",
        "page": 4,
        "x": 22.16,
        "y": 205.08,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "medicoOrientadorOpcao",
          "equals": "Sim, médico particular de minha escolha"
        },
        "unit": "mm"
      },
      {
        "key": "medicoCRM",
        "label": "CRM",
        "page": 4,
        "x": 115.83,
        "y": 206.5,
        "w": 41.2,
        "fs": 14,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "medicoData",
        "label": "Data médico",
        "page": 4,
        "x": 160.33,
        "y": 206.5,
        "w": 37.6,
        "fs": 14,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "medico_nao_check",
        "label": "Médico Não",
        "page": 4,
        "x": 21.68,
        "y": 210.92,
        "w": 6.35,
        "fs": 12,
        "type": "check",
        "when": {
          "field": "medicoOrientadorOpcao",
          "equals": "Não"
        },
        "unit": "mm"
      },
      {
        "key": "medicoAssinatura",
        "label": "Assinatura médico",
        "page": 4,
        "x": 115.9,
        "y": 217.89,
        "w": 82,
        "fs": 12,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "local",
        "label": "Local",
        "page": 5,
        "x": 19.72,
        "y": 112.25,
        "w": 66.3,
        "fs": 15,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "responsavelData",
        "label": "Data local",
        "page": 5,
        "x": 88.39,
        "y": 111.65,
        "w": 65.4,
        "fs": 15,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "responsavelNome",
        "label": "Nome responsável",
        "page": 5,
        "x": 29.7,
        "y": 151.05,
        "w": 112,
        "fs": 12,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "responsavelCPF",
        "label": "CPF responsável",
        "page": 5,
        "x": 27.3,
        "y": 155.72,
        "w": 70.08,
        "fs": 10,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "termoLocal",
        "label": "Termo - Local",
        "page": 6,
        "x": 54.06,
        "y": 47.12,
        "w": 56,
        "fs": 14,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "termoData",
        "label": "Termo - Data",
        "page": 6,
        "x": 112.38,
        "y": 46.1,
        "w": 67.2,
        "fs": 14,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "termoBeneficiario",
        "label": "Termo - Beneficiário",
        "page": 6,
        "x": 29.68,
        "y": 67.81,
        "w": 148,
        "fs": 12,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "cidE1",
        "label": "CID E1",
        "page": 6,
        "x": 11.16,
        "y": 106.33,
        "w": 15.4,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descE1",
        "label": "Descrição E1",
        "page": 6,
        "x": 27.45,
        "y": 106.33,
        "w": 73.2,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidD1",
        "label": "CID D1",
        "page": 6,
        "x": 99.8,
        "y": 106.33,
        "w": 16.6,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descD1",
        "label": "Descrição D1",
        "page": 6,
        "x": 117.50,
        "y": 106.33,
        "w": 82,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidE2",
        "label": "CID E2",
        "page": 6,
        "x": 11.16,
        "y": 110.96,
        "w": 15.4,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descE2",
        "label": "Descrição E2",
        "page": 6,
        "x": 27.45,
        "y": 110.96,
        "w": 73.2,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidD2",
        "label": "CID D2",
        "page": 6,
        "x": 99.8,
        "y": 110.96,
        "w": 16.6,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descD2",
        "label": "Descrição D2",
        "page": 6,
        "x": 117.50,
        "y": 110.96,
        "w": 82,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidE3",
        "label": "CID E3",
        "page": 6,
        "x": 11.16,
        "y": 115.59,
        "w": 15.4,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descE3",
        "label": "Descrição E3",
        "page": 6,
        "x": 27.45,
        "y": 115.59,
        "w": 73.2,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidD3",
        "label": "CID D3",
        "page": 6,
        "x": 99.8,
        "y": 115.59,
        "w": 16.6,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descD3",
        "label": "Descrição D3",
        "page": 6,
        "x": 117.50,
        "y": 115.59,
        "w": 82,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidE4",
        "label": "CID E4",
        "page": 6,
        "x": 11.16,
        "y": 120.38,
        "w": 15.4,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descE4",
        "label": "Descrição E4",
        "page": 6,
        "x": 27.45,
        "y": 120.38,
        "w": 73.2,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidD4",
        "label": "CID D4",
        "page": 6,
        "x": 99.8,
        "y": 120.38,
        "w": 16.6,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descD4",
        "label": "Descrição D4",
        "page": 6,
        "x": 117.50,
        "y": 120.38,
        "w": 82,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidE5",
        "label": "CID E5",
        "page": 6,
        "x": 11.16,
        "y": 125.11,
        "w": 15.4,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descE5",
        "label": "Descrição E5",
        "page": 6,
        "x": 27.45,
        "y": 125.11,
        "w": 73.2,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidD5",
        "label": "CID D5",
        "page": 6,
        "x": 99.8,
        "y": 125.11,
        "w": 16.6,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descD5",
        "label": "Descrição D5",
        "page": 6,
        "x": 117.50,
        "y": 125.11,
        "w": 82,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidE6",
        "label": "CID E6",
        "page": 6,
        "x": 11.16,
        "y": 129.64,
        "w": 15.4,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descE6",
        "label": "Descrição E6",
        "page": 6,
        "x": 27.45,
        "y": 129.64,
        "w": 73.2,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidD6",
        "label": "CID D6",
        "page": 6,
        "x": 99.8,
        "y": 129.64,
        "w": 16.6,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descD6",
        "label": "Descrição D6",
        "page": 6,
        "x": 117.50,
        "y": 129.64,
        "w": 82,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidE7",
        "label": "CID E7",
        "page": 6,
        "x": 11.16,
        "y": 134.37,
        "w": 15.4,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descE7",
        "label": "Descrição E7",
        "page": 6,
        "x": 27.45,
        "y": 134.37,
        "w": 73.2,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidD7",
        "label": "CID D7",
        "page": 6,
        "x": 99.8,
        "y": 134.37,
        "w": 16.6,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descD7",
        "label": "Descrição D7",
        "page": 6,
        "x": 117.50,
        "y": 134.37,
        "w": 82,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidE8",
        "label": "CID E8",
        "page": 6,
        "x": 11.16,
        "y": 139.1,
        "w": 15.4,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descE8",
        "label": "Descrição E8",
        "page": 6,
        "x": 27.45,
        "y": 139.1,
        "w": 73.2,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidD8",
        "label": "CID D8",
        "page": 6,
        "x": 99.8,
        "y": 139.1,
        "w": 16.6,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descD8",
        "label": "Descrição D8",
        "page": 6,
        "x": 117.50,
        "y": 139.1,
        "w": 82,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidE9",
        "label": "CID E9",
        "page": 6,
        "x": 11.16,
        "y": 143.83,
        "w": 15.4,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descE9",
        "label": "Descrição E9",
        "page": 6,
        "x": 27.45,
        "y": 143.83,
        "w": 73.2,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidD9",
        "label": "CID D9",
        "page": 6,
        "x": 99.8,
        "y": 143.83,
        "w": 16.6,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descD9",
        "label": "Descrição D9",
        "page": 6,
        "x": 117.50,
        "y": 143.83,
        "w": 82,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidE10",
        "label": "CID E10",
        "page": 6,
        "x": 11.16,
        "y": 148.56,
        "w": 15.4,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descE10",
        "label": "Descrição E10",
        "page": 6,
        "x": 27.45,
        "y": 148.56,
        "w": 73.2,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidD10",
        "label": "CID D10",
        "page": 6,
        "x": 99.8,
        "y": 148.56,
        "w": 16.6,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descD10",
        "label": "Descrição D10",
        "page": 6,
        "x": 117.50,
        "y": 148.56,
        "w": 82,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidE11",
        "label": "CID E11",
        "page": 6,
        "x": 11.16,
        "y": 153.39,
        "w": 15.4,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descE11",
        "label": "Descrição E11",
        "page": 6,
        "x": 27.45,
        "y": 153.39,
        "w": 73.2,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidD11",
        "label": "CID D11",
        "page": 6,
        "x": 99.8,
        "y": 153.39,
        "w": 16.6,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descD11",
        "label": "Descrição D11",
        "page": 6,
        "x": 117.50,
        "y": 153.39,
        "w": 82,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidE12",
        "label": "CID E12",
        "page": 6,
        "x": 11.16,
        "y": 158.12,
        "w": 15.4,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "cidD12",
        "label": "CID D12",
        "page": 6,
        "x": 99.8,
        "y": 158.12,
        "w": 16.6,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descD12",
        "label": "Descrição D12",
        "page": 6,
        "x": 117.50,
        "y": 158.12,
        "w": 82,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "descE12",
        "label": "Descrição E12",
        "page": 6,
        "x": 27.45,
        "y": 158.38,
        "w": 73.2,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidE13",
        "label": "CID E13",
        "page": 6,
        "x": 11.16,
        "y": 162.85,
        "w": 15.4,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descE13",
        "label": "Descrição E13",
        "page": 6,
        "x": 27.45,
        "y": 162.85,
        "w": 73.2,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidD13",
        "label": "CID D13",
        "page": 6,
        "x": 99.8,
        "y": 162.85,
        "w": 16.6,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descD13",
        "label": "Descrição D13",
        "page": 6,
        "x": 117.50,
        "y": 162.85,
        "w": 82,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidE14",
        "label": "CID E14",
        "page": 6,
        "x": 11.16,
        "y": 167.18,
        "w": 15.4,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descE14",
        "label": "Descrição E14",
        "page": 6,
        "x": 27.45,
        "y": 167.18,
        "w": 73.2,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidD14",
        "label": "CID D14",
        "page": 6,
        "x": 99.8,
        "y": 167.18,
        "w": 16.6,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descD14",
        "label": "Descrição D14",
        "page": 6,
        "x": 117.50,
        "y": 167.18,
        "w": 82,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "cidE15",
        "label": "CID E15",
        "page": 6,
        "x": 11.16,
        "y": 171.89,
        "w": 15.4,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "cidD15",
        "label": "CID D15",
        "page": 6,
        "x": 99.8,
        "y": 171.89,
        "w": 16.6,
        "fs": 10,
        "type": "text",
        "when": null,
        "align": "center",
        "unit": "mm"
      },
      {
        "key": "descD15",
        "label": "Descrição D15",
        "page": 6,
        "x": 117.50,
        "y": 171.89,
        "w": 82,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "descE15",
        "label": "Descrição E15",
        "page": 6,
        "x": 27.95,
        "y": 172.39,
        "w": 73.2,
        "fs": 11,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "termoCPF",
        "label": "Termo - CPF",
        "page": 7,
        "x": 37.09,
        "y": 60.54,
        "w": 61.27,
        "fs": 13,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "termoMedico",
        "label": "Termo - Nome do Médico",
        "page": 7,
        "x": 55.5,
        "y": 72.98,
        "w": 98.98,
        "fs": 12,
        "type": "text",
        "when": null,
        "unit": "mm"
      },
      {
        "key": "termoCRM",
        "label": "Termo - CRM",
        "page": 7,
        "x": 38.59,
        "y": 76.85,
        "w": 42.33,
        "fs": 12,
        "type": "text",
        "when": null,
        "unit": "mm"
      }
    ],
    "unit": "mm",
    "pageWidth": 210,
    "pageHeight": 297
  }
};

window.PDF_POSITION_SCHEMA = window.PDF_POSITION_SCHEMAS.unimed;
