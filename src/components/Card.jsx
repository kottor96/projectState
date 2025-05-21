import Formulaire from "./formulaire/Formulaire";
import Etape from "./etape/Etape";

export default function Card(props) {
    
    return (
        <>
            <section id="cardFormulaire">
                <div id="carte" onKeyDown={props.y} onKeyUp={props.y} tabIndex={0}>
                    <div id="etape">
                        <Etape {...props}/>
                    </div>
                    <div id="formulaire">
                        <Formulaire {...props}/>
                    </div>
                </div>
            </section>
        </>
    )
}

