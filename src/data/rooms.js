export const ROOMS = [
  {
    id: 'living',
    name: 'Living Room',
    accent: '#c8a76b',
    floor: '#d8d2c6',
    wall: '#211c17',
    story:
      'The living room is composed like an establishing shot — a double-height volume where Italian marble meets walnut panelling under a floating cove of warm light.',
    materials: ['Statuario marble flooring', 'Walnut veneer panelling', 'Antique brass trims', 'Bouclé upholstery'],
    lighting: 'Layered — 2700K cove, accent spots on art, daylight from full-height glazing.',
  },
  {
    id: 'kitchen',
    name: 'Kitchen',
    accent: '#b8a284',
    floor: '#cfc8ba',
    wall: '#1a1712',
    story:
      'A chef-grade island in leathered granite anchors the space. Handle-less fluted oak shutters keep the geometry silent; task light appears only where hands work.',
    materials: ['Leathered black granite', 'Fluted oak shutters', 'Matte-black fittings', 'Quartz backsplash'],
    lighting: 'Under-cabinet task strips, 3000K pendants over the island.',
  },
  {
    id: 'dining',
    name: 'Dining',
    accent: '#caa96e',
    floor: '#d5cec0',
    wall: '#1e1a14',
    story:
      'Dining is theatre — a sculptural table under a linear chandelier, mirrored wall panels doubling candlelight, acoustic fabric keeping conversation soft.',
    materials: ['Travertine table top', 'Smoked mirror panels', 'Acoustic fabric walls', 'Bronze chandelier'],
    lighting: 'Dimmable 2400K linear pendant, wall grazers on texture.',
  },
  {
    id: 'bedroom',
    name: 'Master Bedroom',
    accent: '#cbb083',
    floor: '#b7a58c',
    wall: '#171310',
    story:
      'The master suite is tuned for rest — a leather-wrapped headboard wall, blackout sheers on silent tracks, and a palette that ends the day quietly.',
    materials: ['Engineered oak flooring', 'Stitched leather headboard', 'Silk-blend drapery', 'Champagne metal accents'],
    lighting: 'Bedside pendants at 2200K, concealed skirting glow for night.',
  },
  {
    id: 'office',
    name: 'Home Office',
    accent: '#a9895a',
    floor: '#c9c2b4',
    wall: '#191510',
    story:
      'A focused cockpit — back-lit shelving, a stone-top desk facing the light, acoustic panelling so video calls sound like a studio.',
    materials: ['Nero Marquina desk top', 'Back-lit display shelving', 'Acoustic slat panels', 'Cognac leather seating'],
    lighting: '4000K task lamp zone within a 2700K ambient shell.',
  },
  {
    id: 'wardrobe',
    name: 'Walk-in Wardrobe',
    accent: '#d0b177',
    floor: '#b9ab93',
    wall: '#14100c',
    story:
      'Boutique retail logic at home — garments lit like merchandise, an island of drawers in suede, and a full-height mirror with cinematic edge light.',
    materials: ['Suede-wrapped island', 'Sensor-lit hanging rails', 'Bronze-tint glass shutters', 'Velvet drawer inlays'],
    lighting: 'Vertical LED rails at 3500K for true garment colour.',
  },
  {
    id: 'bath',
    name: 'Luxury Bathroom',
    accent: '#bfa87e',
    floor: '#d9d4ca',
    wall: '#1c1916',
    story:
      'A private spa — book-matched stone walls, a freestanding tub under a skylight shaft, brushed-gold fittings warmed by indirect coves.',
    materials: ['Book-matched Calacatta', 'Freestanding stone tub', 'Brushed gold fittings', 'Heated micro-terrazzo floor'],
    lighting: 'Skylight shaft by day, 2700K coves and mirror halo by night.',
  },
  {
    id: 'balcony',
    name: 'Balcony',
    accent: '#c2a26b',
    floor: '#a99a80',
    wall: '#100e0b',
    story:
      'An outdoor room, not an afterthought — deck flooring, a planted green edge, and low warm bollards that make the city skyline the artwork.',
    materials: ['Composite teak decking', 'Corten planter edge', 'Weatherproof lounge fabric', 'Low bollard lighting'],
    lighting: 'Ground-wash bollards, candle-warm 2200K.',
  },
  {
    id: 'garden',
    name: 'Garden',
    accent: '#a5915f',
    floor: '#8f8468',
    wall: '#0d0c09',
    story:
      'Landscape as the final frame — sculpted hedges, a reflective water line, and up-lit trees that turn the villa into its own night-time poster.',
    materials: ['Natural stone pathways', 'Reflective water feature', 'Sculpted native planting', 'In-ground uplights'],
    lighting: 'Moon-lighting from canopies, warm up-lights on bark texture.',
  },
]

export const PROJECTS = [
  {
    id: 'p1',
    name: 'The Marble Villa',
    meta: 'Residential Villa · 6,800 sq.ft · Jubilee Hills',
    before: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1800&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop',
    story: 'A bare shell transformed into a light-carved villa — double-height living, floating stone stair, and a pool court that mirrors the evening sky.',
  },
  {
    id: 'p2',
    name: 'Obsidian Workspace',
    meta: 'Corporate Office · 14,000 sq.ft · HITEC City',
    before: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1800&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1800&auto=format&fit=crop',
    story: 'An open-plan floor re-imagined as a dark, focused workspace — acoustic timber ceilings, brass wayfinding, and a boardroom lit like a stage.',
  },
  {
    id: 'p3',
    name: 'The Velvet Lounge',
    meta: 'Hospitality · F&B Destination · Banjara Hills',
    before: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1800&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1800&auto=format&fit=crop',
    story: 'Deep upholstery, smoked mirrors and a ceiling of concealed coves — a dining room engineered to flatter every table after dusk.',
  },
]

export const SERVICES = [
  { glyph: 'i.', name: 'Residential', copy: 'Apartments and homes designed around how your family actually lives — storage-first planning, light-first mood.' },
  { glyph: 'ii.', name: 'Commercial', copy: 'Retail and workspaces where the interior is a business tool — brand-true, durable, and photogenic.' },
  { glyph: 'iii.', name: 'Office', copy: 'Focused, acoustic, and camera-ready workplaces with hierarchy expressed in material, not signage.' },
  { glyph: 'iv.', name: 'Villa', copy: 'Full-villa narratives — from gate to garden — composed as one continuous cinematic sequence.' },
  { glyph: 'v.', name: 'Hospitality', copy: 'Lounges, cafés and stays engineered for atmosphere: lighting tuned to the hour, textures tuned to touch.' },
  { glyph: 'vi.', name: '3D Visualization', copy: 'Photoreal walkthroughs so you approve every material, shadow and sightline before a single wall rises.' },
  { glyph: 'vii.', name: 'Turnkey Execution', copy: 'Single-point delivery — civil, MEP, joinery, lighting and styling — with weekly reporting to the render.' },
]
