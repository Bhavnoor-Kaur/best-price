import React, {useState, useEffect} from 'react';
import './ItemsSelector.css'


const ItemsSelector = () => {
  const [listItms, setListItms] = useState([]);
  const [demoPara, setDemoPara] = useState('');

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
    fetch('/api_getPrices', option)
  }

  return (
    <>
      <div className="SelContainer">
        <div className="SelInputCont">
          <div className="SelInputAdd">
            <input type="text" className="SelInput" id="ItemAddTextBox" />
            <button className="SelAdd" onClick={addItemToList}>Add</button>
            <p>{demoPara}</p>
          </div>
          <br />
          <button onClick={submitRequestToServer}>Submit</button>
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