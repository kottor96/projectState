import Btn from "./components_formulaire/Btn";
import Entrer from "./components_formulaire/Entrer";
import Add_On from "./components_formulaire/Add-on";
import Plan from "./components_formulaire/Plan";
import Recap from "./components_formulaire/finish";

export default function Formulaire(props) {
    console.log(props.id);
    
    const test = props.id.nom==='' || props.id.email ==='' || props.id.number===''
    const optionTest = props.planI!==undefined
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
                            <Entrer valeur={props.id.nom} label={'Votre nom est :'} type={'text'} placeholder={'Truc Mush'} modifier={props.modifier} id={'nom'}/>
                            <Entrer valeur={props.id.email} label={'votre adresse est :'} type={'email'} placeholder={'trucmush@gmail.com'} modifier={props.modifier} id={'email'} />
                            <Entrer valeur={props.id.numberPhone} label={'votre numero est :'} type={'number'} placeholder={'0000 00 00 00'} modifier={props.modifier} id={'phone'}/>
                        </div>
                        <div className="btn_SP">
                            <Btn containt={'suivant'} grid={'suivant'} action={!test?props.nextPage:null} className={test? 'disabled':''}/>
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
                                <Plan key={index} i={index} el={el} an={props.an} choisirPlan={props.choisirPlan} planI={props.planI}/>
                            )}
                        </div>
                        <div className="form-switch p-2 pt-3 rounded-2 d-flex justify-content-around">
                            <h6>Mois</h6>
                            <input
                                onChange={props.anMois}
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="switchCheckDefault"
                            />
                            <h6>An</h6>
                        </div>
                        <div className="btn_SP">
                            <Btn containt={'précedent'} grid={'precedent'} action={props.prewPage}/>
                            <Btn containt={'suivant'} grid={'suivant'} action={optionTest?props.nextPage:null} className={optionTest?'':'disabled'}/>
                        </div>
                    </form>
                )
                :props.page===2
                ?<form>
                    <div className="head">
                        <h2>Ajoute ce qu'il te manque</h2>
                        <h3>Si il te manque de quelque chose, prend en plus</h3>
                    </div>
                    <div id="plus">
                        {
                            props.listeBonus.map((el,index)=>
                                <Add_On el={el} key={el.option} an={props.an} i={index} activeBonus={props.activeBonus} bonus={props.bonus} />
                            )
                        }
                    </div>
                    <div className="btn_SP">
                        <Btn containt={'précedent'} grid={'precedent'} action={props.prewPage}/>
                        <Btn containt={'suivant'} grid={'suivant'} action={props.nextPage}/>
                    </div>
                </form>
                :props.page===3
                ?<form>
                    <div className="head">
                        <h2>Confirmer</h2>
                        <h3>recapitulatif de la commande</h3>
                    </div>
                    <div className='recap'>
                        <Recap {...props}/>
                    </div>
                    <div className="btn_SP">
                        <Btn containt={'précedent'} grid={'precedent'} action={props.prewPage}/>
                        <Btn containt={'Confimer'} grid={'suivant'} action={props.nextPage}/>
                    </div>
                </form>
                :props.page===4
                ?<form id="fin">
                    <img src={props.fin} alt="fin" />
                    <div className="head">
                        <h2>Merci !</h2>
                        <h3>Nous avons bien reçus votre commande, et nous somme heureux de vous annoncer que ce formulaire fais rien d'autre que clignoter en orange quand on appuye sur y</h3>
                    </div>
                </form>
                :<p>Error</p>


                
            }
            
            
        </>
    )
}

