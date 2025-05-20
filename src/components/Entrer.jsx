export default function Entrer({label,type}) {

  return (
    <>
      <div>
        <label htmlFor={type}>{label}</label>
        <input type={type} />
      </div>
    </>
  )
}

