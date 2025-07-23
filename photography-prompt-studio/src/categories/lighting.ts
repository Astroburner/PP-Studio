import { Lightbulb } from 'lucide-react';
import { Category } from '../types';

export const lightingCategory: Category = {
  id: 'lighting',
  name: 'Beleuchtung',
  icon: 'Lightbulb',
  section: 'lighting',
  options: [
    { id: 'golden_hour', label: 'Golden Hour', value: 'golden hour lighting', description: 'Warmes, goldenes Licht' },
    { id: 'dramatic', label: 'Dramatisch', value: 'dramatic chiaroscuro lighting', description: 'Starke Hell-Dunkel-Kontraste' },
    { id: 'soft_natural', label: 'Weiches Tageslicht', value: 'soft natural lighting', description: 'Sanftes, natürliches Licht' },
    { id: 'studio_beauty', label: 'Studio Beauty', value: 'professional beauty lighting', description: 'Professionelle Beauty-Beleuchtung' },
    { id: 'rim_light', label: 'Randlicht', value: 'rim lighting', description: 'Konturenbetonende Beleuchtung' },
    { id: 'window_light', label: 'Fensterlicht', value: 'window light', description: 'Natürliches Fensterlicht' },
    { id: 'candlelight', label: 'Kerzenlicht', value: 'warm candlelight', description: 'Romantisches Kerzenlicht' },
    { id: 'neon', label: 'Neon', value: 'colorful neon lighting', description: 'Farbige Neonbeleuchtung' },
    { id: 'moonlight', label: 'Mondlicht', value: 'ethereal moonlight', description: 'Mystisches Mondlicht' },
    { id: 'fire_light', label: 'Feuerlicht', value: 'warm firelight', description: 'Warmes Feuerlicht' },
    { id: 'backlight', label: 'Gegenlicht', value: 'dramatic backlight', description: 'Dramatisches Gegenlicht' },
    { id: 'side_light', label: 'Seitenlicht', value: 'side lighting', description: 'Seitlich einfallendes Licht' },
    { id: 'top_light', label: 'Oberlicht', value: 'top lighting', description: 'Von oben einfallendes Licht' },
    { id: 'colored_gels', label: 'Farbfilter', value: 'colored gel lighting', description: 'Farbige Lichtfilter' },
    { id: 'strobe', label: 'Stroboskop', value: 'strobe lighting', description: 'Stroboskop-Beleuchtung' },
    { id: 'twilight', label: 'Dämmerung', value: 'twilight lighting', description: 'Dämmerungslicht' },
    { id: 'spotlight', label: 'Scheinwerfer', value: 'dramatic spotlight', description: 'Dramatischer Scheinwerfer' },
    { id: 'underwater', label: 'Unterwasser', value: 'underwater lighting', description: 'Unterwasser-Beleuchtung' }
  ]
};