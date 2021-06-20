import React from 'react'
import {useState, useEffect} from 'react';
import { Button } from './Button'
import './HS_list.css'
import Box from "./Box";


function HS_list() {
  const [listItms, setListItms] = useState([]);
  const [demoPara, setDemoPara] = useState('');
  const [demoListImage, setDemoList] = useState('');
  const [resData, setResData] = useState({})

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

    let resJson = await fetch('/api_getPrices', option)
    .then(response => response.json())
    let resSuperstore = resJson["superstore"]
    let resSaveonfoods = resJson["saveonfoods"]
    let resVoila = resJson["voila"]
    let demoText = 'Superstore: '
    resSuperstore.map(item => {
      demoText += item.item + ': ' + item.price + ', '
    })
    demoText += "\nSaveonfoods: ";
    resSaveonfoods.map(item => {
      demoText += item.item + ': ' + item.price + ', '
    })
    demoText += "\nVoila: ";
    resVoila.map(item => {
      demoText += item.item + ': ' + item.price + ', '
    })
    setDemoPara(demoText);
    // setDemoPara(superstore)
    setResData(resJson)
  }

  const demoListBuilder = () => {
    setListItms(["apple","brown rice","grapes","milk","carrots","chicken","ketchup"])
  }

  const demoListImageBuilder = async () => {
    let imageData = document.getElementById('imageup').files[0]
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({image: imageData}),
    }
    let resJson = await fetch('/api_getPrices', option)
    .then(response => response.json())


    let imList = resJson["items"]
    setDemoList(imList)
  }
  const featureBox1 = [
    "10 users included",
    "2 GB of storage",
    "Email support",
    "Help center access"
  ];
  const featureBox2 = [
    "20 users included",
    "10 GB of storage",
    "Priority email support",
    "Help center access"
  ];
  const featureBox3 = [
    "30 users included",
    "15 GB of storage",
    "Phone and email support",
    "Help center access"
  ];

    return (
      <>
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
        <div className="card-deck mb-3 text-center">
            <Box
              price={resData["superTotal"]}
              title="Superstore"
              btnClass="btn-outline-primary"
              btnTitle="Sign up for free"
              feature={featureBox1}
            />
            <Box
              feature={featureBox2}
              price={resData["saveTotal"]}
              title="Save On Foods"
              btnClass="btn-primary"
              btnTitle="Get started"
            />
            <Box
              feature={featureBox3}
              price={resData["voilaTotal"]}
              title="Voila"
              btnClass="btn-primary"
              btnTitle="Contact us"
            />
          </div>
        </>
        
          
        );
       
    
}
export default HS_list
