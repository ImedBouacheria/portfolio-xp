function AboutWindow() {

  return (

    <div // On utilise grid pour separer en deux les element sans les empiler grid-cols-[250px_1fr] le coter gauche fait 250 px de taille 
      className="
        h-full

        grid 
        grid-cols-[250px_1fr]

        gap-8
      "
    >  

      {/* ================= PROFIL ================= */}

      <div
        className="
          bg-white

          rounded-xl

          shadow-lg

          p-6

          h-fit
        "
      >

        {/* Photo ou avatar */}
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

        {/* Statut */}
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

      {/* ================= COLONNE DROITE ================= */}

      <div
        className="
          flex
          flex-col

          gap-6
        "
      >

        {/* ================= PRESENTATION ================= */}

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

            Passionné par le développement web,
            mobile et logiciel, je suis actuellement
            étudiant en informatique.

            J'aime concevoir des applications,
            découvrir de nouvelles technologies
            et transformer des idées en projets
            concrets.

          </p>

        </div>

        {/* ================= COMPETENCES ================= */}

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

              mb-6
            "
          >
            Compétences
          </h2>

          <div className="space-y-4">

            {/* React */}

            <div>

              <p className="font-semibold mb-1 flex justify-between">
                <span>React</span>
                <span>70%</span>
              </p>

              <div className="w-full h-3 bg-gray-200 rounded-full">
                <div className="w-[70%] h-3 bg-blue-500 rounded-full" />
              </div>

            </div>

            {/* JavaScript */}

            <div>

              <p className="font-semibold mb-1 flex justify-between">
                <span>JavaScript</span>
                <span>85%</span>
              </p>

              <div className="w-full h-3 bg-gray-200 rounded-full">
                <div className="w-[85%] h-3 bg-yellow-500 rounded-full" />
              </div>

            </div>

            {/* Tailwind */}

            <div>

              <p className="font-semibold mb-1 flex justify-between">
                <span>Tailwind CSS</span>
                <span>80%</span>
              </p>

              <div className="w-full h-3 bg-gray-200 rounded-full">
                <div className="w-[80%] h-3 bg-cyan-500 rounded-full" />
              </div>

            </div>

            {/* Java */}

            <div>

              <p className="font-semibold mb-1 flex justify-between">
                <span>Java</span>
                <span>80%</span>
              </p>

              <div className="w-full h-3 bg-gray-200 rounded-full">
                <div className="w-[80%] h-3 bg-orange-500 rounded-full" />
              </div>

            </div>

            {/* Kotlin */}

            <div>

              <p className="font-semibold mb-1 flex justify-between">
                <span>Kotlin / Compose</span>
                <span>70%</span>
              </p>

              <div className="w-full h-3 bg-gray-200 rounded-full">
                <div className="w-[70%] h-3 bg-purple-500 rounded-full" />
              </div>

            </div>

            {/* SQL */}

            <div>

              <p className="font-semibold mb-1 flex justify-between">
                <span>SQL</span>
                <span>80%</span>
              </p>

              <div className="w-full h-3 bg-gray-200 rounded-full">
                <div className="w-[80%] h-3 bg-green-500 rounded-full" />
              </div>

            </div>

            {/* MongoDB */}

            <div>

              <p className="font-semibold mb-1 flex justify-between">
                <span>MongoDB</span>
                <span>60%</span>
              </p>

              <div className="w-full h-3 bg-gray-200 rounded-full">
                <div className="w-[60%] h-3 bg-green-700 rounded-full" />
              </div>

            </div>

            {/* GitHub */}

            <div>

              <p className="font-semibold mb-1 flex justify-between">
                <span>Git / GitHub</span>
                <span>85%</span>
              </p>

              <div className="w-full h-3 bg-gray-200 rounded-full">
                <div className="w-[85%] h-3 bg-black rounded-full" />
              </div>

            </div>

          </div>

        </div>

        {/* ================= STATISTIQUES ================= */}

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
            Statistiques
          </h2>

          <div className="space-y-2">

            <p>
               Projets réalisés : 6
            </p>

            <p>
               Technologies maîtrisées : 9
            </p>

            <p>
               Études : Une année en BUT + Une année en BTS SIO 
            </p>

          </div>

        </div>

      </div>

    </div>

  )
}

export default AboutWindow