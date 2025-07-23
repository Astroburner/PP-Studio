import React, { useCallback, useState } from 'react';
import { Copy, Eye, BarChart3, CheckCircle, RefreshCw, Download, TrendingUp } from 'lucide-react';
import { PlatformType, GeneratedPrompts, PLATFORMS } from '../types';

interface PromptOutputProps {
  platform: PlatformType;
  generatedPrompts: GeneratedPrompts | null;
  darkMode: boolean;
  onRegenerate: () => void;
}

const PromptOutput: React.FC<PromptOutputProps> = ({
  platform,
  generatedPrompts,
  darkMode,
  onRegenerate
}) => {
  const [copiedType, setCopiedType] = useState<'positive' | 'negative' | null>(null);
  const [showAnalysis, setShowAnalysis] = useState(false);

  const copyToClipboard = useCallback(async (text: string, type: 'positive' | 'negative') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
      // Fallback für ältere Browser
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2000);
    }
  }, []);

  const downloadPrompt = useCallback((text: string, filename: string) => {
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, []);

  const platformConfig = PLATFORMS[platform];

  if (!generatedPrompts) {
    return (
      <div className={`rounded-xl border transition-colors ${
        darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      }`}>
        <div className="p-6">
          <div className="text-center py-12">
            <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
              darkMode ? 'bg-gray-700' : 'bg-gray-100'
            }`}>
              <BarChart3 className={`w-8 h-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            </div>
            <h3 className={`text-lg font-medium mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>
              Keine Prompts generiert
            </h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Wählen Sie Optionen aus und klicken Sie auf "Prompts Generieren"
            </p>
          </div>
        </div>
      </div>
    );
  }

  const { positive, negative, metadata } = generatedPrompts;

  return (
    <div className={`rounded-xl border transition-colors ${
      darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    }`}>
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Generierte Prompts
            </h2>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {platformConfig.name} • {metadata.personCount} Person{metadata.personCount > 1 ? 'en' : ''}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowAnalysis(!showAnalysis)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                showAnalysis
                  ? 'bg-blue-600 text-white'
                  : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              title="Analyse anzeigen"
            >
              <TrendingUp className="w-4 h-4" />
              Analyse
            </button>
            <button
              onClick={onRegenerate}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              title="Neu generieren"
            >
              <RefreshCw className="w-4 h-4" />
              Regenerieren
            </button>
          </div>
        </div>

        {/* Analysis Panel */}
        {showAnalysis && (
          <div className={`mb-6 p-4 rounded-lg border ${
            darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
          }`}>
            <h3 className={`text-sm font-medium mb-3 flex items-center gap-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              <BarChart3 className="w-4 h-4" />
              Prompt-Analyse
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
              <div className="text-center">
                <div className={`text-2xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-1`}>
                  {metadata.estimatedLength}
                </div>
                <div className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Zeichen</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${darkMode ? 'text-green-400' : 'text-green-600'} mb-1`}>
                  {metadata.tokenEstimate}
                </div>
                <div className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Tokens (ca.)</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'} mb-1`}>
                  {metadata.totalOptions}
                </div>
                <div className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Optionen</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${darkMode ? 'text-orange-400' : 'text-orange-600'} mb-1`}>
                  {platformConfig.name}
                </div>
                <div className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Platform</div>
              </div>
            </div>
            
            {/* Generation Time */}
            <div className={`mt-3 pt-3 border-t ${darkMode ? 'border-gray-600' : 'border-gray-200'} text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Generiert am: {new Date(metadata.generatedAt).toLocaleString('de-DE')}
            </div>
          </div>
        )}

        {/* Positive Prompt */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className={`text-md font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Positive Prompt
            </h3>
            <div className="flex gap-2">
              <button
                onClick={() => downloadPrompt(positive, `positive-prompt-${platform}-${Date.now()}.txt`)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                  darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                title="Als Datei herunterladen"
              >
                <Download className="w-4 h-4" />
              </button>
              <button
                onClick={() => copyToClipboard(positive, 'positive')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                  copiedType === 'positive'
                    ? 'bg-green-600 text-white'
                    : darkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {copiedType === 'positive' ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Kopiert!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Kopieren
                  </>
                )}
              </button>
            </div>
          </div>
          <div className={`p-4 rounded-lg border ${
            darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
          }`}>
            <p className={`text-sm font-mono leading-relaxed ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
              {positive}
            </p>
          </div>
        </div>

        {/* Negative Prompt */}
        {negative && (
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className={`text-md font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Negative Prompt
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() => downloadPrompt(negative, `negative-prompt-${platform}-${Date.now()}.txt`)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                    darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  title="Als Datei herunterladen"
                >
                  <Download className="w-4 h-4" />
                </button>
                <button
                  onClick={() => copyToClipboard(negative, 'negative')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                    copiedType === 'negative'
                      ? 'bg-green-600 text-white'
                      : darkMode ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-red-600 text-white hover:bg-red-700'
                  }`}
                >
                  {copiedType === 'negative' ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Kopiert!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Kopieren
                    </>
                  )}
                </button>
              </div>
            </div>
            <div className={`p-4 rounded-lg border ${
              darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
            }`}>
              <p className={`text-sm font-mono leading-relaxed ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                {negative}
              </p>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className={`mt-6 pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} flex justify-between items-center`}>
          <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Prompt-Qualität: {metadata.totalOptions > 10 ? 'Hoch' : metadata.totalOptions > 5 ? 'Mittel' : 'Basis'}
          </div>
          <button
            onClick={() => {
              copyToClipboard(`${positive}\n\nNegative: ${negative}`, 'positive');
            }}
            className={`text-xs px-3 py-1.5 rounded-lg transition-colors ${
              darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Beide kopieren
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromptOutput;