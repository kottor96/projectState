import { use, useState } from 'react'
import Card from './components/card'
import arcade from './assets/arcade.svg'
import pro from './assets/pro.svg'
import merci from './assets/thankyou.svg'
import avancer from './assets/advenced.svg'
import listeBonus from '../listeBonus.json'

const listePlan = [{logo:arcade,titre:'Arcade',prix:9},{logo:avancer,titre:'Avancer',prix:12},{logo:pro,titre:'Pro',prix:15}]
function App() {
  const [page,setPage] = useState(0)
  const [id,setId] = useState({nom:'',email:'',numberPhone:''}) 
  const [an,setAn] = useState(false)

  function anMois() {
    setAn(!an)
  }

  function nextPage(){
    setPage(page+1)
  }
  function prewPage(){
    setPage(page-1)
  }

  return (
    <>
      <Card 
        id={id} 
        listePlan={listePlan} 
        page={page}
        nextPage={nextPage} 
        prewPage={prewPage} 
        an={an}
        anMois={anMois}
        listeBonus={listeBonus}
      />
    </>
  )
}

export default App
