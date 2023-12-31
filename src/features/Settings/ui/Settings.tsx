import { SortRadio } from '@/entities';
import { useImagesStore } from '@/shared/model';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { Button } from '@mui/material';
import cn from 'classnames';
import { FC } from 'react';
import styles from './Settings.module.scss';
import { SettingsProps } from './Settings.props';

export const Settings: FC<SettingsProps> = ({ className, ...props }) => {
	const { resetImages, deletedImages } = useImagesStore();

	const isDisabled = deletedImages.length === 0;
	return (
		<div className={cn(className, styles.settings)} {...props}>
			<SortRadio />
			<Button
				color='primary'
				onClick={resetImages}
				className={styles.button}
				disabled={isDisabled}
			>
				<RestartAltIcon />
				Reset All
			</Button>
		</div>
	);
};
