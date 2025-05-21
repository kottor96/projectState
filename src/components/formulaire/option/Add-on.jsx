export default function Add_On({el,an}) {

  return (
    <>
      <div className="bonus">
        <input type="checkbox"/>
        <div>
          <h3>{el.option}</h3>
          <h4>{el.description}</h4>
        </div>
        <p>{an?el.prix*10:el.prix}€/{an?'ans':'mois'}</p>
      </div>

    </>
  )
}

