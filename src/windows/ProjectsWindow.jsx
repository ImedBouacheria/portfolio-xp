import { useState } from "react"

import projects from "../data/projects"

function ProjectsWindow() {

  // Projet sélectionné au démarrage
  const [selectedProject, setSelectedProject] =
    useState(projects[0])

  return (

    <div
      className="
        h-full

        grid
        grid-cols-[280px_1fr]

        gap-6
      "
    >

      {/* ================= LISTE DES PROJETS ================= */}

      <div
        className="
          bg-white

          rounded-xl

          shadow-lg

          overflow-auto
        "
      >

        {/* En-tête */}
        <div
          className="
            p-4

            bg-blue-100

            font-bold

            border-b
          "
        >
          Mes projets
        </div>

        {/* Liste */}
        {projects.map((project) => (

          <button
            key={project.id}

            onClick={() =>
              setSelectedProject(project)
            }

            className={`
              w-full

              text-left

              p-4

              border-b

              hover:bg-blue-50

              transition

              ${
                selectedProject.id === project.id
                  ? "bg-blue-100"
                  : ""
              }
            `}
          >

            <div className="font-semibold">
              📁 {project.title}
            </div>

            <div
              className="
                text-sm

                text-gray-500
              "
            >
              {project.Year || "Projet personnel"}
            </div>

          </button>

        ))}

      </div>

      {/* ================= DETAILS DU PROJET ================= */}

      <div
        className="
          bg-white

          rounded-xl

          shadow-lg

          overflow-auto

          p-6
        "
      >

        {/* Image */}
        <img
          src={selectedProject.image}

          alt={selectedProject.title}

          className="
            w-full

            h-64

            object-cover

            rounded-lg

            border
          "
        />

        {/* Titre */}
        <h1
          className="
            text-3xl

            font-bold

            mt-6
          "
        >
          {selectedProject.title}
        </h1>

        {/* Année */}
        <p
          className="
            mt-2

            text-gray-500
          "
        >
          {selectedProject.Year || "Projet personnel"}
        </p>

        {/* Description */}
        <p
          className="
            mt-4

            leading-7

            text-gray-700
          "
        >
          {selectedProject.description}
        </p>

        {/* Technologies */}
        <div className="mt-6">

          <h2
            className="
              text-xl

              font-bold

              mb-3
            "
          >
            Technologies utilisées
          </h2>

          <div
            className="
              flex
              flex-wrap

              gap-2
            "
          >

            {selectedProject.tech.map(
              (tech, index) => (

                <span
                  key={index}

                  className="
                    bg-blue-500

                    text-white

                    px-3
                    py-1

                    rounded-full
                  "
                >
                  {tech}
                </span>

              )
            )}

          </div>

        </div>

        {/* GitHub */}

        {selectedProject.github && (

          <div className="mt-8">

            <a
              href={selectedProject.github}

              target="_blank"

              rel="noopener noreferrer"

              className="
                inline-block

                bg-blue-600

                text-white

                px-5
                py-2

                rounded-lg

                hover:bg-blue-700

                transition
              "
            >
              Voir sur GitHub
            </a>

          </div>

        )}

      </div>

    </div>

  )
}

export default ProjectsWindow