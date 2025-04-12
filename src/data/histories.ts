import { SelectedCareerType } from "../types/profile";

const histories: SelectedCareerType[] = [
  {
    year: "Jul 2017 - Present",
    title: `Software Engineer`,
    company: "@ Freelance",
    place: "Tokyo, Japan",
    description: [
      "Optimized EC site performance, reducing page load time from 5 seconds to 400 milliseconds and improving user experience and conversion rates.",
      "Implemented Test-Driven Development (TDD) with Pytest in FastAPI (Python), increasing test coverage from 0% to 80%.",
      "Developed and deployed a CI/CD pipeline using AWS CodeCommit, CodeBuild, and CodePipeline, automating testing and release processes, resulting in an 80% reduction in deployment time.",
      "Led the adoption of AWS CDK for Infrastructure as Code (IaC), streamlining AWS resource management and reducing development effort by 50%."

    ],
  },
  {
    year: "Oct 2022 - Jul 2023",
    title: `Technical Support Engineer`,
    company: "@ Microsoft Japan Co., Ltd.",
    place: "Tokyo, Japan",
    description: [
      "Developed CI/CD scripts using GitLab for deploying to Azure App Service.",
      "Utilized log analysis (Application Insights, KQL) to identify customer issues, analyze source code, and develop scripts for improvements.",

    ],
  },
  {
    year: "Apr 2021 - Nov 2021",
    title: "SoftWare Engineer",
    company: "@ Asial Corporation",
    place: "Tokyo, Japan",
    description: [
      "Designed and built a University Entrance Exam Eligibility system using Clean Architecture by NestJS (Node.js) and Docker.",
      "Optimized MySQL performance for a job recruitment platform used by over 1M users annually, reducing query execution time from 2 seconds to 200 milliseconds through query optimization and indexing improvements.",
    ],
  },
  {
    year: "Mar 2020 - Mar 2021",
    title: "SoftWare Engineer",
    company: "@ T2Lab Co., Ltd.",
    place: "Tokyo, Japan",
    description: [
      "Designed and built the backend for a smell sensor application using Clean Architecture with Flask (Python).",
      "Developed and deployed a prototype in two months, adopting a serverless architecture on AWS (S3, Lambda, DynamoDB) for IoT data processing.",
      "Optimized API performance, ensuring seamless real-time data processing for IoT devices.",
      "Held AWS training sessions for enterprise clients, covering EC2, S3, RDS, Lambda, and IAM best practices.",
      "Provided hands-on demonstrations and architectural guidance, successfully assisting clients in migrating their infrastructure to AWS.",

    ],
  },
  {
    year: "Feb 2017 - Feb 2020",
    title: "Full-Stack Engineer",
    company: "@ Micro CAD Inc.",
    place: "Tokyo, Japan",
    description: [
      "Led a team of 5 engineers to develop and launch an internal system from scratch in one month.",
      "Provided onboarding support and technical training to project members, improving team productivity.",
      "Led the migration of on-premises infrastructure to AWS, utilizing EC2, RDS, and S3 for improved scalability and performance.",
      "Implemented Infrastructure as Code (IaC) using CloudFormation, reducing infrastructure provisioning time from 1 day to 1 hour.",

    ],
  },
  {
    year: "Apr 2015 - Feb 2017",
    title: "Infrastructure Engineer",
    company: "@ Xincor miXell Co., Ltd.",
    place: "Tokyo, Japan",
    description: [
      "Developed and deployed a batch processing solution using VBA, reducing a daily one-hour routine task to under 5 minutes, significantly improving team efficiency.",
    ],
  },
];

export default histories;