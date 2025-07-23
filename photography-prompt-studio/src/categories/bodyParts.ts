import { Category } from '../types';

export const bodyPartCategories: Category[] = [
  {
    id: 'shoulders',
    name: 'Schultern',
    icon: 'User',
    section: 'person',
    subcategory: 'upper_body',
    options: [
      { id: 'broad_shoulders', label: 'Breite Schultern', value: 'broad shoulders', description: 'Breite, kraftvolle Schultern' },
      { id: 'narrow_shoulders', label: 'Schmale Schultern', value: 'narrow shoulders', description: 'Schmale, zierliche Schultern' },
      { id: 'muscular_shoulders', label: 'Muskulöse Schultern', value: 'muscular shoulders', description: 'Stark definierte Schultern' },
      { id: 'elegant_shoulders', label: 'Elegante Schultern', value: 'elegant shoulders', description: 'Graziöse Schulterlinien' },
      { id: 'round_shoulders', label: 'Runde Schultern', value: 'round shoulders', description: 'Weiche, runde Schultern' },
      { id: 'square_shoulders', label: 'Eckige Schultern', value: 'square shoulders', description: 'Markante, eckige Schultern' },
      { id: 'defined_shoulders', label: 'Definierte Schultern', value: 'defined shoulders', description: 'Klar definierte Schulterpartie' },
      { id: 'soft_shoulders', label: 'Sanfte Schultern', value: 'soft shoulders', description: 'Weiche Schulterlinien' },
      { id: 'powerful_shoulders', label: 'Kraftvolle Schultern', value: 'powerful shoulders', description: 'Kraftvolle Schultermuskulatur' }
    ]
  },
  {
    id: 'chest_male',
    name: 'Brust (Männlich)',
    icon: 'User',
    section: 'person',
    subcategory: 'upper_body',
    genderSpecific: ['man'],
    options: [
      { id: 'muscular_chest', label: 'Muskulöse Brust', value: 'muscular chest', description: 'Stark definierte Brustmuskeln' },
      { id: 'defined_pecs', label: 'Definierte Pectoralis', value: 'defined pectorals', description: 'Klar definierte Brustmuskeln' },
      { id: 'broad_chest', label: 'Breite Brust', value: 'broad chest', description: 'Breite Brustpartie' },
      { id: 'narrow_chest', label: 'Schmale Brust', value: 'narrow chest', description: 'Schmale Brustpartie' },
      { id: 'athletic_chest', label: 'Athletische Brust', value: 'athletic chest', description: 'Sportlich trainierte Brust' },
      { id: 'lean_chest', label: 'Schlanke Brust', value: 'lean chest', description: 'Schlanke Brustpartie' },
      { id: 'powerful_chest', label: 'Kräftige Brust', value: 'powerful chest', description: 'Kraftvolle Brustmuskulatur' },
      { id: 'symmetric_chest', label: 'Symmetrische Brust', value: 'symmetrical chest', description: 'Perfekt symmetrische Brust' },
      { id: 'trained_chest', label: 'Trainierte Brust', value: 'trained chest', description: 'Professionell trainierte Brust' },
      { id: 'hairy_chest', label: 'Behaarte Brust', value: 'hairy chest', description: 'Natürlich behaarte Brust' }
    ]
  },
  {
    id: 'breasts_female',
    name: 'Brüste (Weiblich)',
    icon: 'User',
    section: 'person',
    subcategory: 'upper_body',
    genderSpecific: ['woman'],
    options: [
      { id: 'small_breasts', label: 'Kleine Brüste', value: 'small breasts', description: 'Kleine, zierliche Brüste' },
      { id: 'medium_breasts', label: 'Mittelgroße Brüste', value: 'medium breasts', description: 'Mittelgroße Brüste' },
      { id: 'large_breasts', label: 'Große Brüste', value: 'large breasts', description: 'Große, volle Brüste' },
      { id: 'round_breasts', label: 'Runde Brüste', value: 'round breasts', description: 'Perfekt runde Form' },
      { id: 'teardrop_breasts', label: 'Tropfenförmige Brüste', value: 'teardrop shaped breasts', description: 'Natürlich tropfenförmig' },
      { id: 'firm_breasts', label: 'Feste Brüste', value: 'firm breasts', description: 'Straffe, feste Form' },
      { id: 'natural_breasts', label: 'Natürliche Brüste', value: 'natural breasts', description: 'Natürliche Form und Größe' },
      { id: 'elegant_breasts', label: 'Elegante Brüste', value: 'elegant breasts', description: 'Elegante, feminine Form' },
      { id: 'proportioned_breasts', label: 'Proportionierte Brüste', value: 'well-proportioned breasts', description: 'Perfekt proportioniert' }
    ]
  },
  {
    id: 'arm_muscles',
    name: 'Armmuskulatur',
    icon: 'User',
    section: 'person',
    subcategory: 'arms',
    options: [
      { id: 'defined_biceps', label: 'Definierte Bizeps', value: 'defined biceps', description: 'Klar definierte Bizepsmuskulatur' },
      { id: 'lean_arms', label: 'Schlanke Arme', value: 'lean arms', description: 'Schlanke, elegante Arme' },
      { id: 'muscular_forearms', label: 'Muskulöse Unterarme', value: 'muscular forearms', description: 'Stark entwickelte Unterarme' },
      { id: 'elegant_arms', label: 'Elegante Arme', value: 'elegant arms', description: 'Graziöse Armhaltung' },
      { id: 'strong_arms', label: 'Kräftige Arme', value: 'strong arms', description: 'Kraftvolle Armmuskulatur' },
      { id: 'athletic_arms', label: 'Athletische Arme', value: 'athletic arms', description: 'Sportlich trainierte Arme' },
      { id: 'feminine_arms', label: 'Feminine Arme', value: 'feminine arms', description: 'Zart feminine Arme' },
      { id: 'sinewy_arms', label: 'Sehnige Arme', value: 'sinewy arms', description: 'Sehnige, definierte Arme' },
      { id: 'shapely_arms', label: 'Wohlgeformte Arme', value: 'shapely arms', description: 'Perfekt geformte Arme' },
      { id: 'delicate_arms', label: 'Zarte Arme', value: 'delicate arms', description: 'Zarte, fragile Arme' },
      { id: 'powerful_arms', label: 'Kraftvolle Arme', value: 'powerful arms', description: 'Sehr kraftvolle Armmuskulatur' },
      { id: 'graceful_arms', label: 'Graziöse Arme', value: 'graceful arms', description: 'Anmutig graziöse Arme' }
    ]
  },
  {
    id: 'hand_shapes',
    name: 'Händeformen',
    icon: 'User',
    section: 'person',
    subcategory: 'hands',
    options: [
      { id: 'long_fingers', label: 'Lange Finger', value: 'long fingers', description: 'Lange, schlanke Finger' },
      { id: 'short_fingers', label: 'Kurze Finger', value: 'short fingers', description: 'Kurze, kompakte Finger' },
      { id: 'elegant_hands', label: 'Elegante Hände', value: 'elegant hands', description: 'Feine, elegante Hände' },
      { id: 'strong_hands', label: 'Kräftige Hände', value: 'strong hands', description: 'Kraftvolle, maskuline Hände' },
      { id: 'delicate_hands', label: 'Zarte Hände', value: 'delicate hands', description: 'Zarte, feminine Hände' },
      { id: 'slender_hands', label: 'Schmale Hände', value: 'slender hands', description: 'Schmale, grazile Hände' },
      { id: 'broad_hands', label: 'Breite Hände', value: 'broad hands', description: 'Breite, kräftige Hände' },
      { id: 'feminine_hands', label: 'Feminine Hände', value: 'feminine hands', description: 'Typisch feminine Hände' },
      { id: 'masculine_hands', label: 'Maskuline Hände', value: 'masculine hands', description: 'Markant maskuline Hände' },
      { id: 'artist_hands', label: 'Künstlerhände', value: 'artistic hands', description: 'Sensible Künstlerhände' },
      { id: 'worker_hands', label: 'Arbeiterhände', value: 'working hands', description: 'Kräftige Arbeiterhände' },
      { id: 'manicured_hands', label: 'Gepflegte Hände', value: 'manicured hands', description: 'Perfekt gepflegte Hände' }
    ]
  },
  {
    id: 'hips_waist',
    name: 'Hüften & Taille',
    icon: 'User',
    section: 'person',
    subcategory: 'lower_body',
    options: [
      { id: 'narrow_hips', label: 'Schmale Hüften', value: 'narrow hips', description: 'Schmale, athletische Hüften' },
      { id: 'wide_hips', label: 'Breite Hüften', value: 'wide hips', description: 'Feminine, breite Hüften' },
      { id: 'curvy_hips', label: 'Kurvige Hüften', value: 'curvy hips', description: 'Sinnlich geschwungene Hüften' },
      { id: 'straight_hips', label: 'Gerade Hüften', value: 'straight hips', description: 'Gerade Hüftlinie' },
      { id: 'hourglass_silhouette', label: 'Sanduhr-Silhouette', value: 'hourglass figure', description: 'Klassische Sanduhr-Form' },
      { id: 'narrow_waist', label: 'Schmale Taille', value: 'narrow waist', description: 'Sehr schlanke Taille' },
      { id: 'defined_waist', label: 'Definierte Taille', value: 'defined waist', description: 'Klar definierte Taillenlinie' },
      { id: 'natural_waist', label: 'Natürliche Taille', value: 'natural waist', description: 'Natürliche Taillenform' },
      { id: 'feminine_curves', label: 'Feminine Kurven', value: 'feminine curves', description: 'Weibliche Körperkurven' },
      { id: 'athletic_hips', label: 'Athletische Hüften', value: 'athletic hips', description: 'Sportlich trainierte Hüften' },
      { id: 'elegant_waist', label: 'Elegante Taille', value: 'elegant waist', description: 'Elegant geschwungene Taille' },
      { id: 'proportioned_hips', label: 'Proportionierte Hüften', value: 'well-proportioned hips', description: 'Perfekt proportionierte Hüften' }
    ]
  },
  {
    id: 'legs_feet',
    name: 'Beine & Füße',
    icon: 'User',
    section: 'person',
    subcategory: 'lower_body',
    options: [
      { id: 'long_legs', label: 'Lange Beine', value: 'long legs', description: 'Lange, elegante Beine' },
      { id: 'muscular_legs', label: 'Muskulöse Beine', value: 'muscular legs', description: 'Kraftvolle, definierte Beinmuskeln' },
      { id: 'slim_legs', label: 'Schlanke Beine', value: 'slim legs', description: 'Schlanke, grazile Beine' },
      { id: 'thick_thighs', label: 'Kräftige Oberschenkel', value: 'thick thighs', description: 'Kräftige, volle Oberschenkel' },
      { id: 'toned_calves', label: 'Definierte Waden', value: 'toned calves', description: 'Trainierte Wadenmuskeln' },
      { id: 'elegant_feet', label: 'Elegante Füße', value: 'elegant feet', description: 'Feine, wohlgeformte Füße' },
      { id: 'bare_feet', label: 'Nackte Füße', value: 'bare feet', description: 'Barfuß, natürlich' },
      { id: 'pedicured_feet', label: 'Gepflegte Füße', value: 'pedicured feet', description: 'Professionell gepflegte Füße' },
      { id: 'painted_toenails', label: 'Lackierte Zehennägel', value: 'painted toenails', description: 'Farbig lackierte Zehennägel' },
      { id: 'slender_feet', label: 'Schlanke Füße', value: 'slender feet', description: 'Schlanke, grazile Füße' },
      { id: 'athletic_legs', label: 'Athletische Beine', value: 'athletic legs', description: 'Sportlich trainierte Beine' },
      { id: 'shapely_legs', label: 'Wohlgeformte Beine', value: 'shapely legs', description: 'Perfekt geformte Beine' }
    ]
  }
];