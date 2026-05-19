"use client";

const items = [
  "Atendimento Humanizado",
  "Coleta Domiciliar",
  "Resultados Online",
  "PNCQ Excelente",
  "Desde 1978",
  "Coleta Empresarial",
  "6 Convênios",
];

export function Ticker() {
  return (
    <div className="-mt-px overflow-hidden bg-[#0B1B35] py-5" aria-hidden="true">
      <div
        className="flex w-max whitespace-nowrap"
        style={{ animation: "ticker 40s linear infinite" }}
      >
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {items.map((item, i) => (
              <li
                key={`${copy}-${i}`}
                className="mx-8 inline-flex shrink-0 items-center gap-3 text-base font-medium tracking-wide text-white/80"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary-400" aria-hidden="true">
                  <path d="M8 0L10.12 5.88L16 8L10.12 10.12L8 16L5.88 10.12L0 8L5.88 5.88L8 0Z" fill="currentColor" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
