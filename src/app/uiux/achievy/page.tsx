"use client";

import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const content = {
  ja: {
    hero: {
      title: 'Achievy',
      subtitle: 'ADHD学生のためのタスク管理アプリ',
      tagline: '「圧倒されず、自信を積み重ねる」体験をデザイン',
    },
    background: {
      title: '背景・課題',
      text:
        '「やるべきことが多すぎて、何から手をつけていいかわからない」\nADHD傾向の大学生は、自己管理やタスク分割、時間感覚、感情コントロールに日々苦労しています。\n既存のタスク管理アプリは、神経多様性や"圧倒されやすさ"に十分配慮されていません。\n\nUI/UXデザイナーとして、\n「小さな成功体験を積み重ね、自信を持てるプロダクト」を目指しました。',
    },
    research: {
      title: 'リサーチ・共感',
      text:
        '7名の教師、1名のソーシャルワーカー、1名の保健師、2名のADHD学生にインタビュー。\n「どんな時に困るのか」「どんなサポートが嬉しいか」を深掘りし、\n・タスクを細かく分けて見える化\n・今日やることだけを通知\n・達成時にポジティブなフィードバック\nなど、共感に基づく支援のヒントを抽出しました。',
    },
    insight: {
      title: 'インサイト・How Might We',
      text:
        '「どうすればADHD学生が圧倒されずにタスクを管理できるか？」\n「どうすれば小さな成功体験を積み重ね、自信を持てるか？」\n\n共感から生まれた問いを軸に、体験設計を進めました。',
      hmw: [
        'タスクを細分化し、進捗を可視化する',
        '今日やるべきことだけを通知し、圧倒感を減らす',
        '達成時に「できた！」を実感できる演出を加える',
      ],
    },
    ideation: {
      title: 'アイデア創出・発散',
      text:
        'Lightning Demosで参考アプリを分析し、Crazy 8で8分間に8案のスケッチを作成。\n「どんなUIなら"友達のように寄り添える"か？」を意識し、親しみやすさ・シンプルさ・達成感を重視した案を出しました。',
    },
    design: {
      title: '設計・反復',
      text:
        'ユーザーフロー・ワイヤーフレーム・Figmaプロトタイプを作成。\n「Add Taskボタンの目立ちやすさ」「色彩・タイムラインの一貫性」「エンゲージメント向上」など、ユーザーテストで得た気づきをもとにUIを何度も磨きました。',
    },
    testing: {
      title: 'ユーザーテスト・評価',
      text:
        'ADHD学生4名によるユーザーテストを実施。\n「アプリがToDoリストではなく、友達のような存在に感じる」と好評を得ました。\n一方で、色彩設計やエンゲージメント強化など、今後の改善点も明確になりました。',
    },
    result: {
      title: '成果・学び・今後の展望',
      text:
        'プロトタイプは「友達のようなアプリ」として高評価。\n今後は色彩設計・エンゲージメント・AI活用の強化へ。\n\nUI/UXデザイナーとしての学び：\n「ADHD支援は"共感"と"小さな成功体験"の積み重ねが鍵」。\nユーザーの声に寄り添い、プロダクトを進化させていきます。',
    },
    quote: '「アプリはToDoリストではなく、友達のような存在であるべき」',
  },
  en: {
    hero: {
      title: 'Achievy',
      subtitle: 'Task Management App for ADHD Students',
      tagline: 'Designing experiences for confidence, not overwhelm',
    },
    background: {
      title: 'Background / The Problem',
      text:
        "&quot;There are so many things to do, I don&apos;t know where to start.&quot;\nCollege students with ADHD struggle daily with self-management, task breakdown, time perception, and emotional regulation.\nMost existing task apps don&apos;t consider neurodiversity or the feeling of overwhelm.\n\nAs a UI/UX designer, I set out to create a product that helps users build confidence through small wins.",
    },
    research: {
      title: 'Research & Empathy',
      text: `Interviewed 7 teachers, 1 social worker, 1 public health nurse, and 2 ADHD students.
We dug deep into "When do you struggle?" and "What support feels good?"
Key insights: breaking tasks down, visualizing progress, only notifying today's tasks, and positive feedback for achievements.
All design ideas were rooted in empathy.`,
    },
    insight: {
      title: 'Insights & How Might We',
      text:
        'How might we help ADHD students manage tasks without overwhelm?\nHow might we help them build confidence through small wins?\n\nThese empathy-driven questions guided the experience design.',
      hmw: [
        'Break down tasks and visualize progress',
        'Notify only today&apos;s tasks to reduce overload',
        'Celebrate every achievement with positive feedback',
      ],
    },
    ideation: {
      title: 'Ideation',
      text:
        'Analyzed reference apps (Lightning Demos) and generated 8 ideas in 8 minutes (Crazy 8).\nFocused on "How can the UI feel like a supportive friend?" and prioritized approachability, simplicity, and a sense of accomplishment.',
    },
    design: {
      title: 'Design & Iteration',
      text:
        'Created user flows, wireframes, and Figma prototypes.\nIteratively improved the UI based on user testing feedback: Add Task button visibility, color consistency, timeline clarity, and engagement.',
    },
    testing: {
      title: 'Usability Testing & Evaluation',
      text:
        'Conducted user testing with 4 ADHD students.\nThe app was praised as "feels like a friend, not just a to-do list."\nWe also identified areas for improvement: color design, engagement, and more.',
    },
    result: {
      title: 'Results, Learnings & Next Steps',
      text:
        'The prototype was highly rated as "an app that feels like a friend."\nNext steps: improve color, engagement, and AI features.\n\nUI/UX designer&apos;s takeaway:\nSupporting ADHD means building empathy and celebrating small wins.\nI&apos;ll keep evolving the product with users&apos; voices at the center.',
    },
    quote: '&quot;The app should feel like a friend — not a to-do list.&quot;'
  }
};

