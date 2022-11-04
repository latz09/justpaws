import Footer from './footer/Footer';
import Navbar from './navigation/Navbar';
const Layout = ({ children }) => {
	return (
		<div className='flex flex-col h-screen '>
			<Navbar />
			<main className='flex-grow bg-gray-100 '>{children}</main>
			<div className='bg-gray-100'>
				<Footer />
			</div>
		</div>
	);
};
export default Layout;
