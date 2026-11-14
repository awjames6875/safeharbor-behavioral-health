# Blog rewrite proposal (nothing applied yet)

Facts used (from client.json and what you told me): no medication management or psychiatry; services = individual, group, family, crisis, Body & Brain, substance use recovery; insurance = Medicaid/SoonerCare, Blue Cross Blue Shield, Aetna, United Healthcare; same-week appointments, in within 48 hours once intake paperwork is done; licensed counselors. Voice per `seo-engine-icm-starter/_shared/voice.md`: plain words, short sentences, no hype, one call to action (the office phone). `owner-facts.md` is blank, so I added no personal stories. Where voice.md says "therapy/therapist" but the project rule says never use them in parent-facing copy, I followed the project rule (counseling, support sessions, licensed counselor).

## `is-my-childs-behavior-normal` (blogPosts.ts ~114, ~145)
- Heading "Medication Management" + "our psychiatric team can provide medication evaluation..." →
  **"### Medication"** "Safe Harbor does not prescribe medication. If your child's doctor suggests it, counseling can run alongside that care."
- "Our team includes licensed therapists, psychologists, and psychiatrists..." →
  "Our licensed counselors work with children, teens, and adults. We take Medicaid/SoonerCare, Blue Cross Blue Shield, Aetna, and United Healthcare. Call (918) 553-5746."

## `teen-depression-tulsa-guide` (~309, ~414, ~438)
- "### Medication Management / our psychiatric team may recommend medication: Antidepressants... Sleep aids" →
  **"### Medication"** "Medication is a decision for your teen and a doctor. Safe Harbor does not prescribe it. Counseling can support your teen alongside any treatment their doctor recommends." (drops the drug list)
- "- Medication monitoring" → delete the line.
- "our team of experienced therapists and psychiatrists specializes in adolescent mental health" →
  "our licensed counselors work with teens and their families. We can get your teen in within 48 hours once intake paperwork is completed. Call (918) 553-5746."

## `body-brain-helps-adhd` (~624–636, ~638–650)
- "Case Study: Jake's Success Story" (75% attention, 20%→80% homework, soccer team): not a real documented case, invented numbers. **Delete the section.**
- "### Medication Management: Enhance medication effectiveness, allow lower dosages..." is an unsupported clinical claim. **Delete**, replace with: "### Your Child's Doctor — Body & Brain is movement-based support. It does not replace medical care. If your child sees a doctor for ADHD, tell us and we will keep that in mind."

## `school-anxiety-tips` (~1010–1020)
- "### Medication Considerations: SSRIs may be prescribed..." → **Delete** (clinical advice we don't give). One sentence in its place: "Questions about medication belong with your child's doctor."

## `medicaid-mental-health-tulsa` (~2068–2080, ~2128, ~2218–2240)
- "**Psychiatric Services** (evaluation, monitoring, crisis psychiatric)" → delete block.
- "- Monthly medication management appointments" → delete line.
- "Success Stories: Maria's Story, The Johnson Family" (invented families, grade and recovery outcomes) → **delete the whole section** until you have real, consented stories. Your review campaign is the right place to source them.
- Add one honest line where the section was: "Not sure what your plan covers? Call (918) 553-5746 and we will check it with you."

## Suggested but not requested
- "Join hundreds of {city} families who trust Safe Harbor" (`LocationPageTemplate.tsx:243`) is an unproven volume claim. Suggest: "Call (918) 553-5746 to get started."