export default function AchievyPage() {
  const [currentLang, setCurrentLang] = useState("en");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const t = content[currentLang as 'ja' | 'en'];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-100 relative overflow-x-hidden">
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />
      <main className="container mx-auto px-4 py-16">
        {/* Enhanced Hero Section */}
        <section
          ref={heroRef}
          className="relative flex items-center justify-center min-h-[600px] md:min-h-[700px] mb-20 overflow-hidden bg-gradient-to-br from-blue-100 via-cyan-100 to-indigo-100 rounded-3xl shadow-2xl border border-blue-200/30"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Animated Background Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                }}
              />
            ))}
            {[...Array(15)].map((_, i) => (
              <div
                key={`cyan-${i}`}
                className="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${1.5 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          {/* Interactive Gradient Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-200/20 via-cyan-200/20 to-indigo-200/20 transition-all duration-500"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1) 0%, rgba(6, 182, 212, 0.05) 50%, transparent 100%)`,
            }}
          />

          {/* Floating Hero Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="projects/achievy/Hero.svg"
              alt={'Achievy Hero Visual'}
              fill
              style={{ objectFit: 'cover', zIndex: 1, opacity: 0.15 }}
              className={`pointer-events-none select-none transition-transform duration-700 ${
                isHovered ? 'scale-110 rotate-2' : 'scale-100 rotate-0'
              }`}
            />
          </div>

          {/* Floating Icon with Enhanced Animation */}
          <div className="absolute top-8 right-8 md:top-12 md:right-16 z-20">
            <div className={`transition-all duration-500 ${isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}`}>
              <Image
                src="projects/achievy/achievy-icon.svg"
                alt={'Achievy icon'}
                width={64}
                height={64}
                className="drop-shadow-lg bg-white/80 rounded-full p-3 border-2 border-blue-200 animate-bounce"
                priority
              />
            </div>
            {/* Icon Glow Effect */}
            <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl animate-pulse" />
          </div>

          {/* Main Content with Enhanced Animations */}
          <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 py-16 md:py-24">
            {/* Title with Typing Animation */}
            <div className="mb-8">
              <h1 className="text-7xl md:text-9xl font-black bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent tracking-tight drop-shadow-2xl text-center animate-slideInLeft">
                {t.hero.title.split('').map((char, index) => (
                  <span
                    key={index}
                    className="inline-block animate-bounce"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {char}
                  </span>
                ))}
              </h1>
            </div>

            {/* Subtitle with Enhanced Styling */}
            <div className="mb-6 transform transition-all duration-500 hover:scale-105">
              <h2 className="text-2xl md:text-4xl text-gray-900/90 font-bold tracking-wide drop-shadow-lg text-center backdrop-blur-md px-8 py-4 rounded-3xl bg-white/60 border border-white/30 animate-fadeIn delay-300">
                <span className="text-gray-800">{t.hero.subtitle.split(' for ')[0]}</span>
                <span className="inline-block mx-3 text-blue-700 font-extrabold bg-gradient-to-r from-blue-100 to-cyan-100 px-4 py-2 rounded-full border-2 border-blue-200 shadow-lg transform hover:scale-110 transition-transform duration-200">
                  for
                </span>
                <span className="text-gray-800">{t.hero.subtitle.split(' for ')[1]}</span>
              </h2>
            </div>

            {/* Tagline with Floating Animation */}
            <div className="transform transition-all duration-500 hover:scale-105">
              <p className="text-xl md:text-3xl text-blue-700 font-semibold italic opacity-90 text-center max-w-4xl mx-auto backdrop-blur-md px-8 py-4 rounded-3xl bg-white/40 border border-white/20 animate-fadeIn delay-500 shadow-lg">
                {t.hero.tagline}
              </p>
            </div>

            {/* Interactive Call-to-Action */}
            <div className="mt-8 animate-fadeIn delay-700">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                <span className="relative z-10">Explore the Design Process</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              </button>
            </div>
          </div>

          {/* Bottom Wave Effect */}
          <div className="absolute inset-x-0 bottom-0 h-32 md:h-48 bg-gradient-to-t from-blue-50/90 via-cyan-50/70 to-transparent pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 120C360 60 1080 180 1440 120V0H0V120Z" fill="url(#wave)" />
              <defs>
                <linearGradient id="wave" x1="0" y1="0" x2="1440" y2="120" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#e0e7ff" />
                  <stop offset="1" stopColor="#cffafe" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-1/4 left-8 md:left-16 animate-float">
            <div className="w-4 h-4 bg-blue-400/40 rounded-full" />
          </div>
          <div className="absolute top-1/3 right-12 md:right-24 animate-float delay-1000">
            <div className="w-3 h-3 bg-cyan-400/50 rounded-full" />
          </div>
          <div className="absolute bottom-1/4 left-16 md:left-32 animate-float delay-2000">
            <div className="w-2 h-2 bg-indigo-400/60 rounded-full" />
          </div>
        </section>

        {/* Design Sprint Info Section */}
        <section className="relative z-20 -mt-12 mb-20 flex flex-col items-center">
          <div className="relative flex flex-col md:flex-row justify-center items-center gap-8 bg-gradient-to-r from-blue-200/80 via-cyan-100/80 to-indigo-100/80 px-16 py-12 rounded-[2.5rem] shadow-xl border border-blue-100/40 backdrop-blur-lg animate-fadeIn max-w-5xl w-full mx-auto overflow-visible">
            <span className="text-xl font-black uppercase tracking-widest text-white bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 shadow-lg rounded-full px-8 py-3 animate-bounce absolute -top-7 left-1/2 -translate-x-1/2 z-20 border-4 border-white/60">Design Sprint</span>
            <span className="text-lg font-semibold text-blue-900 bg-white/80 rounded-full px-8 py-3 shadow-md animate-fadeIn delay-100">5-day Process</span>
            <span className="text-lg font-semibold text-cyan-900 bg-cyan-100/90 rounded-full px-8 py-3 shadow-md animate-fadeIn delay-200">Role: <span className="font-bold">Decider</span></span>
          </div>
          <p className="mt-8 text-xl text-gray-800 text-center max-w-2xl animate-fadeIn delay-300 font-semibold italic">
            I led the team as the <span className="text-blue-700 font-bold">Decider</span>, guiding ideation, voting, and final product decisions in a fast-paced, collaborative environment.<br/>
            <span className="text-cyan-600 font-bold">Google Design Sprint</span> allowed us to go from challenge to tested prototype in just 5 days.<br/>
            <span className="text-sm text-gray-600 mt-2 block">
              Based on <a href="https://www.thesprintbook.com/the-design-sprint" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">The Design Sprint methodology</a> by Jake Knapp & John Zeratsky.<br/>
              Our sprint documentation and process tracked on <a href="https://coda.io/d/Group3-Design-Sprint_d7y1CAtYe0g/The-Official-5-Day-Design-Sprint_supbBBqR" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Coda.io</a>.
            </span>
          </p>
          <svg className="w-full h-12 md:h-16 -mb-2 animate-float opacity-70" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 60C360 0 1080 120 1440 60V0H0V60Z" fill="url(#sprintwave)"/><defs><linearGradient id="sprintwave" x1="0" y1="0" x2="1440" y2="60" gradientUnits="userSpaceOnUse"><stop stopColor="#e0e7ff"/><stop offset="1" stopColor="#cffafe"/></linearGradient></defs></svg>
        </section>

        {/* Design Sprint Details Section */}
        <section className="mb-20 flex flex-col items-center animate-fadeIn">
          <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-100 rounded-3xl shadow-xl border border-blue-100/40 p-8 max-w-5xl w-full mx-auto flex flex-col items-center gap-8 hover:shadow-2xl transition hover-lift">
            <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 bg-clip-text text-transparent mb-2 tracking-tight drop-shadow-xl text-center animate-slideInLeft">
              Our Design Sprint Journey
            </h3>

            {/* 5-Day Process Overview */}
            <div className="w-full max-w-4xl animate-fadeIn delay-100">
              <h4 className="text-xl font-bold text-blue-700 mb-6 text-center">The 5-Day Sprint Process</h4>
              <div className="grid md:grid-cols-5 gap-4">
                {[
                  { day: 'Monday', title: 'Map', desc: 'Define the problem and create a user journey map' },
                  { day: 'Tuesday', title: 'Sketch', desc: 'Generate solutions through Lightning Demos & Crazy 8' },
                  { day: 'Wednesday', title: 'Decide', desc: 'Choose the best solutions and create storyboard' },
                  { day: 'Thursday', title: 'Prototype', desc: 'Build a realistic prototype in Figma' },
                  { day: 'Friday', title: 'Test', desc: 'Validate with 5 target users' }
                ].map((item, i) => (
                  <div key={i} className="bg-white/70 rounded-2xl p-4 shadow-md border border-blue-100/30 hover:shadow-lg transition-shadow text-center">
                    <div className="text-sm font-bold text-blue-600 mb-1">{item.day}</div>
                    <div className="text-lg font-bold text-blue-800 mb-2">{item.title}</div>
                    <div className="text-sm text-gray-700">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Resources */}
            <div className="w-full max-w-4xl animate-fadeIn delay-200">
              <h4 className="text-xl font-bold text-blue-700 mb-6 text-center">Tools & Resources</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/70 rounded-2xl p-6 shadow-md border border-blue-100/30 hover:shadow-lg transition-shadow">
                  <h5 className="text-lg font-bold text-blue-800 mb-3">Methodology & Documentation</h5>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-blue-500 text-xl">📚</span>
                      <a href="https://www.thesprintbook.com/the-design-sprint" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-medium">
                        The Design Sprint by Jake Knapp & John Zeratsky
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-blue-500 text-xl">📋</span>
                      <a href="https://coda.io/d/Group3-Design-Sprint_d7y1CAtYe0g/The-Official-5-Day-Design-Sprint_supbBBqR" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-medium">
                        Our Sprint Documentation on Coda.io
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-white/70 rounded-2xl p-6 shadow-md border border-blue-100/30 hover:shadow-lg transition-shadow">
                  <h5 className="text-lg font-bold text-blue-800 mb-3">Design & Prototyping</h5>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-blue-500 text-xl">🎨</span>
                      <span className="text-gray-800 font-medium">Figma for prototyping</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-blue-500 text-xl">✏️</span>
                      <span className="text-gray-800 font-medium">Pen & paper for sketching</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-blue-500 text-xl">📱</span>
                      <span className="text-gray-800 font-medium">User testing with real devices</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team & Role */}
            <div className="w-full max-w-4xl animate-fadeIn delay-300">
              <h4 className="text-xl font-bold text-blue-700 mb-6 text-center">Team & My Role</h4>
              <div className="bg-white/70 rounded-2xl p-6 shadow-md border border-blue-100/30 hover:shadow-lg transition-shadow text-center">
                <p className="text-lg text-gray-800 mb-4">
                  As the <span className="text-blue-700 font-bold">Decider</span>, I led the team through critical decision-making moments,
                  ensuring we stayed focused and moved efficiently through each phase of the sprint.
                </p>
                <p className="text-gray-700">
                  Our diverse team brought together different perspectives and skills,
                  allowing us to tackle the ADHD student challenge from multiple angles
                  and create a solution that truly addresses user needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Final Solution Section (Prototype) */}
        <section className="mb-20 flex flex-col items-center animate-fadeIn">
          <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-100 rounded-3xl shadow-xl border border-blue-100/40 p-8 max-w-5xl w-full mx-auto flex flex-col items-center gap-6 hover:shadow-2xl transition hover-lift">
            <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 bg-clip-text text-transparent mb-2 tracking-tight drop-shadow-xl text-center animate-slideInLeft">
              The Final Solution
            </h3>
            <p className="text-lg text-gray-700 text-center max-w-2xl animate-fadeIn delay-100 font-medium">
              Explore the interactive prototype that brings all our ideas to life. This is the culmination of our 5-day sprint—tested, refined, and ready to inspire confidence for ADHD students.<br/>
              <span className="text-blue-700 font-bold">Try the Figma prototype below!</span>
            </p>
            <div className="flex justify-center w-full animate-fadeIn delay-200">
              <iframe
                style={{ border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '1rem', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
                width="800"
                height="450"
                src="https://embed.figma.com/proto/KvN4jj4vxZxKCYMOcljRlI/Kento_Nene_Sayumi_Inori_DesignSprint?page-id=12751%3A7378&node-id=12754-12361&embed-host=share"
                allowFullScreen
                title="Achievy Figma Prototype"
              />
            </div>
          </div>
        </section>

        {/* Results, Learnings & Next Steps - 読みたくなるデザイン */}
        <section className="mb-20 flex flex-col items-center animate-fadeIn">
          <div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 rounded-3xl shadow-xl border border-blue-100/40 p-8 max-w-5xl w-full mx-auto flex flex-col items-center gap-6 hover:shadow-2xl transition hover-lift">
            <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent mb-2 tracking-tight drop-shadow-xl text-center animate-slideInLeft">
              {t.result.title}
            </h3>
            <p className="text-lg text-gray-800 text-center max-w-2xl animate-fadeIn delay-100 font-medium leading-relaxed">
              <span className="block text-xl font-bold text-blue-700 mb-2">What did we learn? What&apos;s next?</span>
              <span className="block mb-2">{t.result.text.split('\n')[0]}</span>
              <span className="block mb-2 text-cyan-700 font-semibold">{t.result.text.split('\n')[1]}</span>
              <span className="block italic text-gray-600">{t.result.text.split('\n').slice(2).join(' ')}</span>
            </p>
          </div>
        </section>

        {/* サイトマップ画像セクション */}
        <section className="mb-20 flex flex-col items-center animate-fadeIn">
          <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-100 rounded-3xl shadow-xl border border-blue-100/40 p-8 max-w-5xl w-full mx-auto flex flex-col items-center gap-6 hover:shadow-2xl transition hover-lift">
            <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2 tracking-tight drop-shadow-xl text-center animate-slideInLeft">
              Sitemap
            </h3>
            <p className="text-lg text-gray-700 text-center max-w-2xl animate-fadeIn delay-100 font-medium">
              The blueprint of our app&apos;s structure—every screen, every flow, every interaction designed with ADHD students in mind.<br/>
              <span className="text-blue-700 font-bold">See how we organized the experience!</span>
            </p>
            <div className="flex justify-center w-full animate-fadeIn delay-200">
              <Image
                src="projects/achievy/sitemap.svg"
                alt={'Achievy Sitemap'}
                width={600}
                height={800}
                className="rounded-2xl shadow-2xl border border-blue-100/30 hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* Background / Problem */}
        <section className="mb-20 flex flex-col items-center animate-fadeIn">
          <div className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-100 rounded-3xl shadow-xl border border-orange-100/40 p-8 max-w-5xl w-full mx-auto flex flex-col items-center gap-6 hover:shadow-2xl transition hover-lift">
            <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent mb-2 tracking-tight drop-shadow-xl text-center animate-slideInLeft">
              {t.background.title}
            </h3>
            <p className="text-lg text-gray-800 text-center max-w-3xl animate-fadeIn delay-100 font-medium leading-relaxed">
              <span className="block text-xl font-bold text-red-700 mb-4">The Challenge We Faced</span>
              <span className="block mb-3 text-lg">{t.background.text.split('\n')[0]}</span>
              <span className="block mb-3 text-orange-700 font-semibold">{t.background.text.split('\n')[1]}</span>
              <span className="block mb-3 text-yellow-700 font-semibold">{t.background.text.split('\n')[2]}</span>
              <span className="block italic text-gray-600">{t.background.text.split('\n').slice(3).join(' ')}</span>
            </p>
          </div>
        </section>

        {/* Research & Discovery */}
        <section className="mb-20 flex flex-col items-center animate-fadeIn">
          <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100 rounded-3xl shadow-xl border border-green-100/40 p-8 max-w-5xl w-full mx-auto flex flex-col items-center gap-6 hover:shadow-2xl transition hover-lift">
            <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent mb-2 tracking-tight drop-shadow-xl text-center animate-slideInLeft">
              {t.research.title}
            </h3>
            <p className="text-lg text-gray-800 text-center max-w-3xl animate-fadeIn delay-100 font-medium leading-relaxed">
              <span className="block text-xl font-bold text-green-700 mb-4">Understanding the Real Needs</span>
              <span className="block mb-3">{t.research.text.split('\n')[0]}</span>
              <span className="block mb-3 text-emerald-700 font-semibold">{t.research.text.split('\n')[1]}</span>
              <span className="block mb-3 text-teal-700 font-semibold">{t.research.text.split('\n')[2]}</span>
              <span className="block italic text-gray-600">{t.research.text.split('\n').slice(3).join(' ')}</span>
            </p>
            {/* Journey Map画像 */}
            <div className="w-full flex flex-col items-center animate-fadeIn delay-200">
              <span className="text-lg font-bold text-green-700 mb-4">User Journey Map</span>
              <div className="bg-white/60 rounded-2xl p-8 shadow-2xl border border-green-100/30 hover:shadow-3xl transition-shadow">
                <Image
                  src="projects/achievy/map.svg"
                  alt={'Journey Map'}
                  width={600}
                  height={300}
                  className="rounded-xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Insights & HMW */}
        <section className="mb-20 flex flex-col items-center animate-fadeIn">
          <div className="bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-100 rounded-3xl shadow-xl border border-purple-100/40 p-8 max-w-5xl w-full mx-auto flex flex-col items-center gap-6 hover:shadow-2xl transition hover-lift">
            <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent mb-2 tracking-tight drop-shadow-xl text-center animate-slideInLeft">
              {t.insight.title}
            </h3>
            <p className="text-lg text-gray-800 text-center max-w-3xl animate-fadeIn delay-100 font-medium leading-relaxed">
              <span className="block text-xl font-bold text-purple-700 mb-4">The Key Questions That Guided Us</span>
              <span className="block mb-3">{t.insight.text.split('\n')[0]}</span>
              <span className="block mb-3 text-violet-700 font-semibold">{t.insight.text.split('\n')[1]}</span>
              <span className="block mb-4 italic text-gray-600">{t.insight.text.split('\n').slice(2).join(' ')}</span>
            </p>
            <div className="w-full max-w-3xl animate-fadeIn delay-200">
              <h4 className="text-xl font-bold text-purple-700 mb-4 text-center">Our &quot;How Might We&quot; Statements</h4>
              <div className="grid gap-4">
                {t.insight.hmw.map((item, i) => (
                  <div key={i} className="bg-white/60 rounded-2xl p-4 shadow-md border border-purple-100/30 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl font-bold text-purple-500 bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center text-sm">
                        {i + 1}
                      </span>
                      <p className="text-lg text-gray-800 font-medium">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ideation */}
        <section className="mb-20 flex flex-col items-center animate-fadeIn">
          <div className="bg-gradient-to-br from-pink-50 via-rose-50 to-red-100 rounded-3xl shadow-xl border border-pink-100/40 p-8 max-w-5xl w-full mx-auto flex flex-col items-center gap-6 hover:shadow-2xl transition hover-lift">
            <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 bg-clip-text text-transparent mb-2 tracking-tight drop-shadow-xl text-center animate-slideInLeft">
              {t.ideation.title}
            </h3>
            <p className="text-lg text-gray-800 text-center max-w-3xl animate-fadeIn delay-100 font-medium leading-relaxed">
              <span className="block text-xl font-bold text-pink-700 mb-4">From Lightning Speed to Crazy Ideas</span>
              <span className="block mb-3">{t.ideation.text.split('\n')[0]}</span>
              <span className="block mb-3 text-rose-700 font-semibold">{t.ideation.text.split('\n')[1]}</span>
              <span className="block italic text-gray-600">{t.ideation.text.split('\n').slice(2).join(' ')}</span>
            </p>
            {/* Lightning Demos, Crazy 8画像 */}
            <div className="w-full grid md:grid-cols-2 gap-8 justify-center animate-fadeIn delay-200">
              <div className="flex flex-col items-center bg-white/60 rounded-2xl p-6 shadow-md border border-pink-100/30 hover:shadow-lg transition-shadow">
                <span className="text-lg font-bold text-pink-700 mb-4">Crazy 8 Sketch</span>
                <Image
                  src="projects/achievy/crazy8.jpg"
                  alt={'Crazy 8 Sketch'}
                  width={400}
                  height={200}
                  className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col items-center bg-white/60 rounded-2xl p-6 shadow-md border border-pink-100/30 hover:shadow-lg transition-shadow">
                <span className="text-lg font-bold text-pink-700 mb-4">Lightning Demos</span>
                <Image
                  src="projects/achievy/LightningDemos.svg"
                  alt={'Lightning Demos'}
                  width={400}
                  height={200}
                  className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Design & Iteration */}
        <section className="mb-20 flex flex-col items-center animate-fadeIn">
          <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-100 rounded-3xl shadow-xl border border-amber-100/40 p-8 max-w-5xl w-full mx-auto flex flex-col items-center gap-6 hover:shadow-2xl transition hover-lift">
            <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent mb-2 tracking-tight drop-shadow-xl text-center animate-slideInLeft">
              {t.design.title}
            </h3>
            <p className="text-lg text-gray-800 text-center max-w-3xl animate-fadeIn delay-100 font-medium leading-relaxed">
              <span className="block text-xl font-bold text-amber-700 mb-4">From Wireframes to Working Prototypes</span>
              <span className="block mb-3">{t.design.text.split('\n')[0]}</span>
              <span className="block mb-3 text-yellow-700 font-semibold">{t.design.text.split('\n')[1]}</span>
              <span className="block italic text-gray-600">{t.design.text.split('\n').slice(2).join(' ')}</span>
            </p>
            {/* Storyboard, Prototype画像 */}
            <div className="w-full grid md:grid-cols-2 gap-8 justify-center animate-fadeIn delay-200">
              <div className="flex flex-col items-center bg-white/60 rounded-2xl p-6 shadow-md border border-amber-100/30 hover:shadow-lg transition-shadow">
                <span className="text-lg font-bold text-amber-700 mb-4">Storyboard</span>
                <Image
                  src="projects/achievy/storyboard.svg"
                  alt={'Storyboard'}
                  width={400}
                  height={200}
                  className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col items-center bg-white/60 rounded-2xl p-6 shadow-md border border-amber-100/30 hover:shadow-lg transition-shadow">
                <span className="text-lg font-bold text-amber-700 mb-4">Prototype Screen</span>
                <Image
                  src="projects/achievy/prototype.svg"
                  alt={'Prototype Screen'}
                  width={400}
                  height={200}
                  className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Usability Testing & Evaluation */}
        <section className="mb-20 flex flex-col items-center animate-fadeIn">
          <div className="bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-100 rounded-3xl shadow-xl border border-slate-100/40 p-8 max-w-5xl w-full mx-auto flex flex-col items-center gap-6 hover:shadow-2xl transition hover-lift">
            <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-slate-500 via-gray-500 to-zinc-500 bg-clip-text text-transparent mb-2 tracking-tight drop-shadow-xl text-center animate-slideInLeft">
              {t.testing.title}
            </h3>
            <p className="text-lg text-gray-800 text-center max-w-3xl animate-fadeIn delay-100 font-medium leading-relaxed">
              <span className="block text-xl font-bold text-slate-700 mb-4">Putting Our Ideas to the Test</span>
              <span className="block mb-3">{t.testing.text.split('\n')[0]}</span>
              <span className="block mb-3 text-gray-700 font-semibold">{t.testing.text.split('\n')[1]}</span>
              <span className="block mb-3 text-zinc-700 font-semibold">{t.testing.text.split('\n')[2]}</span>
              <span className="block italic text-gray-600">{t.testing.text.split('\n').slice(3).join(' ')}</span>
            </p>
            <div className="w-full max-w-2xl animate-fadeIn delay-200">
              <div className="bg-white/60 rounded-2xl p-6 shadow-md border border-slate-100/30 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-bold text-slate-700 mb-3 text-center">Key Testing Insights</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <p className="text-gray-800">&quot;Feels like a friend, not just a to-do list&quot;</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 text-xl">💡</span>
                    <p className="text-gray-800">Areas for improvement: color design, engagement</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-500 text-xl">🎯</span>
                    <p className="text-gray-800">User feedback validated our core concept</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote / Testimonial - キャッチーな演出 */}
        <section className="mb-20 flex flex-col items-center animate-fadeIn">
          <div className="bg-gradient-to-r from-blue-100 via-cyan-50 to-indigo-100 rounded-2xl shadow-lg border border-blue-100/40 p-8 max-w-5xl w-full mx-auto flex flex-col items-center gap-4 hover:shadow-2xl transition hover-lift">
            <span className="text-2xl md:text-3xl font-extrabold text-blue-700 italic text-center animate-slideInLeft">{t.quote}</span>
            <span className="text-base text-gray-500 text-center animate-fadeIn delay-100">— User Feedback</span>
          </div>
        </section>
      </main>
      <Footer currentLang={currentLang} />
    </div>
  );
}