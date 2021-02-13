
import React, { useState,useEffect } from "react";

const Count = () => {
    const [count1, setCount] = useState(0);
    const [count2, setCount2] = useState(2);
    const [count3, setCount3] = useState(4);

    useEffect(()=>{
        console.log(count1);
        console.log(count2);
    },[count3]);

    const Inc = () => {
        setCount(count1 + 1);
        setCount2(count2 + 2);
    }

    return (
        <div>
            <h2>{count1} {count2}</h2>
            <button onClick={Inc}>Increase counter</button>
        </div>
    )

}
export default Count;