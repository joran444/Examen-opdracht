import React from "react"
import Link from "next/link"
// import ReactDOM from "react-dom";

function Recept({ titel, omschrijving, slug, auteur, gemaaktOp}) {
  // let { file, description } = image

  return (
    <Link href={`/recept/${slug}`}><div className="card content-evenly">
      {/* <img alt={description} src={`https:${file.url}`} /> */}
      {/* <div className="description">{omschrijving}</div> */}
      <div className="text">
        <h2>{titel}</h2>
        <h2>{omschrijving}</h2>
        <h3>{gemaaktOp}</h3>
        <h3>Gemaakt door: {auteur}</h3>
      </div>
    </div>
    </Link>
  )
}

export default Recept