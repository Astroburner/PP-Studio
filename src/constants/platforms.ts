import { PlatformType } from '../types';

export interface PlatformConfig {
  id: PlatformType;
  name: string;
  description: string;
  positivePrefix?: string;
  positiveSuffix?: string;
  supportsNegativePrompts: boolean;
  maxPromptLength: number;
  specialFeatures: string[];
}

export const platformConfigs: Record<PlatformType, PlatformConfig> = {
  sdxl: {
    id: 'sdxl',
    name: 'SDXL',
    description: 'Stable Diffusion XL - Hochqualitative AI-Bildgenerierung',
    positivePrefix: '',
    positiveSuffix: ', masterpiece, best quality, ultra detailed, 8k resolution, professional photography',
    supportsNegativePrompts: true,
    maxPromptLength: 2000,
    specialFeatures: ['High Resolution', 'Detailed Generation', 'Negative Prompts']
  },
  pony: {
    id: 'pony',
    name: 'Pony',
    description: 'Pony Diffusion - Spezialisiert auf Charaktere',
    positivePrefix: '',
    positiveSuffix: ', score_9, score_8_up, score_7_up, detailed, realistic, photographic',
    supportsNegativePrompts: true,
    maxPromptLength: 1500,
    specialFeatures: ['Character Focus', 'Score System', 'Style Flexibility']
  },
  illustrious: {
    id: 'illustrious',
    name: 'Illustrious',
    description: 'Illustrious XL - Künstlerische Bildgenerierung',
    positivePrefix: '',
    positiveSuffix: ', masterpiece, best quality, very aesthetic, absurdres, ultra detailed',
    supportsNegativePrompts: true,
    maxPromptLength: 1800,
    specialFeatures: ['Artistic Style', 'Aesthetic Focus', 'High Detail']
  },
  sd15: {
    id: 'sd15',
    name: 'SD 1.5',
    description: 'Stable Diffusion 1.5 - Klassisches Modell',
    positivePrefix: '',
    positiveSuffix: ', highly detailed, professional photograph, 8k, award winning photography',
    supportsNegativePrompts: true,
    maxPromptLength: 1200,
    specialFeatures: ['Stable Generation', 'Wide Compatibility', 'Proven Results']
  },
  flux: {
    id: 'flux',
    name: 'Flux',
    description: 'Flux.1 Dev/Schnell - Schnelle hochqualitative Generierung',
    positivePrefix: '',
    positiveSuffix: ', high quality, detailed, realistic, professional photography',
    supportsNegativePrompts: true,
    maxPromptLength: 1600,
    specialFeatures: ['Fast Generation', 'High Quality', 'Natural Language']
  },
  hi_dream: {
    id: 'hi_dream',
    name: 'Hi-Dream',
    description: 'Hi-Dream - Traumhafte Bildgenerierung',
    positivePrefix: '',
    positiveSuffix: ', ultra high quality, masterpiece, detailed, photorealistic',
    supportsNegativePrompts: true,
    maxPromptLength: 1400,
    specialFeatures: ['Dreamy Style', 'Photorealistic', 'Ultra Quality']
  },
  midjourney: {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'Midjourney AI Kunstgenerierung',
    positivePrefix: '',
    positiveSuffix: ' --style photographic --quality 2',
    supportsNegativePrompts: false,
    maxPromptLength: 1000,
    specialFeatures: ['Artistic Style', 'No Negative Prompts', 'Parameter System']
  },
  dalle3: {
    id: 'dalle3',
    name: 'DALL-E 3',
    description: 'OpenAI DALL-E 3',
    positivePrefix: 'A professional photograph of ',
    positiveSuffix: ', highly detailed, photorealistic, professional photography',
    supportsNegativePrompts: false,
    maxPromptLength: 1000,
    specialFeatures: ['Natural Language', 'No Negative Prompts', 'Context Understanding']
  }
};

export const getPlatformConfig = (platform: PlatformType): PlatformConfig => {
  return platformConfigs[platform];
};

export const getSupportedPlatforms = (): PlatformType[] => {
  return Object.keys(platformConfigs) as PlatformType[];
};

export const getPlatformsWithNegativePrompts = (): PlatformType[] => {
  return getSupportedPlatforms().filter(platform => 
    platformConfigs[platform].supportsNegativePrompts
  );
};