import {
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup
} from '@mui/material';
import { FC } from 'react';
import styles from './RadioGroupForm.module.scss';
import { RadioGroupFormProps } from './RadioGroupForm.props';

export const RadioGroupForm: FC<RadioGroupFormProps> = ({
	value,
	setValue,
	array
}) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	return (
		<FormControl>
			<RadioGroup
				aria-labelledby='demo-controlled-radio-buttons-group'
				name='controlled-radio-buttons-group'
				value={value}
				onChange={handleChange}
				className={styles.radioGroup}
			>
				{array.map(el => (
					<FormControlLabel
						value={el}
						control={<Radio />}
						label={el}
						key={el}
					/>
				))}
			</RadioGroup>
		</FormControl>
	);
};
