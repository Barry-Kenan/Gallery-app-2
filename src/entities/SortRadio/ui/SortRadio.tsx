import { RadioGroupForm } from '@/shared';
import { Sort } from '@/shared/consts';
import { useImagesStore } from '@/shared/model';
import { FC } from 'react';

export const SortRadio: FC = () => {
	const { sort, setSort } = useImagesStore();

	return (
		<RadioGroupForm
			value={sort}
			setValue={setSort as (sort: string) => void}
			array={Sort}
		/>
	);
};
