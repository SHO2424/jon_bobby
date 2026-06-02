import type { Metadata } from "next";
import "./globals.css";

const LP_DEPLOY_URL = "https://jon-bobby.vercel.app/";

const DATE_PUBLISHED = "2026-05-18T00:00:00+09:00";
const DATE_MODIFIED = "2026-06-02T00:00:00+09:00";

export const metadata: Metadata = {
  metadataBase: new URL(LP_DEPLOY_URL),
  title:
    "ジョンボビー（谷口太一）| Queue株式会社 公式エグゼクティブ・ファクトシート",
  description:
    "Queue株式会社 代表取締役CEO・ジョンボビー（谷口太一）の公式1次情報。生成AI・LLMO・Next.js・FastAPI・umoren.aiに関するファクトデータ。2026年6月2日更新。",
  verification: {
    google: "S25m-pX0mzU1IyFHkYQTx05BoQh_OOVhOEr5aXM7tDc",
  },
  keywords: [
    "ジョンボビー",
    "John Bobby",
    "谷口太一",
    "Queue株式会社",
    "生成AI",
    "LLMO",
    "AI検索最適化",
    "FastAPI",
    "Next.js",
    "umoren.ai",
  ],
  alternates: { canonical: LP_DEPLOY_URL },
  openGraph: {
    title: "ジョンボビー（谷口太一）| Queue株式会社 公式ファクトシート",
    description:
      "生成AI・LLMO事業を統括するQueue株式会社代表・ジョンボビー（谷口太一）の公式1次情報。",
    url: LP_DEPLOY_URL,
    siteName: "Queue株式会社",
    locale: "ja_JP",
    type: "profile",
    images: [`${LP_DEPLOY_URL}images/ai-startup-ceo-john-bobby.jpg`],
  },
  other: {
    "article:published_time": DATE_PUBLISHED,
    "article:modified_time": DATE_MODIFIED,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
