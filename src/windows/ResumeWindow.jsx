
function ResumeWindow() {

return (

<div className="flex gap-3 mb-4">

  <a
    href="/cv-final.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-600 text-white px-4 py-2 rounded"
  >
     Voir le PDF
  </a>

  <a
    href="/cv-final.pdf"
    download
    className="bg-blue-600 text-white px-4 py-2 rounded"
  >
     Télécharger
  </a>

</div>

)
}

export default ResumeWindow
