
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'E:/FRONT_END/Ahmed Menisy/js/Git/E-Commerce/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "redirectTo": "/FRONT_END/Ahmed%20Menisy/js/Git/E-Commerce/home",
    "route": "/FRONT_END/Ahmed%20Menisy/js/Git/E-Commerce"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-YCVDLBI7.js",
      "chunk-YJIYRGSE.js",
      "chunk-RUZQIGYV.js"
    ],
    "route": "/FRONT_END/Ahmed%20Menisy/js/Git/E-Commerce/login"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DR66SAD2.js",
      "chunk-YJIYRGSE.js",
      "chunk-RUZQIGYV.js"
    ],
    "route": "/FRONT_END/Ahmed%20Menisy/js/Git/E-Commerce/register"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-QZMFPNAN.js",
      "chunk-YJIYRGSE.js",
      "chunk-RUZQIGYV.js"
    ],
    "route": "/FRONT_END/Ahmed%20Menisy/js/Git/E-Commerce/forgot"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-LBIGOQEW.js",
      "chunk-TNFQR5OW.js",
      "chunk-HRM5MDVA.js"
    ],
    "route": "/FRONT_END/Ahmed%20Menisy/js/Git/E-Commerce/home"
  },
  {
    "renderMode": 0,
    "route": "/FRONT_END/Ahmed%20Menisy/js/Git/E-Commerce/cart"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-L7FA5R7L.js",
      "chunk-7Z63337U.js",
      "chunk-RUZQIGYV.js",
      "chunk-HRM5MDVA.js"
    ],
    "route": "/FRONT_END/Ahmed%20Menisy/js/Git/E-Commerce/products"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-WPVX4M5H.js"
    ],
    "route": "/FRONT_END/Ahmed%20Menisy/js/Git/E-Commerce/brands"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ZKEYYA5A.js",
      "chunk-TNFQR5OW.js",
      "chunk-7Z63337U.js",
      "chunk-RUZQIGYV.js"
    ],
    "route": "/FRONT_END/Ahmed%20Menisy/js/Git/E-Commerce/categories"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-SS4T4Z3V.js"
    ],
    "route": "/FRONT_END/Ahmed%20Menisy/js/Git/E-Commerce/allorders"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-VYWIXQ3R.js"
    ],
    "route": "/FRONT_END/Ahmed%20Menisy/js/Git/E-Commerce/details/*/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-JFWFHOAG.js",
      "chunk-YJIYRGSE.js",
      "chunk-RUZQIGYV.js"
    ],
    "route": "/FRONT_END/Ahmed%20Menisy/js/Git/E-Commerce/checkout/*"
  },
  {
    "renderMode": 0,
    "route": "/FRONT_END/Ahmed%20Menisy/js/Git/E-Commerce/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 13693, hash: '619d9835178c9e82e267cba2b818f850cd643ade28f668692c00ed21f6a2cba5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3366, hash: '50bc5218520bf0dfe23740c331e60633547b8b04d3a12adcb6856f11d761a109', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-36DBCPFE.css': {size: 188946, hash: '+q3JJq1jFs0', text: () => import('./assets-chunks/styles-36DBCPFE_css.mjs').then(m => m.default)}
  },
};
