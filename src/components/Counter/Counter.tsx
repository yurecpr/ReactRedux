import Button from "components/Button/Button";
import { ButtonControl, CounterResult, CounterWrapper } from "./styles";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { counterSliceSelectors, counterSliceAction } from "store/redux/counter/counterSlice";



function Counter() {

const count=useAppSelector(counterSliceSelectors.count)

const dispatch=useAppDispatch()

const onPlus=()=>{
  dispatch(counterSliceAction.add())
}
const onMinus=()=>{
  dispatch(counterSliceAction.minus())
}
const onDivide=()=>{
  dispatch(counterSliceAction.divide())
}
const onMulti=()=>{
  dispatch(counterSliceAction.multi())
}


  return (
    <CounterWrapper>
      <ButtonControl>
        <Button onButtonClick={onMinus} name="-" />
      </ButtonControl>
      <ButtonControl>
        <Button onButtonClick={onMulti} name="*" />
      </ButtonControl>
      <CounterResult>{count}</CounterResult>
      <ButtonControl>
        <Button onButtonClick={onPlus} name="+" />
      </ButtonControl>
      <ButtonControl>
        <Button onButtonClick={onDivide} name="/" />
      </ButtonControl>
    </CounterWrapper>
  );
}

export default Counter;
