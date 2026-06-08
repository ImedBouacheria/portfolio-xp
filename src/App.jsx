import { useEffect, useState } from "react" //on recupere 2 outils usesatate qui stock une valeur et useeffect qui qui exectude le code apres l'affichage du composant 

import Desktop from "./components/Desktop"
import BootScreen from "./components/BootScreen"

function App() {

// Etat loading
const [loading, setLoading] = useState(true) // variable + fonction pour la modifier (useState permet la creation )
// use State donne le 'true' au loading qui sera modifier apres 
// temps de chargement
useEffect(() => { //Quand l'app apparait excute le code 
const timer = setTimeout(() => { 
  setLoading(false)  // ici le loading est modifier il deviens false 
}, 4000) 


return () => clearTimeout(timer)

}, [])

// Affiche boot screen
    if (loading) {
      return <BootScreen />  
          }                  
          // Affiche bureau
        return <Desktop /> // renvoie au bureau quand le chargement est fini 
}

export default App
