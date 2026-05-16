import dollu1 from "@/assets/troupes/dollu-1.jpg";
import dollu2 from "@/assets/troupes/dollu-2.jpg";
import dollu3 from "@/assets/troupes/dollu-3.jpg";
import pooja1 from "@/assets/troupes/pooja-1.jpg";
import pooja2 from "@/assets/troupes/pooja-2.jpg";
import pooja3 from "@/assets/troupes/pooja-3.jpg";
import goravara1 from "@/assets/troupes/goravara-1.jpg";
import goravara2 from "@/assets/troupes/goravara-2.jpg";
import veeragase1 from "@/assets/troupes/veeragase-1.jpg";
import veeragase2 from "@/assets/troupes/veeragase-2.jpg";
import yakshagana1 from "@/assets/troupes/yakshagana-1.jpg";
import yakshagana2 from "@/assets/troupes/yakshagana-2.jpg";
import yakshagana3 from "@/assets/troupes/yakshagana-3.jpg";
import kamsale1 from "@/assets/troupes/kamsale-1.jpg";
import kamsale2 from "@/assets/troupes/kamsale-2.jpg";

export type ArtForm =
  | "Dollu Kunitha"
  | "Pooja Kunitha"
  | "Goravara Kunitha"
  | "Veeragase"
  | "Yakshagana"
  | "Kamsale"
  | "Nandi Dhwaja";

export const ART_FORMS: ArtForm[] = [
  "Dollu Kunitha",
  "Pooja Kunitha",
  "Goravara Kunitha",
  "Veeragase",
  "Yakshagana",
  "Kamsale",
  "Nandi Dhwaja",
];

export const DISTRICTS = [
  "Bengaluru Urban", "Bengaluru Rural", "Mysuru", "Mandya", "Hassan",
  "Tumakuru", "Chitradurga", "Davanagere", "Shivamogga", "Udupi",
  "Dakshina Kannada", "Uttara Kannada", "Belagavi", "Dharwad", "Hubballi",
  "Vijayapura", "Kalaburagi", "Ballari", "Raichur", "Bidar",
  "Chikkamagaluru", "Kodagu", "Chamarajanagar", "Kolar", "Ramanagara",
];

export type Troupe = {
  id: string;
  groupName: string;
  artForm: ArtForm;
  lead: { name: string; phone: string; whatsapp: string };
  districts: string[];
  serviceArea: string;
  equipment: string;
  bio: string;
  yearsActive: number;
  rating: number;
  totalBookings: number;
  verified: boolean;
  baseFee: string;
  cover: string;
  photos: string[];
  videoLinks: { title: string; url: string }[];
};

