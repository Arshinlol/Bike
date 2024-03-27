function Menubutton({name, cls, change, arrowCls}){
    return(
        <button className={cls} onClick={change}>
            {name}<span className={arrowCls }></span>
        </button>
    );
}
export default Menubutton;
