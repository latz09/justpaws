import { motion } from 'framer-motion';

const PricingDescription = ({ data }) => {
	return (
		<div className='my-5 tracking-widest'>
			{data.map((item) => (
				<div key={item.id} className='grid gap-4'>
					<motion.div
						className='flex space-x-4 items-center text-xl md:text-3xl'
						initial={{  opacity: 0 }}
						animate={{  opacity: 1 }}
						transition={{ delay: 0.2, duration: 0.5 }}
					>
						<span>{item.size}</span>
						<span className='text-base md:text-lg self-end'>
							{item.sizeDescription}
						</span>
					</motion.div>

					{item.prices.map((priceOption) => (
						<div
							key={priceOption.id}
							className='border-2 border-primary p-4 flex justify-between bg-dark/60 hover:scale-105 hover:bg-primary/60 transition duration-700'
						>
							<div className='grid text-lg md:text-2xl font-semibold'>
								<span>{priceOption.service}</span>
								<span className='font-normal text-sm md:text-lg'>
									{priceOption.description}
								</span>
							</div>
							<div className='grid place-items-end'>
								<motion.div
									initial={{ x: '-4vw', opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ delay: 0.2, duration: 0.5 }}
									className='font-bold md:text-xl'
								>
									{priceOption.price}
								</motion.div>
								<motion.div
									className='italic font-bold text-xs md:text-base text-primary'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.4, duration: 0.7 }}
								>
									{priceOption.priceWithTax} w/ tax
								</motion.div>
							</div>
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default PricingDescription;
