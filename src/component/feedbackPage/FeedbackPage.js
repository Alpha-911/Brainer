import './feedbackStyle.css'
import {Fragment, useState} from "react";
import Header from "../Header";
import StarSelector from "./StarSelector";
import SuccessPage from "./SuccessPage";

function postData(active, category, feedback, setIsLoading, setIsFeedbackSent) {
    setIsLoading(true);
    fetch('https://brainer-server-ma2u.onrender.com/feedback', {
        method: 'POST',
        body: JSON.stringify({
            "rating": active,
            "category": category,
            "feedback": feedback
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(response => {
        setIsLoading(false)
    }).finally(() => {
        setIsFeedbackSent(true)
    })
}

function FeedbackPage({isFeedbackSent, setIsFeedbackSent, setQuizCode, setQuizData, setSelectedOption}) {
    const [active, setActive] = useState(-1);
    const [category, setCategory] = useState(0);
    const [feedback, setFeedback] = useState("");

    const [isLoading, setIsLoading] = useState(false)

    function sendData() {
        postData(active+1, category === 1? "Suggestion" : category === 2? "Something is not right" : "Complaint", feedback, setIsLoading, setIsFeedbackSent)
    }

    return (
        <div className={'feedback-page'}>
            <Header setQuizCode={setQuizCode} setQuizData={setQuizData} setSelectedOption={setSelectedOption} />
            {
                isFeedbackSent ?
                    <Fragment>
                        <SuccessPage />
                    </Fragment>
                    :
                    <div className="feedback-container">
                        <h1>Your feedback</h1>
                        <div className="separationBar"/>
                        <h3>We would like your feedback to improve our website</h3>
                        <h4>what is your rating for the website?</h4>
                        <StarSelector active={active} setActive={setActive}/>
                        <div className={'separationBar'}/>
                        <h4>Please select your feedback category below</h4>
                        <div className={'feedback-category'}>
                            <button className={category === 1 ? 'active category-button' : 'category-button'}
                                    onClick={() => setCategory(1)}>Suggestion
                            </button>
                            <button className={category === 2 ? 'active category-button' : 'category-button'}
                                    onClick={() => setCategory(2)}>Something not right
                            </button>
                            <button className={category === 3 ? 'active category-button' : 'category-button'}
                                    onClick={() => setCategory(3)}>Complaint
                            </button>
                        </div>
                        <div className="separationBar"/>
                        <textarea onChange={(e) => setFeedback(e.target.value)} placeholder={'Your feedback'}/>
                        <button disabled={isLoading} onClick={() => sendData()} className={'submit-button'}>{isLoading ? 'Sending' : 'Submit'}</button>
                    </div>
            }
        </div>
    )
}

export default FeedbackPage;
