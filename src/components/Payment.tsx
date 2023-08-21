import { useAppDispatch, useAppSelector } from "../hooks/hook"
import { payChair } from "../features/movieSlice"

const Payment = () => {
    const bookingChair = useAppSelector(state => state.movie.bookingChairs)

        const dispatch = useAppDispatch()
    return (
        <div>
            <h1>
                Thanh toan
            </h1>
            <table>
                <thead>
                    <th>Ten ghe</th>
                    <th>Tien</th>
                    <th>Tong tien</th>

                </thead>
                <tbody>

                    {
                        bookingChair.map(chair => (
                            <tr key={chair.soGhe}>
                                <td>
                                    {chair.soGhe}
                                </td>
                                <td>
                                    {chair.gia}
                                </td>
                            </tr>
                        )
                        )
                    }
                </tbody>
            </table>
            <button className="payment-button" type="button"
                style={{
                    backgroundColor: "red",
                    borderRadius: 8
                }}
                onClick={() => { dispatch(payChair())}}>Thanh toan</button>
        </div>
    )
}

export default Payment
