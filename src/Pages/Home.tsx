import { useState } from "react";
import History from "../Components/History";
import HistoryModal from "../Components/HistoryModal";
import SectionTitle from "../Components/SectionTitle";
import SkillList from "../Components/SkillList";
import histories from "../data/histories";
import skills from "../data/skill";

const Home = () => {
  const [selectedCareer, setSelectedCareer] = useState<null | { year: string, title: string, description: string }>(null);

  return (
    <>
      <SectionTitle id='profile' title="PROFILE" />
      <div className="flex flex-col items-center pb-8">
        <h1 className="text-4xl font-bold">Kento Yokozuka</h1>
        <h2 className="text-2xl font-bold mt-4">Software Developer Engineer</h2>
        <i>
          <img
            src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            alt="Kento Yokozuka"
            className="rounded-full object-cover w-40 h-40 mt-8"
          />
        </i>
        <article className="text-wrap font-bold mt-8 w-230">
          <p className="whitespace-pre-line">
            Passionate Software Engineer with 8+ years of experience in developing web systems and backend systems. Skilled at writing clear code that is easy to maintain and troubleshoot. Experienced in working with both small and large teams across multiple projects and companies. Able to work independently of remote locations or in office environments as needed by the company.
          </p>
        </article>
      </div>

      <SectionTitle id='skills' title="SKILLS" />
      <div className="flex flex-col items-right mt-2 mb-8 w-230">
        <div className="flex flex-row flex-wrap items-right mt-2">
          {skills.map((skill) => (
            <SkillList
              name={skill.name}
              values={skill.value}
            />
          ))}
        </div>
      </div>

      <SectionTitle id='certification' title="CERTIFICATION" />
      <div className="flex flex-col items-center mt-2 mb-6 w-230">
        <i>
          <img
            src="https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg"
            alt="Microsoft Certified: Azure Fundamentals"
            className="rounded-full object-cover w-40 h-40"
          />
        </i>
      </div>

      <SectionTitle id='about' title="ABOUT ME" />

      {selectedCareer && (
        <HistoryModal
          year={selectedCareer.year}
          title={selectedCareer.title}
          description={selectedCareer.description}
          onClose={() => setSelectedCareer(null)}
          stopPropagation={(e) => e.stopPropagation()}
        />
      )}

      <div className="flex flex-row flex-wrap items-center mb-8 mt-16 w-230">
        {histories.map((history) => (
          <History
            year={history.year}
            title={history.title}
            onClick={() => setSelectedCareer({
              year: history.year,
              title: history.title,
              description: history.description
            })} />
        ))}
      </div>

      <SectionTitle id='contact' title="CONTACT" />
      <div className="flex justify-center items-center gap-4 pb-10">
        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-4 hover:opacity-80 transition m-4"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
            className="w-10 h-10"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-4 hover:opacity-80 transition m-4"
        >
          <img
            src="src/assets/x.svg"
            alt="X"
            className="w-10 h-10"
          />
        </a>

        <a
          href="https://github.com/kyokozuka"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-4 hover:opacity-80 transition m-4"
        >
          <img
            src="src/assets/github-mark-white.svg"
            alt="Github"
            className="w-10 h-10"
          />
        </a>
      </div>
    </>
  );
}

export default Home;