function Modal({ title, children, onClose }) {

  return (

    // Fond sombre derrière la fenêtre
    <div
      className="
        fixed
        inset-0

        bg-black/30
        backdrop-blur-[2px]

        flex
        items-center
        justify-center

        z-50
      "
    >

      {/* Cadre externe XP */}
      <div
        className="
          w-[950px]
          h-[650px]

          bg-[#0B5EE9]

          p-[3px]

          rounded-lg

          shadow-[0_25px_80px_rgba(0,0,0,0.45)]

          overflow-hidden
        "
      >

        {/* Fenêtre */}
        <div
          className="
            h-full

            bg-[#ECE9D8]

            flex
            flex-col
          "
        >

          {/* ================= BARRE DE TITRE ================= */}

          <div
            className="
              h-10

              bg-gradient-to-r
              from-[#0058EE]
              via-[#3A93FF]
              to-[#66B0FF]

              border-b
              border-[#7FB8FF]

              flex
              items-center
              justify-between

              px-3
            "
          >

            {/* Titre */}
            <div
              className="
                flex
                items-center
                gap-2
              "
            >

              <span className="text-white">
                📁
              </span>

              <span
                className="
                  text-white
                  font-bold
                  text-sm
                "
              >
                {title}
              </span>

            </div>

            {/* Boutons */}
            <div
              className="
                flex
                gap-1
              "
            >

              {/* Réduire */}
              <button
                className="
                  w-6
                  h-6

                  bg-[#3A93FF]

                  border
                  border-[#B8D8FF]

                  text-white

                  hover:bg-[#58A6FF]
                "
              >
                _
              </button>

              {/* Agrandir */}
              <button
                className="
                  w-6
                  h-6

                  bg-[#3A93FF]

                  border
                  border-[#B8D8FF]

                  text-white

                  hover:bg-[#58A6FF]
                "
              >
                □
              </button>

              {/* Fermer */}
              <button
                onClick={onClose}

                className="
                  w-6
                  h-6

                  bg-[#FF5C5C]

                  border
                  border-[#FFD1D1]

                  text-white

                  hover:bg-[#FF7878]
                "
              >
                ✕
              </button>

            </div>

          </div>

          {/* ================= MENU ================= */}

          <div
            className="
              h-9

              bg-[#F6F3E7]

              border-b
              border-[#C9C5B8]

              flex
              items-center

              gap-6

              px-4

              text-sm
            "
          >

            <button className="hover:text-blue-700">
              File
            </button>

            <button className="hover:text-blue-700">
              Edit
            </button>

            <button className="hover:text-blue-700">
              View
            </button>

            <button className="hover:text-blue-700">
              Tools
            </button>

            <button className="hover:text-blue-700">
              Help
            </button>

          </div>

          {/* ================= CONTENU ================= */}

          <div
            className="
              flex-1

              bg-slate-50

              overflow-auto

              p-8
            "
          >

            {children}

          </div>

          {/* ================= STATUS BAR ================= */}

          <div
            className="
              h-8

              bg-[#ECE9D8]

              border-t
              border-[#C9C5B8]

              flex
              items-center

              px-4

              text-xs
              text-gray-600
            "
          >

            Ready

          </div>

        </div>

      </div>

    </div>

  )
}

export default Modal