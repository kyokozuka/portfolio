"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProjectPage() {
  const [currentLang, setCurrentLang] = useState("en");
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // --- Content (EN/JA) ---
  const content = {
    en: {
      title: "Redesign",
      subtitle: "Six Acres Restaurant",
      role: "UX/UI Designer",
      tools: "Figma, Notion",
      duration: "1 Week",
      finalSolution: "A comprehensive redesign of the Six Acres restaurant website, focused on improving usability, visual appeal, and the overall dining experience. The new design features a modern, friendly look and clear navigation, making it easy for users to find information and book a table.",
      beforeAfter: {
        welcome: { before: "/projects/sixacres/Before/Welcome.svg", after: "/projects/sixacres/After/Welcome.svg" },
        menu: { before: "/projects/sixacres/Before/Menu.svg", after: "/projects/sixacres/After/Menu.svg" },
        event: { before: "/projects/sixacres/Before/Event.svg", after: "/projects/sixacres/After/Event.svg" },
        reservation: { before: "/projects/sixacres/Before/Reservation.svg", after: "/projects/sixacres/After/Reservation.svg" },
        contact: { before: "/projects/sixacres/Before/Contact.svg", after: "/projects/sixacres/After/Contact.svg" },
      },
      process: {
        tasks: [
          "Find the happy hour time",
          "Locate the restaurant's address",
          "Discover details about the 'Good Wing Mondays' event",
          "Find the Instagram page",
          "Find out how much it costs to rent the restaurant space"
        ],
        findingsGood: [
          "Most users found the overall layout clear and appreciated the structure compared to the original version.",
          "The colorful design and improved alignment created a more lively, approachable feel.",
          "Information was easier to locate compared to the original, which had a gray, flat atmosphere."
        ],
        findingsBad: [
          "The hero image lacked contrast, making the text hard to read.",
          "The logo was not very visible. Using a bolder gold or switching to black was suggested.",
          "Users struggled to find social links like Instagram, as they were just text links without icons.",
          "Menu navigation was inconvenient due to PDF links.",
          "Some inconsistencies were noted between the location details on the contact and reservation pages.",
          "UI elements like input font size, button spacing, and section icons were cited as areas to improve.",
          "There was no clear happy hour info, and footer content (e.g. contact info) was minimal."
        ],
        styleGuide: {
          typography: "DIN Condensed for modern, minimal, slightly industrial character. Large headings, clean body text, multiple weights.",
          colors: "Warm, welcoming tones. Primary Yellow #FFF865, Deep Burgundy #6D0E0F, Cream #FFF7EB, balanced text colors.",
          buttons: "Rounded, clear, with strong contrast for CTAs."
        },
        wireframe: "Started with low-fidelity wireframes to define layout and user flow, then created high-fidelity prototypes in Figma. This allowed for realistic interaction testing and clear team communication. The goal was intuitive navigation, visual clarity, and a seamless user experience before development."
      },
      reflection: [
        "This project helped me realize how essential communication is when working on a team. Throughout the redesign process, I noticed that without consistent conversations, the project could easily drift in different directions. Aligning on a shared vision early and maintaining that alignment was key to delivering a cohesive experience.",
        "I also learned how valuable user feedback is — hearing real impressions helped me understand how each page could better serve its purpose. This shaped how I approached design decisions and deepened my sense of user empathy.",
        "Additionally, I gained hands-on experience with design tools like Figma and Notion, and I became more confident in building and applying a style guide. Establishing visual consistency through reusable components helped improve both design speed and quality.",
        "If I were to do this project again, I would spend more time upfront defining foundational elements like the style guide, component system, and user flow. That way, I could cycle through design and evaluation more effectively — leading to faster iterations and a stronger final product."
      ],
      back: "Back to UI/UX Projects",
      imageCredit: "All images are quoted from the official Six Acres website for design study purposes."
    },
    ja: {
      title: "リデザイン",
      subtitle: "Six Acres レストラン",
      role: "UX/UIデザイナー",
      tools: "Figma, Notion",
      duration: "1週間",
      finalSolution: "Six Acresレストランウェブサイトの包括的なリデザイン。使いやすさ、視覚的魅力、そして全体的な食事体験の向上に焦点を当てました。新しいデザインは、モダンで親しみやすい外観と明確なナビゲーションを特徴とし、ユーザーが情報を見つけやすく、テーブルを予約しやすくなっています。",
      beforeAfter: {
        welcome: { before: "/projects/sixacres/Before/Welcome.svg", after: "/projects/sixacres/After/Welcome.svg" },
        menu: { before: "/projects/sixacres/Before/Menu.svg", after: "/projects/sixacres/After/Menu.svg" },
        event: { before: "/projects/sixacres/Before/Event.svg", after: "/projects/sixacres/After/Event.svg" },
        reservation: { before: "/projects/sixacres/Before/Reservation.svg", after: "/projects/sixacres/After/Reservation.svg" },
        contact: { before: "/projects/sixacres/Before/Contact.svg", after: "/projects/sixacres/After/Contact.svg" },
      },
      process: {
        tasks: [
          "ハッピーアワーの時間を見つける",
          "レストランの住所を確認する",
          "'Good Wing Mondays'イベントの詳細を調べる",
          "Instagramページを見つける",
          "レストランスペースのレンタル料金を調べる"
        ],
        findingsGood: [
          "ほとんどのユーザーが全体的なレイアウトを明確だと感じ、元のバージョンと比較して構造を評価しました。",
          "カラフルなデザインと改善された配置により、より活気があり親しみやすい印象を作り出しました。",
          "元のグレーで平坦な雰囲気と比較して、情報が見つけやすくなりました。"
        ],
        findingsBad: [
          "ヒーロー画像のコントラストが不足し、テキストが読みにくい。",
          "ロゴの視認性が低い。より太いゴールドまたは黒への変更が提案されました。",
          "ユーザーがInstagramなどのソーシャルリンクを見つけるのに苦労。アイコンのないテキストリンクだったため。",
          "PDFリンクによるメニューナビゲーションが不便。",
          "連絡先ページと予約ページの場所の詳細に不整合が指摘されました。",
          "入力フォントサイズ、ボタン間隔、セクションアイコンなどのUI要素が改善点として挙げられました。",
          "ハッピーアワーの情報が明確でなく、フッターコンテンツ（連絡先情報など）が最小限でした。"
        ],
        styleGuide: {
          typography: "モダンでミニマル、やや工業的な特徴を持つDIN Condensed。大きな見出し、クリーンな本文、複数のウェイト。",
          colors: "温かく親しみやすいトーン。プライマリーイエロー #FFF865、ディープバーガンディ #6D0E0F、クリーム #FFF7EB、バランスの取れたテキストカラー。",
          buttons: "角丸で明確、CTAには強いコントラスト。"
        },
        wireframe: "レイアウトとユーザーフローを定義するための低解像度ワイヤーフレームから始め、Figmaで高解像度プロトタイプを作成しました。これにより、現実的なインタラクションテストと明確なチームコミュニケーションが可能になりました。目標は、開発前に直感的なナビゲーション、視覚的な明確さ、シームレスなユーザー体験を実現することでした。"
      },
      reflection: [
        "このプロジェクトを通じて、チームで働く際のコミュニケーションの重要性を実感しました。リデザインプロセス全体を通じて、一貫した会話がないと、プロジェクトが簡単に異なる方向に流れることに気づきました。早期に共通のビジョンに合わせ、その整合性を維持することが、一貫した体験を提供する鍵でした。",
        "また、ユーザーフィードバックの価値も学びました。実際の印象を聞くことで、各ページがより良い目的を果たす方法を理解できました。これがデザイン決定へのアプローチを形作り、ユーザーエンパシーの感覚を深めました。",
        "さらに、FigmaやNotionなどのデザインツールの実践的な経験を積み、スタイルガイドの構築と適用に自信を持つようになりました。再利用可能なコンポーネントによる視覚的一貫性の確立により、デザイン速度と品質の両方が向上しました。",
        "このプロジェクトを再度行う場合、スタイルガイド、コンポーネントシステム、ユーザーフローなどの基盤要素の定義により多くの時間を費やします。そうすることで、デザインと評価をより効果的に循環させ、より迅速な反復とより強力な最終製品につながります。"
      ],
      back: "UI/UXプロジェクトに戻る",
      imageCredit: "すべての画像はデザイン研究目的でSix Acres公式ウェブサイトから引用しています。"
    }
  };

  // Use content based on current language
  const t = content[currentLang as keyof typeof content] ?? content.en;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-orange-400/10 to-red-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-amber-400/10 to-yellow-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />

      {/* Enhanced Hero Section */}
      <section ref={heroRef} className="relative z-10 container mx-auto px-4 pt-20 pb-16">
        <div className="text-center mb-12">
          <div className="relative">
            <h1 className={`text-7xl md:text-9xl font-black bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent mb-6 tracking-tight transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {t.title.split('').map((char, index) => (
                <span
                  key={index}
                  className="inline-block animate-bounce"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {char}
                </span>
              ))}
            </h1>
            <h2 className={`text-3xl md:text-4xl font-bold text-gray-800 mb-8 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ animationDelay: '0.2s' }}>
              {t.subtitle}
            </h2>
          </div>
        </div>

        {/* Hero Image with Enhanced Styling */}
        <div className={`relative max-w-6xl mx-auto transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ animationDelay: '0.4s' }}>
          <div className="relative group">
            <Image
              src="projects/sixacres/Hero.svg"
              alt="Six Acres Redesign Hero"
              width={1200}
              height={600}
              className="rounded-3xl shadow-2xl w-full object-cover border-4 border-white/80 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </section>

      {/* Enhanced Info Cards Section */}
      <section className="relative z-10 container mx-auto px-4 pb-16">
        <div className={`flex flex-wrap gap-6 justify-center transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ animationDelay: '0.6s' }}>
          <div className="group bg-white/80 backdrop-blur-md rounded-2xl px-8 py-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 min-w-[200px] text-center">
            <div className="font-bold text-gray-700 mb-2 text-lg">My Role</div>
            <div className="text-xl font-semibold text-amber-700">{t.role}</div>
          </div>
          <div className="group bg-white/80 backdrop-blur-md rounded-2xl px-8 py-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 min-w-[200px] text-center">
            <div className="font-bold text-gray-700 mb-2 text-lg">Tools</div>
            <div className="text-xl font-semibold text-orange-700">{t.tools}</div>
          </div>
          <div className="group bg-white/80 backdrop-blur-md rounded-2xl px-8 py-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 min-w-[200px] text-center">
            <div className="font-bold text-gray-700 mb-2 text-lg">Duration</div>
            <div className="text-xl font-semibold text-yellow-700">{t.duration}</div>
          </div>
        </div>
      </section>

      {/* Enhanced Final Solution Section */}
      <section className="relative z-10 container mx-auto px-4 pb-16">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ animationDelay: '0.8s' }}>
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6 tracking-tight">
            The Final Solution
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">{t.finalSolution}</p>

          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                style={{ border: 'none' }}
                width="100%"
                height="500"
                src="https://embed.figma.com/proto/84PDR0A84Mnb6PThtQX1Ti/Design_Communication_Assigment--Copy-?page-id=241%3A2815&node-id=240-3509&viewport=2107%2C81%2C0.45&scaling=scale-down&content-scaling=fixed&embed-host=share"
                allowFullScreen
                title="Figma Prototype"
                className="rounded-3xl"
              />
            </div>
            <div className="text-sm text-gray-500 text-center py-4 bg-gradient-to-r from-amber-50 to-orange-50">
              Interactive Prototype (Figma)
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Before/After Section */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-12 text-center tracking-tight">
          Before & After
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {Object.entries(t.beforeAfter).map(([key, val]: [string, { before: string; after: string }]) => (
            <React.Fragment key={key}>
              <div className="group bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-white/50 p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="font-bold text-2xl mb-6 text-center text-red-600">Before</div>
                <div className="w-full h-96 overflow-y-auto border border-gray-200 rounded-2xl group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src={val.before}
                    alt={`Before - ${key}`}
                    width={600}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>
              </div>
              <div className="group bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-white/50 p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="font-bold text-2xl mb-6 text-center text-green-600">After</div>
                <div className="w-full h-96 overflow-y-auto border border-gray-200 rounded-2xl group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src={val.after}
                    alt={`After - ${key}`}
                    width={600}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-12 text-center tracking-tight">
          Design Process
        </h2>

        {/* Phase 1: Evaluation & Tasks */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 p-10 mb-12 max-w-5xl mx-auto hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-16 h-16 flex items-center justify-center mr-6 shadow-lg">
              <span className="text-white font-bold text-2xl">1</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Evaluation & User Tasks</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-6 text-gray-800">Tasks Given to Users</h4>
              <div className="space-y-4">
                {t.process.tasks.map((task: string) => (
                  <div key={task} className="flex items-start group">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-3 h-3 mt-3 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-gray-700 text-lg leading-relaxed">{task}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200/50">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Research Approach</h4>
              <p className="text-gray-700 text-lg leading-relaxed">
                Conducted user testing with real tasks to identify pain points and opportunities for improvement in the existing restaurant website experience.
              </p>
            </div>
          </div>
        </div>

        {/* Phase 2: Findings */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 p-10 mb-12 max-w-5xl mx-auto hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-16 h-16 flex items-center justify-center mr-6 shadow-lg">
              <span className="text-white font-bold text-2xl">2</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">User Research & Findings</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-6 text-green-700">✅ What Worked Well</h4>
              <div className="space-y-4">
                {t.process.findingsGood.map((finding: string) => (
                  <div key={finding} className="flex items-start group">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-3 h-3 mt-3 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-gray-700 text-lg leading-relaxed">{finding}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6 text-red-700">🔧 Areas for Improvement</h4>
              <div className="space-y-4">
                {t.process.findingsBad.map((finding: string) => (
                  <div key={finding} className="flex items-start group">
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-full w-3 h-3 mt-3 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-gray-700 text-lg leading-relaxed">{finding}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Phase 3: Style Guide */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 p-10 mb-12 max-w-5xl mx-auto hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-16 h-16 flex items-center justify-center mr-6 shadow-lg">
              <span className="text-white font-bold text-2xl">3</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Style Guide & Design System</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200/50">
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Typography</h4>
                <p className="text-gray-700 text-lg leading-relaxed">{t.process.styleGuide.typography}</p>
              </div>
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-6 border border-yellow-200/50">
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Color Palette</h4>
                <p className="text-gray-700 text-lg leading-relaxed">{t.process.styleGuide.colors}</p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200/50">
                <h4 className="text-xl font-semibold mb-4 text-gray-800">UI Components</h4>
                <p className="text-gray-700 text-lg leading-relaxed">{t.process.styleGuide.buttons}</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={t.beforeAfter.welcome.after}
                alt="Style Guide Example"
                width={400}
                height={300}
                className="rounded-2xl shadow-lg w-full max-w-sm object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Phase 4: Wireframing & Prototyping */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 p-10 max-w-5xl mx-auto hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full w-16 h-16 flex items-center justify-center mr-6 shadow-lg">
              <span className="text-white font-bold text-2xl">4</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Wireframing & Prototyping</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200/50">
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Design Process</h4>
                <p className="text-gray-700 text-lg leading-relaxed">{t.process.wireframe}</p>
              </div>
              <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-6 border border-gray-200/50">
                <h4 className="text-lg font-semibold mb-4 text-gray-700">Key Focus Areas</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">User Flow</span>
                  <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">Visual Hierarchy</span>
                  <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">Interaction Design</span>
                  <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">Responsive Layout</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-gray-700">Wireframes</h4>
                <div className="w-full h-48 overflow-hidden border border-gray-200 rounded-2xl hover:scale-105 transition-transform duration-500">
                  <Image
                    src="projects/sixacres/Wireframe.svg"
                    alt="Wireframes"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-gray-700">High-Fidelity Prototype</h4>
                <div className="w-full h-48 overflow-hidden border border-gray-200 rounded-2xl hover:scale-105 transition-transform duration-500">
                  <Image
                    src="projects/sixacres/Prototype.svg"
                    alt="Prototype"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Reflection & Learnings */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-12 text-center tracking-tight">
          Reflection & Learnings
        </h2>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Team Collaboration */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 border-l-4 border-blue-500 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-16 h-16 flex items-center justify-center mr-6 shadow-lg">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Team Collaboration & Communication</h3>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200/50">
              <p className="text-gray-700 leading-relaxed text-xl">{t.reflection[0]}</p>
            </div>
          </div>

          {/* User-Centered Design */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 border-l-4 border-green-500 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-16 h-16 flex items-center justify-center mr-6 shadow-lg">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">User-Centered Design Approach</h3>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200/50">
              <p className="text-gray-700 leading-relaxed text-xl">{t.reflection[1]}</p>
            </div>
          </div>

          {/* Design Process & Tools */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 border-l-4 border-purple-500 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-16 h-16 flex items-center justify-center mr-6 shadow-lg">
                <span className="text-white text-2xl">🛠️</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Design Process & Tool Mastery</h3>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200/50">
              <p className="text-gray-700 leading-relaxed text-xl">{t.reflection[2]}</p>
            </div>
          </div>

          {/* Future Improvements */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 border-l-4 border-orange-500 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full w-16 h-16 flex items-center justify-center mr-6 shadow-lg">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Future Improvements & Iterations</h3>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200/50">
              <p className="text-gray-700 leading-relaxed text-xl">{t.reflection[3]}</p>
            </div>
          </div>

          {/* Key Takeaways Summary */}
          <div className="bg-gradient-to-r from-gray-50 to-slate-100 rounded-3xl p-10 border border-gray-200/50 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Takeaways</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-4 h-4 mt-3 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-gray-700 text-lg">Communication is essential for team alignment</span>
                </div>
                <div className="flex items-start group">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-4 h-4 mt-3 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-gray-700 text-lg">User feedback shapes design decisions</span>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-4 h-4 mt-3 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-gray-700 text-lg">Style guides improve consistency and speed</span>
                </div>
                <div className="flex items-start group">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full w-4 h-4 mt-3 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-gray-700 text-lg">Foundation-first approach leads to better results</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Back to Projects Link */}
      <div className="relative z-10 text-center pb-16">
        <Link
          href="/uiux"
          className="group inline-block px-12 py-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-xl rounded-3xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 animate-bounce"
        >
          <span className="flex items-center gap-3">
            <svg className="w-6 h-6 group-hover:-translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t.back}
          </span>
        </Link>
      </div>

      <div className="relative z-10 text-center pb-12 text-sm text-gray-500">
        {t.imageCredit}
      </div>

      <Footer currentLang={currentLang} />
    </div>
  );
}