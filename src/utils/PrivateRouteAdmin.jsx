import { RequireAuth } from 'react-auth-kit';

export const PrivateRouteAdmin = ({ children }) => {
  return <RequireAuth loginPath="/admin/login">{children}</RequireAuth>;
};
