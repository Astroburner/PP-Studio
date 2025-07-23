import React from 'react';
import { Camera, Moon, Sun, Trash2, Zap, Users, Plus, Minus, Settings, Download, Upload, RefreshCw, Copy, Eye, BarChart3, CheckCircle, User, Palette, MapPin, Sparkles, Heart, Star, Crown, Shirt, Smile, HeartHandshake, Mountain, Lightbulb } from 'lucide-react';
import { Category, CategorySection } from '../types';

// VOLLSTÄNDIGE KATEGORIEN-LISTE
export const allCategories: Category[] = [
  // PERSON KATEGORIEN (Rasse wird über Dropdown gesteuert, nicht hier)
  {
    id: 'eyes',
    name: 'Augen',
    icon: <Eye className="w-4 h-4" />,
    section: 'person',
    options: [
      { id: 'blue_eyes', label: 'Blaue Augen', value: 'blue eyes' },
      { id: 'brown_eyes', label: 'Braune Augen', value: 'brown eyes' },
      { id: 'green_eyes', label: 'Grüne Augen', value: 'green eyes' },
      { id: 'hazel_eyes', label: 'Haselnussbraune Augen', value: 'hazel eyes' },
      { id: 'gray_eyes', label: 'Graue Augen', value: 'gray eyes' },
      { id: 'amber_eyes', label: 'Bernsteinfarbene Augen', value: 'amber eyes' },
      { id: 'violet_eyes', label: 'Violette Augen', value: 'violet eyes' },
      { id: 'heterochromia', label: 'Verschiedenfarbige Augen', value: 'heterochromia eyes' },
      { id: 'large_eyes', label: 'Große Augen', value: 'large expressive eyes' },
      { id: 'almond_eyes', label: 'Mandelförmige Augen', value: 'almond-shaped eyes' },
      { id: 'round_eyes', label: 'Runde Augen', value: 'round eyes' },
      { id: 'hooded_eyes', label: 'Schlupflider', value: 'hooded eyes' },
      { id: 'upturned_eyes', label: 'Aufwärts gerichtete Augen', value: 'upturned eyes' },
      { id: 'downturned_eyes', label: 'Abwärts gerichtete Augen', value: 'downturned eyes' }
    ]
  },
  {
    id: 'lips',
    name: 'Lippen',
    icon: <Heart className="w-4 h-4" />,
    section: 'person',
    options: [
      { id: 'full_lips', label: 'Volle Lippen', value: 'full lips' },
      { id: 'thin_lips', label: 'Schmale Lippen', value: 'thin lips' },
      { id: 'cupids_bow', label: 'Amor-Bogen', value: 'cupids bow lips' },
      { id: 'heart_shaped_lips', label: 'Herzförmige Lippen', value: 'heart-shaped lips' },
      { id: 'pouty_lips', label: 'Schmollende Lippen', value: 'pouty lips' },
      { id: 'wide_lips', label: 'Breite Lippen', value: 'wide lips' },
      { id: 'small_lips', label: 'Kleine Lippen', value: 'small delicate lips' },
      { id: 'asymmetrical_lips', label: 'Asymmetrische Lippen', value: 'asymmetrical lips' },
      { id: 'defined_lips', label: 'Definierte Lippen', value: 'well-defined lips' },
      { id: 'soft_lips', label: 'Weiche Lippen', value: 'soft lips' }
    ]
  },
  {
    id: 'nose',
    name: 'Nase',
    icon: <User className="w-4 h-4" />,
    section: 'person',
    options: [
      { id: 'straight_nose', label: 'Gerade Nase', value: 'straight nose' },
      { id: 'aquiline_nose', label: 'Adlernase', value: 'aquiline nose' },
      { id: 'button_nose', label: 'Stupsnase', value: 'button nose' },
      { id: 'roman_nose', label: 'Römische Nase', value: 'roman nose' },
      { id: 'wide_nose', label: 'Breite Nase', value: 'wide nose' },
      { id: 'narrow_nose', label: 'Schmale Nase', value: 'narrow nose' },
      { id: 'pointed_nose', label: 'Spitze Nase', value: 'pointed nose' },
      { id: 'snub_nose', label: 'Stumpfe Nase', value: 'snub nose' },
      { id: 'crooked_nose', label: 'Krumme Nase', value: 'slightly crooked nose' },
      { id: 'pierced_nose', label: 'Piercing', value: 'nose piercing' }
    ]
  },
  {
    id: 'breasts',
    name: 'Brüste',
    icon: <User className="w-4 h-4" />,
    section: 'person',
    genderSpecific: ['woman'],
    options: [
      { id: 'small_breasts', label: 'Kleine Brüste', value: 'small breasts' },
      { id: 'medium_breasts', label: 'Mittlere Brüste', value: 'medium breasts' },
      { id: 'large_breasts', label: 'Große Brüste', value: 'large breasts' },
      { id: 'perky_breasts', label: 'Straffe Brüste', value: 'perky breasts' },
      { id: 'natural_breasts', label: 'Natürliche Brüste', value: 'natural breasts' },
      { id: 'round_breasts', label: 'Runde Brüste', value: 'round breasts' },
      { id: 'teardrop_breasts', label: 'Tropfenförmige Brüste', value: 'teardrop shaped breasts' },
      { id: 'full_breasts', label: 'Volle Brüste', value: 'full breasts' },
      { id: 'firm_breasts', label: 'Feste Brüste', value: 'firm breasts' },
      { id: 'soft_breasts', label: 'Weiche Brüste', value: 'soft breasts' }
    ]
  },
  {
    id: 'body_details',
    name: 'Körperdetails',
    icon: <User className="w-4 h-4" />,
    section: 'person',
    options: [
      { id: 'abs', label: 'Bauchmuskeln', value: 'defined abs' },
      { id: 'toned_arms', label: 'Trainierte Arme', value: 'toned arms' },
      { id: 'muscular_legs', label: 'Muskulöse Beine', value: 'muscular legs' },
      { id: 'long_legs', label: 'Lange Beine', value: 'long legs' },
      { id: 'strong_shoulders', label: 'Starke Schultern', value: 'strong shoulders' },
      { id: 'narrow_waist', label: 'Schmale Taille', value: 'narrow waist' },
      { id: 'wide_hips', label: 'Breite Hüften', value: 'wide hips', genderSpecific: ['woman'] },
      { id: 'flat_stomach', label: 'Flacher Bauch', value: 'flat stomach' },
      { id: 'curves', label: 'Kurven', value: 'feminine curves', genderSpecific: ['woman'] },
      { id: 'muscle_definition', label: 'Muskeldefinition', value: 'muscle definition' },
      { id: 'elegant_neck', label: 'Eleganter Hals', value: 'elegant neck' },
      { id: 'graceful_hands', label: 'Anmutige Hände', value: 'graceful hands' }
    ]
  },
  {
    id: 'skin_color',
    name: 'Hautfarbe',
    icon: <User className="w-4 h-4" />,
    section: 'person',
    options: [
      { id: 'pale', label: 'Blass', value: 'pale skin' },
      { id: 'fair', label: 'Hell', value: 'fair skin' },
      { id: 'light', label: 'Licht', value: 'light skin' },
      { id: 'medium', label: 'Mittel', value: 'medium skin' },
      { id: 'olive', label: 'Oliv', value: 'olive skin' },
      { id: 'tan', label: 'Gebräunt', value: 'tan skin' },
      { id: 'brown', label: 'Braun', value: 'brown skin' },
      { id: 'dark_brown', label: 'Dunkelbraun', value: 'dark brown skin' },
      { id: 'black', label: 'Schwarz', value: 'black skin' },
      { id: 'bronze', label: 'Bronze', value: 'bronze skin' },
      { id: 'caramel', label: 'Karamell', value: 'caramel skin' },
      { id: 'golden', label: 'Golden', value: 'golden skin' }
    ]
  },
  {
    id: 'body_type',
    name: 'Körpertyp',
    icon: <User className="w-4 h-4" />,
    section: 'person',
    options: [
      { id: 'slim', label: 'Schlank', value: 'slim build' },
      { id: 'athletic', label: 'Athletisch', value: 'athletic build' },
      { id: 'muscular', label: 'Muskulös', value: 'muscular build' },
      { id: 'toned', label: 'Trainiert', value: 'toned physique' },
      { id: 'fit', label: 'Fit', value: 'fit body' },
      { id: 'lean', label: 'Schmal', value: 'lean build' },
      { id: 'average', label: 'Durchschnittlich', value: 'average build' },
      { id: 'curvy', label: 'Kurvig', value: 'curvy figure', genderSpecific: ['woman'] },
      { id: 'petite', label: 'Zierlich', value: 'petite frame' },
      { id: 'tall', label: 'Groß', value: 'tall stature' },
      { id: 'short', label: 'Klein', value: 'short stature' },
      { id: 'broad_shoulders', label: 'Breite Schultern', value: 'broad shoulders' }
    ]
  },
  {
    id: 'facial_features',
    name: 'Gesichtszüge',
    icon: <User className="w-4 h-4" />,
    section: 'person',
    options: [
      { id: 'sharp_features', label: 'Markante Züge', value: 'sharp facial features' },
      { id: 'soft_features', label: 'Weiche Züge', value: 'soft facial features' },
      { id: 'angular_face', label: 'Kantiges Gesicht', value: 'angular face' },
      { id: 'round_face', label: 'Rundes Gesicht', value: 'round face' },
      { id: 'oval_face', label: 'Ovales Gesicht', value: 'oval face' },
      { id: 'heart_face', label: 'Herzförmiges Gesicht', value: 'heart-shaped face' },
      { id: 'square_face', label: 'Quadratisches Gesicht', value: 'square face' },
      { id: 'high_cheekbones', label: 'Hohe Wangenknochen', value: 'high cheekbones' },
      { id: 'dimples', label: 'Grübchen', value: 'dimples' },
      { id: 'freckles', label: 'Sommersprossen', value: 'freckles' },
      { id: 'beauty_mark', label: 'Schönheitsfleck', value: 'beauty mark' },
      { id: 'scar', label: 'Narbe', value: 'facial scar' }
    ]
  },

  // HAARE & MAKEUP KATEGORIEN
  {
    id: 'hair_color',
    name: 'Haarfarbe',
    icon: <Crown className="w-4 h-4" />,
    section: 'hair_makeup',
    options: [
      { id: 'blonde', label: 'Blond', value: 'blonde hair' },
      { id: 'platinum_blonde', label: 'Platinblond', value: 'platinum blonde hair' },
      { id: 'golden_blonde', label: 'Goldblond', value: 'golden blonde hair' },
      { id: 'light_brown', label: 'Hellbraun', value: 'light brown hair' },
      { id: 'brown', label: 'Braun', value: 'brown hair' },
      { id: 'dark_brown', label: 'Dunkelbraun', value: 'dark brown hair' },
      { id: 'black_hair', label: 'Schwarz', value: 'black hair' },
      { id: 'auburn_red', label: 'Rotbraun', value: 'auburn red hair' },
      { id: 'copper_red', label: 'Kupferrot', value: 'copper red hair' },
      { id: 'burgundy_red', label: 'Burgunderrot', value: 'burgundy red hair' },
      { id: 'silver_gray', label: 'Silbergrau', value: 'silver gray hair' },
      { id: 'white_hair', label: 'Weiß', value: 'white hair' },
      { id: 'pastel_pink', label: 'Pastellrosa', value: 'pastel pink hair' },
      { id: 'lavender_purple', label: 'Lavendel', value: 'lavender purple hair' },
      { id: 'ocean_blue', label: 'Ozeanblau', value: 'ocean blue hair' },
      { id: 'rainbow_hair', label: 'Regenbogen', value: 'rainbow colored hair' }
    ]
  },
  {
    id: 'hair_length',
    name: 'Haarlänge',
    icon: <Crown className="w-4 h-4" />,
    section: 'hair_makeup',
    options: [
      { id: 'very_short', label: 'Sehr kurz', value: 'very short hair' },
      { id: 'short', label: 'Kurz', value: 'short hair' },
      { id: 'bob_length', label: 'Bob-Länge', value: 'bob length hair' },
      { id: 'shoulder_length', label: 'Schulterlang', value: 'shoulder length hair' },
      { id: 'medium_length', label: 'Mittellang', value: 'medium length hair' },
      { id: 'long', label: 'Lang', value: 'long hair' },
      { id: 'very_long', label: 'Sehr lang', value: 'very long hair' },
      { id: 'waist_length', label: 'Bis zur Taille', value: 'waist length hair' },
      { id: 'floor_length', label: 'Bodenlang', value: 'floor length hair' }
    ]
  },
  {
    id: 'hairstyles',
    name: 'Frisuren',
    icon: <Crown className="w-4 h-4" />,
    section: 'hair_makeup',
    options: [
      { id: 'loose_hair', label: 'Offene Haare', value: 'loose flowing hair' },
      { id: 'ponytail', label: 'Pferdeschwanz', value: 'ponytail' },
      { id: 'high_ponytail', label: 'Hoher Pferdeschwanz', value: 'high ponytail' },
      { id: 'low_ponytail', label: 'Tiefer Pferdeschwanz', value: 'low ponytail' },
      { id: 'messy_bun', label: 'Messy Bun', value: 'messy bun hairstyle' },
      { id: 'sleek_bun', label: 'Sleeker Dutt', value: 'sleek bun hairstyle' },
      { id: 'french_braid', label: 'Französischer Zopf', value: 'french braid' },
      { id: 'dutch_braid', label: 'Holländischer Zopf', value: 'dutch braid' },
      { id: 'fishtail_braid', label: 'Fischgrätenzopf', value: 'fishtail braid' },
      { id: 'crown_braid', label: 'Kronenzopf', value: 'crown braid' },
      { id: 'waterfall_braid', label: 'Wasserfall-Zopf', value: 'waterfall braid' },
      { id: 'boxer_braids', label: 'Boxer Braids', value: 'boxer braids' },
      { id: 'space_buns', label: 'Space Buns', value: 'space buns hairstyle' },
      { id: 'half_up_half_down', label: 'Half-Up Half-Down', value: 'half up half down hairstyle' },
      { id: 'pixie_cut', label: 'Pixie Cut', value: 'pixie cut hairstyle' },
      { id: 'bob_cut', label: 'Bob Cut', value: 'bob cut hairstyle' },
      { id: 'undercut', label: 'Undercut', value: 'undercut hairstyle' }
    ]
  },
  {
    id: 'hair_texture',
    name: 'Haarstruktur',
    icon: <Crown className="w-4 h-4" />,
    section: 'hair_makeup',
    options: [
      { id: 'straight_hair', label: 'Glatte Haare', value: 'straight hair' },
      { id: 'sleek_straight', label: 'Sleek & Glatt', value: 'sleek straight hair' },
      { id: 'wavy_hair', label: 'Wellige Haare', value: 'wavy hair' },
      { id: 'beach_waves', label: 'Beach Waves', value: 'beach wave hair' },
      { id: 'loose_curls', label: 'Lockere Locken', value: 'loose curls' },
      { id: 'tight_curls', label: 'Enge Locken', value: 'tight curls' },
      { id: 'spiral_curls', label: 'Spirallocken', value: 'spiral curls' },
      { id: 'afro_curls', label: 'Afro-Locken', value: 'afro curls' },
      { id: 'kinky_hair', label: 'Krauses Haar', value: 'kinky hair' },
      { id: 'coily_hair', label: 'Spiraliges Haar', value: 'coily hair' },
      { id: 'voluminous_hair', label: 'Voluminöses Haar', value: 'voluminous hair' }
    ]
  },
  {
    id: 'makeup_base',
    name: 'Makeup Basis',
    icon: <Sparkles className="w-4 h-4" />,
    section: 'hair_makeup',
    options: [
      { id: 'natural_makeup', label: 'Natürliches Makeup', value: 'natural makeup' },
      { id: 'flawless_skin', label: 'Makellose Haut', value: 'flawless makeup' },
      { id: 'dewy_skin', label: 'Strahlende Haut', value: 'dewy skin makeup' },
      { id: 'matte_skin', label: 'Matte Haut', value: 'matte skin makeup' },
      { id: 'glowing_skin', label: 'Leuchtende Haut', value: 'glowing skin' },
      { id: 'porcelain_skin', label: 'Porzellan-Haut', value: 'porcelain skin makeup' },
      { id: 'bronzed_skin', label: 'Gebräunte Haut', value: 'bronzed skin makeup' },
      { id: 'highlighted_cheeks', label: 'Betonte Wangenknochen', value: 'highlighted cheekbones' },
      { id: 'contoured_face', label: 'Konturiertes Gesicht', value: 'contoured makeup' },
      { id: 'airbrush_finish', label: 'Airbrush-Finish', value: 'airbrush makeup' }
    ]
  },
  {
    id: 'eye_makeup',
    name: 'Augen-Makeup',
    icon: <Eye className="w-4 h-4" />,
    section: 'hair_makeup',
    options: [
      { id: 'smoky_eyes', label: 'Smoky Eyes', value: 'smoky eye makeup' },
      { id: 'natural_eyes', label: 'Natürliche Augen', value: 'natural eye makeup' },
      { id: 'dramatic_eyes', label: 'Dramatische Augen', value: 'dramatic eye makeup' },
      { id: 'winged_eyeliner', label: 'Winged Eyeliner', value: 'winged eyeliner' },
      { id: 'cat_eye', label: 'Cat Eye', value: 'cat eye makeup' },
      { id: 'bold_eyeliner', label: 'Markanter Eyeliner', value: 'bold eyeliner' },
      { id: 'colorful_eyeshadow', label: 'Farbiger Lidschatten', value: 'colorful eyeshadow' },
      { id: 'glitter_eyes', label: 'Glitzer-Augen', value: 'glitter eye makeup' },
      { id: 'metallic_eyeshadow', label: 'Metallic Lidschatten', value: 'metallic eyeshadow' },
      { id: 'long_eyelashes', label: 'Lange Wimpern', value: 'long eyelashes' },
      { id: 'false_lashes', label: 'Künstliche Wimpern', value: 'false eyelashes' },
      { id: 'defined_eyebrows', label: 'Definierte Augenbrauen', value: 'defined eyebrows' }
    ]
  },
  {
    id: 'lip_makeup',
    name: 'Lippen-Makeup',
    icon: <Heart className="w-4 h-4" />,
    section: 'hair_makeup',
    options: [
      { id: 'natural_lips', label: 'Natürliche Lippen', value: 'natural lips' },
      { id: 'red_lipstick', label: 'Roter Lippenstift', value: 'red lipstick' },
      { id: 'pink_lipstick', label: 'Rosa Lippenstift', value: 'pink lipstick' },
      { id: 'nude_lipstick', label: 'Nude Lippenstift', value: 'nude lipstick' },
      { id: 'dark_lipstick', label: 'Dunkler Lippenstift', value: 'dark lipstick' },
      { id: 'glossy_lips', label: 'Glänzende Lippen', value: 'glossy lips' },
      { id: 'matte_lips', label: 'Matte Lippen', value: 'matte lips' },
      { id: 'berry_lips', label: 'Beerenfarbe', value: 'berry colored lips' },
      { id: 'coral_lips', label: 'Korallenfarbe', value: 'coral lips' },  
      { id: 'plump_lips', label: 'Volle Lippen', value: 'plump lips' }
    ]
  },

  // KLEIDUNG KATEGORIEN
  {
    id: 'womens_tops',
    name: 'Damen Oberteile',
    icon: <Shirt className="w-4 h-4" />,
    section: 'clothing',
    genderSpecific: ['woman'],
    options: [
      { id: 'silk_blouse', label: 'Seidenbluse', value: 'silk blouse' },
      { id: 'business_blouse', label: 'Business-Bluse', value: 'business blouse' },
      { id: 'off_shoulder_blouse', label: 'Off-Shoulder Bluse', value: 'off-shoulder blouse' },
      { id: 'ruffle_blouse', label: 'Rüschenbluse', value: 'ruffle blouse' },
      { id: 'wrap_blouse', label: 'Wickelbluse', value: 'wrap blouse' },
      { id: 'tunic', label: 'Tunika', value: 'flowing tunic' },
      { id: 'crop_top', label: 'Crop Top', value: 'crop top' },
      { id: 'bandeau_top', label: 'Bandeau-Top', value: 'bandeau top' },
      { id: 'camisole', label: 'Camisole', value: 'delicate camisole' },
      { id: 'tank_top', label: 'Tank Top', value: 'fitted tank top' },
      { id: 'sweater', label: 'Pullover', value: 'cozy sweater' },
      { id: 'cardigan', label: 'Cardigan', value: 'elegant cardigan' }
    ]
  },
  {
    id: 'mens_tops',
    name: 'Herren Oberteile',
    icon: <Shirt className="w-4 h-4" />,
    section: 'clothing',
    genderSpecific: ['man'],
    options: [
      { id: 'dress_shirt', label: 'Hemd', value: 'dress shirt' },
      { id: 'casual_shirt', label: 'Freizeithemd', value: 'casual shirt' },
      { id: 'polo_shirt', label: 'Polo-Shirt', value: 'polo shirt' },
      { id: 't_shirt', label: 'T-Shirt', value: 't-shirt' },
      { id: 'henley_shirt', label: 'Henley-Shirt', value: 'henley shirt' },
      { id: 'sweater', label: 'Pullover', value: 'mens sweater' },
      { id: 'hoodie', label: 'Hoodie', value: 'casual hoodie' },
      { id: 'vest', label: 'Weste', value: 'formal vest' },
      { id: 'blazer', label: 'Blazer', value: 'tailored blazer' },
      { id: 'suit_jacket', label: 'Sakko', value: 'suit jacket' },
      { id: 'turtleneck', label: 'Rollkragenpullover', value: 'turtleneck sweater' },
      { id: 'cardigan', label: 'Cardigan', value: 'mens cardigan' }
    ]
  },
  {
    id: 'dresses',
    name: 'Kleider',
    icon: <Shirt className="w-4 h-4" />,
    section: 'clothing',
    genderSpecific: ['woman'],
    options: [
      { id: 'evening_dress', label: 'Abendkleid', value: 'elegant evening dress' },
      { id: 'cocktail_dress', label: 'Cocktailkleid', value: 'stylish cocktail dress' },
      { id: 'maxi_dress', label: 'Maxikleid', value: 'flowing maxi dress' },
      { id: 'midi_dress', label: 'Midikleid', value: 'chic midi dress' },
      { id: 'mini_dress', label: 'Minikleid', value: 'trendy mini dress' },
      { id: 'a_line_dress', label: 'A-Linien Kleid', value: 'a-line dress' },
      { id: 'bodycon_dress', label: 'Bodycon Kleid', value: 'fitted bodycon dress' },
      { id: 'wrap_dress', label: 'Wickelkleid', value: 'flattering wrap dress' },
      { id: 'sundress', label: 'Sommerkleid', value: 'light sundress' },
      { id: 'ball_gown', label: 'Ballkleid', value: 'luxurious ball gown' },
      { id: 'wedding_dress', label: 'Hochzeitskleid', value: 'beautiful wedding dress' },
      { id: 'little_black_dress', label: 'Kleines Schwarzes', value: 'classic little black dress' }
    ]
  },
  {
    id: 'bottoms',
    name: 'Hosen & Röcke',
    icon: <Shirt className="w-4 h-4" />,
    section: 'clothing',
    options: [
      { id: 'jeans', label: 'Jeans', value: 'fitted jeans' },
      { id: 'skinny_jeans', label: 'Skinny Jeans', value: 'skinny jeans' },
      { id: 'straight_jeans', label: 'Straight Jeans', value: 'straight leg jeans' },
      { id: 'bootcut_jeans', label: 'Bootcut Jeans', value: 'bootcut jeans' },
      { id: 'dress_pants', label: 'Stoffhose', value: 'tailored dress pants' },
      { id: 'chinos', label: 'Chinos', value: 'casual chinos' },
      { id: 'leggings', label: 'Leggings', value: 'fitted leggings', genderSpecific: ['woman'] },
      { id: 'yoga_pants', label: 'Yoga-Hose', value: 'comfortable yoga pants', genderSpecific: ['woman'] },
      { id: 'pencil_skirt', label: 'Bleistiftrock', value: 'pencil skirt', genderSpecific: ['woman'] },
      { id: 'a_line_skirt', label: 'A-Linien Rock', value: 'a-line skirt', genderSpecific: ['woman'] },
      { id: 'maxi_skirt', label: 'Maxirock', value: 'flowing maxi skirt', genderSpecific: ['woman'] },
      { id: 'mini_skirt', label: 'Minirock', value: 'trendy mini skirt', genderSpecific: ['woman'] },
      { id: 'pleated_skirt', label: 'Faltenrock', value: 'pleated skirt', genderSpecific: ['woman'] },
      { id: 'shorts', label: 'Shorts', value: 'casual shorts' },
      { id: 'bermuda_shorts', label: 'Bermuda Shorts', value: 'knee-length bermuda shorts' }
    ]
  },
  {
    id: 'outerwear',
    name: 'Oberbekleidung',
    icon: <Shirt className="w-4 h-4" />,
    section: 'clothing',
    options: [
      { id: 'leather_jacket', label: 'Lederjacke', value: 'stylish leather jacket' },
      { id: 'denim_jacket', label: 'Jeansjacke', value: 'classic denim jacket' },
      { id: 'bomber_jacket', label: 'Bomberjacke', value: 'trendy bomber jacket' },
      { id: 'trench_coat', label: 'Trenchcoat', value: 'elegant trench coat' },
      { id: 'winter_coat', label: 'Wintermantel', value: 'warm winter coat' },
      { id: 'peacoat', label: 'Caban', value: 'classic peacoat' },
      { id: 'parka', label: 'Parka', value: 'practical parka' },
      { id: 'fur_coat', label: 'Pelzmantel', value: 'luxurious fur coat' },
      { id: 'cape', label: 'Cape', value: 'dramatic cape' },
      { id: 'kimono', label: 'Kimono', value: 'flowing kimono' },
      { id: 'cardigan_coat', label: 'Strickmantel', value: 'cozy cardigan coat' },
      { id: 'military_jacket', label: 'Militärjacke', value: 'structured military jacket' }
    ]
  },
  {
    id: 'footwear',
    name: 'Schuhe',
    icon: <Shirt className="w-4 h-4" />,
    section: 'clothing',
    options: [
      { id: 'high_heels', label: 'High Heels', value: 'elegant high heels', genderSpecific: ['woman'] },
      { id: 'stilettos', label: 'Stilettos', value: 'sleek stilettos', genderSpecific: ['woman'] },
      { id: 'pumps', label: 'Pumps', value: 'classic pumps', genderSpecific: ['woman'] },
      { id: 'ankle_boots', label: 'Ankle Boots', value: 'stylish ankle boots' },
      { id: 'knee_boots', label: 'Kniehohe Stiefel', value: 'knee-high boots' },
      { id: 'thigh_boots', label: 'Overknee Stiefel', value: 'thigh-high boots', genderSpecific: ['woman'] },
      { id: 'combat_boots', label: 'Combat Boots', value: 'edgy combat boots' },
      { id: 'sneakers', label: 'Sneakers', value: 'casual sneakers' },
      { id: 'running_shoes', label: 'Laufschuhe', value: 'athletic running shoes' },
      { id: 'dress_shoes', label: 'Lederschuhe', value: 'polished dress shoes' },
      { id: 'loafers', label: 'Loafer', value: 'comfortable loafers' },
      { id: 'sandals', label: 'Sandalen', value: 'strappy sandals' },
      { id: 'ballet_flats', label: 'Ballerinas', value: 'comfortable ballet flats', genderSpecific: ['woman'] }
    ]
  },

  // EMOTIONEN KATEGORIEN
  {
    id: 'positive_emotions',
    name: 'Positive Emotionen',
    icon: <Smile className="w-4 h-4" />,
    section: 'emotion',
    options: [
      { id: 'joyful', label: 'Freudig', value: 'joyful expression' },
      { id: 'happy', label: 'Glücklich', value: 'happy smile' },
      { id: 'cheerful', label: 'Fröhlich', value: 'cheerful demeanor' },
      { id: 'radiant', label: 'Strahlend', value: 'radiant happiness' },
      { id: 'euphoric', label: 'Euphorisch', value: 'euphoric joy' },
      { id: 'blissful', label: 'Glückselig', value: 'blissful contentment' },
      { id: 'ecstatic', label: 'Ekstatisch', value: 'ecstatic expression' },
      { id: 'elated', label: 'Hocherfreut', value: 'elated mood' },
      { id: 'optimistic', label: 'Optimistisch', value: 'optimistic outlook' },
      { id: 'hopeful', label: 'Hoffnungsvoll', value: 'hopeful expression' },
      { id: 'content', label: 'Zufrieden', value: 'content smile' },
      { id: 'peaceful', label: 'Friedlich', value: 'peaceful serenity' }
    ]
  },
  {
    id: 'confident_emotions',
    name: 'Selbstbewusste Emotionen',
    icon: <Star className="w-4 h-4" />,
    section: 'emotion',
    options: [
      { id: 'confident', label: 'Selbstbewusst', value: 'confident demeanor' },
      { id: 'powerful', label: 'Mächtig', value: 'powerful presence' },
      { id: 'strong', label: 'Stark', value: 'strong character' },
      { id: 'determined', label: 'Entschlossen', value: 'determined look' },
      { id: 'fierce', label: 'Kämpferisch', value: 'fierce attitude' },
      { id: 'bold', label: 'Kühn', value: 'bold personality' },
      { id: 'assertive', label: 'Durchsetzungsfähig', value: 'assertive stance' },
      { id: 'commanding', label: 'Befehlshabend', value: 'commanding presence' },
      { id: 'authoritative', label: 'Autoritär', value: 'authoritative aura' },
      { id: 'dominant', label: 'Dominant', value: 'dominant energy' },
      { id: 'charismatic', label: 'Charismatisch', value: 'charismatic charm' },
      { id: 'magnetic', label: 'Magnetisch', value: 'magnetic appeal' }
    ]
  },
  {
    id: 'mysterious_emotions',
    name: 'Geheimnisvolle Emotionen',
    icon: <Eye className="w-4 h-4" />,
    section: 'emotion',
    options: [
      { id: 'mysterious', label: 'Geheimnisvoll', value: 'mysterious aura' },
      { id: 'enigmatic', label: 'Rätselhaft', value: 'enigmatic smile' },
      { id: 'secretive', label: 'Verschwiegen', value: 'secretive look' },
      { id: 'intriguing', label: 'Faszinierend', value: 'intriguing personality' },
      { id: 'alluring', label: 'Verführerisch', value: 'alluring charm' },
      { id: 'seductive', label: 'Verführerisch', value: 'seductive gaze' },
      { id: 'sultry', label: 'Sinnlich', value: 'sultry expression' },
      { id: 'captivating', label: 'Fesselnd', value: 'captivating presence' },
      { id: 'mesmerizing', label: 'Hypnotisierend', value: 'mesmerizing eyes' },
      { id: 'bewitching', label: 'Bezaubernd', value: 'bewitching smile' },
      { id: 'hypnotic', label: 'Hypnotisch', value: 'hypnotic stare' },
      { id: 'spellbinding', label: 'Bannen', value: 'spellbinding beauty' }
    ]
  },
  {
    id: 'elegant_emotions',
    name: 'Elegante Emotionen',
    icon: <Crown className="w-4 h-4" />,
    section: 'emotion',
    options: [
      { id: 'elegant', label: 'Elegant', value: 'elegant grace' },
      { id: 'sophisticated', label: 'Kultiviert', value: 'sophisticated charm' },
      { id: 'refined', label: 'Verfeinert', value: 'refined beauty' },
      { id: 'graceful', label: 'Anmutig', value: 'graceful poise' },
      { id: 'poised', label: 'Gefasst', value: 'poised composure' },
      { id: 'dignified', label: 'Würdevoll', value: 'dignified bearing' },
      { id: 'aristocratic', label: 'Aristokratisch', value: 'aristocratic grace' },
      { id: 'regal', label: 'Königlich', value: 'regal presence' },
      { id: 'noble', label: 'Edel', value: 'noble character' },
      { id: 'majestic', label: 'Majestätisch', value: 'majestic aura' },
      { id: 'classy', label: 'Stilvoll', value: 'classy elegance' },
      { id: 'chic', label: 'Schick', value: 'chic sophistication' }
    ]
  },

  // UMGEBUNG KATEGORIEN
  {
    id: 'indoor_environments',
    name: 'Innenräume',
    icon: <Mountain className="w-4 h-4" />,
    section: 'environment',
    options: [
      { id: 'luxury_apartment', label: 'Luxus-Apartment', value: 'luxury apartment interior' },
      { id: 'modern_loft', label: 'Modernes Loft', value: 'modern loft space' },
      { id: 'cozy_bedroom', label: 'Gemütliches Schlafzimmer', value: 'cozy bedroom setting' },
      { id: 'elegant_living_room', label: 'Elegantes Wohnzimmer', value: 'elegant living room' },
      { id: 'marble_bathroom', label: 'Marmor-Badezimmer', value: 'marble bathroom' },
      { id: 'walk_in_closet', label: 'Begehbarer Kleiderschrank', value: 'walk-in closet' },
      { id: 'home_office', label: 'Home Office', value: 'stylish home office' },
      { id: 'library', label: 'Bibliothek', value: 'classical library' },
      { id: 'art_gallery', label: 'Kunstgalerie', value: 'contemporary art gallery' },
      { id: 'restaurant', label: 'Restaurant', value: 'upscale restaurant' },
      { id: 'hotel_lobby', label: 'Hotel-Lobby', value: 'luxurious hotel lobby' },
      { id: 'spa', label: 'Spa', value: 'tranquil spa environment' }
    ]
  },
  {
    id: 'outdoor_environments',
    name: 'Außenräume',
    icon: <Mountain className="w-4 h-4" />,
    section: 'environment',
    options: [
      { id: 'city_street', label: 'Stadtstraße', value: 'bustling city street' },
      { id: 'rooftop_terrace', label: 'Dachterrasse', value: 'stylish rooftop terrace' },
      { id: 'park_garden', label: 'Park & Garten', value: 'beautiful park garden' },
      { id: 'beach_sunset', label: 'Strand bei Sonnenuntergang', value: 'beach at sunset' },
      { id: 'mountain_landscape', label: 'Berglandschaft', value: 'majestic mountain landscape' },
      { id: 'forest_path', label: 'Waldweg', value: 'enchanted forest path' },
      { id: 'lake_shore', label: 'Seeufer', value: 'serene lake shore' },
      { id: 'desert_dunes', label: 'Wüstendünen', value: 'dramatic desert dunes' },
      { id: 'cliff_edge', label: 'Klippenrand', value: 'dramatic cliff edge' },
      { id: 'waterfall', label: 'Wasserfall', value: 'cascading waterfall' },
      { id: 'meadow_field', label: 'Blumenwiese', value: 'colorful flower meadow' },
      { id: 'vineyard', label: 'Weinberg', value: 'rolling vineyard hills' }
    ]
  },
  {
    id: 'urban_environments',
    name: 'Städtische Umgebung',
    icon: <Mountain className="w-4 h-4" />,
    section: 'environment',
    options: [
      { id: 'skyscraper_view', label: 'Wolkenkratzer-Aussicht', value: 'skyscraper city view' },
      { id: 'neon_lights', label: 'Neonlichter', value: 'vibrant neon lights' },
      { id: 'subway_station', label: 'U-Bahn Station', value: 'modern subway station' },
      { id: 'bridge_walkway', label: 'Brücken-Gehweg', value: 'architectural bridge walkway' },
      { id: 'shopping_district', label: 'Einkaufsviertel', value: 'upscale shopping district' },
      { id: 'cafe_terrace', label: 'Café-Terrasse', value: 'charming cafe terrace' },
      { id: 'art_district', label: 'Kunstviertel', value: 'trendy art district' },
      { id: 'warehouse_loft', label: 'Warehouse Loft', value: 'industrial warehouse loft' },
      { id: 'fire_escape', label: 'Feuerleiter', value: 'urban fire escape' },
      { id: 'alleyway', label: 'Gasse', value: 'atmospheric alleyway' },
      { id: 'parking_garage', label: 'Parkhaus', value: 'modern parking garage' },
      { id: 'construction_site', label: 'Baustelle', value: 'urban construction site' }
    ]
  },

  // BELEUCHTUNG KATEGORIEN
  {
    id: 'natural_lighting',
    name: 'Natürliche Beleuchtung',
    icon: <Lightbulb className="w-4 h-4" />,
    section: 'lighting',
    options: [
      { id: 'golden_hour', label: 'Goldene Stunde', value: 'golden hour lighting' },
      { id: 'blue_hour', label: 'Blaue Stunde', value: 'blue hour lighting' },
      { id: 'sunrise', label: 'Sonnenaufgang', value: 'warm sunrise light' },
      { id: 'sunset', label: 'Sonnenuntergang', value: 'dramatic sunset light' },
      { id: 'midday_sun', label: 'Mittagssonne', value: 'bright midday sunlight' },
      { id: 'overcast', label: 'Bewölkt', value: 'soft overcast lighting' },
      { id: 'window_light', label: 'Fensterlicht', value: 'natural window light' },
      { id: 'dappled_light', label: 'Gesprenkeltes Licht', value: 'dappled sunlight' },
      { id: 'backlit', label: 'Hinterleuchtet', value: 'beautiful backlighting' },
      { id: 'rim_light', label: 'Kantenlicht', value: 'dramatic rim lighting' },
      { id: 'side_light', label: 'Seitenlicht', value: 'sculpting side light' },
      { id: 'top_light', label: 'Oberlicht', value: 'natural top lighting' }
    ]
  },
  {
    id: 'artificial_lighting',
    name: 'Künstliche Beleuchtung',
    icon: <Lightbulb className="w-4 h-4" />,
    section: 'lighting',
    options: [
      { id: 'studio_lighting', label: 'Studio-Beleuchtung', value: 'professional studio lighting' },
      { id: 'soft_box', label: 'Softbox', value: 'soft box lighting' },
      { id: 'ring_light', label: 'Ringlicht', value: 'even ring light' },
      { id: 'spotlight', label: 'Scheinwerfer', value: 'dramatic spotlight' },
      { id: 'neon_lighting', label: 'Neon-Beleuchtung', value: 'colorful neon lighting' },
      { id: 'led_strips', label: 'LED-Streifen', value: 'modern LED strip lighting' },
      { id: 'candle_light', label: 'Kerzenlicht', value: 'romantic candlelight' },
      { id: 'fireplace_glow', label: 'Kaminschein', value: 'warm fireplace glow' },
      { id: 'street_lights', label: 'Straßenlaternen', value: 'atmospheric street lighting' },
      { id: 'car_headlights', label: 'Autoscheinwerfer', value: 'dramatic car headlights' },
      { id: 'stage_lighting', label: 'Bühnenlicht', value: 'theatrical stage lighting' },
      { id: 'colored_gels', label: 'Farbfolien', value: 'creative colored gel lighting' }
    ]
  },
  {
    id: 'mood_lighting',
    name: 'Stimmungsbeleuchtung',
    icon: <Lightbulb className="w-4 h-4" />,
    section: 'lighting',
    options: [
      { id: 'dramatic_shadows', label: 'Dramatische Schatten', value: 'dramatic shadow play' },
      { id: 'soft_diffused', label: 'Weich gestreut', value: 'soft diffused lighting' },
      { id: 'high_contrast', label: 'Hoher Kontrast', value: 'high contrast lighting' },
      { id: 'low_key', label: 'Low Key', value: 'moody low key lighting' },
      { id: 'high_key', label: 'High Key', value: 'bright high key lighting' },
      { id: 'chiaroscuro', label: 'Chiaroscuro', value: 'artistic chiaroscuro lighting' },
      { id: 'gradient_light', label: 'Verlaufslicht', value: 'smooth gradient lighting' },
      { id: 'dappled_shadows', label: 'Gesprenkelter Schatten', value: 'natural dappled shadows' },
      { id: 'silhouette', label: 'Silhouette', value: 'striking silhouette lighting' },
      { id: 'fill_light', label: 'Aufhelllicht', value: 'balanced fill lighting' },
      { id: 'key_light', label: 'Hauptlicht', value: 'strong key lighting' },
      { id: 'ambient_light', label: 'Umgebungslicht', value: 'subtle ambient lighting' }
    ]
  },

  // POSEN KATEGORIEN
  {
    id: 'portrait_poses',
    name: 'Portrait-Posen',
    icon: <User className="w-4 h-4" />,
    section: 'poses',
    options: [
      { id: 'headshot', label: 'Kopfbild', value: 'professional headshot pose' },
      { id: 'three_quarter', label: 'Dreiviertel-Ansicht', value: 'three-quarter view pose' },
      { id: 'profile', label: 'Profil', value: 'elegant profile pose' },
      { id: 'looking_over_shoulder', label: 'Blick über Schulter', value: 'looking over shoulder pose' },
      { id: 'chin_on_hand', label: 'Kinn auf Hand', value: 'thoughtful chin on hand pose' },
      { id: 'hands_framing_face', label: 'Hände rahmen Gesicht', value: 'hands framing face pose' },
      { id: 'looking_up', label: 'Blick nach oben', value: 'looking upward pose' },
      { id: 'looking_down', label: 'Blick nach unten', value: 'contemplative looking down pose' },
      { id: 'eyes_closed', label: 'Augen geschlossen', value: 'serene eyes closed pose' },
      { id: 'laughing', label: 'Lachend', value: 'natural laughing pose' },
      { id: 'serious_expression', label: 'Ernster Ausdruck', value: 'intense serious expression' },
      { id: 'smiling', label: 'Lächelnd', value: 'warm genuine smile' }
    ]
  },
  {
    id: 'body_poses',
    name: 'Körper-Posen',
    icon: <User className="w-4 h-4" />,
    section: 'poses',
    options: [
      { id: 'standing_straight', label: 'Gerade stehend', value: 'confident standing pose' },
      { id: 'leaning_against_wall', label: 'An Wand gelehnt', value: 'casual leaning against wall' },
      { id: 'arms_crossed', label: 'Verschränkte Arme', value: 'arms crossed pose' },
      { id: 'hands_on_hips', label: 'Hände in die Hüften', value: 'hands on hips pose' },
      { id: 'one_hand_on_hip', label: 'Eine Hand in Hüfte', value: 'one hand on hip pose' },
      { id: 'arms_at_sides', label: 'Arme seitlich', value: 'relaxed arms at sides' },
      { id: 'sitting_chair', label: 'Auf Stuhl sitzend', value: 'elegant sitting in chair' },
      { id: 'sitting_floor', label: 'Auf Boden sitzend', value: 'casual sitting on floor' },
      { id: 'lying_down', label: 'Liegend', value: 'graceful lying pose' },
      { id: 'walking', label: 'Gehend', value: 'dynamic walking pose' },
      { id: 'running', label: 'Rennend', value: 'energetic running pose' },
      { id: 'dancing', label: 'Tanzend', value: 'expressive dance pose' }
    ]
  },
  {
    id: 'hand_poses',
    name: 'Hand-Posen',
    icon: <User className="w-4 h-4" />,
    section: 'poses',
    options: [
      { id: 'relaxed_hands', label: 'Entspannte Hände', value: 'naturally relaxed hands' },
      { id: 'gesturing', label: 'Gestikulierend', value: 'expressive hand gestures' },
      { id: 'touching_face', label: 'Gesicht berührend', value: 'gently touching face' },
      { id: 'running_through_hair', label: 'Durch Haare fahrend', value: 'running fingers through hair' },
      { id: 'adjusting_clothing', label: 'Kleidung zurechtzupfend', value: 'adjusting clothing' },
      { id: 'holding_object', label: 'Gegenstand haltend', value: 'gracefully holding object' },
      { id: 'praying_hands', label: 'Betende Hände', value: 'peaceful praying hands' },
      { id: 'fists_clenched', label: 'Geballte Fäuste', value: 'determined clenched fists' },
      { id: 'pointing', label: 'Zeigend', value: 'confident pointing gesture' },
      { id: 'waving', label: 'Winkend', value: 'friendly waving gesture' },
      { id: 'thumbs_up', label: 'Daumen hoch', value: 'positive thumbs up' },
      { id: 'peace_sign', label: 'Victory-Zeichen', value: 'playful peace sign' }
    ]
  },

  // ACCESSOIRES KATEGORIEN
  {
    id: 'jewelry',
    name: 'Schmuck',
    icon: <Star className="w-4 h-4" />,
    section: 'accessories',
    options: [
      { id: 'diamond_necklace', label: 'Diamant-Halskette', value: 'sparkling diamond necklace' },
      { id: 'pearl_necklace', label: 'Perlen-Halskette', value: 'elegant pearl necklace' },
      { id: 'gold_chain', label: 'Goldkette', value: 'luxurious gold chain' },
      { id: 'silver_necklace', label: 'Silber-Halskette', value: 'delicate silver necklace' },
      { id: 'choker', label: 'Choker', value: 'stylish choker necklace' },
      { id: 'pendant', label: 'Anhänger', value: 'meaningful pendant necklace' },
      { id: 'diamond_earrings', label: 'Diamant-Ohrringe', value: 'brilliant diamond earrings' },
      { id: 'pearl_earrings', label: 'Perlen-Ohrringe', value: 'classic pearl earrings' },
      { id: 'hoop_earrings', label: 'Kreolen', value: 'chic hoop earrings' },
      { id: 'stud_earrings', label: 'Ohrstecker', value: 'simple stud earrings' },
      { id: 'bracelet', label: 'Armband', value: 'elegant bracelet' },
      { id: 'watch', label: 'Uhr', value: 'luxury wristwatch' },
      { id: 'rings', label: 'Ringe', value: 'decorative rings' }
    ]
  },
  {
    id: 'bags_accessories',
    name: 'Taschen & Accessoires',
    icon: <Star className="w-4 h-4" />,
    section: 'accessories',
    options: [
      { id: 'designer_handbag', label: 'Designer-Handtasche', value: 'luxury designer handbag' },
      { id: 'clutch_bag', label: 'Clutch', value: 'elegant evening clutch' },
      { id: 'crossbody_bag', label: 'Umhängetasche', value: 'practical crossbody bag' },
      { id: 'tote_bag', label: 'Shopper', value: 'spacious tote bag' },
      { id: 'backpack', label: 'Rucksack', value: 'stylish backpack' },
      { id: 'briefcase', label: 'Aktentasche', value: 'professional briefcase' },
      { id: 'sunglasses', label: 'Sonnenbrille', value: 'fashionable sunglasses' },
      { id: 'reading_glasses', label: 'Lesebrille', value: 'intellectual reading glasses' },
      { id: 'designer_glasses', label: 'Designer-Brille', value: 'trendy designer glasses' },
      { id: 'hat', label: 'Hut', value: 'stylish hat' },
      { id: 'cap', label: 'Kappe', value: 'casual baseball cap' },
      { id: 'scarf', label: 'Schal', value: 'luxurious silk scarf' },
      { id: 'belt', label: 'Gürtel', value: 'fashionable belt' }
    ]
  },

  // INTERAKTION KATEGORIEN
  {
    id: 'social_interactions',
    name: 'Soziale Interaktionen',
    icon: <HeartHandshake className="w-4 h-4" />,
    section: 'interaction',
    options: [
      { id: 'talking_phone', label: 'Telefonierend', value: 'talking on phone' },
      { id: 'texting', label: 'SMS schreibend', value: 'texting on smartphone' },
      { id: 'taking_selfie', label: 'Selfie machend', value: 'taking a selfie' },
      { id: 'video_call', label: 'Videoanruf', value: 'engaged in video call' },
      { id: 'reading_book', label: 'Buch lesend', value: 'reading a book' },
      { id: 'writing', label: 'Schreibend', value: 'writing in notebook' },
      { id: 'drinking_coffee', label: 'Kaffee trinkend', value: 'enjoying coffee' },
      { id: 'eating', label: 'Essend', value: 'elegantly eating' },
      { id: 'smoking', label: 'Rauchend', value: 'smoking cigarette' },
      { id: 'applying_makeup', label: 'Makeup aufträgt', value: 'applying makeup' },
      { id: 'brushing_hair', label: 'Haare bürstend', value: 'brushing hair' },
      { id: 'looking_mirror', label: 'In Spiegel schauend', value: 'looking in mirror' }
    ]
  },
  {
		id: 'activity_interactions',
		name: 'Aktivitäts-Interaktionen',
		icon: <HeartHandshake className="w-4 h-4" />,
		section: 'interaction',
		options: [
      { id: 'exercising', label: 'Trainierend', value: 'exercising actively' },
      { id: 'yoga', label: 'Yoga machend', value: 'practicing yoga' },
      { id: 'stretching', label: 'Sich dehnend', value: 'stretching gracefully' },
      { id: 'meditating', label: 'Meditierend', value: 'peaceful meditation' },
      { id: 'painting', label: 'Malend', value: 'artistic painting' },
      { id: 'playing_music', label: 'Musik machend', value: 'playing musical instrument' },
      { id: 'singing', label: 'Singend', value: 'singing passionately' },
      { id: 'cooking', label: 'Kochend', value: 'cooking elegantly' },
      { id: 'gardening', label: 'Gärtnern', value: 'tending to garden' },
      { id: 'shopping', label: 'Einkaufend', value: 'luxury shopping' },
      { id: 'driving', label: 'Fahrend', value: 'driving stylishly' },
      { id: 'traveling', label: 'Reisend', value: 'elegant traveling' }
    ]
  },

  // STIMMUNG KATEGORIEN
  {
    id: 'romantic_mood',
    name: 'Romantische Stimmung',
    icon: <Heart className="w-4 h-4" />,
    section: 'mood',
    options: [
      { id: 'romantic', label: 'Romantisch', value: 'romantic atmosphere' },
      { id: 'intimate', label: 'Intim', value: 'intimate mood' },
      { id: 'passionate', label: 'Leidenschaftlich', value: 'passionate energy' },
      { id: 'sensual', label: 'Sinnlich', value: 'sensual ambiance' },
      { id: 'dreamy', label: 'Verträumt', value: 'dreamy romantic mood' },
      { id: 'enchanting', label: 'Bezaubernd', value: 'enchanting atmosphere' },
      { id: 'magical', label: 'Magisch', value: 'magical romantic setting' },
      { id: 'fairy_tale', label: 'Märchenhaft', value: 'fairy tale romance' },
      { id: 'whimsical', label: 'Verspielt', value: 'whimsical romantic mood' },
      { id: 'tender', label: 'Zärtlich', value: 'tender loving atmosphere' },
      { id: 'affectionate', label: 'Liebevoll', value: 'affectionate mood' },
      { id: 'sweet', label: 'Süß', value: 'sweet romantic feeling' }
    ]
  },
  {
    id: 'dramatic_mood',
    name: 'Dramatische Stimmung',
    icon: <Star className="w-4 h-4" />,
    section: 'mood',
    options: [
      { id: 'dramatic', label: 'Dramatisch', value: 'dramatic atmosphere' },
      { id: 'intense', label: 'Intensiv', value: 'intense emotional mood' },
      { id: 'powerful', label: 'Kraftvoll', value: 'powerful dramatic energy' },
      { id: 'epic', label: 'Episch', value: 'epic cinematic mood' },
      { id: 'theatrical', label: 'Theatralisch', value: 'theatrical drama' },
      { id: 'cinematic', label: 'Filmisch', value: 'cinematic storytelling' },
      { id: 'suspenseful', label: 'Spannend', value: 'suspenseful atmosphere' },
      { id: 'mysterious', label: 'Geheimnisvoll', value: 'mysterious dramatic mood' },
      { id: 'dark', label: 'Dunkel', value: 'dark atmospheric mood' },
      { id: 'gothic', label: 'Gotisch', value: 'gothic dramatic style' },
      { id: 'noir', label: 'Noir', value: 'film noir atmosphere' },
      { id: 'moody', label: 'Launisch', value: 'moody dramatic lighting' }
    ]
  },
  {
    id: 'peaceful_mood',
    name: 'Friedliche Stimmung',
    icon: <Heart className="w-4 h-4" />,
    section: 'mood',
    options: [
      { id: 'peaceful', label: 'Friedlich', value: 'peaceful serenity' },
      { id: 'calm', label: 'Ruhig', value: 'calm tranquil mood' },
      { id: 'serene', label: 'Heiter', value: 'serene atmosphere' },
      { id: 'tranquil', label: 'Still', value: 'tranquil peaceful setting' },
      { id: 'meditative', label: 'Meditativ', value: 'meditative calm mood' },
      { id: 'zen', label: 'Zen', value: 'zen-like tranquility' },
      { id: 'harmonious', label: 'Harmonisch', value: 'harmonious balance' },
      { id: 'soothing', label: 'Beruhigend', value: 'soothing gentle mood' },
      { id: 'relaxing', label: 'Entspannend', value: 'relaxing atmosphere' },
      { id: 'comfortable', label: 'Gemütlich', value: 'comfortable cozy mood' },
      { id: 'gentle', label: 'Sanft', value: 'gentle peaceful energy' },
      { id: 'soft', label: 'Weich', value: 'soft tender atmosphere' }
    ]
  },

  // ADDITIONAL DETAILS KATEGORIEN
  {
    id: 'weather_effects',
    name: 'Wetter-Effekte',
    icon: <Mountain className="w-4 h-4" />,
    section: 'additional',
    options: [
      { id: 'rain_drops', label: 'Regentropfen', value: 'rain drops on skin' },
      { id: 'mist_fog', label: 'Nebel', value: 'mysterious mist and fog' },
      { id: 'snow_flakes', label: 'Schneeflocken', value: 'delicate snowflakes' },
      { id: 'wind_blown', label: 'Windverwehte', value: 'wind blown hair and clothing' },
      { id: 'sunbeams', label: 'Sonnenstrahlen', value: 'dramatic sunbeams' },
      { id: 'rainbow', label: 'Regenbogen', value: 'colorful rainbow background' },
      { id: 'lightning', label: 'Blitz', value: 'dramatic lightning' },
      { id: 'storm_clouds', label: 'Gewitterwolken', value: 'dramatic storm clouds' },
      { id: 'autumn_leaves', label: 'Herbstblätter', value: 'falling autumn leaves' },
      { id: 'cherry_blossoms', label: 'Kirschblüten', value: 'delicate cherry blossoms' },
      { id: 'floating_petals', label: 'Schwebende Blütenblätter', value: 'floating flower petals' },
      { id: 'sparkles', label: 'Glitzer', value: 'magical sparkles in air' }
    ]
  },
  {
    id: 'artistic_effects',
    name: 'Künstlerische Effekte',
    icon: <Palette className="w-4 h-4" />,
    section: 'additional',
    options: [
      { id: 'bokeh_background', label: 'Bokeh-Hintergrund', value: 'beautiful bokeh background' },
      { id: 'lens_flare', label: 'Lens Flare', value: 'artistic lens flare' },
      { id: 'double_exposure', label: 'Doppelbelichtung', value: 'creative double exposure' },
      { id: 'motion_blur', label: 'Bewegungsunschärfe', value: 'artistic motion blur' },
      { id: 'depth_of_field', label: 'Tiefenschärfe', value: 'shallow depth of field' },
      { id: 'vignette', label: 'Vignette', value: 'dramatic vignette effect' },
      { id: 'film_grain', label: 'Filmkorn', value: 'vintage film grain texture' },
      { id: 'cross_processing', label: 'Cross Processing', value: 'artistic cross processing' },
      { id: 'color_grading', label: 'Color Grading', value: 'cinematic color grading' },
      { id: 'vintage_filter', label: 'Vintage-Filter', value: 'nostalgic vintage filter' },
      { id: 'black_white', label: 'Schwarz-Weiß', value: 'dramatic black and white' },
      { id: 'sepia_tone', label: 'Sepia-Ton', value: 'warm sepia tone effect' }
    ]
  }
];

// Kategorien nach Sektion gruppiert
export const categoriesBySection = allCategories.reduce((acc, category) => {
  if (!acc[category.section]) {
    acc[category.section] = [];
  }
  acc[category.section].push(category);
  return acc;
}, {} as Record<CategorySection, typeof allCategories>);

// Hilfsfunktionen
export const getCategoriesBySection = (section: CategorySection) => {
  return allCategories.filter(cat => cat.section === section);
};

export const getCategoryById = (id: string) => {
  return allCategories.find(cat => cat.id === id);
};

export const getVisibleCategories = (section: CategorySection, gender?: string) => {
  return allCategories.filter(cat => {
    if (cat.section !== section) return false;
    if (cat.genderSpecific && gender) {
      return cat.genderSpecific.includes(gender as any);
    }
    return true;
  });
};