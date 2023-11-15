import { ContentType, IImage, SortType } from '@/shared/interfaces';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { GALLERY, NAME } from '../consts';

interface ImagesStore {
	images: IImage[];
	deletedImages: string[];
	content: ContentType;
	sort: SortType;
	selectedImage: IImage | null;
	setContent: (content: ContentType) => void;
	setSort: (sort: SortType) => void;
	setImages: (images: IImage[]) => void;
	setDeletedImage: (image: IImage) => void;
	resetImages: () => void;
	setSelectedImage: (image: IImage | null) => void;
}

export const useImagesStore = create<ImagesStore>()(
	devtools(
		(set, get) => ({
			images: [],
			deletedImages: [],
			content: GALLERY,
			sort: NAME,
			setImages: images => set({ images }),
			setDeletedImage: image => {
				if (!get().deletedImages.includes(image.image)) {
					set({ deletedImages: [...get().deletedImages, image.image] });
				}
			},
			setContent: content => set({ content }),
			setSort: sort => set({ sort: sort }),
			resetImages: () => set({ deletedImages: [] }),
			selectedImage: null,
			setSelectedImage: image => set({ selectedImage: image })
		}),
		{
			name: 'images'
		}
	)
);
