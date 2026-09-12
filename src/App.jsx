import { CalendarDays, Users, Star, Scissors, ShieldCheck, Gem, Sparkles, UserRound, MapPin, Phone, Mail, Clock3, Menu, X, MessageCircle, ChevronRight } from 'lucide-react'
import { Instagram, Facebook, Youtube } from './components/SocialIcons'
import { useState } from 'react'
import { services, priceGroups, testimonials } from './data/siteData'

const SectionTitle = ({eyebrow,title,sub}) => <div className="section-title"><span>{eyebrow}</span><h2>{title}</h2>{sub&&<p>{sub}</p>}</div>
const Btn=({children,outline=false,href='#contact'})=><a className={`btn ${outline?'btn-outline':''}`} href={href}>{children}<ChevronRight size={15}/></a>

function Navbar(){
  const [open,setOpen]=useState(false)
  const links=['Home','About','Services','Offers','Gallery','Testimonials','Contact']
  return <header className="nav-wrap"><nav className="navbar container">
    <a className="brand" href="#home"><b>♕</b><strong>Lumé</strong><small>BEAUTY BEYOND YOU</small></a>
    <button className="mobile-toggle" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
    <div className={`nav-links ${open?'open':''}`}>{links.map(l=><a key={l} href={`#${l.toLowerCase()}`} onClick={()=>setOpen(false)}>{l}</a>)}</div>
    <a className="nav-book" href="#contact">Book Appointment</a>
  </nav></header>
}

