import { Heart } from 'lucide-react';
import { Category } from '../types';

export const moodCategory: Category = {
  id: 'mood',
  name: 'Stimmung',
  icon: 'Heart',
  section: 'mood',
  options: [
    { id: 'romantic', label: 'Romantisch', value: 'romantic atmosphere', description: 'Romantische Stimmung' },
    { id: 'mysterious', label: 'Geheimnisvoll', value: 'mysterious ambiance', description: 'Geheimnisvolle Atmosphäre' },
    { id: 'elegant', label: 'Elegant', value: 'elegant sophistication', description: 'Elegante Raffinesse' },
    { id: 'edgy', label: 'Kantig', value: 'edgy modern vibe', description: 'Moderne, kantige Ausstrahlung' },
    { id: 'dreamy', label: 'Verträumt', value: 'dreamy ethereal mood', description: 'Verträumte, ätherische Stimmung' },
    { id: 'powerful', label: 'Kraftvoll', value: 'powerful commanding presence', description: 'Kraftvolle, herrschende Präsenz' },
    { id: 'intimate', label: 'Intim', value: 'intimate private moment', description: 'Intimer, privater Moment' },
    { id: 'glamorous', label: 'Glamourös', value: 'glamorous luxury', description: 'Glamouröser Luxus' },
    { id: 'dark', label: 'Düster', value: 'dark gothic atmosphere', description: 'Düstere, gothische Atmosphäre' },
    { id: 'epic', label: 'Episch', value: 'epic heroic mood', description: 'Epische, heroische Stimmung' },
    { id: 'serene', label: 'Friedlich', value: 'serene peaceful mood', description: 'Friedliche, ruhige Stimmung' },
    { id: 'passionate', label: 'Leidenschaftlich', value: 'passionate intensity', description: 'Leidenschaftliche Intensität' },
    { id: 'melancholic', label: 'Melancholisch', value: 'melancholic nostalgia', description: 'Melancholische Nostalgie' },
    { id: 'rebellious', label: 'Rebellisch', value: 'rebellious attitude', description: 'Rebellische Haltung' },
    { id: 'ethereal', label: 'Ätherisch', value: 'ethereal otherworldly', description: 'Ätherische, jenseitige Stimmung' },
    { id: 'vintage', label: 'Nostalgisch', value: 'vintage nostalgia', description: 'Nostalgische Vintage-Stimmung' },
    { id: 'futuristic', label: 'Futuristisch', value: 'futuristic sci-fi mood', description: 'Futuristische Sci-Fi Stimmung' },
    { id: 'wild', label: 'Wild', value: 'wild untamed energy', description: 'Wilde, ungezähmte Energie' }
  ]
};