import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Button, Tooltip } from '@mui/material';
import { FC } from 'react';
import { BackButtonProps } from './BackButton.props';

export const BackButton: FC<BackButtonProps> = ({ handleClick }) => {
	return (
		<Tooltip title='BACK'>
			<Button onClick={handleClick}>
				<KeyboardReturnIcon />
			</Button>
		</Tooltip>
	);
};
