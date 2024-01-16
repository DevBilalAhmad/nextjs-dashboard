import { Inter,Roboto } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

// This reduces the size of the font file and improves performance.You'll need to define which of these subsets you want to preload. Failing to specify any subsets while preload is true will result in a warning.


const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

