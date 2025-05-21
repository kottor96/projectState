export default function Entrer({label,type}) {

  return (
    <>
      <div className="divEntrer">
        <label htmlFor={type}>{label}</label>
        <input type={type} />
      </div>
    </>
  )
}

