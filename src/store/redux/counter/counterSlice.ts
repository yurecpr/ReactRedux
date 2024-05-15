import { createAppSlice } from "store/createAppSlice";
import type { CounterStateSlice } from "./types";



const counterInitialState = {
    count: 10
}

export const counterSlice = createAppSlice({

    name: "COUNTER",
    initialState: counterInitialState,
    reducers: create => ({
        add: create.reducer((state: CounterStateSlice) => { state.count = state.count + 1 }),
        minus: create.reducer((state: CounterStateSlice) => { state.count = state.count - 1 }),
        divide: create.reducer((state: CounterStateSlice) => { state.count = state.count / 2 }),
        multi: create.reducer((state: CounterStateSlice) => { state.count = state.count * 2 }),
    }),
    selectors: {
        count: (state: CounterStateSlice) => state.count
    }
})


export const counterSliceAction=counterSlice.actions;
export const counterSliceSelectors=counterSlice.selectors;





