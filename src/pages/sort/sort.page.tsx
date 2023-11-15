import { Cards } from '@/features';
import { IImage, SortType } from '@/shared/interfaces';
import { sortArray } from '@/shared/lib';
import { useImagesStore } from '@/shared/model';
import { Layout } from '@/widgets';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';

const SortPage: FC = () => {
	const { images, sort } = useImagesStore();
	const sortedImages = sortArray(images, sort as SortType) as IImage[];
	const router = useRouter();

	useEffect(() => {
		if (!images.length) {
			router.push('/');
		}
	}, []);

	useEffect(() => {
		if (sort) {
			router.push(`sortedby${sort}`);
		}
	}, [sort]);

	return (
		<Layout>
			<Cards images={sortedImages} />
		</Layout>
	);
};

export default SortPage;
