# Astro HTML Resume

* [Demo](https://astro-html-resume.pages.dev/)
* [Design inspiration](https://www.youtube.com/watch?v=kCgn-7NBPSs) - from PIRATE KING's (@pirate-kiiiing) excellent video on software engineer resume creation.

**Why** a resume in Astro?

* I have a [personal website](https://github.com/jetboom/personal-site) made in Astro and I want the info to be in sync.
* HTML can be converted to a PDF very easily and ATS doesn't care how the PDF is made.
* I like Markdown.

## Todo

- [ ] Option to convert from **Markdown -> DOCX** instead of printing directly from HTML to PDF. This will vastly improve ATS compatibility.

## Project Structure

Personal info, contacts, and summary is in `src/content/myself/myself.yaml`

All other information being shown on the resume can be changed with yaml/md files under the `src/content/` directory.

Logos for companies and institutions can be placed in the `public/logos/` directory.

Font size, colors, and CSS variables can be changed in `src/styles/global.css`

## How to use as your actual resume

Simply save the page as a PDF file with your browser.
1. Ctrl + P
2. Choose `Save to PDF` or similar option.
3. Scale -> 100%
4. Margins -> None
5. Headers and footers -> No
6. Background graphics -> Yes

> [!CAUTION]
> After testing multiple browsers, Edge has been the one to give the smallest file sizes and prints text rather than an image. Other browsers may result in very large file sizes and ATS-unfriendly formats.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## FAQ and Tips

### It looks weird when I try to print to PDF

Try another browser.

### Can I pick a paper size besides letter?

You *technically* can but letter size (8.5in x 11in) is highly suggested.

### Isn't it better to just submit a word document for a resume?

Not everyone has a way to open a DOCX but everyone has a browser that can open a PDF. Some companies only accept PDF resumes for this reason. ATS can still get caught up on plain DOCX resumes.

You should submit your resume to multiple ATS testing sites to get a general idea of how well your resume will be parsed.

### Order?

The order of a tech resume should be sorted from the most relevant, impressive info to the least relevant, superfluous info.

1. Name, contacts, websites.
2. Optional: a summary. Depends son the industry or position you're going for. A professional summary may be superfluouos for a software engineer, wasting precious space and recruiter attention span.
3. Skills. This is a *short-list* of skills and is to catch the attention of only *human* eyes. AI resume parsers are supposedly smart enough to not care about keyword dumping and prefer to see skills in your experience bullet points. Keep it 2-4 lines. If anything should be tailored per job application, it's this section.
4. Experience. This is generally the most important section. If you have no experience (you're out of school) then education goes here instead. Part time work that isn't relevant to your field should be excluded or placed further down. Use the STAR method. Bold keywords such as languages, packages, and technology used.
5. Education. GPA is only important if it's above a 3.4 and you don't have a lot of experience. Honors should be included. Significant projects, awards, etc. should be included.
6. Projects. Pick 2-4 of your open source projects. Include links to their repositories. Include links to a live demo! Mention the technology used. Do not include student projects or things like to-do lists and other tutorial apps.
7. References. 3 minimum but can be more depending on your seniority.

### Single column or double?

If there's anything people agree on concerning the esoteric nature of ATS, it's that it doesn't like double-column resumes.

### Experience?

It's said that, on average, **recruiters spend 7 seconds reading your resume**. You want to wow them immediately.
If a recruiter isn't interested in you by the **2nd bullet point** of the your latest experience then assume they've **stopped reading your resume**.

* Start bullet points with powerful words or phrases. Led, created, designed, enriched, automated, implemented, took ownership of, spearheaded, integrated, etc.
* Use the STAR method. Showcase things in the past you've done that positively impacted your company or project. Then say exactly how much it impacted. If you don't know exact numbers then use your best guess.
* Not all bullets have to be a measured result but most of them should be.
* Mention and put in **bold** what technology was used to do something. Human recruiters will scan for these. Resume reading AI is going to prioritize tech inside of sentences and ATS will measure not only *if* but *how many times* a technology is mentioned.
* Keep it relevant to what **you** did for **the company/team**. Don't write that you were part of a team that did X unless you say that you led that team. Otherwise just write that you did it. The implication that you were part of a team does not need to be said. Omitting it will look more impressive on paper.
* Perform the "So What?" test. Read back a bullet point on your resume and ask yourself would someone immediately think "So what?". Keep it impressive!
* If you're a senior engineer, prioritize your latest 3 experiences. Any positions after that only need 1-2 bullet points. A brief overview, your most significant contribution, and what major tech you used.
* 2 lines maximum per bullet point. Less is usually more.
* Shrink bullet points to 1 line *only if* you aren't sacrificing information. It's usually better to expand 1.5 lines to 2 full lines than shrinking the information to 1 line.
* Make your accomplishments seem bigger than they are but don't lie. People appreciate modesty but it won't get you hired.

Read more about measured results [here](https://cultivatedculture.com/resume-metrics).

### Skill ratings?

* This is selling yourself short and a waste of space that could be used to name off more skills.
* ATS doesn't know how to read bar graphics or understand skill ratings.
* Ask yourself why someone would hire someone "intermediate" in a skill over someone that doesn't put a rating.
* There are different interpretations of what "beginner", "intermediate", and "expert" are.

### Selfie?

This is inviting discrimination. Note that this is different in the EU where it's seen as customary to include your picture.

### Should I include my phone country code?

Only if you're applying to positions outside your country. Same goes for countries being included in the location field of previous positions. Do you have a work visa for other countries? If not then you will never need to clarify what country code to use.

### How long should the resume be?

One page is ideal. Two pages is acceptable if you are a senior developer. Three or more is only for academics, directors, and people with decades of experience.

I personally saw the greatest number of callbacks and success with a single page resume, even as a senior developer.
