import { useEffect, useState } from "react"

import Desktop from "./components/Desktop"
import BootScreen from "./components/BootScreen"

function App() {

// Etat loading
const [loading, setLoading] = useState(true) // variable + fonction pour la modifier (useState permet la creation )
// use State donne le 'true' au loading qui sera modifier apres 
// temps de chargement
useEffect(() => {


const timer = setTimeout(() => {
  setLoading(false)  // ici le loading est modifier il deviens false  
}, 4000) 

return () => clearTimeout(timer)


}, [])

// Affiche boot screen
if (loading) {
return <BootScreen />  
}
else                  
// Affiche bureau
return <Desktop /> // renvoie au bureau quand le chargement est fini 
}

export default App
