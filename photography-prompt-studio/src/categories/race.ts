import { Category } from '../types';

export const raceCategory: Category = {
  id: 'race',
  name: 'Rasse',
  icon: 'User',
  section: 'person',
  subcategory: 'race',
  options: [
    { id: 'human', label: 'Mensch', value: 'human', description: 'Normale menschliche Züge' },
    { id: 'elf', label: 'Elf', value: 'elf with pointed ears', description: 'Elegante Elfenmerkmale mit spitzen Ohren' },
    { id: 'dwarf', label: 'Zwerg', value: 'dwarf', description: 'Kräftige Zwergenstatur' },
    { id: 'orc', label: 'Ork', value: 'orc with tusks', description: 'Markante Ork-Züge mit Hauern' },
    { id: 'halfling', label: 'Halbling', value: 'halfling', description: 'Zierliche Halbling-Statur' },
    { id: 'tiefling', label: 'Tiefling', value: 'tiefling with horns', description: 'Dämonische Züge mit Hörnern' },
    { id: 'dragonborn', label: 'Drachenblütiger', value: 'dragonborn with scales', description: 'Drachenschuppen und reptilische Züge' },
    { id: 'fairy', label: 'Fee', value: 'fairy with delicate features', description: 'Zarte, magische Feenmerkmale' },
    { id: 'vampire', label: 'Vampir', value: 'vampire with fangs', description: 'Elegante Vampirmerkmale' },
    { id: 'werewolf', label: 'Werwolf', value: 'werewolf features', description: 'Wolfsähnliche Züge' },
    { id: 'centaur', label: 'Zentaur', value: 'centaur', description: 'Halb-Mensch, halb-Pferd' },
    { id: 'satyr', label: 'Satyr', value: 'satyr with goat legs', description: 'Ziegenbein-Merkmale' },
    { id: 'nymph', label: 'Nymphe', value: 'nymph with ethereal beauty', description: 'Ätherische Naturschönheit' },
    { id: 'angel', label: 'Engel', value: 'angel with wings', description: 'Himmlische Erscheinung' },
    { id: 'demon', label: 'Dämon', value: 'demon with dark features', description: 'Dämonische Züge' },
    { id: 'elemental', label: 'Elementar', value: 'elemental being', description: 'Elementare Eigenschaften' },
    { id: 'shapeshifter', label: 'Gestaltwandler', value: 'shapeshifter', description: 'Wandelbare Gestalt' },
    { id: 'nephilim', label: 'Nephilim', value: 'nephilim hybrid', description: 'Engel-Mensch-Hybrid' },
    { id: 'demigod', label: 'Halbgott', value: 'demigod with divine aura', description: 'Göttliche Ausstrahlung' },
    { id: 'ghost', label: 'Geist', value: 'ghost with translucent features', description: 'Geisterhafte Erscheinung' },
    { id: 'banshee', label: 'Banshee', value: 'banshee with ethereal appearance', description: 'Mystische Banshee' },
    { id: 'succubus', label: 'Succubus', value: 'succubus with seductive features', description: 'Verführerische Dämonin' },
    { id: 'incubus', label: 'Incubus', value: 'incubus with magnetic presence', description: 'Magnetischer Dämon' },
    { id: 'djinn', label: 'Dschinn', value: 'djinn with mystical aura', description: 'Mystischer Dschinn' }
  ]
};