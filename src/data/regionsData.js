// High quality curated dataset for States, their respective Cities, and live Properties across India

export const statesData = [
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    tagline: "India's Financial Engine & Premier Coastal Corridors",
    description: 'Explore curated sea-facing residences, tech corridor penthouses, and scenic hill country estates across Maharashtra.',
    image: `${import.meta.env.BASE_URL}images/states/maharashtra.jpg`,
    accentColor: '#c5a880',
    totalListings: '4,800+',
    cities: [
      {
        id: 'mumbai',
        name: 'Mumbai',
        tag: 'Financial Capital',
        tagline: 'Iconic sea-facing penthouses, Art Deco landmarks & prime South Mumbai towers.',
        image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=900&q=80',
        propertiesCount: '1,540+ Properties',
        avgPrice: '₹ 34,500 / sq.ft',
        highlights: 'Sea Link views, ultra-exclusive gated towers & waterfront promenades',
        localities: ['Worli', 'Bandra West', 'Juhu', 'BKC', 'Lower Parel'],
        featuredProjects: [
          {
            id: 'mum-1',
            name: 'NSS Sea Crest Worli',
            bhk: '4 BHK',
            propertyType: 'Apartment / Flat',
            type: '4 & 5 BHK Sea Deck Residences',
            price: '₹ 18.5 Cr onward',
            status: 'Ready to Move',
            locality: 'Worli',
            city: 'Mumbai',
            state: 'Maharashtra',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
          },
          {
            id: 'mum-2',
            name: 'Imperial Sky Tower Bandra',
            bhk: '3 BHK',
            propertyType: 'Apartment / Flat',
            type: '3 & 4 BHK Luxury Suites',
            price: '₹ 12.8 Cr onward',
            status: 'Under Construction',
            locality: 'Bandra West',
            city: 'Mumbai',
            state: 'Maharashtra',
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80'
          },
          {
            id: 'mum-3',
            name: 'The Sovereign Altamount',
            bhk: '5+ BHK / Penthouse',
            propertyType: 'Apartment / Flat',
            type: 'Signature Duplex Penthouses',
            price: '₹ 28.0 Cr onward',
            status: 'Possession Soon',
            locality: 'Altamount Road',
            city: 'Mumbai',
            state: 'Maharashtra',
            image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80'
          },
          {
            id: 'mum-4',
            name: 'Juhu Beachfront Haven',
            bhk: '4 BHK',
            propertyType: 'Independent House',
            type: '4 BHK Beachfront Bungalow',
            price: '₹ 24.5 Cr onward',
            status: 'Ready to Move',
            locality: 'Juhu',
            city: 'Mumbai',
            state: 'Maharashtra',
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        id: 'pune',
        name: 'Pune',
        tag: 'IT & Cultural Capital',
        tagline: 'Expansive garden townships, golf estates & high-tech urban sanctuaries.',
        image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=900&q=80',
        propertiesCount: '1,120+ Properties',
        avgPrice: '₹ 11,800 / sq.ft',
        highlights: 'Oxford of the East, booming IT tech parks & serene hill foothills',
        localities: ['Koregaon Park', 'Baner', 'Kalyani Nagar', 'Viman Nagar', 'Kothrud'],
        featuredProjects: [
          {
            id: 'pun-1',
            name: 'NSS Palms Koregaon',
            bhk: '3 BHK',
            propertyType: 'Apartment / Flat',
            type: '3 & 4 BHK Forest View Apartments',
            price: '₹ 4.2 Cr onward',
            status: 'Ready to Move',
            locality: 'Koregaon Park',
            city: 'Pune',
            state: 'Maharashtra',
            image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80'
          },
          {
            id: 'pun-2',
            name: 'Sky Villas at Baner Hills',
            bhk: '4 BHK',
            propertyType: 'Villa / Row House',
            type: '4 BHK Private Pool Villas',
            price: '₹ 5.6 Cr onward',
            status: 'New Launch',
            locality: 'Baner',
            city: 'Pune',
            state: 'Maharashtra',
            image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80'
          },
          {
            id: 'pun-3',
            name: 'The Pinnacle Kalyani Nagar',
            bhk: '2 BHK',
            propertyType: 'Apartment / Flat',
            type: '2 & 3 BHK River-view Condos',
            price: '₹ 2.8 Cr onward',
            status: 'Under Construction',
            locality: 'Kalyani Nagar',
            city: 'Pune',
            state: 'Maharashtra',
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        id: 'thane',
        name: 'Thane',
        tag: 'City of Lakes',
        tagline: 'Integrated green townships, lakeside high-rises & rapid metro connectivity.',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80',
        propertiesCount: '780+ Properties',
        avgPrice: '₹ 15,400 / sq.ft',
        highlights: 'Surrounded by Yeoor Hills, serene lakes & sprawling integrated clubs',
        localities: ['Ghodbunder Road', 'Majiwada', 'Vasant Vihar', 'Panchpakhadi', 'Hiranandani Estate'],
        featuredProjects: [
          {
            id: 'tha-1',
            name: 'Lakeside Serenade',
            bhk: '2 BHK',
            propertyType: 'Apartment / Flat',
            type: '2 & 3 BHK Lake-facing Homes',
            price: '₹ 1.95 Cr onward',
            status: 'Ready to Move',
            locality: 'Majiwada',
            city: 'Thane',
            state: 'Maharashtra',
            image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80'
          },
          {
            id: 'tha-2',
            name: 'Yeoor Greens Estate',
            bhk: '4 BHK',
            propertyType: 'Villa / Row House',
            type: '3 & 4 BHK Mountain Mansions',
            price: '₹ 3.8 Cr onward',
            status: 'Under Construction',
            locality: 'Ghodbunder Road',
            city: 'Thane',
            state: 'Maharashtra',
            image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        id: 'navi-mumbai',
        name: 'Navi Mumbai',
        tag: 'International Airport Corridor',
        tagline: 'Master-planned boulevards, upcoming international airport & seaside towers.',
        image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=900&q=80',
        propertiesCount: '640+ Properties',
        avgPrice: '₹ 14,200 / sq.ft',
        highlights: 'Direct Mumbai Trans Harbour Link (Atal Setu) connectivity & wide roads',
        localities: ['Palm Beach Road', 'Kharghar', 'Vashi', 'Nerul', 'Seawoods', 'Ulwe'],
        featuredProjects: [
          {
            id: 'nm-1',
            name: 'Palm Beach Horizon',
            bhk: '3 BHK',
            propertyType: 'Apartment / Flat',
            type: '3 & 4 BHK Marine Deck Suites',
            price: '₹ 4.5 Cr onward',
            status: 'Ready to Move',
            locality: 'Palm Beach Road',
            city: 'Navi Mumbai',
            state: 'Maharashtra',
            image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80'
          },
          {
            id: 'nm-2',
            name: 'Aerotropolis Heights Kharghar',
            bhk: '2 BHK',
            propertyType: 'Apartment / Flat',
            type: '2 & 3 BHK Modern High-rises',
            price: '₹ 1.7 Cr onward',
            status: 'New Launch',
            locality: 'Kharghar',
            city: 'Navi Mumbai',
            state: 'Maharashtra',
            image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        id: 'nagpur',
        name: 'Nagpur',
        tag: 'Orange City & Logistics Hub',
        tagline: 'High-speed metro network, central India economic hub & grand independent homes.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
        propertiesCount: '410+ Properties',
        avgPrice: '₹ 6,100 / sq.ft',
        highlights: 'Zero-mile connectivity, MIHAN tech cluster & royal tree-lined avenues',
        localities: ['Civil Lines', 'Dharampeth', 'Wardha Road', 'Manish Nagar', 'Ramdaspeth'],
        featuredProjects: [
          {
            id: 'nag-1',
            name: 'NSS Grandeur Civil Lines',
            bhk: '3 BHK',
            propertyType: 'Apartment / Flat',
            type: '3 & 4 BHK Bespoke Residences',
            price: '₹ 2.1 Cr onward',
            status: 'Possession 2026',
            locality: 'Civil Lines',
            city: 'Nagpur',
            state: 'Maharashtra',
            image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80'
          },
          {
            id: 'nag-2',
            name: 'Wardha Boulevard Enclave',
            bhk: '4 BHK',
            propertyType: 'Independent House',
            type: 'Independent Luxury Bungalow',
            price: '₹ 1.45 Cr onward',
            status: 'Ready to Move',
            locality: 'Wardha Road',
            city: 'Nagpur',
            state: 'Maharashtra',
            image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        id: 'nashik',
        name: 'Nashik',
        tag: 'Wine Capital of India',
        tagline: 'Picturesque vineyard villas, pristine hill climate & spiritual luxury retreats.',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80',
        propertiesCount: '370+ Properties',
        avgPrice: '₹ 6,600 / sq.ft',
        highlights: 'Boutique farmhouses, cool Sahyadri climate & high capital appreciation',
        localities: ['Gangapur Road', 'College Road', 'Indira Nagar', 'Govind Nagar', 'Mahatma Nagar'],
        featuredProjects: [
          {
            id: 'nas-1',
            name: 'Sula Valley Vineyard Villas',
            bhk: '4 BHK',
            propertyType: 'Villa / Row House',
            type: '4 BHK Luxury Vineyard Homes',
            price: '₹ 3.1 Cr onward',
            status: 'Under Construction',
            locality: 'Gangapur Road',
            city: 'Nashik',
            state: 'Maharashtra',
            image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80'
          },
          {
            id: 'nas-2',
            name: 'Godavari Waterfront',
            bhk: '3 BHK',
            propertyType: 'Apartment / Flat',
            type: '3 BHK Serene River Condos',
            price: '₹ 1.25 Cr onward',
            status: 'Ready to Move',
            locality: 'College Road',
            city: 'Nashik',
            state: 'Maharashtra',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        id: 'kolhapur',
        name: 'Kolhapur',
        tag: 'Royal Heritage & Legacy',
        tagline: 'Majestic private estates, rich royal architecture & peaceful green suburbs.',
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80',
        propertiesCount: '230+ Properties',
        avgPrice: '₹ 5,300 / sq.ft',
        highlights: 'Historic royal charm, scenic Rankala lakefront & robust agri-business prosperity',
        localities: ['Tarabai Park', 'Nagala Park', 'Rajarampuri', 'Rankala', 'Shahu Puri'],
        featuredProjects: [
          {
            id: 'kol-1',
            name: 'NSS Rajlaxmi Heritage',
            bhk: '3 BHK',
            propertyType: 'Apartment / Flat',
            type: '3 & 4 BHK Heritage Condos',
            price: '₹ 1.35 Cr onward',
            status: 'Ready to Move',
            locality: 'Tarabai Park',
            city: 'Kolhapur',
            state: 'Maharashtra',
            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'
          },
          {
            id: 'kol-2',
            name: 'Rankala Lakeview Residency',
            bhk: '2 BHK',
            propertyType: 'Apartment / Flat',
            type: '2 BHK Lake Condos',
            price: '₹ 95 Lakh onward',
            status: 'Ready to Move',
            locality: 'Rankala',
            city: 'Kolhapur',
            state: 'Maharashtra',
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        id: 'chhatrapati-sambhajinagar',
        name: 'Chhatrapati Sambhajinagar',
        tag: 'Industrial & Tourism Corridor',
        tagline: 'Rapid industrial growth, modern townships & historic tourist gateway.',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80',
        propertiesCount: '210+ Properties',
        avgPrice: '₹ 5,000 / sq.ft',
        highlights: 'DMIC smart city belt, prime automotive hub & expansive modern residential plots',
        localities: ['Cidco', 'Garkheda', 'Beed Bypass', 'Jalna Road', 'Samarth Nagar'],
        featuredProjects: [
          {
            id: 'cs-1',
            name: 'DMIC Horizon Park',
            bhk: '2 BHK',
            propertyType: 'Apartment / Flat',
            type: '2 & 3 BHK Smart Living Suites',
            price: '₹ 95 Lakh onward',
            status: 'Under Construction',
            locality: 'Jalna Road',
            city: 'Chhatrapati Sambhajinagar',
            state: 'Maharashtra',
            image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80'
          }
        ]
      }
    ]
  },
  {
    id: 'goa',
    name: 'Goa',
    tagline: 'Coastal Luxury, Sun-kissed Villas & Tropical Sanctuaries',
    description: 'Discover Portuguese colonial estates, private pool villas, and Arabian sea-view retreats in paradise.',
    image: `${import.meta.env.BASE_URL}images/states/goa.jpg`,
    accentColor: '#c5a880',
    totalListings: '1,850+',
    cities: [
      {
        id: 'north-goa',
        name: 'North Goa',
        tag: 'Vibrant Coastal Living',
        tagline: 'Celebrity designer villas, beach clubs & lush coconut palm enclaves.',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80',
        propertiesCount: '580+ Properties',
        avgPrice: '₹ 22,500 / sq.ft',
        highlights: 'Candolim, Assagao designer culinary belt, private infinity pools & high rental yield',
        localities: ['Assagao', 'Candolim', 'Anjuna', 'Vagator', 'Siolim', 'Morjim'],
        featuredProjects: [
          {
            id: 'ngo-1',
            name: 'Assagao Sunsets Estate',
            bhk: '4 BHK',
            propertyType: 'Villa / Row House',
            type: '4 BHK Private Portuguese Villa with Pool',
            price: '₹ 8.5 Cr onward',
            status: 'Ready to Move',
            locality: 'Assagao',
            city: 'North Goa',
            state: 'Goa',
            image: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=800&q=80'
          },
          {
            id: 'ngo-2',
            name: 'Vagator Cliff Suites',
            bhk: '3 BHK',
            propertyType: 'Apartment / Flat',
            type: '2 & 3 BHK Beachfront Penthouses',
            price: '₹ 4.2 Cr onward',
            status: 'Under Construction',
            locality: 'Vagator',
            city: 'North Goa',
            state: 'Goa',
            image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
          },
          {
            id: 'ngo-3',
            name: 'Siolim River Sanctuaries',
            bhk: '4 BHK',
            propertyType: 'Villa / Row House',
            type: '4 BHK Forest River Villa',
            price: '₹ 5.9 Cr onward',
            status: 'New Launch',
            locality: 'Siolim',
            city: 'North Goa',
            state: 'Goa',
            image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80'
          },
          {
            id: 'ngo-4',
            name: 'Candolim Palm Bay',
            bhk: '2 BHK',
            propertyType: 'Apartment / Flat',
            type: '2 & 3 BHK Resort Residences',
            price: '₹ 2.8 Cr onward',
            status: 'Ready to Move',
            locality: 'Candolim',
            city: 'North Goa',
            state: 'Goa',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        id: 'south-goa',
        name: 'South Goa',
        tag: 'Pristine & Quiet Luxury',
        tagline: 'Tranquil white-sand coastlines, vintage heritage mansions & world-class resorts.',
        image: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=900&q=80',
        propertiesCount: '370+ Properties',
        avgPrice: '₹ 16,800 / sq.ft',
        highlights: 'Untouched private beaches, quiet Portuguese architecture & 5-star hotel enclaves',
        localities: ['Colva', 'Benaulim', 'Cavelossim', 'Varca', 'Majorda', 'Betalbatim'],
        featuredProjects: [
          {
            id: 'sgo-1',
            name: 'Cavelossim Beach Enclave',
            bhk: '4 BHK',
            propertyType: 'Villa / Row House',
            type: '4 BHK Beachfront Bungalow',
            price: '₹ 6.4 Cr onward',
            status: 'Ready to Move',
            locality: 'Cavelossim',
            city: 'South Goa',
            state: 'Goa',
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
          },
          {
            id: 'sgo-2',
            name: 'The Benaulim Courtyard',
            bhk: '3 BHK',
            propertyType: 'Independent House',
            type: '3 BHK Heritage Portuguese Residences',
            price: '₹ 2.8 Cr onward',
            status: 'Under Construction',
            locality: 'Benaulim',
            city: 'South Goa',
            state: 'Goa',
            image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        id: 'panaji',
        name: 'Panaji',
        tag: 'Capital Promenade & Heritage',
        tagline: 'Latin Quarter cobblestone charm, Mandovi river luxury & VIP residences.',
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=900&q=80',
        propertiesCount: '310+ Properties',
        avgPrice: '₹ 19,500 / sq.ft',
        highlights: 'Fontainhas heritage precinct, Miramar beach views & luxury riverfront walkways',
        localities: ['Fontainhas', 'Miramar', 'Dona Paula', 'Caranzalem', 'Altinho'],
        featuredProjects: [
          {
            id: 'pan-1',
            name: 'Dona Paula Ocean Deck',
            bhk: '4 BHK',
            propertyType: 'Apartment / Flat',
            type: '4 BHK Arabian Sea Suites',
            price: '₹ 7.2 Cr onward',
            status: 'Ready to Move',
            locality: 'Dona Paula',
            city: 'Panaji',
            state: 'Goa',
            image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80'
          },
          {
            id: 'pan-2',
            name: 'Miramar Boulevard Towers',
            bhk: '3 BHK',
            propertyType: 'Apartment / Flat',
            type: '3 BHK High-rise Luxury Homes',
            price: '₹ 3.9 Cr onward',
            status: 'Under Construction',
            locality: 'Miramar',
            city: 'Panaji',
            state: 'Goa',
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80'
          },
          {
            id: 'pan-3',
            name: 'Fontainhas Heritage Manor',
            bhk: '3 BHK',
            propertyType: 'Independent House',
            type: '3 BHK Latin Quarter Restored Mansion',
            price: '₹ 5.1 Cr onward',
            status: 'Ready to Move',
            locality: 'Fontainhas',
            city: 'Panaji',
            state: 'Goa',
            image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        id: 'margao',
        name: 'Margao',
        tag: 'Commercial & Cultural Heart',
        tagline: 'South Goa’s bustling center with grand aristocratic estates and commercial avenues.',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
        propertiesCount: '230+ Properties',
        avgPrice: '₹ 9,800 / sq.ft',
        highlights: 'Colonial town squares, top-tier schools, rail connectivity & spacious apartments',
        localities: ['Fatorda', 'Aquem', 'Borda', 'Navelim', 'Gogol'],
        featuredProjects: [
          {
            id: 'mar-1',
            name: 'Fatorda Royal Palms',
            bhk: '2 BHK',
            propertyType: 'Apartment / Flat',
            type: '2 & 3 BHK Gated Residences',
            price: '₹ 1.25 Cr onward',
            status: 'Ready to Move',
            locality: 'Fatorda',
            city: 'Margao',
            state: 'Goa',
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        id: 'vasco-da-gama',
        name: 'Vasco da Gama',
        tag: 'Port & Airport Corridor',
        tagline: 'Panoramic Arabian Sea cliff views, naval heritage & airport proximity.',
        image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=900&q=80',
        propertiesCount: '170+ Properties',
        avgPrice: '₹ 9,100 / sq.ft',
        highlights: 'Overlooking Bogmalo bay, Dabolim international connectivity & lush hill plateaus',
        localities: ['Chicalim', 'Dabolim', 'Bogmalo', 'Sancoale', 'Mangor Hill'],
        featuredProjects: [
          {
            id: 'vas-1',
            name: 'Chicalim Cliffside Residences',
            bhk: '3 BHK',
            propertyType: 'Apartment / Flat',
            type: '3 BHK Bayview Suites',
            price: '₹ 2.1 Cr onward',
            status: 'Under Construction',
            locality: 'Chicalim',
            city: 'Vasco da Gama',
            state: 'Goa',
            image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        id: 'mapusa',
        name: 'Mapusa',
        tag: 'Central Hinterland & Valley',
        tagline: 'Lush green valley living with instant access to all North Goa beaches.',
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80',
        propertiesCount: '190+ Properties',
        avgPrice: '₹ 11,200 / sq.ft',
        highlights: 'Scenic Aldona & Moira artists belt, peaceful river tributaries & serene villas',
        localities: ['Khorlim', 'Moira', 'Aldona', 'Parra', 'Guirim'],
        featuredProjects: [
          {
            id: 'map-1',
            name: 'Aldona River Retreat',
            bhk: '4 BHK',
            propertyType: 'Villa / Row House',
            type: '3 & 4 BHK Valley Pool Villas',
            price: '₹ 4.5 Cr onward',
            status: 'Possession 2026',
            locality: 'Aldona',
            city: 'Mapusa',
            state: 'Goa',
            image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80'
          }
        ]
      }
    ]
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    tagline: 'Vibrant Growth, World-Class Infrastructure & GIFT City',
    description: 'Explore ultra-modern high-rises, sprawling Ambli Road bungalows, and smart-city FinTech towers.',
    image: `${import.meta.env.BASE_URL}images/states/gujarat.jpg`,
    accentColor: '#c5a880',
    totalListings: '3,200+',
    cities: [
      {
        id: 'ahmedabad',
        name: 'Ahmedabad',
        tag: 'Mega Metropolis & GIFT Corridor',
        tagline: 'Sabarmati riverfront luxury, Ambli-Bopal sprawling bungalows & corporate headquarters.',
        image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=900&q=80',
        propertiesCount: '1,280+ Properties',
        avgPrice: '₹ 10,800 / sq.ft',
        highlights: 'Wide expressways, premier educational institutes & thriving high-end lifestyle clubs',
        localities: ['SG Highway', 'Bodakdev', 'Ambli Road', 'Satellite', 'Prahlad Nagar', 'Thaltej'],
        featuredProjects: [
          {
            id: 'ahm-1',
            name: 'NSS Ambli Sky Villas',
            bhk: '5+ BHK / Penthouse',
            propertyType: 'Villa / Row House',
            type: '4 & 5 BHK Ultra-luxury Suites',
            price: '₹ 6.5 Cr onward',
            status: 'Ready to Move',
            locality: 'Ambli Road',
            city: 'Ahmedabad',
            state: 'Gujarat',
            image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80'
          },
          {
            id: 'ahm-2',
            name: 'Bodakdev Premier Towers',
            bhk: '3 BHK',
            propertyType: 'Apartment / Flat',
            type: '3 & 4 BHK Cityscape Apartments',
            price: '₹ 3.8 Cr onward',
            status: 'Under Construction',
            locality: 'Bodakdev',
            city: 'Ahmedabad',
            state: 'Gujarat',
            image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        id: 'surat',
        name: 'Surat',
        tag: 'Diamond City of the World',
        tagline: 'Modern skyscraper condos, Tapi riverfront estates & diamond bourse corridor.',
        image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80',
        propertiesCount: '810+ Properties',
        avgPrice: '₹ 9,200 / sq.ft',
        highlights: 'Fastest-growing economic hub, diamond bourse connectivity & luxurious Vesu skyline',
        localities: ['Vesu', 'VIP Road', 'Piplod', 'Adajan', 'Althan', 'Pal'],
        featuredProjects: [
          {
            id: 'sur-1',
            name: 'Surat Diamond Tower Residences',
            bhk: '4 BHK',
            propertyType: 'Apartment / Flat',
            type: '4 BHK Luxury Apartments',
            price: '₹ 4.1 Cr onward',
            status: 'Possession 2026',
            locality: 'Vesu',
            city: 'Surat',
            state: 'Gujarat',
            image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        id: 'gandhinagar',
        name: 'Gandhinagar',
        tag: 'Capital & GIFT City Tech Hub',
        tagline: 'International FinTech towers, wide tree-lined sectors & futuristic infrastructure.',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80',
        propertiesCount: '450+ Properties',
        avgPrice: '₹ 8,700 / sq.ft',
        highlights: 'GIFT City Special Economic Zone, top-tier global banks & peaceful green canopy',
        localities: ['GIFT City', 'Kudasan', 'Raysan', 'Sector 8', 'Koba', 'Randesan'],
        featuredProjects: [
          {
            id: 'gan-1',
            name: 'GIFT City International Suites',
            bhk: '2 BHK',
            propertyType: 'Apartment / Flat',
            type: '2 & 3 BHK FinTech Tower Condos',
            price: '₹ 1.85 Cr onward',
            status: 'Under Construction',
            locality: 'GIFT City',
            city: 'Gandhinagar',
            state: 'Gujarat',
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        id: 'vadodara',
        name: 'Vadodara',
        tag: 'Cultural Capital & Royal Heritage',
        tagline: 'Palace gardens, peaceful tree-lined boulevards & grand villa gated communities.',
        image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=900&q=80',
        propertiesCount: '520+ Properties',
        avgPrice: '₹ 6,500 / sq.ft',
        highlights: 'Gaekwad royal legacy, lush greenery, high standard of living & peaceful ambiance',
        localities: ['Alkapuri', 'Vasna-Bhayli', 'Old Padra Road', 'Sevasi', 'Gotri'],
        featuredProjects: [
          {
            id: 'vad-1',
            name: 'Bhayli Royal Enclave',
            bhk: '4 BHK',
            propertyType: 'Villa / Row House',
            type: '4 BHK Garden Villas',
            price: '₹ 3.4 Cr onward',
            status: 'Ready to Move',
            locality: 'Vasna-Bhayli',
            city: 'Vadodara',
            state: 'Gujarat',
            image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        id: 'rajkot',
        name: 'Rajkot',
        tag: 'Saurashtra Hub & Enterprise',
        tagline: 'Dynamic entrepreneurial corridor, wide ring roads & premium residential towers.',
        image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80',
        propertiesCount: '320+ Properties',
        avgPrice: '₹ 5,800 / sq.ft',
        highlights: 'Fast industrial expansion, AIIMS medical hub & modern lifestyle clubs',
        localities: ['Kalawad Road', 'University Road', '150ft Ring Road', 'Nana Mava', 'Raiya Road'],
        featuredProjects: [
          {
            id: 'raj-1',
            name: 'Kalawad Skyline Heights',
            bhk: '3 BHK',
            propertyType: 'Apartment / Flat',
            type: '3 & 4 BHK Luxury Condos',
            price: '₹ 1.65 Cr onward',
            status: 'Ready to Move',
            locality: 'Kalawad Road',
            city: 'Rajkot',
            state: 'Gujarat',
            image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        id: 'bhavnagar',
        name: 'Bhavnagar',
        tag: 'Coastal Heritage & Emerging Belts',
        tagline: 'Quiet seaside living, historic palaces & spacious private bungalows.',
        image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=80',
        propertiesCount: '170+ Properties',
        avgPrice: '₹ 4,700 / sq.ft',
        highlights: 'Victoria Nature Park, clean coastal atmosphere & expansive land parcels',
        localities: ['Kaliabid', 'Victoria Park Road', 'Takhteshwar', 'Waghawadi Road', 'Ghogha Road'],
        featuredProjects: [
          {
            id: 'bha-1',
            name: 'Victoria Heritage Meadows',
            bhk: '3 BHK',
            propertyType: 'Villa / Row House',
            type: 'Premium Plots & Villas',
            price: '₹ 95 Lakh onward',
            status: 'Ready to Move',
            locality: 'Victoria Park Road',
            city: 'Bhavnagar',
            state: 'Gujarat',
            image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80'
          }
        ]
      }
    ]
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    tagline: "India's Tech Silicon Hub, Royal Corridors & Coastal Ports",
    description: 'From Bengaluru’s high-tech penthouses to Mysuru’s palatial bungalows and Mangaluru’s seafront towers.',
    image: `${import.meta.env.BASE_URL}images/states/karnataka.jpg`,
    accentColor: '#c5a880',
    totalListings: '3,900+',
    cities: [
      {
        id: 'bengaluru',
        name: 'Bengaluru',
        tag: 'Silicon Valley of India',
        tagline: 'High-tech smart enclaves, private garden sky-villas & premier tech corridor residences.',
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=900&q=80',
        propertiesCount: '2,150+ Properties',
        avgPrice: '₹ 17,200 / sq.ft',
        highlights: 'Global tech giants, vibrant nightlife, green lung spaces & highest rental returns',
        localities: ['Indiranagar', 'Koramangala', 'Whitefield', 'Sadashivanagar', 'Hebbal', 'Sarjapur Road'],
        featuredProjects: [
          {
            id: 'blr-1',
            name: 'NSS Sky Sanctuary Hebbal',
            bhk: '4 BHK',
            propertyType: 'Apartment / Flat',
            type: '4 & 5 BHK Lakeview Penthouses',
            price: '₹ 7.8 Cr onward',
            status: 'Ready to Move',
            locality: 'Hebbal',
            city: 'Bengaluru',
            state: 'Karnataka',
            image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80'
          },
          {
            id: 'blr-2',
            name: 'Whitefield Green Mansions',
            bhk: '4 BHK',
            propertyType: 'Villa / Row House',
            type: '4 BHK Private Gated Villas',
            price: '₹ 5.2 Cr onward',
            status: 'Under Construction',
            locality: 'Whitefield',
            city: 'Bengaluru',
            state: 'Karnataka',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
          },
          {
            id: 'blr-3',
            name: 'Indiranagar Boutique Residences',
            bhk: '3 BHK',
            propertyType: 'Apartment / Flat',
            type: '3 BHK Bespoke Suites',
            price: '₹ 4.1 Cr onward',
            status: 'Possession 2026',
            locality: 'Indiranagar',
            city: 'Bengaluru',
            state: 'Karnataka',
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        id: 'mysuru',
        name: 'Mysuru',
        tag: 'City of Palaces & Heritage',
        tagline: 'Heritage tranquility, royal tree-lined boulevards & low-density luxury bungalows.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
        propertiesCount: '410+ Properties',
        avgPrice: '₹ 7,400 / sq.ft',
        highlights: 'Bengaluru-Mysuru 10-lane expressway, yoga capital & clean green living',
        localities: ['Jayalakshmipuram', 'Gokulam', 'Vijayanagar', 'Yadavagiri', 'Kuvempunagar'],
        featuredProjects: [
          {
            id: 'mys-1',
            name: 'Chamundi View Estates',
            bhk: '4 BHK',
            propertyType: 'Villa / Row House',
            type: '3 & 4 BHK Heritage Style Villas',
            price: '₹ 2.6 Cr onward',
            status: 'Ready to Move',
            locality: 'Jayalakshmipuram',
            city: 'Mysuru',
            state: 'Karnataka',
            image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        id: 'mangaluru',
        name: 'Mangaluru',
        tag: 'Arabian Sea Coast & Port Hub',
        tagline: 'Pristine coastal skyline, Arabian sea-facing towers & tropical hillside living.',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80',
        propertiesCount: '340+ Properties',
        avgPrice: '₹ 7,100 / sq.ft',
        highlights: 'Major seaport, high education standards, scenic beaches & unpolluted coast',
        localities: ['Kadri', 'Bejai', 'Mannagudda', 'Kodialbail', 'Surathkal', 'Kankanady'],
        featuredProjects: [
          {
            id: 'man-1',
            name: 'Arabian Sea Pearl Kadri',
            bhk: '3 BHK',
            propertyType: 'Apartment / Flat',
            type: '3 & 4 BHK Oceanview Condos',
            price: '₹ 2.4 Cr onward',
            status: 'Under Construction',
            locality: 'Kadri',
            city: 'Mangaluru',
            state: 'Karnataka',
            image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        id: 'hubballi-dharwad',
        name: 'Hubballi-Dharwad',
        tag: 'Commercial Twin Cities',
        tagline: 'North Karnataka’s premier commercial and educational twin-city axis.',
        image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=900&q=80',
        propertiesCount: '240+ Properties',
        avgPrice: '₹ 5,300 / sq.ft',
        highlights: 'BRTS corridor, IIT Dharwad hub & high infrastructure investments',
        localities: ['Vidyanagar', 'Shirur Park', 'Kusugal Road', 'Gokul Road', 'Navanagar'],
        featuredProjects: [
          {
            id: 'hub-1',
            name: 'Twin City Heights',
            bhk: '2 BHK',
            propertyType: 'Apartment / Flat',
            type: '2 & 3 BHK Gated Residences',
            price: '₹ 85 Lakh onward',
            status: 'Ready to Move',
            locality: 'Vidyanagar',
            city: 'Hubballi-Dharwad',
            state: 'Karnataka',
            image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        id: 'belagavi',
        name: 'Belagavi',
        tag: 'Hillside Strategic Corridor',
        tagline: 'Cool mountain air, rich colonial Cantonment charm & pleasant hill climate.',
        image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80',
        propertiesCount: '190+ Properties',
        avgPrice: '₹ 4,900 / sq.ft',
        highlights: 'Pleasant year-round weather, military cantonment greenery & peaceful living',
        localities: ['Tilakwadi', 'Camp', 'Bhagya Nagar', 'Khanapur Road', 'Hindwadi'],
        featuredProjects: [
          {
            id: 'bel-1',
            name: 'Tilakwadi Green Enclave',
            bhk: '3 BHK',
            propertyType: 'Independent House',
            type: '3 BHK Mountain View Homes',
            price: '₹ 1.15 Cr onward',
            status: 'Ready to Move',
            locality: 'Tilakwadi',
            city: 'Belagavi',
            state: 'Karnataka',
            image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        id: 'shimoga',
        name: 'Shimoga',
        tag: 'Gateway to Western Ghats',
        tagline: 'Eco-residences, waterfall valleys & serene unhurried living.',
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80',
        propertiesCount: '150+ Properties',
        avgPrice: '₹ 4,300 / sq.ft',
        highlights: 'Jog falls region, new airport connectivity & organic farm estates',
        localities: ['Gopala', 'Vinoba Nagara', 'Sharavathi Nagar', 'Savalanga Road'],
        featuredProjects: [
          {
            id: 'shi-1',
            name: 'Sharavathi Eco Groves',
            bhk: 'Villa / Row House',
            propertyType: 'Villa / Row House',
            type: 'Green Villas & Estate Plots',
            price: '₹ 75 Lakh onward',
            status: 'New Launch',
            locality: 'Gopala',
            city: 'Shimoga',
            state: 'Karnataka',
            image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80'
          }
        ]
      }
    ]
  }
];

export const getStateById = (stateId) => {
  if (!stateId) return null;
  return statesData.find((s) => s.id.toLowerCase() === stateId.toLowerCase()) || null;
};

export const getStateByName = (stateName) => {
  if (!stateName) return null;
  return statesData.find((s) => s.name.toLowerCase() === stateName.toLowerCase()) || null;
};

// Returns cities strictly for a given state (or all cities if no state given)
export const getCitiesForState = (stateName) => {
  if (!stateName) {
    return statesData.flatMap((s) => s.cities.map((c) => c.name));
  }
  const stateObj = getStateByName(stateName);
  return stateObj ? stateObj.cities.map((c) => c.name) : [];
};

// Returns all properties flattened for a state
export const getAllPropertiesForState = (stateId) => {
  const stateObj = getStateById(stateId);
  if (!stateObj) return [];
  return stateObj.cities.flatMap((c) => c.featuredProjects || []);
};
