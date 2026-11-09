// MOTOZONE · prototipo de tienda (JavaScript vanilla, sin dependencias)
const U = (id, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;
const PHOTO = {
  hero: U('photo-1532695742255-ca4210d34599', 1800),
  helmet: U('photo-1590506995460-d0d9892b54da'),
  blackHelmet: U('photo-1556570508-121c77af2a75'),
  jacket: U('photo-1591260035149-2829f11fdefe'),
  gloves: U('photo-1683803498011-14c20022c171'),
};
const HS = ['S', 'M', 'L', 'XL'], AS = ['S', 'M', 'L', 'XL', 'XXL'], BS = ['38', '39', '40', '41', '42', '43', '44', '45'], ONE = ['Único'];
const K = '#18181b', R = '#dc2626', O = '#ff5a1f', B = '#2563eb', Y = '#facc15', G = '#52525b', W = '#e4e4e7';
const P = (id, name, brand, group, cat, price, type, color, accent, sizes, desc, specs, o = {}) =>
  ({ id, name, brand, group, cat, price, type, color, accent, sizes, desc, specs, ...o });
const PRODUCTS = [
  P('apex-r1', 'Casco Apex R1', 'NEXX', 'Cascos', 'Casco integral', 389900, 'helmet', R, K, HS, 'Casco integral con visor solar interno, ventilación regulable y cierre micrométrico. Pensado para ruta y ciudad.', ['Calota de fibra', 'Visor solar interno', 'Homologación ECE 22.06', 'Peso: 1.380 g'], { photo: PHOTO.helmet, tag: 'NUEVO' }),
  P('velocity-gt', 'Casco Velocity GT', 'LS2', 'Cascos', 'Casco integral', 279900, 'helmet', B, W, HS, 'Integral deportivo con aerodinámica de spoiler y forro desmontable lavable.', ['Calota termoplástica', 'Pinlock incluido', 'Homologación ECE 22.06', 'Peso: 1.450 g'], { old: 319900 }),
  P('sport-carbon', 'Casco Sport Carbon', 'SHARK', 'Cascos', 'Casco integral', 512000, 'helmet', K, O, HS, 'Integral de fibra de carbono para uso deportivo, liviano y con ventilación de alto caudal.', ['Fibra de carbono', 'Cierre doble D', 'Visor antiempañante', 'Peso: 1.150 g']),
  P('urban-carbon', 'Casco Urban Carbon', 'SHARK', 'Cascos', 'Casco modular', 425500, 'helmet', K, W, HS, 'Modular abatible con mentonera que se levanta con una mano. Ideal para ciudad y viajes.', ['Mentonera abatible', 'Visor solar', 'Doble homologación P/J', 'Peso: 1.620 g'], { photo: PHOTO.blackHelmet, variant: 'modular' }),
  P('flip-tour', 'Casco Flip Tour', 'NEXX', 'Cascos', 'Casco modular', 338000, 'helmet', G, Y, HS, 'Modular touring con ventilación frontal y sistema de intercomunicador compatible.', ['Mentonera abatible', 'Compatible con intercom', 'Visor antirrayas', 'Peso: 1.580 g'], { variant: 'modular' }),
  P('jet-retro', 'Casco Jet Retro', 'LS2', 'Cascos', 'Casco abierto', 129900, 'helmet', '#a16207', K, HS, 'Abierto de estilo clásico con visor corto y forro suave para uso urbano.', ['Calota ABS', 'Visor corto', 'Broche micrométrico', 'Peso: 1.050 g'], { variant: 'open' }),
  P('cruiser-open', 'Casco Cruiser Open', 'HJC', 'Cascos', 'Casco abierto', 154000, 'helmet', K, R, HS, 'Abierto con visor solar integrado y ventilación superior para días de calor.', ['Visor solar interno', 'Forro removible', 'Homologación ECE', 'Peso: 1.120 g'], { variant: 'open', old: 179000 }),
  P('trail-x', 'Casco Trail X', 'ALPINESTARS', 'Cascos', 'Casco off-road', 298000, 'helmet', O, K, HS, 'Off-road con visera regulable, gran ventilación y compatibilidad con antiparras.', ['Visera regulable', 'Compatible con antiparras', 'Calota compuesta', 'Peso: 1.250 g'], { variant: 'offroad' }),
  P('road-pro', 'Campera Road Pro', 'LS2', 'Camperas', 'Campera ruta', 298000, 'jacket', K, R, AS, 'Campera textil de tres capas con protecciones CE en hombros y codos, forro térmico removible.', ['Protecciones CE nivel 1', 'Impermeable', 'Forro térmico removible', 'Reflectivos 360°'], { photo: PHOTO.jacket, tag: 'NUEVO' }),
  P('urban-leather', 'Campera Urban Leather', 'DAINESE', 'Camperas', 'Campera cuero', 465000, 'jacket', '#7c2d12', K, AS, 'Cuero vacuno de 1,2 mm con protecciones CE y corte urbano.', ['Cuero 1,2 mm', 'Protecciones CE', 'Forro de red', 'Cierre YKK']),
  P('touring-dry', 'Campera Touring Dry', 'ALPINESTARS', 'Camperas', 'Campera touring', 389000, 'jacket', G, Y, AS, 'Touring con membrana impermeable y ventilaciones de pecho y espalda.', ['Membrana Dry', 'Ventilación regulable', 'Bolsillos estancos', 'Protecciones CE'], { old: 429000 }),
  P('mesh-summer', 'Campera Mesh Summer', 'LS2', 'Camperas', 'Campera verano', 189000, 'jacket', '#334155', B, AS, 'Campera de malla para verano con máxima ventilación y protecciones CE.', ['Malla de alto flujo', 'Protecciones CE', 'Reflectivos', 'Muy liviana']),
  P('denim-armor', 'Jean Denim Armor', 'ALPINESTARS', 'Pantalones', 'Pantalón urbano', 210000, 'pants', '#1e3a8a', O, AS, 'Jean con refuerzos de aramida y protecciones CE en rodillas y cadera.', ['Refuerzos de aramida', 'Protecciones CE', 'Corte regular', 'Lavable']),
  P('touring-pant', 'Pantalón Touring', 'DAINESE', 'Pantalones', 'Pantalón touring', 245000, 'pants', K, R, AS, 'Pantalón textil impermeable con forro térmico y ajustes en cintura y tobillo.', ['Impermeable', 'Forro térmico', 'Protecciones CE', 'Ajuste regulable']),
  P('street-air', 'Guantes Street Air', 'DAINESE', 'Guantes', 'Guantes verano', 89900, 'gloves', K, R, HS, 'Guantes ventilados con refuerzos en nudillos y palma antideslizante.', ['Cuero + malla', 'Nudillos protegidos', 'Dedos táctiles', 'Ventilados'], { photo: PHOTO.gloves }),
  P('winter-pro', 'Guantes Winter Pro', 'LS2', 'Guantes', 'Guantes invierno', 112000, 'gloves', G, O, HS, 'Guantes térmicos impermeables con puño largo y protecciones.', ['Membrana impermeable', 'Forro térmico', 'Puño largo', 'Dedos táctiles'], { old: 129000 }),
  P('sport-race', 'Guantes Sport Race', 'ALPINESTARS', 'Guantes', 'Guantes sport', 148000, 'gloves', R, K, HS, 'Guantes de cuero para pista con deslizadores y protección de meñique.', ['Cuero de canguro', 'Deslizadores', 'Protección de meñique', 'Puño corto']),
  P('urban-boot', 'Botas Urban', 'ALPINESTARS', 'Botas', 'Botas urbanas', 245000, 'boots', K, W, BS, 'Botas urbanas de cuero con puntera reforzada y suela antideslizante.', ['Cuero hidrorrepelente', 'Puntera reforzada', 'Cierre lateral', 'Suela antideslizante']),
  P('touring-boot', 'Botas Touring', 'DAINESE', 'Botas', 'Botas touring', 289000, 'boots', '#78350f', K, BS, 'Touring impermeables con protección de tobillo y caña media.', ['Membrana impermeable', 'Protección de tobillo', 'Doble cierre', 'Suela de goma'], { old: 319000 }),
  P('racing-boot', 'Botas Racing', 'SHARK', 'Botas', 'Botas racing', 360000, 'boots', W, R, BS, 'Botas deportivas de caña alta con sliders y regulación de ajuste.', ['Caña alta', 'Sliders', 'Cierre micrométrico', 'Suela de competición']),
  P('back-armor', 'Protector de espalda', 'DAINESE', 'Protecciones', 'Protector', 94000, 'armor', K, O, ['S', 'M', 'L'], 'Protector dorsal de nivel 2 flexible que se adapta a la campera o se usa con arnés.', ['CE nivel 2', 'Espuma viscoelástica', 'Ventilado', 'Arnés incluido']),
  P('knee-guard', 'Rodilleras Pro', 'ALPINESTARS', 'Protecciones', 'Protector', 58000, 'armor', G, Y, ['S', 'M', 'L'], 'Rodilleras articuladas con ajuste de velcro, aptas para uso bajo el pantalón.', ['CE nivel 1', 'Articuladas', 'Ajuste regulable', 'Livianas'], { variant: 'knee' }),
  P('chest-guard', 'Pechera Defender', 'LS2', 'Protecciones', 'Protector', 119000, 'armor', '#334155', B, ['S', 'M', 'L'], 'Pechera protectora para uso off-road y deportivo, con ventilación.', ['Protección de pecho', 'Ajuste de cinchas', 'Ventilada', 'Compatible con collarín'], { old: 135000 }),
  P('intercom', 'Intercomunicador BT-X', 'COMM-X', 'Accesorios', 'Intercomunicador', 169000, 'comms', K, B, ONE, 'Intercomunicador Bluetooth para casco con alcance de 1 km y batería de 12 h.', ['Alcance 1 km', 'Batería 12 h', 'Resistente al agua', 'Control por voz']),
  P('disc-lock', 'Candado de disco', 'ABUS', 'Accesorios', 'Seguridad', 42000, 'lock', Y, K, ONE, 'Candado de disco con alarma sonora y perno reforzado.', ['Acero endurecido', 'Alarma 110 dB', 'Perno de 10 mm', 'Incluye bolsa']),
  P('rear-bag', 'Bolso trasero 30 L', 'GIVI', 'Accesorios', 'Touring', 78000, 'bag', K, O, ONE, 'Bolso trasero expandible de 30 litros con base rígida y funda de lluvia.', ['30 L expandible', 'Base rígida', 'Funda impermeable', 'Fijación con correas']),
  P('mirrors', 'Espejos retrovisores', 'MOTOZONE', 'Accesorios', 'Espejos', 49000, 'comms', K, B, ONE, 'Juego de espejos retrovisores para moto con soportes y accesorios de instalación.', ['Par de espejos', 'Soportes incluidos', 'Ajustables', 'Diseño universal']),
  P('rain-suit', 'Piloto de lluvia', 'LS2', 'Accesorios', 'Lluvia', 64000, 'jacket', Y, K, AS, 'Conjunto impermeable de dos piezas con bandas reflectivas, liviano y compacto.', ['Dos piezas', 'Costuras selladas', 'Reflectivos', 'Bolsa de transporte'], { old: 74000 }),
];
// Fotografías distintas por artículo, seleccionadas por tema y semilla fija.
// Servicio fotográfico externo: las imágenes son ilustrativas, no representan los modelos ficticios.
// Cada producto tiene una URL única; no se reciclan fotos entre cascos, camperas y accesorios.
const PHOTO_TERMS = {
  'apex-r1': 'motorcycle,fullface,helmet',
  'velocity-gt': 'motorcycle,helmet,racing',
  'sport-carbon': 'black,motorcycle,helmet',
  'urban-carbon': 'motorbike,helmet,modular',
  'flip-tour': 'motorcycle,touring,helmet',
  'jet-retro': 'retro,openface,helmet',
  'cruiser-open': 'motorcycle,open,helmet',
  'trail-x': 'motocross,helmet',
  'road-pro': 'motorcycle,riding,jacket',
  'urban-leather': 'leather,motorcycle,jacket',
  'touring-dry': 'motorcycle,touring,jacket',
  'mesh-summer': 'motorbike,summer,jacket',
  'denim-armor': 'motorcycle,jeans,pants',
  'touring-pant': 'motorcycle,riding,pants',
  'street-air': 'motorcycle,riding,gloves',
  'winter-pro': 'motorbike,winter,gloves',
  'sport-race': 'motorcycle,racing,gloves',
  'urban-boot': 'motorcycle,riding,boots',
  'touring-boot': 'motorbike,touring,boots',
  'racing-boot': 'motocross,racing,boots',
  'back-armor': 'motorcycle,back,protector',
  'knee-guard': 'motorcycle,knee,guards',
  'chest-guard': 'motocross,chest,protector',
  'intercom': 'motorcycle,helmet,intercom',
  'disc-lock': 'motorcycle,disc,lock',
  'rear-bag': 'motorcycle,luggage,bag',
  'rain-suit': 'motorcycle,rain,suit',
};
PRODUCTS.forEach((product, index) => {
  const terms = PHOTO_TERMS[product.id] || 'motorcycle,gear';
  product.photo = `./img/motozone/${product.id}.webp?v=5`;
});
const GROUPS = ['Cascos', 'Camperas', 'Pantalones', 'Guantes', 'Botas', 'Protecciones', 'Accesorios'];
const BRANDS = [...new Set(PRODUCTS.map((p) => p.brand))].sort();
const $ = (s, r = document) => r.querySelector(s);
const money = (n) => '$ ' + n.toLocaleString('es-AR');
const byId = (id) => PRODUCTS.find((p) => p.id === id);
const ICON = { arrow: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>', back: '<path d="M19 12H5"/><path d="m11 18-6-6 6-6"/>', check: '<path d="m5 12 4 4L19 6"/>', cart: '<circle cx="9" cy="20" r="1"/><circle cx="19" cy="20" r="1"/><path d="M3 4h2l2.5 11h11l2-7H7"/>', shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>', users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>' };
const ic = (n, s = 18) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[n]}</svg>`;

// ---------- Ilustraciones SVG (se usan cuando no hay foto) ----------
function shapes(p) {
  const c = p.color, a = p.accent;
  switch (p.type) {
    case 'helmet': {
      let s = p.variant === 'open'
        ? `<path d="M38 112C38 64 74 38 112 40c40 2 58 38 54 72l-8 16H60z" fill="${c}"/><path d="M92 86h62v16H98z" fill="${K}" opacity=".85"/><path d="M60 128q40 22 98 0" stroke="${K}" stroke-width="6" fill="none" stroke-linecap="round" opacity=".5"/>`
        : `<path d="M38 118C38 66 74 38 112 40c40 2 58 38 54 78v14q0 16-16 16H66q-28 0-28-30z" fill="${c}"/><path d="M92 84h64l4 30H98q-12-14-6-30z" fill="${K}"/><path d="M104 92h30" stroke="#fff" opacity=".35" stroke-width="3" stroke-linecap="round"/>`;
      s += `<path d="M60 60q30-22 62-18" stroke="${a}" stroke-width="6" fill="none" stroke-linecap="round"/>`;
      if (p.variant === 'modular') s += `<path d="M72 150h80" stroke="${a}" stroke-width="4"/><circle cx="164" cy="96" r="5" fill="${a}"/>`;
      if (p.variant === 'offroad') s += `<path d="M70 62l96-6 8 10-104 8z" fill="${a}"/><path d="M150 112h26v22h-30z" fill="${c}"/>`;
      return s;
    }
    case 'jacket': return `<path d="M72 34l28 12 28-12 14 12v130H58V46z" fill="${c}"/><path d="M72 34 52 44 22 150l26 8 22-70z" fill="${c}"/><path d="M128 34l20 10 30 106-26 8-22-70z" fill="${c}"/><path d="M72 34 52 44 22 150l26 8 22-70zM128 34l20 10 30 106-26 8-22-70z" fill="#000" opacity=".14"/><path d="M100 46v130" stroke="${K}" stroke-width="3"/><path d="M34 106l26 8M166 106l-26 8" stroke="${a}" stroke-width="7" stroke-linecap="round"/><rect x="108" y="100" width="22" height="5" rx="2" fill="${a}"/><rect x="70" y="100" width="22" height="5" rx="2" fill="${a}"/><path d="M84 38l16 14 16-14" stroke="${K}" stroke-width="5" fill="none" stroke-linejoin="round"/>`;
    case 'pants': return `<path d="M62 24h76l10 152h-38l-10-92-10 92H52z" fill="${c}"/><path d="M62 24h76v14H62z" fill="${K}" opacity=".35"/><circle cx="78" cy="116" r="11" fill="${a}"/><circle cx="122" cy="116" r="11" fill="${a}"/>`;
    case 'gloves': return [0, 1, 2, 3].map((i) => `<rect x="${62 + i * 19}" y="${[44, 34, 38, 52][i]}" width="17" height="70" rx="8" fill="${c}"/>`).join('') + `<path d="M62 112l-24-14q-10 8-2 20l30 30z" fill="${c}"/><rect x="62" y="96" width="76" height="62" rx="18" fill="${c}"/><rect x="66" y="148" width="72" height="30" rx="8" fill="${a}"/><rect x="72" y="104" width="60" height="8" rx="4" fill="${a}" opacity=".7"/>`;
    case 'boots': return `<path d="M70 28h46v86l44 16q14 6 14 20v14H62z" fill="${c}"/><rect x="60" y="158" width="118" height="14" rx="6" fill="${K}"/><rect x="70" y="64" width="46" height="8" fill="${a}"/><rect x="70" y="88" width="46" height="8" fill="${a}"/>`;
    case 'armor': return p.variant === 'knee'
      ? `<rect x="44" y="50" width="48" height="96" rx="24" fill="${c}"/><rect x="108" y="50" width="48" height="96" rx="24" fill="${c}"/><circle cx="68" cy="98" r="14" fill="${a}"/><circle cx="132" cy="98" r="14" fill="${a}"/>`
      : `<rect x="62" y="26" width="76" height="148" rx="28" fill="${c}"/><path d="M66 70h68M66 100h68M66 130h68" stroke="${K}" stroke-width="4"/><path d="M100 32v136" stroke="${a}" stroke-width="6"/>`;
    case 'comms': return `<rect x="64" y="52" width="72" height="96" rx="20" fill="${c}"/><circle cx="100" cy="100" r="24" fill="${a}"/><circle cx="100" cy="100" r="10" fill="${K}"/><rect x="88" y="62" width="24" height="6" rx="3" fill="#fff" opacity=".4"/>`;
    case 'bag': return `<rect x="44" y="70" width="112" height="84" rx="14" fill="${c}"/><path d="M70 70q30-40 60 0" stroke="${K}" stroke-width="6" fill="none"/><rect x="44" y="100" width="112" height="10" fill="${a}"/>`;
    case 'lock': return `<circle cx="100" cy="108" r="48" fill="none" stroke="${c}" stroke-width="14"/><rect x="76" y="40" width="48" height="36" rx="8" fill="${a}"/><circle cx="100" cy="58" r="6" fill="${c}"/>`;
  }
}
const art = (p, vb = '0 0 200 200', bg = '#f4f4f5') => `<svg viewBox="${vb}" role="img" aria-label="Ilustración de ${p.name}"><rect x="-50" y="-50" width="300" height="300" fill="${bg}"/>${shapes(p)}</svg>`;
const pic = (p) => (p.photo ? `<img src="${p.photo}" alt="${p.name}" loading="lazy" data-fallback="${p.id}">` : art(p));

// ---------- Estado ----------
let cart = [];
try { cart = JSON.parse(localStorage.getItem('mz-cart') || '[]').filter((i) => byId(i.id)); } catch { cart = []; }
const save = () => { try { localStorage.setItem('mz-cart', JSON.stringify(cart)); } catch { /* sin almacenamiento */ } $('#cart-count').textContent = cart.reduce((n, i) => n + i.qty, 0); };
const F = { groups: new Set(), brands: new Set(), price: '', sale: false, sort: 'rel' };
const app = $('#app');

// ---------- Vistas ----------
const card = (p) => `<article class="shop-product"><a href="#/producto/${p.id}" aria-label="${p.name}, ${money(p.price)}"><div>${pic(p)}${p.tag ? `<span>${p.tag}</span>` : ''}${p.old ? '<span class="off">OFERTA</span>' : ''}</div></a><p>${p.brand} · ${p.cat}</p><h3><a href="#/producto/${p.id}">${p.name}</a></h3><b>${money(p.price)}</b>${p.old ? `<s>${money(p.old)}</s>` : ''}<a class="go" href="#/producto/${p.id}">VER PRODUCTO ${ic('arrow', 16)}</a></article>`;
const viewHome = () => `<main>
<section class="shop-hero hero-fallback" style="background-image:linear-gradient(90deg,rgba(0,0,0,.88),rgba(0,0,0,.15)),url(${PHOTO.hero})"><div><span>NUEVA COLECCIÓN 2026</span><h1>Tu próxima<br>aventura empieza<br><em>acá.</em></h1><p>Equipamiento completo para quienes viven el camino: cascos, camperas, guantes, botas y protecciones.</p><a class="moto-button" href="#/catalogo" style="margin-top:24px">VER CATÁLOGO ${ic('arrow')}</a></div></section>
<section class="shop-cats"><p>EXPLORÁ POR CATEGORÍA</p><div>${GROUPS.map((g, i) => `<a href="#/catalogo?cat=${g}" style="display:grid;grid-template-columns:35px 1fr auto;align-items:center;gap:15px;padding:27px 15px;border-bottom:1px solid #ddd;font:700 16px Poppins"><span>0${i + 1}</span>${g}${ic('arrow')}</a>`).join('')}</div></section>
<section class="featured-products"><div class="shop-section-head"><div><span>SELECCIÓN MOTOZONE</span><h2>Destacados</h2></div><a href="#/catalogo" style="display:flex;gap:8px;align-items:center;border-bottom:1px solid;font-size:12px;font-weight:800">VER TODO ${ic('arrow')}</a></div><div class="shop-product-grid">${['apex-r1', 'road-pro', 'street-air', 'urban-boot'].map((i) => card(byId(i))).join('')}</div></section>
<section class="featured-products" style="padding-top:0"><div class="shop-section-head"><div><span>PRECIOS ESPECIALES</span><h2>Ofertas</h2></div><a href="#/catalogo?oferta=1" style="display:flex;gap:8px;align-items:center;border-bottom:1px solid;font-size:12px;font-weight:800">VER OFERTAS ${ic('arrow')}</a></div><div class="shop-product-grid">${PRODUCTS.filter((p) => p.old).slice(0, 4).map(card).join('')}</div></section>
<section class="shop-values"><div>${ic('shield', 28)}<b>Compra demostrativa</b><span>No se procesan pagos reales</span></div><div>${ic('check', 28)}<b>Equipamiento seleccionado</b><span>Información clara de talles y stock</span></div><div>${ic('users', 28)}<b>Asesoramiento</b><span>Concepto de atención especializada</span></div></section></main>`;

const chk = (name, v, on) => `<label><input type="checkbox" data-f="${name}" value="${v}" ${on ? 'checked' : ''}> ${v}</label>`;
const viewCatalog = () => `<main class="catalog-page"><div class="shop-page-title"><span>INICIO / CATÁLOGO</span><h1>Equipamiento</h1><p>Encontrá protección para cada tipo de aventura.</p></div><div class="catalog-layout"><aside aria-label="Filtros"><b>FILTROS</b>
<details open><summary>Categoría <span aria-hidden="true">+</span></summary><div class="opts">${GROUPS.map((g) => chk('group', g, F.groups.has(g))).join('')}</div></details>
<details><summary>Marca <span aria-hidden="true">+</span></summary><div class="opts">${BRANDS.map((b) => chk('brand', b, F.brands.has(b))).join('')}</div></details>
<details open><summary>Precio <span aria-hidden="true">+</span></summary><div class="opts"><select id="f-price" aria-label="Rango de precio" style="padding:8px;border:1px solid #ddd;background:#fff">${[['', 'Todos'], ['0-100000', 'Hasta $ 100.000'], ['100000-300000', '$ 100.000 a $ 300.000'], ['300000-9e9', 'Más de $ 300.000']].map(([v, l]) => `<option value="${v}" ${F.price === v ? 'selected' : ''}>${l}</option>`).join('')}</select></div></details>
<details open><summary>Disponibilidad <span aria-hidden="true">+</span></summary><div class="opts"><label><input type="checkbox" id="f-sale" ${F.sale ? 'checked' : ''}> Solo ofertas</label></div></details>
<button type="button" id="f-clear" style="margin-top:16px;font-size:12px;text-decoration:underline">Limpiar filtros</button></aside>
<div><div class="catalog-toolbar"><span id="count" role="status"></span><label>Ordenar<select id="f-sort" aria-label="Ordenar productos">${[['rel', 'Más relevantes'], ['asc', 'Menor precio'], ['desc', 'Mayor precio'], ['az', 'Nombre A–Z']].map(([v, l]) => `<option value="${v}" ${F.sort === v ? 'selected' : ''}>${l}</option>`).join('')}</select></label></div><div class="shop-product-grid" id="grid"></div></div></div></main>`;
function filtered() {
  let l = PRODUCTS.filter((p) => (!F.groups.size || F.groups.has(p.group)) && (!F.brands.size || F.brands.has(p.brand)) && (!F.sale || p.old));
  if (F.price) { const [a, b] = F.price.split('-').map(Number); l = l.filter((p) => p.price >= a && p.price <= b); }
  if (F.sort === 'asc') l.sort((x, y) => x.price - y.price); else if (F.sort === 'desc') l.sort((x, y) => y.price - x.price); else if (F.sort === 'az') l.sort((x, y) => x.name.localeCompare(y.name));
  return l;
}
function updateGrid() { const l = filtered(); $('#count').textContent = `${l.length} producto${l.length === 1 ? '' : 's'}`; $('#grid').innerHTML = l.length ? l.map(card).join('') : '<p class="empty">No hay productos con esos filtros.</p>'; }
function bindCatalog() {
  updateGrid();
  const a = $('.catalog-layout');
  a.addEventListener('change', (e) => {
    const t = e.target;
    if (t.dataset.f) { const s = t.dataset.f === 'group' ? F.groups : F.brands; t.checked ? s.add(t.value) : s.delete(t.value); }
    else if (t.id === 'f-price') F.price = t.value; else if (t.id === 'f-sale') F.sale = t.checked; else if (t.id === 'f-sort') F.sort = t.value;
    updateGrid();
  });
  $('#f-clear').addEventListener('click', () => { F.groups.clear(); F.brands.clear(); F.price = ''; F.sale = false; F.sort = 'rel'; route(true); });
}

let chosen = null;
function viewProduct(id) {
  const p = byId(id); if (!p) return viewNotFound();
  chosen = null;
  const rel = PRODUCTS.filter((x) => x.group === p.group && x.id !== p.id).slice(0, 4);
  return `<main class="product-detail"><a class="crumb" href="#/catalogo">${ic('back', 16)} Volver al catálogo</a><div class="detail-grid"><div class="detail-gallery"><figure class="art">${pic(p)}</figure><div><div class="art">${pic(p)}</div><div class="art">${pic(p)}</div></div></div>
<div class="detail-copy"><span class="stock">EN STOCK</span><p>${p.brand} · ${p.cat}</p><h1>${p.name}</h1><div class="rating">PROTOTIPO <span>Ficha de producto conceptual</span></div><strong>${money(p.price)}</strong>${p.old ? `<small><s>${money(p.old)}</s> · precio de oferta</small>` : '<small>Precio ilustrativo · 6 cuotas simuladas</small>'}<hr>
<label style="display:flex;justify-content:space-between"><span id="size-label">${p.group === 'Botas' ? 'TALLE (AR)' : p.sizes[0] === 'Único' ? 'TALLE' : 'TALLE'}</span></label><div class="sizes" role="group" aria-labelledby="size-label">${p.sizes.map((s) => `<button type="button" aria-pressed="false" data-size="${s}" style="${s.length > 2 ? 'width:auto;padding:0 14px' : ''}">${s}</button>`).join('')}</div><p class="size-msg" id="size-msg" role="alert"></p>
<div class="buy-row"><select id="qty" aria-label="Cantidad">${[1, 2, 3, 4, 5].map((n) => `<option>${n}</option>`).join('')}</select><button class="moto-button" type="button" id="add">AGREGAR AL CARRITO ${ic('cart')}</button></div>
<details open><summary>Información del producto</summary><p>${p.desc}</p><ul style="margin:10px 0 0;padding-left:18px;color:#52525b;font-size:13px;line-height:1.8;list-style:disc">${p.specs.map((s) => `<li>${s}</li>`).join('')}</ul></details><details><summary>Envíos y cambios</summary><p>Información simulada para el prototipo académico. Envío gratis desde $ 250.000.</p></details></div></div>
${rel.length ? `<section class="featured-products" style="padding:70px 0 0"><div class="shop-section-head"><div><span>TAMBIÉN TE PUEDE INTERESAR</span><h2 style="font-size:36px">Más de ${p.group}</h2></div></div><div class="shop-product-grid">${rel.map(card).join('')}</div></section>` : ''}</main>`;
}
function bindProduct(id) {
  const p = byId(id); if (!p) return;
  const msg = $('#size-msg');
  if (p.sizes.length === 1) { chosen = p.sizes[0]; $('.sizes button').setAttribute('aria-pressed', 'true'); }
  $('.sizes').addEventListener('click', (e) => { const b = e.target.closest('button'); if (!b) return; chosen = b.dataset.size; document.querySelectorAll('.sizes button').forEach((x) => x.setAttribute('aria-pressed', String(x === b))); msg.textContent = ''; });
  $('#add').addEventListener('click', () => {
    if (!chosen) { msg.textContent = 'Elegí un talle para continuar.'; return; }
    const qty = +$('#qty').value, line = cart.find((i) => i.id === p.id && i.size === chosen);
    line ? (line.qty = Math.min(10, line.qty + qty)) : cart.push({ id: p.id, size: chosen, qty });
    save(); toast(`${p.name} (talle ${chosen}) agregado al carrito`);
  });
}
const total = () => cart.reduce((n, i) => n + byId(i.id).price * i.qty, 0);
const ship = () => (total() >= 250000 || !cart.length ? 0 : 9900);
function viewCart() {
  if (!cart.length) return `<main class="cart-page"><div class="shop-page-title"><span>PASO 01 / 03</span><h1>Tu carrito</h1></div><div class="cart-empty"><p>Tu carrito está vacío.</p><a class="moto-button" href="#/catalogo">VER CATÁLOGO ${ic('arrow')}</a></div></main>`;
  return `<main class="cart-page"><div class="shop-page-title"><span>PASO 01 / 03</span><h1>Tu carrito</h1></div><div class="cart-layout"><div>${cart.map((i, n) => { const p = byId(i.id); return `<div class="cart-product"><div class="art">${pic(p)}</div><div><span>${p.brand}</span><h2>${p.name}</h2><p>Talle ${i.size}</p><select data-n="${n}" aria-label="Cantidad de ${p.name}">${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((q) => `<option ${q === i.qty ? 'selected' : ''}>${q}</option>`).join('')}</select><br><button class="rm" type="button" data-rm="${n}">Quitar</button></div><b>${money(p.price * i.qty)}</b></div>`; }).join('')}</div>
<aside><h2>Resumen</h2><p><span>Subtotal</span><b>${money(total())}</b></p><p><span>Envío</span><b>${ship() ? money(ship()) : 'Gratis'}</b></p><hr><p class="total"><span>Total</span><b>${money(total() + ship())}</b></p><a class="moto-button" href="#/checkout">INICIAR COMPRA ${ic('arrow')}</a><small>No se realizará ningún cobro real.</small></aside></div></main>`;
}
function bindCart() {
  app.addEventListener('change', cartChange); app.addEventListener('click', cartClick);
}
function cartChange(e) { const s = e.target.closest('select[data-n]'); if (s) { cart[+s.dataset.n].qty = +s.value; save(); route(true); } }
function cartClick(e) { const r = e.target.closest('[data-rm]'); if (r) { cart.splice(+r.dataset.rm, 1); save(); route(true); } }
function viewCheckout() {
  if (!cart.length) return viewCart();
  return `<main class="checkout-page"><a class="crumb" href="#/carrito">${ic('back', 16)} Volver al carrito</a><div class="checkout-grid"><form id="co"><span>PASO 02 / 03</span><h1>Finalizar compra</h1><h3>Datos personales</h3><div class="form-two"><label>Nombre<input required autocomplete="given-name" placeholder="Tu nombre"></label><label>Apellido<input required autocomplete="family-name" placeholder="Tu apellido"></label></div><label>Correo electrónico<input required type="email" autocomplete="email" placeholder="nombre@correo.com"></label><h3>Envío</h3><label>Dirección<input required autocomplete="street-address" placeholder="Calle y número"></label><div class="form-two"><label>Ciudad<input required autocomplete="address-level2"></label><label>Código postal<input required autocomplete="postal-code"></label></div><h3>Pago simulado</h3><label class="payment-option"><input type="radio" name="pago" checked> Tarjeta de crédito o débito <span>Demo</span></label><button type="submit" class="moto-button">CONFIRMAR PEDIDO ${ic('arrow')}</button><small>No ingreses datos financieros reales. Este flujo es una demostración académica.</small></form>
<aside><h2>Tu pedido</h2>${cart.map((i) => { const p = byId(i.id); return `<div class="line"><div class="art">${pic(p)}</div><p><b>${p.name}</b><span>Talle ${i.size} · Cantidad ${i.qty}</span></p></div>`; }).join('')}<hr><p><span>Envío</span><b>${ship() ? money(ship()) : 'Gratis'}</b></p><p><span>Total</span><b>${money(total() + ship())}</b></p></aside></div></main>`;
}
function bindCheckout() { const f = $('#co'); if (f) f.addEventListener('submit', (e) => { e.preventDefault(); cart = []; save(); location.hash = '#/exito'; }); }
const viewSuccess = () => `<main class="success-page"><div class="success-mark">${ic('check', 38)}</div><span>PASO 03 / 03</span><h1>Pedido confirmado</h1><p>Completaste el prototipo de compra. No se procesó ningún pago ni se almacenaron datos personales.</p><div><span>NÚMERO DE DEMOSTRACIÓN</span><b>MZ-2026-${String(Math.floor(Math.random() * 9000) + 1000)}</b></div><a class="moto-button" href="#/">VOLVER AL INICIO ${ic('arrow')}</a><a class="link-button" href="caso-motozone.html" style="margin-top:18px;border-bottom:1px solid;font-size:12px">Volver al caso de estudio</a></main>`;
const viewNotFound = () => `<main class="cart-page"><div class="shop-page-title"><h1>No encontrado</h1></div><a class="moto-button" href="#/">VOLVER AL INICIO</a></main>`;

// ---------- Router ----------
function route(keep) {
  const [path, q = ''] = location.hash.replace(/^#\/?/, '').split('?'), parts = path.split('/'), qs = new URLSearchParams(q);
  let html, after, title = 'MOTOZONE · Prototipo de tienda';
  document.querySelectorAll('#shop-nav a').forEach((a) => a.removeAttribute('aria-current'));
  if (parts[0] === 'catalogo') {
    if (!keep) { F.groups.clear(); if (qs.get('cat')) F.groups.add(qs.get('cat')); F.sale = qs.get('oferta') === '1'; }
    html = viewCatalog(); after = bindCatalog; title = 'Catálogo · MOTOZONE';
  } else if (parts[0] === 'producto') { html = viewProduct(parts[1]); after = () => bindProduct(parts[1]); title = (byId(parts[1])?.name || 'Producto') + ' · MOTOZONE'; }
  else if (parts[0] === 'carrito') { html = viewCart(); title = 'Carrito · MOTOZONE'; }
  else if (parts[0] === 'checkout') { html = viewCheckout(); after = bindCheckout; title = 'Finalizar compra · MOTOZONE'; }
  else if (parts[0] === 'exito') { html = viewSuccess(); title = 'Pedido confirmado · MOTOZONE'; }
  else html = viewHome();
  const y = scrollY; app.innerHTML = html; if (after) after();
  document.title = title; setMenu(false);
  if (keep) scrollTo(0, y); else { scrollTo({ top: 0, behavior: 'auto' }); app.focus({ preventScroll: true }); }
}
// ---------- Utilidades ----------
let tt; const toast = (m) => { const t = $('#toast'); t.textContent = m; t.classList.add('show'); clearTimeout(tt); tt = setTimeout(() => t.classList.remove('show'), 2600); };
const mb = $('.shop-menu'), nav = $('#shop-nav');
function setMenu(o) { mb.setAttribute('aria-expanded', String(o)); mb.setAttribute('aria-label', o ? 'Cerrar menú' : 'Abrir menú'); nav.classList.toggle('open', o); }
mb.addEventListener('click', () => setMenu(mb.getAttribute('aria-expanded') !== 'true'));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
// Si una foto remota no carga, se reemplaza por la ilustración del producto
document.addEventListener('error', (e) => { const i = e.target; if (i.tagName === 'IMG' && i.dataset.fallback) { const p = byId(i.dataset.fallback); i.outerHTML = art(p); } }, true);
bindCart(); save(); addEventListener('hashchange', () => route()); route();
