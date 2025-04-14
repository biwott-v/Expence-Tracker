import { useState } from 'react'
import './App.css'
import { use } from 'react';

function App() {
  function change(e){
    let allExpences=expences;
    setId(id => id+1);
    setmyExpences(arr => [...arr,{...allExpences,key:id}]);
    setExpences({name:"",description:"",category:"",amount:"",date:""});
    e.preventDefault();
  }
  let [color,setColor]=useState("white")
  let [controller,setController]=useState("");
  let [search,setSearch]=useState("")
  let [id,setId]=useState(0);
  let [myExpences,setmyExpences]=useState([]);
  let tableRows = myExpences.map(expence=>{{expence.key%2===0?expence.color="white":expence.color="grey"};return(
    <tr key={Math.random() }style={{backgroundColor:expence.color}}>
      <td>{expence.name}</td>
      <td>{expence.description}</td>
      <td>{expence.category}</td>
      <td>{expence.amount}</td>
      <td>{expence.date}</td>
    </tr>
  )})
  let [expences,setExpences]=useState({name:"",description:"",category:"",amount:"",date:""})
  return (
    <>
      <h1>Expense Tracker</h1>
      <p>Start taking control of your finances and life.<br/>Record,catalogue and analyze your spending</p>
      <div className='box'>
        <div className='abox'>
          <h2>Add Expense</h2>
          <p>Enter your expence details below</p>
        <form onSubmit={change}>
          <input onChange={(e)=>{expences.name=e.target.value;setExpences((obj=>{return{...obj,name:e.target.value}}))}} value={expences.name} placeholder="Enter expence name" type="text"/>
          <br/>
          <input onChange={(e)=>{expences.description=e.target.value;setExpences((obj=>{return{...obj,description:e.target.value}}))}} value={expences.description} placeholder="Enter expence description" type="text"/>
          <br/>
          <input onChange={(e)=>{expences.category=e.target.value;setExpences((obj=>{return{...obj,category:e.target.value}}))}} value={expences.category} placeholder="Enter expence category" type="text"/>
          <br/>
          <input onChange={(e)=>{expences.amount=e.target.value;setExpences((obj=>{return{...obj,amount:e.target.value}}))}} value={expences.amount} placeholder="Enter expence amount"type="number"/>
          <br/>
          <input onChange={(e)=>{expences.date=e.target.value;setExpences((obj=>{return{...obj,date:e.target.value}}))}} value={expences.date} type="date"/>
          <br/>
          <input id="submit" type="submit"/>
        </form>
        </div>
        <div className='adiv'>
        <div>
          <input placeholder="Search" onChange={(e) => {setController(controller === "" || controller.length<myExpences.length? myExpences:controller);search = e.target.value;setSearch(search);let controller2 = myExpences.filter(el => el.name.includes(search));setmyExpences(search === "" ? controller : controller2);}}  type='text'/>
        </div>
        <div id="box" className='abox'>
          <table>
            <thead>
              <tr>
                <th>Expences</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {tableRows}
           </tbody>
          </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
