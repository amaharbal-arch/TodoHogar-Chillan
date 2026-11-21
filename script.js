const CLP = n => '$' + Math.round(n).toLocaleString('es-CL');
const $ = id => document.getElementById(id);

const FLOW_CONFIG = {
  apiKey:      '359FDDFB-986D-4813-B1DA-21L879B274A9',
  secretKey:   '25693da24b99461c9c71ae945371889033f02861',
  return_url:  'https://todohogarchillan.vercel.app/api/flow',
  confirm_url: 'https://todohogarchillan.vercel.app/api/flow',const CLP = n => '$' + Math.round(n).toLocaleString('es-CL');
const $ = id => document.getElementById(id);

const FLOW_CONFIG = {
  apiKey:      '359FDDFB-986D-4813-B1DA-21L879B274A9',
  secretKey:   '25693da24b99461c9c71ae945371889033f02861',
  return_url:  'https://todohogarchillan.vercel.app/api/flow',
  confirm_url: 'https://todohogarchillan.vercel.app/api/flow',
  sandboxUrl:  'https://sandbox.flow.cl/api/payment/create',
  simulate:    false
};

/* =====================================================================
   ESTRUCTURA DE PRODUCTOS (3 Principales + 4 Complementarios, todos con 3D)
   ===================================================================== */
const PRODUCTS = [
  // --- 3 PRODUCTOS PRINCIPALES ---
  {
    id: 'casco', 
    name: 'Panel Techo Metalpol', 
    cat: 'Mejoramiento', 
    price: 34990, 
    pesoKg: 12, 
    inst: 15000, 
    emoji: '🧱', 
    bg: '#ffffff',
    desc: 'Panel sándwich estructural para techumbre y cubiertas con aislación térmica incorporada. Máxima eficiencia para el clima de Ñuble.',
    specs: '<b>Dimensiones:</b> 1x2m<br><b>Espesor:</b> 50mm<br><b>Aislación:</b> Poliuretano',
    glbSrc: 'https://res.cloudinary.com/deqk2tmer/image/upload/v1793832812/panel_techo_metalpol_gpumu8.glb',
    img:'https://res.cloudinary.com/deqk2tmer/image/upload/v1793840292/panel_jsscju.png'
  },
  {
    id: 'vanitorio_madera', 
    name: 'Vanitorio de Madera Noble con Cubierta de Mármol', 
    cat: 'Mejoramiento', 
    price: 149900, 
    pesoKg: 32, 
    inst: 25000, 
    emoji: '🪞', 
    bg: '#ffffff',
    desc: 'Mueble vanitorio de madera con lavavoz empotrado y cajonera lateral. Diseño elegante para baños residenciales. Activa recargo por carga pesada.',
    specs: '<b>Dimensiones:</b> 100 x 50 x 85 cm<br><b>Material:</b> Madera noble y mármol sintético<br><b>Incluye:</b> Grifería monomando',
    glbSrc: 'https://res.cloudinary.com/deqk2tmer/image/upload/v1794012647/Bathroom_vanity_3D_qewkny.glb', 
    img: 'https://res.cloudinary.com/deqk2tmer/image/upload/v1794012637/Bathroom_vanity_fdyz5p.png'
  },
  {
    id: 'estufa_pellet', 
    name: 'Estufa a Pellet de Alta Eficiencia', 
    cat: 'Carga pesada', 
    price: 549990, 
    pesoKg: 85, 
    inst: 60000, 
    emoji: '🔥', 
    bg: '#ffffff',
    desc: 'Sistema de calefacción ecológica para el hogar con estanque de alta capacidad. Ideal para el invierno en Ñuble.',
    specs: '<b>Potencia:</b> 9 kW (hasta 120 m²)<br><b>Estanque:</b> 15 kg<br><b>Consumo:</b> 0.8 - 1.8 kg/h',
    glbSrc: 'https://res.cloudinary.com/deqk2tmer/image/upload/v1794012825/estufa_3d_wood_stove_wmwohu.glb', 
    img: 'https://res.cloudinary.com/deqk2tmer/image/upload/v1794012817/estufa_aueaab.png'
  },

  // --- 4 PRODUCTOS COMPLEMENTARIOS ---
  {
    id: 'taladro', 
    name: 'Taladro Percutor Inalámbrico 20V', 
    cat: 'Herramientas', 
    price: 89990, 
    pesoKg: 5, 
    inst: 0, 
    emoji: '🔧', 
    bg: '#ffffff',
    desc: 'Taladro percutor a batería de litio 20V con maleta y accesorios para instalaciones domiciliarias.',
    specs: '<b>Mandril:</b> 13 mm autoperforante<br><b>Batería:</b> 2.0 Ah Ion-Litio<br><b>Torque:</b> 50 Nm',
    glbSrc: 'https://res.cloudinary.com/deqk2tmer/image/upload/v1793999107/taladro_parkside_lidl_wuiylf.glb', 
    img: 'https://res.cloudinary.com/deqk2tmer/image/upload/v1793999100/taladro_ekcx2b.png'
  },
  {
    id: 'lampara_mural', 
    name: 'Apliqué de Pared Estilo Clásico con Cúpula', 
    cat: 'Accesorios', 
    price: 19990, 
    pesoKg: 2, 
    inst: 12000, 
    bg: '#ffffff',
    desc: 'Lámpara de muro decorativa con base de bronce envejecido y pantalla de vidrio opal con relieve.',
    specs: '<b>Socket:</b> E27 (compatible LED)<br><b>Material:</b> Aleación metálica y vidrio texturizado<br><b>Uso:</b> Interior / Exterior techado',
    glbSrc: 'https://res.cloudinary.com/deqk2tmer/image/upload/v1794013036/victorian_wall_lamp_cxmzct.glb', 
    img: 'https://res.cloudinary.com/deqk2tmer/image/upload/v1794013028/lampara_oigotu.png'
  },
 {
    id: 'vanitorio_ceramica', 
    name: 'Vanitorio Compacto con Loza Blanca', 
    cat: 'Mejoramiento', 
    price: 89990, 
    pesoKg: 24, 
    inst: 18000, 
    bg: '#ffffff',
    desc: 'Mueble de piso con patas cromadas y lavamanos de loza incorporado, optimizado para espacios modernos.',
    specs: '<b>Dimensiones:</b> 60 x 45 x 80 cm<br><b>Material:</b> Melamina antihumedad y loza<br><b>Uso:</b> Baños principales o de visitas',
    glbSrc: 'https://res.cloudinary.com/deqk2tmer/image/upload/v1794013140/sink_with_faucet_g7qbu5.glb', 
    img: 'https://res.cloudinary.com/deqk2tmer/image/upload/v1794013137/lavamano_qfe0yz.png'
  },
 {
    id: 'caja_herramientas', 
    name: 'Caja de Herramientas Modular de Alto Impacto', 
    cat: 'Herramientas', 
    price: 24990, 
    pesoKg: 4, 
    inst: 0, 
    emoji: '📦', 
    bg: '#ffffff',
    desc: 'Maleta organizadora reforzada con cierres metálicos y bandeja interior para herramientas de mano y accesorios.',
    specs: '<b>Material:</b> Polímero industrial reforzado<br><b>Capacidad:</b> 22 pulgadas<br><b>Seguridad:</b> Cierres metálicos antideslizantes',
    glbSrc: 'https://res.cloudinary.com/deqk2tmer/image/upload/v1794013242/toolbox_dpoevg.glb', 
    img: 'https://res.cloudinary.com/deqk2tmer/image/upload/v1794013238/caja_de_herramientas_gjlplh.png'
  },
];

const ZONES = {
  urbana:    {label:'Zona urbana',    base:9990,  heavy:8000,  instX:1},
  periurbana:{label:'Zona periurbana',base:14990, heavy:15000, instX:1.2},
  rural:     {label:'Zona rural',     base:22990, heavy:25000, instX:1.5}
};
const COMUNAS = {
  'Chillán':'urbana','Chillán Viejo':'urbana','Bulnes':'periurbana','San Carlos':'periurbana','Pinto':'periurbana',
  'Coihueco':'periurbana','El Carmen':'rural','Pemuco':'rural','Yungay':'rural','Quillón':'periurbana','San Ignacio':'rural','Quirihue':'rural'
};

const SUPABASE_URL = 'https://jbanwtqelgjrvvvmyofu.supabase.co';
const SUPABASE_KEY = 'sb_publishable_g9Q1remR_r4gfNeofCNVFQ_GAoNtBvb';
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const Auth = (() => {
  let mode = 'in', afterLogin = null, currentUser = null;

  const current = () => currentUser;

  function render(){
    $('btnLogin').hidden = !!currentUser; 
    $('userBox').hidden = !currentUser;
    if (currentUser) {
      const displayName = currentUser.user_metadata?.full_name || currentUser.email;
      $('userName').textContent = '👤 ' + displayName;
    }
  }

  function setMode(m){
    mode = m;
    $('tabIn').classList.toggle('on', m === 'in'); 
    $('tabUp').classList.toggle('on', m === 'up');
    $('aName').hidden = m === 'in';
    $('authSubmit').textContent = m === 'in' ? 'Ingresar' : 'Crear cuenta';
    $('aPass').autocomplete = m === 'in' ? 'current-password' : 'new-password';
    error('');
  }

  function error(msg){ $('authErr').hidden = !msg; $('authErr').textContent = msg; }
  
  function open(cb, msg){ afterLogin = cb || null; setMode('in'); $('authForm').reset(); if (msg) error(msg); $('authModal').classList.add('on'); }
  
  function close(){ $('authModal').classList.remove('on'); afterLogin = null; }

  async function submit(e){
    e.preventDefault();
    const mail = $('aMail').value.trim().toLowerCase();
    const pass = $('aPass').value;
    const name = $('aName').value.trim();

    if (!/^\S+@\S+\.\S+$/.test(mail)) return error('Ingresa un correo válido.');
    if (pass.length < 6) return error('La contraseña debe tener al menos 6 caracteres.');

    $('authSubmit').disabled = true;

    try {
      if (mode === 'up') {
        if (!name) { $('authSubmit').disabled = false; return error('Ingresa tu nombre.'); }
        
        const { data, error: err } = await supabaseClient.auth.signUp({
          email: mail,
          password: pass,
          options: { data: { full_name: name } }
        });
        
        if (err) throw err;
        currentUser = data.user;
      } else {
        const { data, error: err } = await supabaseClient.auth.signInWithPassword({
          email: mail,
          password: pass
        });
        
        if (err) throw err;
        currentUser = data.user;
      }

      const cb = afterLogin; 
      close(); 
      render(); 
      if (cb) cb();

    } catch (err) {
      error(err.message || 'Error de autenticación.');
    } finally {
      $('authSubmit').disabled = false;
    }
  }

  async function logout(){
    await supabaseClient.auth.signOut();
    currentUser = null;
    render();
  }

  async function init(){
    $('btnLogin').onclick = () => open();
    $('btnLogout').onclick = logout;
    $('authClose').onclick = close;
    $('tabIn').onclick = () => setMode('in'); 
    $('tabUp').onclick = () => setMode('up');
    $('authForm').addEventListener('submit', submit);

    $('btnGoogle').onclick = async () => {
      await supabaseClient.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: window.location.origin + '/tienda.html' }
      });
    };

    const { data } = await supabaseClient.auth.getSession();
    currentUser = data.session?.user || null;
    render();

    supabaseClient.auth.onAuthStateChange((_event, session) => {
      currentUser = session?.user || null;
      render();
    });
  }

  return {init, open, current};
})();

