import React, { useState, useCallback } from 'react';
import { Plus, Save, Trash2, Download, Upload, Star, Clock, Search } from 'lucide-react';
import { Preset } from '../types';

interface PresetManagerProps {
  presets: Preset[];
  darkMode: boolean;
  onSavePreset: (name: string) => void;
  onLoadPreset: (preset: Preset) => void;
  onDeletePreset: (id: string) => void;
}

const PresetManager: React.FC<PresetManagerProps> = ({
  presets,
  darkMode,
  onSavePreset,
  onLoadPreset,
  onDeletePreset
}) => {
  const [newPresetName, setNewPresetName] = useState('');
  const [showPresets, setShowPresets] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = useCallback(async () => {
    if (!newPresetName.trim()) return;
    
    setIsLoading(true);
    try {
      await onSavePreset(newPresetName.trim());
      setNewPresetName('');
    } catch (error) {
      console.error('Fehler beim Speichern:', error);
    } finally {
      setIsLoading(false);
    }
  }, [newPresetName, onSavePreset]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSave();
    }
  }, [handleSave]);

  const handleExportPresets = useCallback(() => {
    const dataStr = JSON.stringify(presets, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `photography-prompts-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, [presets]);

  const handleImportPresets = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedPresets = JSON.parse(e.target?.result as string);
        if (Array.isArray(importedPresets)) {
          // Hier würdest du normalerweise eine Funktion zum Importieren aufrufen
          console.log('Presets importiert:', importedPresets);
        }
      } catch (error) {
        console.error('Fehler beim Importieren:', error);
        alert('Fehler beim Importieren der Datei. Bitte überprüfen Sie das Format.');
      }
    };
    reader.readAsText(file);
    event.target.value = ''; // Reset input
  }, []);

  // Filter presets based on search term
  const filteredPresets = presets.filter(preset =>
    preset.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedPresets = filteredPresets.sort((a, b) => b.timestamp - a.timestamp);

  return (
    <div className={`rounded-xl border transition-colors ${
      darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    }`}>
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Presets verwalten
          </h2>
          <div className="flex gap-2">
            <button
              onClick={handleExportPresets}
              disabled={presets.length === 0}
              className={`p-2 rounded-lg transition-colors ${
                presets.length === 0
                  ? darkMode ? 'bg-gray-700 text-gray-500' : 'bg-gray-200 text-gray-400'
                  : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              title="Presets exportieren"
            >
              <Download className="w-4 h-4" />
            </button>
            <label className={`p-2 rounded-lg transition-colors cursor-pointer ${
              darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`} title="Presets importieren">
              <Upload className="w-4 h-4" />
              <input
                type="file"
                accept=".json"
                onChange={handleImportPresets}
                className="hidden"
              />
            </label>
          </div>
        </div>
        
        {/* Save New Preset */}
        <div className="space-y-3 mb-6">
          <div className="flex gap-2">
            <div className="flex-1">
              <input
                type="text"
                value={newPresetName}
                onChange={(e) => setNewPresetName(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Preset-Name eingeben..."
                className={`w-full px-3 py-2 rounded-lg border transition-colors ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                maxLength={50}
              />
            </div>
            <button
              onClick={handleSave}
              disabled={!newPresetName.trim() || isLoading}
              className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                newPresetName.trim() && !isLoading
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : darkMode ? 'bg-gray-700 text-gray-500' : 'bg-gray-200 text-gray-400'
              }`}
            >
              <Save className="w-4 h-4" />
              {isLoading ? 'Speichert...' : 'Speichern'}
            </button>
          </div>
          
          {/* Character count */}
          <div className={`text-xs text-right ${
            newPresetName.length > 40 
              ? 'text-orange-500' 
              : darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            {newPresetName.length}/50 Zeichen
          </div>
        </div>

        {/* Preset List Toggle */}
        <button
          onClick={() => setShowPresets(!showPresets)}
          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
            darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <span className="flex items-center gap-2">
            <Star className="w-4 h-4" />
            Gespeicherte Presets ({presets.length})
          </span>
          <Plus className={`w-4 h-4 transform transition-transform ${showPresets ? 'rotate-45' : ''}`} />
        </button>

        {/* Preset List */}
        {showPresets && (
          <div className="mt-4 space-y-3">
            {/* Search */}
            {presets.length > 3 && (
              <div className="relative">
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Presets durchsuchen..."
                  className={`w-full pl-10 pr-3 py-2 rounded-lg border transition-colors ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                />
              </div>
            )}

            {/* Empty State */}
            {presets.length === 0 ? (
              <div className={`text-center py-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <Star className={`w-12 h-12 mx-auto mb-3 ${darkMode ? 'text-gray-600' : 'text-gray-300'}`} />
                <p className="text-sm">Noch keine Presets gespeichert</p>
                <p className="text-xs mt-1">Erstellen Sie Ihren ersten Prompt und speichern Sie ihn!</p>
              </div>
            ) : filteredPresets.length === 0 ? (
              <div className={`text-center py-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <Search className={`w-12 h-12 mx-auto mb-3 ${darkMode ? 'text-gray-600' : 'text-gray-300'}`} />
                <p className="text-sm">Keine Presets gefunden</p>
                <p className="text-xs mt-1">Versuchen Sie einen anderen Suchbegriff</p>
              </div>
            ) : (
              /* Preset Items */
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {sortedPresets.map(preset => {
                  const selectionCount = Object.values(preset.selections)
                    .reduce((total, personSelections) => {
                      return total + Object.values(personSelections)
                        .reduce((count, selections) => count + selections.length, 0);
                    }, 0);

                  return (
                    <div
                      key={preset.id}
                      className={`flex items-center justify-between p-3 rounded-lg border transition-colors ${
                        darkMode ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className={`font-medium truncate ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            {preset.name}
                          </h4>
                          {selectionCount > 0 && (
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              darkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800'
                            }`}>
                              {selectionCount}
                            </span>
                          )}
                        </div>
                        <div className={`flex items-center gap-2 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          <Clock className="w-3 h-3" />
                          {new Date(preset.timestamp).toLocaleString('de-DE', {
                            day: '2-digit',
                            month: '2-digit',
                            year: '2-digit',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </div>
                      </div>
                      <div className="flex gap-2 ml-3">
                        <button
                          onClick={() => onLoadPreset(preset)}
                          className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                            darkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-600 text-white hover:bg-blue-700'
                          }`}
                        >
                          Laden
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm(`Preset "${preset.name}" wirklich löschen?`)) {
                              onDeletePreset(preset.id);
                            }
                          }}
                          className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                            darkMode ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-red-600 text-white hover:bg-red-700'
                          }`}
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Statistics */}
        {presets.length > 0 && (
          <div className={`mt-4 pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <div className="flex justify-between">
              <span>Gesamte Presets: {presets.length}</span>
              <span>
                Neueste: {new Date(Math.max(...presets.map(p => p.timestamp))).toLocaleDateString('de-DE')}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PresetManager;