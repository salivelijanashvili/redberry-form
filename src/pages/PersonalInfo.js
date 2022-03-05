import formtitle from '../assets/formtitle.png';
import righttitle from '../assets/righttitle.png';
import description from '../assets/description.png'
const PersonalInfo = () => {
    return (
        <div>
            <div className="split left">
                <div  className='title'><img src={formtitle} alt='title'/></div> 
                <form className='centered'>
                    <input type="text" placeholder='First name' />
                    <input type="text" placeholder='Last name' />
                    <input type="email" placeholder='E-mail' />
                    <input type="number" placeholder='+995 5__ __ __ __' />
                </form>
            </div>
            <div className="split right">
            <div  className='title'><img src={righttitle} alt='title'/></div> 
                <div className="centered1">
                <img src={description} alt='description'/>
                    <h2>John Doe</h2>
                    <p>Some text here too.</p>
                </div>
            </div>
        </div>
    )
} 

export default PersonalInfo;