import chairs from "../utils/chairs.json"
import Chair from "./Chair"

const ChairList = () => {

    return (

        <div className="chair-list-container">
        <div className="chair-list">
            {chairs.map(row => (

                <div className="flex gap-3" key={row.hang}>
                <div className="row__title">
                {row.hang}
                </div>
                {row.danhSachGhe.map(
                chair => (
                    <Chair key={chair.soGhe} chair={chair} />
                    ))}
                </div>
            ))
            }
        </div>
        </div>
    )
}

export default ChairList
