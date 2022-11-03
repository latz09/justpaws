import { motion } from "framer-motion";

const PricingComponent = ({ data, position }) => {
	return (
		<div className='grid gap-2 font-normal text-dark tracking-wider'>
			{data.map((size) => (
				<motion.div key={size.id} className='flex justify-between border-b px-2 py-1 border-primary border-opacity-40' >
					<div className='grid'>
						<span className="font-semibold text-primary">{size.size}</span>
						<span className="text-gray-500 text-sm">{size.sizeDescription}</span>
					</div>

					<div className='grid gap-2 text-primary'>
						<span className="font-bold">{size.prices[position].price}</span>
						<span>{size.prices[position].priceWithTax} w/ tax</span>
					</div>
				</motion.div>
			))}
		</div>
	);
};

export default PricingComponent;
