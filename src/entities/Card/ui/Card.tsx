import { getImageName } from '@/shared/lib';
import { FC, memo } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './Card.module.scss';
import { CardProps } from './Card.props';

export const Card: FC<CardProps> = memo(({ card }) => {
	const API_URL = process.env.NEXT_PUBLIC_API_URL;

	const name = getImageName(card);

	return (
		<div className={styles.card}>
			<LazyLoadImage
				src={API_URL + card.image}
				alt={card.category}
				effect='blur'
				className={styles.image}
			/>
			<div className={styles.content}>
				<h5>{name}</h5>
			</div>
		</div>
	);
});
