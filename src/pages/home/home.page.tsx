import { Cards } from '@/features';
import { useImagesStore } from '@/shared/model';
import { Layout } from '@/widgets';
import { useEffect } from 'react';
import { HomePageProps } from './home.page.props';

const HomePage = ({ images }: HomePageProps): JSX.Element => {
	const { setImages } = useImagesStore();
	useEffect(() => {
		setImages(images);
	}, []);
	return (
		<Layout>
			<Cards />
		</Layout>
	);
};

export default HomePage;
