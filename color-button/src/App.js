import './App.css';
import { useState } from 'react';

function App() {
    const [state, setState] = useState(false);
    let colorBackground = state ? 'blue' : 'red';
    let text = state ? 'Change to red' : 'Change to blue';
    return (
        <div className='App'>
            <button
                style={{ backgroundColor: `${colorBackground}` }}
                onClick={() => setState(!state)}
            >
                {text}
            </button>
            <input type='checkbox' name='checkbox' id='checkbox' />
        </div>
    );
}

export default App;
