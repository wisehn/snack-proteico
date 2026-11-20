// Bloco de link interno contextual para a ficha do Snack Wise (linha separada do Crispy Wise).
export default function SnackWiseNote({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-10 px-4 bg-[#FFF8F0] border-t border-[#E8D5C4]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl font-black text-[#1A0A00] mb-2">Novo: Snack Wise, salgadinho proteico assado</h2>
        <p className="text-[#5C3D2E] leading-relaxed mb-3">{children}</p>
        <a href="/snack-wise-proteico" className="text-sm font-bold text-[#C05C14] hover:underline">
          Ver ficha completa do Snack Wise →
        </a>
      </div>
    </section>
  )
}
