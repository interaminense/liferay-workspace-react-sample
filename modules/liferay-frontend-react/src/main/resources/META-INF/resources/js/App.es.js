import React, { useState } from 'react';
import ClayButton from '@clayui/button';

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div>This is a react sample!</div>

            <div>Count: {count}</div>

            <ClayButton
                small
                onClick={() => setCount(count + 1)}
            >
                increment
            </ClayButton>

            <ClayButton
                small
                onClick={() => setCount(count - 1)}
                className="ml-2"
            >
                decrement
            </ClayButton>
        </div>
    )
};

export default App;