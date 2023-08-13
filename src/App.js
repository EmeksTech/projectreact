import React , {useState}  from "react";
import Tweet from "./Tweet";


function App() {
  const [users, setUsers] = useState([
      {name: "John", message: "Hello there"},
      {name: "Jude", message: " I am fine"},
      {name: "Peter", message: "I am awesome" }
  ]);
 
  return (
    <div className="app">  
      {users.map(user =>(
         <Tweet name={user.name} message={user.message}/>
      ))}     
      
    </div> 
  )

}

export default App; 