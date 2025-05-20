import Formulaire from "./Formulaire";

export default function Card(props) {

  return (
    <>
        <section>
            <div id="carte">
                <div id="option">
                    
                </div>
                <div id="formulaire">
                    <Formulaire {...props}/>
                </div>
            </div>
        </section>
    </>
  )
}