const Cart = (() => {
  let items = {};
  const add = id => { items[id] = (items[id]||0) + 1; update(); };
  const chg = (id, d) => { items[id] = (items[id]||0) + d; if (items[id] <= 0) delete items[id]; update(); };
  const clear = () => { items = {}; localStorage.removeItem('th_cart'); update(); };
  function calc(){
    const zone = ZONES[COMUNAS[$('comuna').value]] || null;
    const list = Object.entries(items).map(([id,q]) => ({p: PRODUCTS.find(x => x.id === id), q}));
    const sub = list.reduce((s,i) => s + i.p.price*i.q, 0);
    const heavy = list.some(i => i.p.pesoKg > 30);
    const desp = zone && list.length ? zone.base : 0;
    const rec = zone && heavy ? zone.heavy : 0;
    const inst = zone && $('inst').checked ? list.reduce((s,i) => s + i.p.inst*zone.instX*i.q, 0) : 0;
    return {zone, list, sub, desp, rec, inst, heavy, total: sub+desp+rec+inst};
  }
  function update(){
    const c = calc();
    $('cnt').textContent = Object.values(items).reduce((a,b) => a+b, 0);
    $('items').innerHTML = c.list.length ? c.list.map(i => `
      <div class="item">
        <img class="item-thumb" src="${i.p.img}" alt="${i.p.name}">
        <span class="n">${i.p.name}<br><b>${CLP(i.p.price*i.q)}</b></span>
        <span class="qty"><button onclick="Cart.chg('${i.p.id}',-1)">−</button> ${i.q} <button onclick="Cart.chg('${i.p.id}',1)">+</button></span>
      </div>`).join('')
      : '<p class="empty">Tu carro está vacío. Agrega un producto del catálogo.</p>';
    $('sSub').textContent = CLP(c.sub); $('sDesp').textContent = CLP(c.desp);
    $('sRec').textContent = CLP(c.rec); $('sInst').textContent = CLP(c.inst); $('sTot').textContent = CLP(c.total);
    const z = c.zone;
    $('zoneInfo').className = 'note' + (c.heavy && z ? ' warn' : '');
    $('zoneInfo').innerHTML = !z ? 'Selecciona tu comuna para calcular despacho, recargo e instalación.'
      : `<b>${z.label}</b> · despacho base ${CLP(z.base)}. ` + (c.heavy
        ? `⚠️ Aplica recargo por carga pesada: <b>${CLP(z.heavy)}</b>.`
        : `Recargo de ${CLP(z.heavy)} solo si tu carro incluye productos de más de 30 kg.`);
    $('instInfo').textContent = z ? `Desde ${CLP(18000*z.instX)} por producto instalable en tu zona.` : 'Disponible según tu comuna.';
    $('payErr').hidden = true;
    localStorage.setItem('th_cart', JSON.stringify({ items, comuna: $('comuna').value, inst: $('inst').checked }));
  }
  
  function init(){
    $('comuna').innerHTML = '<option value="">Selecciona tu comuna…</option>' + Object.keys(COMUNAS).map(k => `<option>${k}</option>`).join('');
    $('comuna').onchange = update; $('inst').onchange = update;
    try {
      const saved = JSON.parse(localStorage.getItem('th_cart'));
      if (saved) {
        items = saved.items || {};
        if (saved.comuna) $('comuna').value = saved.comuna;
        $('inst').checked = !!saved.inst;
      }
    } catch (_) {}
    update();
  }
  return {init, add, chg, clear, calc};
})();

