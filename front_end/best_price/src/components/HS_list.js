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
          <h1></h1>
          <div class ="Card" align = "center">
            <input className = "inline" type="text" id="fname" name="firstname" placeholder="Add your items here" />
            <button class="btn add-item" buttonStyle='btn--outline' buttonSize='btn--large' onClick={addItemToList}>Add Item</button>
            <p>{demoPara}</p>
            <br />
            <div className="SelItmSelCont">
            <ul className="SelItmList">
              {listItms.map((item, key) => (
              <li key={key} className="SelItmListEl">{item}</li>
            ))}
            </ul>
            </div>
          </div> 
          <div className="hero-btns-list">
            <button className="btn" onClick={submitRequestToServer}>Submit</button>
            <button className="btn" onClick={demoListBuilder}>Demo</button>
          </div>
        </div> 
    )
}
export default HS_list
