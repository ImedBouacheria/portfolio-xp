import { useState } from "react"

// Fond d'écran Windows XP
import wallpaper from "../assets/bliss.jpg"

// Icônes desktop
import folderIcon from "../assets/folderIcon.png"
import cvIcon from "../assets/cvIcon.png"
import contactIcon from "../assets/contactIcon.png"
import projectIcon from "../assets/projectIcon.png"
import LVHlogo from "../assets/lvhlogo.png"
// Composants
import DesktopIcon from "./DesktopIcon"
import Taskbar from "./Taskbar"
import Modal from "./Modal"

// Fenêtres
import AboutWindow from "../windows/AboutWindow"
import ProjectsWindow from "../windows/ProjectsWindow"
import ContactWindow from "../windows/ContactWindow"
import ResumeWindow from "../windows/ResumeWindow"
import Stage1erAnne from "../windows/Stage1eranne"
function Desktop() {

// Fenêtre actuellement ouverte
const [activeWindow, setActiveWindow] = useState(null)

return (

// Bureau Windows XP
<div
  className="
    w-full
    h-full
    bg-cover
    bg-center
  "

  style={{
    backgroundImage: `url(${wallpaper})`
  }}
>

  {/* ================= ICONES  ================= */}

  <div
    className="
      p-6
      flex
      flex-col
      gap-8
    "
  >

    {/* ABOUT */}
    <DesktopIcon
      title="About"
      image={folderIcon}

      // Ouvre la fenêtre about
      onClick={() => setActiveWindow("about")}
    />

    {/* PROJECTS */}
    <DesktopIcon
      title="Projects"
      image={projectIcon}

      // Ouvre la fenêtre projets
      onClick={() => setActiveWindow("projects")}
    />

    {/* CONTACT */}
    <DesktopIcon
      title="Contact"
      image={contactIcon}

      // Ouvre la fenêtre contact
      onClick={() => setActiveWindow("contact")}
    />

    {/* CV */}
    <DesktopIcon
      title="Mon CV"
      image={cvIcon}

      // Ouvre la fenêtre CV
      onClick={() => setActiveWindow("resume")}
    />
    {/* Stage 1er anne */}
    <DesktopIcon
    title="Mon Stage"
    image={LVHlogo}
    
      // Ouvre la fenêtre CV
      onClick={() => setActiveWindow("stage")}

    />
  </div>

  {/* ================= FENETRE ABOUT ================= */}

 

    {activeWindow === "about" && (

  <Modal
  title="About"
  onClose={() => setActiveWindow(null)}

  >



<AboutWindow />


  </Modal>

)}




  {/* ================= FENETRE PROJECTS ================= */}

  {activeWindow === "projects" && (

    <Modal
      title="Projects"

      // Ferme la fenêtre
      onClose={() => setActiveWindow(null)}
    >
      

      {/* Contenu */}
      <ProjectsWindow />

    </Modal>

  )}

  {/* ================= FENETRE CONTACT ================= */}

  {activeWindow === "contact" && (

    <Modal
      title="Contact"

      // Ferme la fenêtre
      onClose={() => setActiveWindow(null)}
    >

      {/* Contenu */}
      <ContactWindow />

    </Modal>

  )}

  {/* ================= FENETRE CV ================= */}

  {activeWindow === "resume" && (

    <Modal
      title="Mon CV"

      // Ferme la fenêtre
      onClose={() => setActiveWindow(null)}
    >

      {/* Contenu */}
      <ResumeWindow />

    </Modal>

  )}

  {/* ================= Stage ================= */}

  {activeWindow === "stage" && (

    <Modal
      title="Stage 1er anne"

      // Ferme la fenêtre
      onClose={() => setActiveWindow(null)}
    >

      {/* Contenu */}
      <Stage1erAnne />

    </Modal>

  )}



  {/* ================= TASKBAR ================= */}

 <Taskbar
  activeWindow={activeWindow}
  setActiveWindow={setActiveWindow}
/>

</div>


)
}

export default Desktop
