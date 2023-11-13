import cn from 'classnames';
import { FC } from 'react';
import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';

export const Header: FC<HeaderProps> = ({ className, ...props }) => {
	return (
		<div className={cn(className, styles.header)} {...props}>
			<h3>Logo</h3>
		</div>
	);
};
