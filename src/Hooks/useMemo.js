import React, { useMemo, useState } from 'react';

function useMemoExample() {
    const [count, setCount] = useState(0);

    const onAction = () => {
        setCount(count + 1);
    }

    retrun (
        <div>
            {'Ashok'}
            <P>{`Count is ${count}`}</P>
            <button onClick={onAction}>{'Increment'}</button>
        </div>
    )
}