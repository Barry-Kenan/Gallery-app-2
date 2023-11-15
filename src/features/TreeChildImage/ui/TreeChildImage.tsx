import { ImageContent } from '@/entities';
import { Transition } from '@/shared';
import { getImageName } from '@/shared/lib';
import { useImagesStore } from '@/shared/model';
import { Dialog } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './TreeChildImage.module.scss';
import { TreeChildImageProps } from './TreeChildImage.props';

export const TreeChildImage: FC<TreeChildImageProps> = ({ data }) => {
	const imageName = getImageName(data);
	const API_URL = process.env.NEXT_PUBLIC_API_URL;
	const { selectedImage, setSelectedImage } = useImagesStore();
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const handleClose = () => {
		setSelectedImage(null);
		setIsOpen(false);
	};
	const handleOpen = () => {
		setSelectedImage(data);
		setIsOpen(true);
	};

	useEffect(() => {
		if (!open) {
			setSelectedImage(null);
		}
	}, [open]);

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
			{selectedImage && (
				<Dialog
					TransitionComponent={Transition}
					open={isOpen}
					onClose={handleClose}
					keepMounted
					className={styles.modal}
				>
					<ImageContent
						selectedImage={selectedImage}
						className={styles.imageContent}
					/>
				</Dialog>
			)}
		</>
	);
};
