import { Cards, Settings } from '@/features';
import { useImagesStore } from '@/shared/model';
import { FC } from 'react';
import styles from './Gallery.module.scss';

export const Gallery: FC = () => {
	const { images } = useImagesStore();
	return (
		<div className={styles.wrapper}>
			<Settings className={styles.settings} />
			<Cards images={images} />
		</div>
	);
};
