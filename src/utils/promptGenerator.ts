import { PlatformType, PersonConfig, GeneratedPrompts } from '../types';
import { allCategories } from '../categories/allCategories';
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
      throw new Error('Keine Personen aktiviert');
    }

    const personPrompts = enabledPersons.map(person => {
      const parts: string[] = [];
      
      // Rasse hinzufügen (aus dem Dropdown, nicht aus Kategorien)
      parts.push(this.getRaceValue(person.race));
      
      // Geschlecht hinzufügen
      parts.push(person.gender);
      
      // Alle Kategorien durchgehen (außer race, da das über Dropdown gesteuert wird)
      categories.forEach(category => {
        const selectedOptions = person.selections[category.id] || [];
        selectedOptions.forEach(optionId => {
          const option = category.options.find(opt => opt.id === optionId);
          if (option) {
            // Geschlechtsspezifische Optionen prüfen
            if (option.genderSpecific && !option.genderSpecific.includes(person.gender)) {
              return;
            }
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

  private getRaceValue(race: string): string {
    // Mapping für Rassen-Werte
    const raceMap: Record<string, string> = {
      'human': 'human',
      'elf': 'elf',
      'dwarf': 'dwarf',
      'orc': 'orc',
      'halfling': 'halfling',
      'tiefling': 'tiefling',
      'dragonborn': 'dragonborn',
      'fairy': 'fairy',
      'vampire': 'vampire',
      'werewolf': 'werewolf',
      'centaur': 'centaur',
      'satyr': 'satyr',
      'nymph': 'nymph',
      'angel': 'angel',
      'demon': 'demon',
      'elemental': 'elemental',
      'shapeshifter': 'shapeshifter',
      'nephilim': 'nephilim',
      'demigod': 'demigod',
      'ghost': 'ghost',
      'banshee': 'banshee',
      'succubus': 'succubus',
      'incubus': 'incubus',
      'djinn': 'djinn'
    };
    
    return raceMap[race] || 'human';
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

  // Hilfsmethoden für erweiterte Funktionalitäten
  validatePrompt(prompt: string, platform: PlatformType): boolean {
    const maxLength = this.getMaxPromptLength(platform);
    return prompt.length <= maxLength;
  }

  private getMaxPromptLength(platform: PlatformType): number {
    const limits = {
      sdxl: 2000,
      pony: 1500,
      illustrious: 1800,
      sd15: 1200,
      flux: 1600,
      hi_dream: 1400,
      midjourney: 1000,
      dalle3: 1000
    };
    return limits[platform] || 1500;
  }

  optimizePrompt(prompt: string, platform: PlatformType): string {
    // Platform-spezifische Optimierungen
    let optimized = prompt;
    
    switch (platform) {
      case 'pony':
        // Pony bevorzugt Score-System
        optimized = optimized.replace(/masterpiece/g, 'score_9');
        break;
      case 'midjourney':
        // Midjourney mag natürlichere Sprache
        optimized = optimized.replace(/ultra detailed/g, 'highly detailed');
        break;
      case 'dalle3':
        // DALL-E 3 mag beschreibende Sprache
        optimized = `A professional photograph of ${optimized}`;
        break;
    }
    
    return optimized;
  }

  generateVariations(baseOptions: PromptGenerationOptions, count: number = 3): GeneratedPrompts[] {
    const variations: GeneratedPrompts[] = [];
    
    for (let i = 0; i < count; i++) {
      // Leichte Variationen in den Quality Tags
      const modifiedOptions = {
        ...baseOptions,
        includeQualityTags: Math.random() > 0.3
      };
      
      variations.push(this.generatePrompts(modifiedOptions));
    }
    
    return variations;
  }
}

export const promptGenerator = new PromptGenerator();