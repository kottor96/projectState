import Btn from "./Btn";
import Entrer from "./Entrer";
import Plan from "./Plan";


export default function Formulaire(props) {
    return (
        <>
            {props.page===0 
            ? (
                <form>
                    <h2>Info Personel</h2>

                    <div>
                        <Entrer label={'Votre nom est :'} type={'text'}/>
                        <Entrer label={'votre adresse est :'} type={'email'}/>
                        <Entrer label={'votre numero est :'} type={'number'}/>
                        

                    </div>
                    <div><Btn containt={'suivant'} action={props.nextPage}/></div>
                </form>
                )
                
                :props.page===1
                ?(
                    <form action="">
                        <h2>Selection ton plan</h2>
                        <h3>Vous pouvez choisir par mois ou par ans</h3>
                        {props.listePlan.map((el,index)=>
                            <Plan key={index} el={el}/>
                        )}
                        
                        <div>
                            <Btn containt={'précedent'} action={props.prewPage}/>
                            <Btn containt={'suivant'} action={props.nextPage}/>
                        </div>
                    </form>
                )
                :<form>
                    <div>
                        <Btn containt={'précedent'} action={props.prewPage}/>
                    </div>
                </form>

                
            }
            
            
        </>
    )
}

