import {Fragment} from "react";
import Header from "../Header";

function Finish({setQuizCode, setQuizData, setSelectedOption, generatedCode, isLoading, finished}) {
    return(
        <Fragment>
            <Header setQuizCode={setQuizCode} setQuizData={setQuizData} setSelectedOption={setSelectedOption} />
            {
                isLoading ?
                    <div>
                        Loading
                    </div>
                    :
                    finished ?
                        <div className={'finish-container'}>
                            <img src="tick-circle.svg" alt="tick-circle"/>
                            <h1>Quiz Successfully Created</h1>
                            <div className={'quiz-code'}>
                                <img src="ticket.svg" alt=""/>
                                <h1>{generatedCode}</h1>
                            </div>
                        </div>
                        :
                        <div>
                            Failed
                        </div>
            }
        </Fragment>
    )
}

export default Finish;