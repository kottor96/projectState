import { useState } from 'react'
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

  function modifier(e) {
    e.target.id === 'nom' 
    && setId({...id,nom:e.target.value})
    e.target.id === 'email'
    && setId({...id,email:e.target.value})
    e.target.id === 'phone'
    && setId({...id,numberPhone:e.target.value})
    
  }

  function anMois() {
    setAn(!an)
  }

  function nextPage(){
    setPage(page+1)
  }
  function prewPage(){
    setPage(page-1)
  }
  function y(e){
    
    
    e.key==='y' 
    ? e.target.classList.toggle('rigolo')
    : null
    
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
        fin={merci}
        y={y}
        modifier={modifier}
      />
    </>
  )
}

export default App
