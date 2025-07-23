import { Home } from 'lucide-react';
import { Category } from '../types';

export const environmentCategory: Category = {
  id: 'environment',
  name: 'Umgebung',
  icon: 'Home',
  section: 'environment',
  options: [
    { id: 'studio', label: 'Studio', value: 'professional photography studio', description: 'Professionelles Fotostudio' },
    { id: 'urban', label: 'Urban', value: 'urban cityscape', description: 'Städtische Umgebung' },
    { id: 'nature', label: 'Natur', value: 'natural outdoor setting', description: 'Natürliche Außenumgebung' },
    { id: 'beach', label: 'Strand', value: 'beach setting', description: 'Strand-Atmosphäre' },
    { id: 'forest', label: 'Wald', value: 'forest location', description: 'Waldliche Umgebung' },
    { id: 'rooftop', label: 'Dachterrasse', value: 'rooftop setting', description: 'Dachterrasse mit Aussicht' },
    { id: 'vintage_room', label: 'Vintage Raum', value: 'vintage interior', description: 'Retro-Innenraum' },
    { id: 'luxury_hotel', label: 'Luxushotel', value: 'luxury hotel suite', description: 'Elegante Hotelsuite' },
    { id: 'art_gallery', label: 'Kunstgalerie', value: 'modern art gallery', description: 'Moderne Kunstgalerie' },
    { id: 'industrial', label: 'Industrial', value: 'industrial setting', description: 'Industrielle Umgebung' },
    { id: 'castle', label: 'Schloss', value: 'medieval castle', description: 'Mittelalterliches Schloss' },
    { id: 'library', label: 'Bibliothek', value: 'grand library', description: 'Majestätische Bibliothek' },
    { id: 'garden', label: 'Garten', value: 'botanical garden', description: 'Botanischer Garten' },
    { id: 'cafe', label: 'Café', value: 'cozy cafe', description: 'Gemütliches Café' },
    { id: 'penthouse', label: 'Penthouse', value: 'luxury penthouse', description: 'Luxuriöses Penthouse' },
    { id: 'warehouse', label: 'Lagerhaus', value: 'empty warehouse', description: 'Leeres Lagerhaus' },
    { id: 'church', label: 'Kirche', value: 'gothic church', description: 'Gotische Kirche' },
    { id: 'train_station', label: 'Bahnhof', value: 'vintage train station', description: 'Nostalgischer Bahnhof' },
    { id: 'mountain', label: 'Berge', value: 'mountain landscape', description: 'Berglandschaft' },
    { id: 'desert', label: 'Wüste', value: 'desert landscape', description: 'Wüstenlandschaft' },
    { id: 'pool', label: 'Pool', value: 'luxury swimming pool', description: 'Luxuriöser Pool' },
    { id: 'office', label: 'Büro', value: 'modern office', description: 'Modernes Büro' },
    { id: 'bedroom', label: 'Schlafzimmer', value: 'elegant bedroom', description: 'Elegantes Schlafzimmer' },
    { id: 'balcony', label: 'Balkon', value: 'city view balcony', description: 'Balkon mit Stadtblick' }
  ]
};