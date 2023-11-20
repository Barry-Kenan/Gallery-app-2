import { ContentRadio } from '@/entities';
import { Settings } from '@/features';
import { useImagesStore } from '@/shared/model';
import AnchorIcon from '@mui/icons-material/Anchor';

import { BackButton } from '@/shared';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { FC } from 'react';
import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';

export const Header: FC<HeaderProps> = ({ className, ...props }) => {
	const router = useRouter();
	const { setSort, sort } = useImagesStore();

	const handleClick = () => {
		router.push('/');
		setSort(null);
	};
	return (
		<div className={cn(className, styles.header)} {...props}>
			{!sort ? (
				<>
					<AnchorIcon />
					<ContentRadio />
				</>
			) : (
				<>
					<BackButton handleClick={handleClick} />
					<Settings />
				</>
			)}
		</div>
	);
};
