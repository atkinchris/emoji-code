const getCanvasBlob = element =>
  new Promise((resolve, reject) => {
    try {
      element.toBlob(dataUri => resolve(dataUri))
    } catch (e) {
      reject(e)
    }
  })

export default getCanvasBlob
