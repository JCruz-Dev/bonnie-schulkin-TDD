import { useState } from 'react';

const SummaryForm = () => {
    const [checked, setChecked] = useState(true);
    return (
        <>
            <div>Summary</div>
            <label htmlFor='agree' className='label' data-testid='label'>
                I agree to the terms and conditions
                <span data-testid='poper' role={'tooltip'}>
                    no ice cream will actually be delivered
                </span>
            </label>
            <input
                type='checkbox'
                name='I agree to the terms and conditions'
                data-testid='checkbox'
                defaultChecked={checked}
                onClick={() => setChecked(!checked)}
            />
            <button disabled={checked}>Submit</button>
        </>
    );
};

export default SummaryForm;
