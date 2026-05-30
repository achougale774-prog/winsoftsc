import type { Metadata } from "next"

const blogMeta: Record<string, { title: string; description: string }> = {
  "digital-transformation-dairy-industry": {
    title: "Digital Transformation in Dairy Industry: A Complete Guide | Winsoft Blog",
    description: "Discover how modern dairy operations are leveraging technology to improve efficiency, reduce costs, and enhance product quality.",
  },
  "sugar-factory-automation": {
    title: "Sugar Factory Automation: Boosting Production Efficiency | Winsoft Blog",
    description: "Learn how automated systems are revolutionizing sugar production processes, from cane procurement to final packaging.",
  },
  "gold-inventory-management": {
    title: "Gold Inventory Management: Best Practices for Jewelers | Winsoft Blog",
    description: "Essential strategies for managing precious metals inventory, tracking purity, and optimizing stock levels.",
  },
  "future-of-erp-systems": {
    title: "The Future of ERP Systems in Manufacturing | Winsoft Blog",
    description: "Exploring emerging trends in enterprise resource planning and how they're shaping the future of manufacturing.",
  },
  "quality-control-food-processing": {
    title: "Quality Control in Food Processing: Technology Solutions | Winsoft Blog",
    description: "How advanced quality control systems are ensuring food safety and compliance in modern processing facilities.",
  },
  "crm-for-small-businesses": {
    title: "Customer Relationship Management for Small Businesses | Winsoft Blog",
    description: "Practical CRM strategies that help small and medium businesses build stronger customer relationships.",
  },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const meta = blogMeta[slug]
  return {
    title: meta?.title ?? "Blog | Winsoft Software",
    description: meta?.description ?? "Read expert articles on dairy, gold, and sugar industry software.",
  }
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
