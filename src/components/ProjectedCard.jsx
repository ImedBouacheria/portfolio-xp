function ProjectCard({
title,description,tech,image,github
}) {

return (


<div
  className="
    bg-white
    rounded
    shadow-lg
    p-4
  "
>

  {/* Image */}
  <img
    src={image}

    className="
      w-full
      h-40
      object-cover
      rounded
    "
  />

  {/* Titre */}
  <h1
    className="
      text-xl
      font-bold
      mt-4
    "
  >
    {title}
  </h1>

  {/* Description */}
  <p className="mt-2 text-gray-700">
    {description}
  </p>

  {/* Tech */}
  <p className="mt-2 text-sm text-blue-600">
    {tech.join(" • ")}
  </p>

  {/* Bouton GitHub */}
  {github && (

    <a
      href={github}
      target="_blank"
      rel="noreferrer"

      className="
        inline-block
        mt-4

        bg-blue-600
        hover:bg-blue-500

        text-white

        px-3
        py-1

        rounded

        transition
      "
    >
      GitHub
    </a>

  )}

</div>


)
}

export default ProjectCard
