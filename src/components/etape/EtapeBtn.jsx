export default function EtapeBtn({n,etape,page}) {

  return (
    <>
        <div className="etape">
            <div>
              <button className={n===(page+1)?'active':''}>{n}</button>
            </div>
            <div>
              <h4>étape {n}</h4>
              <h3>{etape}</h3>
            </div>
        </div>
    </>
  )
}

