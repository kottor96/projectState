import { useState } from 'react'
import Card from './components/card'

function App() {
  const [page,setPage] = useState(1)
  const [id,setId] = useState({nom:'',email:'',numberPhone:''}) 

  return (
    <>
      <Card page={page} id={id}/>
    </>
  )
}

export default App
