export const Heading1 = ({ text }) => {
	return <h1 className='text-[130px]  '>{text}</h1>;
};
export const Heading2 = ({ text }) => {
	return (
		<h1 className='text-[110px] font-bold tracking-wider '>
			{text}
		</h1>
	);
};
export const Heading3 = ({ text }) => {
	return <h1 className='text-[90px] tracking-wider m-4'>{text}</h1>;
};
export const Heading4 = ({ text }) => {
	return <h1 className='text-3xl font-semibold tracking-widest m-4'>{text}</h1>;
};
