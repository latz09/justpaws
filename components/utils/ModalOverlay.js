import { AnimatePresence, motion } from 'framer-motion';

const ModalOverlay = ({ children, setModalIsOpen }) => {
	const backDropVariant = {
		hidden: { x: '-100vw', opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 0.4,
				delay: 0.02,
			},
		},
		exit: {
			x: '100vw',
			opacity: 1,
			transition: { delay: 0.2, duration: 1 },
		},
	};

	return (
		<AnimatePresence>
			<motion.div
				variants={backDropVariant}
				initial='hidden'
				animate='visible'
				exit='exit'
				className='fixed top-0 left-0 w-full h-full  z-10 bg-black bg-opacity-80 backdrop-blur'
			>
				<div
					className='text-3xl	grid place-items-center text-white font-semibold tracking-widest p-4 cursor-pointer'
					onClick={() => {
						setModalIsOpen(false);
					}}
				>
					close
				</div>
				<div className='h-full w-full'>{children}</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default ModalOverlay;
