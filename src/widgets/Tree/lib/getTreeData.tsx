import { TreeChildImage } from '@/features';
import { IImage } from '@/shared/interfaces';
import { ReactNode } from 'react';

export interface RenderTree {
	id: string;
	name: string | ReactNode;
	image?: IImage | null;
	children?: RenderTree[];
}

export const getTreeData = (images: IImage[]) => {
	const secondChild: RenderTree[] = [];
	images.forEach(item => {
		if (!secondChild.some(e => e.name === item.category)) {
			secondChild.push({
				name: item.category,
				id: `0-${secondChild.length}`,
				children: [
					{
						name: <TreeChildImage data={item} />,
						id: `0-${secondChild.length}-0`,
						image: item
					}
				]
			});
		} else {
			const index = secondChild.findIndex(e => e.name === item.category);
			const obj = secondChild[index];
			obj.children?.push({
				name: <TreeChildImage data={item} />,
				id: `${obj.id}-${obj.children?.length}`,
				image: item
			});
		}
	});

	const treeData = { name: 'images', id: 'root', children: secondChild };
	return treeData;
};
