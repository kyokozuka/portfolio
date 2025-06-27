"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TaskManagementPage() {
  const [currentLang, setCurrentLang] = useState("en");

  const content = {
    en: {
      title: "Task Management System",
      subtitle: "Design Sprint Assignment - Team Collaboration",
      role: "UX/UI Designer (Team Lead)",
      tools: "Figma, Figjam, Miro, Notion",
      duration: "1 Week Design Sprint",
      finalSolution: "A comprehensive task management system designed through a collaborative design sprint process. I led a team of four designers to create an intuitive platform that streamlines task creation, team collaboration, and project tracking. The solution focuses on reducing cognitive load while improving team productivity and communication.",
      keyFeatures: [
        "Intuitive task creation with smart templates",
        "Real-time team collaboration and comments",
        "Visual progress tracking with kanban boards",
        "Mobile-responsive design for on-the-go access",
        "Integration with calendar and notification systems"
      ],
      process: {
        sprintOverview: "Our design sprint followed the Google Design Sprint methodology, focusing on rapid prototyping and user testing to validate our solution within one week.",
        phases: [
          {
            title: "Day 1: Understand & Define",
            activities: [
              "Team alignment and goal setting",
              "User research synthesis",
              "Problem statement definition",
              "How Might We (HMW) questions"
            ]
          },
          {
            title: "Day 2: Sketch & Ideate",
            activities: [
              "Individual sketching sessions",
              "Crazy 8s exercise",
              "Solution sketching",
              "Team critique and feedback"
            ]
          },
          {
            title: "Day 3: Decide & Storyboard",
            activities: [
              "Solution selection and voting",
              "User journey mapping",
              "Storyboard creation",
              "Prototype planning"
            ]
          },
          {
            title: "Day 4: Prototype",
            activities: [
              "High-fidelity prototype creation",
              "Interactive elements design",
              "User flow implementation",
              "Visual design refinement"
            ]
          },
          {
            title: "Day 5: Test & Validate",
            activities: [
              "User testing with 5 participants",
              "Feedback collection and analysis",
              "Iteration planning",
              "Final presentation preparation"
            ]
          }
        ],
        keyFeatures: [
          "Intuitive task creation with smart templates",
          "Real-time team collaboration and comments",
          "Visual progress tracking with kanban boards",
          "Mobile-responsive design for on-the-go access",
          "Integration with calendar and notification systems"
        ],
        userTesting: {
          participants: 5,
          findings: [
            "Users found the task creation flow intuitive and efficient",
            "Team collaboration features were highly valued",
            "Visual progress indicators helped with project overview",
            "Mobile interface received positive feedback for accessibility",
            "Some users requested more customization options for task categories"
          ]
        }
      },
      reflection: [
        "Leading a design sprint with a team of four designers was an incredible learning experience. I discovered the importance of clear communication and structured facilitation to keep the team aligned and productive throughout the intensive week.",
        "The collaborative nature of the design sprint revealed how different perspectives can enhance the final solution. Each team member brought unique insights that improved our understanding of user needs and technical constraints.",
        "Rapid prototyping and user testing within a week taught me the value of quick iteration and validation. We were able to identify and address usability issues early, saving significant development time later.",
        "The design sprint methodology proved highly effective for complex problems like task management. The structured approach helped us stay focused on user needs while exploring innovative solutions efficiently."
      ],
      back: "Back to UI/UX Projects",
      imageCredit: "All designs created during the design sprint assignment."
    },
    ja: {
      title: "タスク管理システム",
      subtitle: "デザインスプリント課題 - チーム協働",
      role: "UX/UIデザイナー（チームリード）",
      tools: "Figma, Figjam, Miro, Notion",
      duration: "1週間デザインスプリント",
      finalSolution: "デザインスプリントプロセスを通じて設計された包括的なタスク管理システム。4名のデザイナーチームをリードして、タスク作成、チーム協働、プロジェクト追跡を効率化する直感的なプラットフォームを作成しました。このソリューションは、認知負荷を軽減しながら、チームの生産性とコミュニケーションを向上させることに焦点を当てています。",
      keyFeatures: [
        "スマートテンプレートによる直感的なタスク作成",
        "リアルタイムチーム協働とコメント機能",
        "かんばんボードによる視覚的進捗追跡",
        "外出先でのアクセスに適したモバイルレスポンシブデザイン",
        "カレンダーと通知システムとの統合"
      ],
      process: {
        sprintOverview: "私たちのデザインスプリントは、Googleデザインスプリント手法に従い、1週間以内にソリューションを検証するための迅速なプロトタイピングとユーザーテストに焦点を当てました。",
        phases: [
          {
            title: "Day 1: 理解と定義",
            activities: [
              "チーム調整と目標設定",
              "ユーザーリサーチの統合",
              "問題文の定義",
              "How Might We (HMW) 質問"
            ]
          },
          {
            title: "Day 2: スケッチとアイデア創出",
            activities: [
              "個人スケッチングセッション",
              "Crazy 8s エクササイズ",
              "ソリューションスケッチング",
              "チーム批評とフィードバック"
            ]
          },
          {
            title: "Day 3: 決定とストーリーボード",
            activities: [
              "ソリューション選択と投票",
              "ユーザージャーニーマッピング",
              "ストーリーボード作成",
              "プロトタイプ計画"
            ]
          },
          {
            title: "Day 4: プロトタイプ",
            activities: [
              "高解像度プロトタイプ作成",
              "インタラクティブ要素のデザイン",
              "ユーザーフローの実装",
              "ビジュアルデザインの改善"
            ]
          },
          {
            title: "Day 5: テストと検証",
            activities: [
              "5名の参加者によるユーザーテスト",
              "フィードバック収集と分析",
              "反復計画",
              "最終プレゼンテーション準備"
            ]
          }
        ],
        keyFeatures: [
          "スマートテンプレートによる直感的なタスク作成",
          "リアルタイムチーム協働とコメント機能",
          "かんばんボードによる視覚的進捗追跡",
          "外出先でのアクセスに適したモバイルレスポンシブデザイン",
          "カレンダーと通知システムとの統合"
        ],
        userTesting: {
          participants: 5,
          findings: [
            "ユーザーはタスク作成フローが直感的で効率的だと感じました",
            "チーム協働機能が高く評価されました",
            "視覚的進捗インジケーターがプロジェクト概要の理解に役立ちました",
            "モバイルインターフェースのアクセシビリティが好評でした",
            "一部のユーザーからタスクカテゴリのカスタマイズオプションの追加を求められました"
          ]
        }
      },
      reflection: [
        "4名のデザイナーでデザインスプリントをリードすることは、素晴らしい学習体験でした。集中的な1週間を通じてチームを調整し、生産的に保つための明確なコミュニケーションと構造化されたファシリテーションの重要性を発見しました。",
        "デザインスプリントの協働的な性質により、異なる視点が最終的なソリューションを向上させる方法が明らかになりました。各チームメンバーが、ユーザーニーズと技術的制約の理解を向上させる独自の洞察をもたらしました。",
        "1週間以内の迅速なプロトタイピングとユーザーテストにより、迅速な反復と検証の価値を学びました。ユーザビリティの問題を早期に特定し、対処することで、後で大幅な開発時間を節約できました。",
        "デザインスプリント手法は、タスク管理のような複雑な問題に非常に効果的であることが証明されました。構造化されたアプローチにより、革新的なソリューションを効率的に探索しながら、ユーザーニーズに焦点を当て続けることができました。"
      ],
      back: "UI/UXプロジェクトに戻る",
      imageCredit: "デザインスプリント課題で作成されたすべてのデザイン。"
    }
  };

  // Use content based on current language
  const t = content[currentLang as keyof typeof content] ?? content.en;

  return (
    <div className="min-h-screen bg-[#FFF7EB] text-gray-900 font-sans">
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />

      {/* Hero Title Section */}
      <section className="container mx-auto px-4 pt-16 pb-2 flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-2 text-gray-900 tracking-tight animate-fadeinup" style={{ animationDelay: '0.1s' }}>{t.title}</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-700 animate-fadeinup" style={{ animationDelay: '0.25s' }}>{t.subtitle}</h2>
      </section>

      {/* Hero Section - Large Visual */}
      <section className="container mx-auto px-4 pt-0 pb-8 flex flex-col items-center animate-fadeinup" style={{ animationDelay: '0.4s' }}>
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-2xl w-full max-w-5xl p-8 border-4 border-white mb-10">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Design Sprint Project</h3>
            <p className="text-lg text-gray-700 mb-6">Task Management System Redesign</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {t.keyFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow">
                  <div className="text-2xl mb-2">✨</div>
                  <div className="text-sm font-medium">{feature.split(' ').slice(0, 2).join(' ')}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="container mx-auto px-4 pb-8 flex flex-col items-center animate-fadeinup" style={{ animationDelay: '0.6s' }}>
        <div className="flex flex-wrap gap-6 justify-center mb-2">
          <div className="bg-white/70 rounded-lg px-6 py-4 shadow border border-gray-100 min-w-[160px] text-center">
            <div className="font-bold text-gray-700 mb-1">My Role</div>
            <div>{t.role}</div>
          </div>
          <div className="bg-white/70 rounded-lg px-6 py-4 shadow border border-gray-100 min-w-[160px] text-center">
            <div className="font-bold text-gray-700 mb-1">Tools</div>
            <div>{t.tools}</div>
          </div>
          <div className="bg-white/70 rounded-lg px-6 py-4 shadow border border-gray-100 min-w-[160px] text-center">
            <div className="font-bold text-gray-700 mb-1">Duration</div>
            <div>{t.duration}</div>
          </div>
        </div>
      </section>

      {/* The Final Solution Section */}
      <section className="container mx-auto px-4 pb-8 flex flex-col items-center animate-fadeinup" style={{ animationDelay: '0.8s' }}>
        <h2 className="text-3xl font-bold mb-4 text-gray-900">The Final Solution</h2>
        <p className="mb-6 max-w-3xl text-lg text-gray-800 leading-relaxed text-center">{t.finalSolution}</p>

        {/* Key Features */}
        <div className="w-full max-w-4xl mx-auto mb-8">
          <h3 className="text-xl font-semibold mb-4 text-center">Key Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.keyFeatures.map((feature, index) => (
              <div key={index} className="bg-white/70 rounded-lg p-4 shadow border border-gray-100">
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-2xl mx-auto my-6 rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              style={{ border: '1px solid rgba(0, 0, 0, 0.1);' }}
              width="100%"
              height="450"
              src="https://embed.figma.com/proto/KvN4jj4vxZxKCYMOcljRlI/Kento_Nene_Sayumi_Inori_DesignSprint?page-id=12751%3A7378&node-id=12750-17835&viewport=155%2C-116%2C0.24&scaling=scale-down&content-scaling=fixed&embed-host=share"
              allowFullScreen
              title="Figma Prototype">
            </iframe>
          </div>
          <div className="text-xs text-gray-500 text-center py-2">Interactive Prototype (Figma)</div>
        </div>
      </section>

      {/* Design Sprint Process Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Design Sprint Process</h2>

        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Sprint Overview</h3>
            <p className="text-gray-700 leading-relaxed">{t.process.sprintOverview}</p>
          </div>
        </div>

        {/* Sprint Phases */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.process.phases.map((phase, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{phase.title}</h3>
                </div>
                <div className="space-y-2">
                  {phase.activities.map((activity, actIndex) => (
                    <div key={actIndex} className="flex items-start">
                      <div className="bg-blue-500 rounded-full w-1.5 h-1.5 mt-2 mr-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Testing Results */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">User Testing Results</h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl mb-2">👥</div>
              <h3 className="text-xl font-semibold text-gray-900">Testing with {t.process.userTesting.participants} Participants</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-green-700">✅ Positive Findings</h4>
                <div className="space-y-3">
                  {t.process.userTesting.findings.slice(0, 3).map((finding, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-green-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{finding}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-blue-700">💡 Improvement Areas</h4>
                <div className="space-y-3">
                  {t.process.userTesting.findings.slice(3).map((finding, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-blue-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{finding}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection & Learnings */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Reflection & Learnings</h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {t.reflection.map((learning, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    <span className="text-purple-600 font-bold text-sm">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Learning {index + 1}</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{learning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back Button */}
      <section className="container mx-auto px-4 py-8">
        <div className="text-center">
          <Link href="/uiux" className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
            <span>← {t.back}</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
