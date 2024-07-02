import {Link} from "react-router-dom";

function Logo({setQuizCode, setQuizData, setSelectedOption}) {

    function initialize() {
        setQuizCode('');
        setQuizData([]);
        setSelectedOption([])
    }

    return (
        <Link onClick={initialize} to={'/'}>
            <img src="logo.svg" alt="logo"/>
        </Link>
    )
}

export default Logo;