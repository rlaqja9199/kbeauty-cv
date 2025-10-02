import React, { useMemo, useState } from "react"

export default function App() {
  const [locale, setLocale] = useState("pt"); // default to Portuguese
  const [currency, setCurrency] = useState("CVE");

  const t = useMemo(() => {
    const dict = {
      ko: {
        brand: "Mellylue — K‑Beauty Cabo Verde",
        tagline: "카보베르데에서 만나는 정품 K‑뷰티",
        subtag:
          "ERIS 기준을 준수한 공식 수입·유통. 피부 타입별로 정확히 추천하고, 합리적인 가격으로 제공합니다.",
        shopNow: "지금 문의하기",
        heroNote:
          "Mindelo/Praia 픽업 · 섬간 배송 · WhatsApp 상담 (포르투갈어/한국어/영어)",
        badges: { bestseller: "베스트", new: "신상", clean: "클린" },
        sectionProducts: "추천 제품",
        sectionWhy: "왜 우리여야 하나요?",
        whyBullets: [
          "정품 보장 — 제조사/총판과 직계약, 위조품 Zero",
          "ERIS 등록 지원 — 성분·라벨·문서 패키지 준비",
          "합리적 가격 — CVE 기준 투명한 가격정책",
          "애프터케어 — 피부 반응/교환 문의 신속 처리",
        ],
        sectionStores: "매장/픽업",
        mindelo: "민델루 (Mindelo)",
        praia: "프라이아 (Praia)",
        hours: "영업시간",
        contact: "연락하기",
        formTitle: "도매/입점/협업 문의",
        name: "이름",
        email: "이메일",
        message: "메시지",
        send: "메일 보내기",
        footer:
          "© " + new Date().getFullYear() + " Mellylue — K‑Beauty Cabo Verde. All rights reserved.",
        priceFrom: (p) => `부터`,
        currencyLabel: "통화",
        langLabel: "언어",
      },
      pt: {
        brand: "Mellylue — K‑Beauty Cabo Verde",
        tagline: "Beleza coreana autêntica em Cabo Verde",
        subtag:
          "Importação e distribuição oficiais em conformidade com a ERIS. Recomendação precisa por tipo de pele, a preços justos.",
        shopNow: "Falar no WhatsApp",
        heroNote:
          "Pickup em Mindelo/Praia · Entrega inter‑ilhas · Suporte em PT/KO/EN",
        badges: { bestseller: "Mais vendido", new: "Novidade", clean: "Clean" },
        sectionProducts: "Produtos em destaque",
        sectionWhy: "Porquê nós?",
        whyBullets: [
          "Autenticidade — contratos diretos, zero falsificações",
          "Conformidade ERIS — dossiês de ingredientes/rotulagem",
          "Preço justo — política transparente em CVE",
          "Pós‑venda — resposta rápida a trocas e reações",
        ],
        sectionStores: "Lojas/Pontos de recolha",
        mindelo: "Mindelo",
        praia: "Praia",
        hours: "Horário",
        contact: "Contactos",
        formTitle: "Atacado/Parcerias/Colaboração",
        name: "Nome",
        email: "Email",
        message: "Mensagem",
        send: "Enviar email",
        footer:
          "© " + new Date().getFullYear() + " Mellylue — K‑Beauty Cabo Verde. Todos os direitos reservados.",
        priceFrom: (p) => `desde`,
        currencyLabel: "Moeda",
        langLabel: "Idioma",
      },
      en: {
        brand: "Mellylue — K‑Beauty Cabo Verde",
        tagline: "Authentic K‑Beauty in Cabo Verde",
        subtag:
          "Official importing & distribution compliant with ERIS. Skin‑type matched picks at fair prices.",
        shopNow: "Chat on WhatsApp",
        heroNote:
          "Mindelo/Praia pickup · Inter‑island delivery · Support in PT/KO/EN",
        badges: { bestseller: "Bestseller", new: "New", clean: "Clean" },
        sectionProducts: "Featured Products",
        sectionWhy: "Why us?",
        whyBullets: [
          "Genuine — direct with brands/distributors, zero fakes",
          "ERIS compliance — complete docs & labelling",
          "Fair pricing — transparent CVE pricing",
          "Aftercare — fast exchanges & skin reaction help",
        ],
        sectionStores: "Stores/Pickup",
        mindelo: "Mindelo",
        praia: "Praia",
        hours: "Hours",
        contact: "Contact",
        formTitle: "Wholesale/Stockist/Collab",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send email",
        footer:
          "© " + new Date().getFullYear() + " Mellylue — K‑Beauty Cabo Verde. All rights reserved.",
        priceFrom: (p) => `from`,
        currencyLabel: "Currency",
        langLabel: "Language",
      },
    };
    return dict[locale];
  }, [locale]);

  const products = [
    { id: "rb-barrier-cream", name: "Real Barrier Extreme Cream",
      desc: { ko: "손상 피부 장벽 케어의 스테디셀러", pt: "Clássico para barreira cutânea fragilizada", en: "Steady seller for damaged skin barrier" },
      priceCVE: 4200, tags: ["bestseller", "clean"] },
    { id: "roundlab-dokdo-toner", name: "Round Lab 1025 Dokdo Toner",
      desc: { ko: "미네랄 밸런싱 수분 토너", pt: "Tónico hidratante com minerais", en: "Mineral‑balanced hydrating toner" },
      priceCVE: 2800, tags: ["bestseller"] },
    { id: "abib-gummy-sheet", name: "Abib Gummy Sheet Mask",
      desc: { ko: "찰떡 시트 밀착 보습", pt: "Máscara com aderência tipo mochi", en: "Mochi‑fit sheet hydration" },
      priceCVE: 600, tags: ["new"] },
    { id: "cosrx-aha-bha", name: "COSRX AHA/BHA Toner",
      desc: { ko: "부드러운 각질·피지 케어", pt: "Esfoliação suave e sebo care", en: "Gentle exfoliation & sebum care" },
      priceCVE: 2300, tags: ["clean"] },
  ];

  function cvtPrice(pCVE) {
    const rate = { CVE: 1, USD: 0.0096, KRW: 13.5 };
    const val = pCVE * rate[currency];
    const fmt = new Intl.NumberFormat(
      locale === "pt" ? "pt-PT" : locale === "ko" ? "ko-KR" : "en-US",
      { style: "currency", currency: currency, currencyDisplay: "narrowSymbol", maximumFractionDigits: currency === "CVE" ? 0 : 2 }
    );
    return fmt.format(val);
  }

  const localeDesc = (d) => d[locale] || d.en;

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Top bar */}
      <div className="w-full border-b bg-white/70 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="font-semibold tracking-tight">{t.brand}</div>
          <div className="flex items-center gap-3">
            <label className="text-sm opacity-60">{t.langLabel}</label>
            <select className="rounded-xl border px-2 py-1 text-sm" value={locale} onChange={(e) => setLocale(e.target.value)}>
              <option value="pt">Português</option>
              <option value="en">English</option>
              <option value="ko">한국어</option>
            </select>
            <label className="text-sm opacity-60 ml-2">{t.currencyLabel}</label>
            <select className="rounded-xl border px-2 py-1 text-sm" value={currency} onChange={(e) => setCurrency(e.target.value)}>
              <option value="CVE">CVE</option>
              <option value="KRW">KRW</option>
              <option value="USD">USD</option>
            </select>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">{t.tagline}</h1>
            <p className="mt-4 text-lg opacity-80">{t.subtag}</p>
            <p className="mt-2 text-sm opacity-60">{t.heroNote}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="rounded-2xl shadow px-5 py-3 text-white bg-black" href="#contact">{t.shopNow}</a>
              <a className="rounded-2xl border px-5 py-3" href="https://wa.me/2380000000" target="_blank" rel="noreferrer">WhatsApp</a>
              <a className="rounded-2xl border px-5 py-3" href="tel:+2389000000">+238 900 0000</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl bg-neutral-100 shadow-inner" />
            <div className="absolute -bottom-3 -right-3 rounded-2xl bg-white px-4 py-2 shadow">
              <span className="text-sm opacity-70">ERIS‑ready · Clean · Cruelty‑free</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-neutral-50 border-y" id="products">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold">{t.sectionProducts}</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <div key={p.id} className="rounded-3xl bg-white shadow-sm p-4 hover:shadow-md transition">
                <div className="aspect-square rounded-2xl bg-neutral-100" />
                <div className="mt-3 flex items-center gap-2 flex-wrap">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-[11px] rounded-full border px-2 py-0.5 opacity-80">{t.badges[tag]}</span>
                  ))}
                </div>
                <h3 className="mt-2 font-semibold">{p.name}</h3>
                <p className="text-sm opacity-70">{localeDesc(p.desc)}</p>
                <div className="mt-3 font-semibold">{cvtPrice(p.priceCVE)} <span className="text-xs opacity-60">{t.priceFrom()}</span></div>
                <a className="mt-3 inline-block text-sm underline" href="#contact">WhatsApp · Instagram · Email</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section id="why" className="">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold">{t.sectionWhy}</h2>
          <ul className="mt-6 grid md:grid-cols-2 gap-4">
            {t.whyBullets.map((b, i) => (
              <li key={i} className="rounded-2xl bg-white p-4 shadow-sm border">
                <div className="text-sm">{b}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stores */}
      <section id="stores" className="bg-neutral-50 border-y">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold">{t.sectionStores}</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl bg-white p-5 shadow-sm border">
              <h3 className="font-semibold">{t.mindelo}</h3>
              <p className="text-sm opacity-70">Centro — Próximo do Centro Cultural do Mindelo</p>
              <p className="text-sm mt-1 opacity-70">{t.hours}: 10:00–19:00 (Mon–Sat)</p>
              <a className="inline-block mt-3 rounded-xl border px-3 py-2 text-sm" href="#" target="_blank" rel="noreferrer">Google Maps</a>
            </div>
            <div className="rounded-3xl bg-white p-5 shadow-sm border">
              <h3 className="font-semibold">{t.praia}</h3>
              <p className="text-sm opacity-70">Plateau — perto de Quebra Canela / Palmarejo</p>
              <p className="text-sm mt-1 opacity-70">{t.hours}: 10:00–19:00 (Mon–Sat)</p>
              <a className="inline-block mt-3 rounded-xl border px-3 py-2 text-sm" href="#" target="_blank" rel="noreferrer">Google Maps</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold">{t.contact}</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl bg-white p-6 shadow-sm border">
              <h3 className="font-semibold">{t.formTitle}</h3>
              <form className="mt-4" action="mailto:contact@kbeauty.cv" method="post" encType="text/plain">
                <label className="text-sm opacity-70">{t.name}</label>
                <input className="mt-1 w-full rounded-xl border px-3 py-2" name="name" required />
                <label className="text-sm opacity-70 mt-4 block">{t.email}</label>
                <input type="email" className="mt-1 w-full rounded-xl border px-3 py-2" name="email" required />
                <label className="text-sm opacity-70 mt-4 block">{t.message}</label>
                <textarea className="mt-1 w-full rounded-xl border px-3 py-2 h-28" name="message" />
                <button className="mt-4 rounded-2xl bg-black text-white px-5 py-3">{t.send}</button>
              </form>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm border space-y-3">
              <a className="block rounded-xl border px-4 py-3" href="https://wa.me/2380000000" target="_blank" rel="noreferrer">WhatsApp: +238 000 0000</a>
              <a className="block rounded-xl border px-4 py-3" href="mailto:contact@kbeauty.cv">Email: contact@kbeauty.cv</a>
              <a className="block rounded-xl border px-4 py-3" href="tel:+2389000000">Tel: +238 900 0000</a>
              <a className="block rounded-xl border px-4 py-3" href="#" target="_blank" rel="noreferrer">Instagram</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm opacity-70 flex flex-col md:flex-row items-center justify-between gap-3">
          <span>{t.footer}</span>
          <div className="flex items-center gap-3">
            <a className="underline" href="#">Política de Privacidade</a>
            <a className="underline" href="#">Termos</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
