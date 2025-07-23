import React from 'react';
import { Eye, User } from 'lucide-react';
import { RaceType, GenderType, CategorySection, RACES, GENDERS } from '../types';
import { categoriesBySection } from '../categories/allCategories';

interface PersonSelectorProps {
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
}

const PersonSelector: React.FC<PersonSelectorProps> = ({
  personNumber,
  race,
  gender,
  selections,
  activeSection,
  darkMode,
  onRaceChange,
  onGenderChange,
  onToggleSelection
}) => {
  const sectionCategories = categoriesBySection[activeSection] || [];

  return (
    <div className={`rounded-xl border transition-colors ${
      darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    }`}>
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
            darkMode ? 'bg-blue-600' : 'bg-blue-600'
          } text-white text-sm font-medium`}>
            {personNumber}
          </div>
          <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Person {personNumber}
          </h3>
        </div>

        {/* Rasse und Geschlecht */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              Rasse
            </label>
            <select
              value={race}
              onChange={(e) => onRaceChange(e.target.value as RaceType)}
              className={`w-full px-3 py-2 rounded-lg border transition-colors ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-white border-gray-300 text-gray-900'
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            >
              {RACES.map(raceOption => (
                <option key={raceOption.id} value={raceOption.id}>
                  {raceOption.label}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              Geschlecht
            </label>
            <select
              value={gender}
              onChange={(e) => onGenderChange(e.target.value as GenderType)}
              className={`w-full px-3 py-2 rounded-lg border transition-colors ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-white border-gray-300 text-gray-900'
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            >
              {GENDERS.map(genderOption => (
                <option key={genderOption.id} value={genderOption.id}>
                  {genderOption.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Kategorien für aktive Sektion */}
        <div className="space-y-6">
          {sectionCategories.length === 0 ? (
            <div className={`text-center py-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center ${
                darkMode ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                <User className={`w-6 h-6 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              </div>
              <p className="text-sm">Keine Kategorien in dieser Sektion verfügbar</p>
              <p className="text-xs mt-1 opacity-75">Sektion: {activeSection}</p>
            </div>
          ) : (
            sectionCategories.map(category => {
              // Geschlechtsspezifische Kategorien filtern
              if (category.genderSpecific && !category.genderSpecific.includes(gender)) {
                return null;
              }
              
              // Geschlechtsspezifische Optionen filtern
              const visibleOptions = category.options.filter(option => {
                if (option.genderSpecific && !option.genderSpecific.includes(gender)) {
                  return false;
                }
                return true;
              });

              if (visibleOptions.length === 0) {
                return null;
              }
              
              return (
                <div key={category.id}>
                  <div className="flex items-center gap-2 mb-3">
                    {category.icon}
                    <label className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                      {category.name}
                    </label>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {visibleOptions.length}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {visibleOptions.map(option => {
                      const isSelected = (selections[category.id] || []).includes(option.id);
                      return (
                        <button
                          key={option.id}
                          onClick={() => onToggleSelection(category.id, option.id)}
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                            isSelected
                              ? 'bg-blue-600 text-white shadow-md scale-105'
                              : darkMode
                                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          } transform`}
                          title={option.description}
                        >
                          {option.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Selection Summary */}
        {Object.keys(selections).length > 0 && (
          <div className={`mt-6 pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex items-center gap-2 mb-2">
              <Eye className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
              <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Auswahl Zusammenfassung
              </span>
            </div>
            <div className="text-xs space-y-1">
              {Object.entries(selections).map(([categoryId, optionIds]) => {
                if (optionIds.length === 0) return null;
                const category = sectionCategories.find(cat => cat.id === categoryId);
                if (!category) return null;
                
                return (
                  <div key={categoryId} className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <span className="font-medium">{category.name}:</span> {optionIds.length} ausgewählt
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonSelector;