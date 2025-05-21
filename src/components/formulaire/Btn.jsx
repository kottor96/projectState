export default function Btn({action,containt,grid}) {

  return (
    <>
      <button onClick={action} style={{ gridArea: grid }}  type="button" className={grid}>{containt}</button>
    </>
  )
}

