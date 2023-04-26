import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function PrivateRoute({ children }: any) {
  const userType = !!localStorage.getItem('user_type'); //로컬스토리지에 토큰 유무여부
  const navigate = useNavigate();

  useEffect(() => {
    if (!userType) {
      navigate('/login');
    }
  }, [userType, navigate]);

  return userType ? children : null;
}
