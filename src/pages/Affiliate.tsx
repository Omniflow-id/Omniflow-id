import { Award, BadgePercent, Globe, Infinity, Shield, Star, TrendingUp, Users, Zap } from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SEOHead from "../components/SEOHead";
import StructuredData from "../components/StructuredData";

export default function AffiliatePage() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tiers: Array<{ name: string; mods: string; pct: string; desc: string; featured?: boolean }> = t("affiliate.tiers.items", { returnObjects: true }) as any;
  const schemes: Array<{ icon: string; title: string; desc: string; audience: string }> = t("affiliate.schemes.items", { returnObjects: true }) as any;
  const benefits: Array<{ icon: string; title: string; desc: string }> = t("affiliate.benefits.items", { returnObjects: true }) as any;
  const steps: Array<{ step: string; title: string; desc: string }> = t("affiliate.steps.items", { returnObjects: true }) as any;
  const faq: Array<{ q: string; a: string }> = t("affiliate.faq.items", { returnObjects: true }) as any;
  const testimonials: Array<{ quote: string; name: string; role: string }> = t("affiliate.testimonials.items", { returnObjects: true }) as any;

  const iconMap: Record<string, React.ReactNode> = {
    TrendingUp: <TrendingUp className="w-6 h-6 text-blue-600" />,
    Users: <Users className="w-6 h-6 text-blue-600" />,
    Zap: <Zap className="w-6 h-6 text-blue-600" />,
    Shield: <Shield className="w-6 h-6 text-blue-600" />,
    Infinity: <Infinity className="w-6 h-6 text-blue-600" />,
    Globe: <Globe className="w-6 h-6 text-blue-600" />,
    Award: <Award className="w-6 h-6 text-blue-600" />,
    BadgePercent: <BadgePercent className="w-6 h-6 text-blue-600" />,
    Star: <Star className="w-6 h-6 text-blue-600" />,
  };

  return (
    <>
      <SEOHead
        title={t("affiliate.title")}
        description={t("affiliate.subtitle")}
        keywords="affiliate, reseller ERP, whitelabel, program afiliasi, komisi ERP, reseller omniflow"
        type="website"
      />
      <StructuredData
        type="Organization"
        data={{ name: "Omniflow Affiliate Program", description: t("affiliate.subtitle") }}
      />
      <div className="min-h-screen bg-white">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(5,150,105,0.1),transparent_50%)]" />
          <div className="container-enterprise relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                  <BadgePercent className="w-4 h-4" />
                  {t("affiliate.hero.badge")}
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  {t("affiliate.hero.title")}
                </h1>
                <p className="text-lg text-blue-200/80 mb-8 max-w-xl">
                  {t("affiliate.hero.subtitle")}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={t("affiliate.hero.ctaWhatsapp")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cta-light inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold"
                  >
                    {t("affiliate.hero.ctaText")}
                  </a>
                  <a href="#how-it-works" className="btn-cta-outline inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border border-white/20 text-white hover:bg-white/10 transition-colors">
                    {t("affiliate.hero.howItWorks")}
                  </a>
                </div>
              </div>
              <div className="hidden lg:flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl blur-xl opacity-30" />
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 w-80">
                    <div className="flex gap-2 mb-6">
                      <div className="w-3 h-3 rounded-full bg-red-400/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400/60" />
                    </div>
                    <div className="text-center">
                      <div className="text-7xl font-bold text-white mb-2">{t("affiliate.hero.commissionPct")}</div>
                      <div className="text-blue-200/70 text-sm mb-4">{t("affiliate.hero.commissionLabel")}</div>
                      <div className="h-px bg-white/10 mb-4" />
                      <div className="text-white/60 text-sm">{t("affiliate.hero.cardDesc")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <BadgePercent className="w-6 h-6 text-blue-300" />
                </div>
                <div className="text-2xl font-bold text-white">15%</div>
                <div className="text-sm text-blue-200/70">Maximum Commission</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Infinity className="w-6 h-6 text-emerald-300" />
                </div>
                <div className="text-2xl font-bold text-white">{t("common.affiliate")}</div>
                <div className="text-sm text-blue-200/70">Lifetime Attribution</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-purple-300" />
                </div>
                <div className="text-2xl font-bold text-white">10.000+</div>
                <div className="text-sm text-blue-200/70">Trusted Businesses</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-amber-300" />
                </div>
                <div className="text-2xl font-bold text-white">&lt;7 Days</div>
                <div className="text-sm text-blue-200/70">Fast Payout</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Tiers ── */}
        <section className="section-enterprise bg-slate-50">
          <div className="container-enterprise">
            <div className="text-center mb-12">
              <span className="badge-enterprise mb-4">{t("affiliate.tiers.badge")}</span>
              <h2 className="text-enterprise-primary text-3xl lg:text-4xl font-bold mb-4">{t("affiliate.tiers.title")}</h2>
              <p className="text-enterprise-secondary text-lg max-w-2xl mx-auto">{t("affiliate.tiers.subtitle")}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {Array.isArray(tiers) && tiers.map((tier, i) => (
                <div
                  key={i}
                  className={`relative rounded-2xl p-6 text-center transition-shadow ${
                    tier.featured
                      ? "bg-gradient-to-b from-emerald-600 to-emerald-700 text-white shadow-xl shadow-emerald-500/25 scale-105 border-2 border-emerald-400"
                      : "bg-white shadow-enterprise border border-slate-200"
                  }`}
                >
                  {tier.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-400 text-emerald-900 text-xs font-bold px-3 py-1 rounded-full">
                      {t("affiliate.tiers.popular")}
                    </span>
                  )}
                  <div className={`text-sm font-semibold mb-2 ${tier.featured ? "text-emerald-200" : "text-blue-600"}`}>
                    {tier.name}
                  </div>
                  <div className={`text-sm mb-3 ${tier.featured ? "text-emerald-100" : "text-slate-500"}`}>
                    {tier.mods}
                  </div>
                  <div className={`text-5xl font-bold mb-2 ${tier.featured ? "text-white" : "text-blue-600"}`}>
                    {tier.pct}
                  </div>
                  <div className={`text-sm ${tier.featured ? "text-emerald-100" : "text-slate-500"}`}>
                    {tier.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Schemes ── */}
        <section className="section-enterprise">
          <div className="container-enterprise">
            <div className="text-center mb-12">
              <h2 className="text-enterprise-primary text-3xl lg:text-4xl font-bold mb-4">{t("affiliate.schemes.title")}</h2>
              <p className="text-enterprise-secondary text-lg max-w-2xl mx-auto">{t("affiliate.schemes.subtitle")}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {Array.isArray(schemes) && schemes.map((s, i) => (
                <div key={i} className="card-enterprise p-6 text-center hover:shadow-enterprise-lg transition-shadow">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-blue-50 flex items-center justify-center">
                    {iconMap[s.icon]}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{s.desc}</p>
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                    {s.audience}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Benefits ── */}
        <section className="section-enterprise bg-slate-50">
          <div className="container-enterprise">
            <div className="text-center mb-12">
              <h2 className="text-enterprise-primary text-3xl lg:text-4xl font-bold mb-4">{t("affiliate.benefits.title")}</h2>
              <p className="text-enterprise-secondary text-lg max-w-2xl mx-auto">{t("affiliate.benefits.subtitle")}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {Array.isArray(benefits) && benefits.map((b, i) => (
                <div key={i} className="flex gap-4 p-5 bg-white rounded-xl border border-slate-100">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                    {iconMap[b.icon]}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">{b.title}</h4>
                    <p className="text-slate-500 text-sm">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section id="how-it-works" className="section-enterprise">
          <div className="container-enterprise">
            <div className="text-center mb-12">
              <h2 className="text-enterprise-primary text-3xl lg:text-4xl font-bold mb-4">{t("affiliate.steps.title")}</h2>
              <p className="text-enterprise-secondary text-lg max-w-2xl mx-auto">{t("affiliate.steps.subtitle")}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {Array.isArray(steps) && steps.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-blue-500/25">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-slate-500 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="section-enterprise bg-slate-50">
          <div className="container-enterprise">
            <div className="text-center mb-12">
              <h2 className="text-enterprise-primary text-3xl lg:text-4xl font-bold mb-4">{t("affiliate.faq.title")}</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {Array.isArray(faq) && faq.map((item, i) => (
                <details key={i} className="group bg-white rounded-xl border border-slate-200 p-5 cursor-pointer">
                  <summary className="flex items-center justify-between font-semibold text-slate-900 list-none">
                    {item.q}
                    <span className="text-blue-500 group-open:rotate-180 transition-transform">&#9660;</span>
                  </summary>
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="section-enterprise">
          <div className="container-enterprise">
            <div className="text-center mb-12">
              <h2 className="text-enterprise-primary text-3xl lg:text-4xl font-bold mb-4">{t("affiliate.testimonials.title")}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {Array.isArray(testimonials) && testimonials.map((tItem, i) => (
                <div key={i} className="card-enterprise p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 italic mb-4">"{tItem.quote}"</p>
                  <div>
                    <div className="font-semibold text-slate-900">{tItem.name}</div>
                    <div className="text-sm text-slate-500">{tItem.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 py-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_70%)]" />
          <div className="container-enterprise relative z-10 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{t("affiliate.cta.title")}</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">{t("affiliate.cta.subtitle")}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={t("affiliate.hero.ctaWhatsapp")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-light inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg"
              >
                {t("affiliate.cta.button")}
              </a>
            </div>
            <p className="mt-4 text-blue-200 text-sm">{t("affiliate.cta.note")}</p>
          </div>
        </section>
      </div>
    </>
  );
}