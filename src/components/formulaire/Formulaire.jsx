import Btn from "./Btn";
import Entrer from "./Entrer";
import Plan from "./Plan";


export default function Formulaire(props) {
    return (
        <>
            {props.page===0 
                ? (
                    <form>
                        <div className="head">
                            <h2>Info Personel</h2>
                            <h3>Merci d'entre votre nom, adresse mail, numero de téléphone</h3>
                        </div>
                        

                        <div id="info">
                            <Entrer label={'Votre nom est :'} type={'text'} placeholder={'Truc Mush'}/>
                            <Entrer label={'votre adresse est :'} type={'email'} placeholder={'trucmush@gmail.com'}/>
                            <Entrer label={'votre numero est :'} type={'number'} placeholder={'0000 00 00 00'}/>
                        </div>
                        <div className="btn_SP">
                            <Btn containt={'suivant'} grid={'suivant'} action={props.nextPage}/>
                        </div>
                    </form>
                )
                
                :props.page===1
                ?(
                    <form action="">
                        <div className="head">
                            <h2>Selection ton plan</h2>
                            <h3>Vous pouvez choisir par mois ou par ans</h3>
                        </div>
                        <div className="plan">
                            {props.listePlan.map((el,index)=>
                                <Plan key={index} el={el}/>
                            )}
                        </div>
                        <div className="form-switch p-0 d-flex justify-content-between">
                            <h6>Mois</h6>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="switchCheckDefault"
                            />
                            <h6>Ans</h6>
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

