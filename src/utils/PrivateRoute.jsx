import { RequireAuth } from 'react-auth-kit';

export const PrivateRoute = ({ children }) => {
  return <RequireAuth loginPath="/login">{children}</RequireAuth>;
};
