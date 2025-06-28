# モビリティ IoTサービス構築・運用プロジェクト（Luup）

## 概要
スマートモビリティサービス「Luup」において、GCP（Google Cloud Platform）およびAWSを活用したインフラ・API構築と運用を担当しました。電動キックボードなどのリアルタイム稼働管理に必要なバックエンド基盤・監視体制を整備し、信頼性と運用効率の向上を実現しました。

## 背景と目的
- **ビジネス目的**：電動キックボードなどのシェアリングサービスで、リアルタイム位置・稼働状況をモニタリングし、安定したサービス提供と運用コスト削減を達成。
- **技術的課題**：
  - 多数のIoT端末（キックボード）からのデータをリアルタイムに受信・処理する高可用性API
  - 障害検知とアラート設計による運用安定化
  - CI/CDやIaC導入による開発・運用の自動化

## 担当範囲
- **API開発・運用**：Rest APIとMQTTをGCPとFirebase上で構築・運用
- **インフラ設計・構築**：GCPおよびAWSに跨るインフラ整備とIaCによる自動化
- **監視・信頼性設計**：ログ監視・アラート整備・SLO策定を通じた障害検知の効率化
- **CI/CD導入**：Github Actions によるテスト・デプロイ自動化

## 技術スタックと構成
### ☁️ GCP & Firebase
- `Firebase Functions`（TypeScript + Express）によるREST APIおよびMQTTブローカー機能
- `Firestore`：リアルタイムデータストア（IoT端末からのテレメトリ格納）
- `Cloud Logging` & `Cloud Monitoring`：ログ収集・ダッシュボード・アラート構成
- SLO（Service Level Objective）設計による運用品質基準策定

### 🛠 AWS & GCP インフラ構築
- 両クラウド環境を **Terraform / IaC** で構築・管理
- IaC導入により開発・運用工数を **約50%削減**

### 🤖 CI/CD
- `GitHub Actions` を利用したユニットテストとデプロイパイプラインを構成
- テストカバレッジとデプロイ品質の担保により、テスト・構築コストを **100%削減**

## 運用・監視と成果
- **障害検知時間の短縮**：ログ監視とアラート構成で異常検知を迅速化
- **開発・運用効率化**：TerraformとGitHub Actionsの導入で、運用負荷と人的ミスを大幅軽減
- **信頼性向上**：SLOに基づいた安定運用と対外品質保証

## 使用技術・ツール一覧
| 分類          | ツール・サービス                                       |
|---------------|--------------------------------------------------------|
| クラウド       | GCP (Functions, Firestore, Logging, Monitoring), AWS   |
| 言語          | TypeScript (Express), Terraform                        |
| API           | REST API, MQTT                                         |
| CI/CD         | GitHub Actions                                        |
| 運用・監視     | Cloud Logging, Cloud Monitoring, SLO設計              |

## 学び・工夫
- マルチクラウド環境でのIaC設計により、一貫性と再現性を担保
- Firebase Functions と MQTT を組み合わせることで、リアルタイム性とスケーラビリティを両立
- 規定されたSLOによって、運用チームとの協調やサービスレベル向上に貢献