import React from "react";

export default function Recap({bonus,listeBonus,planI,an,allerPage}){
    let plan = an?planI.prix*10:planI.prix
    let bonusT = 0
    listeBonus.forEach((element,index) => {
        bonusT += bonus[index] ? (an ? element.prix * 10 : element.prix) : 0;
    });
    const total = plan +bonusT


    return(
        <>
            <div className="recapListe ps-3 pe-3">
                <div className="recapOption">
                    <div>
                        <h3>{planI.titre}{an?'(par ans)':'(par mois)'}</h3>
                        <a onClick={()=>allerPage(1)}>change</a>
                    </div>

                    <p className="prix">{an?(`${planI.prix*10}€/ans`):(`${planI.prix}€/mois`)}</p>
                </div>
                {Object.values(bonus).some(val => val) && <hr />}
                <div className="recapBonus">
                    {listeBonus.map((el,index)=>
                        bonus[index]
                        ?<React.Fragment key={index}>
                            <div>
                                <div>
                                    <p className="option">{el.option}</p>
                                </div>
                                <div>
                                    <p className="prix">{an?(`+ ${el.prix*10}/ans`):(`+ ${el.prix}/mois`)}</p>
                                </div>
                            </div>
                        </React.Fragment>
                        :null
                    )}
                </div>
            </div>
            <div className="recapResultat">
                <p className="total">total ( {an?'par ans':'par mois'} )</p>
                <p className="prixT">{total}€/{an?'ans':'mois'}</p>
            </div>
        </>
    )
}