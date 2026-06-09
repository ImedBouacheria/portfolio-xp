import { useState } from "react"

function ContactWindow() {

  // Adresse email
  const email = "ayoubbouacheria024@gmail.com"

  // Etat pour savoir si l'email a été copié
  const [copied, setCopied] = useState(false)

  // Fonction appelée quand on clique sur le bouton
  function copyEmail() {

    // Copie l'email dans le presse papier
    navigator.clipboard.writeText(email)

    // Change le texte du bouton
    setCopied(true)

    // Remet le texte normal après 2 secondes
    setTimeout(() => {
      setCopied(false)
    }, 2000)

  }

  return (

    <div
      className="
        h-full

        flex
        items-center
        justify-center
      "
    >

      {/* Carte contact */}
      <div
        className="
          bg-white

          p-8

          rounded-xl

          shadow-lg

          w-[500px]
        "
      >

        {/* Titre */}
        <h1
          className="
            text-3xl
            font-bold

            mb-4
          "
        >
          Contact
        </h1>

        {/* Description */}
        <p
          className="
            text-gray-600

            mb-6
          "
        >
          Vous pouvez me contacter par email.
        </p>

        {/* Email */}
        <div
          className="
            border

            rounded-lg

            p-4

            mb-6
          "
        >

          <p className="text-sm text-gray-500">
            Adresse email
          </p>

          <p className="font-semibold">
            {email}
          </p>

        </div>

        {/* Bouton copier */}
        <button
          onClick={copyEmail}

          className="
            w-full

            bg-blue-600

            text-white

            py-3

            rounded-lg

            hover:bg-blue-700
          "
        >
          {copied
            ? "Email copié !"
            : "Copier l'email"}
        </button>

      </div>

    </div>

  )
}

export default ContactWindow