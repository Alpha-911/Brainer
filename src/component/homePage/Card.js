import {Link} from "react-router-dom";

function Card({title, details, isTakeQuiz=true, setQuizCode, quizCode}) {

    return (
        <div className={'background'}>
            <h1>{title}</h1>
            <p>{details}</p>
            {
                isTakeQuiz ?
                    <div className={'code-entry'}>
                        <input onChange={(e) => setQuizCode(e.target.value)} type="text" placeholder={'CODE'}/>
                        <Link to={"/takeAQuiz"} style={quizCode === ''?{pointerEvents: 'none'} : {}}>
                            <button disabled={quizCode === ''} >ENTER</button>
                        </Link>
                    </div>
                    :
                    <div className={'code-entry'} />
            }
        </div>
    )
}

export default Card