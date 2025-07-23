import { Users, Heart, Eye } from 'lucide-react';
import { Category } from '../types';

export const interactionCategories: Category[] = [
  {
    id: 'romantic_interactions',
    name: 'Romantische Interaktionen',
    icon: 'Heart',
    section: 'interaction',
    subcategory: 'romantic',
    options: [
      { id: 'kissing', label: 'Küssen', value: 'kissing passionately', description: 'Leidenschaftlicher Kuss' },
      { id: 'lip_touch', label: 'Lippen berühren', value: 'touching lips gently', description: 'Sanfte Lippenberührung' },
      { id: 'french_kiss', label: 'Zungenküsse', value: 'deep french kiss', description: 'Tiefer Zungenkuss' },
      { id: 'forehead_kiss', label: 'Stirnkuss', value: 'tender forehead kiss', description: 'Zärtlicher Stirnkuss' },
      { id: 'cheek_kiss', label: 'Wangenkuss', value: 'sweet cheek kiss', description: 'Süßer Wangenkuss' },
      { id: 'neck_kiss', label: 'Halskuss', value: 'intimate neck kiss', description: 'Intimer Halskuss' },
      { id: 'shoulder_kiss', label: 'Schulterkuss', value: 'gentle shoulder kiss', description: 'Sanfter Schulterkuss' },
      { id: 'hand_kiss', label: 'Handkuss', value: 'gallant hand kiss', description: 'Galanter Handkuss' },
      { id: 'cuddling', label: 'Kuscheln', value: 'cuddling intimately', description: 'Intimes Kuscheln' },
      { id: 'snuggling', label: 'Schmuse', value: 'snuggling close', description: 'Nah aneinander kuscheln' },
      { id: 'nuzzling', label: 'Aneinander schmiegen', value: 'nuzzling together', description: 'Aneinander schmiegen' },
      { id: 'holding_hands', label: 'Händchen halten', value: 'holding hands', description: 'Romantisch händchenhaltend' },
      { id: 'intertwined_fingers', label: 'Finger verschränken', value: 'fingers intertwined', description: 'Verschränkte Finger' },
      { id: 'caressing_hands', label: 'Hände streicheln', value: 'caressing hands', description: 'Streichelnde Hände' }
    ]
  },
  {
    id: 'embrace_interactions',
    name: 'Umarmungen',
    icon: 'Heart',
    section: 'interaction',
    subcategory: 'embraces',
    options: [
      { id: 'tender_embrace', label: 'Zärtliche Umarmung', value: 'tender embrace', description: 'Zärtliche, liebevolle Umarmung' },
      { id: 'intimate_embrace', label: 'Innige Umarmung', value: 'intimate embrace', description: 'Innige, tiefe Umarmung' },
      { id: 'from_behind_hug', label: 'Von hinten umarmen', value: 'hugging from behind', description: 'Beschützende Umarmung von hinten' },
      { id: 'side_hug', label: 'Seitliche Umarmung', value: 'side embrace', description: 'Lässige seitliche Umarmung' },
      { id: 'dance_embrace', label: 'Tanz-Umarmung', value: 'dance embrace', description: 'Elegante Tanz-Umarmung' },
      { id: 'protective_embrace', label: 'Beschützende Umarmung', value: 'protective embrace', description: 'Beschützende, sichere Umarmung' },
      { id: 'playful_hug', label: 'Spielerische Umarmung', value: 'playful hug', description: 'Verspielte, fröhliche Umarmung' },
      { id: 'passionate_embrace', label: 'Leidenschaftliche Umarmung', value: 'passionate embrace', description: 'Leidenschaftliche, intensive Umarmung' },
      { id: 'comforting_hug', label: 'Tröstende Umarmung', value: 'comforting hug', description: 'Tröstende, beruhigende Umarmung' },
      { id: 'farewell_hug', label: 'Abschiedsumarmung', value: 'farewell embrace', description: 'Emotionale Abschiedsumarmung' },
      { id: 'reunion_hug', label: 'Wiedersehensumarmung', value: 'reunion hug', description: 'Freudige Wiedersehensumarmung' },
      { id: 'lovers_embrace', label: 'Verliebte Umarmung', value: 'lovers embrace', description: 'Romantische Liebesumarmung' }
    ]
  },
  {
    id: 'gaze_proximity',
    name: 'Blicke & Nähe',
    icon: 'Eye',
    section: 'interaction',
    subcategory: 'intimacy',
    options: [
      { id: 'loving_gaze', label: 'Verliebte Blicke', value: 'loving gaze', description: 'Verliebte, zärtliche Blicke' },
      { id: 'eye_contact', label: 'Augenkontakt', value: 'intense eye contact', description: 'Intensiver Augenkontakt' },
      { id: 'close_faces', label: 'Nahe Gesichter', value: 'faces close together', description: 'Gesichter nah beieinander' },
      { id: 'forehead_to_forehead', label: 'Stirn an Stirn', value: 'forehead to forehead', description: 'Stirn an Stirn berührend' },
      { id: 'nose_to_nose', label: 'Nase an Nase', value: 'nose to nose', description: 'Eskimo-Kuss' },
      { id: 'lost_in_each_other', label: 'Ineinander versunken', value: 'lost in each other', description: 'Völlig ineinander versunken' },
      { id: 'synchronized_movement', label: 'Synchrone Bewegung', value: 'synchronized movement', description: 'Perfekt synchrone Bewegungen' },
      { id: 'leaning_together', label: 'Körper zueinander geneigt', value: 'leaning into each other', description: 'Körper zueinander geneigt' },
      { id: 'mirroring_pose', label: 'Spiegelnde Haltung', value: 'mirroring each other', description: 'Gespiegelte Körperhaltung' },
      { id: 'movement_harmony', label: 'Harmonie der Bewegung', value: 'harmonious movement', description: 'Harmonische Bewegungen' },
      { id: 'dancing', label: 'Tanzen', value: 'dancing together', description: 'Gemeinsam tanzend' },
      { id: 'swaying', label: 'Wiegen', value: 'swaying together', description: 'Gemeinsam wiegend' }
    ]
  }
];