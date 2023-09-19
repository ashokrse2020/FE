import React, { useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react';

export default function App() {
    const [value, setValue] = useState(0);

    useEffect(() => {
      useDebugValue(`appleappleappleappleapple`);
      console.log("Ashok use effect is called.");
    }, [value]);

    useLayoutEffect(() => {
      console.log("Ashok use layout effect is called.");
    }, [value]);


    return (
        <div>
            <p></p>
            <input type='number' value={value} onChange={(event) => setValue(event.target.value)} />
            <p>{`You'r input ${value}`}</p>
            <button onClick={() => {}}>{'Add One'}</button>
        </div>
    )
}