function Modal({ title, children, onClose }) {

return (


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

  {/* Fenêtre */}
  <div
    className="
      w-[750px]
      h-[550px]

      bg-gray-200

      border
      border-gray-500

      shadow-2xl

      flex
      flex-col

      animate-[popIn_0.2s_ease-out]
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
          rounded
        "
      >
        X
      </button>

    </div>

    {/* Contenu */}
    <div
      className="
        flex-1
        bg-zinc-300
        overflow-auto
        p-6
      "
    >

      {children}

    </div>

  </div>

</div>


)
}

export default Modal
