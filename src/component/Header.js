import Logo from "./Logo";
import {Fragment} from "react";
import {Link} from "react-router-dom";

function Header({setQuizCode, title='', hasButton=false, hasScoreCare=false, buttonName='', setQuizData, setSelectedOption, isFinishButton=false , handleFinish=() => {}}) {
    return (
        <Fragment>
            <div className={'header'}>
                <div className="header-content">
                    <Logo setQuizCode={setQuizCode} setQuizData={setQuizData} setSelectedOption={setSelectedOption} />
                    <h1>{title}</h1>
                    {
                        isFinishButton?
                            <Link to={'/finish'}>
                                <button onClick={handleFinish}>{buttonName}</button>
                            </Link>
                            :
                            hasButton?
                                <Link to={'/submit'}>
                                    <button onClick={handleFinish}>{buttonName}</button>
                                </Link>
                                :
                                hasScoreCare?
                                    <div>

                                    </div>
                                    :
                                    <Fragment />
                    }
                </div>
                <div className="separationBar"/>
            </div>
        </Fragment>
    )
}

export default Header;