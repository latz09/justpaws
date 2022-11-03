import SelectionItem from './SelectionItem';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import PricingDescription from './PricingDescription';
import { ButtonLink } from '../../utils/Utils';

const ModalSections = ({ data, setModalIsOpen }) => {
	const [selectedId, setSelectedId] = useState('');
	const [descriptionOpen, setDescriptionOpen] = useState(false);

	const tabData = () => {
		let sizes = [];
		data.map((item) => sizes.push({ id: item.id, size: item.size }));

		return sizes;
	};

	const filterBySize = (id) => {
		const filteredService = data.filter((size) => size.id === id);
		return filteredService;
	};

	return (
		<div className='text-lightblue grid  place-item-center max-w-3xl mx-auto my-12'>
			{!descriptionOpen && (
				<>
					<div className='text-center self-start py-12 text-3xl font-bold text-primary tracking-widest'>
						Choose Size
					</div>
					<AnimatePresence mode='wait'>
						<motion.div
							className='grid grid-cols-2  gap-5'
							initial={{ scale: 0.2, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ duration: 0.9, delay: 0.5 }}
							exit={{ scale: 0, opacity: 0, transition: { duration: 1, delay: .2 } }}
						>
							{data.map((size) => (
								<div key={size.id}>
									<SelectionItem
										size={size.size}
										description={size.sizeDescription}
										id={size.id}
										setSelectedId={setSelectedId}
										setDescriptionOpen={setDescriptionOpen}
									/>
								</div>
							))}
						</motion.div>
					</AnimatePresence>
				</>
			)}
			{descriptionOpen && (
				<div className='mx-4'>
					<div className='grid gap-4 grid-cols-3 md:flex md:flex-wrap md:place-content-center md:space-x-12 bg-primary/20 py-8 '>
						{data.map((size) => (
							<div
								key={size.id}
								className='cursor-pointer'
								onClick={() => {
									setSelectedId(size.id);
								}}
							>
								<span
									className={`bg-primary/3 font-bold px-6 py-3 hover:bg-primary transition duration-700 ${
										selectedId === size.id &&
										'bg-primary transition duration-700'
									}`}
								>
									{size.size}
								</span>
							</div>
						))}
					</div>
					<motion.div
						className=''
						initial={{ scale: 0.2, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.9, delay: 0.1 }}
					>
						<PricingDescription
							data={filterBySize(selectedId)}
							tabData={tabData()}
						/>
					</motion.div>
					<div
						className='grid place-items-center py-4'
						onClick={() => {
							setModalIsOpen(false);
						}}
					>
						<ButtonLink href={'/'} title='contact' type='withpaw' />
					</div>
				</div>
			)}
		</div>
	);
};

export default ModalSections;
