import './App.css';
import {useState} from "react";
import HomePage from "./component/homePage/HomePage";
import FeedbackPage from "./component/feedbackPage/FeedbackPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TakeAQuizPage from "./component/takeAQuizPage/TakeAQuizPage";
import SubmitPage from "./component/takeAQuizPage/SubmitPage";
import CreateAQuizPage from "./component/createAQuizPage/CreateAQuizPage";
import Finish from "./component/createAQuizPage/Finish";

function App() {
    const [isFeedbackSent, setIsFeedbackSent] = useState(false)
    const [quizCode, setQuizCode] = useState('')
    const [quizData, setQuizData] = useState([]);
    const [selectedOption, setSelectedOption] = useState([])
    const [generatedCode, setGeneratedCode] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [finished, setFinished] = useState(false)

  return (
      <BrowserRouter>
          <Routes>
              <Route path={'/'} element={<HomePage setQuizCode={setQuizCode} quizCode={quizCode} setQuizData={setQuizData} setSelectedOption={setSelectedOption} />} />
              <Route path={'feedback'} element={<FeedbackPage isFeedbackSent={isFeedbackSent} setIsFeedbackSent={setIsFeedbackSent} setQuizCode={setQuizCode} setQuizData={setQuizData} setSelectedOption={setSelectedOption} />} />
              <Route path={'takeAQuiz'} element={<TakeAQuizPage quizCode={quizCode} setQuizCode={setQuizCode} quizData={quizData} setQuizData={setQuizData} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />} />
              <Route path={'submit'} element={<SubmitPage quizCode={quizCode} setQuizCode={setQuizCode} quizData={quizData} setQuizData={setQuizData} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />} />
              <Route path={'createAQuiz'} element={<CreateAQuizPage setQuizCode={setQuizCode} setQuizData={setQuizData} setSelectedOption={setSelectedOption} setGeneratedCode={setGeneratedCode} setIsLoading={setIsLoading} setFinished={setFinished} />} />
              <Route path={'finish'} element={<Finish setQuizCode={setQuizCode} setQuizData={setQuizData} setSelectedOption={setSelectedOption} generatedCode={generatedCode} isLoading={isLoading} finished={finished} />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App;
