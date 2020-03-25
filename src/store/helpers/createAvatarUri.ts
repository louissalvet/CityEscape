import ImageResizer from 'react-native-image-resizer'

export default async (initialUri: string) => {
  const { uri } = await ImageResizer.createResizedImage(
    initialUri,
    56,
    56,
    'JPEG',
    100
  )

  return uri
}
