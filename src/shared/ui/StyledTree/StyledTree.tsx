import { Collapse, alpha, styled } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { TreeItem, TreeItemProps, treeItemClasses } from '@mui/x-tree-view';
import { animated, useSpring } from '@react-spring/web';
import { forwardRef } from 'react';

function TransitionComponent(props: TransitionProps) {
	const style = useSpring({
		to: {
			opacity: props.in ? 1 : 0,
			transform: `translate3d(${props.in ? 0 : 20}px,0,0)`
		}
	});

	return (
		<animated.div style={style}>
			<Collapse {...props} />
		</animated.div>
	);
}

const CustomTreeItem = forwardRef(
	(props: TreeItemProps, ref: React.Ref<HTMLLIElement>) => (
		<TreeItem {...props} TransitionComponent={TransitionComponent} ref={ref} />
	)
);

export const StyledTreeItem = styled(CustomTreeItem)(({ theme }) => ({
	[`& .${treeItemClasses.iconContainer}`]: {
		'& .close': {
			opacity: 0.3
		}
	},
	[`& .${treeItemClasses.group}`]: {
		marginLeft: 15,
		paddingLeft: 18,
		borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`
	}
}));
