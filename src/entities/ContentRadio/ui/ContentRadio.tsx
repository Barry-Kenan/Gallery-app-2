import { RadioGroupForm } from '@/shared';
import { Content } from '@/shared/consts';
import { useImagesStore } from '@/shared/model';
import { FC } from 'react';

export const ContentRadio: FC = () => {
	const { content, setContent } = useImagesStore();

	return (
		<RadioGroupForm
			value={content}
			setValue={setContent as (content: string) => void}
			array={Content}
		/>
	);
};
