import './homeStyle.css'
import Header from "../Header";
import Content from "./Content";
import Footer from "./Footer";

function HomePage({setQuizCode, quizCode, setQuizData, setSelectedOption}) {

    return(
        <div className={'home-page'}>
            <Header setQuizCode={setQuizCode} setQuizData={setQuizData} setSelectedOption={setSelectedOption} />
            <Content setQuizCode={setQuizCode} quizCode={quizCode} />
            <Footer />
            <img className={'illustration'} src="people-asking-question.png" alt="illustration"/>
        </div>
    )
}

export default HomePage;