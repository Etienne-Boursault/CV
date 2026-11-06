// CV d'Étienne Boursault : vue éclatée du parcours, langue, thème, son et menu.
// Aucune dépendance. Les ressorts suivent le modèle d'Apple (amortissement + réponse) :
// toute animation part de la valeur affichée et peut être reprise en main à tout instant.
(() => {
  "use strict";
  const racine = document.documentElement;
  const reduit = matchMedia("(prefers-reduced-motion: reduce)");
  const tel = matchMedia("(max-width: 759px)");
  const langue = () => (racine.lang === "en" ? "en" : "fr");
  const tr = v => (v && typeof v === "object" ? v[langue()] : v);
  const memoriser = (cle, val) => { try { localStorage.setItem(cle, val); } catch (e) { /* stockage indisponible : le choix vaut pour la visite */ } };

  const TEXTES = {
    titre: { fr: "Étienne Boursault · Développeur full stack", en: "Étienne Boursault · Full stack developer" },
    description: {
      fr: "Développeur full stack chez Fairphone à Amsterdam (Kotlin, Vue.js, TypeScript), basé à Utrecht. Ingénieur en polymères et composites de 2011 à 2018, spécialisé en injection thermoplastique ; développeur depuis 2019.",
      en: "Full stack developer at Fairphone in Amsterdam (Kotlin, Vue.js, TypeScript), based in Utrecht. Polymer and composites engineer from 2011 to 2018, specialised in thermoplastic injection moulding; developer since 2019."
    },
    scene: { fr: "Vue éclatée du parcours", en: "Exploded view of my career" },
    assembler: { fr: "Assembler", en: "Assemble" },
    eclater: { fr: "Éclater", en: "Explode" },
    indicePc: { fr: "Tire un pli vers la droite, ou choisis-le dans la légende.", en: "Drag a ply to the right, or pick it in the legend." },
    indiceTel: { fr: "Touche un pli, ou fais-le glisser.", en: "Tap a ply, or drag it." },
    indiceDev: { fr: "// tire un pli à travers la couture", en: "// drag a ply across the seam" }
  };

  // Les plis, du premier posé (en bas) à la surface. « prim » : le primaire d'accrochage, posé sur la couture.
  const PLIS = [
    { ang: 0, nat: "ing", syn: "var(--s-ing)",
      titre: { fr: "Alternance ISPA · Mines de Douai", en: "Work-study, ISPA · Mines de Douai" }, court: "ISPA · 2011–16", dates: "2011–2016",
      ft: { fr: "PLI 1 · 0°", en: "PLY 1 · 0°" }, ftDev: "ispa.alternance",
      dev: { fr: "fondations()", en: "foundations()" }, devSous: { fr: "matériaux · essais · méthode", en: "materials · testing · method" },
      detail: { fr: "Cinq ans en alternance : technicien d'injection chez Cooper Standard à Rennes, puis ingénieur méthodes chez Aptar. Diplôme d'ingénieur en polymères et composites.",
                en: "Five years of work-study: injection technician at Cooper Standard in Rennes, then methods engineer at Aptar. Engineering degree in polymers and composites." },
      detailDev: { fr: "// mesurer avant de conclure, documenter chaque essai", en: "// measure before concluding, document every test" } },
    { ang: 90, nat: "ing", syn: "var(--s-ing)",
      titre: { fr: "FPSA Groupe · ingénieur chef de projet", en: "FPSA Groupe · engineering project manager" }, court: "FPSA · 2016–18", dates: "2016–2018",
      ft: { fr: "PLI 2 · 90°", en: "PLY 2 · 90°" }, ftDev: "fpsa.projets",
      dev: { fr: "pilotage()", en: "delivery()" }, devSous: { fr: "20 projets · 4 M€ · lean", en: "20 projects · €4M · lean" },
      detail: { fr: "Vingt projets de pièces automobiles injectées, une équipe internationale à Timișoara, 4 M€ de budget.",
                en: "Twenty injection-moulded automotive part projects, an international team in Timișoara, a €4M budget." },
      detailDev: { fr: "// livrer à date, avec une équipe répartie", en: "// ship on time, with a distributed team" } },
    { ang: 0, nat: "prim", syn: "var(--s-prim)",
      titre: { fr: "Groupe Adaming · formation full stack", en: "Groupe Adaming · full stack bootcamp" }, court: "Adaming · 2019", dates: "2019",
      ft: { fr: "PRIMAIRE", en: "PRIMER" }, ftDev: "adaming.bootcamp",
      dev: "Java · Spring · Angular", devSous: { fr: "la reconversion", en: "the career change" },
      detail: { fr: "La couche d'accrochage entre les deux métiers.", en: "The bonding layer between the two trades." },
      detailDev: { fr: "// le primaire d'accrochage : il fait tenir les deux matériaux ensemble", en: "// the primer: it bonds the two materials together" } },
    { ang: 45, nat: "dev", syn: "var(--s-dev)",
      titre: { fr: "Sopra Steria · développeur full stack", en: "Sopra Steria · full stack developer" }, court: "Sopra Steria · 2019–22", dates: "2019–2022",
      ft: { fr: "PLI 3 · +45°", en: "PLY 3 · +45°" }, ftDev: "<SopraSteria/>",
      dev: "Java 8 · Spring · Angular", devSous: { fr: "3 M+ clients · zéro interruption", en: "3M+ customers · zero downtime" },
      detail: { fr: "Une application qui donne à plus de 3 millions de clients l'accès à leur consommation d'énergie, sans interruption de service.",
                en: "An app giving over 3 million customers access to their energy use, with zero downtime." },
      detailDev: "Java 8 · Spring · Angular · PHP 7.4 · Oracle" },
    { ang: -45, nat: "dev", syn: "var(--s-dev)",
      titre: { fr: "Klee Group · développeur full stack", en: "Klee Group · full stack developer" }, court: "Klee Group · 2022–23", dates: "2022–2023",
      ft: { fr: "PLI 4 · −45°", en: "PLY 4 · −45°" }, ftDev: "<KleeGroup/>",
      dev: "Angular 14 · TypeScript", devSous: "Spring · Java 11 · BDD",
      detail: { fr: "Une application de suivi des maladies à transmission vectorielle, utilisée par 5 000 personnes.",
                en: "A tracking app for vector-borne diseases, used by 5,000 people." },
      detailDev: "Angular 14 · TypeScript · Spring · Java 11 · BDD" },
    { ang: 0, nat: "dev", now: true, syn: "var(--s-now)",
      titre: { fr: "Fairphone · développeur full stack", en: "Fairphone · full stack developer" }, court: { fr: "Fairphone · en poste", en: "Fairphone · current" },
      dates: { fr: "depuis 2023", en: "since 2023" },
      ft: { fr: "PLI 5 · 0°", en: "PLY 5 · 0°" }, ftDev: "<Fairphone/>",
      dev: "Kotlin · Spring Boot · Vue.js", devSous: { fr: "PostgreSQL · en poste", en: "PostgreSQL · current" },
      detail: { fr: "Une dizaine de microservices au service de téléphones modulaires et réparables, de la garantie à la réparation.",
                en: "About ten microservices behind modular, repairable phones, from warranty to repair." },
      detailDev: "Kotlin · Spring Boot · Vue.js · TypeScript · PostgreSQL" },
    { ang: 0, nat: "gel", syn: "var(--s-gel)",
      titre: { fr: "unebonnere.co · projet personnel", en: "unebonnere.co · side project" }, court: "unebonnere.co", dates: "2026",
      ft: "GELCOAT", ftDev: "unebonnere.co",
      dev: "Astro · Python · Whisper · LLM", devSous: { fr: "8 700+ tests · WCAG AA", en: "8,700+ tests · WCAG AA" },
      detail: { fr: "Les recommandations d'un podcast, extraites par l'IA et relues à la main.", en: "A podcast's recommendations, extracted by AI and checked by hand." },
      detailDev: "Astro · Python · Whisper · Anthropic + OpenAI" }
  ];
  const N = PLIS.length, PRIM = PLIS.findIndex(p => p.nat === "prim"), SIN = Math.sin(56 * Math.PI / 180);
  // Écart relatif sous chaque pli : le primaire est une couche mince, ses voisins s'en rapprochent.
  const ECARTS = PLIS.map((p, i) => (i === 0 ? 0 : (i === PRIM || i - 1 === PRIM ? 0.6 : 1)));
  const CUMUL = ECARTS.reduce((acc, e, i) => (acc.push((acc[i - 1] || 0) + e), acc), []);
  const REG = {
    pc: { W: 200, H: 132, cx: 0.5, base: 7, ecart: 38, tire: 96 },
    tel: { W: 150, H: 100, cx: 0.3, base: 5, ecart: 31, tire: 44 }
  };

  // Ressort à la manière d'Apple : amortissement + réponse ; interruptible, part de la valeur affichée
  class Ressort {
    constructor(x, reponse, amort, eps = 0.05) { Object.assign(this, { x, v: 0, cible: x, reponse, amort, eps }); }
    vers(c, amort) { this.cible = c; if (amort !== undefined) this.amort = amort; if (reduit.matches) { this.x = c; this.v = 0; } }
    pas(dt) { const k = (2 * Math.PI / this.reponse) ** 2, c = 4 * Math.PI * this.amort / this.reponse; this.v += (-k * (this.x - this.cible) - c * this.v) * dt; this.x += this.v * dt; }
    get repos() { return Math.abs(this.v) < this.eps * 10 && Math.abs(this.x - this.cible) < this.eps; }
    fixer() { this.x = this.cible; this.v = 0; }
  }
  const projeter = (v, d = 0.99) => (v / 1000) * d / (1 - d);
  const elastique = (o, dim, k = 0.55) => (o * dim * k) / (dim + k * Math.abs(o));

  // Son : coupé par défaut, deux clics brefs, déclenchés sur l'événement qui les cause
  let audio = null, sonActif = false;
  const btnSon = document.getElementById("son");
  btnSon.addEventListener("click", () => {
    sonActif = !sonActif; btnSon.setAttribute("aria-pressed", String(sonActif));
    if (sonActif && !audio) audio = new (window.AudioContext || window.webkitAudioContext)();
    if (sonActif) clic(true);
  });
  function clic(haut) {
    if (!sonActif || !audio) return;
    const t = audio.currentTime, o = audio.createOscillator(), g = audio.createGain();
    o.type = "sine"; o.frequency.setValueAtTime(haut ? 880 : 520, t); o.frequency.exponentialRampToValueAtTime(haut ? 1320 : 340, t + 0.06);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.12, t + 0.005); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.09);
    o.connect(g).connect(audio.destination); o.start(t); o.stop(t + 0.1);
  }

  const scene = document.querySelector(".scene"), btn = document.querySelector(".eclater");
  const [detG, detD] = document.querySelectorAll(".detail");
  const eclat = new Ressort(0, 0.55, 1, 0.0005);
  const tire = PLIS.map(() => new Ressort(0, 0.42, 1));
  const leve = PLIS.map(() => new Ressort(0, 0.3, 1));
  let ouvert = -1, glisse = null, raf = 0, dernier = 0, geo = { W: 200, H: 132, tire: 96, tel: false, f: 1, R: REG.pc };

  const couches = {};
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"); svg.classList.add("leaders"); svg.setAttribute("aria-hidden", "true");
  ["ing", "dev"].forEach(nom => {
    const couche = document.createElement("div"); couche.className = "couche " + nom; couche.setAttribute("aria-hidden", "true");
    const pile = document.createElement("div"); pile.className = "stack";
    const plis = PLIS.map((p, i) => {
      const el = document.createElement("div");
      el.className = "pli" + (p.now ? " now" : "") + (p.nat === "gel" ? " gel" : "") + (p.nat === "prim" ? " prim" : "");
      el.dataset.i = i; el.style.setProperty("--ang", p.ang + "deg"); el.style.setProperty("--syn", p.syn);
      el.innerHTML = '<div class="hach"></div><span class="ft"></span><i class="ancre ancre-l"></i><i class="ancre ancre-r"></i>';
      pile.appendChild(el); return el;
    });
    couche.appendChild(pile); scene.appendChild(couche);
    couches[nom] = { pile, plis };
  });
  scene.appendChild(svg);

  const legendes = ["l", "r", "t"].map(cote => {
    const ol = document.createElement("ol"); ol.className = "legende cote-" + cote; const boutons = [], lis = [];
    for (let i = N - 1; i >= 0; i--) {
      const li = document.createElement("li"), b = document.createElement("button");
      b.type = "button"; b.dataset.i = i; b.setAttribute("aria-expanded", "false"); b.style.setProperty("--syn", PLIS[i].syn);
      if (cote === "t" && i === PRIM) li.classList.add("prim");
      li.appendChild(b); ol.appendChild(li); boutons[i] = b; lis[i] = li;
    }
    scene.appendChild(ol);
    return { cote, ol, boutons, lis };
  });

  // Tous les textes générés de la vue éclatée, dans la langue courante
  function ecrireTextes() {
    scene.setAttribute("aria-label", tr(TEXTES.scene));
    PLIS.forEach((p, i) => {
      couches.ing.plis[i].querySelector(".ft").textContent = tr(p.ft);
      couches.dev.plis[i].querySelector(".ft").textContent = tr(p.ftDev);
    });
    legendes.forEach(l => l.boutons.forEach((b, i) => {
      const p = PLIS[i];
      if (l.cote === "l") b.innerHTML = `<span class="l1">${tr(p.titre)}</span><span class="l2">${tr(p.ft)} · ${tr(p.dates)}</span>`;
      else if (l.cote === "r") b.innerHTML = `<span class="l1">${tr(p.dev)}</span><span class="l2">${tr(p.devSous)}</span>`;
      else b.innerHTML = `<span><span class="pt">●</span> ${tr(p.court)}</span>`;
    }));
    afficherDetail();
  }
  function afficherDetail() {
    const p = PLIS[ouvert];
    if (!p) {
      detG.innerHTML = `<span class="indice">${tr(geo.tel ? TEXTES.indiceTel : TEXTES.indicePc)}</span>`;
      detD.innerHTML = `<span class="indice">${tr(TEXTES.indiceDev)}</span>`;
    } else {
      detG.innerHTML = `<div class="t">${tr(p.titre)} · ${tr(p.dates)}</div><div>${tr(p.detail)}</div><div class="pile">${tr(p.detailDev)}</div>`;
      detD.innerHTML = `<div class="t">${tr(p.dev)}</div><div>${tr(p.detailDev)}</div>`;
    }
    legendes.forEach(l => l.boutons.forEach((b, i) => b.setAttribute("aria-expanded", String(i === ouvert))));
  }
  function ouvrir(i, v = 0) {
    const avant = ouvert; ouvert = i;
    tire.forEach((r, j) => { if (j !== i && r.cible !== 0) r.vers(0, 1); });
    if (i >= 0) { tire[i].v = v; tire[i].vers(geo.tire, Math.abs(v) > 300 ? 0.72 : 1); clic(true); } else if (avant >= 0) clic(false);
    afficherDetail(); relancer();
  }
  function refermer(i, v = 0) {
    tire[i].v = v; tire[i].vers(0, Math.abs(v) > 300 ? 0.72 : 1);
    if (ouvert === i) { ouvert = -1; clic(false); afficherDetail(); }
    relancer();
  }
  function chaud(i, oui) {
    leve[i].vers(oui ? 12 : 0); relancer();
    Object.values(couches).forEach(c => c.plis[i].classList.toggle("chaud", oui));
    legendes.forEach(l => l.boutons[i].classList.toggle("chaud", oui));
  }

  function disposer() {
    geo.tel = tel.matches;
    const R = geo.tel ? REG.tel : REG.pc;
    const f = geo.tel ? Math.min(1, scene.clientWidth / 390) : 1;
    geo.W = R.W * f; geo.H = R.H * f; geo.tire = R.tire; geo.R = R; geo.f = f;
    const L = scene.clientWidth, Hs = scene.clientHeight;
    const etale = CUMUL[N - 1] * (R.base + R.ecart) * f * SIN;
    const cx = R.cx * L, cy = Hs / 2 + etale / 2;
    Object.values(couches).forEach(c => Object.assign(c.pile.style, { width: geo.W + "px", height: geo.H + "px", left: (cx - geo.W / 2) + "px", top: (cy - geo.H / 2) + "px" }));
    if (ouvert >= 0) { tire[ouvert].cible = geo.tire; tire[ouvert].fixer(); }
    afficherDetail(); dessiner();
  }

  const milieu = el => { const r = el.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; };
  function dessiner() {
    const R = geo.R;
    for (let i = 0; i < N; i++) {
      const z = CUMUL[i] * (R.base + R.ecart * eclat.x) * geo.f + leve[i].x, a = tire[i].x / Math.SQRT2;
      const t = `translate3d(${a.toFixed(2)}px, ${a.toFixed(2)}px, ${z.toFixed(2)}px)`;
      couches.ing.plis[i].style.transform = t; couches.dev.plis[i].style.transform = t;
    }
    btn.textContent = tr(eclat.cible > 0.5 ? TEXTES.assembler : TEXTES.eclater);
    const rs = scene.getBoundingClientRect();
    let traits = "";
    if (geo.tel) {
      // Couture horizontale : elle passe au milieu du primaire, entre l'ingénierie et le développement
      const seam = milieu(couches.ing.plis[PRIM]).y - rs.top;
      scene.style.setProperty("--seam", seam.toFixed(1) + "px");
      const lt = legendes[2], op = Math.max(0, Math.min(1, (eclat.x - 0.55) / 0.35));
      for (let i = 0; i < N; i++) {
        const an = milieu(couches.ing.plis[i].querySelector(".ancre-r"));
        const x1 = an.x - rs.left, y1 = an.y - rs.top, sombre = i > PRIM;
        const li = lt.lis[i]; li.classList.toggle("sombre", sombre);
        li.style.top = (y1 - 11) + "px"; li.style.opacity = op; li.style.visibility = op > 0.02 ? "visible" : "hidden";
        const x2 = li.getBoundingClientRect().left - rs.left;
        const coul = i === PRIM || i === ouvert ? "var(--acc)" : sombre ? PLIS[i].syn : "var(--ink)";
        if (op > 0.02) traits += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y1}" style="stroke:${coul};stroke-width:.9px;opacity:${op * 0.8}"/><circle cx="${x1}" cy="${y1}" r="2.4" style="fill:${coul};opacity:${op}"/>`;
      }
    } else {
      legendes.slice(0, 2).forEach(l => {
        const plis = l.cote === "l" ? couches.ing.plis : couches.dev.plis;
        for (let i = 0; i < N; i++) {
          const an = milieu(plis[i].querySelector(".ancre-" + l.cote)), lb = l.boutons[i].getBoundingClientRect();
          const x1 = an.x - rs.left, y1 = an.y - rs.top;
          const x2 = (l.cote === "r" ? lb.left - 6 : lb.right + 6) - rs.left, y2 = lb.top + lb.height / 2 - rs.top;
          const actif = i === ouvert || l.boutons[i].classList.contains("chaud");
          const coul = l.cote === "r" ? PLIS[i].syn : (actif ? "var(--acc)" : "var(--ink)");
          const coude = l.cote === "r" ? x2 - 18 : x2 + 18;
          traits += `<polyline points="${x1},${y1} ${coude},${y2} ${x2},${y2}" style="fill:none;stroke:${coul};stroke-width:${actif ? 1.6 : 0.9}px;opacity:${actif ? 1 : 0.75}"/><circle cx="${x1}" cy="${y1}" r="2.6" style="fill:${coul}"/>`;
        }
      });
    }
    svg.innerHTML = traits;
  }

  function relancer() { if (!raf) { dernier = performance.now(); raf = requestAnimationFrame(tic); } }
  function tic(t) {
    const dt = Math.min(0.034, Math.max(0, t - dernier) / 1000); dernier = t;
    const tous = [eclat, ...tire, ...leve], tenu = glisse ? tire[glisse.i] : null;
    const n = Math.max(1, Math.round(dt * 240)), h = dt / n;
    for (let s = 0; s < n; s++) tous.forEach(r => { if (r !== tenu) r.pas(h); });
    let bouge = !!glisse;
    tous.forEach(r => { if (r === tenu) return; if (r.repos) r.fixer(); else bouge = true; });
    dessiner();
    raf = bouge ? requestAnimationFrame(tic) : 0;
  }

  btn.addEventListener("click", () => { eclat.vers(eclat.cible > 0.5 ? 0 : 1); relancer(); });

  scene.addEventListener("pointerdown", e => {
    const pli = e.target.closest(".pli"); if (!pli || e.button > 0) return;
    const i = +pli.dataset.i; pli.setPointerCapture(e.pointerId);
    glisse = { i, id: e.pointerId, x0: e.clientX, depart: tire[i].x, hist: [{ t: e.timeStamp, x: tire[i].x }], bouge: false };
    tire[i].v = 0; relancer();
  });
  scene.addEventListener("pointermove", e => {
    if (!glisse || e.pointerId !== glisse.id) return;
    const dx = e.clientX - glisse.x0; if (!glisse.bouge && Math.abs(dx) < 6) return;
    glisse.bouge = true;
    let x = glisse.depart + dx;
    if (x < 0) x = -elastique(-x, 140); else if (x > geo.tire) x = geo.tire + elastique(x - geo.tire, 140);
    tire[glisse.i].x = x; tire[glisse.i].cible = x;
    glisse.hist.push({ t: e.timeStamp, x }); if (glisse.hist.length > 6) glisse.hist.shift();
    relancer();
  });
  scene.addEventListener("pointerup", e => {
    if (!glisse || e.pointerId !== glisse.id) return;
    const { i, hist, bouge } = glisse; glisse = null;
    if (!bouge) { ouvert === i ? refermer(i) : ouvrir(i); return; }
    const a = hist[0], b = hist[hist.length - 1], v = b.t > a.t ? (b.x - a.x) / ((b.t - a.t) / 1000) : 0;
    if (tire[i].x + projeter(v) > geo.tire / 2) { if (ouvert !== i) ouvrir(i, v); else { tire[i].v = v; tire[i].vers(geo.tire, Math.abs(v) > 300 ? 0.72 : 1); relancer(); } }
    else refermer(i, v);
  });
  scene.addEventListener("pointercancel", e => { if (glisse && e.pointerId === glisse.id) { const i = glisse.i; glisse = null; refermer(i); } });
  scene.addEventListener("pointerover", e => { const el = e.target.closest(".pli, .legende button"); if (el) chaud(+el.dataset.i, true); });
  scene.addEventListener("pointerout", e => { const el = e.target.closest(".pli, .legende button"); if (el && !el.contains(e.relatedTarget)) chaud(+el.dataset.i, false); });
  legendes.forEach(l => l.boutons.forEach((b, i) => {
    b.addEventListener("click", () => { ouvert === i ? refermer(i) : ouvrir(i); });
    b.addEventListener("focus", () => chaud(i, true)); b.addEventListener("blur", () => chaud(i, false));
  }));

  // Langue : le script d'en-tête a déjà choisi ; ici on accorde la barre, le titre et la vue éclatée
  const boutonsLangue = document.querySelectorAll(".langue button");
  function appliquerLangue(l, choisie) {
    racine.lang = l;
    if (choisie) memoriser("cv-langue", l);
    boutonsLangue.forEach(b => b.setAttribute("aria-pressed", String(b.dataset.l === l)));
    document.title = TEXTES.titre[l];
    const meta = document.querySelector('meta[name="description"]'); if (meta) meta.content = TEXTES.description[l];
    ecrireTextes(); dessiner();
  }
  boutonsLangue.forEach(b => b.addEventListener("click", () => appliquerLangue(b.dataset.l, true)));

  new ResizeObserver(disposer).observe(scene);
  tel.addEventListener("change", disposer);
  appliquerLangue(langue(), false);
  disposer();
  if (reduit.matches) { eclat.vers(1); eclat.fixer(); dessiner(); }
  else setTimeout(() => { eclat.vers(1); relancer(); }, 450);

  // Barre : ombre de séparation seulement quand du contenu passe dessous
  const barre = document.querySelector(".barre");
  addEventListener("scroll", () => barre.classList.toggle("decollee", scrollY > 4), { passive: true });
  // Comme un grand titre iOS : le nom n'apparaît dans la barre qu'une fois celui du héros sorti de l'écran
  new IntersectionObserver(([e]) => barre.classList.toggle("titre-visible", !e.isIntersecting), { rootMargin: "-56px 0px 0px 0px" }).observe(document.getElementById("titre"));

  // Menu (téléphone) : s'ouvre depuis son bouton, se ferme au choix d'une section ou avec Échap
  const menuBtn = document.getElementById("menu-btn"), menu = document.getElementById("menu");
  const fermerMenu = () => { menu.classList.remove("ouvert"); menuBtn.setAttribute("aria-expanded", "false"); };
  menuBtn.addEventListener("click", () => { const o = !menu.classList.contains("ouvert"); menu.classList.toggle("ouvert", o); menuBtn.setAttribute("aria-expanded", String(o)); });
  menu.addEventListener("click", e => { if (e.target.closest("a")) fermerMenu(); });
  addEventListener("keydown", e => { if (e.key === "Escape" && menu.classList.contains("ouvert")) { fermerMenu(); menuBtn.focus(); } });

  // Thème : bascule clair / sombre, retenue pour les visites suivantes
  document.getElementById("theme").addEventListener("click", () => {
    const sombre = getComputedStyle(racine).colorScheme.includes("dark");
    const t = sombre ? "light" : "dark";
    racine.setAttribute("data-theme", t); memoriser("cv-theme", t);
  });
})();
