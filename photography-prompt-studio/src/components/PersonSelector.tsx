import React from 'react';
import { User, Palette } from 'lucide-react';
import { RaceType, GenderType } from '../types';
import { allCategories } from '../categories';

interface PersonSelectorProps {
  personNumber: number;
  totalPersons: number;
  race: RaceType;
  gender: GenderType;
  selections: Record<string, string[]>;
  activeSection: string;
  darkMode: boolean;
  onRaceChange: (race: RaceType) => void;
  onGenderChange: (gender: GenderType) => void;
  onToggleSelection: (categoryId: string, optionId: string) => void;
}

const races: Array<{id: RaceType, label: string}> = [
  { id: 'human', label: 'Mensch' },
  { id: 'elf', label: 'Elf' },
  { id: 'dwarf', label: 'Zwerg' },
  { id: 'orc', label: 'Ork' },
  { id: 'halfling', label: 'Halbling' },
  { id: 'tiefling', label: 'Tiefling' },
  { id: 'dragonborn', label: 'Drachenblut' },
  { id: 'fairy', label: 'Fee' },
  { id: 'vampire', label: 'Vampir' },
  { id: 'werewolf', label: 'Werwolf' },
  { id: 'centaur', label: 'Zentaur' },
  { id: 'satyr', label: 'Satyr' },
  { id: 'nymph', label: 'Nymphe' },
  { id: 'angel', label: 'Engel' },
  { id: 'demon', label: 'Dämon' },
  { id: 'elemental', label: 'Elementar' },
  { id: 'shapeshifter', label: 'Gestaltwandler' },
  { id: 'nephilim', label: 'Nephilim' },
  { id: 'demigod', label: 'Halbgott' },
  { id: 'ghost', label: 'Geist' },
  { id: 'banshee', label: 'Banshee' },
  { id: 'succubus', label: 'Succubus' },
  { id: 'incubus', label: 'Incubus' },
  { id: 'djinn', label: 'Dschinn' }
];

const genders: Array<{id: GenderType, label: string, color: string}> = [
  { id: 'woman', label: 'Frau', color: 'pink' },
  { id: 'man', label: 'Mann', color: 'blue' },
  { id: 'non_binary', label: 'Divers', color: 'green' }
];

