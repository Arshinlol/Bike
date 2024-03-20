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
    <div className='main'>
      <Menu activeButton = {activeButton} changeActiveButton = {changeActive}></Menu>
      <div className='conteiner'>
        <Content activeButton = {activeButton}/>
      </div>
      
    </div>
  )
}

export default App
