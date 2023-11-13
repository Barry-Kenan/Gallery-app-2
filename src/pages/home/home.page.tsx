import { useImagesStore } from '@/shared/model';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { FC } from 'react';

export const HomePage: FC = () => {
	const { count, dec, inc } = useImagesStore();
	return (
		<>
			<h3>{count}</h3>
			<Stack spacing={2} direction='row'>
				<Button variant='contained' onClick={inc}>
					Increment
				</Button>
				<Button variant='outlined' onClick={dec}>
					Decrement
				</Button>
			</Stack>
		</>
	);
};
