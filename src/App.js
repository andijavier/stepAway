import ciggarete from './ciggarete.gif';
import coffee from './coffee.gif'
import React, { useState } from 'react'
import './App.css';

function App() {
  const [sentenceOne, setSentenceOne] = useState(localStorage.getItem('sentenceOne')? localStorage.getItem('sentenceOne') : 'Step Away For A Smoke')
  const [sentenceTwo, setSentenceTwo] = useState(localStorage.getItem('sentenceTwo')? localStorage.getItem('sentenceTwo') : 'See you on bottom')
  const [editOne, setEditOne] = useState(false)
  const [editTwo, setEditTwo] = useState(false)
  const [listLogo] = useState([{ image: ciggarete, index: 0 }, { image: coffee, index: 1 }])
  const [logo, setLogo] = useState(localStorage.getItem('logo')? listLogo[localStorage.getItem('logo')] : { image: ciggarete, index: 0 })

  function editSentenceOne () {
    setEditOne(true)
  }

  function editSentenceTwo () {
    setEditTwo(true)
  }

  function changeLogo () {
    if (logo.index < listLogo.length - 1) {
      setLogo(listLogo[logo.index + 1])
      localStorage.setItem('logo', logo.index + 1)
    } else {
      setLogo(listLogo[0])
      localStorage.setItem('logo', 0)
    }
  }

  function save () {
    localStorage.setItem('sentenceOne', sentenceOne)
    localStorage.setItem('sentenceTwo', sentenceTwo)
    setEditOne(false)
    setEditTwo(false)
  }

  return (
    <div className="App">
      <header className="App-header">
        {
          (editOne || editTwo) ? <button className="save btn" onClick={save}>SAVE</button> :
          ''
        }
        <img src={logo.image} onClick={changeLogo} className="App-logo" alt="logo" />
        { 
          editOne ? <input className="stepAway input" type="text" value={sentenceOne} onChange={ (sentence) => setSentenceOne(sentence.target.value) } /> : 
          <p className="stepAway" onClick={editSentenceOne}>
            { sentenceOne }
          </p>  
        }
        { 
          editTwo ? <input className="seeYou input" type="text" value={sentenceTwo} onChange={ (sentence) => setSentenceTwo(sentence.target.value) } /> : 
          <p className="seeYou" onClick={editSentenceTwo}>
            { sentenceTwo }
          </p>
        }
      </header>
    </div>
  );
}

export default App;
