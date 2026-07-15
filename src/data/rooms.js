export const ROOMS = [
  { id: 'entrance', name: 'Grand Entrance', accent: '#c8a76b', floor: '#d8d2c6', wall: '#211c17', price: '₹8–14 L',
    story: 'The first frame of the film — a double-height foyer with a floating console in travertine, a sculptural chandelier, and a gold-lit niche that announces the house.',
    materials: ['Italian marble inlay flooring', 'Fluted wall panelling', 'Brass-inlay main door', 'Sculptural pendant'],
    lighting: 'A single warm chandelier moment at 2400K with concealed niche glow.' },
  { id: 'living', name: 'Double-Height Living', accent: '#caa96e', floor: '#ddd6c9', wall: '#1e1a14', price: '₹18–35 L',
    story: 'A two-storey volume where Statuario marble meets walnut panelling — full-height sheers, a floating art wall, and seating composed like sculpture.',
    materials: ['Statuario marble flooring', 'Walnut veneer feature wall', 'Bouclé & velvet seating', 'Antique brass trims'],
    lighting: 'Layered — 2700K coves, art accents, daylight from 20-ft glazing.' },
  { id: 'lounge', name: 'TV Lounge', accent: '#b8935c', floor: '#c9bfa9', wall: '#171310', price: '₹10–18 L',
    story: 'The family cocoon — acoustic fabric walls, a recessed screen wall in smoked oak, and deep modular seating built for movie nights.',
    materials: ['Smoked oak media wall', 'Acoustic fabric panels', 'Modular deep seating', 'Concealed cable spine'],
    lighting: 'Bias lighting behind the screen, 2200K floor washes.' },
  { id: 'dining', name: 'Dining', accent: '#caa96e', floor: '#d5cec0', wall: '#1e1a14', price: '₹8–16 L',
    story: 'Dining as theatre — a travertine table under a linear bronze chandelier, smoked mirrors doubling candlelight.',
    materials: ['Travertine dining table', 'Smoked mirror panels', 'Bronze linear chandelier', 'Upholstered dining chairs'],
    lighting: 'Dimmable 2400K pendant line, grazers on wall texture.' },
  { id: 'kitchen', name: 'Open Kitchen', accent: '#b8a284', floor: '#cfc8ba', wall: '#1a1712', price: '₹12–25 L',
    story: 'A chef-grade island in leathered granite, handle-less fluted oak shutters, and task light that appears only where hands work.',
    materials: ['Leathered black granite island', 'Fluted oak shutters', 'Quartz backsplash', 'Matte-black fittings'],
    lighting: 'Under-cabinet task strips, 3000K island pendants.' },
  { id: 'master', name: 'Master Bedroom', accent: '#cbb083', floor: '#b7a58c', wall: '#171310', price: '₹12–22 L',
    story: 'Tuned for rest — a stitched-leather headboard wall, blackout sheers on silent tracks, and a palette that ends the day quietly.',
    materials: ['Engineered oak flooring', 'Stitched leather headboard wall', 'Silk-blend drapery', 'Champagne metal accents'],
    lighting: 'Bedside pendants at 2200K, skirting glow for night.' },
  { id: 'kids', name: 'Kids Bedroom', accent: '#d4b47c', floor: '#cfc4ae', wall: '#1c1712', price: '₹6–12 L',
    story: 'Playful without being loud — rounded joinery, a study nook with north light, and storage that grows with the child.',
    materials: ['Rounded-edge joinery', 'Washable fabric upholstery', 'Cork pin-up wall', 'Study nook in ash wood'],
    lighting: 'Glare-free 3500K study zone inside a warm ambient shell.' },
  { id: 'bath', name: 'Luxury Bathroom', accent: '#bfa87e', floor: '#d9d4ca', wall: '#1c1916', price: '₹8–18 L',
    story: 'A private spa — book-matched stone walls, a freestanding tub under a skylight shaft, brushed-gold fittings.',
    materials: ['Book-matched Calacatta walls', 'Freestanding stone tub', 'Brushed gold fittings', 'Heated micro-terrazzo floor'],
    lighting: 'Skylight by day, 2700K coves and mirror halo by night.' },
  { id: 'wardrobe', name: 'Walk-in Wardrobe', accent: '#d0b177', floor: '#b9ab93', wall: '#14100c', price: '₹6–15 L',
    story: 'Boutique retail logic at home — garments lit like merchandise, a suede island of drawers, edge-lit full-height mirror.',
    materials: ['Suede-wrapped island', 'Sensor-lit hanging rails', 'Bronze-tint glass shutters', 'Velvet drawer inlays'],
    lighting: 'Vertical LED rails at 3500K for true garment colour.' },
  { id: 'theatre', name: 'Home Theatre', accent: '#a5763f', floor: '#3a3128', wall: '#0f0c09', price: '₹15–40 L',
    story: 'A true cinema room — acoustically engineered walls, star-field ceiling, tiered recliners, and calibrated 4K projection.',
    materials: ['Acoustic wall system', 'Star-field fibre ceiling', 'Tiered leather recliners', 'Calibrated projection wall'],
    lighting: 'Aisle guides and star-field only; full blackout on cue.' },
  { id: 'prayer', name: 'Prayer Room', accent: '#d8b878', floor: '#e2d9c6', wall: '#241d13', price: '₹4–9 L',
    story: 'A still point in the house — carved jaali screens, a back-lit marble altar, and morning light choreographed onto stone.',
    materials: ['Carved jaali screens', 'Back-lit marble altar', 'Teak flooring border', 'Brass bell detailing'],
    lighting: 'A single warm halo on the altar, 2200K.' },
  { id: 'pool', name: 'Pool, Terrace & Garden', accent: '#c2a26b', floor: '#a99a80', wall: '#100e0b', price: '₹20–60 L',
    story: 'Outdoor rooms, not afterthoughts — an infinity edge reflecting the evening sky, teak deck lounges, and up-lit trees that turn the villa into its own poster.',
    materials: ['Infinity-edge pool', 'Composite teak decking', 'Corten planter edges', 'In-ground tree uplights'],
    lighting: 'Moon-lighting from canopies, underwater 2700K, low bollards.' },
]

