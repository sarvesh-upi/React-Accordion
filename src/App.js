import './App.css';
import { useState } from 'react';
// Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {

  // Accordion UseState Hook
  const [accordion, setAccordion] = useState(-1);

  // Array for Storing Fetched Data.
  const [data, setData] = useState([]);



  const display=(index)=>{

    setAccordion(index)
  }

  {/* Fetching Data from API */}

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      setData(json)
    })

  return (
    <div className="App">

      {/* Rendering the Data in the Front-End */}
      {
        data.map((item,index)=>{
          const {id,name,username,address,email,company,phone} = item
          return (
            <div>
              <div key={index} className='main'>

                <div className='container info'>

                  <div className='row'>
                    <div className='col-md-2 info_heading'>
                      <p>{name}</p>
                    </div>
                    <div className='col-md-2 info_heading'>
                      <h5>Contact</h5>
                      <p>{username}</p>
                    </div>
                    <div className='col-md-2 info_heading'>
                      <h5>City</h5>
                      <p>{address.city}</p>
                    </div>
                    <div className='col-md-4 info_heading'>
                      <h5>Street</h5>
                      <p>{address.street}</p>
                    </div>

                    <div className='col-md-2'>
                      {/* Onclick Accordion Functionality */}
                    <button onClick={()=>display(index)} className='btn btn-danger'>{accordion === index?'Hide Details':'View Details'}</button>
                    </div>
                  </div>

                </div>
                {/* Toggling the Info */}
                <div className={accordion===index?'container active':'inactive'}>
                <div className='row'>
                        <div className='col-xl-6'>
                          <div className='row'>
                            <h5>ID Number</h5>
                            <p>{id}</p>
                          </div>
                          <div className='row'>
                            <h5>Name</h5>
                            <p>{name}</p>
                          </div>
                          <div className='row'>
                            <h5>Email</h5>
                            <p>{email}</p>
                          </div>
                          <div className='row'>
                            <h5>Company Name</h5>
                            <p>{company.name}</p>
                          </div>
                        </div>
                        <div className='col-xl-6'>
                        <div className='row'>
                            <h5>Street</h5>
                            <p>{address.street}</p>
                          </div>
                          <div className='row'>
                            <h5>City</h5>
                            <p>{address.city}</p>
                          </div>
                          <div className='row'>
                            <h5>Zipcode</h5>
                            <p>{address.zipcode}</p>
                          </div>
                          <div className='row'>
                            <h5>Contact</h5>
                            <p>+{phone}</p>
                          </div>
                        </div>
                  </div>
                </div>
                
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
