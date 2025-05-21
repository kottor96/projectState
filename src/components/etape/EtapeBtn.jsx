export default function EtapeBtn({n,etape}) {

  return (
    <>
        <div className="etape">
            <div>
              <button>{n}</button>
            </div>
            <div>
              <h4>étape {n}</h4>
              <h3>{etape}</h3>
            </div>
        </div>
    </>
  )
}

