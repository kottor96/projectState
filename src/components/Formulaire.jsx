import Btn from "./Btn";
import Entrer from "./Entrer";

export default function Formulaire(props) {

  return (
    <>
        {props.page===1 
        ? (
            <form>
                <h2>{props.titre}</h2>
                <div>
                    <Entrer label={'Votre nom est :'} type={'text'}/>
                    <Entrer label={'votre adresse est :'} type={'email'}/>
                    <Entrer label={'votre numero est :'} type={'number'}/>
                </div>
                <div><Btn containt={'suivant'}/></div>
            </form>
            )
            
            :<p>en developement</p>
            
        }
        
        
    </>
  )
}

