import { ImageContent } from '@/entities';
import { getImageName } from '@/shared/lib';
import { Modal } from '@mui/material';
import { FC, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './TreeChildImage.module.scss';
import { TreeChildImageProps } from './TreeChildImage.props';

export const TreeChildImage: FC<TreeChildImageProps> = ({ data }) => {
	const imageName = getImageName(data);
	const API_URL = process.env.NEXT_PUBLIC_API_URL;
	const [open, setOpen] = useState<boolean>(false);
	const handleClose = () => setOpen(false);
	const handleOpen = () => setOpen(true);

	return (
		<>
			<div className={styles.wrapper} onClick={handleOpen}>
				<LazyLoadImage
					src={API_URL + data.image}
					alt={data.image}
					className={styles.image}
				/>
				<span>{imageName}</span>
			</div>
			<Modal open={open} onClose={handleClose} className={styles.modal}>
				<ImageContent selectedImage={data} className={styles.imageContent} />
			</Modal>
		</>
	);
};
