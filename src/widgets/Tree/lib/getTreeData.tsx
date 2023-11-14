import { TreeChildImage } from '@/features';
import { IImage } from '@/shared/interfaces';
import { ReactNode } from 'react';

export interface RenderTree {
	id: string;
	name: string | ReactNode;
	children?: RenderTree[];
}

export const getTreeData = (images: IImage[]) => {
	const secondChild: RenderTree[] = [];
	images.forEach(image => {
		if (!secondChild.some(e => e.name === image.category)) {
			secondChild.push({
				name: image.category,
				id: `0-${secondChild.length}`,
				children: [
					{
						name: <TreeChildImage data={image} />,
						id: `0-${secondChild.length}-0`
					}
				]
			});
		} else {
			const index = secondChild.findIndex(e => e.name === image.category);
			const obj = secondChild[index];
			obj.children?.push({
				name: <TreeChildImage data={image} />,
				id: `${obj.id}-${obj.children?.length}`
			});
		}
	});

	const treeData = { name: 'images', id: 'root', children: secondChild };
	return treeData;
};
