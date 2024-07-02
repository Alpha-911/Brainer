import {Fragment, useEffect, useState} from "react";
import Header from "../Header";
import QuestionStatus from "./QuestionStatus";
import Question from "./Question";
import NotFoundPage from "./NotFoundPage";

function SubmitPage({setQuizCode, quizData, selectedOption, setSelectedOption, setQuizData}) {

    const [correctAnswer, setCorrectAnswer] = useState([])
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if(quizData.questions !== undefined) {
            quizData.questions.map((question) => {
                const answer = correctAnswer;
                answer.push(question.answer);
                setSuccess(true)
                return setCorrectAnswer(answer)
            })
        }
        else {
            return setSuccess(false);
        }
    }, [])

    return (
        <Fragment>
            <Header setQuizCode={setQuizCode} title={quizData.title} hasButton={false} hasScoreCare={true} buttonName={'Summit'} setSelectedOption={setSelectedOption} setQuizData={setQuizData} />
            {
                success?
                    <Fragment>
                        <div className={'status-panel'}>
                            {
                                quizData.questions.map((question) => (
                                    <QuestionStatus qno={question.qno} isMarked={selectedOption[question.qno - 1] !== undefined} isCorrect={selectedOption[question.qno-1] === correctAnswer[question.qno-1]} key={question.qno} />
                                ))
                            }
                        </div>
                        <div className="question-container">
                            {
                                quizData.questions.map((question) =>
                                    <Question qno={question.qno} question={question.question}
                                              options={question.options} selectedOption={selectedOption}
                                              setSelectedOption={setSelectedOption} answer={question.answer} isForSubmit={true} key={question.qno}/>
                                )
                            }
                        </div>
                    </Fragment>
                    :
                    <NotFoundPage message={'Go to home page and try again'} />
            }
        </Fragment>
    )
}

export default SubmitPage;