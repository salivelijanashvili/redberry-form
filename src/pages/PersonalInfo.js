import { Link } from "react-router-dom";
import useForm from '../hooks/useForm';
import validate from '../validations/validationInfo';
import formtitle from '../assets/formtitle.png';
import righttitle from '../assets/righttitle.png';
import description from '../assets/description.png';
import next from  '../assets/next.png'
import previous from '../assets/previous.png'

const PersonalInfo = () => {
    const { handleChange, values, handleSubmit, errors } = useForm(validate);
    return (
        <div>
            <div  className="split left">
                <div  className='title'><img src={formtitle} alt='title'/></div> 
                <form className='centered' onLoad={handleSubmit}>
                    <input 
                           id='firstName'  
                           type="text" 
                           name='firstName'
                           value={values.firstName}
                           onChange={handleChange}
                           onClick={handleSubmit}
                           placeholder='First name' />
                           <i>{errors.firstName}</i>
                    <input 
                           id='lastName'  
                           type="text" 
                           name='lastName'
                           value={values.lastName}
                           onChange={handleChange} 
                           onClick={handleSubmit}
                           placeholder='Last name' />
                           <i>{errors.lastName}</i>
                    <input 
                           id='email'
                           type='email'
                           name='email' 
                           placeholder='E-mail'
                           value={values.email}
                           onChange={handleChange}
                           onClick={handleSubmit} />
                           <i>{errors.email}</i>
                    <input 
                           id='phone'
                           type='number'
                           name='phone'
                           value={values.phone}
                           onChange={handleChange} 
                           onClick={handleSubmit}
                           placeholder='+995 5__ __ __ __' />
                <Link to='/'>
                    <img className='click' src={previous} alt='previous button'/>
                </Link>
                
                {Object.keys(errors).length === 0  ? (
                    <Link to='/submit-page'> 
                        <img className='click' src={next} alt='next button'/>
                    </Link>
                    ) : (
                        <img className='click' src={next} alt='next button'/> 
                    )}
                </form>
                
            </div>
            <div className="split right">
            <div  className='title'><img src={righttitle} alt='title'/></div> 
                <div className="centered1">
                <img src={description} alt='description'/>
                </div>
            </div>
        </div>
    )
} 

export default PersonalInfo;