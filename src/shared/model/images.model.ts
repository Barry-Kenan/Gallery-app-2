import { IImage } from '@/shared/interfaces';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface ImagesStore {
	images: IImage[];
	deletedImages: IImage[];
	setImages: (images: IImage[]) => void;
	setDeletedImage: (images: IImage) => void;
}

export const useImagesStore = create<ImagesStore>()(
	devtools(
		(set, get) => ({
			images: [],
			deletedImages: [],
			setImages: images => set({ images }),
			setDeletedImage: image =>
				set({ deletedImages: [...get().deletedImages, image] })
		}),
		{
			name: 'images'
		}
	)
);
