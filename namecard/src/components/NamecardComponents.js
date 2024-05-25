// NamecardComponents.js
import { useAuth } from './AuthContext.js';
import '../css/NamecardComponents.css';
import namecardImage from '../img/namecard-1063x591.png';

const NamecardComponent = () => {
  const { auth } = useAuth();

  return (
    <div>
      <div className='namecard-bg'>
        <img src={namecardImage} className='namecard' alt="" />
        {auth.isLoggedIn && (
          <>
            <p className='namecard-name'>{auth.username}</p>
            <p className='namecard-title'>{auth.usertitle}</p>
            <p className='namecard-email'>{auth.useremail}</p>
            <p className='namecard-phone'>{auth.userphone}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default NamecardComponent;
