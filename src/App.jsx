import * as React from 'react';
import { useEffect } from 'react';

const MyApp = () => {
  const getData = () => {         //gets data from API on button click
    alert("getting data now...")
    const [data1, setData1] = useState(null); //data received is stored here

    useEffect(() => {             //fetches info from API
      fetch("API URL goes here", {
        method: "GET",
        headers: {
         //I don't think we need any headers at the moment
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setData1(data[0].data1);
          console.log(data);
        })
        .catch((error) => console.log(error));
    },[]);

    return(   //After data received, show data received through text on window
      <div>
        <h2>Value Received:</h2>
        {data1 && <p>{data1}</p>}
      </div>

    )
  };

  const sendData = () => {        //sends data to API on button click
    alert("sending data now...")

    const data2 = {
      givenNumber: '42' //sending data manually for now
    };

    const options = { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', //JSON format
      },
      body: JSON.stringify(data2) //Change data2 content to string for JSON file
    };

    fetch('api site URL goes here', options)  //actual POST call to API
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return(     //Original Site with send/get buttons
    <div>
      <hi>Welcome to my app</hi>
      <button type="button" onClick={getData}> 
        Get Data
      </button>
      <button type="button" onClick={sendData}>
        Send Data
      </button>
    </div>
  ); 
};


export default MyApp;
