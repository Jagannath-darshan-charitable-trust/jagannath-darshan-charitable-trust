import { useState } from "react";
import { Heart, Utensils, Landmark, ShieldCheck, CreditCard, HandHeart, Users, CheckCircle2, TrendingUp, FileText, IndianRupee } from "lucide-react";

const purposes = [
  { value: "gosala", label: "Gosala - Cow Protection", icon: Heart },
  { value: "annabhandar", label: "Annabhandar — Food Distribution", icon: Utensils },
  { value: "mandir", label: "Mandir Nirman — Temple Construction", icon: Landmark },
  { value: "general", label: "General Trust Fund", icon: ShieldCheck },
];

const presetAmounts = [501, 1100, 2100, 5000, 11000, 21000];

const whyDonateReasons = [
  {
    icon: Heart,
    title: "Serve Gau Mata",
    desc: "Your donation directly feeds, shelters, and provides medical care to 1,200+ abandoned and aging cows at our Gosala.",
  },
  {
    icon: Utensils,
    title: "Feed the Hungry",
    desc: "Through Annabhandar, we serve free Mahaprasad daily to thousands of devotees, pilgrims, and underprivileged families.",
  },
  {
    icon: Landmark,
    title: "Build Sacred Temples",
    desc: "Help construct Jagannath Mandirs across India — beacons of dharma, faith, and cultural continuity for generations.",
  },
];

const donationUsage = [
  { label: "Gosala — Cow Feed & Medical Care", percent: 35, color: "bg-primary" },
  { label: "Annabhandar — Food & Kitchen Supplies", percent: 30, color: "bg-accent" },
  { label: "Mandir Nirman — Construction & Materials", percent: 25, color: "bg-cta" },
  { label: "Administration & Operations", percent: 10, color: "bg-muted-foreground" },
];

const impactStats = [
  { value: "1,200+", label: "Cows Cared For", icon: Heart },
  { value: "5,000+", label: "Meals Served Daily", icon: Utensils },
  { value: "10,000+", label: "Seva Family Members", icon: Users },
  { value: "3+", label: "Temples Under Construction", icon: Landmark },
];

