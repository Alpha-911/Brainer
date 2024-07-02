import {useState} from "react";

function StarSelector({maxRating=5, active, setActive}) {
    const [tempActive, setTempActive] = useState(-1);
    return(
        <div className={'starSelector'}>
            {
                Array.from({length: maxRating}, (_, i) =>
                    <Star isActive={i<= active || i <= tempActive} active={active} setTempActive={setTempActive} count={i} setActive={setActive} key={i}/>
                )
            }
        </div>
    )
}

function Star({count, isActive, setTempActive, setActive, active}) {
    return (
        <span onMouseEnter={() => setTempActive(count)} onMouseLeave={() => setTempActive(-1)} onClick={() => setActive(count)}>
            {
                isActive? '★' : '☆'
            }
        </span>
    )
}
export default StarSelector;