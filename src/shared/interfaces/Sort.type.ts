import { CATEGORY, DATE, NAME, SIZE } from '@/shared/consts/index';

export type SortType =
	| typeof CATEGORY
	| typeof DATE
	| typeof NAME
	| typeof SIZE;
