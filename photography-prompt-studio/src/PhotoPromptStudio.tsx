import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Camera, Moon, Sun, Trash2, Zap, Users, Plus, Minus, Settings, Download, Upload, RefreshCw } from 'lucide-react';

// Types
import { 
  PlatformType, 
  RaceType, 
  GenderType, 
  CategorySection,
  Preset, 
  PersonConfig,
  GeneratedPrompts,
  AppState,
  DEFAULT_APP_STATE,
  STORAGE_KEYS,
  LIMITS
} from './types';

// Utils & Constants
import { promptGenerator, PromptGenerationOptions } from './utils/promptGenerator';
import { getPlatformConfig, getSupportedPlatforms } from './constants/platforms';
import { categoriesBySection } from './categories';

// Components
import PersonSelector from './components/PersonSelector';
import PromptOutput from './components/PromptOutput';
import PresetManager from './components/PresetManager';

// Hauptkomponente
const PhotoPromptStudio: React.FC = () => {
  // Zentraler App-State
  const [appState, setAppState] = useState<AppState>(DEFAULT_APP_STATE);
  
  // Destructure für einfacheren Zugriff
  const {
    darkMode,
    activeSection,
    personCount,
    selectedPlatform,
    persons,
    generatedPrompts,
    isGenerating,
    presets,
    currentPresetName,
    settings
  } = appState;

  // Lokalen Speicher laden beim Start
  useEffect(() => {
    const loadFromStorage = () => {
      try {
        // Presets laden
        const savedPresets = localStorage.getItem(STORAGE_KEYS.PRESETS);
        if (savedPresets) {
          const parsedPresets = JSON.parse(savedPresets);
          setAppState(prev => ({ ...prev, presets: parsedPresets }));
        }

        // Theme laden
        const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
        if (savedTheme) {
          setAppState(prev => ({ ...prev, darkMode: savedTheme === 'dark' }));
        }

        // Einstellungen laden
        const savedSettings = localStorage.getItem(STORAGE_KEYS.SETTINGS);
        if (savedSettings) {
          const parsedSettings = JSON.parse(savedSettings);
          setAppState(prev => ({ 
            ...prev, 
            settings: { ...prev.settings, ...parsedSettings }
          }));
        }
      } catch (error) {
        console.error('Fehler beim Laden der Daten:', error);
      }
    };

    loadFromStorage();
  }, []);

  // Speichern bei Änderungen
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PRESETS, JSON.stringify(presets));
  }, [presets]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.THEME, darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  }, [settings]);

  // Memoized Values
  const supportedPlatforms = useMemo(() => getSupportedPlatforms(), []);
  const platformConfig = useMemo(() => getPlatformConfig(selectedPlatform), [selectedPlatform]);
  const availableSections = useMemo(() => Object.keys(categoriesBySection) as CategorySection[], []);

  // Event Handlers
  const handleToggleDarkMode = useCallback(() => {
    setAppState(prev => ({ ...prev, darkMode: !prev.darkMode }));
  }, []);

  const handleSetActiveSection = useCallback((section: CategorySection) => {
    setAppState(prev => ({ ...prev, activeSection: section }));
  }, []);

  const handleSetPersonCount = useCallback((count: 1 | 2 | 3 | 4) => {
    setAppState(prev => {
      const newPersons = [...prev.persons];
      
      // Personen hinzufügen oder entfernen
      while (newPersons.length < count) {
        const newPersonIndex = newPersons.length + 1;
        newPersons.push({
          id: `person${newPersonIndex}`,
          race: 'human',
          gender: 'woman',
          selections: {},
          isEnabled: true,
          weight: 1
        });
      }
      
      while (newPersons.length > count) {
        newPersons.pop();
      }

      return {
        ...prev,
        personCount: count,
        persons: newPersons
      };
    });
  }, []);

  const handleSetPlatform = useCallback((platform: PlatformType) => {
    setAppState(prev => ({ ...prev, selectedPlatform: platform }));
  }, []);

  const handleUpdatePersonRace = useCallback((personIndex: number, race: RaceType) => {
    setAppState(prev => {
      const newPersons = [...prev.persons];
      if (newPersons[personIndex]) {
        newPersons[personIndex] = { ...newPersons[personIndex], race };
      }
      return { ...prev, persons: newPersons };
    });
  }, []);

  const handleUpdatePersonGender = useCallback((personIndex: number, gender: GenderType) => {
    setAppState(prev => {
      const newPersons = [...prev.persons];
      if (newPersons[personIndex]) {
        newPersons[personIndex] = { ...newPersons[personIndex], gender };
      }
      return { ...prev, persons: newPersons };
    });
  }, []);

  const handleTogglePersonSelection = useCallback((personIndex: number, categoryId: string, optionId: string) => {
    setAppState(prev => {
      const newPersons = [...prev.persons];
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
      return { ...prev, persons: newPersons };
    });
  }, []);

  const handleGeneratePrompts = useCallback(async () => {
  setAppState(prev => ({ ...prev, isGenerating: true }));

	  try {
		const options: PromptGenerationOptions = {
		  platform: selectedPlatform,
		  personConfigs: persons,
		  includeQualityTags: true,
		  includePlatformSuffix: true,
		  removeConflicts: true,
		  optimizeForPlatform: true
		};

		const generated = promptGenerator.generatePrompts(options);

		setAppState(prev => ({
		  ...prev,
		  generatedPrompts: generated,
		  isGenerating: false
		}));
	  } catch (error) {
		console.error('Fehler bei der Prompt-Generierung:', error);
		setAppState(prev => ({ ...prev, isGenerating: false }));
	  }
	}, [selectedPlatform, persons]);

  const handleClearSelections = useCallback(() => {
    setAppState(prev => ({
      ...prev,
      persons: prev.persons.map(person => ({ ...person, selections: {} })),
      generatedPrompts: null
    }));
  }, []);

  const handleSavePreset = useCallback((name: string, tags: string[] = []) => {
    if (!name.trim()) return;

    const newPreset: Preset = {
      id: Date.now().toString(),
      name: name.trim(),
      selections: {
        person1: persons[0]?.selections || {}
      },
      metadata: {
        platform: selectedPlatform,
        personCount: personCount,
        races: persons.map(p => p.race),
        genders: persons.map(p => p.gender),
        tags,
        estimatedTokens: generatedPrompts?.metadata.tokenEstimate || 0
      },
      timestamp: Date.now()
    };

    // Zusätzliche Personen hinzufügen
    if (persons[1]) newPreset.selections.person2 = persons[1].selections;
    if (persons[2]) newPreset.selections.person3 = persons[2].selections;
    if (persons[3]) newPreset.selections.person4 = persons[3].selections;

    setAppState(prev => ({
      ...prev,
      presets: [newPreset, ...prev.presets].slice(0, LIMITS.MAX_PRESETS),
      currentPresetName: ''
    }));
  }, [persons, selectedPlatform, personCount, generatedPrompts]);

  const handleLoadPreset = useCallback((preset: Preset) => {
    const newPersonCount = Math.max(1, Math.min(4, Object.keys(preset.selections).length)) as 1 | 2 | 3 | 4;
    
    const newPersons: PersonConfig[] = [];
    
    // Personen aus Preset laden
    Object.entries(preset.selections).forEach(([personKey, selections], index) => {
      const personIndex = index;
      newPersons.push({
        id: `person${personIndex + 1}`,
        race: preset.metadata?.races[personIndex] || 'human',
        gender: preset.metadata?.genders[personIndex] || 'woman',
        selections: selections || {},
        isEnabled: true,
        weight: 1
      });
    });

    setAppState(prev => ({
      ...prev,
      personCount: newPersonCount,
      persons: newPersons,
      selectedPlatform: preset.metadata?.platform || prev.selectedPlatform,
      generatedPrompts: null
    }));
  }, []);

  const handleDeletePreset = useCallback((presetId: string) => {
    setAppState(prev => ({
      ...prev,
      presets: prev.presets.filter(p => p.id !== presetId)
    }));
  }, []);

  const handleUpdatePresetName = useCallback((name: string) => {
    if (name.length <= LIMITS.MAX_PRESET_NAME_LENGTH) {
      setAppState(prev => ({ ...prev, currentPresetName: name }));
    }
  }, []);

  const handleExportPresets = useCallback(() => {
    const dataStr = JSON.stringify(presets, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = `photo-prompts-presets-${new Date().toISOString().slice(0, 10)}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  }, [presets]);

  const handleImportPresets = useCallback((importedPresets: Preset[]) => {
    const validPresets = importedPresets.filter(preset => 
      preset.id && preset.name && preset.selections && preset.timestamp
    );
    
    if (validPresets.length > 0) {
      setAppState(prev => ({
        ...prev,
        presets: [...validPresets, ...prev.presets].slice(0, LIMITS.MAX_PRESETS)
      }));
    }
  }, []);

  // Section Navigation
  const sections = [
    { id: 'person' as CategorySection, name: 'Person', icon: <Users className="w-4 h-4" /> },
    { id: 'clothing' as CategorySection, name: 'Kleidung', icon: <Settings className="w-4 h-4" /> },
    { id: 'accessories' as CategorySection, name: 'Accessoires', icon: <Settings className="w-4 h-4" /> },
    { id: 'hair_makeup' as CategorySection, name: 'Haare & Makeup', icon: <Settings className="w-4 h-4" /> },
    { id: 'poses' as CategorySection, name: 'Posen', icon: <Users className="w-4 h-4" /> },
    { id: 'emotion' as CategorySection, name: 'Emotion', icon: <Settings className="w-4 h-4" /> },
    { id: 'interaction' as CategorySection, name: 'Interaktion', icon: <Users className="w-4 h-4" /> },
    { id: 'environment' as CategorySection, name: 'Umgebung', icon: <Settings className="w-4 h-4" /> },
    { id: 'lighting' as CategorySection, name: 'Beleuchtung', icon: <Settings className="w-4 h-4" /> },
    { id: 'mood' as CategorySection, name: 'Stimmung', icon: <Settings className="w-4 h-4" /> },
    { id: 'additional' as CategorySection, name: 'Details', icon: <Settings className="w-4 h-4" /> }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'dark bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-[100vw] mx-auto p-4">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-xl ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } shadow-sm`}>
              <Camera className={`w-8 h-8 ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`} />
            </div>
            <div>
              <h1 className={`text-3xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Photography Prompt Studio
              </h1>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                v2.1 Enhanced - Professionelle KI-Prompts mit erweiterten Features
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={handleToggleDarkMode}
              className={`p-2 rounded-lg transition-colors ${
                darkMode 
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              } shadow-sm`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Export/Import */}
            <button
              onClick={handleExportPresets}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                darkMode 
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } shadow-sm`}
            >
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </header>

        {/* Controls */}
        <div className={`rounded-xl border p-6 mb-6 ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200 shadow-sm'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
            {/* Person Count */}
            <div>
              <label className={`block text-sm font-medium mb-3 ${
                darkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                Anzahl Personen
              </label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleSetPersonCount(Math.max(1, personCount - 1) as 1 | 2 | 3 | 4)}
                  disabled={personCount <= 1}
                  className={`p-2 rounded-lg transition-colors ${
                    personCount <= 1
                      ? darkMode ? 'bg-gray-700 text-gray-500' : 'bg-gray-200 text-gray-400'
                      : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  <Minus className="w-4 h-4" />
                </button>
                
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map(count => (
                    <button
                      key={count}
                      onClick={() => handleSetPersonCount(count as 1 | 2 | 3 | 4)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        personCount === count
                          ? 'bg-blue-600 text-white shadow-md'
                          : darkMode 
                            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {count}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => handleSetPersonCount(Math.min(4, personCount + 1) as 1 | 2 | 3 | 4)}
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
            </div>

            {/* Platform Selection */}
            <div>
              <label className={`block text-sm font-medium mb-3 ${
                darkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                Platform
              </label>
              <select
                value={selectedPlatform}
                onChange={(e) => handleSetPlatform(e.target.value as PlatformType)}
                className={`w-full px-4 py-2 rounded-lg border text-sm ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              >
                {supportedPlatforms.map(platform => {
                  const config = getPlatformConfig(platform);
                  return (
                    <option key={platform} value={platform}>
                      {config.name}
                    </option>
                  );
                })}
              </select>
            </div>

            {/* Actions */}
            <div className="lg:col-span-2">
              <label className={`block text-sm font-medium mb-3 ${
                darkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                Aktionen
              </label>
              <div className="flex gap-2">
                <button
                  onClick={handleClearSelections}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    darkMode 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <Trash2 className="w-4 h-4" />
                  Zurücksetzen
                </button>
                
                <button
                  onClick={handleGeneratePrompts}
                  disabled={isGenerating}
                  className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isGenerating
                      ? darkMode ? 'bg-gray-700 text-gray-500' : 'bg-gray-200 text-gray-400'
                      : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md'
                  }`}
                >
                  {isGenerating ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <Zap className="w-4 h-4" />
                  )}
                  {isGenerating ? 'Generiert...' : 'Prompts Generieren'}
                </button>
              </div>
            </div>
          </div>

          {/* Section Navigation */}
          <div className="flex flex-wrap gap-2">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => handleSetActiveSection(section.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 text-sm font-medium ${
                  activeSection === section.id
                    ? 'bg-blue-600 text-white shadow-md scale-105'
                    : darkMode 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:scale-102' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-102'
                } transform`}
              >
                {section.icon}
                {section.name}
              </button>
            ))}
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
              currentPresetName={currentPresetName}
              darkMode={darkMode}
              onSavePreset={handleSavePreset}
              onLoadPreset={handleLoadPreset}
              onDeletePreset={handleDeletePreset}
              onPresetNameChange={handleUpdatePresetName}
              onExportPresets={handleExportPresets}
              onImportPresets={handleImportPresets}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoPromptStudio;