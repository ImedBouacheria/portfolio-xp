function AboutWindow() {

  return (

    <div
      className="
        h-full

        grid
        grid-cols-[250px_1fr]

        gap-8
      "
    >

      {/* Carte profil */}
      <div
        className="
          bg-white

          rounded-xl

          shadow-lg

          p-6

          h-fit
        "
      >

        {/* Avatar */}
        <div
          className="
            w-32
            h-32

            mx-auto

            rounded-full

            bg-blue-200

            flex
            items-center
            justify-center

            text-5xl
          "
        >
          👨‍💻
        </div>

        {/* Nom */}
        <h2
          className="
            text-center

            text-xl
            font-bold

            mt-4
          "
        >
          Imed Ayoub
        </h2>

        {/* Poste */}
        <p
          className="
            text-center

            text-gray-500

            mt-2
          "
        >
          Étudiant Informatique
        </p>

      </div>

      {/* Partie droite */}
      <div
        className="
          flex
          flex-col

          gap-6
        "
      >

        {/* Présentation */}
        <div
          className="
            bg-white

            rounded-xl

            shadow-lg

            p-6
          "
        >

          <h2
            className="
              text-2xl
              font-bold

              mb-4
            "
          >
            À propos de moi
          </h2>

          <p className="leading-7">

            Passionné par le développement web
            et logiciel, je suis actuellement
            étudiant en Informatique .

            J'aime concevoir des applications,
            découvrir de nouvelles technologies
            et transformer des idées en projets
            concrets.

          </p>

        </div>

        {/* Compétences */}
        <div
          className="
            bg-white

            rounded-xl

            shadow-lg

            p-6
          "
        >

          <h2
            className="
              text-2xl
              font-bold

              mb-4
            "
          >
            Technologies
          </h2>

          <div
            className="
              flex
              flex-wrap

              gap-3
            "
          >

            <span className="bg-blue-500 text-white px-3 py-1 rounded-full">
              React
            </span>

            <span className="bg-blue-500 text-white px-3 py-1 rounded-full">
              Java
            </span>

            <span className="bg-blue-500 text-white px-3 py-1 rounded-full">
              SQL
            </span>

            <span className="bg-blue-500 text-white px-3 py-1 rounded-full">
              JavaScript
            </span>

            <span className="bg-blue-500 text-white px-3 py-1 rounded-full">
              Git
            </span>

          </div>

        </div>

      </div>

    </div>

  )
}

export default AboutWindow