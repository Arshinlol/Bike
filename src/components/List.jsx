import { useEffect, useState } from "react";

function List({intialParams, activeButton}){
    const[text, setText] = useState('');
    const[params, setParams] = useState(intialParams || []); 

        function handleClick(){
            setParams([...params, text]);
            setText('');
        }

    useEffect(() => {
        setParams(intialParams);
    }, [intialParams]);


    return(
       <div className="params">
            <h3>
            Характеристики
            </h3>
            <ol className={`params_list ${activeButton === "wom" && activeButton}`}>
               {params.map((har) => ( <li key={har}>{har}</li>))}
            </ol>
            <div className="add_params">
                <h3>Добавить характеристику</h3>
                <div className="add_params_form"> 
                    <input tupe="text" placeholder="Алюминиевый сплав" value={text} onChange={(e) => setText(e.target.value)}></input> 
                    <button className="add_params_but" onClick={handleClick}>Добавить</button>
                </div>
            </div>
       </div>
    );
}
export default List; 