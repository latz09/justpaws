import '../styles/globals.css';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta httpEquiv='Content-Type' content='text/html; charSet=utf-8' />
				<link rel='shortcut icon' href='/images/logos/favicon.jpg' />
			</Head>
			<div>
				<Layout>
          {/* Set font  */}
					<div className='font-thin'> 
						<Component {...pageProps} />
					</div>
				</Layout>
			</div>
		</>
	);
}
export default MyApp;
