import { 
  PlatformType, 
  PersonConfig, 
  GeneratedPrompts,
  PromptGenerationOptions 
} from '../types';
import { allCategories } from '../categories';
import { negativePrompts } from '../constants/negativePrompts';

export interface PromptGenerationOptions {
  platform: PlatformType;
  personConfigs: PersonConfig[];
  includeQualityTags?: boolean;
  includePlatformSuffix?: boolean;
  removeConflicts?: boolean;
  optimizeForPlatform?: boolean;
}

export class PromptGenerator {
  generatePrompts(options: PromptGenerationOptions): GeneratedPrompts {
    const { platform, personConfigs } = options;
    
    try {
      // Positive Prompt generieren
      const positivePrompt = this.buildPositivePrompt(personConfigs, platform, options);
      
      // Negative Prompt holen
      const negativePrompt = negativePrompts[platform] || '';
      
      // Metadata berechnen
      const metadata = {
        platform,
        personCount: personConfigs.filter(p => p.isEnabled).length,
        totalOptions: this.countTotalSelections(personConfigs),
        estimatedLength: positivePrompt.length,
        tokenEstimate: Math.ceil(positivePrompt.length / 4),
        generatedAt: Date.now()
      };

      return {
        positive: positivePrompt,
        negative: negativePrompt,
        metadata
      };
    } catch (error) {
      console.error('Fehler bei Prompt-Generierung:', error);
      throw new Error('Prompt-Generierung fehlgeschlagen');
    }
  }

  private buildPositivePrompt(
    personConfigs: PersonConfig[], 
    platform: PlatformType,
    options: PromptGenerationOptions
  ): string {
    const enabledPersons = personConfigs.filter(p => p.isEnabled);
    const categories = allCategories;
    
    if (enabledPersons.length === 0) {
      return '';
    }

    const personPrompts = enabledPersons.map(person => {
      const parts: string[] = [];
      
      // Rasse hinzufügen
      const raceCategory = categories.find((cat: any) => cat.id === 'race');
      const raceOption = raceCategory?.options.find((opt: any) => opt.id === person.race);
      if (raceOption) {
        parts.push(raceOption.value);
      }
      
      // Geschlecht hinzufügen
      parts.push(person.gender);
      
      // Alle anderen Kategorien durchgehen
      categories.forEach((category: any) => {
        if (category.id === 'race') return;
        
        const selectedOptions = person.selections[category.id] || [];
        selectedOptions.forEach(optionId => {
          const option = category.options.find((opt: any) => opt.id === optionId);
          if (option) {
            parts.push(option.value);
          }
        });
      });
      
      return parts.join(', ');
    });

    let finalPrompt = '';
    
    if (enabledPersons.length === 1) {
      finalPrompt = personPrompts[0];
    } else {
      finalPrompt = `${personPrompts.join(', and ')}, together in frame`;
    }

    // Platform-spezifische Anpassungen
    if (options.includeQualityTags !== false) {
      finalPrompt = this.addQualityTags(finalPrompt, platform);
    }

    return finalPrompt;
  }

  private addQualityTags(prompt: string, platform: PlatformType): string {
    const qualityTags = {
      sdxl: 'masterpiece, best quality, ultra detailed, 8k resolution, professional photography',
      pony: 'score_9, score_8_up, score_7_up, detailed, realistic, photographic',
      illustrious: 'masterpiece, best quality, very aesthetic, absurdres, ultra detailed',
      sd15: 'highly detailed, professional photograph, 8k, award winning photography',
      flux: 'high quality, detailed, realistic, professional photography',
      hi_dream: 'ultra high quality, masterpiece, detailed, photorealistic',
      midjourney: 'highly detailed, professional photography, award winning',
      dalle3: 'high quality, detailed, photorealistic'
    };

    const tags = qualityTags[platform] || qualityTags.sdxl;
    return `${prompt}, ${tags}`;
  }

  private countTotalSelections(personConfigs: PersonConfig[]): number {
    return personConfigs.reduce((total, person) => {
      const selectionCount = Object.values(person.selections)
        .reduce((count, selections) => count + selections.length, 0);
      return total + selectionCount;
    }, 0);
  }
}

export const promptGenerator = new PromptGenerator();