const PersonSelector: React.FC<PersonSelectorProps> = ({
  personNumber,
  totalPersons,
  race,
  gender,
  selections,
  activeSection,
  darkMode,
  onRaceChange,
  onGenderChange,
  onToggleSelection
}) => {
  const getVisibleCategories = () => {
    return allCategories.filter(cat => {
      // Sektion filtern
      if (cat.section !== activeSection) return false;
      
      // Gender-spezifische Kategorien
      if (cat.genderSpecific && !cat.genderSpecific.includes(gender)) {
        return false;
      }
      
      // Interaktionen nur bei mehreren Personen
      if (cat.section === 'interaction' && totalPersons === 1) {
        return false;
      }
      
      return true;
    });
  };

  const getGenderButtonClass = (genderId: GenderType) => {
    const isSelected = gender === genderId;
    const genderInfo = genders.find(g => g.id === genderId);
    
    if (isSelected) {
      switch (genderInfo?.color) {
        case 'pink': return 'bg-pink-600 text-white';
        case 'blue': return 'bg-blue-600 text-white';
        case 'green': return 'bg-green-600 text-white';
        default: return 'bg-gray-600 text-white';
      }
    }
    
    return darkMode 
      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
      : 'bg-gray-200 text-gray-600 hover:bg-gray-300';
  };

  const getSelectedCount = () => {
    return Object.values(selections).reduce((total, categorySelections) => 
      total + categorySelections.length, 0
    );
  };

  return (
    <div className="w-full">
      <div className={`rounded-xl border p-6 transition-colors ${
        darkMode 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-200 shadow-sm'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${
              darkMode ? 'bg-gray-700' : 'bg-gray-100'
            }`}>
              <User className={`w-5 h-5 ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`} />
            </div>
            <div>
              <h2 className={`text-lg font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {totalPersons === 1 ? 'Person' : `Person ${personNumber}`}
              </h2>
              {getSelectedCount() > 0 && (
                <p className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {getSelectedCount()} Eigenschaften ausgewählt
                </p>
              )}
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="flex items-center gap-2">
            <Palette className={`w-4 h-4 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`} />
            <span className={`text-sm font-medium ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {race === 'human' ? 'Mensch' : races.find(r => r.id === race)?.label}
            </span>
          </div>
        </div>

        {/* Rasse Auswahl */}
        <div className="mb-6">
          <label className={`block text-sm font-medium mb-3 ${
            darkMode ? 'text-gray-200' : 'text-gray-700'
          }`}>
            Rasse wählen
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {races.map(r => (
              <button
                key={r.id}
                onClick={() => onRaceChange(r.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  race === r.id
                    ? 'bg-purple-600 text-white shadow-md scale-105'
                    : darkMode 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:scale-102' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-102'
                } transform hover:shadow-sm`}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>

        {/* Geschlecht Auswahl */}
        <div className="mb-6">
          <label className={`block text-sm font-medium mb-3 ${
            darkMode ? 'text-gray-200' : 'text-gray-700'
          }`}>
            Geschlecht wählen
          </label>
          <div className="grid grid-cols-3 gap-2">
            {genders.map(g => (
              <button
                key={g.id}
                onClick={() => onGenderChange(g.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-102 ${
                  getGenderButtonClass(g.id)
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>

        {/* Kategorien */}
        <div className="space-y-6 max-h-[calc(100vh-400px)] overflow-y-auto custom-scrollbar">
          {getVisibleCategories().map(category => {
            const selectedCount = (selections[category.id] || []).length;
            
            return (
              <div key={category.id} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {category.icon}
                    <h3 className={`font-semibold text-base ${
                      darkMode ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      {category.name}
                    </h3>
                    {selectedCount > 0 && (
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        darkMode 
                          ? 'bg-blue-900 text-blue-200' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {selectedCount}
                      </span>
                    )}
                  </div>
                  
                  {category.description && (
                    <div className="relative group">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center text-xs ${
                        darkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-600'
                      }`}>
                        ?
                      </div>
                      <div className={`absolute right-0 top-6 w-64 p-2 rounded-lg text-xs opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 ${
                        darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-800 text-white'
                      }`}>
                        {category.description}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {category.options.map(option => {
                    const isSelected = (selections[category.id] || []).includes(option.id);
                    
                    return (
                      <button
                        key={option.id}
                        onClick={() => onToggleSelection(category.id, option.id)}
                        className={`p-3 rounded-lg text-sm text-left transition-all duration-200 transform hover:scale-102 ${
                          isSelected
                            ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-102'
                            : darkMode 
                              ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:shadow-md' 
                              : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow-md border border-gray-200'
                        }`}
                        title={option.description}
                      >
                        <div className="font-medium">{option.label}</div>
                        {option.description && (
                          <div className={`text-xs mt-1 opacity-80 ${
                            isSelected ? 'text-blue-100' : darkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            {option.description}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
          
          {getVisibleCategories().length === 0 && (
            <div className={`text-center py-12 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              <User className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium mb-2">Keine Kategorien verfügbar</p>
              <p className="text-sm">
                Für "{activeSection}" und das gewählte Geschlecht gibt es keine verfügbaren Optionen.
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* Custom Scrollbar Styles */}
		<style>{`
		  .custom-scrollbar::-webkit-scrollbar {
			width: 6px;
		  }
		  .custom-scrollbar::-webkit-scrollbar-track {
			background: transparent;
		  }
		  .custom-scrollbar::-webkit-scrollbar-thumb {
			background: #cbd5e0;
			border-radius: 3px;
		  }
		  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
			background: #a0aec0;
		  }
		  .dark .custom-scrollbar::-webkit-scrollbar-thumb {
			background: #4a5568;
		  }
		  .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
			background: #2d3748;
		  }
		`}</style>
    </div>
  );
};

export default PersonSelector;