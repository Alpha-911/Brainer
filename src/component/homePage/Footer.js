import {Fragment} from "react";
import {Link} from "react-router-dom";

function Footer({setCurrentPage}) {
    return(
        <Fragment>
            <div className={'footer'}>
                <div className="separationBar"/>
                <div className="footer-content">
                    <p>Your feedback is valuable to us. If any, do let us know by clicking on the feedback button</p>
                    <Link to={'/feedback'}>
                        <button>Feedback</button>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer;