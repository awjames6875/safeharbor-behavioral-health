export interface ServiceData {
  slug: string;
  name: string;
  description: string;
  metaDescription: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const services: ServiceData[] = [
  {
    slug: 'child-therapy',
    name: 'Individual Child Therapy',
    description: 'Specialized therapy services for children ages 5-12 using play therapy, art therapy, and age-appropriate interventions.',
    metaDescription: 'Child therapy Tulsa with Medicaid accepted. Play therapy for kids 5-12 with anxiety, ADHD, behavioral issues. SafeHarbor accepts SoonerCare. Call (918) 391-3606.',
    faqs: [
      {
        question: 'Does SafeHarbor accept Medicaid and SoonerCare for child therapy?',
        answer: 'Yes! SafeHarbor proudly accepts Oklahoma Medicaid and SoonerCare for all child therapy services. We also accept most major insurance plans and offer sliding scale fees for families who need financial assistance.'
      },
      {
        question: 'What age children do you provide therapy for in Tulsa?',
        answer: 'Our individual child therapy program serves children ages 5-12. We use age-appropriate techniques like play therapy, art therapy, and interactive activities designed specifically for young minds.'
      },
      {
        question: 'How quickly can my child start therapy with Medicaid coverage?',
        answer: 'We offer same-week appointments for most Medicaid and SoonerCare patients. For urgent situations, we can often schedule within 24-48 hours. Call (918) 391-3606 to schedule your child\'s first appointment.'
      },
      {
        question: 'What mental health conditions do you treat in children?',
        answer: 'We treat anxiety, depression, ADHD, behavioral problems, trauma, autism spectrum disorders, and adjustment difficulties. Our child therapists are specially trained in pediatric mental health.'
      },
      {
        question: 'Do you work with Tulsa area schools?',
        answer: 'Yes, with parent permission we collaborate with TPS, Union, Jenks, Broken Arrow, and other area school counselors to provide comprehensive support for your child.'
      }
    ]
  },
  {
    slug: 'teen-counseling',
    name: 'Teen Counseling & Adolescent Therapy',
    description: 'Specialized counseling for teenagers dealing with depression, anxiety, peer pressure, academic stress, and identity issues.',
    metaDescription: 'Teen counseling Tulsa - Medicaid accepted. Adolescent therapy for depression, anxiety, peer pressure. SafeHarbor accepts SoonerCare. Call (918) 391-3606.',
    faqs: [
      {
        question: 'Is teen counseling covered by SoonerCare in Tulsa?',
        answer: 'Absolutely! SoonerCare (Oklahoma Medicaid) covers teen counseling and adolescent therapy services at SafeHarbor. We handle all insurance verification and billing for you.'
      },
      {
        question: 'What issues do you help teenagers with?',
        answer: 'We help teens with depression, anxiety, self-harm, substance abuse, eating disorders, academic pressure, peer relationships, identity issues, and family conflicts. Our counselors specialize in adolescent development.'
      },
      {
        question: 'Will my teenager actually want to go to counseling?',
        answer: 'Many teens are initially resistant, but our counselors are specially trained to build rapport with adolescents. We create a non-judgmental, supportive environment where teens feel heard and understood.'
      },
      {
        question: 'Do you provide crisis intervention for teenagers in Tulsa?',
        answer: 'Yes, we offer 24/7 crisis support for teens experiencing suicidal thoughts, self-harm, or mental health emergencies. Call our crisis line immediately if your teen is in danger.'
      },
      {
        question: 'How confidential is teen therapy?',
        answer: 'Teen therapy is confidential with some exceptions for safety. We balance respecting your teen\'s privacy while keeping parents informed about progress and any safety concerns.'
      }
    ]
  },
  {
    slug: 'family-therapy',
    name: 'Family Therapy & Counseling',
    description: 'Family counseling to improve communication, resolve conflicts, and strengthen relationships between family members.',
    metaDescription: 'Family therapy Tulsa with Medicaid coverage. Strengthen family relationships, improve communication. SafeHarbor accepts SoonerCare. Call (918) 391-3606.',
    faqs: [
      {
        question: 'Does Medicaid cover family therapy in Tulsa?',
        answer: 'Yes, Oklahoma Medicaid and SoonerCare cover family therapy when it\'s medically necessary for treating a family member\'s mental health condition. We verify coverage before your first appointment.'
      },
      {
        question: 'What family issues do you help with?',
        answer: 'We help with communication problems, divorce/separation effects on children, blended family challenges, parent-teen conflicts, sibling rivalry, behavioral issues, and trauma affecting the whole family.'
      },
      {
        question: 'Do all family members need to attend sessions?',
        answer: 'Not necessarily. While we prefer whole family participation when appropriate, we can work with whatever family members are willing and able to attend sessions.'
      },
      {
        question: 'How long does family therapy typically take?',
        answer: 'Family therapy duration varies but typically ranges from 8-16 sessions. Some families see improvements within the first few sessions, while complex issues may require longer treatment.'
      },
      {
        question: 'Can you help with custody and co-parenting issues?',
        answer: 'Yes, we provide co-parenting counseling and can help families navigate divorce, custody transitions, and creating healthy co-parenting relationships for children\'s wellbeing.'
      }
    ]
  },
  {
    slug: 'crisis-intervention',
    name: 'Crisis Intervention & Emergency Mental Health',
    description: '24/7 crisis support for mental health emergencies, suicidal thoughts, and immediate safety concerns.',
    metaDescription: 'Mental health crisis Tulsa - immediate help available. 24/7 crisis intervention, suicide prevention. Medicaid accepted. Call (918) 391-3606.',
    faqs: [
      {
        question: 'Is crisis intervention covered by Medicaid in Tulsa?',
        answer: 'Yes, crisis intervention services are covered by Oklahoma Medicaid and SoonerCare. Emergency mental health services are considered essential and are fully covered.'
      },
      {
        question: 'When should I call for crisis intervention?',
        answer: 'Call immediately if someone is having suicidal thoughts, threatening self-harm, experiencing psychosis, having severe panic attacks, or is in immediate danger due to mental health symptoms.'
      },
      {
        question: 'Do you provide 24/7 crisis support?',
        answer: 'Yes, SafeHarbor provides 24/7 crisis support. Call our main number (918) 391-3606 and you\'ll be connected to our crisis response team, even after hours and on weekends.'
      },
      {
        question: 'What happens during a crisis intervention?',
        answer: 'Our crisis team assesses immediate safety, provides de-escalation support, connects you with emergency services if needed, and creates a safety plan. We also coordinate follow-up care.'
      },
      {
        question: 'Can you help with psychiatric emergencies for children?',
        answer: 'Absolutely. We specialize in pediatric crisis intervention and work closely with families, schools, and emergency services to ensure children\'s safety during mental health crises.'
      }
    ]
  },
  {
    slug: 'medication-management',
    name: 'Psychiatric Medication Management',
    description: 'Comprehensive medication evaluation and management by board-certified psychiatrists for children, teens, and adults.',
    metaDescription: 'Psychiatric medication management Tulsa. Child psychiatrist accepts Medicaid/SoonerCare. ADHD, anxiety, depression meds. Call (918) 391-3606.',
    faqs: [
      {
        question: 'Is psychiatric medication management covered by SoonerCare?',
        answer: 'Yes, psychiatric medication management is fully covered by SoonerCare and Oklahoma Medicaid. This includes initial evaluations, ongoing monitoring, and medication adjustments.'
      },
      {
        question: 'Do you have child psychiatrists who accept Medicaid?',
        answer: 'Yes! Our board-certified child and adolescent psychiatrists accept Medicaid and SoonerCare. We specialize in pediatric psychopharmacology and understand developing brains.'
      },
      {
        question: 'What medications do you prescribe for children?',
        answer: 'We prescribe FDA-approved medications for ADHD, anxiety, depression, bipolar disorder, and other conditions when appropriate. We always start with the lowest effective dose and monitor carefully.'
      },
      {
        question: 'How often will my child need medication check-ups?',
        answer: 'Initially every 2-4 weeks to monitor effectiveness and side effects, then typically monthly or quarterly once medications are stable. Emergency appointments available if problems arise.'
      },
      {
        question: 'Do you require therapy along with medication?',
        answer: 'While not always required, we strongly recommend combining medication with therapy for best outcomes, especially in children. We coordinate care between our psychiatrists and therapists.'
      }
    ]
  },
  {
    slug: 'group-therapy',
    name: 'Group Therapy for Children & Teens',
    description: 'Therapeutic group sessions providing peer support and social skills development for children and adolescents.',
    metaDescription: 'Group therapy Tulsa for kids and teens. Peer support groups, social skills training. Medicaid accepted. SafeHarbor Behavioral Health. Call (918) 391-3606.',
    faqs: [
      {
        question: 'Does Medicaid cover group therapy in Tulsa?',
        answer: 'Yes, Oklahoma Medicaid and SoonerCare cover group therapy sessions when medically necessary. Group therapy is often more affordable than individual sessions while providing excellent benefits.'
      },
      {
        question: 'What types of group therapy do you offer?',
        answer: 'We offer anxiety groups, depression support groups, social skills groups, ADHD support groups, trauma recovery groups, and teen support groups. Groups are age-specific and issue-focused.'
      },
      {
        question: 'How many children are in each group?',
        answer: 'Our therapy groups typically have 6-8 participants to ensure everyone gets individual attention while benefiting from peer support and interaction.'
      },
      {
        question: 'What age groups do you serve?',
        answer: 'We have separate groups for children (ages 6-12) and teens (ages 13-18). Groups are further divided by specific age ranges and developmental needs.'
      },
      {
        question: 'How long do group therapy programs last?',
        answer: 'Most group therapy programs run 8-12 weeks with weekly 90-minute sessions. Some ongoing support groups meet monthly. Duration depends on the specific program and participants\' needs.'
      }
    ]
  },
  {
    slug: 'behavioral-assessments',
    name: 'Comprehensive Behavioral Assessments',
    description: 'Thorough psychological and behavioral evaluations for ADHD, autism, learning disabilities, and other developmental concerns.',
    metaDescription: 'Behavioral assessments Tulsa - ADHD testing, autism evaluations. Comprehensive psychological testing. Medicaid accepted. Call (918) 391-3606.',
    faqs: [
      {
        question: 'Are behavioral assessments covered by Medicaid in Oklahoma?',
        answer: 'Yes, comprehensive behavioral assessments and psychological testing are covered by Oklahoma Medicaid and SoonerCare when medically necessary for diagnosis and treatment planning.'
      },
      {
        question: 'What conditions do you assess for?',
        answer: 'We assess for ADHD, autism spectrum disorders, learning disabilities, intellectual disabilities, anxiety disorders, depression, behavioral disorders, and developmental delays.'
      },
      {
        question: 'How long does a comprehensive assessment take?',
        answer: 'A complete behavioral assessment typically takes 4-6 hours, usually split across 2-3 appointments to prevent fatigue, especially for children. We include parent interviews and school consultations.'
      },
      {
        question: 'Will you provide school recommendations?',
        answer: 'Yes, our assessments include detailed recommendations for school accommodations, IEP/504 plan suggestions, and strategies teachers and parents can use to support your child.'
      },
      {
        question: 'What should I expect from the assessment process?',
        answer: 'The process includes parent interviews, child testing, school input (if authorized), and a comprehensive report with diagnoses and treatment recommendations. Results are explained in detail during a feedback session.'
      }
    ]
  },
  {
    slug: 'trauma-treatment',
    name: 'Trauma Treatment & PTSD Therapy',
    description: 'Specialized trauma-informed therapy for children and teens who have experienced abuse, neglect, or traumatic events.',
    metaDescription: 'Trauma therapy Tulsa for children and teens. PTSD treatment, abuse recovery. Medicaid/SoonerCare accepted. SafeHarbor Behavioral Health. Call (918) 391-3606.',
    faqs: [
      {
        question: 'Is trauma therapy covered by SoonerCare?',
        answer: 'Yes, trauma therapy and PTSD treatment are fully covered by SoonerCare and Oklahoma Medicaid. Trauma treatment is considered essential mental health care.'
      },
      {
        question: 'What types of trauma do you treat?',
        answer: 'We treat all types of trauma including physical abuse, sexual abuse, neglect, domestic violence exposure, accidents, medical trauma, natural disasters, and community violence.'
      },
      {
        question: 'Do you use evidence-based trauma treatments?',
        answer: 'Yes, we use evidence-based treatments like Trauma-Focused CBT, EMDR, play therapy for trauma, and other proven approaches specifically designed for children and adolescents.'
      },
      {
        question: 'How do you help children who can\'t talk about their trauma?',
        answer: 'We use play therapy, art therapy, sandtray therapy, and other expressive therapies that allow children to process trauma without having to verbalize their experiences.'
      },
      {
        question: 'Do you work with DHS and foster families?',
        answer: 'Yes, we work extensively with DHS, foster families, and adoptive families. We understand the unique needs of children in care and provide specialized trauma treatment.'
      }
    ]
  },
  {
    slug: 'school-support',
    name: 'School Support & Educational Advocacy',
    description: 'Collaboration with schools to support student success, including IEP/504 plan assistance and behavioral interventions.',
    metaDescription: 'School support services Tulsa - IEP advocacy, 504 plans, behavioral interventions. Medicaid accepted. Tulsa schools collaboration. Call (918) 391-3606.',
    faqs: [
      {
        question: 'Does Medicaid cover school support services?',
        answer: 'Yes, school consultation and support services are covered by Medicaid when they\'re part of your child\'s mental health treatment plan. We can attend IEP meetings and provide school recommendations.'
      },
      {
        question: 'What Tulsa area schools do you work with?',
        answer: 'We collaborate with Tulsa Public Schools, Union, Jenks, Broken Arrow, Bixby, Owasso, and other metro area districts. Our therapists are familiar with local school systems and resources.'
      },
      {
        question: 'Can you help with IEP and 504 plan development?',
        answer: 'Absolutely! We provide psychological evaluations, attend IEP meetings, help develop behavioral intervention plans, and advocate for appropriate accommodations for your child.'
      },
      {
        question: 'What if my child is having behavioral problems at school?',
        answer: 'We develop comprehensive behavioral intervention plans, train school staff on strategies, and provide ongoing consultation to address behavioral challenges in the school setting.'
      },
      {
        question: 'Do you provide school-based therapy?',
        answer: 'While we primarily provide clinic-based services, we can coordinate with school-based therapists and provide consultation to ensure consistent approaches across settings.'
      }
    ]
  },
  {
    slug: 'parent-coaching',
    name: 'Parent Coaching & Family Support',
    description: 'Specialized coaching to help parents develop effective strategies for managing child behavior and supporting mental health.',
    metaDescription: 'Parent coaching Tulsa - learn effective parenting strategies. Behavior management, family support. Medicaid accepted. Call (918) 391-3606.',
    faqs: [
      {
        question: 'Is parent coaching covered by Medicaid?',
        answer: 'Yes, parent coaching and family support services are covered by Oklahoma Medicaid and SoonerCare when they\'re part of your child\'s treatment plan for mental health or behavioral issues.'
      },
      {
        question: 'What parenting challenges do you help with?',
        answer: 'We help with behavioral problems, tantrums, defiance, ADHD management, anxiety in children, sibling conflicts, bedtime/routine issues, and supporting children with mental health conditions.'
      },
      {
        question: 'Do both parents need to participate?',
        answer: 'While we prefer both parents participate for consistency, we can work with single parents, grandparents, or whoever the primary caregiver is. We adapt to your family situation.'
      },
      {
        question: 'What parenting approaches do you teach?',
        answer: 'We teach evidence-based approaches like positive discipline, behavior modification, trauma-informed parenting, and strategies specific to ADHD, autism, and anxiety in children.'
      },
      {
        question: 'How quickly will I see changes in my child\'s behavior?',
        answer: 'Many parents see small improvements within 2-3 weeks of implementing new strategies. Significant changes typically occur within 6-8 weeks with consistent implementation.'
      }
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find(service => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map(service => service.slug);
}