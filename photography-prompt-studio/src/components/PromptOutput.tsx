import React, { useCallback, useState } from 'react';
import { Copy, Eye, BarChart3, AlertTriangle, CheckCircle, Download, RefreshCw } from 'lucide-react';
import { PlatformType, GeneratedPrompts } from '../types';
import { getPlatformConfig } from '../constants/platforms';

interface PromptOutputProps {
  platform: PlatformType;
  generatedPrompts: GeneratedPrompts | null;
  darkMode: boolean;
  onRegenerate: () => void;
}

export const PromptOutput: React.FC<PromptOutputProps> = ({
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
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2000);
    }
  }, []);

  const downloadPrompt = useCallback((text: string, filename: string) => {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, []);

  const platformConfig = getPlatformConfig(platform);

  if (!generatedPrompts) {
    return (
      <div className={`rounded-xl border transition-colors ${
        darkMode 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-200'
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

  return (
    <div className={`rounded-xl border transition-colors ${
      darkMode 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-200'
    }`}>
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-600'
            }`}>
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <h2 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Generierte Prompts
              </h2>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {platformConfig.name} • {generatedPrompts.metadata.personCount} Person(en)
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowAnalysis(!showAnalysis)}
              className={`p-2 rounded-lg transition-colors ${
                showAnalysis
                  ? darkMode ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'
                  : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              title="Analyse anzeigen"
            >
              <BarChart3 className="w-4 h-4" />
            </button>
            
            <button
              onClick={onRegenerate}
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              title="Neu generieren"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Analysis Panel */}
        {showAnalysis && (
          <div className={`mb-6 p-4 rounded-lg border ${
            darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
          }`}>
            <h3 className={`text-sm font-medium mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              Prompt-Analyse
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
              <div>
                <div className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Zeichen</div>
                <div className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {generatedPrompts.metadata.estimatedLength}
                </div>
              </div>
              <div>
                <div className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Tokens (ca.)</div>
                <div className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {generatedPrompts.metadata.tokenEstimate}
                </div>
              </div>
              <div>
                <div className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Optionen</div>
                <div className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {generatedPrompts.metadata.totalOptions}
                </div>
              </div>
              <div>
                <div className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Platform</div>
                <div className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {platformConfig.name}
                </div>
              </div>
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
                onClick={() => copyToClipboard(generatedPrompts.positive, 'positive')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                  copiedType === 'positive'
                    ? darkMode ? 'bg-green-600 text-white' : 'bg-green-600 text-white'
                    : darkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {copiedType === 'positive' ? (
                  <>
                    <CheckCircle className="w-3 h-3" />
                    Kopiert!
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    Kopieren
                  </>
                )}
              </button>
              
              <button
                onClick={() => downloadPrompt(generatedPrompts.positive, `positive-prompt-${platform}.txt`)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                  darkMode ? 'bg-gray-600 text-white hover:bg-gray-700' : 'bg-gray-600 text-white hover:bg-gray-700'
                }`}
              >
                <Download className="w-3 h-3" />
                Download
              </button>
            </div>
          </div>
          
          <div className={`p-4 rounded-lg border max-h-48 overflow-y-auto custom-scrollbar ${
            darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
          }`}>
            <p className={`whitespace-pre-wrap text-sm leading-relaxed ${
              darkMode ? 'text-gray-200' : 'text-gray-700'
            }`}>
              {generatedPrompts.positive}
            </p>
          </div>
        </div>

        {/* Negative Prompt */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className={`text-md font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Negative Prompt
            </h3>
            <div className="flex gap-2">
              <button
                onClick={() => copyToClipboard(generatedPrompts.negative, 'negative')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                  copiedType === 'negative'
                    ? darkMode ? 'bg-green-600 text-white' : 'bg-green-600 text-white'
                    : darkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {copiedType === 'negative' ? (
                  <>
                    <CheckCircle className="w-3 h-3" />
                    Kopiert!
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    Kopieren
                  </>
                )}
              </button>
              
              <button
                onClick={() => downloadPrompt(generatedPrompts.negative, `negative-prompt-${platform}.txt`)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                  darkMode ? 'bg-gray-600 text-white hover:bg-gray-700' : 'bg-gray-600 text-white hover:bg-gray-700'
                }`}
              >
                <Download className="w-3 h-3" />
                Download
              </button>
            </div>
          </div>
          
          <div className={`p-4 rounded-lg border max-h-40 overflow-y-auto custom-scrollbar ${
            darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
          }`}>
            <p className={`whitespace-pre-wrap text-sm leading-relaxed ${
              darkMode ? 'text-gray-200' : 'text-gray-700'
            }`}>
              {generatedPrompts.negative}
            </p>
          </div>
        </div>

        {/* Platform-spezifische Tipps */}
        {platformConfig.tips && (
          <div className={`mt-6 p-4 rounded-lg border ${
            darkMode ? 'bg-blue-900/20 border-blue-700' : 'bg-blue-50 border-blue-200'
          }`}>
            <div className="flex items-start gap-3">
              <AlertTriangle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`} />
              <div>
                <h4 className={`text-xs font-medium mb-1 ${
                  darkMode ? 'text-blue-300' : 'text-blue-700'
                }`}>
                  {platformConfig.name} Tipps
                </h4>
                <ul className={`text-xs space-y-1 ${
                  darkMode ? 'text-blue-200' : 'text-blue-600'
                }`}>
                  {platformConfig.tips.map((tip: string, index: number) => (
                    <li key={index}>• {tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
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

export default PromptOutput;