# Astro HTML Resume

* [Demo](https://astro-html-resume.pages.dev/)

**Why** a resume in Astro? Two reasons:
1. I wanted a resume that stands out while still being substance over style and being properly read by ATS. HTML (converted to a pdf later) fits this and Astro allows fast iteration.
2. I wanted the info on my [personal website](https://average.website), also made in Astro, to be in sync with my resume. Having all the information in yaml is a bonus.

## Project Structure

Personal info, contacts, and summary is in `src/content/myself/myself.yaml`

All other information being shown on the resume can be changed with yaml files under the `src/content/` directory.

Logos for companies and institutions can be placed in the `public/logos/` directory.

Styles and colors can be changed in `src/styles/global.css`

## How to use as your actual resume

Simply save the page as a PDF file with your browser.
1. Ctrl + P
2. Choose `Save to PDF` or similar option.
3. Scale -> 100%
4. Margins -> None
5. Headers and footers -> No
6. Background graphics -> Yes

You may need to use a different browser (like Edge) if it looks weird.

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

## FAQ

### It looks weird when I try to print to PDF

Try another browser. Firefox adds huge spaces sometimes but Edge doesn't have this issue.

### Can I pick a paper size besides letter?

You *technically* can and it might look better with more width. If you think you're going to an in-person interview it might be better to keep it standard letter so you can actually print it on physical paper.

### Isn't it better to just submit a word document for a resume?

* Not everyone has a way to open a word document but everyone has a browser that can open a pdf. Some companies only accept pdf resumes for this reason.
* ATS can still get caught up on plain docx resumes.
* ATS isn't there to just throw resumes in the bin it can't perfectly parse. A human still goes through it and pushes Yes or No.
* Recruiters, HR, and hiring managers see hundreds of boring black and white resumes a day. Think about standing out in any way possible to get to the interview step.

## Tips

### Order

The order of a tech resume should be sorted from the most relevant, impressive info to the least relevant, superfluous info.

1. Name, contacts, and summary.
2. Industry experience. This is the most relevant information next to skills. If you have no experience (you're out of school) then education goes here instead. Part time work that isn't relevant to your field should be excluded or placed further down.
3. Skills.
4. Open source projects.
5. Education.
6. References.

If you don't have any information to put in a section then just exclude it.

### Single or double column?

Most people will tell you that having a single column resume is required to get through ATS. I don't know if this is true so I've included an option to enable it or not.

Historically I've submitted double column resumes that fit on a single page and was still getting swarmed by recruiters and callbacks.

### Bullet points for experience

These are for including measurable results.

Showcase things in the past you've done that positively impacted your company or project. Then say exactly how much it impacted.
If you don't know exactly how much then use your best guess.

Don't write huge paragraphs! Be short and sweet; less is more. The `description` key of experience content is there for a very brief, one line explanation of what the company did at a high level.

If a recruiter's interest isn't piqued by the **2nd bullet point** of the your latest experience then assume they've **stopped reading your resume**.

Read more [here](https://cultivatedculture.com/resume-metrics).

### No skill ratings

Many resume templates have an option to rate your proficiency with a skill via bar charts. This is selling yourself short and a waste of space that could be used to name off more skills.
Ask yourself why someone would hire someone "intermediate" with a skill over someone that doesn't put a rating.
There are different interpretations of what "beginner", "intermediate", and "expert" are.

Don't sell yourself short. Don't include it.

### No picture of yourself

This is inviting discrimination. Note that this is different in the EU where it's seen as customary to include your picture.

### No dates for education

This is inviting age discrimination.
