const ServicesModal = ({children}) => {
	return (
		<div className='fixed top-0 left-0 w-full h-full bg-primary/10 z-10 backdrop-blur'>
			<div className='max-w-3xl bg-black/90 mx-auto h-full text-white'>
				{children}
			</div>
		</div>
	);
};

export default ServicesModal;
