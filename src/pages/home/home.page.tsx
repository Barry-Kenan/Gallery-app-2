import { GALLERY } from '@/shared/consts';
import { sortArray } from '@/shared/lib';
import { useImagesStore } from '@/shared/model';
import { Gallery, Layout, Tree } from '@/widgets';
import { useEffect } from 'react';
import { HomePageProps } from './home.page.props';

const HomePage = ({ images }: HomePageProps): JSX.Element => {
	const { setImages, sort, content } = useImagesStore();
	useEffect(() => {
		const sortedImages = sortArray(images, sort);
		sortedImages && setImages(sortedImages);
	}, [sort]);
	return <Layout>{content === GALLERY ? <Gallery /> : <Tree />}</Layout>;
};

export default HomePage;
