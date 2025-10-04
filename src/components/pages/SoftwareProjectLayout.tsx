import ProjectHeader from "@/components/organisms/ProjectHeader";
import ProjectImage from "@/components/organisms/ProjectImage";
import ProjectInfoGrid from "@/components/organisms/ProjectInfoGrid";
import TechnicalSolutionSection from "@/components/organisms/TechnicalSolutionSection";
import TechnicalArchitectureSection from "@/components/organisms/TechnicalArchitectureSection";
import PerformanceMetricsSection from "@/components/organisms/PerformanceMetricsSection";
import ProjectNavigation from "@/components/organisms/ProjectNavigation";

interface TechnicalDetail {
  title: string;
  description: string;
  technologies: string[];
}

interface Metric {
  label: string;
  value: string;
  improvement: string;
}

interface ProjectData {
  title: string;
  subtitle: string;
  role: string;
  tools: string;
  duration: string;
  overview: string;
  finalSolution: string;
  keyFeatures: string[];
  technicalDetails: Record<string, TechnicalDetail>;
  performance: {
    title: string;
    metrics: Metric[];
  };
  back: string;
  nextProject: string;
  nextProjectLink: string;
}

interface SoftwareProjectLayoutProps {
  currentLang: string;
  setCurrentLang: (lang: string) => void;
  isLoaded: boolean;
  currentData: ProjectData;
  imageSrc: string;
  imageAlt: string;
  accentColors?: {
    from: string;
    via: string;
    to: string;
  };
}

export default function SoftwareProjectLayout({
  currentLang,
  setCurrentLang,
  isLoaded,
  currentData,
  imageSrc,
  imageAlt,
  accentColors = {
    from: 'green-400',
    via: 'emerald-400',
    to: 'blue-400'
  }
}: SoftwareProjectLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/10 via-purple-100/5 to-indigo-100/10 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <ProjectHeader
          title={currentData.title}
          subtitle={currentData.subtitle}
          overview={currentData.overview}
          isLoaded={isLoaded}
          accentColors={accentColors}
        />

        <ProjectImage src={imageSrc} alt={imageAlt} />

        <ProjectInfoGrid
          role={currentData.role}
          tools={currentData.tools}
          duration={currentData.duration}
        />

        <TechnicalSolutionSection
          description={currentData.finalSolution}
          features={currentData.keyFeatures}
        />

        <TechnicalArchitectureSection details={currentData.technicalDetails} />

        <PerformanceMetricsSection
          title={currentData.performance.title}
          metrics={currentData.performance.metrics}
        />

        <ProjectNavigation
          backText={currentData.back}
          nextText={currentData.nextProject}
          nextLink={currentData.nextProjectLink}
        />
      </div>

    </div>
  );
}
