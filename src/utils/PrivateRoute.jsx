import { RequireAuth, useAuthUser } from 'react-auth-kit';
import { useLocation, Navigate } from 'react-router-dom';

export const PrivateRoute = ({ allowedRoles = [], children }) => {
  const dataCookie = useAuthUser();
  const roles = dataCookie() ? dataCookie().tipeAkun : null;
  const location = useLocation();

  const isAuthenticated =
    allowedRoles.length === 0 || (roles && allowedRoles.includes(roles));

  return (
    <RequireAuth loginPath="/login" isAuthenticated={isAuthenticated}>
      {isAuthenticated ? (
        children
      ) : (
        <Navigate to="/unauthorized" state={{ from: location }} replace />
      )}
    </RequireAuth>
  );
};
