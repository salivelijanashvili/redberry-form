import useForm from '../hooks/useForm';
import validate from '../validations/validationInfo';
import formtitle from '../assets/formtitle.png';
import righttitle from '../assets/righttitle.png';
import description from '../assets/description.png';

const PersonalInfo = () => {
    const { handleChange, values, handleSubmit, errors } = useForm(validate);
    return (
        <div>
            <div onSubmit={handleSubmit} className="split left">
                <div  className='title'><img src={formtitle} alt='title'/></div> 
                <form className='centered' onSubmit={handleSubmit}>
                    <input 
                           id='firstName'  
                           type="text" 
                           name='firstName'
                           value={values.firstName}
                           onChange={handleChange}
                           placeholder='First name' />
                           <i>{errors.firstName}</i>
                    <input 
                           id='lastName'  
                           type="text" 
                           name='lastName'
                           value={values.lastName}
                           onChange={handleChange} 
                           placeholder='Last name' />
                           <i>{errors.lastName}</i>
                    <input 
                           id='email'
                           type='email'
                           name='email' 
                           placeholder='E-mail'
                           value={values.email}
                           onChange={handleChange} />
                           <i>{errors.email}</i>
                    <input 
                           id='phone'
                           type='number'
                           name='phone'
                           value={values.phone}
                           onChange={handleChange} 
                           placeholder='+995 5__ __ __ __' />
                <button>
                    Validator
                </button>
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