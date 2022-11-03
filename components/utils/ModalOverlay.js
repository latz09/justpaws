const ModalOverlay = ({ children, setModalIsOpen }) => {
	return (
		<div className='fixed top-0 left-0 w-full h-full  z-10 backdrop-blur'>
			<div
				className='text-3xl	grid place-items-end p-4 '
				onClick={() => {
					setModalIsOpen(false);
				}}
			>
				X
			</div>
			<div className="h-full w-full">{children}</div>
		</div>
	);
};

export default ModalOverlay;
