import Formulaire from "./Formulaire";
import Etape from "./etape/Etape";

export default function Card(props) {

  return (
    <>
        <section>
            <div id="carte">
                <div id="option">
                    <Etape/>
                </div>
                <div id="formulaire">
                    <Formulaire {...props}/>
                </div>
            </div>
        </section>
    </>
  )
}

