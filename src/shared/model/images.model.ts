import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface ImagesStore {
	count: number;
	inc: () => void;
	dec: () => void;
}

export const useImagesStore = create<ImagesStore>()(
	devtools(
		set => ({
			count: 0,
			inc: () => set(state => ({ count: state.count + 1 })),
			dec: () => set(state => ({ count: state.count - 1 }))
		}),
		{
			name: 'images'
		}
	)
);
