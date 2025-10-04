import TechnicalSkills from "@/components/TechnicalSkills";
import { Locale } from "@/lib/i18n/config";

interface SoftwareSkillsSectionProps {
  title: string;
  currentLang: Locale;
}

export default function SoftwareSkillsSection({
  title,
  currentLang
}: SoftwareSkillsSectionProps) {
  return (
    <section className="mb-16 animate-slideInRight">
      <h2 className="font-display text-4xl font-bold text-white mb-12 text-center drop-shadow-lg">
        {title}
      </h2>
      <TechnicalSkills currentLang={currentLang} />
    </section>
  );
}