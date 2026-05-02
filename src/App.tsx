import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { CinematicProduct } from './components/CinematicProduct';
import { ProductGrid, Features, Stats, FinalCTA, Footer } from './components/Sections';

export default function App() {
  return (
    <div className="bg-brand-dark min-h-screen text-text-primary selection:bg-accent selection:text-white pb-[1px]">
      <Nav />
      <Hero />
      
      {/* Product 1: Dome Camera */}
      <CinematicProduct 
        heightClass="h-[500vh]"
        imageSrc="https://images.unsplash.com/photo-1558002038-1055907df827?w=2400&q=80"
        layers={[
          {
            start: 0.02, end: 0.18, position: 'centered',
            content: (
              <>
                <h2 className="font-display text-5xl md:text-7xl font-bold mb-4">FORTIS Eye 360°</h2>
              </>
            )
          },
          {
            start: 0.22, end: 0.38, position: 'bottom-left',
            content: (
              <>
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-2">4K Ultra HD</h3>
                <p className="text-xl text-text-secondary">Every pixel matters.</p>
              </>
            )
          },
          {
            start: 0.42, end: 0.58, position: 'right',
            content: (
              <>
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-2">Night vision</h3>
                <p className="text-xl text-text-secondary">Clear visibility up to 50 meters.</p>
              </>
            )
          },
          {
            start: 0.62, end: 0.75, position: 'bottom-center',
            content: (
              <div className="flex flex-col items-center">
                <span className="text-xl mb-6">From $349</span>
                <div className="flex gap-4">
                  <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors">Learn More</button>
                  <button className="bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-accent/90 transition-colors">Buy</button>
                </div>
              </div>
            )
          }
        ]}
      />
      
      {/* Transition Breath */}
      <div className="h-[30vh] bg-brand-dark w-full" />
      
      {/* Product 2: Bullet Camera */}
      <CinematicProduct 
        heightClass="h-[400vh]"
        imageSrc="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=2400&q=80"
        layers={[
          {
            start: 0.05, end: 0.25, position: 'centered',
            content: <h2 className="font-display text-4xl md:text-6xl font-bold">Sentinel Pro</h2>
          },
          {
            start: 0.3, end: 0.5, position: 'left',
            content: (
              <>
                <h3 className="font-display text-3xl font-bold mb-4">AI detects.<br/>You decide.</h3>
                <ul className="text-text-secondary space-y-2 text-lg">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Vehicle tracking</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Facial recognition</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Package detection</li>
                </ul>
              </>
            )
          },
          {
            start: 0.55, end: 0.7, position: 'right',
            content: <h3 className="font-display text-3xl font-bold">IP67.<br/>-40°C to 60°C.<br/>Indestructible.</h3>
          },
          {
            start: 0.75, end: 0.9, position: 'bottom-center',
            content: (
              <div className="flex flex-col items-center">
                <span className="text-xl mb-6">From $499</span>
                <button className="bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-accent/90 transition-colors">Buy</button>
              </div>
            )
          }
        ]}
      />
      
      <div className="h-[30vh] bg-brand-dark w-full" />
      
      {/* Product 3: Alarm Panel */}
      <CinematicProduct 
        heightClass="h-[400vh]"
        imageSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=2400&q=80"
        layers={[
          {
            start: 0.05, end: 0.25, position: 'centered',
            content: <h2 className="font-display text-4xl md:text-6xl font-bold">FORTIS Shield</h2>
          },
          {
            start: 0.3, end: 0.5, position: 'right',
            content: (
              <>
                <h3 className="font-display text-3xl font-bold mb-2">64 zones.</h3>
                <p className="text-xl text-text-secondary">Zero blind spots.</p>
              </>
            )
          },
          {
            start: 0.55, end: 0.75, position: 'left',
            content: <h3 className="font-display text-4xl font-bold">One touch.<br/>Total lockdown.</h3>
          },
          {
            start: 0.8, end: 0.9, position: 'bottom-center',
            content: (
              <div className="flex flex-col items-center">
                <span className="text-xl mb-6">From $299</span>
                <button className="bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-accent/90 transition-colors">Buy</button>
              </div>
            )
          }
        ]}
      />
      
      <div className="h-[30vh] bg-brand-dark w-full" />
      
      {/* Product 4: Smart Lock */}
      <CinematicProduct 
        heightClass="h-[400vh]"
        imageSrc="https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=2400&q=80"
        layers={[
          {
            start: 0.05, end: 0.25, position: 'centered',
            content: <h2 className="font-display text-4xl md:text-6xl font-bold">FORTIS Lock X</h2>
          },
          {
            start: 0.3, end: 0.45, position: 'left',
            content: <h3 className="font-display text-3xl font-bold">Your fingerprint<br/>is the key.</h3>
          },
          {
            start: 0.5, end: 0.7, position: 'right',
            content: (
              <>
                <h3 className="font-display text-3xl font-bold mb-4">Three ways in.<br/>Zero ways past.</h3>
                <ul className="text-text-secondary space-y-2 text-lg">
                  <li className="flex items-center gap-2 justify-end">Biometric <span className="w-1.5 h-1.5 rounded-full bg-accent"></span></li>
                  <li className="flex items-center gap-2 justify-end">Face ID <span className="w-1.5 h-1.5 rounded-full bg-accent"></span></li>
                  <li className="flex items-center gap-2 justify-end">Dynamic PIN <span className="w-1.5 h-1.5 rounded-full bg-accent"></span></li>
                </ul>
              </>
            )
          },
          {
            start: 0.75, end: 0.9, position: 'bottom-center',
            content: (
              <div className="flex flex-col items-center">
                <span className="text-xl mb-6">From $249</span>
                <button className="bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-accent/90 transition-colors">Buy</button>
              </div>
            )
          }
        ]}
      />
      
      <div className="h-[30vh] bg-brand-dark w-full" />
      
      {/* Product 5: NVR Core */}
      <CinematicProduct 
        heightClass="h-[400vh]"
        imageSrc="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=2400&q=80"
        layers={[
          {
            start: 0.05, end: 0.25, position: 'centered',
            content: <h2 className="font-display text-4xl md:text-6xl font-bold">FORTIS NVR Core</h2>
          },
          {
            start: 0.3, end: 0.45, position: 'bottom-left',
            content: <h3 className="font-display text-3xl font-bold leading-tight">16 channels.<br/>4K recording.<br/>AI timeline search.</h3>
          },
          {
            start: 0.5, end: 0.75, position: 'centered',
            content: (
              <div className="bg-surface-dark border border-white/10 p-6 rounded-2xl shadow-2xl backdrop-blur-md inline-block max-w-[90vw]">
                <h3 className="font-display text-2xl font-bold mb-2">Find any moment in seconds.</h3>
                <div className="h-2 w-full bg-white/5 rounded-full mt-6 overflow-hidden flex">
                  <div className="h-full bg-white/10 w-1/4"></div>
                  <div className="h-full bg-accent w-2"></div>
                  <div className="h-full bg-white/10 w-2/4"></div>
                  <div className="h-full bg-accent w-2"></div>
                  <div className="h-full bg-white/10 w-1/4"></div>
                </div>
              </div>
            )
          },
          {
            start: 0.8, end: 0.9, position: 'bottom-center',
            content: (
              <div className="flex flex-col items-center">
                <span className="text-xl mb-6">From $899</span>
                <button className="bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-accent/90 transition-colors">Buy</button>
              </div>
            )
          }
        ]}
      />
      
      {/* Standard Sections */}
      <div className="h-[50vh] bg-brand-dark w-full" />
      
      <ProductGrid />
      <Features />
      <Stats />
      <FinalCTA />
      <Footer />
      
    </div>
  );
}