const Catalog = (() => {
  const card = p => `
    <article class="card">
      <div class="thumb" style="background:${p.bg}">${p.img ? `<img src="${p.img}" alt="${p.name}">` : p.emoji}</div>
      <div class="b">
        <span class="tag ${p.pesoKg>30?'':'n'}">${p.cat}</span>
        <h3 style="font-size:1rem">${p.name}</h3>
        <div class="meta">Peso aprox.: ${p.pesoKg} kg${p.inst>0?' · Instalación disponible':''}</div>
        <div class="price">${CLP(p.price)}</div>
        <button class="btn" onclick="Cart.add('${p.id}')">Agregar al carro</button>
        ${p.glbSrc ? `<button class="btn o" onclick="Viewer3D.show('${p.id}')">Ver en 3D</button>` : ''}
      </div>
    </article>`;
  function render(filter = ''){
    const f = filter.toLowerCase();
    const list = PRODUCTS.filter(p => (p.name + ' ' + p.cat).toLowerCase().includes(f));
    const main = list.slice(0, 3), extra = list.slice(3, 7);
    $('gridMain').innerHTML = main.map(card).join(''); $('gridExtra').innerHTML = extra.map(card).join('');
    $('grpMain').hidden = !main.length; $('grpExtra').hidden = !extra.length; $('noRes').hidden = list.length > 0;
  }
  return {init: () => { $('q').oninput = e => render(e.target.value); render(); }};
})();

const Viewer3D = (() => {
  let currentId = null;
  function load(id){
    const p = PRODUCTS.find(x => x.id === id); if (!p || !p.glbSrc) return;
    currentId = id;
    $('mv').src = p.glbSrc; 
    $('mv').alt = 'Modelo 3D: ' + p.name;
    $('mvTitle').textContent = p.name;
    $('mvDesc').textContent = p.desc;
    $('mvSpecs').innerHTML = `<b>Especificaciones Técnicas:</b><br>` + (p.specs || '');
  }
  const show = id => { load(id); $('simulador').scrollIntoView({behavior:'smooth'}); };
  function init(){
    $('mvAdd').onclick = () => currentId && Cart.add(currentId);
    load(PRODUCTS[0].id);
  }
  return {init, show};
})();

