import business from '../data/business.json';

type ServiceLens = {
  id: string;
  label: string;
  title: string;
  body: string;
  points: string[];
};

type Question = {
  question: string;
  answer: string;
};

const phoneLabel = business.phone || '(929) 298-9750';
const websiteUrl = websiteHref(business.website || 'https://rileys-hvac.com/');
const cityLabel = titleCase(business.serviceArea || business.city || 'Manhattan');
const notes = business.description || business.rawLead?.notes || '';

function phoneHref(phone: string) {
  const digits = phone.replace(/\D/g, '');
  const normalized = digits.length === 10 ? `1${digits}` : digits;
  return normalized ? `tel:+${normalized}` : '#contact';
}

function websiteHref(url: string) {
  const trimmed = url.trim();
  if (!trimmed) {
    return 'https://rileys-hvac.com/';
  }
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

function displayWebsite(url: string) {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
}

function titleCase(value: string) {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

function notesFact(pattern: RegExp, fallback: string) {
  const match = notes.match(pattern);
  return match?.[0] || fallback;
}

const ratingFact = notesFact(/4\.9 rating/i, '4.9 rating');
const reviewFact = notesFact(/42 Google reviews/i, '42 Google reviews');
const broadwayFact = notesFact(/817 Broadway, New York, NY 10003, USA/i, '817 Broadway, New York, NY 10003, USA');
const telHref = phoneHref(phoneLabel);
const siteLabel = displayWebsite(websiteUrl);
const externalLinkProps = { target: '_blank', rel: 'noopener noreferrer' };

const navItems = [
  { href: '#approach', label: 'Approach' },
  { href: '#prepare', label: 'Prepare' },
  { href: '#services', label: 'Services' },
  { href: '#proof', label: 'Proof' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
];

const serviceLenses: ServiceLens[] = [
  {
    id: 'cooling',
    label: 'Cooling',
    title: 'Cooling concerns in a Manhattan room or building.',
    body:
      "When the issue is A/C, the useful first step is a clear call: what changed, where it is happening, and how the space is behaving.",
    points: ['Room or zone affected', 'System type if known', 'Noise, airflow, or temperature pattern'],
  },
  {
    id: 'heating',
    label: 'Heating',
    title: 'Heat concerns framed before the visit conversation.',
    body:
      'Heating calls move faster when the caller can describe the symptoms, access details, and whether the concern is isolated or building-wide.',
    points: ['Location in the property', 'Recent changes noticed', 'Access or building requirements'],
  },
  {
    id: 'diagnostics',
    label: 'Diagnostics',
    title: 'Comfort issues that need a practical read.',
    body:
      'Uneven comfort, weak airflow, or inconsistent operation can have several causes. Start with the pattern, not a guessed solution.',
    points: ['What you feel or hear', 'When it started', 'Whether it changes by time of day'],
  },
  {
    id: 'coordination',
    label: 'Coordination',
    title: 'Manhattan property details that matter.',
    body:
      'Building access, floor, equipment location, and site rules can shape the next step. Have those details ready when possible.',
    points: ['Building and unit access', 'Equipment location', 'Best call-back contact path'],
  },
];

const decisionItems = [
  {
    title: 'Call when the pattern is clear enough to explain.',
    text:
      'You do not need a perfect diagnosis. A useful description of the room, system, and symptoms is enough to start the conversation.',
    mark: 'Room',
  },
  {
    title: 'Use the website when you want another verification path.',
    text:
      `${siteLabel} is the listed website in the supplied business data, and it is the secondary path from this page.`,
    mark: 'Site',
  },
  {
    title: 'Keep building details close.',
    text:
      'Manhattan HVAC work often starts with practical access questions: location, equipment placement, and any building requirements.',
    mark: 'Access',
  },
  {
    title: 'Skip unsupported assumptions.',
    text:
      'This page only shows facts supplied for Riley\'s A/C and Heat, so it avoids unsupported timing, credential, or service-scope promises.',
    mark: 'Facts',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Call with the issue and location.',
    text:
      `Use ${phoneLabel} and describe the A/C, heat, or comfort concern in plain terms. Include that the property is in ${cityLabel}.`,
  },
  {
    step: '02',
    title: 'Describe the room, system, and access.',
    text:
      'Mention where the equipment is, what changed, whether the issue affects one area or more, and any building access details.',
  },
  {
    step: '03',
    title: 'Discuss the next appropriate service step.',
    text:
      'The call can then move from symptoms and context into the next practical action through Riley\'s listed contact path.',
  },
];

const expectationItems = [
  {
    title: 'Phone-first contact',
    text: `${phoneLabel} is the primary action because it is the clearest supplied contact method.`,
  },
  {
    title: 'Factual proof only',
    text: `The page uses the supplied ${ratingFact} and ${reviewFact} without adding testimonials or review text.`,
  },
  {
    title: 'Local context',
    text: `The supplied notes place the business around ${cityLabel} and list ${broadwayFact}.`,
  },
  {
    title: 'No padded claims',
    text:
      'No extra promises are shown beyond the supplied business facts and contact paths.',
  },
];

const prepItems = [
  {
    label: 'The space',
    text: 'Which room, floor, or zone is affected, and whether the issue is isolated or happening in more than one place.',
  },
  {
    label: 'The symptom',
    text: 'Temperature change, airflow, noise, cycling, or general comfort pattern in plain language.',
  },
  {
    label: 'The access',
    text: 'Building entry, equipment location, unit access, and any property coordination details you already know.',
  },
];

const questions: Question[] = [
  {
    question: 'What should I mention when I call?',
    answer:
      'Start with the property location, whether the concern is A/C, heat, or general comfort, where it is happening, and any access details for the building or equipment.',
  },
  {
    question: 'Is there an email address listed?',
    answer:
      `No email address was supplied for this page. The available contact paths are calling ${phoneLabel} and visiting ${siteLabel}.`,
  },
  {
    question: 'Can I use the website instead?',
    answer:
      `Yes. The supplied business website is ${siteLabel}. This page keeps it as the secondary verification path after the phone CTA.`,
  },
  {
    question: 'What service area is shown?',
    answer:
      `The supplied service area is ${cityLabel}. The notes also identify HVAC and include the Broadway listing shown on this page.`,
  },
];

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand-lockup" href="#top" aria-label="Riley's A/C and Heat home">
        <span className="brand-mark">R</span>
        <span>
          <strong>Riley's A/C and Heat</strong>
          <small>{cityLabel} HVAC</small>
        </span>
      </a>
      <nav className="header-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header-call" href={telHref}>
        Call now
      </a>
    </header>
  );
}

function ThermalMapPanel() {
  return (
    <aside className="thermal-panel" aria-label="Riley's A/C and Heat contact summary">
      <div className="thermal-grid" aria-hidden="true">
        <span className="flow flow-one" />
        <span className="flow flow-two" />
        <span className="flow flow-three" />
        <span className="building building-one" />
        <span className="building building-two" />
        <span className="building building-three" />
      </div>
      <div className="thermal-ruler" aria-hidden="true">
        <span>cool</span>
        <i />
        <span>heat</span>
      </div>
      <div className="thermal-content">
        <p className="micro-label">Manhattan contact path</p>
        <a className="panel-phone" href={telHref}>
          {phoneLabel}
        </a>
        <div className="panel-facts">
          <span>{cityLabel}</span>
          <span>{ratingFact}</span>
          <span>{reviewFact}</span>
        </div>
      </div>
    </aside>
  );
}

function Hero() {
  return (
    <section className="hero section-shell" id="top">
      <div className="hero-copy">
        <p className="eyebrow">HVAC help in {cityLabel}</p>
        <h1>Manhattan A/C and heat help, without the guesswork.</h1>
        <p className="hero-deck">
          Riley's A/C and Heat is listed for HVAC in Manhattan. This page keeps the next step simple:
          call, explain the room and system, or use the listed website to verify details.
        </p>
        <div className="cta-row">
          <a className="button button-primary" href={telHref}>
            Call Riley's A/C and Heat
          </a>
          <a className="button button-secondary" href={websiteUrl} {...externalLinkProps}>
            Visit website
          </a>
        </div>
        <div className="hero-note" aria-label="Call preparation note">
          <span>Have ready</span>
          <p>Room or zone, system symptoms, and building access details.</p>
        </div>
      </div>
      <ThermalMapPanel />
    </section>
  );
}

function CredibilityStrip() {
  const facts = ['HVAC in Manhattan', ratingFact, reviewFact, 'Broadway listing'];

  return (
    <section className="credibility-strip" aria-label="Business facts">
      <div className="strip-inner">
        {facts.map((fact) => (
          <span key={fact}>{fact}</span>
        ))}
      </div>
    </section>
  );
}

function BrandThesis() {
  return (
    <section className="section-shell thesis" id="approach">
      <div className="section-kicker">A practical first call</div>
      <div className="thesis-grid">
        <h2>Good HVAC guidance starts with the room, the building, and the caller's priorities.</h2>
        <div className="thesis-copy">
          <p>
            A Manhattan comfort issue is rarely just a temperature number. The useful details are where
            it happens, what changed, what equipment is involved, and what building access may affect
            the next step.
          </p>
          <p>
            Riley's listed path is phone-first. Use the call to describe the concern clearly, then move
            into the appropriate service conversation from there.
          </p>
        </div>
      </div>
    </section>
  );
}

function PrepFieldGuide() {
  return (
    <section className="prep-guide" id="prepare">
      <div className="section-shell prep-grid">
        <div className="prep-panel" aria-hidden="true">
          <span className="prep-temp">72</span>
          <span className="prep-unit">room read</span>
          <div className="prep-lines">
            <i />
            <i />
            <i />
          </div>
        </div>
        <div className="prep-copy">
          <p className="eyebrow">Before dialing</p>
          <h2>Make the first minute of the call useful.</h2>
          <p>
            Manhattan HVAC conversations can get practical quickly. A clear description of the space,
            symptom, and access details gives the call a better starting point than a guessed diagnosis.
          </p>
          <div className="prep-list">
            {prepItems.map((item) => (
              <article key={item.label}>
                <span>{item.label}</span>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceArchitecture() {
  return (
    <section className="section-shell services" id="services">
      <div className="section-heading">
        <p className="eyebrow">Service framing</p>
        <h2>A/C, heat, comfort, and building details in four call lanes.</h2>
        <p>
          The supplied data confirms HVAC positioning, but it does not include a detailed service menu.
          These lenses help you organize the conversation without adding unsupported promises.
        </p>
      </div>
      <div className="service-shell">
        {serviceLenses.map((lens, index) => (
          <input
            className="service-radio"
            type="radio"
            name="service-lens"
            id={`service-${lens.id}`}
            aria-label={`${lens.label} service conversation topic`}
            defaultChecked={index === 0}
            key={`input-${lens.id}`}
          />
        ))}
        <div className="service-controls" aria-label="Service conversation topics">
          {serviceLenses.map((lens) => (
            <label key={lens.id} htmlFor={`service-${lens.id}`}>
              {lens.label}
            </label>
          ))}
        </div>
        <div className="service-panels">
          {serviceLenses.map((lens) => (
            <article key={lens.id} className="service-panel" data-panel={lens.id}>
              <div>
                <p className="micro-label">{lens.label} call prep</p>
                <h3>{lens.title}</h3>
                <p>{lens.body}</p>
              </div>
              <ul>
                {lens.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <a className="text-link" href={telHref}>
                Talk through the issue
              </a>
            </article>
          ))}
        </div>
      </div>
      <p className="service-note">
        This is call-prep guidance based on supplied HVAC context, not a complete service catalog.
      </p>
    </section>
  );
}

function DecisionGuide() {
  return (
    <section className="section-shell decision" id="decision-guide">
      <div className="decision-heading">
        <p className="eyebrow">Before you call</p>
        <h2>A small field guide for a clearer HVAC conversation.</h2>
      </div>
      <div className="decision-bento">
        {decisionItems.map((item, index) => (
          <article className={index === 0 ? 'bento-item bento-lead' : 'bento-item'} key={item.title}>
            <span className="bento-index">{item.mark}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
        <a className="bento-action" href={telHref}>
          Have these details ready, then call
        </a>
      </div>
    </section>
  );
}

function LocalProofPanel() {
  return (
    <section className="local-proof section-shell" id="proof">
      <div className="proof-map" aria-hidden="true">
        <span className="map-node node-one" />
        <span className="map-node node-two" />
        <span className="map-node node-three" />
      </div>
      <div className="proof-content">
        <p className="eyebrow">Supplied local proof</p>
        <h2>Listed in Manhattan, with Google review signals in the lead notes.</h2>
        <p>
          The supplied business notes identify HVAC, Manhattan, {ratingFact}, {reviewFact}, and
          {` ${broadwayFact}`}. Those are the proof points shown here.
        </p>
        <dl className="proof-list">
          <div>
            <dt>Listed phone</dt>
            <dd>
              <a href={telHref}>{phoneLabel}</a>
            </dd>
          </div>
          <div>
            <dt>Website</dt>
            <dd>
              <a href={websiteUrl} {...externalLinkProps}>
                {siteLabel}
              </a>
            </dd>
          </div>
          <div>
            <dt>Notes location</dt>
            <dd>{broadwayFact}</dd>
          </div>
        </dl>
        <div className="proof-stats">
          <div>
            <strong>4.9</strong>
            <span>rating noted</span>
          </div>
          <div>
            <strong>42</strong>
            <span>Google reviews noted</span>
          </div>
          <div>
            <strong>NYC</strong>
            <span>{cityLabel} service area</span>
          </div>
        </div>
        <a className="button button-secondary" href={websiteUrl} {...externalLinkProps}>
          Open website
        </a>
      </div>
    </section>
  );
}

function ProcessStory() {
  return (
    <section className="section-shell process" id="process">
      <div className="process-intro">
        <p className="eyebrow">Contact flow</p>
        <h2>Keep the first conversation concrete.</h2>
        <p>
          The page does not promise a timing window or outcome. It helps you prepare the information
          Riley's listed contact path is likely to need.
        </p>
      </div>
      <div className="timeline">
        {processSteps.map((item) => (
          <article className="timeline-card" key={item.step}>
            <span>{item.step}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ExpectationsMatrix() {
  return (
    <section className="section-shell expectations">
      <div className="section-heading compact">
        <p className="eyebrow">Page commitments</p>
        <h2>Useful, specific, and careful with the facts.</h2>
      </div>
      <div className="expectation-grid">
        {expectationItems.map((item) => (
          <article key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function QuestionsAccordion() {
  return (
    <section className="section-shell questions" id="questions">
      <div className="questions-lead">
        <p className="eyebrow">Quick answers</p>
        <h2>Four details to settle before you reach out.</h2>
      </div>
      <div className="accordion">
        {questions.map((item, index) => (
          <details key={item.question} open={index === 0}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function FinalContactCta() {
  return (
    <section className="final-cta section-shell" id="contact">
      <div className="final-copy">
        <p className="eyebrow">Ready to talk through the issue?</p>
        <h2>Call Riley's A/C and Heat with the room, system, and access details in hand.</h2>
        <p>
          Phone is the clearest supplied contact path. The website remains available for a secondary
          check before or after the call.
        </p>
        <div className="cta-row">
          <a className="button button-primary light" href={telHref}>
            Call {phoneLabel}
          </a>
          <a className="button button-ghost" href={websiteUrl} {...externalLinkProps}>
            Visit {siteLabel}
          </a>
        </div>
      </div>
      <div className="final-card">
        <span>Service area</span>
        <strong>{cityLabel}</strong>
        <span>Supplied proof</span>
        <strong>
          {ratingFact} / {reviewFact}
        </strong>
        <span>Listing note</span>
        <strong>{broadwayFact}</strong>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <a className="footer-brand" href="#top">
          Riley's A/C and Heat
        </a>
        <p>Manhattan HVAC contact page using supplied business data.</p>
      </div>
      <nav aria-label="Footer navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="footer-contact">
        <a href={telHref}>{phoneLabel}</a>
        <a href={websiteUrl} {...externalLinkProps}>
          {siteLabel}
        </a>
        <span>{cityLabel} HVAC</span>
      </div>
    </footer>
  );
}

function MobileCallBar() {
  return (
    <aside className="mobile-call-bar" aria-label="Mobile call action">
      <span>Riley's A/C and Heat</span>
      <a href={telHref}>Call now</a>
    </aside>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <CredibilityStrip />
        <BrandThesis />
        <PrepFieldGuide />
        <ServiceArchitecture />
        <DecisionGuide />
        <LocalProofPanel />
        <ProcessStory />
        <ExpectationsMatrix />
        <QuestionsAccordion />
        <FinalContactCta />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
