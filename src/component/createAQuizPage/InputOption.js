function InputOption({optionNumber, placeholder, correctOption, setCorrectOption, option, setOption}) {


    return (
        <div className={`option option-${optionNumber}`}>
            <div className={'option-input'}>
                <p>{optionNumber}.</p>
                <input onChange={(e) => setOption(e.target.value)} type="text" placeholder={placeholder}/>
            </div>
            <div onClick={() => setCorrectOption(option)} className={correctOption === option? "selector active" : "selector"} />
        </div>
    )
}

export default InputOption