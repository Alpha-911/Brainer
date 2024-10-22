import './takeAQuizStyle.css'
import {Fragment, useEffect, useState} from "react";
import Header from "../Header";
import LoadingPage from "./LoadingPage";
import NotFoundPage from "./NotFoundPage";
import Question from "./Question";
import QuestionStatus from "./QuestionStatus";

function TakeAQuizPage({quizCode, setQuizCode, quizData, setQuizData, selectedOption, setSelectedOption}) {

    const [quizFetched, setQuizFetched] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchQuiz() {
            setIsLoading(true)
            const response = await fetch(`https://brainer-server-ma2u.onrender.com/quiz/${quizCode}`);
            const data = await response.json()
            if(data.quiz === null)
                setQuizFetched(false)
            else
            {
                setQuizData(data.quiz)
                setQuizFetched(true)
            }
        }
        fetchQuiz()
            .finally((data) => {
                setIsLoading(false)
            })
    }, [quizCode])

    return (
        <Fragment>
            <Header setQuizCode={setQuizCode} title={quizData.title} hasButton={true} buttonName={'Summit'} setQuizData={setQuizData} setSelectedOption={setSelectedOption} />
            {
                isLoading?
                    <LoadingPage />
                    :
                    quizFetched?
                        <Fragment>
                            <div className={'status-panel'}>
                                {
                                    quizData.questions.map((question) => (
                                        <QuestionStatus qno={question.qno} isMarked={selectedOption[question.qno - 1] !== undefined} key={question.qno} />
                                    ))
                                }
                            </div>
                            <div className="question-container">
                                {
                                    quizData.questions.map((question) =>
                                        <Question qno={question.qno} question={question.question}
                                                  options={question.options} selectedOption={selectedOption}
                                                  setSelectedOption={setSelectedOption} key={question.qno}/>
                                    )
                                }
                            </div>
                        </Fragment>
                        :
                        <NotFoundPage message={'Quiz Not Found'}/>
            }
        </Fragment>
    )
}

export default TakeAQuizPage;
