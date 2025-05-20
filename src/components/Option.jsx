import BtnOption from "./BtnOption";

export default function option() {
    const tableau = ['YOUR INFO','SELECTED PLAN','ADD ON','SUMMARY']
    return (
        <>
            {tableau.map(el,index=>
                <BtnOption containt={el} key={index} n={index}/>
            )}
        </>
    )
}

