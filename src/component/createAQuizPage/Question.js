import Option from "./../createAQuizPage/Option";
function Question({qno, question, options}) {

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
                        <Option value={option.value} qno={qno} key={option.value} />
                    )
                }
            </div>
        </div>
    )
}

export default Question