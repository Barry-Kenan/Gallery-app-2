import { SortPage } from '@/pages';
import { sortArr } from '@/shared/consts';
import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';

const Sort: FC = () => {
	return <SortPage />;
};

export default Sort;

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = sortArr.flatMap(p => `/sortedby${p}`);
	return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = () => {
	return { props: {} };
};