const Checkout = (() => {
  const box = () => $('payBox');
  const close = () => $('payModal').classList.remove('on');
  const openModal = html => { box().innerHTML = html; $('payModal').classList.add('on'); };
  const fail = msg => { $('payErr').textContent = msg; $('payErr').hidden = false; };

  function start(){
    const c = Cart.calc();
    if (!c.list.length) return fail('Agrega al menos un producto al carro.');
    if (!$('comuna').value) { $('logistica').scrollIntoView({behavior:'smooth'}); return fail('Selecciona tu comuna de despacho.'); }
    if (!Auth.current()) return Auth.open(start, 'Inicia sesión o regístrate para continuar con el pago.');
    $('payErr').hidden = true;
    methods(c);
  }

function methods(c){
    openModal(`<button class="x" onclick="Checkout.close()">×</button>
      <h3>Método de pago</h3>
      <p class="meta" style="margin-bottom:12px">Total: <b>${CLP(c.total)}</b> · Despacho a ${$('comuna').value}${$('inst').checked?' con instalación certificada':''}</p>
      <div class="pm-stack">
        <label class="pm">
          <input type="radio" name="pm" value="flow" checked>
          <div class="pm-body">
            <div>
              <b>Flow</b> <span class="meta">(Pago Web · Tarjetas y Transferencias)</span>
            </div>
            <div class="pm-logos" aria-label="Medios aceptados en Chile">
              <svg viewBox="0 0 64 24" height="22" width="48" role="img" aria-label="Visa" style="background:#fff;border:1px solid #e4e7eb;border-radius:4px;padding:2px 6px;">
                <text x="6" y="17" font-family="system-ui,sans-serif" font-weight="900" font-style="italic" font-size="15" fill="#1a1f71">VISA</text>
              </svg>
              <svg viewBox="0 0 44 24" height="22" width="36" role="img" aria-label="Mastercard" style="background:#fff;border:1px solid #e4e7eb;border-radius:4px;padding:2px 6px;">
                <circle cx="16" cy="12" r="8" fill="#eb001b"/>
                <circle cx="28" cy="12" r="8" fill="#f79e1b" fill-opacity="0.85"/>
              </svg>
              <svg viewBox="0 0 24 24" height="22" width="28" role="img" aria-label="Débito / Crédito" style="background:#fff;border:1px solid #e4e7eb;border-radius:4px;padding:2px 6px;" fill="none" stroke="#1f2933" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="2"/>
                <line x1="2" y1="10" x2="22" y2="10"/>
              </svg>
              <svg viewBox="0 0 24 24" height="22" width="28" role="img" aria-label="Transferencia bancaria" style="background:#fff;border:1px solid #e4e7eb;border-radius:4px;padding:2px 6px;" fill="none" stroke="#1d4e89" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 10l9-7 9 7"/>
                <path d="M5 10v8M10 10v8M14 10v8M19 10v8"/>
                <path d="M2 20h20"/>
              </svg>
            </div>
          </div>
        </label>
        <button class="btn" id="goPay">Pagar ${CLP(c.total)}</button>
        <button class="btn o" onclick="Checkout.close()">Cancelar</button>
      </div>`);
    $('goPay').onclick = () => payWithFlow(c);
  }
 
  function flowPayload(c){
    const s = Auth.current(), order = 'TH-' + Date.now().toString().slice(-8);
    return { apiKey: FLOW_CONFIG.apiKey, commerceOrder: order, subject: 'Compra Todohogar Chillán',
             currency: 'CLP', amount: c.total, email: s.email,
             urlConfirmation: FLOW_CONFIG.confirm_url, urlReturn: FLOW_CONFIG.return_url };
  }

  async function signParams(params, secretKey) {
    const keys = Object.keys(params).sort();
    const toSign = keys.map(k => `${k}${params[k]}`).join('');
    const enc = new TextEncoder();
    const key = await crypto.subtle.importKey('raw', enc.encode(secretKey), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
    const signature = await crypto.subtle.sign('HMAC', key, enc.encode(toSign));
    return Array.from(new Uint8Array(signature)).map(b => b.toString(16).padStart(2, '0')).join('');
  }

  async function payWithFlow(c){
    const data = flowPayload(c);
    if (!FLOW_CONFIG.simulate) {
      openModal('<p class="ok"><span class="big">🔄</span><br>Conectando con el servidor seguro...</p>');

      try {
        const response = await fetch('/api/flow', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        const result = await response.json();
        
        if (result.url && result.token) {
          localStorage.setItem('th_pending_order', JSON.stringify({
            method: 'Flow',
            total: c.total,
            comuna: $('comuna').value,
            inst: $('inst').checked
          }));
          window.location.href = result.url + '?token=' + result.token;
        } else {
          openModal(`<div class="ok"><span class="big">❌</span><h3>Error de Flow</h3><p class="meta" style="margin:8px 0 16px">${result.message || 'Respuesta inválida del servidor'}</p><button class="btn" onclick="Checkout.start()">Volver a intentar</button></div>`);
        }
      } catch (err) {
        openModal(`<div class="ok"><span class="big">❌</span><h3>Error de Conexión</h3><p class="meta" style="margin:8px 0 16px">${err.message}</p><button class="btn" onclick="Checkout.start()">Volver a intentar</button></div>`);
      }
    }
  }

  function success(c, method){
    openModal(`<div class="ok"><span class="big">✅</span>
      <h3 style="margin:10px 0 6px">¡Gracias por tu compra!</h3>
      <p class="meta" style="margin-bottom:10px">Tu pedido en Todohogar Chillán fue procesado correctamente.</p>
      <p class="meta">Método: <b>${method}</b> · Total pagado: <b>${CLP(c.total)}</b></p>
      <p class="meta" style="margin:8px 0 18px">Despacho registrado a <b>${$('comuna').value}</b>${$('inst').checked?' con instalación domiciliaria':''}.</p>
      <div class="row" style="gap:8px;flex-wrap:wrap">
        <button class="btn" style="flex:1" onclick="Cart.clear(); Checkout.close()">Seguir comprando</button>
        <button class="btn o" style="flex:1" onclick="Cart.clear(); Checkout.close(); window.scrollTo({top:0,behavior:'smooth'})">Volver a la página</button>
      </div></div>`);
  }
    function checkReturn(){ const r = localStorage.getItem('th_pending_order'); const p = new  URLSearchParams(location.search); if (!r || (!p.get('token') && !p.get('paid') && !p.get('status'))) return; localStorage.removeItem('th_pending_order'); try { const o = JSON.parse(r); if (o.comuna) $('comuna').value = o.comuna; $('inst').checked = !!o.inst; success({ total: o.total || 0 }, o.method || 'Flow'); history.replaceState({}, '', location.pathname); } catch (_) {} }
  return {start, close, checkReturn};
})();

document.addEventListener('DOMContentLoaded', () => {
  Auth.init();
  Cart.init();
  Catalog.init();
  Viewer3D.init();
  Checkout.checkReturn();
  $('pay').onclick = Checkout.start;
});
  sandboxUrl:  'https://sandbox.flow.cl/api/payment/create',
  simulate:    false
};

/* =====================================================================
   ESTRUCTURA DE PRODUCTOS (3 Principales + 4 Complementarios, todos con 3D)
   ===================================================================== */
const PRODUCTS = [
  // --- 3 PRODUCTOS PRINCIPALES ---
  {
    id: 'casco', 
    name: 'Panel Techo Metalpol', 
    cat: 'Mejoramiento', 
    price: 34990, 
    pesoKg: 12, 
    inst: 15000, 
    emoji: '🧱', 
    bg: '#ffffff',
    desc: 'Panel sándwich estructural para techumbre y cubiertas con aislación térmica incorporada. Máxima eficiencia para el clima de Ñuble.',
    specs: '<b>Dimensiones:</b> 1x2m<br><b>Espesor:</b> 50mm<br><b>Aislación:</b> Poliuretano',
    glbSrc: 'https://res.cloudinary.com/deqk2tmer/image/upload/v1793832812/panel_techo_metalpol_gpumu8.glb',
    img:'https://res.cloudinary.com/deqk2tmer/image/upload/v1793840292/panel_jsscju.png'
  },
  {
    id: 'vanitorio_madera', 
    name: 'Vanitorio de Madera Noble con Cubierta de Mármol', 
    cat: 'Mejoramiento', 
    price: 149900, 
    pesoKg: 32, 
    inst: 25000, 
    emoji: '🪞', 
    bg: '#ffffff',
    desc: 'Mueble vanitorio de madera con lavavoz empotrado y cajonera lateral. Diseño elegante para baños residenciales. Activa recargo por carga pesada.',
    specs: '<b>Dimensiones:</b> 100 x 50 x 85 cm<br><b>Material:</b> Madera noble y mármol sintético<br><b>Incluye:</b> Grifería monomando',
    glbSrc: 'https://res.cloudinary.com/deqk2tmer/image/upload/v1794012647/Bathroom_vanity_3D_qewkny.glb', 
    img: 'https://res.cloudinary.com/deqk2tmer/image/upload/v1794012637/Bathroom_vanity_fdyz5p.png'
  },
  {
    id: 'estufa_pellet', 
    name: 'Estufa a Pellet de Alta Eficiencia', 
    cat: 'Carga pesada', 
    price: 549990, 
    pesoKg: 85, 
    inst: 60000, 
    emoji: '🔥', 
    bg: '#ffffff',
    desc: 'Sistema de calefacción ecológica para el hogar con estanque de alta capacidad. Ideal para el invierno en Ñuble.',
    specs: '<b>Potencia:</b> 9 kW (hasta 120 m²)<br><b>Estanque:</b> 15 kg<br><b>Consumo:</b> 0.8 - 1.8 kg/h',
    glbSrc: 'https://res.cloudinary.com/deqk2tmer/image/upload/v1794012825/estufa_3d_wood_stove_wmwohu.glb', 
    img: 'https://res.cloudinary.com/deqk2tmer/image/upload/v1794012817/estufa_aueaab.png'
  },

  // --- 4 PRODUCTOS COMPLEMENTARIOS ---
  {
    id: 'taladro', 
    name: 'Taladro Percutor Inalámbrico 20V', 
    cat: 'Herramientas', 
    price: 89990, 
    pesoKg: 5, 
    inst: 0, 
    emoji: '🔧', 
    bg: '#ffffff',
    desc: 'Taladro percutor a batería de litio 20V con maleta y accesorios para instalaciones domiciliarias.',
    specs: '<b>Mandril:</b> 13 mm autoperforante<br><b>Batería:</b> 2.0 Ah Ion-Litio<br><b>Torque:</b> 50 Nm',
    glbSrc: 'https://res.cloudinary.com/deqk2tmer/image/upload/v1793999107/taladro_parkside_lidl_wuiylf.glb', 
    img: 'https://res.cloudinary.com/deqk2tmer/image/upload/v1793999100/taladro_ekcx2b.png'
  },
  {
    id: 'lampara_mural', 
    name: 'Apliqué de Pared Estilo Clásico con Cúpula', 
    cat: 'Accesorios', 
    price: 19990, 
    pesoKg: 2, 
    inst: 12000, 
    bg: '#ffffff',
    desc: 'Lámpara de muro decorativa con base de bronce envejecido y pantalla de vidrio opal con relieve.',
    specs: '<b>Socket:</b> E27 (compatible LED)<br><b>Material:</b> Aleación metálica y vidrio texturizado<br><b>Uso:</b> Interior / Exterior techado',
    glbSrc: 'https://res.cloudinary.com/deqk2tmer/image/upload/v1794013036/victorian_wall_lamp_cxmzct.glb', 
    img: 'https://res.cloudinary.com/deqk2tmer/image/upload/v1794013028/lampara_oigotu.png'
  },
 {
    id: 'vanitorio_ceramica', 
    name: 'Vanitorio Compacto con Loza Blanca', 
    cat: 'Mejoramiento', 
    price: 89990, 
    pesoKg: 24, 
    inst: 18000, 
    bg: '#ffffff',
    desc: 'Mueble de piso con patas cromadas y lavamanos de loza incorporado, optimizado para espacios modernos.',
    specs: '<b>Dimensiones:</b> 60 x 45 x 80 cm<br><b>Material:</b> Melamina antihumedad y loza<br><b>Uso:</b> Baños principales o de visitas',
    glbSrc: 'https://res.cloudinary.com/deqk2tmer/image/upload/v1794013140/sink_with_faucet_g7qbu5.glb', 
    img: 'https://res.cloudinary.com/deqk2tmer/image/upload/v1794013137/lavamano_qfe0yz.png'
  },
 {
    id: 'caja_herramientas', 
    name: 'Caja de Herramientas Modular de Alto Impacto', 
    cat: 'Herramientas', 
    price: 24990, 
    pesoKg: 4, 
    inst: 0, 
    emoji: '📦', 
    bg: '#ffffff',
    desc: 'Maleta organizadora reforzada con cierres metálicos y bandeja interior para herramientas de mano y accesorios.',
    specs: '<b>Material:</b> Polímero industrial reforzado<br><b>Capacidad:</b> 22 pulgadas<br><b>Seguridad:</b> Cierres metálicos antideslizantes',
    glbSrc: 'https://res.cloudinary.com/deqk2tmer/image/upload/v1794013242/toolbox_dpoevg.glb', 
    img: 'https://res.cloudinary.com/deqk2tmer/image/upload/v1794013238/caja_de_herramientas_gjlplh.png'
  },
];

const ZONES = {
  urbana:    {label:'Zona urbana',    base:9990,  heavy:8000,  instX:1},
  periurbana:{label:'Zona periurbana',base:14990, heavy:15000, instX:1.2},
  rural:     {label:'Zona rural',     base:22990, heavy:25000, instX:1.5}
};
const COMUNAS = {
  'Chillán':'urbana','Chillán Viejo':'urbana','Bulnes':'periurbana','San Carlos':'periurbana','Pinto':'periurbana',
  'Coihueco':'periurbana','El Carmen':'rural','Pemuco':'rural','Yungay':'rural','Quillón':'periurbana','San Ignacio':'rural','Quirihue':'rural'
};

const SUPABASE_URL = 'https://jbanwtqelgjrvvvmyofu.supabase.co';
const SUPABASE_KEY = 'sb_publishable_g9Q1remR_r4gfNeofCNVFQ_GAoNtBvb';
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const Auth = (() => {
  let mode = 'in', afterLogin = null, currentUser = null;

  const current = () => currentUser;

  function render(){
    $('btnLogin').hidden = !!currentUser; 
    $('userBox').hidden = !currentUser;
    if (currentUser) {
      const displayName = currentUser.user_metadata?.full_name || currentUser.email;
      $('userName').textContent = '👤 ' + displayName;
    }
  }

  function setMode(m){
    mode = m;
    $('tabIn').classList.toggle('on', m === 'in'); 
    $('tabUp').classList.toggle('on', m === 'up');
    $('aName').hidden = m === 'in';
    $('authSubmit').textContent = m === 'in' ? 'Ingresar' : 'Crear cuenta';
    $('aPass').autocomplete = m === 'in' ? 'current-password' : 'new-password';
    error('');
  }

  function error(msg){ $('authErr').hidden = !msg; $('authErr').textContent = msg; }
  
  function open(cb, msg){ afterLogin = cb || null; setMode('in'); $('authForm').reset(); if (msg) error(msg); $('authModal').classList.add('on'); }
  
  function close(){ $('authModal').classList.remove('on'); afterLogin = null; }

  async function submit(e){
    e.preventDefault();
    const mail = $('aMail').value.trim().toLowerCase();
    const pass = $('aPass').value;
    const name = $('aName').value.trim();

    if (!/^\S+@\S+\.\S+$/.test(mail)) return error('Ingresa un correo válido.');
    if (pass.length < 6) return error('La contraseña debe tener al menos 6 caracteres.');

    $('authSubmit').disabled = true;

    try {
      if (mode === 'up') {
        if (!name) { $('authSubmit').disabled = false; return error('Ingresa tu nombre.'); }
        
        const { data, error: err } = await supabaseClient.auth.signUp({
          email: mail,
          password: pass,
          options: { data: { full_name: name } }
        });
        
        if (err) throw err;
        currentUser = data.user;
      } else {
        const { data, error: err } = await supabaseClient.auth.signInWithPassword({
          email: mail,
          password: pass
        });
        
        if (err) throw err;
        currentUser = data.user;
      }

      const cb = afterLogin; 
      close(); 
      render(); 
      if (cb) cb();

    } catch (err) {
      error(err.message || 'Error de autenticación.');
    } finally {
      $('authSubmit').disabled = false;
    }
  }

  async function logout(){
    await supabaseClient.auth.signOut();
    currentUser = null;
    render();
  }

  async function init(){
    $('btnLogin').onclick = () => open();
    $('btnLogout').onclick = logout;
    $('authClose').onclick = close;
    $('tabIn').onclick = () => setMode('in'); 
    $('tabUp').onclick = () => setMode('up');
    $('authForm').addEventListener('submit', submit);

    $('btnGoogle').onclick = async () => {
      await supabaseClient.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: window.location.origin + '/tienda.html' }
      });
    };

    const { data } = await supabaseClient.auth.getSession();
    currentUser = data.session?.user || null;
    render();

    supabaseClient.auth.onAuthStateChange((_event, session) => {
      currentUser = session?.user || null;
      render();
    });
  }

  return {init, open, current};
})();

