import {Fragment} from "react";

function Option({value, qno, selectedOption, setSelectedOption, isCorrect, isForSubmit=false, isSelected}) {

    function handleSelectedOption() {
        let arr = selectedOption;
        arr[qno-1] = value;
        setSelectedOption([...arr]);
    }

    return (
        <Fragment>
            {
                isForSubmit ?
                    <div>
                        <input className={isCorrect ? 'correct' : ''} checked={isCorrect}
                               type={'radio'} name={qno}/>
                        <label style={{color: isCorrect? 'green' : isSelected? 'red' : 'black'}}>{value}</label>
                    </div>
                    :
                    <div>
                        <input className={isCorrect ? 'correct' : ''}
                               onClick={handleSelectedOption} type={'radio'} name={qno}/>
                        <label>{value}</label>
                    </div>
            }
        </Fragment>
    )
}

export default Option