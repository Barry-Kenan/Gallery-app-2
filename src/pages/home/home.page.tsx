import { GALLERY } from '@/shared/consts';
import { useImagesStore } from '@/shared/model';
import { Gallery, Layout, Tree } from '@/widgets';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { HomePageProps } from './home.page.props';

const HomePage = ({ images }: HomePageProps): JSX.Element => {
	const { setImages, sort, content, images: initImages } = useImagesStore();
	const router = useRouter();
	useEffect(() => {
		if (!initImages.length) {
			setImages(images);
		}
	}, []);

	useEffect(() => {
		if (sort) {
			router.push(`sortedby${sort}`);
		}
	}, [sort]);

	return <Layout>{content === GALLERY ? <Gallery /> : <Tree />}</Layout>;
};

export default HomePage;
