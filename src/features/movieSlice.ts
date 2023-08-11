import { createSlice, 
    PayloadAction 
} from "@reduxjs/toolkit";
import { ChairProps } from "../types";

interface Chair {
    chair: ChairProps
}

interface BookedChairState {
    bookedChairs: []  
}

const initialState: BookedChairState = {
    bookedChairs: []
}

export const bookedChair = createSlice({
    name: 'bookedChair',
    initialState,

    reducers: {
        addChair: (state, action: PayloadAction<Chair>)=> {
                    const isBooked = state.bookedChairs.find(e => e.soGhe === action.payload.soGhe)
                    const idx = state.bookedChairs.indexOf(e => e.soGhe === action.payload.soGhe)
            if(isBooked) {
                state.bookedChairs.splice(idx,1)
            } else {
                state.bookedChairs.push(action.payload)

            }
        }
    }
})

export const {addChair} = bookedChair.actions

export default bookedChair.reducer
