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
                            <img src="https://raw.githubusercontent.com/Alpha-911/Brainer/a0b6c402c89c18c2a2e0badd893cea3614f3586d/public/tick-circle.svg" alt="tick-circle"/>
                            <h1>Quiz Successfully Created</h1>
                            <div className={'quiz-code'}>
                                <img src="https://raw.githubusercontent.com/Alpha-911/Brainer/8c3e889ab967f2f58bb974ea9e9df82de2c0f9a6/public/ticket.svg" alt=""/>
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
