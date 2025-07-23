import React, { useState, useEffect, useCallback } from 'react';
import { Camera, Moon, Sun, Trash2, Zap, Plus, Minus, User, Crown, Shirt, Smile, Star, Mountain, Lightbulb, Heart, HeartHandshake, Sparkles } from 'lucide-react';

// Types & Constants
type PlatformType = 'sdxl' | 'midjourney' | 'dalle3' | 'flux' | 'leonardo';
type RaceType = 'human' | 'elf' | 'dwarf' | 'orc' | 'halfling';
type GenderType = 'woman' | 'man' | 'non-binary';
type CategorySection = 'person' | 'hair_makeup' | 'clothing' | 'emotion' | 'poses' | 'accessories' | 'environment' | 'lighting' | 'mood' | 'interaction' | 'additional';

interface Preset {
  id: string;
  name: string;
  selections: Record<string, Record<string, string[]>>;
  timestamp: number;
}

interface PersonConfig {
  id: string;
  race: RaceType;
  gender: GenderType;
  selections: Record<string, string[]>;
  isEnabled: boolean;
  weight: number;
}

interface GeneratedPrompts {
  positive: string;
  negative: string;
  quality: string;
  technical: string;
}

const PLATFORMS = {
  sdxl: { name: 'Stable Diffusion XL', shortName: 'SDXL' },
  midjourney: { name: 'Midjourney', shortName: 'MJ' },
  dalle3: { name: 'DALL-E 3', shortName: 'DALL-E' },
  flux: { name: 'Flux', shortName: 'Flux' },
  leonardo: { name: 'Leonardo AI', shortName: 'Leonardo' }
};

// Mock Components (replace with actual implementations)
const PersonSelector: React.FC<{
  personNumber: number;
  totalPersons: number;
  race: RaceType;
  gender: GenderType;
  selections: Record<string, string[]>;
  activeSection: CategorySection;
  darkMode: boolean;
  onRaceChange: (race: RaceType) => void;
  onGenderChange: (gender: GenderType) => void;
  onToggleSelection: (categoryId: string, optionId: string) => void;
}> = ({ personNumber, race, gender, darkMode, onRaceChange, onGenderChange, activeSection }) => (
  <div className={`p-6 rounded-xl border transition-colors ${
    darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
  }`}>
    <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
      Person {personNumber}
    </h3>
    
    <div className="space-y-4">
      <div>
        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Rasse
        </label>
        <select
          value={race}
          onChange={(e) => onRaceChange(e.target.value as RaceType)}
          className={`w-full px-3 py-2 rounded-lg border transition-colors ${
            darkMode 
              ? 'bg-gray-700 border-gray-600 text-white' 
              : 'bg-white border-gray-300 text-gray-900'
          }`}
        >
          <option value="human">Mensch</option>
          <option value="elf">Elf</option>
          <option value="dwarf">Zwerg</option>
          <option value="orc">Ork</option>
          <option value="halfling">Halbling</option>
        </select>
      </div>

      <div>
        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Geschlecht
        </label>
        <select
          value={gender}
          onChange={(e) => onGenderChange(e.target.value as GenderType)}
          className={`w-full px-3 py-2 rounded-lg border transition-colors ${
            darkMode 
              ? 'bg-gray-700 border-gray-600 text-white' 
              : 'bg-white border-gray-300 text-gray-900'
          }`}
        >
          <option value="woman">Frau</option>
          <option value="man">Mann</option>
          <option value="non-binary">Non-Binary</option>
        </select>
      </div>

      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
        <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Aktuelle Sektion: <span className="font-medium">{activeSection}</span>
        </p>
        <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Hier würden die Optionen für {activeSection} angezeigt
        </p>
      </div>
    </div>
  </div>
);

