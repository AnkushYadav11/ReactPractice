import React, { useState } from "react";

function Count(props) {
    const [count, setCount] = useState(0);
    return (<>
    <div>
        <h1>Count:- {count}</h1>
        <button className="btn btn-primary mx-1" onClick={() => { setCount(count + 1) }}>Increase</button>
        <button className="btn btn-secondary mx-1" onClick={() => { setCount(count - 1) }}>Decrease</button>
        <button className="btn btn-danger mx-1" onClick={() => { setCount(0) }}>Reset</button>
    </div>
    </>)
}

export default Count;