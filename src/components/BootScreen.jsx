import LogoWindows from "../assets/logowindows.png"

function BootScreen() {

return (


<div
  className="
    fixed
    inset-0

    bg-[#0c1b52]

    flex
    flex-col
    items-center
    justify-center

    text-white

    z-[999]
  "
>

  {/* Logo */}
  <img
    src={LogoWindows}

    className="
      w-40
      mb-8

      animate-pulse
    "
  />

  {/* Texte */}
  <h1
    className="
      text-3xl
      font-bold
    "
  >
    Bouacheria-Kebir OS
  </h1>

  <p
    className="
      mt-4
      text-gray-300
    "
  >
    Loading portfolio XP...
  </p>

  {/* Barre loading */}
  <div
    className="
      w-64
      h-3

      bg-gray-700

      rounded-full

      overflow-hidden

      mt-8
    "
  >

    <div  // barre verte de chargement
      className="  
        h-full
        bg-green-500
        animate-pulse
      "

      style={{
        width: "100%"
      }}
    />

  </div>

</div>


)
}

export default BootScreen
