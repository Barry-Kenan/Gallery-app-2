import { FunctionComponent, memo } from 'react';
import Layout from './Layout';

export const withLayout = <T extends Record<string, unknown>>(
	Component: FunctionComponent<T>
) => {
	const withLayoutComponent = memo((props: T): JSX.Element => {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	});

	return withLayoutComponent;
};
