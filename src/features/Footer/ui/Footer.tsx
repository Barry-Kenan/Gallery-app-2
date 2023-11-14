import cn from 'classnames';
import { FC } from 'react';
import styles from './Footer.module.scss';
import { FooterProps } from './Footer.props';

export const Footer: FC<FooterProps> = ({ className, ...props }) => {
	return (
		<div className={cn(className, styles.footer)} {...props}>
			<h4 className={styles.title}>Photo Gallery</h4>
		</div>
	);
};
