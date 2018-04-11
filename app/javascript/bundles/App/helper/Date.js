export const formatDate = datetime => {
  if (typeof datetime === 'string') {
    const e = new Date(
      datetime.replace(/(\d{4}).?(\d{1,2}).?(\d{1,2}).*/g, '$1-$2-$3')
    )
    const localeDate = e.toLocaleDateString()
    return localeDate.replace(/(\d{4}).?(\d{1,2}).?(\d{1,2}).*/g, '$1/$2/$3')
  }
  return datetime
}
