import React from 'react'
import {useState, useEffect} from 'react';
import { Button } from './Button'
import './HS_list.css'

function HS_list() {
    const [listItms, setListItms] = useState([]);
    const [demoPara, setDemoPara] = useState('');

 const addItemToList = () => {
    let itemAdded = document.getElementById("fname").value;

    setListItms(arr => [...arr, itemAdded])
  }
  const submitRequestToServer = async () => {
    // use the fetch POST API to send the json
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(listItms),
    }
    // const resp = await fetch('/api_getPrices', option)
    // const data = resp.json();
    // setDemoPara(data.superstore)
    // console.log(data)

    let superstore = await fetch('/api_getPrices', option)
    .then(response => response.json())
    .then(text => text["superstore"])
    let demoText = ''
    superstore.map(item => {
      demoText += item.item + ': ' + item.price + ', '
    })
    setDemoPara(demoText);
    // setDemoPara(superstore)
  }

  const demoListBuilder = () => {
    setListItms(["apple","brown rice","grapes","milk","carrots","chicken","ketchup"])
  }

 
    return (
        <div className='hero-container-list'>
            
            <h1>SERCH BAR HERE</h1>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
           
            <p>{demoPara}</p>
          <br />
          <div className="hero-btns-list">
            {/*<img src={"./images/Geo.jpg"} />*/}
            <button className="SelAdd" onClick={addItemToList}>Add</button>
                {<Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>}
                {<Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Tutorial <i className='far fa-play-circle'/> </Button>}
                <button onClick={submitRequestToServer}>Submit</button>
                <button onClick={demoListBuilder}>Sample List</button>
         </div>
         
        <div className="SelItmSelCont">
          <ul className="SelItmList">
            {listItms.map((item, key) => (
              <li key={key} className="SelItmListEl">{item}</li>
            ))}
          </ul>
        </div>
            <p></p>
            
        {/*<div className='check'>
        <h1>Heading for the section</h1>
    </div>*/}
            </div>
        
    )
}
export default HS_list
