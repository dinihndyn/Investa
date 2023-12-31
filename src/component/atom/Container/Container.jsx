export const Container = ({ children, className }) => {
  return <div className={`mx-4 md:mx-16 py-10 ${className}`}>{children}</div>;
};
