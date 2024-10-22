import './createAQuizStyle.css'
import {Fragment, useEffect, useState} from "react";
import Header from "../Header";
import InputOption from "./InputOption";
import Question from "../createAQuizPage/Question";

function getMonthCode(month) {
    if(month === '1')
        return 'A'
    else if(month === '2')
        return 'B'
    else if(month === '3')
        return 'C'
    else if(month === '4')
        return 'D'
    else if(month === '5')
        return 'E'
    else if(month === '6')
        return 'F'
    else if(month === '7')
        return 'G'
    else if(month === '8')
        return 'H'
    else if(month === '9')
        return 'I'
    else if(month === '10')
        return 'J'
    else if(month === '11')
        return 'K'
    else
        return 'L'
}

function getYearCode(year) {
    if(year === '2024')
        return 'P'
    else if(year === '2025')
        return 'Q'
    else if(year === '2026')
        return 'R'
    else if(year === '2027')
        return 'S'
    else
        return 'T'
}

function codeGenerator() {
    let origin = new Date();
    const date = String(origin.getDate());
    const month = String(origin.getMonth());
    const year = String(origin.getFullYear());
    const hours = String(origin.getHours());
    const minutes = String(origin.getMinutes());
    const seconds = String(origin.getSeconds());
    const milliseconds = String(origin.getMilliseconds());

    return (date+getMonthCode(month)+getYearCode(year)+hours+minutes+seconds+milliseconds)
}

function postQuiz(setIsLoading, setFinished, createQuizData) {
    setIsLoading(true);
    fetch('https://brainer-server-ma2u.onrender.com/quiz', {
        method: 'POST',
        body: JSON.stringify(createQuizData),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(response => {
        setIsLoading(false)
    }).finally(() => {
        setFinished(true)
    })
}

function CreateAQuizPage({setQuizCode, setQuizData, setSelectedOption, setGeneratedCode, setIsLoading, setFinished}) {

    const [qno, setQno] = useState(1)
    const [title, setTitle] = useState('')
    const [question, setQuestion] = useState('');
    const [optionA, setOptionA] = useState('blank_A');
    const [optionB, setOptionB] = useState('blank_B');
    const [optionC, setOptionC] = useState('blank_C');
    const [optionD, setOptionD] = useState('blank_D');
    const [correctOption, setCorrectOption] = useState('')
    const [canSubmit, setCanSubmit] = useState(false)

    const [createQuizData, setCreateQuizData] = useState({
        code: codeGenerator(),
        title: title,
        questions: []
    })


    const questionData = {
        qno: qno,
        question: question,
        options: [
            {
                value: optionA
            },
            {
                value: optionB
            },
            {
                value: optionC
            },
            {
                value: optionD
            },
        ],
        answer: correctOption
    }

    useEffect(() => {
        if(question === '' || optionA === 'blank_A' || optionB === 'blank_B' || optionC === 'blank_C' || optionD === 'blank_D' || correctOption === '')
            setCanSubmit(false);
        else
            setCanSubmit(true)
    },[correctOption, optionA, optionB, optionC, optionD, question])

    function handleSubmit() {
        setCreateQuizData({
            code: codeGenerator(),
            title: title,
            questions: [...createQuizData.questions, questionData]
        })
        setQno(qno+1)
    }

    function handleFinish() {
        setGeneratedCode(createQuizData.code);
        postQuiz(setIsLoading, setFinished, createQuizData);
    }

    return (
        <Fragment>
            <Header setQuizCode={setQuizCode} setQuizData={setQuizData} setSelectedOption={setSelectedOption} isFinishButton={true} buttonName={'Finish'} handleFinish={handleFinish} />
            <div className="question-option-container">
                <div className={'title'}>
                    <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder={'Title'}/>
                </div>

                {
                    createQuizData.questions.map((question) => (
                        <Question qno={question.qno} question={question.question} options={question.options} isForShow={true} key={question.qno} />
                    ))
                }

                <div className={'input-container'}>
                    <div className={"input-question-container"}>
                        <input onChange={(e) => setQuestion(e.target.value)} type="text" placeholder={'Enter the question'}/>
                    </div>
                    <div className={"input-option-container"}>
                        <InputOption optionNumber={'a'} placeholder={'Option a'} correctOption={correctOption}
                                     setCorrectOption={setCorrectOption} option={optionA} setOption={setOptionA} />
                        <InputOption optionNumber={'b'} placeholder={'Option b'} correctOption={correctOption}
                                     setCorrectOption={setCorrectOption} option={optionB} setOption={setOptionB} />
                    </div>
                    <div className={"input-option-container"}>
                        <InputOption optionNumber={'c'} placeholder={'Option c'} correctOption={correctOption}
                                     setCorrectOption={setCorrectOption} option={optionC} setOption={setOptionC} />
                        <InputOption optionNumber={'d'} placeholder={'Option d'} correctOption={correctOption}
                                     setCorrectOption={setCorrectOption} option={optionD} setOption={setOptionD} />
                    </div>
                    <button disabled={!canSubmit} onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </Fragment>
    )
}

export default CreateAQuizPage;
