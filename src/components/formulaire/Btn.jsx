export default function Btn({action,containt}) {

  return (
    <>
      <button onClick={action} type="button" className="btn-primary">{containt}</button>
    </>
  )
}

