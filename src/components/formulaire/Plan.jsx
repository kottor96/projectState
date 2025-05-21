export default function Plan({el,an}) {

  return (
    <>
        <div>
            <div>
                <img src={el.logo}/>
            </div>
            <div>
                <h3>{el.titre}</h3>
                <h4>{an? `${el.prix*10}/ans` : `${el.prix}/mois`}</h4>
            </div>
        </div>
    </>
  )
}

