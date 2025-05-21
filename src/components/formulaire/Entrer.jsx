export default function Entrer({label,type,placeholder}) {

  return (
    <>
      <div className="divEntrer">
        <label htmlFor={type}>{label}</label>
        <input type={type} placeholder={placeholder}/>
      </div>
    </>
  )
}

