
import React,{useState,useEffect} from 'react';
import Table from "react-bootstrap/Table"

function App() {
  
const API_HOST = "https://json-mock-file.herokuapp.com/machine"
const API_URL = `${API_HOST}`;

const [data, setData] = useState([]);

useEffect(() => {
  getDetails();
}, []);

const getDetails = async() => {
  const response= await fetch(`${API_URL}`)
  const items=await response.json()
  setData(items)
}

    return (
        <div className="container">
            <h1>Equipment-wise Details</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th scope="col">Machine Name</th>
                    <th scope="col">Machine Id</th>
                    <th scope="col">Energy Consumed</th>
                    <th scope="col">Active Power (MW)</th>
                    <th scope="col">Apparent Power (MW)</th>
                    <th scope="col">Reactive Power (MW)</th>
                    <th scope="col">Current (Amps)</th>
                    <th scope="col">Voltage (Volts)</th>
                    <th scope="col">Active Power (MW)</th>
                    <th scope="col">Power Factor</th>
                    <th scope="col">Idle Time</th>
                   
                </tr>
                </thead>
                <tbody>
                    
                    {
                        data.map((item) => (
                            <tr key={item.id}>
                                <th scope="row">{item.machine_name}</th>
                                <td>{item.id}</td>
                            
                              
                               <td>{item.active_power}</td>
                                <td>{item.apparent_power}</td>
                                <td>{item.reactive_power}</td>

                                <td>{item.current}</td>
                                <td>{item.voltage}</td> 
                                <td>{item.power_factor}</td>

                                <td>{item.daily_energy}</td>
                                <td>{item.monthly_energy}</td>
                                <td>{item.yearly_energy}</td>

                                 <td colspan="3">{item.idle_daily}</td>
                                 <td>{item.idle_monthly}</td>
                                 <td>{item.idle_yearly}</td>
                                <td>{item.unit_price}</td>
                                <td/>
                            </tr>
                        ))
                    }
                    
                </tbody>
                </Table>
        </div>
    );
}

export default App;
