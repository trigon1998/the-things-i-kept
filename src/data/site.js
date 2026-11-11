export const siteName = "The Things I Kept.";
export const base = "/the-things-i-kept";
export const href = (path = "/") => `${base}${path.startsWith("/") ? path : "/"+path}`;
export const stories = [
  { slug: "mists-and-water", title: "Mists & Water", eyebrow: "Landscape / 2024—2026", description: "A study of weather, water, and the quiet distance between places.", tones: ["water","mist","dusk"], year: "2026" },
  { slug: "thresholds", title: "Thresholds", eyebrow: "Everyday / 2023—2026", description: "Windows, doorways, and the spaces between here and there.", tones: ["door","shadow","room"], year: "2025" },
  { slug: "ordinary-light", title: "Ordinary Light", eyebrow: "Abstract / Ongoing", description: "Small observations of shapes, shadows, and passing light.", tones: ["light","garden","shade"], year: "2026" }
];
export const journal = [
 { slug:"after-the-rain", title:"After the Rain", date:"11 November 2026", note:"A few frames from an ordinary day that I wanted to remember.",tone:"dusk"},
 { slug:"a-few-quiet-things", title:"A Few Quiet Things",date:"28 October 2026",note:"Rooms, small gestures, and the light that stayed for a moment.",tone:"room"},
 { slug:"between-places",title:"Between Places",date:"14 September 2026",note:"A note from somewhere between leaving and arriving.",tone:"mist"}
];
