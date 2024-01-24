import Footer from "./Footer";
import List from "./list";

function Content({activeButton}){
    const data ={
        monts:{
            img: 'url(./image_1.png)',
            header: "Велосипед STELS Navigator 510 HD 26 2022",
            text_1: "Данный велосипед с колесами 26 дюймов хорошо подходит высоким подросткам. Прогиб рамы и небольшой размер рамы расчитан на рост от 135 до 165 см.",
            text_2: "Суммарный вес велосипеда был снижен до 16,9 кг, так как рама была изготовлена с учетом использования велосипеда подростками.",
            params: ['Двойной обод', 'Алюминиевый сплав', 'Колеса диаметром 26 дюймов', 'Покрышки 26х1,95']
        },
        wom:{
            img: 'url(./image_2.png)',
            header: "Велосипед SCHWINN Traveler women 2022",
            text_1: "Женский велосипед со стальной рамой Classic step-true lightweight позволяет девушкам без проблем его перемещать.",
            text_2: "На данном велосипеде имеется 7 скоростей с переключателями от Shimano, а жесткая вилка обеспечивает отличную управляемость. Подходит для катания по асфальтированным поверхностям.",
            params: ['Стальная рама', 'Жесткая вилка', 'Колеса диаметром 24 дюймов', '7 скоростей']
        }
    }
    return (

    <>
        <div className="header">
            <div className="bike" style = {{backgroundImage: data[activeButton].img}}> 
               
            </div>     
            <div className='texst'>
                <h1>
                    {data[activeButton].header}
                </h1>
                <p>
                    {data[activeButton].text_1}  
                </p>
                <p>
                    {data[activeButton].text_2}
                </p>

            </div>
        </div>
        <hr className="line" />
        <List intialParams={data[activeButton].params}></List>
        <Footer></Footer>
    </>
    );
}
export default Content;