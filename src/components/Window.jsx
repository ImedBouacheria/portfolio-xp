// Composant fenêtre réutilisable
function Window({ title, children, onClose }) {

  return ( // utiliser un modal 

    // Overlay plein écran
    <div
      className="
        fixed
        inset-0
        bg-black/40
        flex
        items-center
        justify-center
        z-50
      "
    >

      {/* Fenêtre centrale */}
      <div
        className="
          w-[900px]
          h-[600px]
          bg-gray-200
          border
          border-gray-500
          shadow-2xl
          flex
          flex-col
          rounded
          overflow-hidden
        "
      >

        {/* Barre du haut */}
        <div
          className="
            bg-blue-700
            text-white
            flex
            justify-between
            items-center
            px-4
            py-2
          "
        >

          {/* Titre */}
          <span className="font-bold">
            {title}
          </span>

          {/* Bouton fermer */}
          <button
            onClick={onClose}
            className="
              bg-red-500
              px-3
              py-1
              rounded
              hover:bg-red-600
            "
          >
            X
          </button>

        </div>

        {/* Contenu */}
        <div
          className="
            flex-1
            bg-white
            p-4
            overflow-y-auto
          "
        >

          {children}

        </div>

      </div>

    </div>
  )
}

export default Window