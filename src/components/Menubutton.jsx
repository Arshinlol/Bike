function Menubutton({name, cls, change}){
    return(
        <button className={cls} onClick={change}>
            {name}
        </button>
    );
}
export default Menubutton;
