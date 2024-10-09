import React, { useState } from "react";
import Button from "../components/Button";
function Dashboard() {
    const [name, setName] = useState('');
    const sayHi = () => {
        alert(`Hello ${name}!`);
    }
    return (
        <>
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
            <h2>Hello {name}!</h2>
            <Button onClick={sayHi} label="Hello">Hello</Button>

        </>
    )
}
export default Dashboard;