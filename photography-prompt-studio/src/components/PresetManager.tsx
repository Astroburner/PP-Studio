import React, { useState, useEffect, useMemo } from 'react';
import { Save, Trash2, Download, Upload, Search, Filter, Tag, Calendar, User, Users, Eye, EyeOff, Star, MoreVertical, Copy, Edit3 } from 'lucide-react';
import { Preset } from '../types';

interface PresetManagerProps {
  presets: Preset[];
  currentPresetName: string;
  darkMode: boolean;
  onSavePreset: (name: string, tags?: string[]) => void;
  onLoadPreset: (preset: Preset) => void;
  onDeletePreset: (presetId: string) => void;
  onPresetNameChange: (name: string) => void;
  onExportPresets?: () => void;
  onImportPresets?: (presets: Preset[]) => void;
}

interface PresetWithMeta extends Preset {
  personCount: number;
  selectionCount: number;
  tags: string[];
  isFavorite: boolean;
  lastUsed?: number;
}

const PresetManager: React.FC<PresetManagerProps> = ({
  presets,
  currentPresetName,
  darkMode,
  onSavePreset,
  onLoadPreset,
  onDeletePreset,
  onPresetNameChange,
  onExportPresets,
  onImportPresets
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterBy, setFilterBy] = useState<'all' | 'recent' | 'favorites' | 'single' | 'multi'>('all');
  const [showPreview, setShowPreview] = useState<string | null>(null);
  const [isEditingName, setIsEditingName] = useState<string | null>(null);
  const [editingName, setEditingName] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [newPresetTags, setNewPresetTags] = useState<string[]>([]);
  const [showTagInput, setShowTagInput] = useState(false);
  const [tagInput, setTagInput] = useState('');

  // Enhanced presets mit Meta-Informationen
  const enhancedPresets: PresetWithMeta[] = useMemo(() => {
    return presets.map(preset => {
      const personCount = Object.keys(preset.selections).length;
      const selectionCount = Object.values(preset.selections)
        .reduce((total, personSelections) => 
          total + Object.values(personSelections).reduce((sum, selections) => sum + selections.length, 0), 0
        );
      
      // Tags aus dem Namen extrahieren (z.B. "Elegant Portrait #elegant #portrait")
      const tagMatches = preset.name.match(/#\w+/g) || [];
      const tags = tagMatches.map(tag => tag.slice(1));
      
      return {
        ...preset,
        personCount,
        selectionCount,
        tags,
        isFavorite: false, // TODO: Implement favorites system
        lastUsed: undefined // TODO: Track usage
      };
    });
  }, [presets]);

  // Alle verfügbaren Tags sammeln
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    enhancedPresets.forEach(preset => {
      preset.tags.forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, [enhancedPresets]);

  // Gefilterte und durchsuchte Presets
  const filteredPresets = useMemo(() => {
    let filtered = enhancedPresets;

    // Nach Typ filtern
    if (filterBy === 'single') {
      filtered = filtered.filter(preset => preset.personCount === 1);
    } else if (filterBy === 'multi') {
      filtered = filtered.filter(preset => preset.personCount > 1);
    } else if (filterBy === 'favorites') {
      filtered = filtered.filter(preset => preset.isFavorite);
    } else if (filterBy === 'recent') {
      filtered = filtered.sort((a, b) => b.timestamp - a.timestamp).slice(0, 10);
    }

    // Nach Tags filtern
    if (selectedTags.length > 0) {
      filtered = filtered.filter(preset => 
        selectedTags.every(tag => preset.tags.includes(tag))
      );
    }

    // Nach Suchbegriff filtern
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(preset =>
        preset.name.toLowerCase().includes(query) ||
        preset.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return filtered.sort((a, b) => b.timestamp - a.timestamp);
  }, [enhancedPresets, filterBy, selectedTags, searchQuery]);

  const handleSavePreset = () => {
    if (!currentPresetName.trim()) return;
    onSavePreset(currentPresetName, newPresetTags);
    setNewPresetTags([]);
    setShowTagInput(false);
  };

  const handleEditName = (preset: PresetWithMeta) => {
    setIsEditingName(preset.id);
    setEditingName(preset.name);
  };

  const handleSaveEditedName = (presetId: string) => {
    // TODO: Implement preset name editing
    setIsEditingName(null);
    setEditingName('');
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !newPresetTags.includes(tagInput.trim())) {
      setNewPresetTags([...newPresetTags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setNewPresetTags(newPresetTags.filter(tag => tag !== tagToRemove));
  };

  const toggleTagFilter = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const exportPresetsAsJSON = () => {
    const dataStr = JSON.stringify(presets, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = `photo-prompts-presets-${new Date().toISOString().slice(0, 10)}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const importPresetsFromJSON = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedPresets = JSON.parse(e.target?.result as string);
          if (onImportPresets) {
            onImportPresets(importedPresets);
          }
        } catch (error) {
          alert('Fehler beim Importieren der Presets. Bitte überprüfen Sie das Dateiformat.');
        }
      };
      reader.readAsText(file);
    }
  };

  const getPresetPreview = (preset: PresetWithMeta) => {
    const person1Selections = Object.keys(preset.selections.person1).length;
    const totalSelections = preset.selectionCount;
    
    return {
      persons: preset.personCount,
      selections: totalSelections,
      mainCategories: Object.keys(preset.selections.person1).slice(0, 3)
    };
  };

  return (
    <div className={`rounded-xl border ${
      darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200 shadow-sm'
    }`}>
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Preset Manager
          </h2>
          <div className="flex items-center gap-2">
            <span className={`text-sm px-3 py-1 rounded-full ${
              darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
            }`}>
              {filteredPresets.length} Presets
            </span>
          </div>
        </div>

        {/* New Preset Section */}
        <div className={`p-4 rounded-lg border mb-6 ${
          darkMode ? 'bg-gray-750 border-gray-600' : 'bg-gray-50 border-gray-200'
        }`}>
          <h3 className={`font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Neues Preset speichern
          </h3>
          
          <div className="space-y-3">
            <input
              type="text"
              value={currentPresetName}
              onChange={(e) => onPresetNameChange(e.target.value)}
              placeholder="Preset Name eingeben..."
              className={`w-full px-3 py-2 rounded-lg border text-sm ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
            
            {/* Tags für neues Preset */}
            <div className="flex flex-wrap gap-2">
              {newPresetTags.map(tag => (
                <span
                  key={tag}
                  className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                    darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  #{tag}
                  <button
                    onClick={() => handleRemoveTag(tag)}
                    className="ml-1 hover:bg-black hover:bg-opacity-20 rounded-full p-0.5"
                  >
                    ×
                  </button>
                </span>
              ))}
              
              {showTagInput ? (
                <div className="flex items-center gap-1">
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
                    placeholder="Tag hinzufügen"
                    className={`px-2 py-1 rounded text-xs border ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:ring-1 focus:ring-blue-500`}
                    autoFocus
                  />
                  <button
                    onClick={handleAddTag}
                    className={`px-2 py-1 rounded text-xs ${
                      darkMode ? 'bg-green-600 text-white' : 'bg-green-500 text-white'
                    } hover:bg-opacity-80`}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      setShowTagInput(false);
                      setTagInput('');
                    }}
                    className={`px-2 py-1 rounded text-xs ${
                      darkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-400 text-white'
                    } hover:bg-opacity-80`}
                  >
                    ×
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowTagInput(true)}
                  className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs border border-dashed ${
                    darkMode 
                      ? 'border-gray-500 text-gray-400 hover:border-gray-400' 
                      : 'border-gray-300 text-gray-500 hover:border-gray-400'
                  }`}
                >
                  <Tag className="w-3 h-3" />
                  Tag hinzufügen
                </button>
              )}
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleSavePreset}
                disabled={!currentPresetName.trim()}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  !currentPresetName.trim()
                    ? darkMode ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700 text-white'
                }`}
              >
                <Save className="w-4 h-4" />
                Preset speichern
              </button>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          {/* Search */}
          <div className="relative flex-1">
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Presets durchsuchen..."
              className={`w-full pl-10 pr-4 py-2 rounded-lg border text-sm ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
          </div>

          {/* Filter */}
          <select
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value as any)}
            className={`px-4 py-2 rounded-lg border text-sm ${
              darkMode 
                ? 'bg-gray-700 border-gray-600 text-white' 
                : 'bg-white border-gray-300 text-gray-900'
            } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
          >
            <option value="all">Alle Presets</option>
            <option value="recent">Neueste</option>
            <option value="favorites">Favoriten</option>
            <option value="single">Einzelperson</option>
            <option value="multi">Mehrere Personen</option>
          </select>

          {/* Export/Import */}
          <div className="flex gap-2">
            <button
              onClick={exportPresetsAsJSON}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium ${
                darkMode 
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Download className="w-4 h-4" />
              Export
            </button>
            <label className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium cursor-pointer ${
              darkMode 
                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}>
              <Upload className="w-4 h-4" />
              Import
              <input
                type="file"
                accept=".json"
                onChange={importPresetsFromJSON}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Tag Filter */}
        {allTags.length > 0 && (
          <div className="mb-6">
            <div className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              Nach Tags filtern:
            </div>
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => toggleTagFilter(tag)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    selectedTags.includes(tag)
                      ? 'bg-blue-600 text-white'
                      : darkMode 
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  #{tag}
                </button>
              ))}
              {selectedTags.length > 0 && (
                <button
                  onClick={() => setSelectedTags([])}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    darkMode 
                      ? 'bg-red-700 text-red-200 hover:bg-red-600' 
                      : 'bg-red-100 text-red-600 hover:bg-red-200'
                  }`}
                >
                  Filter löschen
                </button>
              )}
            </div>
          </div>
        )}

        {/* Presets List */}
        <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
          {filteredPresets.length === 0 ? (
            <div className={`text-center py-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <Save className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium mb-2">Keine Presets gefunden</p>
              <p className="text-sm">
                {searchQuery || selectedTags.length > 0 
                  ? 'Versuchen Sie andere Suchbegriffe oder Filter.'
                  : 'Speichern Sie Ihr erstes Preset mit den Einstellungen oben.'
                }
              </p>
            </div>
          ) : (
            filteredPresets.map(preset => {
              const preview = getPresetPreview(preset);
              
              return (
                <div
                  key={preset.id}
                  className={`p-4 rounded-lg border transition-colors ${
                    darkMode 
                      ? 'bg-gray-750 border-gray-600 hover:border-gray-500' 
                      : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      {/* Preset Name */}
                      {isEditingName === preset.id ? (
                        <div className="flex items-center gap-2 mb-2">
                          <input
                            type="text"
                            value={editingName}
                            onChange={(e) => setEditingName(e.target.value)}
                            className={`flex-1 px-2 py-1 rounded border text-sm ${
                              darkMode 
                                ? 'bg-gray-700 border-gray-600 text-white' 
                                : 'bg-white border-gray-300 text-gray-900'
                            }`}
                          />
                          <button
                            onClick={() => handleSaveEditedName(preset.id)}
                            className="text-green-500 hover:text-green-600"
                          >
                            ✓
                          </button>
                          <button
                            onClick={() => setIsEditingName(null)}
                            className="text-red-500 hover:text-red-600"
                          >
                            ×
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className={`font-semibold text-base truncate ${
                            darkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            {preset.name}
                          </h3>
                          <button
                            onClick={() => handleEditName(preset)}
                            className={`opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-black hover:bg-opacity-10 ${
                              darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-600'
                            }`}
                          >
                            <Edit3 className="w-3 h-3" />
                          </button>
                        </div>
                      )}

                      {/* Preset Info */}
                      <div className="flex items-center gap-4 mb-2 text-sm">
                        <div className="flex items-center gap-1">
                          {preview.persons === 1 ? (
                            <User className="w-4 h-4" />
                          ) : (
                            <Users className="w-4 h-4" />
                          )}
                          <span>{preview.persons} Person{preview.persons > 1 ? 'en' : ''}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Tag className="w-4 h-4" />
                          <span>{preview.selections} Eigenschaften</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(preset.timestamp).toLocaleDateString()}</span>
                        </div>
                      </div>

                      {/* Tags */}
                      {preset.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-3">
                          {preset.tags.map(tag => (
                            <span
                              key={tag}
                              className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                                darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
                              }`}
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Preview */}
                      {showPreview === preset.id && (
                        <div className={`mt-3 p-3 rounded border text-xs ${
                          darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
                        }`}>
                          <div className="space-y-2">
                            {Object.entries(preset.selections).map(([personKey, selections]) => (
                              <div key={personKey}>
                                <div className={`font-medium mb-1 ${
                                  darkMode ? 'text-gray-200' : 'text-gray-700'
                                }`}>
                                  {personKey === 'person1' ? 'Person 1' : 
                                   personKey === 'person2' ? 'Person 2' :
                                   personKey === 'person3' ? 'Person 3' : 'Person 4'}:
                                </div>
                                <div className="space-y-1">
                                  {Object.entries(selections as Record<string, string[]>).map(([category, options]) => (
                                    <div key={category} className={`text-xs ${
                                      darkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                      {category}: {options.length} Optionen
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-1 ml-4">
                      <button
                        onClick={() => setShowPreview(showPreview === preset.id ? null : preset.id)}
                        className={`p-2 rounded-lg transition-colors ${
                          darkMode 
                            ? 'text-gray-400 hover:bg-gray-700 hover:text-gray-300' 
                            : 'text-gray-500 hover:bg-gray-200 hover:text-gray-600'
                        }`}
                        title="Vorschau anzeigen"
                      >
                        {showPreview === preset.id ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={() => onLoadPreset(preset)}
                        className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
                      >
                        Laden
                      </button>
                      <button
                        onClick={() => onDeletePreset(preset.id)}
                        className={`p-2 rounded-lg transition-colors ${
                          darkMode 
                            ? 'text-red-400 hover:bg-red-900 hover:text-red-300' 
                            : 'text-red-500 hover:bg-red-100 hover:text-red-600'
                        }`}
                        title="Preset löschen"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
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

export default PresetManager;