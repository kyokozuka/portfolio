import { AchievyData } from '@/types/achievyProject';

export const achievyData: AchievyData = {
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