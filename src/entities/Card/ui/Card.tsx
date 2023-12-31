import { getImageDate, getImageName, getImageSize } from '@/shared/lib';
import { useImagesStore } from '@/shared/model';
import CloseIcon from '@mui/icons-material/Close';
import cn from 'classnames';
import { FC, memo, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './Card.module.scss';
import { CardProps } from './Card.props';

export const Card: FC<CardProps> = memo(({ card }) => {
	const [deleted, setDeleted] = useState<string>('');
	const { setDeletedImage } = useImagesStore();
	const API_URL = process.env.NEXT_PUBLIC_API_URL;

	const name = getImageName(card);
	const date = getImageDate(card);
	const size = getImageSize(card);

	const handleClick = () => {
		setDeleted(card.image);
		setTimeout(() => {
			setDeletedImage(card);
		}, 300);
	};
	return (
		<div
			className={cn(styles.card, {
				[styles.deleted]: deleted === card.image
			})}
		>
			<LazyLoadImage
				src={API_URL + card.image}
				alt={card.category}
				effect='blur'
				className={styles.image}
			/>
			<button className={styles.closeButton} onClick={handleClick}>
				<CloseIcon />
			</button>
			<div className={styles.content}>
				<h5>{name}</h5>
				<h5>{date}</h5>
				<h5>{size}</h5>
			</div>
		</div>
	);
});
