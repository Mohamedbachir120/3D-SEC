import { motion, useInView, animate } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

// Stat Counter component
function StatCounter({ value, suffix, label }: { value: number, suffix: string, label: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(val) {
          setCount(Math.floor(val));
        }
      });
      return () => controls.stop();
    }
  }, [inView, value]);

  // Format with commas for large numbers
  const formattedCount = count >= 1000 ? count.toLocaleString() : count;

  return (
    <div ref={ref} className="text-center group">
      <div className="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-2 text-text-primary transition-colors group-hover:text-white">
        {formattedCount}{suffix}
      </div>
      <div className="text-text-secondary uppercase tracking-wider text-xs font-semibold">
        {label}
      </div>
    </div>
  );
}

// Full Lineup Shop Grid
export function ProductGrid() {
  const products = [
    { name: "FORTIS Eye 360°", price: "From $349", img: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80" },
    { name: "FORTIS Sentinel Pro", price: "From $499", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80" },
    { name: "FORTIS Shield Hub", price: "From $299", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80" },
    { name: "FORTIS Lock X", price: "From $249", img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=800&q=80" },
    { name: "FORTIS NVR Core", price: "From $899", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80" },
    { name: "FORTIS Pro Installation", price: "From $199", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80" }
  ];

  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-center">
      <h2 className="font-display text-3xl md:text-5xl font-bold mb-16 text-center">The Complete FORTIS Lineup</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {products.map((p, i) => (
          <div key={i} className="group flex flex-col relative bg-surface-dark border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-[0_0_20px_rgba(41,151,255,0.15)] hover:-translate-y-1">
            <div className="aspect-[4/3] w-full overflow-hidden bg-black relative">
              <img src={p.img} alt={p.name} className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105" />
            </div>
            <div className="p-6 flex flex-col gap-4">
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-text-secondary text-sm">{p.price}</span>
                <button className="text-xs uppercase font-bold tracking-wider text-accent border border-accent/30 px-4 py-2 rounded-full hover:bg-accent hover:text-white transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Features Section
export function Features() {
  const features = [
    { title: "AI Intelligence.", desc: "Distinguishes between people, vehicles, and animals instantly. Zero false alarms.", img: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=1600&q=80", rowReversed: false },
    { title: "Military Encryption.", desc: "Your data stays yours. End-to-end AES-256 encryption on device and in transit.", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1600&q=80", rowReversed: true },
    { title: "24/7 Monitoring.", desc: "Our expert security team has eyes on your system when you don't. Immediate dispatch.", img: "https://images.unsplash.com/photo-1621644723046-5e0f769cc1e2?w=1600&q=80", rowReversed: false }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16 text-center md:text-left">
        <h2 className="font-display text-3xl md:text-5xl font-bold">Built Different.</h2>
      </div>
      
      {features.map((f, i) => (
        <div key={i} className={`flex flex-col md:flex-row min-h-[70vh] ${f.rowReversed ? 'md:flex-row-reverse' : ''}`}>
          <div className="w-full md:w-3/5 overflow-hidden relative min-h-[40vh] md:min-h-full">
            <motion.img 
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
              src={f.img} 
              alt={f.title} 
              className="absolute w-full h-full object-cover opacity-80" 
            />
          </div>
          <div className="w-full md:w-2/5 flex flex-col justify-center p-8 md:p-16 lg:p-24 bg-brand-dark">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="font-display text-2xl md:text-4xl font-bold mb-4">{f.title}</h3>
              <p className="text-text-secondary text-lg leading-relaxed">{f.desc}</p>
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
}

// Stats Section
export function Stats() {
  return (
    <section className="py-32 px-4 bg-brand-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
        <StatCounter value={2} suffix="M+" label="Devices Deployed" />
        <StatCounter value={99.97} suffix="%" label="Uptime" />
        <StatCounter value={150} suffix="+" label="Countries" />
        <StatCounter value={200} suffix="ms" label="< Alert Speed" />
      </div>
    </section>
  );
}

// Call to action
export function FinalCTA() {
  return (
    <section className="h-[60vh] flex flex-col items-center justify-center text-center px-4 bg-brand-dark border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(41,151,255,0.05)_0%,rgba(5,5,7,0)_60%)] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-50px" }}
        className="z-10"
      >
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">Secure your world.</h2>
        <p className="text-text-secondary text-lg md:text-xl max-w-xl mx-auto mb-10">
          Schedule a free consultation with our security experts to design your perfect system.
        </p>
        <button className="bg-accent hover:bg-accent-warm text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 mb-6 drop-shadow-[0_0_15px_rgba(41,151,255,0.4)] hover:drop-shadow-[0_0_20px_rgba(255,103,35,0.6)]">
          Get Started
        </button>
        <p className="text-xs text-text-secondary/60">
          Free &middot; No commitment &middot; Response within 2 hours
        </p>
      </motion.div>
    </section>
  );
}

// Footer
export function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/5 pt-16 pb-8 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        <div>
          <h4 className="font-semibold text-text-primary mb-4 text-sm">Products</h4>
          <ul className="flex flex-col gap-2 text-text-secondary text-sm">
            <li><a href="#" className="hover:text-white transition-colors">FORTIS Eye 360°</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Sentinel Pro</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shield Hub</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Lock X</a></li>
            <li><a href="#" className="hover:text-white transition-colors">NVR Core</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-text-primary mb-4 text-sm">Solutions</h4>
          <ul className="flex flex-col gap-2 text-text-secondary text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Home Security</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Small Business</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Government</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-text-primary mb-4 text-sm">Company</h4>
          <ul className="flex flex-col gap-2 text-text-secondary text-sm">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Newsroom</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Investors</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-text-primary mb-4 text-sm">Support</h4>
          <ul className="flex flex-col gap-2 text-text-secondary text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">System Status</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-secondary/60 pt-8 border-t border-white/5">
        <p>&copy; 2026 FORTIS Security Inc. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          <a href="#" className="hover:text-white transition-colors">Legal</a>
        </div>
      </div>
    </footer>
  );
}
