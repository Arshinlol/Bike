function List(){
    return(
       <div className="params">
            <h3>
            Характеристики
            </h3>
            <ol className="params_list">
                <li>Двойной обод</li>
                <li>Алюминиевый сплав</li>
                <li>Колеса диаметром 26 дюймов</li>
                <li>Покрышки 26х1,95"</li>
                
            </ol>
            <div className="add_params">
                <h3>Добавить характеристику</h3>
                <div className="add_params_form"> 
                    <input tupe="text" placeholder="Алюминиевый сплав"></input> 
                    <button className="add_params_but">Добавить</button>
                </div>
            </div>
       </div>
    );
}
export default List;