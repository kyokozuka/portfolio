import { useState } from "react";
import History from "../Components/History";
import HistoryModal from "../Components/HistoryModal";
import SectionTitle from "../Components/SectionTitle";
import SkillList from "../Components/SkillList";
import histories from "../data/histories";
import skills from "../data/skill";
import { SelectedCareerType } from "../types/profile";



const Home = () => {
  const [selectedCareer, setSelectedCareer] = useState<null | SelectedCareerType>(null);

  return (
    <>
      <SectionTitle id='profile' title="PROFILE" />
      <div className="flex flex-col items-center pb-8">
        <h1 className="text-4xl font-bold">Kento Yokozuka</h1>
        <h2 className="text-2xl font-bold mt-4">Software Developer Engineer</h2>
        <i>
          <img
            src="src/assets/profile.jpg"
            alt="Kento Yokozuka"
            className="rounded-full object-cover w-40 h-40 mt-8"
          />
        </i>
        <article className="text-wrap font-bold mt-8 w-230">
          <p className="whitespace-pre-line">
            Passionate Software Engineer with 8+ years of experience in developing web systems and backend systems.
            Skilled at writing clear code that is easy to maintain and troubleshoot.
            Experienced in working with both small and large teams across multiple projects and companies.
            Able to work independently of remote locations or in office environments as needed by the company.
          </p>
        </article>
      </div>

      <SectionTitle id='skills' title="SKILLS" />
      <div className="flex flex-col items-right mt-2 mb-8 w-230">
        <label className="mt-4 mb-4">About %</label>
        <ul className="list-disc list-inside mb-4">
          <li className="text-m text-gray-200 mt-2">0%: No experience</li>
          <li className="text-m text-gray-200 mt-2">20%: Basic self-taught knowledge level</li>
          <li className="text-m text-gray-200 mt-2">40%: Capable of building applications or tools through personal projects</li>
          <li className="text-m text-gray-200 mt-2">60%: Experienced in working in a team environment with hands-on development, testing, and debugging</li>
          <li className="text-m text-gray-200 mt-2">80%: 3+ years of experience, capable of handling design, development, and code reviews</li>
          <li className="text-m text-gray-200 mt-2">100%: Extensive experience leading technical decisions, architecture design, and mentoring developers</li>
        </ul>
        <div className="flex flex-row flex-wrap items-right mt-2">
          {skills.map((skill) => (
            <SkillList
              name={skill.name}
              values={skill.value}
            />
          ))}
        </div>
      </div >

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

      {
        selectedCareer && (
          <HistoryModal
            year={selectedCareer.year}
            title={selectedCareer.title}
            company={selectedCareer.company}
            place={selectedCareer.place}
            description={selectedCareer.description}
            onClose={() => setSelectedCareer(null)}
            stopPropagation={(e) => e.stopPropagation()}
          />
        )
      }

      <div className="flex flex-row flex-wrap items-center mb-8 mt-16 w-230">
        {histories.map((history) => (
          <History
            year={history.year}
            title={history.title}
            company={history.company}
            place={history.place}
            onClick={() => setSelectedCareer({
              year: history.year,
              title: history.title,
              company: history.company,
              place: history.place,
              description: history.description
            })} />
        ))}
      </div>

      <SectionTitle id='contact' title="CONTACT" />
      <div className="flex justify-center items-center gap-4 pb-10">
        <a
          href="https://www.linkedin.com/in/kento-yokozuka-26a1731b4/"
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
          href="https://x.com/4kzknt"
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