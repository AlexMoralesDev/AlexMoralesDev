import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
      </div>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Alex Morales Trevisan | B.S. Computer Science & Engineering,
            UPR Mayagüez
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
