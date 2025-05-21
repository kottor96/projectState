export default function Add_On({option,description,prix}) {

  return (
    <>
      <div className="bonus">
        <input type="checkbox"/>
        <h3>{option}</h3>
        <h4>{description}</h4>
        <p>{prix}</p>
      </div>

    </>
  )
}

