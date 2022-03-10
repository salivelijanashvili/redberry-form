import { Link } from "react-router-dom";

const SubmitPage = () => {
    return (
        <div>
            <div className='submit-page submit-button'>
                <div className='welcome-submit'>
                    <Link to='/final-page'>
                        <p>Submit</p>
                    </Link>
                </div>
            </div>
            <div className='submitted-apps'>
                <Link to='/'>
                    <p><u>go back</u></p>
                </Link>
            </div>
        </div>
    )
}

export default SubmitPage;