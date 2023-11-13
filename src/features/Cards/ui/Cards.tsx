import { Card } from '@/entities';
import { useImagesStore } from '@/shared/model';
import { FC, useDeferredValue } from 'react';
import styles from './Cards.module.scss';

export const Cards: FC = () => {
	const { images } = useImagesStore();
	const deferredImages = useDeferredValue(images);

	return (
		<div className={styles.grid}>
			{deferredImages?.map(e => (
				<Card key={e.id} card={e} />
			))}
		</div>
	);
};
