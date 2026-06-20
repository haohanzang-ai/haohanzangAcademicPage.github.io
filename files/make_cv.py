from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable

BLUE  = colors.HexColor('#2563EB')
DARK  = colors.HexColor('#111827')
GRAY  = colors.HexColor('#4B5563')
LGRAY = colors.HexColor('#D1D5DB')

NAME    = ParagraphStyle('name',    fontName='Helvetica-Bold', fontSize=22, leading=28, textColor=DARK, alignment=1, spaceAfter=0, spaceBefore=0)
CONTACT = ParagraphStyle('contact', fontName='Helvetica',      fontSize=9,  leading=13, textColor=GRAY, alignment=1, spaceAfter=0, spaceBefore=0)
SECTION = ParagraphStyle('section', fontName='Helvetica-Bold', fontSize=9,  leading=12, textColor=DARK, spaceBefore=6, spaceAfter=2)
ENTRY_T = ParagraphStyle('entry_t', fontName='Helvetica-Bold', fontSize=9.5,leading=13, textColor=DARK, spaceBefore=0, spaceAfter=0)
META_S  = ParagraphStyle('meta_s',  fontName='Helvetica-Oblique', fontSize=9, leading=12, textColor=GRAY, spaceBefore=0, spaceAfter=0)
BODY_S  = ParagraphStyle('body_s',  fontName='Helvetica',     fontSize=9,  leading=13, textColor=GRAY, spaceBefore=0, spaceAfter=0)
BUL_S   = ParagraphStyle('bul_s',   fontName='Helvetica',     fontSize=9,  leading=13, textColor=GRAY, leftIndent=10, spaceBefore=0, spaceAfter=0)

def sp(h=4):  return Spacer(1, h)
def hr():     return HRFlowable(width='100%', thickness=0.5, color=LGRAY, spaceAfter=3, spaceBefore=1)
def bluehr(): return HRFlowable(width='100%', thickness=1.2, color=BLUE,  spaceAfter=4, spaceBefore=2)
def sec(t):   return [sp(5), Paragraph(t.upper(), SECTION), hr()]
def bul(t):   return Paragraph('- ' + t, BUL_S)
def entry(title, meta, body=None):
    rows = [Paragraph(title, ENTRY_T), Paragraph(meta, META_S)]
    if body: rows.append(Paragraph(body, BODY_S))
    rows.append(sp(3))
    return rows

out = 'C:/Users/lingw/Desktop/WEBS/files/cv.pdf'
doc = SimpleDocTemplate(out, pagesize=letter,
      leftMargin=0.75*inch, rightMargin=0.75*inch,
      topMargin=0.65*inch,  bottomMargin=0.65*inch)

s = []

# Header
s += [
    Paragraph('Haohan Zang', NAME),
    sp(3),
    Paragraph('Cedar Park, TX  |  (737) 202-5004  |  haohanzang@gmail.com  |  linkedin.com/in/haohan-zang-594725321', CONTACT),
    sp(5), bluehr(),
]

# Education
s += sec('Education')
s += entry('Cedar Park High School -- Cedar Park, TX', 'Expected Graduation: May 2028',
           'Weighted GPA: 5.260  |  Unweighted GPA: 4.0  |  Top 5.8% of Class')
s += [
    Paragraph('<b>AP Coursework:</b>  Human Geography (5)  |  Chemistry  |  Pre-Calculus  |  Computer Science  |  World History', BODY_S),
    sp(2),
    Paragraph('<b>Clubs &amp; Organizations:</b>  Chinese Club  |  UIL Science  |  National Technical Honor Society  |  Mu Alpha Theta  |  Rho Kappa  |  Tri-M Music Honor Society  |  HOSA', BODY_S),
    sp(4),
]

# Research
s += sec('Research & Academic Experience')
s += entry('Agentic AI Research', 'Northwestern University  |  Summer 2026',
    'Conducting AI research under Prof. Naichen Shi (Industrial Engineering &amp; Mechanical Engineering). Designing experiments, collecting and analyzing data, co-authoring a research paper for publication.')
s += entry('UT High School Research Academy -- X-Plants Project', 'University of Texas at Austin  |  Summer 2026',
    '5-week intensive research endorsement program. Group research project in plant biology; earned formal university-level research endorsement.')
