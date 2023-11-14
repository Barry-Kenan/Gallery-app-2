import { Card } from '@/entities';
import { useImagesStore } from '@/shared/model';
import { FC, useDeferredValue } from 'react';
import styles from './Cards.module.scss';

export const Cards: FC = () => {
	const { images, deletedImages } = useImagesStore();
	const filteredImages = images.filter(e => !deletedImages.includes(e.image));
	const deferredImages = useDeferredValue(filteredImages);

	return (
		<div className={styles.grid}>
			{deferredImages?.map(e => (
				<Card key={e.image} card={e} />
			))}
		</div>
	);
};
