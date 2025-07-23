import { Category } from '../types';

export const clothingCategories: Category[] = [
  // Herren Business & Formal
  {
    id: 'mens_business_formal',
    name: 'Herren Business & Formal',
    icon: 'Shirt',
    section: 'clothing',
    subcategory: 'mens_formal',
    genderSpecific: ['man'],
    options: [
      { id: 'white_shirt', label: 'Weißes Hemd', value: 'crisp white dress shirt', description: 'Klassisches weißes Business-Hemd' },
      { id: 'blue_shirt', label: 'Blaues Hemd', value: 'blue dress shirt', description: 'Elegantes blaues Hemd' },
      { id: 'striped_shirt', label: 'Gestreiftes Hemd', value: 'striped dress shirt', description: 'Gestreiftes Business-Hemd' },
      { id: 'checkered_shirt', label: 'Kariertes Hemd', value: 'checkered dress shirt', description: 'Kariertes Hemd' },
      { id: 'tuxedo_shirt', label: 'Smoking-Hemd', value: 'tuxedo shirt', description: 'Elegantes Smoking-Hemd' },
      { id: 'wing_collar_shirt', label: 'Frackhemd', value: 'wing collar shirt', description: 'Formelles Frackhemd' },
      { id: 'oxford_shirt', label: 'Oxford-Hemd', value: 'oxford dress shirt', description: 'Klassisches Oxford-Hemd' },
      { id: 'poplin_shirt', label: 'Poplin-Hemd', value: 'poplin dress shirt', description: 'Feines Poplin-Hemd' },
      { id: 'flannel_shirt', label: 'Flanell-Hemd', value: 'flannel dress shirt', description: 'Warmes Flanell-Hemd' },
      { id: 'linen_shirt', label: 'Leinenhemd', value: 'linen dress shirt', description: 'Luftiges Leinenhemd' },
      { id: 'silk_shirt', label: 'Seidenhemd', value: 'silk dress shirt', description: 'Luxuriöses Seidenhemd' },
      { id: 'black_suit', label: 'Schwarzer Anzug', value: 'black suit', description: 'Klassischer schwarzer Anzug' },
      { id: 'gray_suit', label: 'Grauer Anzug', value: 'gray suit', description: 'Eleganter grauer Anzug' },
      { id: 'navy_suit', label: 'Navy Anzug', value: 'navy blue suit', description: 'Zeitloser Navy-Anzug' },
      { id: 'tuxedo', label: 'Smoking', value: 'black tuxedo', description: 'Eleganter Smoking' },
      { id: 'tailcoat', label: 'Frack', value: 'formal tailcoat', description: 'Formeller Frack' },
      { id: 'vest', label: 'Weste', value: 'formal vest', description: 'Elegante Anzugweste' },
      { id: 'necktie', label: 'Krawatte', value: 'silk necktie', description: 'Seidene Krawatte' },
      { id: 'bow_tie', label: 'Fliege', value: 'bow tie', description: 'Klassische Fliege' }
    ]
  },
  // Herren Casual
  {
    id: 'mens_casual_sport',
    name: 'Herren Casual & Sport',
    icon: 'Shirt',
    section: 'clothing',
    subcategory: 'mens_casual',
    genderSpecific: ['man'],
    options: [
      { id: 'polo_shirt', label: 'Polo-Shirt', value: 'polo shirt', description: 'Klassisches Polo-Shirt' },
      { id: 'v_neck_shirt', label: 'V-Neck Shirt', value: 'v-neck t-shirt', description: 'V-Ausschnitt T-Shirt' },
      { id: 'crew_neck_tshirt', label: 'Rundhals T-Shirt', value: 'crew neck t-shirt', description: 'Klassisches Rundhals T-Shirt' },
      { id: 'henley_shirt', label: 'Henley-Shirt', value: 'henley shirt', description: 'Lässiges Henley-Shirt' },
      { id: 'tank_top', label: 'Tank Top', value: 'fitted tank top', description: 'Eng anliegendes Tank Top' },
      { id: 'muscle_shirt', label: 'Muskelshirt', value: 'muscle shirt', description: 'Ärmelloses Muskelshirt' },
      { id: 'long_sleeve', label: 'Longsleeve', value: 'long sleeve shirt', description: 'Langarm-Shirt' },
      { id: 'hoodie', label: 'Hoodie', value: 'casual hoodie', description: 'Lässiger Kapuzenpullover' },
      { id: 'zip_hoodie', label: 'Kapuzenpullover', value: 'zip-up hoodie', description: 'Kapuzenpullover mit Reißverschluss' },
      { id: 'sweatshirt', label: 'Sweatshirt', value: 'comfortable sweatshirt', description: 'Bequemes Sweatshirt' },
      { id: 'pullover', label: 'Pullover', value: 'knit pullover', description: 'Gestrickter Pullover' },
      { id: 'cardigan', label: 'Cardigan', value: 'men\'s cardigan', description: 'Männlicher Cardigan' },
      { id: 'knit_sweater', label: 'Strickpullover', value: 'knit sweater', description: 'Warmer Strickpullover' },
      { id: 'wool_sweater', label: 'Wollpullover', value: 'wool sweater', description: 'Hochwertiger Wollpullover' }
    ]
  },
  // Damen Blusen & Shirts
  {
    id: 'womens_blouses_shirts',
    name: 'Damen Blusen & Shirts',
    icon: 'Shirt',
    section: 'clothing',
    subcategory: 'womens_blouses',
    genderSpecific: ['woman'],
    options: [
      { id: 'silk_blouse', label: 'Seidenbluse', value: 'silk blouse', description: 'Elegante Seidenbluse' },
      { id: 'business_blouse', label: 'Business-Bluse', value: 'business blouse', description: 'Professionelle Business-Bluse' },
      { id: 'off_shoulder_blouse', label: 'Off-Shoulder Bluse', value: 'off-shoulder blouse', description: 'Schulterfreie Bluse' },
      { id: 'ruffle_blouse', label: 'Rüschenbluse', value: 'ruffle blouse', description: 'Feminine Rüschenbluse' },
      { id: 'sheer_blouse', label: 'Transparente Bluse', value: 'sheer blouse', description: 'Durchscheinende Bluse' },
      { id: 'wrap_blouse', label: 'Wickelbluse', value: 'wrap blouse', description: 'Feminine Wickelbluse' },
      { id: 'tunic', label: 'Tunika', value: 'flowing tunic', description: 'Fließende Tunika' },
      { id: 'kimono_blouse', label: 'Kimono-Bluse', value: 'kimono style blouse', description: 'Kimono-inspirierte Bluse' },
      { id: 'peasant_blouse', label: 'Peasant-Bluse', value: 'peasant blouse', description: 'Bohemian Peasant-Bluse' },
      { id: 'crop_top', label: 'Crop Top', value: 'crop top', description: 'Bauchfreies Oberteil' },
      { id: 'bandeau_top', label: 'Bandeau-Top', value: 'bandeau top', description: 'Trägerloses Bandeau-Top' },
      { id: 'bralette', label: 'Bralette', value: 'stylish bralette', description: 'Modische Bralette' },
      { id: 'bustier', label: 'Bustier', value: 'fitted bustier', description: 'Eng anliegendes Bustier' },
      { id: 'camisole', label: 'Camisole', value: 'delicate camisole', description: 'Zarte Camisole' },
      { id: 'spaghetti_top', label: 'Spaghetti-Top', value: 'spaghetti strap top', description: 'Träger-Top mit dünnen Trägern' }
    ]
  },
  // Damen Elegante Oberteile
  {
    id: 'womens_elegant_tops',
    name: 'Damen Elegante Oberteile',
    icon: 'Crown',
    section: 'clothing',
    subcategory: 'womens_elegant',
    genderSpecific: ['woman'],
    options: [
      { id: 'corset', label: 'Korsett', value: 'lace corset', description: 'Elegantes Spitzenkorsett' },
      { id: 'corsage', label: 'Corsage', value: 'fitted corsage', description: 'Eng anliegende Corsage' },
      { id: 'lace_top', label: 'Spitzen-Top', value: 'lace top', description: 'Feminines Spitzen-Top' },
      { id: 'satin_top', label: 'Satin-Top', value: 'satin top', description: 'Luxuriöses Satin-Top' },
      { id: 'velvet_top', label: 'Samt-Top', value: 'velvet top', description: 'Edles Samt-Top' },
      { id: 'sequin_top', label: 'Pailletten-Top', value: 'sequin top', description: 'Glitzerndes Pailletten-Top' },
      { id: 'bodysuit', label: 'Bodysuit', value: 'fitted bodysuit', description: 'Eng anliegender Body' },
      { id: 'jumpsuit_top', label: 'Overall-Top', value: 'jumpsuit style top', description: 'Overall-inspiriertes Oberteil' },
      { id: 'halter_top', label: 'Neckholder-Top', value: 'halter top', description: 'Neckholder-Top' },
      { id: 'tank_top_elegant', label: 'Elegantes Träger-Top', value: 'elegant tank top', description: 'Elegantes Träger-Top' },
      { id: 'strapless_top', label: 'Strapless-Top', value: 'strapless top', description: 'Trägerloses Top' },
      { id: 'high_neck_top', label: 'High-Neck Top', value: 'high neck top', description: 'Hochgeschlossenes Top' },
      { id: 'turtleneck', label: 'Turtleneck', value: 'elegant turtleneck', description: 'Eleganter Rollkragen' },
      { id: 'mock_neck', label: 'Mock-Neck', value: 'mock neck top', description: 'Mock-Neck Oberteil' }
    ]
  },
  // Herren Hosen
  {
    id: 'mens_pants',
    name: 'Herren Hosen',
    icon: 'Shirt',
    section: 'clothing',
    subcategory: 'mens_pants',
    genderSpecific: ['man'],
    options: [
      { id: 'dress_pants', label: 'Anzughose', value: 'tailored dress pants', description: 'Elegante Anzughose' },
      { id: 'jeans', label: 'Jeans', value: 'denim jeans', description: 'Klassische Jeans' },
      { id: 'chinos', label: 'Chinos', value: 'chino pants', description: 'Lässige Chino-Hose' },
      { id: 'cargo_pants', label: 'Cargohose', value: 'cargo pants', description: 'Praktische Cargohose' },
      { id: 'shorts', label: 'Shorts', value: 'casual shorts', description: 'Lässige Shorts' },
      { id: 'swim_trunks', label: 'Badehose', value: 'swim trunks', description: 'Sportliche Badehose' },
      { id: 'trackpants', label: 'Jogginghose', value: 'athletic trackpants', description: 'Sportliche Trainingshose' },
      { id: 'leather_pants', label: 'Lederhose', value: 'leather pants', description: 'Schwarze Lederhose' },
      { id: 'skinny_jeans', label: 'Skinny Jeans', value: 'skinny fit jeans', description: 'Eng anliegende Jeans' },
      { id: 'straight_jeans', label: 'Straight Jeans', value: 'straight leg jeans', description: 'Gerade geschnittene Jeans' },
      { id: 'bootcut_jeans', label: 'Boot Cut Jeans', value: 'boot cut jeans', description: 'Bootcut Jeans' },
      { id: 'relaxed_jeans', label: 'Relaxed Jeans', value: 'relaxed fit jeans', description: 'Locker sitzende Jeans' }
    ]
  },
  // Damen Hosen & Röcke  
  {
    id: 'womens_bottoms',
    name: 'Damen Hosen & Röcke',
    icon: 'Shirt',
    section: 'clothing',
    subcategory: 'womens_bottoms',
    genderSpecific: ['woman'],
    options: [
      { id: 'skinny_jeans_womens', label: 'Skinny Jeans', value: 'skinny jeans', description: 'Eng anliegende Jeans' },
      { id: 'boyfriend_jeans', label: 'Boyfriend Jeans', value: 'boyfriend jeans', description: 'Locker sitzende Boyfriend-Jeans' },
      { id: 'mom_jeans', label: 'Mom Jeans', value: 'mom jeans', description: 'Vintage-inspirierte Mom-Jeans' },
      { id: 'high_waist_jeans', label: 'High-Waist Jeans', value: 'high waisted jeans', description: 'Hochgeschnittene Jeans' },
      { id: 'leggings', label: 'Leggings', value: 'stretch leggings', description: 'Eng anliegende Leggings' },
      { id: 'pencil_skirt', label: 'Pencil-Rock', value: 'pencil skirt', description: 'Eng anliegender Bleistiftrock' },
      { id: 'a_line_skirt', label: 'A-Linien-Rock', value: 'a-line skirt', description: 'Klassischer A-Linien-Rock' },
      { id: 'mini_skirt', label: 'Mini-Rock', value: 'mini skirt', description: 'Kurzer Mini-Rock' },
      { id: 'midi_skirt', label: 'Midi-Rock', value: 'midi skirt', description: 'Mittelanger Midi-Rock' },
      { id: 'maxi_skirt', label: 'Maxi-Rock', value: 'maxi skirt', description: 'Langer Maxi-Rock' },
      { id: 'palazzo_pants', label: 'Palazzo-Hose', value: 'palazzo pants', description: 'Weite Palazzo-Hose' },
      { id: 'culottes', label: 'Culottes', value: 'culottes', description: 'Elegante Culottes' }
    ]
  }
];