import Entrer from "./Entrer";

export default function Formulaire(props) {

  return (
    <>
        {props.page===1 ? 
            <>
                <h2>{props.titre}</h2>
                <Entrer {}/>
                <Entrer {}/>
                <Entrer {}/>
            </>
        }
        
    </>
  )
}

