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

export function extractServicesFromBlok(blok) {
  const services = [];
  const servicePattern = /^service(\d+)$/;

  for (const key in blok) {
    const match = key.match(servicePattern);
    if (match) {
      const index = match[1];
      services.push({
        id: parseInt(index, 10),
        title: blok[key],
        description: blok[`service${index}_description`],
        icon: blok[`service${index}_icon`]?.filename
      });
    }
  }

  return services;
}