const Cart = (() => {
  let items = {};
  const add = id => { items[id] = (items[id]||0) + 1; update(); };
  const chg = (id, d) => { items[id] = (items[id]||0) + d; if (items[id] <= 0) delete items[id]; update(); };
  const clear = () => { items = {}; localStorage.removeItem('th_cart'); update(); };
  function calc(){
    const zone = ZONES[COMUNAS[$('comuna').value]] || null;
    const list = Object.entries(items).map(([id,q]) => ({p: PRODUCTS.find(x => x.id === id), q}));
    const sub = list.reduce((s,i) => s + i.p.price*i.q, 0);
    const heavy = list.some(i => i.p.pesoKg > 30);
    const desp = zone && list.length ? zone.base : 0;
    const rec = zone && heavy ? zone.heavy : 0;
    const inst = zone && $('inst').checked ? list.reduce((s,i) => s + i.p.inst*zone.instX*i.q, 0) : 0;
    return {zone, list, sub, desp, rec, inst, heavy, total: sub+desp+rec+inst};
  }
  function update(){
    const c = calc();
    $('cnt').textContent = Object.values(items).reduce((a,b) => a+b, 0);
    $('items').innerHTML = c.list.length ? c.list.map(i => `
      <div class="item">
        <img class="item-thumb" src="${i.p.img}" alt="${i.p.name}">
        <span class="n">${i.p.name}<br><b>${CLP(i.p.price*i.q)}</b></span>
        <span class="qty"><button onclick="Cart.chg('${i.p.id}',-1)">−</button> ${i.q} <button onclick="Cart.chg('${i.p.id}',1)">+</button></span>
      </div>`).join('')
      : '<p class="empty">Tu carro está vacío. Agrega un producto del catálogo.</p>';
    $('sSub').textContent = CLP(c.sub); $('sDesp').textContent = CLP(c.desp);
    $('sRec').textContent = CLP(c.rec); $('sInst').textContent = CLP(c.inst); $('sTot').textContent = CLP(c.total);
    const z = c.zone;
    $('zoneInfo').className = 'note' + (c.heavy && z ? ' warn' : '');
    $('zoneInfo').innerHTML = !z ? 'Selecciona tu comuna para calcular despacho, recargo e instalación.'
      : `<b>${z.label}</b> · despacho base ${CLP(z.base)}. ` + (c.heavy
        ? `⚠️ Aplica recargo por carga pesada: <b>${CLP(z.heavy)}</b>.`
        : `Recargo de ${CLP(z.heavy)} solo si tu carro incluye productos de más de 30 kg.`);
    $('instInfo').textContent = z ? `Desde ${CLP(18000*z.instX)} por producto instalable en tu zona.` : 'Disponible según tu comuna.';
    $('payErr').hidden = true;
    localStorage.setItem('th_cart', JSON.stringify({ items, comuna: $('comuna').value, inst: $('inst').checked }));
  }
  
  function init(){
    $('comuna').innerHTML = '<option value="">Selecciona tu comuna…</option>' + Object.keys(COMUNAS).map(k => `<option>${k}</option>`).join('');
    $('comuna').onchange = update; $('inst').onchange = update;
    try {
      const saved = JSON.parse(localStorage.getItem('th_cart'));
      if (saved) {
        items = saved.items || {};
        if (saved.comuna) $('comuna').value = saved.comuna;
        $('inst').checked = !!saved.inst;
      }
    } catch (_) {}
    update();
  }
  return {init, add, chg, clear, calc};
})();