export const PROJECTS = [
  { id: 'p1', name: 'Modern Villa', meta: 'Jubilee Hills · 6,800 sq.ft',
    before: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1800&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop',
    story: 'A bare shell transformed into a light-carved villa — double-height living, floating stone stair, and a pool court that mirrors the evening sky.' },
  { id: 'p2', name: 'Minimal Villa', meta: 'Kokapet · 5,200 sq.ft',
    before: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1800&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1800&auto=format&fit=crop',
    story: 'Silence as luxury — shadow-gap walls, one stone, one wood, and light doing all the decoration.' },
  { id: 'p3', name: 'Luxury Penthouse', meta: 'Financial District · 4,400 sq.ft',
    before: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1800&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1800&auto=format&fit=crop',
    story: 'A sky residence with a bronze bar, smoked glass partitions, and a terrace lounge framing the city grid.' },
  { id: 'p4', name: 'Nature Villa', meta: 'Farmhouse · Moinabad · 2 acres',
    before: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&w=1800&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1800&auto=format&fit=crop',
    story: 'Indoor-outdoor living — courtyards, stone verandas, and rooms that open fully to mango canopy.' },
  { id: 'p5', name: 'Contemporary House', meta: 'Gachibowli · Duplex · 3,600 sq.ft',
    before: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1800&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1800&auto=format&fit=crop',
    story: 'A young duplex with a double-height dining void, floating stair, and a material palette in concrete, oak and brass.' },
  { id: 'p6', name: 'Neo Classical Home', meta: 'Banjara Hills · 8,000 sq.ft',
    before: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1800&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1800&auto=format&fit=crop',
    story: 'Cornices, panelled walls and marble inlay — classical grammar, edited to modern restraint.' },
  { id: 'p7', name: 'Scandinavian Home', meta: 'Kondapur · Apartment · 2,400 sq.ft',
    before: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1800&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1800&auto=format&fit=crop',
    story: 'Pale oak, warm white, wool and daylight — a calm apartment engineered for hygge in a hot city.' },
]

