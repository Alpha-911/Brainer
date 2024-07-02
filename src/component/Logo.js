import {Link} from "react-router-dom";

function Logo({setQuizCode, setQuizData, setSelectedOption}) {

    function initialize() {
        setQuizCode('');
        setQuizData([]);
        setSelectedOption([])
    }

    return (
        <Link onClick={initialize} to={'/'}>
            <img src="https://raw.githubusercontent.com/Alpha-911/Brainer/576cf7b1fd6ec139d823f5ca82587550e472eff3/public/logo.svg" alt="logo"/>
        </Link>
    )
}

export default Logo;
