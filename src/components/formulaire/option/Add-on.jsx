export default function Add_On({el}) {

  return (
    <>
      <div className="bonus">
        <input type="checkbox"/>
        <h3>{el.option}</h3>
        <h4>{el.description}</h4>
        <p>{el.prix}</p>
      </div>

    </>
  )
}

