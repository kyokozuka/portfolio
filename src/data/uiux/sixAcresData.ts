import { SixAcresData } from '@/types/sixAcresProject';

export const sixAcresData: SixAcresData = {
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