function App(){return <>
  <Navbar/>
  <main>
    <section id="home" className="hero"><div className="container hero-inner">
      <div className="hero-copy reveal"><span>WELCOME TO LUMÉ SALON</span><h1>Beauty Begins<br/>With Confidence</h1><p>Premium Hair, Beauty & Wellness Services<br/>for a More Confident You.</p><div className="actions"><Btn href="#contact">Book Appointment</Btn><Btn outline href="#services">Explore Services</Btn></div></div>
    </div></section>

    <section className="stats"><div className="container stat-grid">
      {[[CalendarDays,'10+','Years Experience'],[Users,'15K+','Happy Clients'],[Star,'4.9/5','Google Rating'],[Scissors,'20+','Expert Stylists']].map(([I,n,t])=><div className="stat" key={t}><I/><div><b>{n}</b><small>{t}</small></div></div>)}
    </div></section>

    <section id="about" className="section about"><div className="container about-grid">
      <img src="/images/about.jpg" alt="Lume salon interior"/>
      <div><SectionTitle eyebrow="ABOUT US" title={<>More Than a Salon,<br/>A Beauty Experience</>}/><p>At Lumé, we believe beauty is a reflection of your confidence. We offer a premium range of hair, skin, beauty and wellness services in a luxurious and comfortable environment. Our expert team uses the best products and modern techniques to bring out your natural beauty.</p><Btn>Our Story</Btn></div>
      <blockquote>“Beauty is not just<br/>how you look,<br/>but how you feel.”</blockquote>
    </div></section>

    <section id="services" className="section services"><div className="container"><SectionTitle eyebrow="OUR SERVICES" title="Popular Services" sub="Everything you need to look and feel your best"/><div className="service-grid">{services.map(([name,img])=><article className="service-card" key={name}><img src={img} alt={name}/><b>{name}</b></article>)}</div></div></section>

    <section className="why"><div className="container"><SectionTitle eyebrow="WHY CHOOSE US" title="The Lumé Difference"/><div className="why-grid">
      {[[Scissors,'Expert Stylists','Trained & Certified'],[Gem,'Premium Products','Global Beauty Brands'],[ShieldCheck,'Hygienic Environment','Your Safety Our Priority'],[Sparkles,'Personalized Consultation','Beauty That Fits You'],[UserRound,'Modern Equipment','Latest Technology']].map(([I,t,s])=><div className="why-item" key={t}><span><I/></span><b>{t}</b><small>{s}</small></div>)}
    </div></div></section>

    <section id="offers" className="section transform-offers"><div className="container two-col">
      <div><SectionTitle eyebrow="REAL TRANSFORMATIONS" title="Before & After" sub="See the beauty we create"/><img className="wide-img" src="/images/before-after.jpg" alt="Before and after transformation"/></div>
      <div><SectionTitle eyebrow="SPECIAL OFFERS" title="Exclusive Offers" sub="Pamper yourself with the best deals"/><div className="offer-grid">
        {[['Bridal Package','Flat 30% Off'],['Hair Spa Offer','Buy 2 Get 1 Free'],['New Customer','20% Off']].map((x,i)=><article className="offer" key={x[0]}><img src={`/images/offer-${i+1}.jpg`} alt=""/><div><b>{x[0]}</b><strong>{x[1]}</strong><button>Book Now</button></div></article>)}
      </div></div>
    </div></section>

    <section className="section split"><div className="container two-col team-gallery">
      <div><SectionTitle eyebrow="OUR TEAM" title="Meet Our Stylists" sub="Experts in making you look amazing"/><img className="wide-img" src="/images/team.jpg" alt="Our stylists"/></div>
      <div id="gallery"><SectionTitle eyebrow="OUR GALLERY" title="Salon Moments" sub="A glimpse of our premium experience"/><img className="wide-img" src="/images/gallery.jpg" alt="Salon gallery"/></div>
    </div></section>

    <section className="section pricing"><div className="container price-layout"><SectionTitle eyebrow="OUR PRICING" title="Simple & Transparent" sub="Premium services at the best value"/><div className="price-grid">{priceGroups.map(g=><article className="price-card" key={g.title}><h3>{g.title}</h3>{g.items.map(([n,p])=><div className="price-row" key={n}><span>{n}</span><b>{p}</b></div>)}</article>)}</div></div></section>

    <section id="testimonials" className="section reviews"><div className="container review-layout"><div><SectionTitle eyebrow="TESTIMONIALS" title="What Our Clients Say" sub="Real people. Real experiences."/><div className="review-grid">{testimonials.map(([n,q,a])=><article className="review" key={n}><div className="review-head"><img src={a}/><div><b>{n}</b><div className="stars">★★★★★</div></div></div><p>“{q}”</p></article>)}</div></div>
      <div className="insta"><SectionTitle eyebrow="FOLLOW US" title="@lumesalon" sub="Beauty Inspires Beauty"/><img src="/images/gallery.jpg" alt="Instagram gallery"/><div className="social"><Instagram/><Facebook/><Youtube/></div></div>
    </div></section>

    <section className="cta"><div className="container cta-inner"><img src="/images/cta.jpg" alt="Salon model"/><div><h2>Ready for a New You?</h2><p>Book your appointment today and experience the Lumé difference.</p><Btn>Book on WhatsApp</Btn></div><div className="cta-features"><span>◈<small>Quick Booking</small></span><span>◷<small>Flexible Timings</small></span><span>♙<small>Expert Consultation</small></span></div></div></section>

    <section id="contact" className="section contact"><div className="container contact-grid"><div><SectionTitle eyebrow="VISIT US" title="Our Location" sub="Come and experience it yourself"/><p><MapPin/>123 Beauty Street,<br/>Indiranagar, Bangalore – 560038</p><p><Phone/>+91 98765 43210</p><p><Mail/>hello@lumesalon.com</p><p><Clock3/>Mon – Sun: 10:00 AM – 8:00 PM</p></div><img src="/images/location.jpg" alt="Map and salon location"/></div></section>
  </main>

  <footer><div className="container footer-grid"><div className="brand footer-brand"><b>♕</b><strong>Lumé</strong><small>BEAUTY BEYOND YOU</small></div><div><b>Quick Links</b><a href="#home">Home</a><a href="#about">About</a><a href="#services">Services</a><a href="#gallery">Gallery</a></div><div><b>Our Services</b><a>Hair</a><a>Skin</a><a>Bridal</a><a>Nails</a></div><div><b>Contact Us</b><a>+91 98765 43210</a><a>hello@lumesalon.com</a><a>Indiranagar, Bangalore</a></div><div><b>Follow Us</b><div className="social"><Instagram/><Facebook/><Youtube/></div></div></div><div className="copyright"><span>© 2026 Lumé Salon. All rights reserved.</span><span>Privacy Policy &nbsp; | &nbsp; Terms & Conditions</span></div></footer>
  <a className="whatsapp" href="https://wa.me/919876543210" target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle/></a>
</>}
export default App