export const TROUPES: Troupe[] = [
  {
    id: "dollu-veeranjaneya",
    groupName: "Sri Veeranjaneya Dollu Kunitha Tanda",
    artForm: "Dollu Kunitha",
    lead: { name: "Mahadev Gowda", phone: "+919844012301", whatsapp: "+919844012301" },
    districts: ["Tumakuru", "Bengaluru Rural", "Bengaluru Urban"],
    serviceArea: "Karnataka-wide for marquee events",
    equipment: "12 dollu drums, traditional costumes, own PA system (2 speakers, mics).",
    bio: "Three generations of percussionists from Sira taluk. Known for thunderous opening processions at weddings and political rallies.",
    yearsActive: 24,
    rating: 4.9,
    totalBookings: 312,
    verified: true,
    baseFee: "₹18,000 onwards",
    cover: dollu1,
    photos: [dollu1, dollu2, dollu3, dollu2, dollu1, dollu3],
    videoLinks: [{ title: "Mysuru Dasara 2024 procession", url: "https://youtube.com" }],
  },
  {
    id: "pooja-kunitha-mandya",
    groupName: "Mandya Pooja Kunitha Sangha",
    artForm: "Pooja Kunitha",
    lead: { name: "Lakshmi Devi", phone: "+919886543212", whatsapp: "+919886543212" },
    districts: ["Mandya", "Mysuru", "Ramanagara"],
    serviceArea: "Old Mysore region",
    equipment: "8 ornate pooja kunitha frames, brass bells, traditional yellow attire.",
    bio: "All-women troupe specialising in temple festivals and griha pravesha ceremonies. Featured on Doordarshan Chandana.",
    yearsActive: 15,
    rating: 4.8,
    totalBookings: 184,
    verified: true,
    baseFee: "₹12,000 onwards",
    cover: pooja1,
    photos: [pooja1, pooja2, pooja3, pooja2],
    videoLinks: [],
  },
  {
    id: "goravara-chitradurga",
    groupName: "Goravara Kunitha Kala Balaga",
    artForm: "Goravara Kunitha",
    lead: { name: "Hanumanthappa", phone: "+919900123456", whatsapp: "+919900123456" },
    districts: ["Chitradurga", "Davanagere", "Ballari"],
    serviceArea: "Central Karnataka",
    equipment: "Bear-hide caps, damaru drums, ankle bells, ritual staffs.",
    bio: "Devotees of Mailara Lingeshwara. Trance percussion and shamanic dance for festivals and cultural showcases.",
    yearsActive: 30,
    rating: 4.7,
    totalBookings: 156,
    verified: false,
    baseFee: "₹14,000 onwards",
    cover: goravara1,
    photos: [goravara1, goravara2, goravara1, goravara2],
    videoLinks: [],
  },
  {
    id: "veeragase-shivamogga",
    groupName: "Sri Beereshwara Veeragase Mela",
    artForm: "Veeragase",
    lead: { name: "Shivakumar", phone: "+919448765432", whatsapp: "+919448765432" },
    districts: ["Shivamogga", "Davanagere", "Chikkamagaluru"],
    serviceArea: "Malnad region",
    equipment: "8 veeragase dancers with full Shaiva costume, dollu, sannayi, chamara.",
    bio: "Fierce Shaiva warrior dance performed during Shravana month. Available for temple jatras and corporate cultural nights.",
    yearsActive: 18,
    rating: 4.9,
    totalBookings: 211,
    verified: true,
    baseFee: "₹22,000 onwards",
    cover: veeragase1,
    photos: [veeragase1, veeragase2, veeragase1, veeragase2, veeragase1],
    videoLinks: [{ title: "Mahashivaratri Shivamogga", url: "https://youtube.com" }],
  },
  {
    id: "yakshagana-udupi",
    groupName: "Saligrama Yakshagana Mandali",
    artForm: "Yakshagana",
    lead: { name: "Krishna Bhat", phone: "+919901567788", whatsapp: "+919901567788" },
    districts: ["Udupi", "Dakshina Kannada", "Uttara Kannada"],
    serviceArea: "Coastal Karnataka & touring",
    equipment: "Complete bayalata setup — costumes, chande, maddale, harmonium, stage rigging.",
    bio: "Tenkutittu Yakshagana troupe with bhagavata and 12 artistes. All-night performances of pauranic prasangas.",
    yearsActive: 42,
    rating: 5.0,
    totalBookings: 489,
    verified: true,
    baseFee: "₹45,000 onwards",
    cover: yakshagana1,
    photos: [yakshagana1, yakshagana2, yakshagana3, yakshagana2, yakshagana1, yakshagana3],
    videoLinks: [{ title: "Devi Mahatme prasanga", url: "https://youtube.com" }],
  },
  {
    id: "kamsale-mysuru",
    groupName: "Kamsale Kunitha Vrunda",
    artForm: "Kamsale",
    lead: { name: "Mahadeva Swamy", phone: "+919740112233", whatsapp: "+919740112233" },
    districts: ["Mysuru", "Chamarajanagar", "Kodagu"],
    serviceArea: "South Karnataka",
    equipment: "Brass kamsale cymbals, bhajan harmonium, ankle bells.",
    bio: "Devotees of Mahadeshwara of M.M. Hills. Energetic spinning kamsale routines for any occasion.",
    yearsActive: 21,
    rating: 4.6,
    totalBookings: 98,
    verified: false,
    baseFee: "₹10,000 onwards",
    cover: kamsale1,
    photos: [kamsale1, kamsale2, kamsale1, kamsale2],
    videoLinks: [],
  },
];
