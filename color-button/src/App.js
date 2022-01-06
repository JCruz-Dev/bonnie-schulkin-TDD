import './App.css';
import { useState } from 'react';

export function replaceCamelWithSpaces(colorName) {
    return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
    const [state, setState] = useState(false);
    let colorBackground = state ? 'action-button-blue' : 'action-button-red';
    let text = state ? 'Change to red' : 'Change to blue';
    const [isDisabled, setDisable] = useState(false);
    return (
        <div className='App'>
            <button
                onClick={() => setState(!state)}
                disabled={isDisabled}
                className={`${
                    isDisabled ? 'action-button-disabled' : `${colorBackground}`
                }`}
            >
                {text}
            </button>
            <input
                type='checkbox'
                name='checkbox'
                id='checkbox'
                onClick={() => setDisable(!isDisabled)}
            />
        </div>
    );
}

export default App;
