import { Crown, Palette, Eye } from 'lucide-react';
import { Category } from '../types';

export const hairMakeupCategories: Category[] = [
  {
    id: 'hair_length',
    name: 'Haarlänge',
    icon: 'Crown',
    section: 'hair_makeup',
    subcategory: 'hair_length',
    options: [
      { id: 'pixie_cut', label: 'Pixie Cut', value: 'pixie cut hair', description: 'Sehr kurzer Pixie-Schnitt' },
      { id: 'bob_cut', label: 'Bob', value: 'bob cut hair', description: 'Klassischer Bob-Schnitt' },
      { id: 'lob_cut', label: 'Long Bob', value: 'long bob hair', description: 'Längerer Bob bis zur Schulter' },
      { id: 'shoulder_length', label: 'Schulterlang', value: 'shoulder length hair', description: 'Haare bis zur Schulter' },
      { id: 'medium_length', label: 'Mittellang', value: 'medium length hair', description: 'Mittellange Haare' },
      { id: 'long_hair', label: 'Lange Haare', value: 'long hair', description: 'Lange Haare bis zur Brust' },
      { id: 'very_long_hair', label: 'Sehr lange Haare', value: 'very long hair', description: 'Sehr lange Haare bis zur Hüfte' },
      { id: 'waist_length', label: 'Hüftlang', value: 'waist length hair', description: 'Haare bis zur Hüfte' },
      { id: 'rapunzel_length', label: 'Rapunzel-Länge', value: 'rapunzel length hair', description: 'Märchenhaft lange Haare' }
    ]
  },
  {
    id: 'hair_color',
    name: 'Haarfarbe',
    icon: 'Crown',
    section: 'hair_makeup',
    subcategory: 'hair_color',
    options: [
      { id: 'platinum_blonde', label: 'Platinblond', value: 'platinum blonde hair', description: 'Sehr helles Platinblond' },
      { id: 'ash_blonde', label: 'Aschblond', value: 'ash blonde hair', description: 'Kühles Aschblond' },
      { id: 'golden_blonde', label: 'Goldblond', value: 'golden blonde hair', description: 'Warmes Goldblond' },
      { id: 'honey_blonde', label: 'Honigblond', value: 'honey blonde hair', description: 'Honigfarbenes Blond' },
      { id: 'strawberry_blonde', label: 'Erdbeerblond', value: 'strawberry blonde hair', description: 'Rötliches Erdbeerblond' },
      { id: 'light_brown', label: 'Hellbraun', value: 'light brown hair', description: 'Helle braune Haare' },
      { id: 'chestnut_brown', label: 'Kastanienbraun', value: 'chestnut brown hair', description: 'Warmes Kastanienbraun' },
      { id: 'chocolate_brown', label: 'Schokoladenbraun', value: 'chocolate brown hair', description: 'Tiefes Schokoladenbraun' },
      { id: 'dark_brown', label: 'Dunkelbraun', value: 'dark brown hair', description: 'Sehr dunkle braune Haare' },
      { id: 'black_hair', label: 'Schwarz', value: 'black hair', description: 'Tiefschwarze Haare' },
      { id: 'auburn_red', label: 'Rotbraun', value: 'auburn red hair', description: 'Natürliches Rotbraun' },
      { id: 'copper_red', label: 'Kupferrot', value: 'copper red hair', description: 'Lebendiges Kupferrot' },
      { id: 'burgundy_red', label: 'Burgunderrot', value: 'burgundy red hair', description: 'Tiefes Burgunderrot' },
      { id: 'cherry_red', label: 'Kirschrot', value: 'cherry red hair', description: 'Intensives Kirschrot' },
      { id: 'silver_gray', label: 'Silbergrau', value: 'silver gray hair', description: 'Elegantes Silbergrau' },
      { id: 'white_hair', label: 'Weiß', value: 'white hair', description: 'Reinweiße Haare' },
      { id: 'pastel_pink', label: 'Pastellrosa', value: 'pastel pink hair', description: 'Zartes Pastellrosa' },
      { id: 'lavender_purple', label: 'Lavendel', value: 'lavender purple hair', description: 'Sanftes Lavendel' },
      { id: 'mint_green', label: 'Mintgrün', value: 'mint green hair', description: 'Frisches Mintgrün' },
      { id: 'ocean_blue', label: 'Ozeanblau', value: 'ocean blue hair', description: 'Tiefes Ozeanblau' },
      { id: 'rainbow_hair', label: 'Regenbogen', value: 'rainbow colored hair', description: 'Bunte Regenbogen-Haare' },
      { id: 'ombre_hair', label: 'Ombré', value: 'ombre hair', description: 'Fließender Farbverlauf' },
      { id: 'highlights', label: 'Highlights', value: 'highlighted hair', description: 'Natürliche Highlights' },
      { id: 'balayage', label: 'Balayage', value: 'balayage hair', description: 'Handgemalte Balayage-Technik' }
    ]
  },
  {
    id: 'hair_texture',
    name: 'Haarstruktur',
    icon: 'Crown',
    section: 'hair_makeup',
    subcategory: 'hair_texture',
    options: [
      { id: 'straight_hair', label: 'Glatte Haare', value: 'straight hair', description: 'Perfekt glatte Haare' },
      { id: 'sleek_straight', label: 'Sleek & Glatt', value: 'sleek straight hair', description: 'Ultra-glatte, glänzende Haare' },
      { id: 'wavy_hair', label: 'Wellige Haare', value: 'wavy hair', description: 'Natürlich wellige Haare' },
      { id: 'beach_waves', label: 'Beach Waves', value: 'beach wave hair', description: 'Lässige Strandwellen' },
      { id: 'loose_curls', label: 'Lockere Locken', value: 'loose curls', description: 'Sanfte, lockere Locken' },
      { id: 'tight_curls', label: 'Enge Locken', value: 'tight curls', description: 'Kleine, enge Locken' },
      { id: 'spiral_curls', label: 'Spirallocken', value: 'spiral curls', description: 'Perfekte Spirallocken' },
      { id: 'afro_curls', label: 'Afro-Locken', value: 'afro curls', description: 'Voluminöse Afro-Locken' },
      { id: 'kinky_hair', label: 'Krauses Haar', value: 'kinky hair', description: 'Natürlich krauses Haar' },
      { id: 'coily_hair', label: 'Spiraliges Haar', value: 'coily hair', description: 'Eng spiraliges Haar' },
      { id: 'crimped_hair', label: 'Gekräuseltes Haar', value: 'crimped hair', description: 'Vintage gekräuseltes Haar' },
      { id: 'voluminous_hair', label: 'Voluminöses Haar', value: 'voluminous hair', description: 'Extrem voluminöse Haare' }
    ]
  },
  {
    id: 'hairstyles',
    name: 'Frisuren',
    icon: 'Crown',
    section: 'hair_makeup',
    subcategory: 'hairstyles',
    options: [
      { id: 'messy_bun', label: 'Messy Bun', value: 'messy bun hairstyle', description: 'Lässiger unordentlicher Dutt' },
      { id: 'sleek_bun', label: 'Sleeker Dutt', value: 'sleek bun hairstyle', description: 'Eleganter glatter Dutt' },
      { id: 'high_ponytail', label: 'Hoher Pferdeschwanz', value: 'high ponytail', description: 'Hoher, strammer Pferdeschwanz' },
      { id: 'low_ponytail', label: 'Tiefer Pferdeschwanz', value: 'low ponytail', description: 'Eleganter tiefer Pferdeschwanz' },
      { id: 'side_ponytail', label: 'Seitlicher Pferdeschwanz', value: 'side ponytail', description: 'Asymmetrischer Seitenpferdeschwanz' },
      { id: 'braided_ponytail', label: 'Geflochtener Pferdeschwanz', value: 'braided ponytail', description: 'Zopf mit Pferdeschwanz' },
      { id: 'french_braid', label: 'Französischer Zopf', value: 'french braid', description: 'Klassischer französischer Zopf' },
      { id: 'dutch_braid', label: 'Holländischer Zopf', value: 'dutch braid', description: 'Umgekehrter holländischer Zopf' },
      { id: 'fishtail_braid', label: 'Fischgrätenzopf', value: 'fishtail braid', description: 'Komplizierter Fischgrätenzopf' },
      { id: 'crown_braid', label: 'Kronenzopf', value: 'crown braid', description: 'Zopf um den Kopf gelegt' },
      { id: 'waterfall_braid', label: 'Wasserfall-Zopf', value: 'waterfall braid', description: 'Romantischer Wasserfall-Zopf' },
      { id: 'boxer_braids', label: 'Boxer Braids', value: 'boxer braids', description: 'Sportliche Boxer-Zöpfe' },
      { id: 'space_buns', label: 'Space Buns', value: 'space buns hairstyle', description: 'Verspielte Space Buns' },
      { id: 'half_up_half_down', label: 'Half-Up Half-Down', value: 'half up half down hairstyle', description: 'Halb hochgesteckt' },
      { id: 'victory_rolls', label: 'Victory Rolls', value: 'victory rolls hairstyle', description: 'Vintage Victory Rolls' },
      { id: 'finger_waves', label: 'Finger Waves', value: 'finger waves hairstyle', description: 'Elegante Finger Waves' },
      { id: 'beehive', label: 'Beehive', value: 'beehive hairstyle', description: 'Voluminöse Beehive-Frisur' },
      { id: 'chignon', label: 'Chignon', value: 'elegant chignon', description: 'Klassischer Chignon' }
    ]
  },
  {
    id: 'makeup_base',
    name: 'Makeup Basis',
    icon: 'Crown',
    section: 'hair_makeup',
    subcategory: 'makeup_base',
    options: [
      { id: 'flawless_skin', label: 'Makellose Haut', value: 'flawless makeup', description: 'Perfekt ebenmäßige Haut' },
      { id: 'natural_makeup', label: 'Natürliches Makeup', value: 'natural makeup', description: 'Dezentes, natürliches Makeup' },
      { id: 'dewy_skin', label: 'Strahlende Haut', value: 'dewy skin makeup', description: 'Frisch strahlende Haut' },
      { id: 'matte_skin', label: 'Matte Haut', value: 'matte skin makeup', description: 'Samtiges mattes Finish' },
      { id: 'glowing_skin', label: 'Leuchtende Haut', value: 'glowing skin', description: 'Innerlich leuchtende Haut' },
      { id: 'porcelain_skin', label: 'Porzellan-Haut', value: 'porcelain skin makeup', description: 'Zarte Porzellan-Optik' },
      { id: 'bronzed_skin', label: 'Gebräunte Haut', value: 'bronzed skin makeup', description: 'Gesund gebräunte Haut' },
      { id: 'highlighted_cheeks', label: 'Betonte Wangenknochen', value: 'highlighted cheekbones', description: 'Skulpturierte Wangenknochen' },
      { id: 'contoured_face', label: 'Konturiertes Gesicht', value: 'contoured makeup', description: 'Professionell konturiert' },
      { id: 'airbrush_finish', label: 'Airbrush-Finish', value: 'airbrush makeup', description: 'Perfektes Airbrush-Finish' }
    ]
  },
  {
    id: 'eye_makeup',
    name: 'Augen-Makeup',
    icon: 'Crown',
    section: 'hair_makeup',
    subcategory: 'eye_makeup',
    options: [
      { id: 'smoky_eyes', label: 'Smoky Eyes', value: 'smoky eye makeup', description: 'Dramatische Smoky Eyes' },
      { id: 'cat_eye_makeup', label: 'Cat Eye', value: 'cat eye makeup', description: 'Elegantes Cat-Eye Makeup' },
      { id: 'winged_eyeliner', label: 'Winged Eyeliner', value: 'winged eyeliner', description: 'Perfekter Lidstrich mit Flügel' },
      { id: 'dramatic_eyeliner', label: 'Dramatischer Eyeliner', value: 'dramatic eyeliner', description: 'Intensiver dramatischer Lidstrich' },
      { id: 'natural_eye_makeup', label: 'Natürliches Augen-Makeup', value: 'natural eye makeup', description: 'Dezentes Augen-Makeup' },
      { id: 'metallic_eyeshadow', label: 'Metallic Lidschatten', value: 'metallic eyeshadow', description: 'Glänzender Metallic-Lidschatten' },
      { id: 'glitter_eyeshadow', label: 'Glitzer Lidschatten', value: 'glitter eyeshadow', description: 'Funkelnder Glitzer-Lidschatten' },
      { id: 'colorful_eyeshadow', label: 'Bunter Lidschatten', value: 'colorful eyeshadow', description: 'Lebendiger farbiger Lidschatten' },
      { id: 'cut_crease', label: 'Cut Crease', value: 'cut crease eye makeup', description: 'Professioneller Cut Crease' },
      { id: 'halo_eye', label: 'Halo Eye', value: 'halo eye makeup', description: 'Strahlender Halo-Effekt' },
      { id: 'gothic_eye_makeup', label: 'Gothic Augen-Makeup', value: 'gothic eye makeup', description: 'Dunkles Gothic-Augen-Makeup' },
      { id: 'vintage_eye_makeup', label: 'Vintage Augen-Makeup', value: 'vintage eye makeup', description: 'Retro-inspiriertes Augen-Makeup' }
    ]
  },
  {
    id: 'lashes_brows',
    name: 'Wimpern & Augenbrauen',
    icon: 'Crown',
    section: 'hair_makeup',
    subcategory: 'lashes_brows',
    options: [
      { id: 'long_lashes', label: 'Lange Wimpern', value: 'long eyelashes', description: 'Natürlich lange Wimpern' },
      { id: 'thick_lashes', label: 'Volle Wimpern', value: 'thick eyelashes', description: 'Dichte, volle Wimpern' },
      { id: 'curled_lashes', label: 'Geschwungene Wimpern', value: 'curled eyelashes', description: 'Perfekt geschwungene Wimpern' },
      { id: 'dramatic_lashes', label: 'Dramatische Wimpern', value: 'dramatic eyelashes', description: 'Extrem dramatische Wimpern' },
      { id: 'false_lashes', label: 'Künstliche Wimpern', value: 'false eyelashes', description: 'Perfekte künstliche Wimpern' },
      { id: 'feathery_lashes', label: 'Federige Wimpern', value: 'feathery eyelashes', description: 'Natürlich federige Wimpern' },
      { id: 'colored_lashes', label: 'Farbige Wimpern', value: 'colored eyelashes', description: 'Auffällig farbige Wimpern' },
      { id: 'defined_brows', label: 'Definierte Augenbrauen', value: 'defined eyebrows', description: 'Perfekt definierte Brauen' },
      { id: 'thick_brows', label: 'Volle Augenbrauen', value: 'thick eyebrows', description: 'Natürlich volle Brauen' },
      { id: 'arched_brows', label: 'Geschwungene Augenbrauen', value: 'arched eyebrows', description: 'Elegant geschwungene Brauen' },
      { id: 'straight_brows', label: 'Gerade Augenbrauen', value: 'straight eyebrows', description: 'Modern gerade Brauen' },
      { id: 'feathered_brows', label: 'Federige Augenbrauen', value: 'feathered eyebrows', description: 'Natürlich federige Brauen' }
    ]
  },
  {
    id: 'lip_makeup',
    name: 'Lippen-Makeup',
    icon: 'Crown',
    section: 'hair_makeup',
    subcategory: 'lip_makeup',
    options: [
      { id: 'red_lipstick', label: 'Roter Lippenstift', value: 'red lipstick', description: 'Klassischer roter Lippenstift' },
      { id: 'nude_lipstick', label: 'Nude Lippenstift', value: 'nude lipstick', description: 'Natürlicher Nude-Ton' },
      { id: 'pink_lipstick', label: 'Rosa Lippenstift', value: 'pink lipstick', description: 'Femininer rosa Lippenstift' },
      { id: 'dark_lipstick', label: 'Dunkler Lippenstift', value: 'dark lipstick', description: 'Dramatisch dunkler Lippenstift' },
      { id: 'glossy_lips', label: 'Glänzende Lippen', value: 'glossy lips', description: 'Hochglänzende Lippen' },
      { id: 'matte_lips', label: 'Matte Lippen', value: 'matte lips', description: 'Samtiges mattes Finish' },
      { id: 'ombre_lips', label: 'Ombré Lippen', value: 'ombre lips', description: 'Farbverlauf auf den Lippen' },
      { id: 'gradient_lips', label: 'Gradient Lippen', value: 'gradient lips', description: 'Koreanischer Gradient-Effekt' },
      { id: 'metallic_lips', label: 'Metallic Lippen', value: 'metallic lips', description: 'Glänzend metallische Lippen' },
      { id: 'glitter_lips', label: 'Glitzer Lippen', value: 'glitter lips', description: 'Funkelnde Glitzer-Lippen' },
      { id: 'natural_lips', label: 'Natürliche Lippen', value: 'natural lips', description: 'Ungeschminkte natürliche Lippen' },
      { id: 'plump_lips', label: 'Volle Lippen', value: 'plump lips', description: 'Natürlich volle Lippen' }
    ]
  }
];