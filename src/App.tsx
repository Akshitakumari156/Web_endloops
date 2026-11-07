import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { TwoTierShowcase } from './components/TwoTierShowcase';
import { InteractiveSandbox } from './components/InteractiveSandbox';
import { TechCapabilities } from './components/TechCapabilities';
import { AudienceTargeting } from './components/AudienceTargeting';
import { OriginStory } from './components/OriginStory';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { DesignNoteModal } from './components/DesignNoteModal';
import { ProductItem } from './types';

export function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isDesignNoteOpen, setIsDesignNoteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [demoProductContext, setDemoProductContext] = useState<string | undefined>(undefined);

  const handleOpenDemo = (productName?: string) => {
    setDemoProductContext(productName);
    setIsDemoModalOpen(true);
  };

  const handleJumpToSandbox = () => {
    const el = document.getElementById('sandbox');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col selection:bg-teal-500 selection:text-white">
      {/* Navigation */}
      <Navbar
        onOpenDemo={() => handleOpenDemo()}
        onOpenDesignNote={() => setIsDesignNoteOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenDemo={() => handleOpenDemo()}
          onJumpToSandbox={handleJumpToSandbox}
        />

        {/* Operating Philosophy & Human-in-the-loop Pipeline */}
        <Philosophy />

        {/* Two-Tier Product Architecture Showcase */}
        <TwoTierShowcase
          onSelectProduct={(prod) => setSelectedProduct(prod)}
          onOpenDemo={() => handleOpenDemo()}
        />

        {/* Live Interactive Auditor Sandbox */}
        <InteractiveSandbox />

        {/* Five Technology Pillars */}
        <TechCapabilities />

        {/* Sector Personas (Audit Firms, Corporate Finance, Property Managers) */}
        <AudienceTargeting
          onOpenDemo={() => handleOpenDemo()}
        />

        {/* Origin Story: Alkazim & Dubai Roots */}
        <OriginStory
          onOpenDemo={() => handleOpenDemo()}
        />
      </main>

      {/* Footer */}
      <Footer
        onSelectProduct={(prod) => setSelectedProduct(prod)}
        onOpenDemo={() => handleOpenDemo()}
        onOpenDesignNote={() => setIsDesignNoteOpen(true)}
      />

      {/* Interactive Modals */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        preselectedProduct={demoProductContext}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenDemo={(prodName) => handleOpenDemo(prodName)}
      />

      <DesignNoteModal
        isOpen={isDesignNoteOpen}
        onClose={() => setIsDesignNoteOpen(false)}
      />
    </div>
  );
}

export default App;
