import { Card, CardContent } from '../components/ui/card';
import { MapPin, Briefcase, GraduationCap, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const positions = [
  { id: 1, title: "Finance and Account Executive", count: 2 },
  { id: 2, title: "Administrative Executive", count: 2 },
  { id: 3, title: "3D Designer and 2D Designer", count: 2 },
];

const placements = [
  {
    id: 1,
    company: "Mediliance (M) Sdn Bhd",
    count: 2,
    address:
      "No.11-2, Sri Manja Square II, Jalan PJS 3/59, Taman Sri Manja, 46000 Petaling Jaya, Selangor",
  },
  {
    id: 2,
    company: "Medilife (M) Sdn Bhd",
    count: 2,
    address:
      "No. 10, Jalan Pendaftar U1/54, Kawasan Perindustrian Temasya, 40150 Shah Alam, Selangor",
  },
  {
    id: 3,
    company: "Smart Connect Production Sdn Bhd",
    count: 2,
    address:
      "Lot.PT 854 & 855-Unit-2), Jalan Industri 2, Kampung Baru Sungai Buloh, Seksyen U19, 40160 Shah Alam, Selangor",
    note: "For 3D and 2D Designer",
  },
];

const requirements = [
  { label: "Degree in Accounting / Business Administration", for: "Position 1 & 2" },
  { label: "Degree in Civil / Electrical Engineering", for: "Position 3" },
];

const benefits = [
  { icon: "💰", label: "Allowance", value: "RM 2,000 / month" },
  { icon: "🛡️", label: "Insurance", value: "SOCSO / EIS / EPF" },
  { icon: "📅", label: "Duration", value: "1 Year" },
  { icon: "🌴", label: "Leave", value: "Annual & Medical Leave" },
];

export function AnnouncementCard() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-rose-50/40 to-white px-4 py-12 sm:py-16">
      {/* Soft background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-rose-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-stone-100/70 blur-3xl" />

      <motion.div
        className="relative mx-auto max-w-5xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        {/* Page Title */}
        <motion.div className="mb-8 text-center" variants={fadeUp}>
          <span className="inline-flex items-center rounded-full border border-rose-200 bg-white/80 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-rose-800 shadow-sm sm:text-[11px] sm:tracking-[0.25em]">
            Career Opportunity
          </span>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Announcement
          </h1>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-rose-950 to-red-700" />

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Join Mediliance through the PROTÉGÉ RTW 2025 programme and begin your
            career journey with industry placement opportunities.
          </p>
        </motion.div>

        <Card className="overflow-hidden rounded-3xl border border-rose-100/80 bg-white/90 shadow-xl shadow-rose-950/5 backdrop-blur">
          {/* Header */}
          <div className="relative overflow-hidden bg-gradient-to-br from-rose-950 via-rose-900 to-red-800 px-5 py-8 text-center text-white sm:px-8 sm:py-9">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%)]" />

            <motion.span
              className="relative inline-block rounded-full bg-white/15 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white ring-1 ring-white/25"
              variants={fadeUp}
            >
              PROTÉGÉ RTW 2025
            </motion.span>

            <motion.h2
              className="relative mt-5 text-2xl font-extrabold tracking-tight sm:text-3xl"
              variants={fadeUp}
            >
              Mediliance (M) Sdn Bhd
            </motion.h2>

            <motion.p
              className="relative mt-2 text-xs font-light uppercase tracking-[0.22em] text-rose-100 sm:text-sm sm:tracking-[0.25em]"
              variants={fadeUp}
            >
              We Are Hiring
            </motion.p>
          </div>

          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Open Positions */}
              <motion.div className="px-5 py-6 sm:px-8" variants={stagger}>
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-50">
                    <Briefcase className="h-4 w-4 text-rose-800" />
                  </div>

                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-rose-950">
                    Open Positions
                  </h3>
                </div>

                <motion.div className="flex flex-col gap-3" variants={stagger}>
                  {positions.map((p) => (
                    <motion.div
                      key={p.id}
                      className="flex flex-col gap-2 rounded-2xl border border-rose-100 bg-white px-4 py-3 transition hover:border-rose-300 hover:bg-rose-50/60 sm:flex-row sm:items-center sm:gap-4"
                      variants={fadeUp}
                    >
                      <span className="min-w-[28px] text-xs font-extrabold text-rose-800/60">
                        {String(p.id).padStart(2, "0")}
                      </span>

                      <span className="flex-1 text-sm font-semibold text-slate-800">
                        {p.title}
                      </span>

                      <span className="w-fit rounded-full bg-rose-100 px-3 py-1 text-xs font-bold text-rose-900">
                        {p.count} positions
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Requirements */}
              <motion.div className="border-t border-rose-100 px-5 py-6 sm:px-8 lg:border-l lg:border-t-0" variants={stagger}>
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-50">
                    <GraduationCap className="h-4 w-4 text-rose-800" />
                  </div>

                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-rose-950">
                    Requirements
                  </h3>
                </div>

                <motion.div className="flex flex-col gap-3" variants={stagger}>
                  {requirements.map((r, i) => (
                    <motion.div
                      key={i}
                      className="flex flex-col gap-2 rounded-2xl border border-rose-100 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                      variants={fadeUp}
                    >
                      <span className="flex-1 text-sm font-medium text-slate-800">
                        {r.label}
                      </span>

                      <span className="w-fit whitespace-nowrap rounded-full bg-rose-100 px-3 py-1 text-[11px] font-bold text-rose-900">
                        {r.for}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            <div className="border-t border-rose-100" />

            {/* Placement Locations */}
            <motion.div className="px-5 py-6 sm:px-8" variants={stagger}>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-50">
                  <MapPin className="h-4 w-4 text-rose-800" />
                </div>

                <h3 className="text-[11px] font-bold uppercase tracking-widest text-rose-950">
                  Placement Locations
                </h3>
              </div>

              <motion.div className="grid grid-cols-1 gap-5 lg:grid-cols-3" variants={stagger}>
                {placements.map((p) => (
                  <motion.div
                    key={p.id}
                    className="rounded-2xl border border-rose-100 bg-white p-4"
                    variants={fadeUp}
                  >
                    <div className="mb-2 flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose-950 to-red-800 text-[10px] font-bold text-white">
                        {p.id}
                      </span>

                      <div>
                        <p className="text-sm font-bold text-slate-900">
                          {p.company}
                        </p>

                        <p className="text-xs font-semibold text-rose-800">
                          {p.count} positions
                        </p>
                      </div>
                    </div>

                    <p className="text-xs leading-relaxed text-slate-500">
                      {p.address}
                    </p>

                    {p.note && (
                      <p className="mt-1 text-[11px] italic text-slate-500">
                        * {p.note}
                      </p>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <div className="border-t border-rose-100" />

            {/* Benefits */}
            <motion.div className="px-5 py-6 sm:px-8" variants={stagger}>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-50">
                  <BadgeCheck className="h-4 w-4 text-rose-800" />
                </div>

                <h3 className="text-[11px] font-bold uppercase tracking-widest text-rose-950">
                  Benefits
                </h3>
              </div>

              <motion.div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4" variants={stagger}>
                {benefits.map((b, i) => (
                  <motion.div
                    key={i}
                    className="flex flex-col gap-1 rounded-2xl border border-rose-100 bg-gradient-to-br from-white to-rose-50/40 px-4 py-3"
                    variants={fadeUp}
                  >

                    <span className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                      {b.label}
                    </span>

                    <span className="text-sm font-extrabold text-slate-900">
                      {b.value}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="border-t border-rose-100 bg-gradient-to-r from-rose-950 via-rose-900 to-red-800 px-5 py-6 text-center text-white sm:px-8"
              variants={fadeUp}
            >
              <p className="mb-2 text-xs text-rose-100">
                Send your CV and Degree Transcript to:
              </p>

              <a
                href="mailto:hshima@mediliance.com.my"
                className="break-words text-sm font-extrabold text-white underline-offset-4 hover:underline"
              >
                hshima@mediliance.com.my
              </a>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}