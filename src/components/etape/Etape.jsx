import EtapeBtn from "./EtapeBtn";

export default function Etape() {
    const tableau = ['YOUR INFO','SELECTED PLAN','ADD ON','SUMMARY']
    return (
        <>
            {tableau.map((el,index)=>
                <EtapeBtn etape={el} key={index} n={index+1}/>
            )}
        </>
    )
}

