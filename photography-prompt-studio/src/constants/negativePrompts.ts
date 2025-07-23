import { PlatformType } from '../types';

export const negativePrompts: Record<PlatformType, string> = {
  sdxl: 'low quality, worst quality, normal quality, lowres, bad anatomy, bad hands, bad proportions, blurry, cropped, deformed, disfigured, duplicate, error, extra arms, extra fingers, extra legs, extra limbs, fused fingers, gross proportions, jpeg artifacts, long neck, malformed limbs, missing arms, missing legs, morbid, mutated hands, mutation, mutilated, out of frame, poorly drawn hands, poorly drawn face, signature, text, too many fingers, ugly, username, watermark, amateur, unprofessional',

  pony: 'score_4, score_5, score_6, censored, mosaic censoring, bar censor, blurry, worst quality, low quality, normal quality, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, jpeg artifacts, signature, watermark, username, artist name, amateur, poorly drawn, distorted, disfigured, mutated, malformed, extra limbs, missing limbs',

  illustrious: 'nsfw, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, bad proportions, malformed limbs, duplicate, deformed, disfigured, mutated, ugly, amateur, unprofessional, poorly drawn, distorted',

  sd15: 'lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, bad artist, bad prompt version2, amateur, poorly drawn, distorted, deformed, disfigured, mutated, malformed, ugly, gross, disgusting',

  flux: 'low quality, low resolution, bad anatomy, bad proportions, bad hands, blurry, out of focus, poorly drawn, amateur, ugly, distorted, deformed, mutated, malformed, disfigured, extra limbs, missing limbs, extra fingers, missing fingers, fused fingers, long neck, duplicate, error, jpeg artifacts, signature, watermark, text, username',

  hi_dream: 'poor quality, low detail, pixelated, compressed, artifact, distortion, noise, blur, overexposed, underexposed, unnatural, artificial, amateur, unprofessional, bad anatomy, bad proportions, malformed, deformed, distorted, mutated, disfigured, ugly, gross, disgusting, extra limbs, missing limbs, bad hands, bad fingers',

  midjourney: '', // Midjourney unterstützt keine Negative Prompts

  dalle3: '' // DALL-E 3 unterstützt keine Negative Prompts
};

export const getCommonNegativePrompts = (): string[] => {
  return [
    'bad anatomy',
    'bad hands',
    'bad proportions',
    'blurry',
    'low quality',
    'worst quality',
    'amateur',
    'unprofessional',
    'distorted',
    'deformed',
    'mutated',
    'malformed',
    'disfigured',
    'ugly',
    'extra limbs',
    'missing limbs',
    'extra fingers',
    'missing fingers',
    'fused fingers',
    'poorly drawn',
    'signature',
    'watermark',
    'text',
    'jpeg artifacts'
  ];
};

export const getQualityNegativePrompts = (): string[] => {
  return [
    'low quality',
    'worst quality',
    'normal quality',
    'lowres',
    'blurry',
    'out of focus',
    'amateur',
    'unprofessional',
    'poorly drawn',
    'bad lighting',
    'overexposed',
    'underexposed',
    'noise',
    'grain',
    'pixelated',
    'compressed',
    'artifact'
  ];
};

export const getAnatomyNegativePrompts = (): string[] => {
  return [
    'bad anatomy',
    'bad hands',
    'bad proportions',
    'extra arms',
    'extra fingers',
    'extra legs',
    'extra limbs',
    'missing arms',
    'missing legs',
    'missing fingers',
    'fused fingers',
    'malformed limbs',
    'mutated hands',
    'long neck',
    'too many fingers',
    'deformed',
    'disfigured',
    'mutated',
    'malformed'
  ];
};

export const getUnwantedContentNegativePrompts = (): string[] => {
  return [
    'signature',
    'watermark',
    'text',
    'username',
    'artist name',
    'logo',
    'copyright',
    'website',
    'url',
    'censored',
    'mosaic censoring',
    'bar censor'
  ];
};

export const getPlatformNegativePrompt = (platform: PlatformType): string => {
  return negativePrompts[platform] || '';
};

export const buildCustomNegativePrompt = (
  platform: PlatformType,
  customNegatives: string[] = []
): string => {
  const baseNegative = getPlatformNegativePrompt(platform);
  
  if (customNegatives.length === 0) {
    return baseNegative;
  }
  
  const combined = baseNegative 
    ? `${baseNegative}, ${customNegatives.join(', ')}`
    : customNegatives.join(', ');
    
  return combined;
};