import { useState } from "react"
import Presentation from "../stage/Presentation"
import Journal from "../stage/Journal"
import Missions from "../stage/Missions"
import Technologies from "../stage/Technologies"
import Competences from "../stage/Competences"
import Bilan from "../stage/Bilan"

function Stage1erAnne() {

  const [section, setSection] = useState("presentation")

  return (

    <div className="flex h-full">

      {/* MENU GAUCHE */}
      <div className="w-64 border-r bg-gray-100 p-4">

        <button
          onClick={() => setSection("presentation")}
          className="block w-full text-left p-2 hover:bg-blue-100"
        >
          📁 Présentation
        </button>

        <button
          onClick={() => setSection("journal")}
          className="block w-full text-left p-2 hover:bg-blue-100"
        >
          📁 Journal de bord
        </button>

        <button
          onClick={() => setSection("missions")}
          className="block w-full text-left p-2 hover:bg-blue-100"
        >
          📁 Missions
        </button>

        <button
          onClick={() => setSection("technologies")}
          className="block w-full text-left p-2 hover:bg-blue-100"
        >
          📁 Technologies
        </button>

        <button
          onClick={() => setSection("competences")}
          className="block w-full text-left p-2 hover:bg-blue-100"
        >
          📁 Compétences acquises
        </button>

        <button
          onClick={() => setSection("bilan")}
          className="block w-full text-left p-2 hover:bg-blue-100"
        >
          📁 Bilan
        </button>

      </div>

      {/* CONTENU */}
      <div className="flex-1 p-6 overflow-y-auto">

        {/* PRESENTATION */}

        {section === "presentation" && <Presentation />}

        {/* JOURNAL */}

        {section === "journal" && <Journal />}


        {/* MISSIONS */}

        {section === "missions" && <Missions />}



        {/* TECHNOLOGIES */}

        {section === "technologies" && <Technologies />}

         

    

        {/* COMPETENCES */}

        {section === "competences" && <Competences />}

          



        {/* BILAN */}

        {section === "bilan" && <Bilan/>}

          
       

      </div>

    </div>

  )
}

export default Stage1erAnne