const Donate = () => {
  const [donationType, setDonationType] = useState("onetime");
  const [selectedAmount, setSelectedAmount] = useState(1100);
  const [customAmount, setCustomAmount] = useState("");
  const [purpose, setPurpose] = useState("gosala");

  const finalAmount = selectedAmount || Number(customAmount) || 0;

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-16 text-center">
        <h1 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">Make a Donation</h1>
        <p className="mt-2 font-body text-primary-foreground/80">Every contribution is a step towards divine service</p>
      </section>

      {/* Why Donate Section */}
      <section className="section-padding">
        <div className="container-trust">
          <h2 className="mb-3 text-center font-heading text-2xl font-bold text-foreground md:text-3xl">Why Donate to Us?</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center font-body text-sm leading-relaxed text-muted-foreground">
            Your generosity fuels real, on-ground seva — from caring for Gau Mata and feeding the hungry to constructing temples that will stand for centuries. Here's where your contribution makes an impact:
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {whyDonateReasons.map((r) => (
              <div key={r.title} className="rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <r.icon size={28} />
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{r.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="section-padding bg-muted/50">
        <div className="container-trust mx-auto max-w-2xl">
          <h2 className="mb-6 text-center font-heading text-2xl font-bold text-foreground md:text-3xl">Contribute Now</h2>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-lg md:p-8">
            {/* Donation Type */}
            <div className="mb-6">
              <label className="mb-2 block font-body text-sm font-semibold text-foreground">Donation Type</label>
              <div className="flex gap-2">
                <button
                  onClick={() => setDonationType("onetime")}
                  className={`flex-1 rounded-lg border px-4 py-2.5 font-body text-sm font-medium transition ${
                    donationType === "onetime"
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-muted-foreground hover:bg-muted"
                  }`}
                >
                  One-Time
                </button>
                <button
                  onClick={() => setDonationType("monthly")}
                  className={`flex-1 rounded-lg border px-4 py-2.5 font-body text-sm font-medium transition ${
                    donationType === "monthly"
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-muted-foreground hover:bg-muted"
                  }`}
                >
                  Monthly Recurring
                </button>
              </div>
            </div>

            {/* Purpose */}
            <div className="mb-6">
              <label className="mb-2 block font-body text-sm font-semibold text-foreground">Donation Purpose</label>
              <select
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 font-body text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              >
                {purposes.map((p) => (
                  <option key={p.value} value={p.value}>{p.label}</option>
                ))}
              </select>
            </div>

            {/* Amount */}
            <div className="mb-6">
              <label className="mb-2 block font-body text-sm font-semibold text-foreground">Select Amount (₹)</label>
              <div className="mb-3 grid grid-cols-3 gap-2">
                {presetAmounts.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => { setSelectedAmount(amt); setCustomAmount(""); }}
                    className={`rounded-lg border px-3 py-2.5 font-body text-sm font-medium transition ${
                      selectedAmount === amt
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    ₹{amt.toLocaleString("en-IN")}
                  </button>
                ))}
              </div>
              <input
                type="number"
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            {/* Donor Info */}
            <div className="mb-6 grid gap-3 md:grid-cols-2">
              <div>
                <label className="mb-1 block font-body text-xs font-medium text-muted-foreground">Full Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="mb-1 block font-body text-xs font-medium text-muted-foreground">Phone / Email</label>
                <input
                  type="text"
                  placeholder="Phone or email"
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            <div className="mb-4 flex items-center gap-2 rounded-lg bg-muted p-3 font-body text-xs text-muted-foreground">
              <ShieldCheck size={16} className="shrink-0 text-impact" />
              All donations are 80G tax-exempt. You will receive a receipt via email.
            </div>

            {/* Pay Button */}
            <button
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-cta py-3.5 font-body text-base font-semibold text-cta-foreground transition hover:bg-cta/90 disabled:opacity-50"
              disabled={finalAmount < 1}
            >
              <CreditCard size={18} />
              {finalAmount > 0
                ? `Donate ₹${finalAmount.toLocaleString("en-IN")} ${donationType === "monthly" ? "/ month" : ""}`
                : "Select an Amount"}
            </button>

            <p className="mt-3 text-center font-body text-xs text-muted-foreground">
              Powered by Razorpay (Integration Coming Soon)
            </p>
          </div>
        </div>
      </section>

      {/* Where Your Donation Goes */}
      <section className="section-padding">
        <div className="container-trust mx-auto max-w-3xl">
          <h2 className="mb-3 text-center font-heading text-2xl font-bold text-foreground md:text-3xl">Where Your Donation Goes</h2>
          <p className="mx-auto mb-10 max-w-xl text-center font-body text-sm text-muted-foreground">
            We believe in complete transparency. Here's how every rupee you contribute is utilized:
          </p>
          <div className="space-y-5">
            {donationUsage.map((item) => (
              <div key={item.label}>
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="font-body text-sm font-medium text-foreground">{item.label}</span>
                  <span className="font-heading text-sm font-bold text-primary">{item.percent}%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-muted">
                  <div className={`h-full rounded-full ${item.color} transition-all duration-700`} style={{ width: `${item.percent}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-trust">
          <h2 className="mb-10 text-center font-heading text-2xl font-bold md:text-3xl">Our Impact So Far</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat) => (
              <div key={stat.label} className="rounded-xl bg-primary-foreground/10 p-6 text-center backdrop-blur-sm">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/20">
                  <stat.icon size={24} />
                </div>
                <p className="font-heading text-3xl font-bold">{stat.value}</p>
                <p className="mt-1 font-body text-sm opacity-80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency & Trust */}
      <section className="section-padding">
        <div className="container-trust mx-auto max-w-3xl">
          <h2 className="mb-6 text-center font-heading text-2xl font-bold text-foreground md:text-3xl">Transparency & Trust</h2>
          <p className="mx-auto mb-10 max-w-xl text-center font-body text-sm text-muted-foreground">
            We are accountable for every donation. Your trust is our most valued asset.
          </p>
          <div className="space-y-4">
            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 shrink-0 text-impact" size={20} />
                <div>
                  <h4 className="font-body text-sm font-semibold text-foreground">80G & 12A Certified</h4>
                  <p className="mt-1 font-body text-sm text-muted-foreground">
                    All donations are eligible for tax exemption under Section 80G. Our 12A registration ensures that trust income is used exclusively for charitable purposes.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <FileText className="mt-0.5 shrink-0 text-primary" size={20} />
                <div>
                  <h4 className="font-body text-sm font-semibold text-foreground">Audited Financial Reports</h4>
                  <p className="mt-1 font-body text-sm text-muted-foreground">
                    Our financial records are audited annually by certified auditors and published openly. You can review how every rupee is spent.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <HandHeart className="mt-0.5 shrink-0 text-cta" size={20} />
                <div>
                  <h4 className="font-body text-sm font-semibold text-foreground">Our Promise to You</h4>
                  <p className="mt-1 font-body text-sm text-muted-foreground">
                    Every donation — big or small — is treated as a sacred offering. You will receive a tax receipt, and periodic updates on how your contribution is making a difference in the lives of Gau Mata, devotees, and communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-muted/50">
        <div className="container-trust mx-auto max-w-2xl text-center">
          <HandHeart className="mx-auto mb-4 text-primary" size={36} />
          <h2 className="mb-3 font-heading text-2xl font-bold text-foreground md:text-3xl">Every Rupee Counts</h2>
          <p className="mx-auto mb-6 max-w-lg font-body text-sm leading-relaxed text-muted-foreground">
            Whether it is ₹101 or ₹1,00,000 — your seva reaches directly to those who need it. Join our family of 10,000+ donors and sevaks making a real difference every single day.
          </p>
          <p className="font-body text-xs italic text-primary">
            "दानेन तुल्यं न हि लोक कल्पनम्" — There is no greater act in this world than the act of giving.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Donate;

