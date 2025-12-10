// SafeHarbor Voice Agent Knowledge Base
// This file contains all the context the AI assistant needs to help users

export const SAFEHARBOR_KNOWLEDGE = {
    companyInfo: {
        name: "SafeHarbor Behavioral Health",
        phone: "(918) 391-3606",
        email: "info@safeharborbh.com",
        address: "1234 Main Street, Tulsa, OK 74103",
        hours: {
            weekdays: "Monday - Friday: 8:00 AM - 6:00 PM",
            saturday: "Saturday: 9:00 AM - 2:00 PM",
            sunday: "Sunday: Closed"
        },
        insurance: [
            "Medicaid",
            "SoonerCare",
            "Most major insurance plans",
            "Sliding scale fees available for those who need financial assistance"
        ],
        specializations: [
            "Children ages 5-12",
            "Teenagers ages 13-18",
            "Families",
            "Trauma-informed care"
        ]
    },

    services: [
        {
            name: "Individual Child Therapy",
            description: "Specialized therapy for children ages 5-12 using play therapy, art therapy, and age-appropriate interventions.",
            conditions: ["Anxiety", "ADHD", "Behavioral issues", "Depression", "Trauma", "Autism spectrum disorders"]
        },
        {
            name: "Teen Counseling",
            description: "Counseling for teenagers dealing with depression, anxiety, peer pressure, academic stress, and identity issues.",
            conditions: ["Depression", "Anxiety", "Self-harm", "Substance abuse", "Eating disorders", "Academic pressure", "Peer relationships"]
        },
        {
            name: "Family Therapy",
            description: "Family counseling to improve communication, resolve conflicts, and strengthen relationships.",
            conditions: ["Communication problems", "Divorce/separation effects", "Blended family challenges", "Parent-teen conflicts", "Sibling rivalry"]
        },
        {
            name: "Crisis Intervention",
            description: "24/7 crisis support for mental health emergencies, suicidal thoughts, and immediate safety concerns.",
            available: "24/7"
        },
        {
            name: "Medication Management",
            description: "Comprehensive medication evaluation and management by board-certified psychiatrists.",
            conditions: ["ADHD", "Anxiety", "Depression", "Bipolar disorder"]
        },
        {
            name: "Group Therapy",
            description: "Therapeutic group sessions providing peer support and social skills development.",
            groupTypes: ["Anxiety groups", "Depression support", "Social skills", "ADHD support", "Trauma recovery", "Teen support"]
        },
        {
            name: "Behavioral Assessments",
            description: "Thorough psychological and behavioral evaluations for ADHD, autism, learning disabilities.",
            assessmentTypes: ["ADHD testing", "Autism evaluations", "Learning disabilities", "Developmental delays"]
        },
        {
            name: "Trauma Treatment",
            description: "Specialized trauma-informed therapy using evidence-based treatments like Trauma-Focused CBT and EMDR.",
            traumaTypes: ["Physical abuse", "Sexual abuse", "Neglect", "Domestic violence", "Accidents", "Medical trauma"]
        },
        {
            name: "School Support",
            description: "Collaboration with schools including IEP/504 plan assistance and behavioral interventions.",
            schools: ["Tulsa Public Schools", "Union", "Jenks", "Broken Arrow", "Bixby", "Owasso"]
        },
        {
            name: "Parent Coaching",
            description: "Specialized coaching to help parents develop effective strategies for managing child behavior.",
            topics: ["Behavioral problems", "Tantrums", "Defiance", "ADHD management", "Anxiety in children"]
        }
    ],

    bodyBrainProgram: {
        name: "Body & Brain Program",
        tagline: "Where Movement Meets Mental Health",
        description: "Revolutionary therapy that harnesses the power of physical movement to heal the mind, build confidence, and transform lives for children and teens ages 5-18.",
        ageRange: "5-18 years old",
        components: [
            "Yoga & Mindfulness - Body awareness, emotional regulation, stress management",
            "Dance/Movement Therapy - Emotional expression, creativity, self-discovery",
            "Martial Arts for Focus - Discipline, concentration, self-control",
            "Team Sports for Social Skills - Cooperation, communication, friendship",
            "Adventure Therapy - Challenge comfort zones, build resilience",
            "Sensory Integration Activities - Body awareness, coordination"
        ],
        benefitsFor: [
            "ADHD - Improves focus, reduces hyperactivity",
            "Anxiety & Depression - Reduces symptoms through endorphin release",
            "Trauma Recovery - Safe, empowering movement for healing",
            "Autism Spectrum - Sensory integration, social skills",
            "Behavioral Challenges - Positive outlet, impulse control",
            "Low Self-Esteem - Builds confidence through achievement"
        ],
        schedule: {
            monday: "Mindful Movement (Yoga, Tai Chi, Meditation) - 3:30-5:00 PM",
            tuesday: "Team Building Sports - 3:30-5:00 PM",
            wednesday: "Yoga & Breathwork - 3:30-5:00 PM",
            thursday: "Adventure Activities - 3:30-5:00 PM",
            friday: "Creative Movement (Dance) - 3:30-5:00 PM"
        },
        duration: "8-12 week cycles",
        results: {
            anxietyReduction: "89% reduction in anxiety symptoms after 8 weeks",
            emotionalRegulation: "76% improvement in emotional regulation skills",
            confidence: "92% increase in self-reported confidence levels"
        }
    },

    crisisResources: {
        emergencyLine: "988 (Suicide & Crisis Lifeline - Call or Text 24/7)",
        safeharborCrisis: "(918) 391-3606 (SafeHarbor 24/7 crisis support)",
        whenToCall: [
            "Suicidal thoughts or self-harm",
            "Severe panic attacks",
            "Psychotic episodes",
            "Immediate danger due to mental health symptoms"
        ]
    },

    bookingInfo: {
        phone: "(918) 391-3606",
        contactPage: "/contact",
        medicaidNote: "We offer same-week appointments for most Medicaid and SoonerCare patients. For urgent situations, we can often schedule within 24-48 hours.",
        process: [
            "1. Call us at (918) 391-3606 or fill out the contact form",
            "2. We'll verify your insurance benefits",
            "3. Schedule an initial assessment",
            "4. Begin your personalized treatment plan"
        ]
    },

    locations: [
        "Downtown Tulsa", "Midtown Tulsa", "South Tulsa", "North Tulsa", "East Tulsa",
        "West Tulsa", "Brookside", "Cherry Street", "Utica Square", "Riverside",
        "Owen Park", "Kendall-Whittier", "Pearl District", "Blue Dome", "Brady Arts District"
    ]
};

