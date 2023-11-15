import { Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { ReactElement, forwardRef } from 'react';

export const Transition = forwardRef(function Transition(
	props: TransitionProps & {
		children: ReactElement<unknown, string>;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction='up' ref={ref} {...props} />;
});
