import { StyledTreeItem } from '@/shared';
import { MinusSquare, PlusSquare } from '@/shared/icons';
import { useImagesStore } from '@/shared/model';
import { Box } from '@mui/material';
import { TreeView } from '@mui/x-tree-view';
import { FC } from 'react';
import { RenderTree, getTreeData } from '../lib/getTreeData';

export const Tree: FC = () => {
	const { images } = useImagesStore();

	const data = getTreeData(images);

	const renderTree = (nodes: RenderTree) => (
		<StyledTreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
			{Array.isArray(nodes.children)
				? nodes.children.map(node => renderTree(node))
				: null}
		</StyledTreeItem>
	);

	return (
		<Box
			sx={{
				minHeight: 270,
				flexGrow: 1,
				maxWidth: 500
			}}
		>
			<TreeView
				aria-label='images tree'
				defaultCollapseIcon={<MinusSquare />}
				defaultExpanded={['root']}
				defaultExpandIcon={<PlusSquare />}
				disableSelection
			>
				{renderTree(data)}
			</TreeView>
		</Box>
	);
};