const PromptOutput: React.FC<{
  platform: PlatformType;
  generatedPrompts: GeneratedPrompts | null;
  darkMode: boolean;
  onRegenerate: () => void;
}> = ({ platform, generatedPrompts, darkMode, onRegenerate }) => (
  <div className={`p-6 rounded-xl border transition-colors ${
    darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
  }`}>
    <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
      Generated Prompts ({PLATFORMS[platform].name})
    </h3>
    
    {generatedPrompts ? (
      <div className="space-y-4">
        <div>
          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Positive Prompt
          </label>
          <textarea
            value={generatedPrompts.positive}
            readOnly
            className={`w-full p-3 rounded-lg border resize-none h-24 ${
              darkMode 
                ? 'bg-gray-700 border-gray-600 text-white' 
                : 'bg-gray-50 border-gray-300 text-gray-900'
            }`}
          />
        </div>
        
        <div>
          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Negative Prompt
          </label>
          <textarea
            value={generatedPrompts.negative}
            readOnly
            className={`w-full p-3 rounded-lg border resize-none h-20 ${
              darkMode 
                ? 'bg-gray-700 border-gray-600 text-white' 
                : 'bg-gray-50 border-gray-300 text-gray-900'
            }`}
          />
        </div>

        <button
          onClick={onRegenerate}
          className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <Zap className="w-4 h-4" />
          Neu Generieren
        </button>
      </div>
    ) : (
      <div className={`text-center py-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        <Camera className="w-12 h-12 mx-auto mb-4 opacity-50" />
        <p>Keine Prompts generiert</p>
        <p className="text-sm">Wählen Sie Optionen und klicken Sie auf "Prompts Generieren"</p>
      </div>
    )}
  </div>
);

const PresetManager: React.FC<{
  presets: Preset[];
  darkMode: boolean;
  onSavePreset: (name: string) => void;
  onLoadPreset: (preset: Preset) => void;
  onDeletePreset: (id: string) => void;
}> = ({ presets, darkMode, onSavePreset, onLoadPreset, onDeletePreset }) => {
  const [presetName, setPresetName] = useState('');

  const handleSave = () => {
    if (presetName.trim()) {
      onSavePreset(presetName.trim());
      setPresetName('');
    }
  };

  return (
    <div className={`p-6 rounded-xl border transition-colors ${
      darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    }`}>
      <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        Presets
      </h3>
      
      <div className="space-y-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={presetName}
            onChange={(e) => setPresetName(e.target.value)}
            placeholder="Preset Name..."
            className={`flex-1 px-3 py-2 rounded-lg border transition-colors ${
              darkMode 
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
            }`}
          />
          <button
            onClick={handleSave}
            disabled={!presetName.trim()}
            className={`px-4 py-2 rounded-lg transition-colors ${
              presetName.trim()
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : darkMode ? 'bg-gray-700 text-gray-500' : 'bg-gray-200 text-gray-400'
            }`}
          >
            Save
          </button>
        </div>

        <div className="space-y-2 max-h-64 overflow-y-auto">
          {presets.length === 0 ? (
            <p className={`text-sm text-center py-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Keine Presets gespeichert
            </p>
          ) : (
            presets.map((preset) => (
              <div
                key={preset.id}
                className={`flex items-center justify-between p-3 rounded-lg border ${
                  darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="flex-1">
                  <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {preset.name}
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {new Date(preset.timestamp).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => onLoadPreset(preset)}
                    className="px-3 py-1 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
                  >
                    Load
                  </button>
                  <button
                    onClick={() => onDeletePreset(preset.id)}
                    className="px-3 py-1 text-sm bg-red-600 hover:bg-red-700 text-white rounded transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

// Mock prompt generator
const promptGenerator = {
  generatePrompts: (options: { platform: PlatformType; personConfigs: PersonConfig[]; includeQualityTags: boolean }): GeneratedPrompts => {
    const { platform, personConfigs } = options;
    
    const platformSpecs = PLATFORMS[platform];
    const personDescriptions = personConfigs.map((person, index) => 
      `${person.gender} ${person.race} (Person ${index + 1})`
    ).join(', ');

    return {
      positive: `Professional portrait photography of ${personDescriptions}, studio lighting, high quality, detailed, realistic, ${platformSpecs.shortName} optimized`,
      negative: 'blurry, low quality, distorted, amateur, bad lighting, overexposed, underexposed',
      quality: 'masterpiece, best quality, ultra detailed, 8k resolution',
      technical: `optimized for ${platformSpecs.name}, professional photography settings`
    };
  }
};

const PhotoPromptStudio: React.FC = () => {
  // State Management
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState<CategorySection>('person');
  const [personCount, setPersonCount] = useState<1 | 2 | 3 | 4>(1);
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformType>('sdxl');
  const [persons, setPersons] = useState<PersonConfig[]>([
    {
      id: 'person1',
      race: 'human',
      gender: 'woman',
      selections: {},
      isEnabled: true,
      weight: 1
    }
  ]);
  const [generatedPrompts, setGeneratedPrompts] = useState<GeneratedPrompts | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [presets, setPresets] = useState<Preset[]>([]);

  // Update persons when count changes
  useEffect(() => {
    const newPersons = Array.from({ length: personCount }, (_, i) => {
      if (persons[i]) {
        return persons[i];
      }
      return {
        id: `person${i + 1}`,
        race: 'human' as RaceType,
        gender: 'woman' as GenderType,
        selections: {},
        isEnabled: true,
        weight: 1
      };
    });
    setPersons(newPersons);
  }, [personCount]);

  // Section Configuration
  const sections = [
    { id: 'person' as CategorySection, name: 'Person', icon: <User className="w-4 h-4" /> },
    { id: 'hair_makeup' as CategorySection, name: 'Haare & Makeup', icon: <Crown className="w-4 h-4" /> },
    { id: 'clothing' as CategorySection, name: 'Kleidung', icon: <Shirt className="w-4 h-4" /> },
    { id: 'emotion' as CategorySection, name: 'Emotion', icon: <Smile className="w-4 h-4" /> },
    { id: 'poses' as CategorySection, name: 'Posen', icon: <User className="w-4 h-4" /> },
    { id: 'accessories' as CategorySection, name: 'Accessoires', icon: <Star className="w-4 h-4" /> },
    { id: 'environment' as CategorySection, name: 'Umgebung', icon: <Mountain className="w-4 h-4" /> },
    { id: 'lighting' as CategorySection, name: 'Beleuchtung', icon: <Lightbulb className="w-4 h-4" /> },
    { id: 'mood' as CategorySection, name: 'Stimmung', icon: <Heart className="w-4 h-4" /> },
    { id: 'interaction' as CategorySection, name: 'Interaktion', icon: <HeartHandshake className="w-4 h-4" /> },
    { id: 'additional' as CategorySection, name: 'Details', icon: <Sparkles className="w-4 h-4" /> }
  ];

  // Event Handlers
  const handleUpdatePersonRace = useCallback((personIndex: number, race: RaceType) => {
    setPersons(prev => {
      const newPersons = [...prev];
      if (newPersons[personIndex]) {
        newPersons[personIndex] = { ...newPersons[personIndex], race };
      }
      return newPersons;
    });
  }, []);

  const handleUpdatePersonGender = useCallback((personIndex: number, gender: GenderType) => {
    setPersons(prev => {
      const newPersons = [...prev];
      if (newPersons[personIndex]) {
        newPersons[personIndex] = { ...newPersons[personIndex], gender };
      }
      return newPersons;
    });
  }, []);

  const handleTogglePersonSelection = useCallback((personIndex: number, categoryId: string, optionId: string) => {
    setPersons(prev => {
      const newPersons = [...prev];
      if (newPersons[personIndex]) {
        const currentSelections = { ...newPersons[personIndex].selections };
        const categorySelections = currentSelections[categoryId] || [];
        
        if (categorySelections.includes(optionId)) {
          currentSelections[categoryId] = categorySelections.filter(id => id !== optionId);
        } else {
          currentSelections[categoryId] = [...categorySelections, optionId];
        }
        
        newPersons[personIndex] = {
          ...newPersons[personIndex],
          selections: currentSelections
        };
      }
      return newPersons;
    });
  }, []);

  const handleGeneratePrompts = useCallback(async () => {
    setIsGenerating(true);
    
    try {
      // Small delay for UX
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const options = {
        platform: selectedPlatform,
        personConfigs: persons,
        includeQualityTags: true
      };

      const generated = promptGenerator.generatePrompts(options);
      setGeneratedPrompts(generated);
    } catch (error) {
      console.error('Fehler bei der Prompt-Generierung:', error);
      alert('Fehler bei der Prompt-Generierung. Bitte versuchen Sie es erneut.');
    } finally {
      setIsGenerating(false);
    }
  }, [selectedPlatform, persons]);

  const handleClearSelections = useCallback(() => {
    setPersons(prev => prev.map(person => ({ ...person, selections: {} })));
    setGeneratedPrompts(null);
  }, []);

  const handleSavePreset = useCallback((name: string) => {
    const newPreset: Preset = {
      id: Date.now().toString(),
      name,
      selections: persons.reduce((acc, person, index) => {
        acc[`person${index + 1}`] = person.selections;
        return acc;
      }, {} as Record<string, Record<string, string[]>>),
      timestamp: Date.now()
    };

    setPresets(prev => [newPreset, ...prev].slice(0, 50)); // Limit to 50 presets
  }, [persons]);

  const handleLoadPreset = useCallback((preset: Preset) => {
    const newPersons = persons.map((person, index) => ({
      ...person,
      selections: preset.selections[`person${index + 1}`] || {}
    }));
    setPersons(newPersons);
    setGeneratedPrompts(null);
  }, [persons]);

  const handleDeletePreset = useCallback((id: string) => {
    setPresets(prev => prev.filter(preset => preset.id !== id));
  }, []);

  // Computed Values
  const hasSelections = persons.some(person => 
    Object.values(person.selections).some(selections => selections.length > 0)
  );

  const totalSelections = persons.reduce((total, person) => {
    return total + Object.values(person.selections).reduce((count, selections) => count + selections.length, 0);
  }, 0);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className={`rounded-xl border mb-8 transition-colors duration-300 ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}>
          <div className="p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl ${darkMode ? 'bg-blue-600' : 'bg-blue-600'} shadow-lg`}>
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Photography Prompt Studio
                  </h1>
                  <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Professioneller AI-Fotografie Prompt Generator
                  </p>
                  {totalSelections > 0 && (
                    <p className={`text-sm mt-1 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                      {totalSelections} Optionen ausgewählt
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                {/* Theme Toggle */}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`p-3 rounded-xl transition-colors ${
                    darkMode 
                      ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  title={darkMode ? 'Light Mode' : 'Dark Mode'}
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>

                {/* Platform Selector */}
                <select
                  value={selectedPlatform}
                  onChange={(e) => setSelectedPlatform(e.target.value as PlatformType)}
                  className={`px-4 py-2 rounded-xl border transition-colors ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                >
                  {Object.entries(PLATFORMS).map(([key, platform]) => (
                    <option key={key} value={key}>{platform.name}</option>
                  ))}
                </select>

                {/* Person Count */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPersonCount(Math.max(1, personCount - 1) as 1 | 2 | 3 | 4)}
                    disabled={personCount <= 1}
                    className={`p-2 rounded-lg transition-colors ${
                      personCount <= 1
                        ? darkMode ? 'bg-gray-700 text-gray-500' : 'bg-gray-200 text-gray-400'
                        : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className={`px-3 py-2 min-w-[100px] text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {personCount} Person{personCount > 1 ? 'en' : ''}
                  </span>
                  <button
                    onClick={() => setPersonCount(Math.min(4, personCount + 1) as 1 | 2 | 3 | 4)}
                    disabled={personCount >= 4}
                    className={`p-2 rounded-lg transition-colors ${
                      personCount >= 4
                        ? darkMode ? 'bg-gray-700 text-gray-500' : 'bg-gray-200 text-gray-400'
                        : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={handleClearSelections}
                    disabled={!hasSelections}
                    className={`px-4 py-2 rounded-xl font-medium transition-colors flex items-center gap-2 ${
                      hasSelections
                        ? 'bg-red-600 hover:bg-red-700 text-white shadow-md'
                        : darkMode ? 'bg-gray-700 text-gray-500' : 'bg-gray-200 text-gray-400'
                    }`}
                  >
                    <Trash2 className="w-4 h-4" />
                    Zurücksetzen
                  </button>
                  
                  <button
                    onClick={handleGeneratePrompts}
                    disabled={isGenerating}
                    className={`px-6 py-2 rounded-xl font-medium transition-all flex items-center gap-2 ${
                      isGenerating
                        ? darkMode ? 'bg-gray-700 text-gray-500' : 'bg-gray-200 text-gray-400'
                        : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md transform hover:scale-105'
                    }`}
                  >
                    {isGenerating ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Zap className="w-4 h-4" />
                    )}
                    {isGenerating ? 'Generiert...' : 'Prompts Generieren'}
                  </button>
                </div>
              </div>
            </div>

            {/* Section Navigation */}
            <div className="flex flex-wrap gap-2 mt-6">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 text-sm font-medium transform ${
                    activeSection === section.id
                      ? 'bg-blue-600 text-white shadow-md scale-105'
                      : darkMode 
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:scale-102' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-102'
                  }`}
                >
                  {section.icon}
                  {section.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          {/* Person Selectors */}
          <div className={`lg:col-span-4 grid gap-6 ${
            personCount === 1 ? 'grid-cols-1' :
            personCount === 2 ? 'grid-cols-1 md:grid-cols-2' :
            personCount === 3 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :
            'grid-cols-1 md:grid-cols-2 xl:grid-cols-4'
          }`}>
            {persons.map((person, index) => (
              <PersonSelector
                key={person.id}
                personNumber={index + 1}
                totalPersons={personCount}
                race={person.race}
                gender={person.gender}
                selections={person.selections}
                activeSection={activeSection}
                darkMode={darkMode}
                onRaceChange={(race) => handleUpdatePersonRace(index, race)}
                onGenderChange={(gender) => handleUpdatePersonGender(index, gender)}
                onToggleSelection={(categoryId, optionId) => 
                  handleTogglePersonSelection(index, categoryId, optionId)
                }
              />
            ))}
          </div>

          {/* Output & Presets */}
          <div className="lg:col-span-2 space-y-6">
            {/* Prompt Output */}
            <PromptOutput
              platform={selectedPlatform}
              generatedPrompts={generatedPrompts}
              darkMode={darkMode}
              onRegenerate={handleGeneratePrompts}
            />

            {/* Preset Manager */}
            <PresetManager
              presets={presets}
              darkMode={darkMode}
              onSavePreset={handleSavePreset}
              onLoadPreset={handleLoadPreset}
              onDeletePreset={handleDeletePreset}
            />
          </div>
        </div>

        {/* Footer */}
        <div className={`mt-12 text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          <p>© 2024 Photography Prompt Studio • Entwickelt für professionelle AI-Bildgenerierung</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoPromptStudio;