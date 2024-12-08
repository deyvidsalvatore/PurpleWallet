import { signOut } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut();
    navigate('/signin');
  };

  return (
    <div>
      <h1>Welcome to Home</h1>
      <button onClick={handleLogout} className="btn-logout">
        Logout
      </button>
    </div>
  );
};