const Catalog = (() => {
  const card = p => `
    <article class="card">
      <div class="thumb" style="background:${p.bg}">${p.img ? `<img src="${p.img}" alt="${p.name}">` : p.emoji}</div>
      <div class="b">
        <span class="tag ${p.pesoKg>30?'':'n'}">${p.cat}</span>
        <h3 style="font-size:1rem">${p.name}</h3>
        <div class="meta">Peso aprox.: ${p.pesoKg} kg${p.inst>0?' · Instalación disponible':''}</div>
        <div class="price">${CLP(p.price)}</div>
        <button class="btn" onclick="Cart.add('${p.id}')">Agregar al carro</button>
        ${p.glbSrc ? `<button class="btn o" onclick="Viewer3D.show('${p.id}')">Ver en 3D</button>` : ''}
      </div>
    </article>`;
  function render(filter = ''){
    const f = filter.toLowerCase();
    const list = PRODUCTS.filter(p => (p.name + ' ' + p.cat).toLowerCase().includes(f));
    const main = list.slice(0, 3), extra = list.slice(3, 7);
    $('gridMain').innerHTML = main.map(card).join(''); $('gridExtra').innerHTML = extra.map(card).join('');
    $('grpMain').hidden = !main.length; $('grpExtra').hidden = !extra.length; $('noRes').hidden = list.length > 0;
  }
  return {init: () => { $('q').oninput = e => render(e.target.value); render(); }};
})();

