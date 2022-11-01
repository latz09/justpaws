import Footer from './footer/Footer';
import Navbar from './navigation/Navbar';
const Layout = ({ children }) => {
	return (
		<div className='flex flex-col h-screen'>
			<Navbar />
			<main className='flex-grow'>{children}</main>
			<Footer />
		</div>
	);
};
export default Layout;