import { User, Users, Eye, Heart } from 'lucide-react';
import { Category } from '../types';

export const poseCategories: Category[] = [
  {
    id: 'standing_poses',
    name: 'Stehende Posen',
    icon: 'User',
    section: 'poses',
    subcategory: 'standing',
    options: [
      { id: 'confident_stance', label: 'Selbstbewusste Haltung', value: 'confident standing pose', description: 'Aufrechte, selbstbewusste Körperhaltung' },
      { id: 'power_pose', label: 'Power Pose', value: 'power pose stance', description: 'Dominante Power-Pose' },
      { id: 'relaxed_standing', label: 'Entspannt stehend', value: 'relaxed standing pose', description: 'Lässige entspannte Haltung' },
      { id: 'contrapposto', label: 'Contrapposto', value: 'contrapposto pose', description: 'Klassische Contrapposto-Haltung' },
      { id: 'hip_pop', label: 'Hüfte betont', value: 'hip pop pose', description: 'Eine Hüfte betont zur Seite' },
      { id: 'weight_shift', label: 'Gewichtsverlagerung', value: 'weight shifted pose', description: 'Gewicht auf ein Bein verlagert' },
      { id: 'crossed_legs', label: 'Gekreuzte Beine', value: 'crossed legs standing', description: 'Elegant gekreuzte Beine' },
      { id: 'wide_stance', label: 'Breite Haltung', value: 'wide stance pose', description: 'Kraftvolle breite Beinstellung' },
      { id: 'elegant_posture', label: 'Elegante Haltung', value: 'elegant standing posture', description: 'Graziös elegante Körperhaltung' },
      { id: 'fashion_pose', label: 'Fashion Pose', value: 'fashion model pose', description: 'Professionelle Model-Pose' },
      { id: 'runway_walk', label: 'Laufsteg-Pose', value: 'runway walking pose', description: 'Dynamische Laufsteg-Haltung' },
      { id: 'casual_standing', label: 'Lässig stehend', value: 'casual standing pose', description: 'Ungezwungen lässige Haltung' }
    ]
  },
  {
    id: 'sitting_poses',
    name: 'Sitzende Posen',
    icon: 'User',
    section: 'poses',
    subcategory: 'sitting',
    options: [
      { id: 'chair_sitting', label: 'Auf Stuhl sitzend', value: 'sitting on chair', description: 'Elegant auf Stuhl sitzend' },
      { id: 'crossed_legs_sitting', label: 'Beine übergeschlagen', value: 'sitting with crossed legs', description: 'Beine elegant übergeschlagen' },
      { id: 'side_sitting', label: 'Seitlich sitzend', value: 'sitting sideways', description: 'Zur Seite gedreht sitzend' },
      { id: 'edge_sitting', label: 'Auf Kante sitzend', value: 'sitting on edge', description: 'Auf Tisch- oder Bettkante' },
      { id: 'floor_sitting', label: 'Auf Boden sitzend', value: 'sitting on floor', description: 'Lässig auf dem Boden' },
      { id: 'lotus_position', label: 'Lotussitz', value: 'lotus sitting position', description: 'Meditativer Lotussitz' },
      { id: 'legs_to_side', label: 'Beine zur Seite', value: 'sitting with legs to side', description: 'Beine elegant zur Seite' },
      { id: 'knees_up', label: 'Knie angezogen', value: 'sitting with knees up', description: 'Knie zum Körper angezogen' },
      { id: 'one_leg_up', label: 'Ein Bein angewinkelt', value: 'sitting with one leg up', description: 'Ein Bein lässig angewinkelt' },
      { id: 'leaning_back', label: 'Zurückgelehnt', value: 'sitting leaning back', description: 'Entspannt zurückgelehnt' },
      { id: 'forward_lean', label: 'Nach vorn gelehnt', value: 'sitting leaning forward', description: 'Interessiert nach vorn gelehnt' },
      { id: 'perched_sitting', label: 'Aufrecht sitzend', value: 'perched sitting pose', description: 'Aufmerksam aufrecht sitzend' }
    ]
  },
  {
    id: 'lying_poses',
    name: 'Liegende Posen',
    icon: 'User',
    section: 'poses',
    subcategory: 'lying',
    options: [
      { id: 'lying_on_side', label: 'Auf der Seite liegend', value: 'lying on side', description: 'Elegant auf der Seite' },
      { id: 'lying_on_back', label: 'Auf dem Rücken liegend', value: 'lying on back', description: 'Entspannt auf dem Rücken' },
      { id: 'lying_on_stomach', label: 'Auf dem Bauch liegend', value: 'lying on stomach', description: 'Lässig auf dem Bauch' },
      { id: 'propped_up', label: 'Aufgestützt liegend', value: 'lying propped up on elbow', description: 'Auf Ellbogen aufgestützt' },
      { id: 'sprawled_out', label: 'Ausgestreckt liegend', value: 'sprawled out pose', description: 'Völlig entspannt ausgestreckt' },
      { id: 'curled_up', label: 'Zusammengerollt', value: 'curled up lying pose', description: 'Gemütlich zusammengerollt' },
      { id: 'diagonal_lying', label: 'Diagonal liegend', value: 'diagonal lying pose', description: 'Schräg über die Fläche liegend' },
      { id: 'legs_up', label: 'Beine hoch', value: 'lying with legs up', description: 'Beine in die Luft gestreckt' },
      { id: 'one_leg_bent', label: 'Ein Bein angewinkelt', value: 'lying with one leg bent', description: 'Ein Bein lässig angewinkelt' },
      { id: 'arms_behind_head', label: 'Arme hinter Kopf', value: 'lying with arms behind head', description: 'Entspannt mit Armen hinter Kopf' },
      { id: 'fetal_position', label: 'Embryonalstellung', value: 'fetal position', description: 'Schützende Embryonalstellung' },
      { id: 'starfish_pose', label: 'Seestern-Pose', value: 'starfish lying pose', description: 'Arme und Beine weit ausgestreckt' }
    ]
  },
  {
    id: 'arm_positions',
    name: 'Arm-Positionen',
    icon: 'User',
    section: 'poses',
    subcategory: 'arms',
    options: [
      { id: 'hands_on_hips', label: 'Hände in die Hüften', value: 'hands on hips', description: 'Selbstbewusst Hände in die Hüften' },
      { id: 'arms_crossed', label: 'Verschränkte Arme', value: 'arms crossed', description: 'Arme vor der Brust verschränkt' },
      { id: 'one_hand_on_hip', label: 'Eine Hand in Hüfte', value: 'one hand on hip', description: 'Lässig eine Hand in die Hüfte' },
      { id: 'arms_raised', label: 'Arme erhoben', value: 'arms raised up', description: 'Siegreich erhobene Arme' },
      { id: 'arms_behind_back', label: 'Arme hinter Rücken', value: 'arms behind back', description: 'Elegant Arme hinter dem Rücken' },
      { id: 'arms_at_sides', label: 'Arme seitlich', value: 'arms at sides', description: 'Entspannt hängende Arme' },
      { id: 'reaching_out', label: 'Ausgestreckte Arme', value: 'reaching out arms', description: 'Einladend ausgestreckte Arme' },
      { id: 'hands_in_pockets', label: 'Hände in Taschen', value: 'hands in pockets', description: 'Lässig Hände in den Taschen' },
      { id: 'hand_on_chin', label: 'Hand am Kinn', value: 'hand on chin', description: 'Nachdenklich Hand am Kinn' },
      { id: 'hands_clasped', label: 'Hände gefaltet', value: 'hands clasped together', description: 'Höflich gefaltete Hände' },
      { id: 'arms_spread_wide', label: 'Arme weit gespreizt', value: 'arms spread wide', description: 'Befreit weit gespreizte Arme' },
      { id: 'one_arm_extended', label: 'Ein Arm ausgestreckt', value: 'one arm extended', description: 'Dynamisch ein Arm ausgestreckt' }
    ]
  },
  {
    id: 'head_positions',
    name: 'Kopf-Positionen',
    icon: 'User',
    section: 'poses',
    subcategory: 'head',
    options: [
      { id: 'head_tilted', label: 'Kopf geneigt', value: 'head tilted to side', description: 'Charmant zur Seite geneigter Kopf' },
      { id: 'looking_up', label: 'Blick nach oben', value: 'looking up', description: 'Hoffnungsvoll nach oben blickend' },
      { id: 'looking_down', label: 'Blick nach unten', value: 'looking down', description: 'Schüchtern nach unten blickend' },
      { id: 'over_shoulder', label: 'Über Schulter blickend', value: 'looking over shoulder', description: 'Verführerisch über die Schulter' },
      { id: 'profile_view', label: 'Profil-Ansicht', value: 'profile view', description: 'Elegante Profil-Ansicht' },
      { id: 'three_quarter_view', label: 'Dreiviertel-Ansicht', value: 'three quarter view', description: 'Klassische Dreiviertel-Ansicht' },
      { id: 'chin_up', label: 'Kinn erhoben', value: 'chin up pose', description: 'Stolz erhobenes Kinn' },
      { id: 'chin_down', label: 'Kinn gesenkt', value: 'chin down pose', description: 'Geheimnisvoll gesenktes Kinn' },
      { id: 'head_back', label: 'Kopf zurück', value: 'head thrown back', description: 'Befreit zurückgeworfener Kopf' },
      { id: 'looking_away', label: 'Wegblickend', value: 'looking away', description: 'Gedankenverloren wegblickend' },
      { id: 'eyes_closed', label: 'Augen geschlossen', value: 'eyes closed pose', description: 'Friedlich geschlossene Augen' },
      { id: 'direct_gaze', label: 'Direkter Blick', value: 'direct gaze at camera', description: 'Intensiver direkter Blick' }
    ]
  },
  {
    id: 'dynamic_poses',
    name: 'Dynamische Posen',
    icon: 'User',
    section: 'poses',
    subcategory: 'dynamic',
    options: [
      { id: 'walking_pose', label: 'Gehend', value: 'walking pose', description: 'Dynamische Gehbewegung' },
      { id: 'running_pose', label: 'Laufend', value: 'running pose', description: 'Energische Laufbewegung' },
      { id: 'jumping_pose', label: 'Springend', value: 'jumping pose', description: 'Freudiges Springen' },
      { id: 'dancing_pose', label: 'Tanzend', value: 'dancing pose', description: 'Elegante Tanzbewegung' },
      { id: 'spinning_pose', label: 'Drehend', value: 'spinning pose', description: 'Schwungvolle Drehbewegung' },
      { id: 'leaping_pose', label: 'Springend', value: 'leaping pose', description: 'Kraftvoller Sprung' },
      { id: 'twisting_pose', label: 'Verdreht', value: 'twisting pose', description: 'Dynamisch verdrehte Haltung' },
      { id: 'reaching_pose', label: 'Greifend', value: 'reaching pose', description: 'Nach etwas greifende Bewegung' },
      { id: 'flowing_movement', label: 'Fließende Bewegung', value: 'flowing movement pose', description: 'Geschmeidige fließende Bewegung' },
      { id: 'action_pose', label: 'Action-Pose', value: 'action pose', description: 'Kraftvolle Action-Haltung' },
      { id: 'martial_arts', label: 'Kampfsport-Pose', value: 'martial arts pose', description: 'Konzentrierte Kampfsport-Haltung' },
      { id: 'yoga_pose', label: 'Yoga-Pose', value: 'yoga pose', description: 'Ausbalancierte Yoga-Haltung' }
    ]
  },
  {
    id: 'couple_poses',
    name: 'Paar-Posen',
    icon: 'User',
    section: 'poses',
    subcategory: 'couple',
    options: [
      { id: 'romantic_embrace', label: 'Romantische Umarmung', value: 'romantic embrace pose', description: 'Zärtliche romantische Umarmung' },
      { id: 'back_to_back', label: 'Rücken an Rücken', value: 'back to back pose', description: 'Vertrauensvoll Rücken an Rücken' },
      { id: 'forehead_touch', label: 'Stirn an Stirn', value: 'forehead touching pose', description: 'Intim Stirn an Stirn' },
      { id: 'dancing_together', label: 'Zusammen tanzend', value: 'dancing together pose', description: 'Elegant zusammen tanzend' },
      { id: 'walking_hand_in_hand', label: 'Hand in Hand gehend', value: 'walking hand in hand', description: 'Romantisch Hand in Hand' },
      { id: 'piggyback_pose', label: 'Huckepack', value: 'piggyback pose', description: 'Verspielt Huckepack' },
      { id: 'dip_pose', label: 'Dip-Pose', value: 'romantic dip pose', description: 'Klassischer Tanz-Dip' },
      { id: 'sitting_together', label: 'Zusammen sitzend', value: 'sitting together pose', description: 'Eng zusammen sitzend' },
      { id: 'looking_at_each_other', label: 'Sich anblickend', value: 'looking at each other', description: 'Liebevoll sich anblickend' },
      { id: 'mirrored_poses', label: 'Gespiegelte Posen', value: 'mirrored poses', description: 'Perfekt gespiegelte Haltungen' },
      { id: 'asymmetric_pose', label: 'Asymmetrische Pose', value: 'asymmetric couple pose', description: 'Interessant asymmetrische Anordnung' },
      { id: 'protective_pose', label: 'Beschützende Pose', value: 'protective couple pose', description: 'Beschützende Körperhaltung' }
    ]
  },
  {
    id: 'emotional_poses',
    name: 'Emotionale Posen',
    icon: 'User',
    section: 'poses',
    subcategory: 'emotional',
    options: [
      { id: 'joyful_pose', label: 'Freudige Pose', value: 'joyful pose', description: 'Ausgelassen freudige Haltung' },
      { id: 'contemplative_pose', label: 'Nachdenkliche Pose', value: 'contemplative pose', description: 'Ruhig nachdenkliche Haltung' },
      { id: 'vulnerable_pose', label: 'Verletzliche Pose', value: 'vulnerable pose', description: 'Offen verletzliche Haltung' },
      { id: 'confident_pose', label: 'Selbstbewusste Pose', value: 'confident pose', description: 'Stark selbstbewusste Haltung' },
      { id: 'seductive_pose', label: 'Verführerische Pose', value: 'seductive pose', description: 'Sinnlich verführerische Haltung' },
      { id: 'mysterious_pose', label: 'Geheimnisvolle Pose', value: 'mysterious pose', description: 'Rätselhaft geheimnisvolle Haltung' },
      { id: 'playful_pose', label: 'Verspielte Pose', value: 'playful pose', description: 'Fröhlich verspielte Haltung' },
      { id: 'dramatic_pose', label: 'Dramatische Pose', value: 'dramatic pose', description: 'Intensiv dramatische Haltung' },
      { id: 'melancholic_pose', label: 'Melancholische Pose', value: 'melancholic pose', description: 'Wehmütig melancholische Haltung' },
      { id: 'fierce_pose', label: 'Wilde Pose', value: 'fierce pose', description: 'Entschlossen wilde Haltung' },
      { id: 'gentle_pose', label: 'Sanfte Pose', value: 'gentle pose', description: 'Zart sanfte Haltung' },
      { id: 'powerful_pose', label: 'Kraftvolle Pose', value: 'powerful pose', description: 'Dominant kraftvolle Haltung' }
    ]
  },
  {
    id: 'artistic_poses',
    name: 'Künstlerische Posen',
    icon: 'User',
    section: 'poses',
    subcategory: 'artistic',
    options: [
      { id: 'sculptural_pose', label: 'Skulpturale Pose', value: 'sculptural pose', description: 'Wie eine klassische Skulptur' },
      { id: 'renaissance_pose', label: 'Renaissance-Pose', value: 'renaissance style pose', description: 'Inspiriert von Renaissance-Kunst' },
      { id: 'art_nouveau_pose', label: 'Art Nouveau Pose', value: 'art nouveau pose', description: 'Fließende Art Nouveau Linien' },
      { id: 'geometric_pose', label: 'Geometrische Pose', value: 'geometric pose', description: 'Klare geometrische Linien' },
      { id: 'avant_garde_pose', label: 'Avantgarde-Pose', value: 'avant garde pose', description: 'Experimentelle Avantgarde-Haltung' },
      { id: 'surreal_pose', label: 'Surreale Pose', value: 'surreal pose', description: 'Traumhaft surreale Haltung' },
      { id: 'abstract_pose', label: 'Abstrakte Pose', value: 'abstract pose', description: 'Konzeptuell abstrakte Haltung' },
      { id: 'minimalist_pose', label: 'Minimalistische Pose', value: 'minimalist pose', description: 'Reduziert minimalistische Haltung' },
      { id: 'editorial_pose', label: 'Editorial-Pose', value: 'editorial pose', description: 'Hochwertige Editorial-Haltung' },
      { id: 'conceptual_pose', label: 'Konzeptuelle Pose', value: 'conceptual pose', description: 'Durchdacht konzeptuelle Haltung' },
      { id: 'symmetrical_pose', label: 'Symmetrische Pose', value: 'symmetrical pose', description: 'Perfekt symmetrische Anordnung' },
      { id: 'asymmetrical_pose', label: 'Asymmetrische Pose', value: 'asymmetrical pose', description: 'Spannend asymmetrische Haltung' }
    ]
  }
];