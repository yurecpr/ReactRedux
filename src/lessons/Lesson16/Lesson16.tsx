import Counter from "components/Counter/Counter";
import { useState } from "react";

function Lesson16() {
    const [value,setValue]=useState<number>(0)

    const onMinusClick=()=>{
        setValue(prevValue=>prevValue-1)
    }

    const onPlusClick=()=>{
        setValue(prevValue=>prevValue+1)
    }
    return (
        <div>
            <Counter
                countValue={value}
                onMinusClick={onMinusClick}
                onPlusClick={onPlusClick}
            />
        </div>
    )
}

export default Lesson16;