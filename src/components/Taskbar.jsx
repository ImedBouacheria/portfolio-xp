import { useState } from "react"

import LogoWindows from "../assets/logowindows.png"
import LVHlogo from "../assets/lvhlogo.png"
import folderIcon from "../assets/folderIcon.png"
import cvIcon from "../assets/cvIcon.png"
import contactIcon from "../assets/contactIcon.png"
import projectIcon from "../assets/projectIcon.png"

function Taskbar({
activeWindow,
setActiveWindow
}) {

// Etat menu démarrer
const [startOpen, setStartOpen] = useState(false)

// Applications du menu démarrer
const apps = [

  {
    title: "About",
    icon: folderIcon,
    window: "about"
  },

  {
    title: "Projects",
    icon: projectIcon,
    window: "projects"
  },

  {
    title: "Contact",
    icon: contactIcon,
    window: "contact"
  },

  {
    title: "Mon CV",
    icon: cvIcon,
    window: "resume"
  },

  {
    title: "Mon Stage",
    icon: LVHlogo,
    window: "Stage"
  }

]

// Heure dynamique
const time = new Date().toLocaleTimeString([], {
hour: "2-digit",
minute: "2-digit"
})

return (


<div
  className="
    fixed
    bottom-0
    left-0

    w-full
    h-12

    bg-gradient-to-r
    from-blue-700
    via-blue-600
    to-blue-700

    flex
    items-center
    justify-between

    px-2

    border-t
    border-blue-300

    shadow-2xl
  "
>

  {/* Partie gauche */}
  <div className="relative flex items-center gap-2">

    {/* Bouton démarrer */}
    <button
      onClick={() =>
        setStartOpen(!startOpen)
      }

      className="
        bg-green-600
        hover:bg-green-500

        flex
        items-center
        gap-2

        text-white
        font-bold

        px-3
        py-1

        rounded-full

        border-2
        border-green-300

        shadow-md

        transition
      "
    >

      <img
        src={LogoWindows}

        className="
          w-6
          h-6
          object-contain
        "
      />

      démarrer

    </button>

    {/* Menu démarrer */}
    {startOpen && (

      <div
        className="
          absolute
          bottom-14
          left-0

          w-56

          bg-gray-200

          border
          border-gray-500

          shadow-2xl

          rounded
          overflow-hidden
        "
      >

        {/* Header */}
        <div
          className="
            bg-blue-700
            text-white

            px-4
            py-3

            font-bold
          "
        >
          Bouacheria Kebir
        </div>

        {/* Applications */}
        <div className="flex flex-col">

          {apps.map((app) => (

            <button
              key={app.window}

              onClick={() => {
                setActiveWindow(app.window)
                setStartOpen(false)
              }}

              className="
                text-left

                px-4
                py-3

                flex
                items-center
                gap-3

                hover:bg-blue-500/70
                hover:text-white

                transition-all
              "
            >

              <img
                src={app.icon}

                className="
                  w-6
                  h-6
                  object-contain
                "
              />

              <span>{app.title}</span>

            </button>

          ))}

        </div>

      </div>

    )}

  </div>

  {/* Heure */}
  <div
    className="
      bg-blue-400
      text-white

      px-4
      py-1

      rounded

      border
      border-blue-200
    "
  >
    {time}
  </div>

</div>


)
}

export default Taskbar
