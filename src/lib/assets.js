export const asset = (name) => `/assets/${name}`

export const outfitImages = (from, ext = 'webp') =>
  Array.from({ length: 6 }, (_, index) =>
    asset(`image-${String(from + index).padStart(2, '0')}.${ext}`)
  )