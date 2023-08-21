import {
    createSlice,
} from "@reduxjs/toolkit";

import { ChairProps } from "../types";

interface Chair {
    chair: ChairProps
}

interface BookedChairState {
    bookedChairs: Chair[],
    bookingChairs: Chair[]
}

const initialState: BookedChairState = {
    bookedChairs: [],
    bookingChairs: []
}

export const bookedChair = createSlice({
    name: 'bookedChair',
    initialState,

    reducers: {
        addChair: (state, { payload }) => {
            const isBooking = state.bookingChairs.find(e => e.soGhe === payload.soGhe)
            const isBooked = state.bookedChairs.find(e => e.soGhe === payload.soGhe)
            if (isBooking) {
                const indx = state.bookingChairs.findIndex(chair => chair.soGhe === payload.soGhe)
                state.bookingChairs.splice(indx, 1)
            } else if (isBooked) {
                return
            } else {
                state.bookingChairs.push(payload)
            }
        },
        payChair: (state) => {
            const arr = [...state.bookingChairs]
            state.bookedChairs = arr
            state.bookingChairs = [];
            alert("Dat ve thanh cong")
        }
    }
})

export const { addChair, payChair } = bookedChair.actions

export default bookedChair.reducer
