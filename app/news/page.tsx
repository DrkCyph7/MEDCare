import type { Metadata } from "next"
import NewsPageClient from "./NewsPageClient"

export const metadata: Metadata = {
  title: "News & Health Blog - Latest Medical News & Health Tips | MEDArt",
  description:
    "Stay informed with the latest medical news, health tips, and expert insights from our healthcare professionals. Read articles on heart health, pediatrics, and more.",
  keywords:
    "medical news, health blog, health tips, medical articles, healthcare insights, heart health, pediatric care, medical advice",
  openGraph: {
    title: "News & Health Blog - Latest Medical News & Health Tips",
    description:
      "Stay informed with the latest medical news, health tips, and expert insights from our healthcare professionals.",
    type: "website",
    images: ["/images/medical-hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "News & Health Blog - Latest Medical News & Health Tips",
    description: "Stay informed with the latest medical news and health tips from our experts.",
  },
}

export default function NewsPage() {
  return <NewsPageClient />
}
