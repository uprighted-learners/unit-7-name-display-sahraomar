import { useState } from 'react';
function App() {
  const message = "Hi there! Please enter your name";
 //state variables
const [firstName, setFirstName] = useState("");
const [middleName, setMiddleName] = useState("");
const [lastName, setLastName] = useState("");
 //combine the names 
 const fullName = `${firstName} ${middleName} ${lastName}`.trim();
 
 return (
    <div>
    <h1>{message}</h1>
<form>
  {/*First Name input */}
<input type="text" placeholder="First Name"
onChange={(e) =>  setFirstName(e.target.value)}
/>
  {/*Middle Name input */}

<input 
type="text"
placeholder="Middle Name"
onChange={(e)=> setMiddleName(e.target.value)}
/>
  {/*Last Name input */}

<input 
type="text"
placeholder="Last Name"
onChange={(e)=> setLastName(e.target.value)}
/>

</form>

{/*display the full name */}

 {/* Display the full name */}
 <h2>Hello, {fullName}!</h2>
    </div>
  );
}

export default App;
