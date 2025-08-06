export interface LocationData {
  slug: string;
  name: string;
  description: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  latitude: string;
  longitude: string;
  neighborhoods: string[];
  schools: string[];
  landmarks: string[];
  metaDescription: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const locations: LocationData[] = [
  {
    slug: 'midtown-tulsa',
    name: 'SafeHarbor Behavioral Health - Midtown Tulsa',
    description: 'Serving families in the heart of Tulsa from Utica Square to the Fairgrounds, including Maple Ridge, Swan Lake, and Ranch Acres neighborhoods.',
    streetAddress: '1234 Utica Avenue',
    city: 'Tulsa',
    state: 'OK',
    zipCode: '74105',
    phone: '918-391-3606',
    latitude: '36.1339',
    longitude: '-95.9372',
    neighborhoods: ['Maple Ridge', 'Swan Lake', 'Ranch Acres', 'Florence Park', 'Gillette', 'Renaissance'],
    schools: ['Edison Preparatory School', 'Cascia Hall', 'Bishop Kelley', 'Eliot Elementary', 'Grimes Elementary'],
    landmarks: ['Utica Square', 'Philbrook Museum', 'St. John Medical Center', 'Woodward Park'],
    metaDescription: 'Child therapy and teen counseling in Midtown Tulsa. SafeHarbor accepts Medicaid/SoonerCare. Serving Maple Ridge, Swan Lake & Utica Square families. Call (918) 391-3606.',
    faqs: [
      {
        question: 'Do you accept Medicaid and SoonerCare for child therapy in Midtown Tulsa?',
        answer: 'Yes, SafeHarbor accepts Oklahoma Medicaid and SoonerCare for all our child and teen therapy services in Midtown Tulsa. We also accept most major insurance plans.'
      },
      {
        question: 'What Midtown Tulsa schools do you work with?',
        answer: 'We collaborate with Edison Preparatory, Cascia Hall, Bishop Kelley, and all TPS elementary schools in the midtown area when parents provide authorization.'
      },
      {
        question: 'Is your Midtown location easy to find from Utica Square?',
        answer: 'Yes! We\'re just 3 minutes south of Utica Square on Utica Avenue with ample parking and easy access from all midtown neighborhoods.'
      }
    ]
  },
  {
    slug: 'south-tulsa',
    name: 'SafeHarbor Behavioral Health - South Tulsa',
    description: 'Comprehensive behavioral health services for South Tulsa families, serving Brookside, Riverside, and surrounding communities.',
    streetAddress: '5678 Yale Avenue',
    city: 'Tulsa',
    state: 'OK',
    zipCode: '74136',
    phone: '918-391-3607',
    latitude: '36.0622',
    longitude: '-95.9372',
    neighborhoods: ['Brookside', 'Riverside', 'Southern Hills', 'Jenks West', 'Bixby North'],
    schools: ['Jenks High School', 'Bixby High School', 'Riverside Elementary', 'Brookside Elementary'],
    landmarks: ['Brookside by Day', 'Riverside Park', 'Southern Hills Country Club'],
    metaDescription: 'South Tulsa child therapy & teen counseling. Medicaid accepted. Serving Brookside, Riverside & Jenks families. Same-week appointments. Call (918) 391-3607.',
    faqs: [
      {
        question: 'Do you accept SoonerCare for therapy services in South Tulsa?',
        answer: 'Absolutely! We accept SoonerCare, Medicaid, and most insurance plans for child therapy, teen counseling, and family therapy services in South Tulsa.'
      },
      {
        question: 'How close are you to Jenks and Bixby schools?',
        answer: 'Our South Tulsa office is conveniently located with easy access to Jenks and Bixby school districts, approximately 10-15 minutes from most schools.'
      }
    ]
  },
  {
    slug: 'broken-arrow',
    name: 'SafeHarbor Behavioral Health - Broken Arrow',
    description: 'Mental health services for children and teens in Broken Arrow, serving families throughout the BA school district.',
    streetAddress: '9876 Lynn Lane Road',
    city: 'Broken Arrow',
    state: 'OK',
    zipCode: '74012',
    phone: '918-391-3608',
    latitude: '36.0365',
    longitude: '-95.7809',
    neighborhoods: ['Indian Springs', 'Forest Ridge', 'Stone Canyon', 'Battle Creek'],
    schools: ['Broken Arrow High School', 'Centennial High School', 'Lynn Lane Elementary', 'Indian Springs Elementary'],
    landmarks: ['Broken Arrow Sports Complex', 'Ray Harral Nature Park', 'BA Rose District'],
    metaDescription: 'Broken Arrow child therapy & behavioral health services. Medicaid/SoonerCare accepted. Serving BA school district families. Call (918) 391-3608 today.',
    faqs: [
      {
        question: 'Is SafeHarbor located within Broken Arrow city limits?',
        answer: 'Yes, our Broken Arrow office is centrally located within the city with easy access from all BA neighborhoods and schools.'
      },
      {
        question: 'Do you accept Medicaid for child therapy in Broken Arrow?',
        answer: 'Yes, we accept Oklahoma Medicaid, SoonerCare, and most major insurance plans for all our mental health services in Broken Arrow.'
      }
    ]
  },
  {
    slug: 'north-tulsa',
    name: 'SafeHarbor Behavioral Health - North Tulsa',
    description: 'Culturally responsive mental health care for North Tulsa families, emphasizing community connections and accessibility.',
    streetAddress: '2345 North Peoria Avenue',
    city: 'Tulsa',
    state: 'OK',
    zipCode: '74106',
    phone: '918-391-3609',
    latitude: '36.1851',
    longitude: '-95.9372',
    neighborhoods: ['Greenwood', 'Pine Street', 'Mohawk Park', 'Owen Park'],
    schools: ['Booker T. Washington High School', 'Carver Middle School', 'Cherokee Elementary'],
    landmarks: ['Greenwood Cultural Center', 'Mohawk Park', 'John Hope Franklin Center'],
    metaDescription: 'North Tulsa child therapy with cultural sensitivity. Medicaid/SoonerCare accepted. Serving Greenwood, Pine Street communities. Call (918) 391-3609.',
    faqs: [
      {
        question: 'Does SafeHarbor provide culturally responsive therapy in North Tulsa?',
        answer: 'Absolutely. Our North Tulsa team understands the unique cultural needs of our community and provides culturally responsive mental health care for children and families.'
      },
      {
        question: 'Do you accept Medicaid for families in North Tulsa?',
        answer: 'Yes, we proudly accept Medicaid and SoonerCare, understanding that accessible mental health care is essential for our North Tulsa community.'
      }
    ]
  },
  {
    slug: 'downtown-tulsa',
    name: 'SafeHarbor Behavioral Health - Downtown Tulsa',
    description: 'Downtown Tulsa behavioral health services for urban families, easily accessible by public transit.',
    streetAddress: '555 South Main Street',
    city: 'Tulsa',
    state: 'OK',
    zipCode: '74103',
    phone: '918-391-3610',
    latitude: '36.1506',
    longitude: '-95.9928',
    neighborhoods: ['Downtown', 'Brady Arts District', 'Pearl District', 'Blue Dome'],
    schools: ['Central High School', 'Roosevelt Elementary', 'Emerson Elementary'],
    landmarks: ['BOK Center', 'Tulsa Performing Arts Center', 'Gathering Place'],
    metaDescription: 'Downtown Tulsa child therapy & teen counseling. Transit accessible, Medicaid accepted. Serving Brady Arts, Pearl District families. Call (918) 391-3610.',
    faqs: [
      {
        question: 'Is your downtown location accessible by public transportation?',
        answer: 'Yes! Our downtown office is easily accessible by Tulsa Transit bus routes, making mental health care convenient for families without vehicles.'
      },
      {
        question: 'Do you offer evening appointments for downtown working families?',
        answer: 'Absolutely. We understand downtown families often have demanding schedules, so we offer flexible scheduling including evening appointments.'
      }
    ]
  },
  {
    slug: 'owasso',
    name: 'SafeHarbor Behavioral Health - Owasso',
    description: 'Family-focused mental health services in Owasso, serving the growing northern Tulsa metro community.',
    streetAddress: '3456 North Main Street',
    city: 'Owasso',
    state: 'OK',
    zipCode: '74055',
    phone: '918-391-3611',
    latitude: '36.2695',
    longitude: '-95.8547',
    neighborhoods: ['Stone Canyon', 'Redbud Valley', 'North Owasso', 'Owasso Heights'],
    schools: ['Owasso High School', 'Owasso Mid-High', 'Stone Canyon Elementary', 'Pamela Hodson Elementary'],
    landmarks: ['Redbud Valley Nature Preserve', 'Owasso Sports Complex', 'Owasso Library'],
    metaDescription: 'Owasso child therapy & family counseling. Medicaid/SoonerCare accepted. Serving Stone Canyon, Redbud Valley families. Call (918) 391-3611.',
    faqs: [
      {
        question: 'How familiar are you with Owasso schools and community?',
        answer: 'Very familiar! Our Owasso therapists live in the community and understand the unique needs of Owasso families and school district.'
      },
      {
        question: 'Do you accept SoonerCare in Owasso?',
        answer: 'Yes, we accept SoonerCare, Medicaid, and most insurance plans for all mental health services at our Owasso location.'
      }
    ]
  },
  {
    slug: 'jenks',
    name: 'SafeHarbor Behavioral Health - Jenks',
    description: 'Supporting Jenks Trojan families with comprehensive behavioral health services for children and teens.',
    streetAddress: '7890 Main Street',
    city: 'Jenks',
    state: 'OK',
    zipCode: '74037',
    phone: '918-391-3612',
    latitude: '36.0222',
    longitude: '-95.9685',
    neighborhoods: ['Downtown Jenks', 'Jenks East', 'River District', 'Jenks West'],
    schools: ['Jenks High School', 'Jenks West Elementary', 'East Elementary', 'Southeast Elementary'],
    landmarks: ['Jenks Riverwalk', 'Oklahoma Aquarium', 'Creek Nation Casino'],
    metaDescription: 'Jenks child therapy & teen mental health services. Medicaid accepted. Supporting Jenks Trojan families. Same-week appointments. Call (918) 391-3612.',
    faqs: [
      {
        question: 'Do you understand the academic pressure in Jenks schools?',
        answer: 'Absolutely. Jenks is known for academic excellence, and we specialize in helping high-achieving students manage pressure while maintaining mental health.'
      },
      {
        question: 'Is Medicaid accepted for therapy in Jenks?',
        answer: 'Yes, we accept Medicaid, SoonerCare, and all major insurance plans for comprehensive mental health services in Jenks.'
      }
    ]
  },
  {
    slug: 'bixby',
    name: 'SafeHarbor Behavioral Health - Bixby',
    description: 'Mental health services for Bixby Spartan families, emphasizing academic support and family wellness.',
    streetAddress: '4567 Memorial Drive',
    city: 'Bixby',
    state: 'OK',
    zipCode: '74008',
    phone: '918-391-3613',
    latitude: '35.9421',
    longitude: '-95.8836',
    neighborhoods: ['Central Bixby', 'Charley Creek', 'Forest Creek', 'Bentley Park'],
    schools: ['Bixby High School', 'Bixby North Elementary', 'Charley Creek Elementary', 'Northeast Elementary'],
    landmarks: ['Bixby Green Corn Festival', 'Charley Young Park', 'Bixby Sports Complex'],
    metaDescription: 'Bixby child therapy & behavioral health. Medicaid/SoonerCare accepted. Supporting Bixby Spartan families & students. Call (918) 391-3613.',
    faqs: [
      {
        question: 'Do you work with Bixby school counselors?',
        answer: 'Yes, with parent permission we collaborate closely with Bixby school counselors to provide comprehensive support for students.'
      },
      {
        question: 'Is SoonerCare accepted in Bixby?',
        answer: 'Absolutely! We accept SoonerCare, Medicaid, and most insurance plans for all our mental health services in Bixby.'
      }
    ]
  },
  {
    slug: 'sand-springs',
    name: 'SafeHarbor Behavioral Health - Sand Springs',
    description: 'Community-centered mental health care for Sand Springs families with a focus on accessibility and support.',
    streetAddress: '6789 Highway 97',
    city: 'Sand Springs',
    state: 'OK',
    zipCode: '74063',
    phone: '918-391-3614',
    latitude: '36.1398',
    longitude: '-96.1089',
    neighborhoods: ['Downtown Sand Springs', 'Westside', 'Angus Valley', 'Prattville'],
    schools: ['Charles Page High School', 'Sand Springs Middle School', 'Angus Valley Elementary', 'Westside Elementary'],
    landmarks: ['Keystone Ancient Forest', 'Sand Springs Museum', 'Case Community Park'],
    metaDescription: 'Sand Springs child therapy & family counseling. Medicaid accepted. Serving Sandite families with compassionate care. Call (918) 391-3614.',
    faqs: [
      {
        question: 'Do you accept Medicaid for Sand Springs families?',
        answer: 'Yes, we proudly accept Medicaid and SoonerCare, ensuring mental health care is accessible to all Sand Springs families.'
      },
      {
        question: 'Are you familiar with Sand Springs community resources?',
        answer: 'Absolutely. We\'re connected with Sand Springs community organizations and can help families access additional local resources.'
      }
    ]
  },
  {
    slug: 'sapulpa',
    name: 'SafeHarbor Behavioral Health - Sapulpa',
    description: 'Serving Sapulpa Chieftain families with culturally aware mental health services and community connections.',
    streetAddress: '8901 Mission Street',
    city: 'Sapulpa',
    state: 'OK',
    zipCode: '74066',
    phone: '918-391-3615',
    latitude: '35.9987',
    longitude: '-96.1142',
    neighborhoods: ['Downtown Sapulpa', 'Northside', 'Liberty', 'Oak Park'],
    schools: ['Sapulpa High School', 'Holmes Park Elementary', 'Freedom Elementary', 'Sapulpa Middle School'],
    landmarks: ['Sapulpa Historical Museum', 'Kelly Lane Park', 'Creek Nation Courthouse'],
    metaDescription: 'Sapulpa child therapy with cultural awareness. Medicaid/SoonerCare accepted. Supporting Chieftain families & students. Call (918) 391-3615.',
    faqs: [
      {
        question: 'Do you provide culturally responsive care in Sapulpa?',
        answer: 'Yes, we understand and respect the diverse cultural background of Sapulpa families and provide culturally responsive mental health care.'
      },
      {
        question: 'Is Medicaid accepted for therapy services in Sapulpa?',
        answer: 'Absolutely. We accept Medicaid, SoonerCare, and most insurance plans for comprehensive mental health services in Sapulpa.'
      }
    ]
  },
  {
    slug: 'brookside',
    name: 'SafeHarbor Behavioral Health - Brookside',
    description: 'Boutique mental health services for Brookside families, blending community charm with professional excellence.',
    streetAddress: '1357 Brookside Drive',
    city: 'Tulsa',
    state: 'OK',
    zipCode: '74114',
    phone: '918-391-3616',
    latitude: '36.1256',
    longitude: '-95.9372',
    neighborhoods: ['Brookside', 'Riverview', 'Southern Plaza', 'Brookside South'],
    schools: ['Edison Preparatory', 'Riverfield Country Day School', 'Brookside Elementary'],
    landmarks: ['Brookside by Day', 'River Parks Trail', 'Southern Plaza'],
    metaDescription: 'Brookside child therapy & family counseling. Medicaid accepted. Serving trendy Brookside families with personalized care. Call (918) 391-3616.',
    faqs: [
      {
        question: 'How do you serve the unique Brookside community?',
        answer: 'We understand Brookside\'s vibrant, close-knit community culture and provide personalized mental health care that fits your family\'s lifestyle.'
      },
      {
        question: 'Do you accept SoonerCare in the Brookside area?',
        answer: 'Yes, we accept SoonerCare, Medicaid, and most insurance plans for all our mental health services in the Brookside area.'
      }
    ]
  },
  {
    slug: 'cherry-street',
    name: 'SafeHarbor Behavioral Health - Cherry Street',
    description: 'Hip, accessible mental health care on Cherry Street, serving midtown\'s most vibrant corridor.',
    streetAddress: '2468 South Peoria Avenue',
    city: 'Tulsa',
    state: 'OK',
    zipCode: '74114',
    phone: '918-391-3617',
    latitude: '36.1256',
    longitude: '-95.9403',
    neighborhoods: ['Cherry Street', 'Kendall-Whittier', 'Owen Park', 'Lewis Place'],
    schools: ['Central High School', 'Roosevelt Elementary', 'Kendall-Whittier Elementary'],
    landmarks: ['Cherry Street Farmers Market', 'Gathering Place', 'Philbrook Museum'],
    metaDescription: 'Cherry Street child therapy & teen counseling. Medicaid/SoonerCare accepted. Hip, accessible mental health care on Tulsa\'s Cherry Street. Call (918) 391-3617.',
    faqs: [
      {
        question: 'How accessible is your Cherry Street location?',
        answer: 'Very accessible! We\'re right on Cherry Street with easy parking and walkable to many local attractions and restaurants.'
      },
      {
        question: 'Do you accept Medicaid on Cherry Street?',
        answer: 'Absolutely! We accept Medicaid, SoonerCare, and most insurance plans for all our mental health services on Cherry Street.'
      }
    ]
  },
  {
    slug: 'east-tulsa',
    name: 'SafeHarbor Behavioral Health - East Tulsa',
    description: 'Comprehensive mental health services for East Tulsa families, emphasizing accessibility and community connection.',
    streetAddress: '3579 East 31st Street',
    city: 'Tulsa',
    state: 'OK',
    zipCode: '74135',
    phone: '918-391-3618',
    latitude: '36.1322',
    longitude: '-95.8836',
    neighborhoods: ['Eastgate', 'Sheridan South', 'Memorial', 'East 31st Corridor'],
    schools: ['Memorial High School', 'Eisenhower Elementary', 'Sheridan Elementary', 'Patrick Henry Elementary'],
    landmarks: ['Woodland Hills Mall', 'LaFortune Park', 'St. Francis Hospital'],
    metaDescription: 'East Tulsa child therapy & behavioral health. Medicaid accepted. Serving Eastgate, Memorial areas. Convenient location near Woodland Hills. Call (918) 391-3618.',
    faqs: [
      {
        question: 'Are you close to Woodland Hills Mall and major East Tulsa locations?',
        answer: 'Yes! Our East Tulsa office is conveniently located near Woodland Hills Mall, major shopping areas, and easily accessible from all East Tulsa neighborhoods.'
      },
      {
        question: 'Do you accept SoonerCare for East Tulsa families?',
        answer: 'Absolutely. We accept SoonerCare, Medicaid, and most insurance plans for comprehensive mental health services in East Tulsa.'
      }
    ]
  },
  {
    slug: 'west-tulsa',
    name: 'SafeHarbor Behavioral Health - West Tulsa',
    description: 'Culturally responsive mental health care for West Tulsa\'s diverse communities, emphasizing family and cultural values.',
    streetAddress: '4680 Southwest Boulevard',
    city: 'Tulsa',
    state: 'OK',
    zipCode: '74107',
    phone: '918-391-3619',
    latitude: '36.1256',
    longitude: '-96.0372',
    neighborhoods: ['Southwest Tulsa', 'Red Fork', 'Carbondale', 'Garden City'],
    schools: ['Webster High School', 'Carbondale Elementary', 'Red Fork Elementary', 'Grissom Elementary'],
    landmarks: ['Zink Park', 'Arkansas River', 'Turkey Mountain'],
    metaDescription: 'West Tulsa child therapy with cultural sensitivity. Medicaid/SoonerCare accepted. Serving Red Fork, Southwest Tulsa communities. Call (918) 391-3619.',
    faqs: [
      {
        question: 'Do you provide bilingual services in West Tulsa?',
        answer: 'Yes, we have bilingual therapists who can provide services in both English and Spanish for our diverse West Tulsa community.'
      },
      {
        question: 'Is Medicaid accepted for West Tulsa families?',
        answer: 'Absolutely! We accept Medicaid, SoonerCare, and understand the importance of accessible mental health care for all West Tulsa families.'
      }
    ]
  },
  {
    slug: 'union-district',
    name: 'SafeHarbor Behavioral Health - Union District',
    description: 'Supporting Union Public Schools families with specialized mental health care and academic support services.',
    streetAddress: '5791 South Yale Avenue',
    city: 'Tulsa',
    state: 'OK',
    zipCode: '74135',
    phone: '918-391-3620',
    latitude: '36.0856',
    longitude: '-95.9372',
    neighborhoods: ['Union District', 'Yale Corridor', 'South Yale', 'Union Schools Area'],
    schools: ['Union High School', 'Union Intermediate', 'Grove Elementary', 'Cedar Ridge Elementary'],
    landmarks: ['Union Public Schools Complex', 'Yale Shopping Centers', 'Southern Hills Country Club'],
    metaDescription: 'Union District child therapy & teen counseling. Medicaid accepted. Supporting Union Schools families with specialized mental health care. Call (918) 391-3620.',
    faqs: [
      {
        question: 'Do you specialize in working with Union Public Schools students?',
        answer: 'Yes! We have extensive experience with Union Public Schools students and can collaborate with school counselors when parents provide authorization.'
      },
      {
        question: 'Do you accept SoonerCare in the Union area?',
        answer: 'Absolutely. We accept SoonerCare, Medicaid, and most insurance plans for all our mental health services in the Union District area.'
      }
    ]
  }
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find(location => location.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return locations.map(location => location.slug);
}