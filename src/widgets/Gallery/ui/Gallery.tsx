import { Cards, Settings } from '@/features';
import { FC } from 'react';
import styles from './Gallery.module.scss';

export const Gallery: FC = () => {
	return (
		<div className={styles.wrapper}>
			<Settings className={styles.settings} />
			<Cards />
		</div>
	);
};
