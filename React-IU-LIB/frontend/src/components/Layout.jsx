import  NavBarComponent  from './NavBar';
import  Footer  from './Footer';

export default function Layout({ children }) {
  return (
    <div>
      <NavBarComponent />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
