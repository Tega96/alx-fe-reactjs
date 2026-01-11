import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => setCount(count + 1)
    return (
        <div style={{ padding: '10px'}}>
            <p>Current Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}
export default Counter;