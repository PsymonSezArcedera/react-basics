// export default function Counter(props){
//     return (
//         <>
//         <h1>Counter: {props.val}</h1>
//         <button onClick={()=> alert("Added")}>Add</button>
//         </>
//     );
// }

import { useState } from "react";
// export default function Counter(props) {
 
//     function addValue(){
//         return setVal(val+1);
//     }
//     const [val, setVal] = useState(props.val);
//     return (
//         <>
//             <h1>Counter: {val}</h1>
//             <button onClick={addValue}>Add</button>
//         </>
//     );
// }

export default function Counter(props) {
    function addValue(){
       setVal((prev)=> prev +1)    
    }

    const [val, setVal] = useState(props.val);
    return (
        <>
            <h1>Counter: {val}</h1>
            <button onClick= {() => {
                addValue()
                addValue()
                addValue()
            }}>Add</button>
        </>
    );
}