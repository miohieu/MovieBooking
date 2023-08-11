import { addChair } from "../features/movieSlice"
import { useAppDispatch, useAppSelector } from "../hooks/hook"
import { ChairProps } from "../types"
import cn from "classnames"

interface Chair {
    chair: ChairProps
}

const ChairComponent = ({ chair }: Chair) => {
    const { soGhe, gia, daDat } = chair


    const bookingChair = useAppSelector(state => state.movie.bookedChairs)

    const dispatch = useAppDispatch()

    const handleBooking = () => {
        dispatch(addChair(chair))
    }

    return (
        <div
            className={cn("chair", {
                booking: bookingChair.find(e => e.soGhe === soGhe),
            })}
            onClick={handleBooking}>
            {soGhe}
        </div>
    )
}

export default ChairComponent
