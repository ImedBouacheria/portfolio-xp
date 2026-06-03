import projects from "../data/projects"

import ProjectCard from "../components/ProjectedCard"

function ProjectsWindow() {

return (


<div
  className="
    grid
    grid-cols-2
    gap-4
  "
>

  {projects.map((project) => (

    <ProjectCard
      key={project.id}

      title={project.title}
      description={project.description}
      tech={project.tech}
      image={project.image}
      github={project.github}
    />

  ))}

</div>


)
}

export default ProjectsWindow
