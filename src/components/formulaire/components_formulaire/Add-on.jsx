export default function Add_On({el,an,activeBonus,i,bonus}) {
  
  return (
    <>
      <div className="bonus" onClick={()=>activeBonus(i)}>
        <input type="checkbox" checked={bonus[i]} readOnly/>
        <div>
          <h3>{el.option}</h3>
          <h4>{el.description}</h4>
        </div>
        <p>{an?el.prix*10:el.prix}€/{an?'ans':'mois'}</p>
      </div>

    </>
  )
}

