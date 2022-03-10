import { useNavigate } from "react-router-dom";
import thanks from '../assets/thanks.png'

const FinalPage = () => {
    const navigate = useNavigate();

    setTimeout(() => {
        navigate('/'); 
    }, 3000);
    return (
        <div>
            <div className='centered final-page'>
                <img src={thanks} alt='thanks'/>
            </div>
        </div>
    )
}

export default FinalPage;