s += entry('miRcore Computational Biology Camp', 'University of Michigan, Ann Arbor  |  Summer 2025',
    'Computational analysis of gene expression data. Explored gene regulation, replication, and isolation using bioinformatics tools.')

# Leadership
s += sec('Leadership')
s += entry('Drum Major', 'Cedar Park High School Band  |  2026-2027',
    '2x 5A State Champion. Sudler Shield Award Winner -- the highest honor in marching band excellence.')
s += entry('President &amp; Co-Founder', 'Chinese Club  |  2025-Present',
    'Founded and leads the school\'s Chinese culture and language organization.')
s += entry('Junior Team Captain', 'UIL Science  |  2026-2027',
    '8th individually in district competition. Led team to 3rd place across biology, chemistry, and physics.')
s += [
    bul('Chapter Secretary -- National Technical Honor Society  |  2026-2027'),
    bul('Chapter Secretary -- Mu Alpha Theta / National Math Honor Society  |  2026-2027'),
    bul('Business &amp; Outreach Promoter -- FTC/FRC Robotics  |  2025-2026  |  2x Consecutive State Champion'),
    sp(4),
]

# Music
s += sec('Music')
s += [
    bul('1st Prize Winner -- International Clarinet Association Junior Bb Clareidoscope Competition  |  2024-2025'),
    bul('Principal Clarinetist -- Austin Youth Wind Ensemble  |  2025-2026'),
    bul('First Violin -- Austin Youth Symphony Orchestra  |  2024-Present'),
    bul('Finalist (12 of 300+) -- Cedar Park Young Artist Competition  |  2024-2026'),
    bul('TMEA Region Band &amp; Area Qualifier -- Clarinet  |  2024-2026'),
    bul('TMEA Region Orchestra &amp; Area Qualifier -- Violin  |  2024-2026'),
    bul('Heller Award Nominee -- Best Pit Orchestra ("Titanic" &amp; "Pippin")  |  2024-2026'),
    bul('Principal Clarinetist -- Cedar Park High School Honor Band  |  2025-Present'),
    sp(4),
]

# Honors
s += sec('Honors & Awards')
s += [
    bul('<b>National Recognition Program -- School Recognition Award</b>  |  The College Board  |  June 18, 2026'),
    Paragraph('    For Outstanding Academic Achievement, presented by David Coleman, CEO of The College Board.', BODY_S),
    sp(1),
    bul('<b>British Biology Olympiad (UKBO) -- Gold Medal</b>  |  Top 5% internationally  |  2026'),
    bul('<b>USA Biology Olympiad -- Honorable Mention / Center of Excellence</b>  |  Top 20% of 12,000+ participants  |  2026'),
    bul('<b>British Biology Challenge (UKBC) -- Gold Medal</b>  |  2025'),
    bul('HOSA Biotechnology -- Regional Competitor  |  2024-2026'),
    sp(4),
]

# Projects
s += sec('Projects')
s += entry('TexasClimate', 'haohanzang-ai.github.io/Weather-Channel/  |  2025-2026',
    'Texas-focused weather intelligence platform built with vanilla JavaScript. Real-time meteorological data, city comparisons, and fuel efficiency analysis.')

# Service
s += sec('Community Service  (100+ Hours)')
s += [
    bul('Big Future Ambassador -- The College Board  |  2025-Present'),
    bul('Science Competition Mentor -- Cedar Park Community  |  2025-Present'),
    bul('Community Outreach Volunteer -- Central Texas Food Bank  |  2025-Present'),
    bul('Musical Outreach Performer -- Local Nursing Homes  |  2025-Present'),
    sp(4),
]

# References
s += sec('References')
s += [
    bul('<b>Naichen Shi</b>  |  Asst. Professor, Northwestern University  |  naichen.shi@northwestern.edu'),
    bul('<b>Allison Trueblood</b>  |  Science Dept. Head, Cedar Park High School  |  Allison.Trueblood@leanderisd.org'),
    bul('<b>Christopher Yee</b>  |  Head Band Director, Cedar Park High School  |  Christopher.Yee@leanderisd.org'),
    bul('<b>Dawn Marie Lindblade-Evans, DMA</b>  |  Professor of Clarinet, University of Central Oklahoma'),
    bul('<b>Mike Lebiras</b>  |  Director, Austin Youth Wind Ensemble, UT Austin  |  mlebrias@utexas.edu'),
]

doc.build(s)
print('Saved to:', out)
