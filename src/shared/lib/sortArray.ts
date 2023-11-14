import { CATEGORY, DATE, NAME, SIZE } from '@/shared/consts';
import { IImage, SortType } from '@/shared/interfaces';

export const sortArray = (arr: IImage[], sort: SortType) => {
	switch (sort) {
		case CATEGORY:
			return arr.sort((a, b) => (a.image > b.image ? 1 : -1));
		case DATE:
			return arr.sort((a, b) => (a.timestamp > b.timestamp ? 1 : -1));
		case SIZE:
			return arr.sort((a, b) => (a.filesize > b.filesize ? 1 : -1));
		case NAME:
			return arr.sort((a, b) =>
				a.image.replace(`${a.category}/`, '') >
				b.image.replace(`${b.category}/`, '')
					? 1
					: -1
			);
		default:
			const _never: never = sort;
	}
};
