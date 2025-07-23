import { Settings } from 'lucide-react';
import { Category } from '../types';

export const additionalDetailsCategory: Category = {
  id: 'additional',
  name: 'Zusätzliche Details',
  icon: 'Settings',
  section: 'additional',
  options: [
    { id: 'film_grain', label: 'Filmkörnung', value: 'subtle film grain', description: 'Subtile analoge Filmkörnung' },
    { id: 'bokeh', label: 'Bokeh', value: 'beautiful bokeh background', description: 'Ästhetische Unschärfe' },
    { id: 'depth_field', label: 'Tiefenschärfe', value: 'shallow depth of field', description: 'Geringe Tiefenschärfe' },
    { id: 'lens_flare', label: 'Lens Flare', value: 'artistic lens flare', description: 'Künstlerische Lens Flares' },
    { id: 'reflection', label: 'Spiegelung', value: 'reflection in water', description: 'Spiegelung im Wasser' },
    { id: 'shadows', label: 'Schatten', value: 'dramatic shadows', description: 'Dramatische Schattenspiele' },
    { id: 'texture', label: 'Texturen', value: 'rich textures', description: 'Reiche Oberflächentexturen' },
    { id: 'vintage_effect', label: 'Vintage Effekt', value: 'vintage film aesthetic', description: 'Vintage-Film-Ästhetik' },
    { id: 'particles', label: 'Partikel', value: 'floating particles', description: 'Schwebende Partikel' },
    { id: 'mist', label: 'Nebel', value: 'ethereal mist', description: 'Mystischer Nebel' },
    { id: 'sparkles', label: 'Funkel', value: 'magical sparkles', description: 'Magisches Funkeln' },
    { id: 'rain', label: 'Regen', value: 'dramatic rain', description: 'Dramatischer Regen' },
    { id: 'smoke', label: 'Rauch', value: 'atmospheric smoke', description: 'Atmosphärischer Rauch' },
    { id: 'wind', label: 'Wind', value: 'wind-blown hair', description: 'Vom Wind verwehte Haare' },
    { id: 'motion_blur', label: 'Bewegungsunschärfe', value: 'motion blur', description: 'Künstlerische Bewegungsunschärfe' },
    { id: 'vignette', label: 'Vignette', value: 'subtle vignette', description: 'Sanfte Randabdunklung' },
    { id: 'chromatic', label: 'Chromatisch', value: 'chromatic aberration', description: 'Chromatische Aberration' },
    { id: 'double_exposure', label: 'Doppelbelichtung', value: 'double exposure effect', description: 'Doppelbelichtungs-Effekt' }
  ]
};