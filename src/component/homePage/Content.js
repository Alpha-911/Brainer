import Card from "./Card";
import {Link} from "react-router-dom";

function Content({setQuizCode, quizCode}) {
    return (
        <div className={'content'}>
            <Card title={'Take a quiz'} details={'Enter the code to take quiz. Get to know your performance as soon as you finish.'} setQuizCode={setQuizCode} quizCode={quizCode} />
            <Link to={'/createAQuiz'}>
                <Card title={'Create quiz'} details={'Create a quiz by defining the questions, their options and answers. Share the quiz to allow others take the quiz.'} isTakeQuiz={false}/>
            </Link>
        </div>
    )
}

export default Content;