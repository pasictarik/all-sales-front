const fields = {
  offer: {
    imageURL: {
      label: 'imageURL',
      description: 'Image of offer'
    },
    title: {
      label: 'title',
      description: 'title of offer'
    },
    subtitle: {
      label: 'subtitle',
      description: 'subtitle of offer'
    }
  }
}
export default {
  getFields (key) {
    return fields[key]
  },
}
