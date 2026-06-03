function DesktopIcon({ title, image, onClick }) {

return (

  <div
  onClick={onClick}

  className="
    flex
    flex-col
    items-center
    w-24
    p-2
    rounded                   
    cursor-pointer       
    hover:bg-blue-500/30  
    hover:scale-105
    transition
    duration-200
    select-none
  " // effet de survole + centrage 
>

  {/* Icône */}
  <img
    src={image}
// taille des icon
    className="      
      w-14
      h-14
      object-contain
      drop-shadow-lg
    "
  />

  {/* Texte */}
  <p
    className="
      text-white
      text-sm
      text-center
      mt-1
      drop-shadow-lg
    "
  >
    {title}
  </p>

</div>


)
}

export default DesktopIcon
