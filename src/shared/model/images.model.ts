import { ContentEnum, IImage } from '@/shared/interfaces';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface ImagesStore {
	images: IImage[];
	deletedImages: IImage[];
	content: ContentEnum;
	setContent: (content: ContentEnum) => void;
	setImages: (images: IImage[]) => void;
	setDeletedImage: (images: IImage) => void;
}

export const useImagesStore = create<ImagesStore>()(
	devtools(
		(set, get) => ({
			images: [],
			deletedImages: [],
			content: ContentEnum.GALLERY,
			setImages: images => set({ images }),
			setDeletedImage: image =>
				set({ deletedImages: [...get().deletedImages, image] }),
			setContent: content => set({ content })
		}),
		{
			name: 'images'
		}
	)
);
