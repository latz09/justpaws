export const Heading1 = ({ text }) => {
	return <h1 className='text-6xl sm:text-7xl md:text-[130px]  '>{text}</h1>;
};
export const Heading2 = ({ text }) => {
	return (
		<h1 className='text-[100px] font-bold tracking-wider '>
			{text}
		</h1>
	);
};
export const Heading3 = ({ text }) => {
	return <h1 className='text-[90px] tracking-wider'>{text}</h1>;
};
export const Heading4 = ({ text }) => {
	return <h1 className='text-lg sm:text-xl md:text-3xl tracking-widest md:tracking-wider'>{text}</h1>;
};
