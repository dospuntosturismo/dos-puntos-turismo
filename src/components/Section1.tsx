// Section1.tsx
import Header from '@components/Header'
import { LiaLongArrowAltDownSolid } from "react-icons/lia"
// asumo que Header ya está importado
// const SIZE = 28 // o el valor que ya uses

export default function Section1() {
	const SIZE = '80px'
  return (
    <section
      id="section1"
      className={[
        // LAYOUT base mobile-first
        "relative w-full",
        // Usá min-h con 100svh para móviles; fallback a h-screen en desktop
        "min-h-[100svh] md:h-screen",
        // Fondo
        "bg-layout-pattern bg-no-repeat bg-cover",
        // Posición del fondo: centrado en mobile, un pelín más alto en md+ si tu arte lo necesita
        "bg-center md:bg-[position:center_20%]",
        // Pequeño overlay para mejorar contraste si el fondo es muy claro/oscuro (opcional)
        "before:content-[''] before:absolute before:inset-0 before:bg-black/0",
        // Stacking context para overlay/indicador
        "isolate",
      ].join(" ")}
      // Para que iOS Safari no haga “bounce” extraño del 100vh
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      {/* Header fijo arriba si tu header es transparente sobre el fondo */}
      <div className="absolute inset-x-0 top-0 z-20">
        <Header />
      </div>

      {/* Contenido central (si luego agregás hero text / CTA, ponelo acá) */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4">
        {/* Ejemplo de espacio reservado; eliminá si no lo usás */}
        {/* <h1 className="text-white text-3xl sm:text-5xl font-semibold text-center max-w-[18ch]">
          Título de tu sección
        </h1> */}
      </div>

      {/* Indicador de scroll (aparece desde sm: y evita notch con safe-area) */}
      <div
        className={[
          "absolute inset-x-0 z-10",
          "flex flex-row items-center justify-center",
          "pb-6 sm:pb-8",
          "pb-[env(safe-area-inset-bottom)]",
          "bottom-0",
          // Ocultar en pantallas ultra-bajas
          "hidden xs:flex sm:flex",
        ].join(" ")}
      >
        <span className="text-dos-puntos-yellow text-xs sm:text-sm -rotate-90 -mr-2 sm:-mr-4 select-none">
          scroll
        </span>
        <LiaLongArrowAltDownSolid
          size={SIZE}
          className="text-dos-puntos-yellow"
          aria-hidden
        />
      </div>
    </section>
  )
}
