import { ContentEnum } from '@/shared/interfaces';
import { useImagesStore } from '@/shared/model';
import {
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup
} from '@mui/material';
import { FC } from 'react';
import styles from './ContentRadio.module.scss';

export const ContentRadio: FC = () => {
	const { content, setContent } = useImagesStore();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setContent(event.target.value as ContentEnum);
	};
	return (
		<FormControl>
			<RadioGroup
				aria-labelledby='demo-controlled-radio-buttons-group'
				name='controlled-radio-buttons-group'
				value={content}
				onChange={handleChange}
				className={styles.radioGroup}
			>
				<FormControlLabel
					value={ContentEnum.GALLERY}
					control={<Radio />}
					label='Gallery'
				/>
				<FormControlLabel
					value={ContentEnum.TREE}
					control={<Radio />}
					label='Tree'
				/>
			</RadioGroup>
		</FormControl>
	);
};
