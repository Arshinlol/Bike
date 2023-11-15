import { useState } from 'react';
import './App.css'
import Content from './components/Content'
import Menu from './components/Menu'




function App() {
  const[activeButton, setActiveButton] = useState("monts");  

    function changeActive(curra){
      setActiveButton(curra);

    }

  return (
    <>
      <Menu activeButton = {activeButton} changeActiveButton = {changeActive}></Menu>
      <div className='conteiner'>
        <Content activeButton = {activeButton}/>
      </div>
      
    </>
  )
}

export default App
