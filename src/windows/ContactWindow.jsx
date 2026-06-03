function ContactWindow() {

return (

<div
  className="
    w-full
    h-full

    flex
    items-center
    justify-center
  "
>

  {/* Carte contact */}
  <div
    className="
      w-[500px]

      bg-white/80
      backdrop-blur-md

      border
      border-white/30

      rounded-2xl

      shadow-2xl

      p-8

      flex
      flex-col
      gap-5
    "
  >

    {/* Titre */}
    <div>

      <h1
        className="
          text-4xl
          font-bold
          text-black
        "
      >
        Contact
      </h1>

      <p
        className="
          text-gray-600
          mt-2
        "
      >
        Un projet ou une opportunité ?
        Envoyez-moi un message.
      </p>

    </div>

    {/* Formulaire */}
    <form
      action="mailto:ayoubbouacheria024@gmail.com"
      method="POST"
      encType="text/plain"

      className="
        flex
        flex-col
        gap-4
      "
    >

      {/* Nom */}
      <input
        type="text"
        name="name"
        placeholder="Votre nom"

        className="
          bg-white

          border
          border-gray-300

          rounded-xl

          px-4
          py-3

          outline-none

          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-300

          transition
        "
      />

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Votre email"

        className="
          bg-white

          border
          border-gray-300

          rounded-xl

          px-4
          py-3

          outline-none

          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-300

          transition
        "
      />

      {/* Sujet */}
      <input
        type="text"
        name="subject"
        placeholder="Sujet"

        className="
          bg-white

          border
          border-gray-300

          rounded-xl

          px-4
          py-3

          outline-none

          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-300

          transition
        "
      />

      {/* Message */}
      <textarea
        name="message"
        placeholder="Votre message"

        rows="5"

        className="
          bg-white

          border
          border-gray-300

          rounded-xl

          px-4
          py-3

          resize-none

          outline-none

          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-300

          transition
        "
      />

      {/* Bouton */}
      <button
        type="submit"

        className="
          mt-2

          bg-gradient-to-r
          from-blue-600
          to-blue-500

          hover:scale-[1.02]
          hover:shadow-xl

          text-white
          font-semibold

          py-3

          rounded-xl

          transition-all
          duration-200
        "
      >
        Envoyer le message
      </button>

    </form>

  </div>

</div>


)
}

export default ContactWindow
