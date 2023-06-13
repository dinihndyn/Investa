import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { useEffect } from 'react';

export const Layouts = ({ title, children, withFooter, bg = "bg-[#ECEAEA]" }) => {
  useEffect(() => {
    document.title = `${title} | Investa`;
  });
  return (
    <>
      <Navbar />
      <main className={bg}>{children}</main>
      {withFooter ? <Footer /> : null}
    </>
  );
};
