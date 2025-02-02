import React, { useState } from 'react';
import './App.css';

function App() {
    const [isLogged, setIsLogged] = useState(false);

    if (isLogged) {
        return <h1>Welcome back, User!</h1>;
    } else {
        return <button className='btn-login' onClick={() => 
            setIsLogged(true)}>Login</button>;
    }
}

export default App;