const Viewer3D = (() => {
  let currentId = null;
  function load(id){
    const p = PRODUCTS.find(x => x.id === id); if (!p || !p.glbSrc) return;
    currentId = id;
    $('mv').src = p.glbSrc; 
    $('mv').alt = 'Modelo 3D: ' + p.name;
    $('mvTitle').textContent = p.name;
    $('mvDesc').textContent = p.desc;
    $('mvSpecs').innerHTML = `<b>Especificaciones Técnicas:</b><br>` + (p.specs || '');
  }
  const show = id => { load(id); $('simulador').scrollIntoView({behavior:'smooth'}); };
  function init(){
    $('mvAdd').onclick = () => currentId && Cart.add(currentId);
    load(PRODUCTS[0].id);
  }
  return {init, show};
})();

const Checkout = (() => {
  const box = () => $('payBox');
  const close = () => $('payModal').classList.remove('on');
  const openModal = html => { box().innerHTML = html; $('payModal').classList.add('on'); };
  const fail = msg => { $('payErr').textContent = msg; $('payErr').hidden = false; };

  function start(){
    const c = Cart.calc();
    if (!c.list.length) return fail('Agrega al menos un producto al carro.');
    if (!$('comuna').value) { $('logistica').scrollIntoView({behavior:'smooth'}); return fail('Selecciona tu comuna de despacho.'); }
    if (!Auth.current()) return Auth.open(start, 'Inicia sesión o regístrate para continuar con el pago.');
    $('payErr').hidden = true;
    methods(c);
  }

function methods(c){
    openModal(`<button class="x" onclick="Checkout.close()">×</button>
      <h3>Método de pago</h3>
      <p class="meta" style="margin-bottom:12px">Total: <b>${CLP(c.total)}</b> · Despacho a ${$('comuna').value}${$('inst').checked?' con instalación certificada':''}</p>
      <div class="pm-stack">
        <label class="pm">
          <input type="radio" name="pm" value="flow" checked>
          <div class="pm-body">
            <div>
              <b>Flow</b> <span class="meta">(Pago Web · Tarjetas y Transferencias)</span>
            </div>
            <div class="pm-logos" aria-label="Medios aceptados en Chile">
              <svg viewBox="0 0 64 24" height="22" width="48" role="img" aria-label="Visa" style="background:#fff;border:1px solid #e4e7eb;border-radius:4px;padding:2px 6px;">
                <text x="6" y="17" font-family="system-ui,sans-serif" font-weight="900" font-style="italic" font-size="15" fill="#1a1f71">VISA</text>
              </svg>
              <svg viewBox="0 0 44 24" height="22" width="36" role="img" aria-label="Mastercard" style="background:#fff;border:1px solid #e4e7eb;border-radius:4px;padding:2px 6px;">
                <circle cx="16" cy="12" r="8" fill="#eb001b"/>
                <circle cx="28" cy="12" r="8" fill="#f79e1b" fill-opacity="0.85"/>
              </svg>
              <svg viewBox="0 0 24 24" height="22" width="28" role="img" aria-label="Débito / Crédito" style="background:#fff;border:1px solid #e4e7eb;border-radius:4px;padding:2px 6px;" fill="none" stroke="#1f2933" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="2"/>
                <line x1="2" y1="10" x2="22" y2="10"/>
              </svg>
              <svg viewBox="0 0 24 24" height="22" width="28" role="img" aria-label="Transferencia bancaria" style="background:#fff;border:1px solid #e4e7eb;border-radius:4px;padding:2px 6px;" fill="none" stroke="#1d4e89" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 10l9-7 9 7"/>
                <path d="M5 10v8M10 10v8M14 10v8M19 10v8"/>
                <path d="M2 20h20"/>
              </svg>
            </div>
          </div>
        </label>
        <button class="btn" id="goPay">Pagar ${CLP(c.total)}</button>
        <button class="btn o" onclick="Checkout.close()">Cancelar</button>
      </div>`);
    $('goPay').onclick = () => payWithFlow(c);
  }
 
  function flowPayload(c){
    const s = Auth.current(), order = 'TH-' + Date.now().toString().slice(-8);
    return { apiKey: FLOW_CONFIG.apiKey, commerceOrder: order, subject: 'Compra Todohogar Chillán',
             currency: 'CLP', amount: c.total, email: s.email,
             urlConfirmation: FLOW_CONFIG.confirm_url, urlReturn: FLOW_CONFIG.return_url };
  }

  async function signParams(params, secretKey) {
    const keys = Object.keys(params).sort();
    const toSign = keys.map(k => `${k}${params[k]}`).join('');
    const enc = new TextEncoder();
    const key = await crypto.subtle.importKey('raw', enc.encode(secretKey), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
    const signature = await crypto.subtle.sign('HMAC', key, enc.encode(toSign));
    return Array.from(new Uint8Array(signature)).map(b => b.toString(16).padStart(2, '0')).join('');
  }

  async function payWithFlow(c){
    const data = flowPayload(c);
    if (!FLOW_CONFIG.simulate) {
      openModal('<p class="ok"><span class="big">🔄</span><br>Conectando con el servidor seguro...</p>');

      try {
        const response = await fetch('/api/flow', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        const result = await response.json();
        
        if (result.url && result.token) {
          window.location.href = result.url + '?token=' + result.token;
        } else {
          openModal(`<div class="ok"><span class="big">❌</span><h3>Error de Flow</h3><p class="meta" style="margin:8px 0 16px">${result.message || 'Respuesta inválida del servidor'}</p><button class="btn" onclick="Checkout.start()">Volver a intentar</button></div>`);
        }
      } catch (err) {
        openModal(`<div class="ok"><span class="big">❌</span><h3>Error de Conexión</h3><p class="meta" style="margin:8px 0 16px">${err.message}</p><button class="btn" onclick="Checkout.start()">Volver a intentar</button></div>`);
      }
    }
  }

  function success(c, method){
    openModal(`<div class="ok"><span class="big">✅</span>
      <h3 style="margin:10px 0 6px">¡Gracias por tu compra!</h3>
      <p class="meta" style="margin-bottom:10px">Tu pedido en Todohogar Chillán fue procesado correctamente.</p>
      <p class="meta">Método: <b>${method}</b> · Total pagado: <b>${CLP(c.total)}</b></p>
      <p class="meta" style="margin:8px 0 18px">Despacho registrado a <b>${$('comuna').value}</b>${$('inst').checked?' con instalación domiciliaria':''}.</p>
      <div class="row" style="gap:8px;flex-wrap:wrap">
        <button class="btn" style="flex:1" onclick="Cart.clear(); Checkout.close()">Seguir comprando</button>
        <button class="btn o" style="flex:1" onclick="Cart.clear(); Checkout.close(); window.scrollTo({top:0,behavior:'smooth'})">Volver a la página</button>
      </div></div>`);
  }

  return {start, close};
})();

document.addEventListener('DOMContentLoaded', () => {
  Auth.init();
  Cart.init();
  Catalog.init();
  Viewer3D.init();
  $('pay').onclick = Checkout.start;
});
