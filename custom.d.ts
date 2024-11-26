// custom.d.ts
declare module '*.png' {
    const value: import('next/image').StaticImageData;
    export default value;
}

declare module '*.gif' {
    const value: import('next/image').StaticImageData;
    export default value;
}

declare module '*.svg' {
    const value: import('next/image').StaticImageData;
    export default value;
}

declare module 'next-image-export-optimizer' {
    import React from 'react';
    import { StaticImageData } from 'next/image';

    interface ExportedImageProps {
        src: string | StaticImageData;
        alt: string;
        basePath?: string;
        className?: string;
        fill?: boolean;
        width?: number;
        height?: number;
        style?: React.CSSProperties;
        quality?: number;
        priority?: boolean;
        sizes?: string;
        loading?: 'lazy' | 'eager';
        placeholder?: 'blur' | 'empty';
        onLoad?: () => void;
        onError?: () => void;
    }

    const ExportedImage: React.ComponentType<ExportedImageProps>;
    export default ExportedImage;
}
