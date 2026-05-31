import { useState } from 'react'

const products = {
  clothing: [
    { glyph: 'HOODIE',   tag: 'Bestseller', name: 'Circuit Hoodie',    desc: 'Heavyweight black fleece with the embroidered TRONSoc gear emblem.',         price: '$45' },
    { glyph: 'TEE',      tag: null,         name: 'Mechatronics Tee',  desc: 'Soft cotton tee, orange line-art logo across the chest.',                    price: '$22' },
    { glyph: 'CREW',     tag: null,         name: 'Crewneck Sweater',  desc: 'Deep-slate crewneck with a subtle tonal logo and orange cuff stitch.',        price: '$38' },
    { glyph: 'CAP',      tag: 'New',        name: 'Logo Snapback',     desc: 'Structured cap, raised orange gear stitch on black.',                        price: '$25' },
  ],
  accessories: [
    { glyph: 'STICKERS', tag: 'Bestseller', name: 'Sticker Pack',      desc: 'Five die-cut vinyl stickers — laptop, water bottle, toolbox approved.',      price: '$8'  },
    { glyph: 'BOTTLE',   tag: null,         name: 'Steel Water Bottle', desc: 'Insulated 750 ml bottle with the laser-etched TRONSoc mark.',               price: '$28' },
    { glyph: 'TOTE',     tag: null,         name: 'Canvas Tote',        desc: 'Heavy canvas tote big enough for a laptop, a multimeter, and snacks.',      price: '$15' },
    { glyph: 'LANYARD',  tag: 'New',        name: 'ID Lanyard',         desc: 'Woven orange-on-black lanyard with a quick-release clip.',                  price: '$6'  },
  ],
}

function ProductCard({ glyph, tag, name, desc, price }) {
  const [added, setAdded] = useState(false)
  const handleAdd = () => { setAdded(true); setTimeout(() => setAdded(false), 1100) }
  return (
    <article className="product-card">
      <div className="product-card__img">
        {tag && <span className="product-card__tag">{tag}</span>}
        <span className="glyph">{glyph}</span>
      </div>
      <div className="product-card__body">
        <h3>{name}</h3>
        <p className="desc">{desc}</p>
        <div className="product-card__foot">
          <span className="product-card__price">{price}</span>
          <button className="add-btn" onClick={handleAdd}>{added ? 'Added ✓' : 'Add'}</button>
        </div>
      </div>
    </article>
  )
}

export default function Shop() {
  const [tab, setTab] = useState('clothing')
  return (
    <>
      {/* ── RULE 5: padded page header ── */}
      <div className="page-header">
        <div className="container">
          <span className="eyebrow">The Store</span>
          <h1>Shop</h1>
          <p>Wear the circuit orange. Every purchase keeps the solder flowing and the build nights stocked.</p>
          {/* Tabs */}
          <div className="shop-tabs">
            {['clothing', 'accessories'].map(t => (
              <button
                key={t}
                className={`shop-tab ${tab === t ? 'active' : ''}`}
                onClick={() => setTab(t)}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section>
        <div className="container container--flush-top">
          {/* ── RULE 4: product grid with gap: 2rem ── */}
          <div className="product-grid">
            {products[tab].map(p => <ProductCard key={p.name} {...p} />)}
          </div>
          <p className="cal-note" style={{ marginTop: '2rem' }}>
            // Mock storefront — wire the "Add" buttons to your payment provider when ready.
          </p>
        </div>
      </section>
    </>
  )
}
