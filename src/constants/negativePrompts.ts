import { PlatformType } from '../types';

export const negativePrompts: Record<PlatformType, string> = {
  sdxl: 'low quality, worst quality, normal quality, lowres, bad anatomy, bad hands, bad proportions, blurry, cropped, deformed, disfigured, duplicate, error, extra arms, extra fingers, extra legs, extra limbs, fused fingers, gross proportions, jpeg artifacts, long neck, malformed limbs, missing arms, missing legs, morbid, mutated hands, mutation, mutilated, out of frame, poorly drawn hands, poorly drawn face, signature, text, too many fingers, ugly, username, watermark, amateur, unprofessional',

  pony: 'score_4, score_5, score_6, censored, mosaic censoring, bar censor, blurry, worst quality, low quality, normal quality, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, jpeg artifacts, signature, watermark, username, artist name, amateur, poorly drawn, distorted, disfigured, mutated, malformed, extra limbs, missing limbs',

  illustrious: 'nsfw, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, bad proportions, malformed limbs, duplicate, deformed, disfigured, mutated, ugly, amateur, unprofessional, poorly drawn, distorted',

  sd15: 'lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, bad proportions, malformed limbs, duplicate, deformed, disfigured, mutated, ugly, amateur, unprofessional, poorly drawn',

  flux: 'low quality, worst quality, blurry, out of focus, amateur, unprofessional, bad lighting, overexposed, underexposed, noise, grain, artifacts, distorted, deformed, ugly, bad composition, cropped, watermark, signature, text',

  hi_dream: 'low quality, bad quality, worst quality, blurry, pixelated, amateur, unprofessional, distorted, deformed, ugly, bad anatomy, bad proportions, extra limbs, missing limbs, watermark, signature, text, cropped',

  midjourney: '',  // Midjourney doesn't support negative prompts

  dalle3: ''       // DALL-E 3 doesn't support negative prompts
};

export const getNegativePrompt = (platform: PlatformType): string => {
  return negativePrompts[platform] || '';
};

export const hasNegativePrompts = (platform: PlatformType): boolean => {
  return negativePrompts[platform] !== '';
};