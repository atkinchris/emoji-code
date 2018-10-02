import { svgAsPngUri } from 'save-svg-as-png'

import convertDataUriToBlob from './convertDataUriToBlob'

const convertSvgToDataUri = element =>
  new Promise(resolve => {
    svgAsPngUri(element, { scale: 4 }, dataUri => resolve(dataUri))
  })

const getSvgBlob = async element => {
  const dataUri = await convertSvgToDataUri(element)
  return convertDataUriToBlob(dataUri)
}

export default getSvgBlob
