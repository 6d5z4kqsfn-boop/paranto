"use client"

// FAQ section with glassmorphic accordion panels.
// Each question expands smoothly with Framer Motion.
// Purely client-side — no server or API cost.

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const faqs = [
  {
    question: "What is digital therapy for low back pain?",
    answer:
      "Digital therapy (DTx) is a clinically validated, software-based treatment programme. Paranto's 6-week programme uses evidence-based exercises, cognitive behavioural principles, and daily guidance to reduce pain and improve function — without requiring in-person appointments.",
  },
  {
    question: "Does Paranto replace physiotherapy?",
    answer:
      "No — Paranto is designed to complement, not replace, physiotherapy and medical care. It gives you structured daily support between appointments and scales access to evidence-based care for those who can't attend regular sessions.",
  },
  {
    question: "Who is Paranto suitable for?",
    answer:
      "Paranto is designed for adults with non-specific low back pain — the most common form, where no single structural cause is found. If you have a specific diagnosis (e.g. disc herniation with nerve symptoms, fracture, tumour, or infection), please consult a doctor first.",
  },
  {
    question: "How does the 6-week programme work?",
    answer:
      "Each week builds on the previous one. You receive daily exercises adapted to your pain level, educational content about back pain and recovery, pain and progress tracking, and motivational check-ins. The programme is designed to be manageable even on difficult days — typically 15–20 minutes per day.",
  },
  {
    question: "Is my data safe and private?",
    answer:
      "Yes. Paranto is designed with GDPR compliance and medical data privacy requirements in mind. Your health data is encrypted, never sold, and used only to personalise your programme. We follow EU medical device data protection standards.",
  },
  {
    question: "What clinical evidence is the programme based on?",
    answer:
      "The programme is grounded in NICE (UK) and Finnish Current Care guidelines for non-specific low back pain, which recommend active movement, education, and cognitive behavioural approaches over passive treatments. The clinical foundation is supported by systematic reviews and the results of our own health economic research.",
  },
  {
    question: "What happens after the 6 weeks?",
    answer:
      "Most users see meaningful improvement during the programme. After completing it, you retain access to your personalised exercise library and progress history. Extended or maintenance programmes are on our roadmap.",
  },
]

interface FAQItemProps {
  question: string
  answer: string
  index: number
}

function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ScrollReveal delay={index * 0.07} direction="up">
      {/* Glass panel container */}
      <div
        className={`
          relative overflow-hidden rounded-2xl border transition-all duration-300 cursor-pointer
          ${isOpen
            ? "border-teal-500/40 bg-white/[0.06]"
            : "border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-white/20"
          }
        `}
        // Subtle inner glow on the glass
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: isOpen
            ? "inset 0 1px 0 rgba(255,255,255,0.08), 0 0 30px rgba(20,184,166,0.06)"
            : "inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Subtle top highlight line — gives the "glass edge" feel */}
        <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Question row */}
        <div className="flex items-center justify-between gap-4 px-6 py-5">
          <h3 className="text-base font-medium text-white/90 leading-snug pr-2">
            {question}
          </h3>

          {/* Animated plus/minus icon */}
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/5"
          >
            <Plus className="h-3.5 w-3.5 text-teal-400" />
          </motion.div>
        </div>

        {/* Answer — animates height open/close */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
              style={{ overflow: "hidden" }}
            >
              {/* Thin teal separator line */}
              <div className="mx-6 h-px bg-gradient-to-r from-teal-500/30 via-teal-400/20 to-transparent" />
              <p className="px-6 py-5 text-sm text-gray-400 leading-relaxed">
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  )
}

export function FAQ() {
  return (
    <section id="faq" className="bg-gray-950 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">

        {/* Section heading */}
        <ScrollReveal direction="up">
          <div className="text-center mb-14">
            <p className="text-sm font-mono text-teal-400 font-semibold uppercase tracking-wider">
              FAQ
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-white font-serif">
              Common questions
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">
              Everything you need to know before starting your recovery journey.
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion list */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
