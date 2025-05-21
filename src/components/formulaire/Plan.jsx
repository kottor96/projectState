export default function Plan({el}) {

  return (
    <>
        <div>
            <div>
                <img src={el.logo}/>
            </div>
            <div>
                <h3>{el.titre}</h3>
                <h4> {el.prix} €</h4>
            </div>
        </div>
    </>
  )
}

