interface BlokType {
  [key: string]: any;
}

export function getImagesFromBlok(blok: BlokType, length = 6): {[key: string]: any} {
  return Array.from({ length }).reduce((acc, _, i) => {
    acc[`bgImg${i + 1}`] = blok[`background_image_${i + 1}`];
    return acc;
  }, {});
}

export function isPreview() {
  return import.meta.env.STORYBLOK_IS_PREVIEW === 'yes'
}