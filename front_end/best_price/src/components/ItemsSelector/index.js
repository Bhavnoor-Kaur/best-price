import React, {useState, useEffect} from 'react';
import './ItemsSelector.css'


const ItemsSelector = () => {
  const [listItms, setListItms] = useState([]);
  const [demoPara, setDemoPara] = useState('');
  const [demoListImage, setDemoList] = useState('');

  const addItemToList = () => {
    let itemAdded = document.getElementById("ItemAddTextBox").value;

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


  return (
    <>
      <div className="SelContainer">
        <div className="SelInputCont">
          <div className="SelInputAdd">
            <input type="text" className="SelInput" id="ItemAddTextBox" />
            <input type="file"  id="imageup" accept="image/*" />
            <button className="SelAdd" onClick={addItemToList}>Add</button>
            <p className="msg-wrapper">{demoPara}</p>
            <p className="msg-wrapper">{demoListImage}</p>
          </div>
          <br />
          <button onClick={submitRequestToServer}>Submit</button>
          <button onClick={demoListBuilder}>Sample List</button>
          <button onClick={demoListImageBuilder}>Get Image Data</button>
        </div>
        <div className="SelItmSelCont">
          <ul className="SelItmList">
            {listItms.map((item, key) => (
              <li key={key} className="SelItmListEl">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ItemsSelector;