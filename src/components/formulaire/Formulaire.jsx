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
                        <div className="btn_SP">
                            <Btn containt={'suivant'} grid={'suivant'} action={props.nextPage}/>
                        </div>
                    </form>
                )
                
                :props.page===1
                ?(
                    <form action="">
                        <h2>Selection ton plan</h2>
                        <h3>Vous pouvez choisir par mois ou par ans</h3>
                        <div className="plan">
                            {props.listePlan.map((el,index)=>
                                <Plan key={index} el={el}/>
                            )}
                        </div>
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="switchCheckDefault"
                            />
                            <label className="form-check-label" htmlFor="switchCheckDefault">
                                Default switch checkbox input
                            </label>
                        </div>
                        <div className="btn_SP">
                            <Btn containt={'précedent'} grid={'precedent'} action={props.prewPage}/>
                            <Btn containt={'suivant'} grid={'suivant'} action={props.nextPage}/>
                        </div>
                    </form>
                )
                :props.page===2
                ?<form>
                    <div className="btn_SP">
                        <Btn containt={'précedent'} grid={'precedent'} action={props.prewPage}/>
                        <Btn containt={'suivant'} grid={'suivant'} action={props.nextPage}/>
                    </div>
                </form>
                :<form>
                    <div className="btn_SP">
                        <Btn containt={'précedent'} grid={'precedent'} action={props.prewPage}/>
                    </div>
                </form>


                
            }
            
            
        </>
    )
}

