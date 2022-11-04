import Link from "next/link";
const MoreCommentsLink = () => {
	return (
		<div className='place-self-center hover:scale-110 transition duration-700 mb-12'>
			<Link href={'/client-comments'}>
				<a className='px-4 py-6 bg-primary bg-opacity-90 text-white tracking-wider font-primary font-normal md:text-lg shadow-md hover:shadow-lg hover:bg-opacity-100 transition duration-700'>
					More Client Testimonials
				</a>
			</Link>
		</div>
	);
};

export default MoreCommentsLink;
