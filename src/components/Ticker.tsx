const ITEMS = [
  'Visa Assistance',
  'Study Abroad Guidance',
  'Business Visa Support',
  'Tourist & Visit Visas',
  'Documentation Assistance',
  'Immigration & Consultancy',
  'UK & Australia',
  'UAE & Japan',
  'Mehdipatnam, Hyderabad',
]

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className="nb-strip" aria-hidden="true">
      <div className="nb-strip-track">
        {doubled.map((item, i) => (
          <div className="nb-strip-item" key={i}>
            <span className="nb-strip-sep" />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
