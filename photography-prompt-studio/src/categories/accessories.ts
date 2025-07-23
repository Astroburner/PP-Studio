import { Crown, Watch, Eye } from 'lucide-react';
import { Category } from '../types';

export const accessoryCategories: Category[] = [
  {
    id: 'jewelry',
    name: 'Schmuck',
    icon: 'Crown',
    section: 'accessories',
    subcategory: 'jewelry',
    options: [
      { id: 'diamond_necklace', label: 'Diamantkette', value: 'diamond necklace', description: 'Elegante Diamantkette' },
      { id: 'pearl_necklace', label: 'Perlenkette', value: 'pearl necklace', description: 'Klassische Perlenkette' },
      { id: 'gold_chain', label: 'Goldkette', value: 'gold chain', description: 'Luxuriöse Goldkette' },
      { id: 'silver_necklace', label: 'Silberkette', value: 'silver necklace', description: 'Elegante Silberkette' },
      { id: 'pendant_necklace', label: 'Anhängerkette', value: 'pendant necklace', description: 'Kette mit Anhänger' },
      { id: 'choker', label: 'Choker', value: 'elegant choker', description: 'Eng anliegende Halskette' },
      { id: 'layered_necklaces', label: 'Mehrlagige Ketten', value: 'layered necklaces', description: 'Mehrere Ketten übereinander' },
      { id: 'statement_necklace', label: 'Statement-Kette', value: 'statement necklace', description: 'Auffällige Statement-Kette' },
      { id: 'vintage_locket', label: 'Vintage Medallion', value: 'vintage locket', description: 'Nostalgisches Medallion' },
      { id: 'tennis_necklace', label: 'Tennis-Kette', value: 'tennis necklace', description: 'Durchgehend besetzte Kette' },
      { id: 'cross_necklace', label: 'Kreuz-Anhänger', value: 'cross necklace', description: 'Religiöser Kreuz-Anhänger' },
      { id: 'heart_pendant', label: 'Herz-Anhänger', value: 'heart pendant', description: 'Romantischer Herz-Anhänger' }
    ]
  },
  {
    id: 'earrings',
    name: 'Ohrringe',
    icon: 'Crown',
    section: 'accessories',
    subcategory: 'jewelry',
    options: [
      { id: 'diamond_studs', label: 'Diamant-Ohrstecker', value: 'diamond stud earrings', description: 'Klassische Diamant-Ohrstecker' },
      { id: 'pearl_studs', label: 'Perlen-Ohrstecker', value: 'pearl stud earrings', description: 'Elegante Perlen-Ohrstecker' },
      { id: 'hoop_earrings', label: 'Kreolen', value: 'hoop earrings', description: 'Klassische Kreolen' },
      { id: 'chandelier_earrings', label: 'Kronleuchter-Ohrringe', value: 'chandelier earrings', description: 'Opulente Chandelier-Ohrringe' },
      { id: 'drop_earrings', label: 'Tropfen-Ohrringe', value: 'drop earrings', description: 'Elegante Tropfen-Ohrringe' },
      { id: 'ear_cuffs', label: 'Ohrmanschetten', value: 'ear cuffs', description: 'Moderne Ohrmanschetten' },
      { id: 'huggie_earrings', label: 'Huggie-Ohrringe', value: 'huggie earrings', description: 'Eng anliegende Huggie-Ohrringe' },
      { id: 'tassel_earrings', label: 'Quasten-Ohrringe', value: 'tassel earrings', description: 'Verspielte Quasten-Ohrringe' },
      { id: 'geometric_earrings', label: 'Geometrische Ohrringe', value: 'geometric earrings', description: 'Moderne geometrische Formen' },
      { id: 'vintage_earrings', label: 'Vintage Ohrringe', value: 'vintage earrings', description: 'Nostalgische Vintage-Ohrringe' },
      { id: 'feather_earrings', label: 'Feder-Ohrringe', value: 'feather earrings', description: 'Leichte Feder-Ohrringe' },
      { id: 'crystal_earrings', label: 'Kristall-Ohrringe', value: 'crystal earrings', description: 'Funkelnde Kristall-Ohrringe' }
    ]
  },
  {
    id: 'rings_bracelets',
    name: 'Ringe & Armbänder',
    icon: 'Crown',
    section: 'accessories',
    subcategory: 'jewelry',
    options: [
      { id: 'engagement_ring', label: 'Verlobungsring', value: 'engagement ring', description: 'Eleganter Verlobungsring' },
      { id: 'wedding_band', label: 'Ehering', value: 'wedding band', description: 'Klassischer Ehering' },
      { id: 'cocktail_ring', label: 'Cocktailring', value: 'cocktail ring', description: 'Auffälliger Cocktailring' },
      { id: 'signet_ring', label: 'Siegelring', value: 'signet ring', description: 'Traditioneller Siegelring' },
      { id: 'stackable_rings', label: 'Stapelbare Ringe', value: 'stackable rings', description: 'Mehrere stapelbare Ringe' },
      { id: 'thumb_ring', label: 'Daumenring', value: 'thumb ring', description: 'Moderner Daumenring' },
      { id: 'tennis_bracelet', label: 'Tennis-Armband', value: 'tennis bracelet', description: 'Elegantes Tennis-Armband' },
      { id: 'charm_bracelet', label: 'Charm-Armband', value: 'charm bracelet', description: 'Verspieltes Charm-Armband' },
      { id: 'cuff_bracelet', label: 'Armreif', value: 'cuff bracelet', description: 'Markanter Armreif' },
      { id: 'chain_bracelet', label: 'Kettenarmband', value: 'chain bracelet', description: 'Elegantes Kettenarmband' },
      { id: 'bangle_set', label: 'Bangles-Set', value: 'bangle bracelets', description: 'Set aus mehreren Bangles' },
      { id: 'watch_bracelet', label: 'Uhren-Armband', value: 'luxury watch', description: 'Luxuriöse Armbanduhr' }
    ]
  },
  {
    id: 'eyewear',
    name: 'Brillen & Augenbekleidung',
    icon: 'Crown',
    section: 'accessories',
    subcategory: 'eyewear',
    options: [
      { id: 'aviator_sunglasses', label: 'Piloten-Sonnenbrille', value: 'aviator sunglasses', description: 'Klassische Piloten-Sonnenbrille' },
      { id: 'cat_eye_sunglasses', label: 'Cat-Eye Sonnenbrille', value: 'cat-eye sunglasses', description: 'Feminine Cat-Eye Sonnenbrille' },
      { id: 'oversized_sunglasses', label: 'Oversized Sonnenbrille', value: 'oversized sunglasses', description: 'Große Oversized-Sonnenbrille' },
      { id: 'round_sunglasses', label: 'Runde Sonnenbrille', value: 'round sunglasses', description: 'Vintage runde Sonnenbrille' },
      { id: 'square_sunglasses', label: 'Eckige Sonnenbrille', value: 'square sunglasses', description: 'Moderne eckige Sonnenbrille' },
      { id: 'sport_sunglasses', label: 'Sport-Sonnenbrille', value: 'sport sunglasses', description: 'Funktionale Sport-Sonnenbrille' },
      { id: 'designer_glasses', label: 'Designer-Brille', value: 'designer eyeglasses', description: 'Elegante Designer-Brille' },
      { id: 'horn_rimmed_glasses', label: 'Hornbrille', value: 'horn-rimmed glasses', description: 'Klassische Hornbrille' },
      { id: 'wire_frame_glasses', label: 'Drahtgestell-Brille', value: 'wire frame glasses', description: 'Filigrane Drahtgestell-Brille' },
      { id: 'reading_glasses', label: 'Lesebrille', value: 'reading glasses', description: 'Stilvolle Lesebrille' },
      { id: 'blue_light_glasses', label: 'Blaulicht-Brille', value: 'blue light glasses', description: 'Moderne Blaulicht-Brille' },
      { id: 'safety_glasses', label: 'Schutzbrille', value: 'safety glasses', description: 'Funktionale Schutzbrille' }
    ]
  },
  {
    id: 'bags_purses',
    name: 'Taschen & Handtaschen',
    icon: 'Crown',
    section: 'accessories',
    subcategory: 'bags',
    options: [
      { id: 'luxury_handbag', label: 'Luxus-Handtasche', value: 'luxury handbag', description: 'Elegante Luxus-Handtasche' },
      { id: 'clutch_bag', label: 'Clutch', value: 'elegant clutch bag', description: 'Elegante Clutch für den Abend' },
      { id: 'crossbody_bag', label: 'Umhängetasche', value: 'crossbody bag', description: 'Praktische Umhängetasche' },
      { id: 'tote_bag', label: 'Shopper', value: 'tote bag', description: 'Geräumiger Shopper' },
      { id: 'shoulder_bag', label: 'Schultertasche', value: 'shoulder bag', description: 'Klassische Schultertasche' },
      { id: 'mini_bag', label: 'Mini-Tasche', value: 'mini bag', description: 'Trend Mini-Handtasche' },
      { id: 'satchel_bag', label: 'Satchel', value: 'satchel bag', description: 'Strukturierte Satchel-Tasche' },
      { id: 'bucket_bag', label: 'Bucket Bag', value: 'bucket bag', description: 'Moderne Bucket-Tasche' },
      { id: 'backpack', label: 'Rucksack', value: 'stylish backpack', description: 'Stilvoller Rucksack' },
      { id: 'evening_bag', label: 'Abendtasche', value: 'evening bag', description: 'Elegante Abendtasche' },
      { id: 'vintage_purse', label: 'Vintage Tasche', value: 'vintage purse', description: 'Nostalgische Vintage-Tasche' },
      { id: 'designer_bag', label: 'Designer-Tasche', value: 'designer bag', description: 'Exklusive Designer-Tasche' }
    ]
  },
  {
    id: 'belts_scarves',
    name: 'Gürtel & Schals',
    icon: 'Crown',
    section: 'accessories',
    subcategory: 'accessories',
    options: [
      { id: 'leather_belt', label: 'Ledergürtel', value: 'leather belt', description: 'Klassischer Ledergürtel' },
      { id: 'designer_belt', label: 'Designer-Gürtel', value: 'designer belt', description: 'Luxuriöser Designer-Gürtel' },
      { id: 'chain_belt', label: 'Kettengürtel', value: 'chain belt', description: 'Moderner Kettengürtel' },
      { id: 'wide_belt', label: 'Breiter Gürtel', value: 'wide belt', description: 'Taillierter breiter Gürtel' },
      { id: 'corset_belt', label: 'Korsett-Gürtel', value: 'corset belt', description: 'Figurbetonter Korsett-Gürtel' },
      { id: 'silk_scarf', label: 'Seidenschal', value: 'silk scarf', description: 'Eleganter Seidenschal' },
      { id: 'cashmere_scarf', label: 'Kaschmir-Schal', value: 'cashmere scarf', description: 'Luxuriöser Kaschmir-Schal' },
      { id: 'bandana', label: 'Bandana', value: 'stylish bandana', description: 'Lässiges Bandana' },
      { id: 'infinity_scarf', label: 'Loop-Schal', value: 'infinity scarf', description: 'Praktischer Loop-Schal' },
      { id: 'fur_stole', label: 'Pelzstola', value: 'fur stole', description: 'Elegante Pelzstola' },
      { id: 'blanket_scarf', label: 'Oversized Schal', value: 'oversized blanket scarf', description: 'Großer Oversized-Schal' },
      { id: 'printed_scarf', label: 'Gemusterter Schal', value: 'printed scarf', description: 'Auffällig gemusterter Schal' }
    ]
  },
  {
    id: 'hats_headwear',
    name: 'Hüte & Kopfbedeckungen',
    icon: 'Crown',
    section: 'accessories',
    subcategory: 'headwear',
    options: [
      { id: 'fedora_hat', label: 'Fedora', value: 'fedora hat', description: 'Klassischer Fedora-Hut' },
      { id: 'wide_brim_hat', label: 'Breitkrempiger Hut', value: 'wide brim hat', description: 'Eleganter breitkrempiger Hut' },
      { id: 'beret', label: 'Beret', value: 'stylish beret', description: 'Französisches Beret' },
      { id: 'baseball_cap', label: 'Baseball-Cap', value: 'baseball cap', description: 'Lässige Baseball-Cap' },
      { id: 'beanie', label: 'Mütze', value: 'knit beanie', description: 'Warme Strickmütze' },
      { id: 'bucket_hat', label: 'Bucket Hat', value: 'bucket hat', description: 'Trendiger Bucket Hat' },
      { id: 'sun_hat', label: 'Sonnenhut', value: 'sun hat', description: 'Schützender Sonnenhut' },
      { id: 'fascinator', label: 'Fascinator', value: 'elegant fascinator', description: 'Eleganter Fascinator' },
      { id: 'headband', label: 'Haarband', value: 'decorative headband', description: 'Dekoratives Haarband' },
      { id: 'tiara', label: 'Diadem', value: 'sparkling tiara', description: 'Funkelndes Diadem' },
      { id: 'hair_bow', label: 'Haarschleife', value: 'hair bow', description: 'Verspielte Haarschleife' },
      { id: 'hair_clips', label: 'Haarspangen', value: 'decorative hair clips', description: 'Dekorative Haarspangen' }
    ]
  },
  {
    id: 'tech_accessories',
    name: 'Tech-Accessoires',
    icon: 'Crown',
    section: 'accessories',
    subcategory: 'technology',
    options: [
      { id: 'smartwatch', label: 'Smartwatch', value: 'luxury smartwatch', description: 'Elegante Smartwatch' },
      { id: 'fitness_tracker', label: 'Fitness-Tracker', value: 'fitness tracker', description: 'Sportlicher Fitness-Tracker' },
      { id: 'wireless_earbuds', label: 'Kabellose Kopfhörer', value: 'wireless earbuds', description: 'Moderne kabellose Kopfhörer' },
      { id: 'over_ear_headphones', label: 'Over-Ear Kopfhörer', value: 'over-ear headphones', description: 'Professionelle Over-Ear Kopfhörer' },
      { id: 'phone_case', label: 'Handyhülle', value: 'designer phone case', description: 'Stilvolle Designer-Handyhülle' },
      { id: 'tablet_case', label: 'Tablet-Hülle', value: 'tablet case', description: 'Elegante Tablet-Hülle' },
      { id: 'portable_charger', label: 'Powerbank', value: 'portable charger', description: 'Kompakte Powerbank' },
      { id: 'camera_strap', label: 'Kamera-Gurt', value: 'camera strap', description: 'Stilvoller Kamera-Gurt' },
      { id: 'laptop_bag', label: 'Laptop-Tasche', value: 'laptop bag', description: 'Professionelle Laptop-Tasche' },
      { id: 'cable_organizer', label: 'Kabel-Organizer', value: 'cable organizer', description: 'Praktischer Kabel-Organizer' }
    ]
  }
];