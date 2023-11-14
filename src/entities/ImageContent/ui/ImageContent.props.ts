import { IImage } from '@/shared/interfaces';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ImageContentProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	selectedImage: IImage;
}
