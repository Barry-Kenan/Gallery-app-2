import { Card } from '@/entities';
import { useImagesStore } from '@/shared/model';
import { FC, useDeferredValue } from 'react';
import styles from './Cards.module.scss';
import { CardsProps } from './Cards.props';

export const Cards: FC<CardsProps> = ({ images }) => {
	const { deletedImages } = useImagesStore();
	const filteredImages = images?.filter(e => !deletedImages.includes(e.image));
	const deferredImages = useDeferredValue(filteredImages);

	return (
		<div className={styles.grid}>
			{deferredImages?.map(e => (
				<Card key={e.image} card={e} />
			))}
		</div>
	);
};