export const SERVICES = [
  { glyph: 'i.', name: 'Luxury Interior Design', copy: 'Complete residential design narratives — every room composed as one continuous cinematic sequence.' },
  { glyph: 'ii.', name: 'Space Planning', copy: 'Storage-first, light-first layouts built around how your family actually lives, not around catalogues.' },
  { glyph: 'iii.', name: '3D Visualization', copy: 'Photoreal walkthroughs so you approve every material, shadow and sightline before a single wall rises.' },
  { glyph: 'iv.', name: 'Custom Furniture', copy: 'Joinery, loose furniture and headboards designed for your rooms and built in our partner workshops.' },
  { glyph: 'v.', name: 'Lighting Design', copy: 'Layered lighting scenes — coves, accents and task light — tuned to the hour and the mood.' },
  { glyph: 'vi.', name: 'Landscape Design', copy: 'Gardens, courtyards, pools and terraces treated as outdoor rooms with their own lighting story.' },
  { glyph: 'vii.', name: 'Material Selection', copy: 'Curated stone, wood, fabric and metal palettes — sourced, sampled and approved in hand.' },
  { glyph: 'viii.', name: 'Turnkey Residential Execution', copy: 'Single-point delivery — civil, MEP, joinery, lighting and styling — with weekly reporting to the render.' },
]

export const MATERIALS = [
  { name: 'Statuario Marble', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=900&auto=format&fit=crop', note: 'Italian white with bold grey veining — floors and feature walls.' },
  { name: 'Walnut Veneer', img: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?q=80&w=900&auto=format&fit=crop', note: 'Deep, warm grain for panelling and wardrobes.' },
  { name: 'Travertine', img: 'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=900&auto=format&fit=crop', note: 'Honed, pitted texture for tables and consoles.' },
  { name: 'Brushed Brass', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=900&auto=format&fit=crop', note: 'Trims, profiles and fittings that age gracefully.' },
  { name: 'Bouclé & Velvet', img: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=900&auto=format&fit=crop', note: 'Tactile upholstery that holds warm light.' },
  { name: 'Fluted Oak', img: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=900&auto=format&fit=crop', note: 'Rhythmic shutters and wall linings.' },
]

export const TESTIMONIALS = [
  { quote: 'Walking into our finished villa felt exactly like the 3D walkthrough — down to the way evening light lands on the stair.', name: 'R. & S. Malhotra', meta: 'Modern Villa, Jubilee Hills' },
  { quote: 'They designed for how we live, not for photographs. And yet every corner photographs beautifully.', name: 'Dr. Ananya K.', meta: 'Luxury Penthouse, Financial District' },
  { quote: 'Turnkey meant turnkey — one team, one timeline, weekly updates, zero surprises on the final bill.', name: 'V. Reddy family', meta: 'Neo Classical Home, Banjara Hills' },
]

export const AWARDS = [
  { year: '2025', title: 'Best Luxury Residential Interior', org: 'India Design Awards' },
  { year: '2024', title: 'Villa Project of the Year — South', org: 'Architecture & Interiors India' },
  { year: '2024', title: 'Excellence in 3D Visualization', org: 'CGI Design Forum' },
  { year: '2023', title: 'Emerging Luxury Studio', org: 'Elle Decor Shortlist' },
]

export const INSTAGRAM = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=700&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=700&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=700&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=700&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=700&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=700&auto=format&fit=crop',
]

/* customizer palettes for the room vignette */
export const FLOOR_OPTIONS = [
  { name: 'Statuario', hex: '#ddd6c9' },
  { name: 'Travertine', hex: '#cbbfa5' },
  { name: 'Smoked Oak', hex: '#6b543c' },
  { name: 'Nero Stone', hex: '#33302b' },
]
export const WALL_OPTIONS = [
  { name: 'Warm Char', hex: '#1e1a14' },
  { name: 'Espresso Panel', hex: '#2c2115' },
  { name: 'Warm White', hex: '#d9d0bf' },
  { name: 'Deep Forest', hex: '#18201a' },
]
export const SOFA_OPTIONS = [
  { name: 'Ivory Bouclé', hex: '#e6ddcd' },
  { name: 'Camel Leather', hex: '#a5763f' },
  { name: 'Slate Velvet', hex: '#4a5058' },
  { name: 'Forest Velvet', hex: '#33463a' },
]
