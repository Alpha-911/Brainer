import Option from "./Option";
function Question({qno, question, options, selectedOption, setSelectedOption, answer=undefined, isForSubmit}) {

    return (
        <div className={'question-option'}>
            <div className={'qno-question'}>
                <div className="qno">
                    <p>
                        Q{qno}
                    </p>
                </div>
                <h3 className={'question'}>{question}</h3>
            </div>
            <div className={'options'}>
                {
                    options.map((option) =>
                        <Option value={option.value} qno={qno} selectedOption={selectedOption} setSelectedOption={setSelectedOption} isCorrect={option.value === answer} isSelected={option.value === selectedOption[qno-1]} isForSubmit={isForSubmit} key={option.value} />
                    )
                }
            </div>
        </div>
    )
}

export default Question