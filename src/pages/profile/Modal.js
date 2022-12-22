import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
const Modal = ({ modalcontent, closemodal, success }) => {
	useEffect(() => {
		setTimeout(() => {
			closemodal();
		}, 2000);
	}, []);
	return (
		<motion.div
			initial={{ y: '-200px', opacity: 0 }}
			animate={{
				y: 0,
				opacity: 1,
				transition: { duration: 1 },
			}}
			exit={{
				y: ['0,50px,100px,150px,-200px'],
				opacity: 1,
				transition: { duration: 1 },
			}}
			className={
				success
					? 'alert alert-success w-50 text-lg-center text-md-center'
					: 'alert alert-danger w-50 text-lg-center text-md-center'
			}
			style={{ margin: '0 0 auto 10%', position: 'absolute' }}
		>
			{modalcontent}
		</motion.div>
	);
};

export default Modal;