export const SYSTEM_PROMPT = `You are a warm, compassionate AI counselor for SafeHarbor Behavioral Health. Your role is to provide supportive, therapeutic conversations while helping people learn about our services and book appointments.

YOUR THERAPEUTIC APPROACH:
1. **Active Listening**: Reflect back what people share to show you understand. ("It sounds like you're feeling overwhelmed...")
2. **Validation**: Acknowledge their feelings without judgment. ("That's completely understandable. Many people feel that way.")
3. **Empathy First**: Always respond to emotions before providing information.
4. **Gentle Questions**: Ask open-ended questions to help them explore their feelings. ("Can you tell me more about what's been on your mind?")
5. **Coping Strategies**: Offer grounding techniques when appropriate:
   - Deep breathing: "Try breathing in for 4 counts, hold for 4, out for 4"
   - 5-4-3-2-1 grounding: Name 5 things you see, 4 you hear, 3 you can touch, 2 you smell, 1 you taste
   - Mindful pause: "Take a moment to notice how your body feels right now"

WHEN SOMEONE IS STRUGGLING:
- Create a safe, non-judgmental space
- Validate their courage in reaching out
- Ask how they're coping and what support they have
- Gently explore what might help them feel better
- Suggest professional support when appropriate

CRISIS RESPONSE (IMMEDIATE):
If someone mentions suicide, self-harm, or immediate danger:
- Express care: "I'm really glad you told me this. Your safety matters."
- Provide resources: "Please call 988 (Suicide & Crisis Lifeline) or text HOME to 741741"
- Offer SafeHarbor's crisis line: (918) 391-3606 (24/7)
- Stay present: "I'm here with you. Are you safe right now?"

BOOKING & SERVICES:
- After emotional support, gently ask if they'd like to connect with a professional
- Phone: (918) 391-3606 | Contact page: /contact
- Medicaid/SoonerCare accepted | Same-week appointments often available
- Body & Brain movement therapy program for ages 5-18

IMPORTANT BOUNDARIES:
- You provide supportive listening, NOT clinical therapy or diagnosis
- Encourage professional help for ongoing concerns
- You cannot prescribe, diagnose, or replace licensed therapists
- Always prioritize safety

Respond with warmth and genuine care. Keep responses conversational - 2-4 sentences for casual questions, longer for emotional support. Use their name if they share it.`;

export const GREETING_MESSAGE = "Hi! I'm SafeHarbor's AI assistant. I'm here to help you learn about our mental health services, the Body & Brain program, or help you book an appointment. How can I support you today?";
