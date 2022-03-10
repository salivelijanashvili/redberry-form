import { useNavigate } from "react-router-dom";

const NoPage = () => {
  const navigate = useNavigate();

    setTimeout(() => {
        navigate('/'); 
    }, 6000);
    return <h1>404</h1>;
  };
  
export default NoPage;