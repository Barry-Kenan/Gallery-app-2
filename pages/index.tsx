import { HomePage } from '@/pages';
import { galleryApi } from '@/shared/api';
import { IImage } from '@/shared/interfaces';
import { GetStaticProps } from 'next';
import { FC } from 'react';

const Home: FC<HomeProps> = ({ images }) => {
	return <HomePage images={images} />;
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const images: IImage[] = await galleryApi.getImages();
	return {
		props: {
			images
		}
	};
};

interface HomeProps extends Record<string, unknown> {
	images: IImage[];
}

export default Home;
