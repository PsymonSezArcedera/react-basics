// import React from 'react';

// function SubjectList(props){
//     let subjects = props.data;
//     let title = props.title

//     return (
//         <div>
//             <h1>{title}</h1>
//     	    <ol>
//             {
//                 subjects.map((subject) => {
//                 return <li>{subject.code} - {subject.description}</li>
//                 })
//             }
//     	    </ol>
//   	  </div>
//     );
// }

// export default SubjectList

import { useState } from "react";
export default function SubjectList(props){
    const subjectlist = props.list;
    const [subjects, setSubjects] = useState(subjectlist);
    
    function addSubject() {
        setSubjects((subjects) => {
            const nval = [...subjects, { code: "CMSC23", description: "Mobile Development" }];
            console.log(nval);
            return nval;
        });
    }

    return (
        <>
        <p>Show list: </p>
        <ol>
            {
            subjects.map((subject)=>{
                return <li>{subject.code} - {subject.description}</li>
            })
            }
        </ol>
        <button onClick={addSubject}>Add Subject</button>
        </>
    );
}