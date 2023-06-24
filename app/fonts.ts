import localFont from 'next/font/local'

export const ploni = localFont({
  src: [
    {
      path: './fonts/ploni-light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/ploni-regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/ploni-medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/ploni-demibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/ploni-bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
})