'use client'

import { useState } from 'react'

type FaqItem = { q: string; a: string }

export default function ProductFAQ({ faqs }: { faqs: FaqItem[] }) {
  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
    </div>
  )
}

function FAQItem({ faq, index }: { faq: FaqItem; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-[#E8D5C4] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 bg-white hover:bg-[#FFF8F0] transition-colors"
        aria-expanded={open}
        aria-controls={`pfaq-${index}`}
      >
        <span className="font-semibold text-[#1A0A00] text-sm md:text-base">{faq.q}</span>
        <span className="text-[#C05C14] text-xl shrink-0 transition-transform duration-200" style={{ transform: open ? 'rotate(45deg)' : 'none' }}>+</span>
      </button>
      <div
        id={`pfaq-${index}`}
        style={{ maxHeight: open ? '500px' : '0', opacity: open ? 1 : 0, overflow: 'hidden', transition: 'max-height .3s ease, opacity .2s ease' }}
      >
        <div className="px-5 py-4 bg-[#FFF8F0] text-sm md:text-base text-[#5C3D2E] leading-relaxed border-t border-[#E8D5C4]">
          {faq.a}
        </div>
      </div>
    </div>
  )
}
