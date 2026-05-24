import Background3D from "@/components/Background3D";
import Hero from "@/components/Hero";
import AiDashboard from "@/components/AiDashboard";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Background3D />
      
      {/* Interactive content overlays */}
      <Hero />
      <AiDashboard />
      <Skills />
      <Projects />
      
      <section className="py-24 px-6 text-center text-zinc-500 text-sm z-10 relative">
        <p>&copy; {new Date().getFullYear()} Ahmad Ilyas. All Systems Operational.</p>
      </section>
    </main>
  );
}
