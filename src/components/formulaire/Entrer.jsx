export default function Entrer({valeur,label,type,placeholder,modifier,id}) {
  
  
  return (
    <>
      <div className="divEntrer">
        <label htmlFor={type}>{label} {valeur}</label>
        <input value={valeur} id={id} type={type} placeholder={placeholder} onChange={(e)=>modifier(e)}/>
      </div>
    </>
  )
}

