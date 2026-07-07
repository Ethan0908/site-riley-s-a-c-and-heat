import business from '../data/business.json';

const phoneHref = `tel:${business.phone.replace(/[^\d+]/g, '')}`;
const addressFromNotes = business.rawLead.notes.split('•').at(-1)?.trim() ?? '';
const googleMapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressFromNotes)}`;

const serviceCues = [
  'Air conditioning service',
  'Heating service',
  'Manhattan HVAC calls',
  'Broadway-area appointments',
];

const decisionPoints = [
  {
    label: 'Call first',
    copy: 'The clearest next step is a phone call. Riley\'s publishes a direct Manhattan number for service questions and scheduling.',
  },
  {
    label: 'Use the site',
    copy: 'Prefer to look around first? The business website is available for visitors who want more detail before calling.',
  },
  {
    label: 'Know the local base',
    copy: addressFromNotes || 'Listed for Manhattan service.',
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__bar" aria-label="Business summary">
          <span>{business.name}</span>
          <span>HVAC in Manhattan</span>
          <span>4.9 Google rating</span>
        </div>

        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Manhattan A/C and heat service</p>
            <h1 id="hero-title">A local HVAC call when the room will not hold temperature.</h1>
            <p className="lede">
              Riley&apos;s A/C and Heat serves Manhattan customers from its Broadway listing,
              with a published 4.9 Google rating from 42 reviews.
            </p>
            <div className="hero__actions" aria-label="Contact options">
              <a className="button button--primary" href={phoneHref}>
                Call {business.phone}
              </a>
              <a className="button button--secondary" href={business.website}>
                Visit website
              </a>
            </div>
          </div>

          <aside className="service-panel" aria-label="Service snapshot">
            <div className="dial" aria-hidden="true">
              <span>AC</span>
              <span>Heat</span>
            </div>
            <div>
              <p className="panel-kicker">Riley&apos;s handles HVAC calls across</p>
              <p className="panel-place">Manhattan</p>
            </div>
            <dl className="quick-facts">
              <div>
                <dt>Phone</dt>
                <dd>{business.phone}</dd>
              </div>
              <div>
                <dt>Reviews</dt>
                <dd>42 Google reviews</dd>
              </div>
              <div>
                <dt>Rating</dt>
                <dd>4.9</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="services-title">
        <div className="section__intro">
          <p className="eyebrow">What to call about</p>
          <h2 id="services-title">Cooling, heating, and HVAC service without a crowded sales page.</h2>
        </div>
        <div className="cue-grid">
          {serviceCues.map((item) => (
            <div className="cue" key={item}>
              <span aria-hidden="true" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section local-band" aria-labelledby="local-title">
        <div>
          <p className="eyebrow">Local context</p>
          <h2 id="local-title">Built around a Manhattan visitor&apos;s real questions.</h2>
        </div>
        <div className="route-card">
          <p className="route-card__label">Listed address</p>
          <p className="route-card__address">{addressFromNotes}</p>
          <a href={googleMapsHref}>Open in maps</a>
        </div>
      </section>

      <section className="section choice-section" aria-labelledby="next-title">
        <div className="section__intro">
          <p className="eyebrow">Next step</p>
          <h2 id="next-title">Choose the fastest route for the way you like to book.</h2>
        </div>
        <div className="choice-grid">
          {decisionPoints.map((point, index) => (
            <article className="choice" key={point.label}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{point.label}</h3>
              <p>{point.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta" aria-labelledby="final-title">
        <div>
          <p className="eyebrow">Riley&apos;s A/C and Heat</p>
          <h2 id="final-title">For A/C or heat in Manhattan, start with the direct number.</h2>
        </div>
        <a className="button button--primary" href={phoneHref}>
          Call {business.phone}
        </a>
      </section>

      <nav className="mobile-call" aria-label="Mobile contact">
        <a href={phoneHref}>Call {business.phone}</a>
      </nav>
    </main>
  );
}
