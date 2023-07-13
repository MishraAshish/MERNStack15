import React, { useState, useCallback, useMemo } from "react";
import Count from "./Count";
import Button from "./Button";
import Title from "./Title";


function Hooks(props) {
    //let age = 18, text1 = "Age";
    let text1 = "Age"
    let [age, setAge] = useState(19);
    let [salary, setSalary] = useState(20000);

    let incrementAge = useCallback(()=>{
        console.log("Increment Age")
        setAge(age++);
    },[age]);

    let incrementSalary = useCallback(()=>{
        console.log("salary")
        setSalary(salary + 100)
    },[salary]);

    let isEven = useMemo(()=>{
        console.log("IsEven")
        let i = 1
        while(i < 200000000) i++;

        return age % 2 === 0;
    },[age])

    return(
        <>
            <Title />

            <Count text={text1} count={age}/>
        
            <Button handleClick={incrementAge} >
                Increment Age
            </Button>

            {/* <span>{isEven() ? ' Even' : ' Odd'}</span> */}

            <span>{isEven ? ' Even' : ' Odd'}</span>

            <Count text={"Salary"} count={salary}/>
            <Button handleClick={incrementSalary}>
                Increment Salary
            </Button>
        </>
    )
}

export default Hooks;
//we should avoid using react.memo in the parent pages so that there is no unnessaray caching to increment states