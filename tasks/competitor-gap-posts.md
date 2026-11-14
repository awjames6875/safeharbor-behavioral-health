# Competitor review gaps -> Safe Harbor blog posts (DRAFT, not on the site)

Source: Google Maps reviews read on 2026-10-07 via Playwright, sorted lowest first. Three Tulsa competitors, about 70 distinct 1-3 star reviews each for the two big ones. No competitor is named in the posts and no review is quoted.

## What people complain about (themes, most common first)
| Theme | What reviewers said (paraphrased) | Seen at |
|---|---|---|
| Can't get through / no callbacks | Phones not answered, 20+ minute holds, hung up on, messages never returned, "no one calls you back" | Both big clinics |
| Long waits to start | Weeks to months to get a first appointment, "still haven't started" after intake, over a month to see a prescriber after intake, 3-5 hour waits | Both big clinics, addiction clinic ("two weeks later still can't see my counselor") |
| Intake that goes nowhere | A 2-hour intake, then told the child was too old to qualify. A 3.5-hour intake then 7 hours with nothing done. Appointment cancelled at the door over paperwork | Both big clinics |
| Appointments changed without notice | Rescheduled or cancelled with no warning, no-show fees for visits never confirmed | Both big clinics |
| Handoffs and turnover | Counselor left and client had to start over. Transferred to a third party without being asked. Many case managers | Both big clinics |
| Fees and surprises | $50 just to do intake paperwork, $100 late-cancel fee, prices not disclosed upfront, collections notice | LifeStance |
| Feeling like a number or judged | "Spoken to like a worthless drug addict," "you're a number and a wallet," "they only care about money" | All three |
| Addiction help that wasn't | "Paid $30 for a drug test, was only offered antidepressants and sent elsewhere." Kept on medication for years. Given no second chance after a setback | Big clinic, addiction clinic |
| Income cap | A husband turned away for earning too much | Family & Children's Services |

## What Safe Harbor can honestly say (only what you've told me is true)
- In within 48 hours once intake paperwork is completed. Same-week appointments.
- Medicaid/SoonerCare, Blue Cross Blue Shield, Aetna, United Healthcare. Not just one payer.
- Children, teens, and adults. Substance use recovery is a focus.
- Licensed counselors. One office, one number: (918) 553-5746.

## Please confirm before I publish (I wrote these as optional [CONFIRM] lines)
1. Do you answer the phone with a person during business hours, and do you call back the same day?
2. Do you charge an intake fee, a late-cancel fee or a no-show fee? (If none, we can say so.)
3. Do clients keep the same counselor, and what happens if a counselor leaves?
4. For recovery: what do you do when someone has a setback? What first step do you offer after a call?

---

## Draft 1: How long should it take to get in for counseling in Tulsa?
Slug: `how-fast-can-i-get-counseling-tulsa`

You made the call. Now you wait.

Many families tell us the wait is the hardest part. Weeks go by. Sometimes months. The urge to get help fades, or the problem gets worse.

At Safe Harbor, we work to get you in fast. Once your intake paperwork is done, we can get you in within 48 hours. Most weeks, we also have same-week appointments open.

Here is what to ask any provider before you pick one:
- How long from my first call to my first real appointment?
- Is the intake paperwork online, and how soon after it's done do I start?
- Who answers the phone, and do they call back?
- [CONFIRM] Will I be told if my appointment changes?

We work with children, teens, and adults. We take Medicaid/SoonerCare, Blue Cross Blue Shield, Aetna, and United Healthcare.

Call (918) 553-5746 or visit safeharborbehavioralhealth.com.

## Draft 2: Looking for drug or alcohol help in Tulsa? What to expect when you ask
Slug: `drug-alcohol-help-tulsa-what-to-expect`

Asking for help with drugs or alcohol takes guts. It should not make you feel judged.

Recovery is a main focus at Safe Harbor. You are a person, not a problem. A licensed counselor will listen first.

What you can expect from us:
- A fast start. Once your intake paperwork is done, we can get you in within 48 hours.
- Insurance that is accepted. We take Medicaid/SoonerCare, Blue Cross Blue Shield, Aetna, and United Healthcare.
- Help for the whole family. We work with children, teens, and adults.
- [CONFIRM] A plan if you slip. A setback is part of many recovery stories. We talk about the next step with you.

If you are in crisis right now, call or text 988.

If you are ready to talk, call (918) 553-5746. Visit safeharborbehavioralhealth.com.

## Draft 3: Counseling and insurance in Tulsa: what we take and what to ask any provider
Slug: `counseling-insurance-tulsa-what-to-ask`

Insurance is where a lot of people give up. The phone tree. The hold music. The surprise bill.

Here is what Safe Harbor takes:
- Medicaid/SoonerCare
- Blue Cross Blue Shield
- Aetna
- United Healthcare

Before you book anywhere, ask:
1. Do you take my plan, and can you check it for me today?
2. What will I pay at the first visit?
3. [CONFIRM] Are there fees for intake, late cancels, or no-shows?
4. How long until my first appointment?

Not sure what your plan covers? Call (918) 553-5746 and we will look at it with you. Visit safeharborbehavioralhealth.com.

---

## How I would add them
Add 3 entries to `src/data/blogPosts.ts` using the same fields as the existing posts, each with a unique title (50-60 chars), description (under 155, ends with the phone) and a canonical. Then build, run the local audit, commit on `fix/audit-critical`. Language check: no "therapy" or "therapist" in these drafts, per the project rule.
