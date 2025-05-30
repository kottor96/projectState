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
  const [plan,setPlan] = useState(undefined)
  const [bonus,setBonus] = useState({0:false,1:false,2:false})

  function activeBonus(i) {
    setBonus({...bonus,[i]:!bonus[i]})
  }

  function modifier(e) {
    e.target.id === 'nom' 
    && setId({...id,nom:e.target.value})
    e.target.id === 'email'
    && setId({...id,email:e.target.value})
    e.target.id === 'phone'
    && setId({...id,numberPhone:e.target.value})
    
  }

  function choisirPlan(i) {
    setPlan(listePlan[i])
  }

  function allerPage(i) {
    setPage(i)
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
        planI={plan}
        choisirPlan={choisirPlan}
        activeBonus={activeBonus}
        bonus={bonus}
        allerPage={allerPage}
      />
    </>
  )
}

export default App
