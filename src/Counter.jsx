import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0);

    const HandleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const AddReduce = () => {
        const newCount = count - 1;
        setCount(newCount);

    }

    return (
        <div style={{ border: '4px solid purple' }}>
            <h3>counter:{count}</h3>
            <button onClick={HandleAdd}>Add</button>
            <button onClick={AddReduce}>Reduce</button>

        </div>
    )
}