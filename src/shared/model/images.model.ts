import { GALLERY, LS_IMAGES } from '@/shared/consts';
import { ContentType, IImage, SortType } from '@/shared/interfaces';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface ImagesStore {
	images: IImage[];
	deletedImages: string[];
	content: ContentType;
	sort: SortType | null;
	selectedImage: IImage | null;
	setDeletedImage: (image: IImage) => void;
	setDeletedImages: (images: string[]) => void;
	setImages: (images: IImage[]) => void;
	setContent: (content: ContentType) => void;
	resetImages: () => void;
	setSort: (sort: SortType | null) => void;
	setSelectedImage: (image: IImage | null) => void;
}

export const useImagesStore = create<ImagesStore>()(
	devtools(
		(set, get) => ({
			images: [],
			deletedImages: [],
			content: GALLERY,
			sort: null,
			selectedImage: null,
			setImages: images => set(() => ({ images }), false, 'setImages'),
			setDeletedImage: image => {
				if (!get().deletedImages?.includes(image.image)) {
					set(
						() => ({ deletedImages: [...get().deletedImages, image.image] }),
						false,
						'setDeletedImage'
					);
					localStorage.setItem(LS_IMAGES, JSON.stringify(get().deletedImages));
				}
			},
			setDeletedImages: images =>
				set(() => ({ deletedImages: images }), false, 'setDeletedImages'),
			setContent: content => set(() => ({ content }), false, 'setContent'),
			setSort: sort => set(() => ({ sort: sort }), false, 'setSort'),
			resetImages: () => {
				set(() => ({ deletedImages: [] }), false, 'resetImages');
				localStorage.removeItem(LS_IMAGES);
			},
			setSelectedImage: image =>
				set(() => ({ selectedImage: image }), false, 'setSelectedImage')
		}),
		{
			name: 'images'
		}
	)
);
