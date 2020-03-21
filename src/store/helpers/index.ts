import ImageResizer from 'react-native-image-resizer'

export const createAvatarUri = async (initialUri: string) => {
  const { uri } = await ImageResizer.createResizedImage(
    initialUri,
    56,
    56,
    'JPEG',
    100
  )

  return uri
}

export { default as createRequestReducer } from './createRequestReducer'
export * from './channels'
export * from './selectors'
