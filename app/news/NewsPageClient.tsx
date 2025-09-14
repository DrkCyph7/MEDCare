"use client"

import { useState, useMemo } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, User, Search, Heart, Brain, Activity, Stethoscope, Eye, Baby } from "lucide-react"

const featuredArticle = {
  id: 1,
  title: "Understanding Heart Health: Prevention and Early Detection",
  excerpt:
    "Learn about the latest advances in cardiovascular care and how simple lifestyle changes can significantly reduce your risk of heart disease.",
  content:
    "Heart disease remains the leading cause of death globally, but many cases are preventable through proper lifestyle choices and early detection...",
  author: "Dr. James Rodriguez",
  authorRole: "Cardiologist",
  publishDate: "2024-01-15",
  readTime: "8 min read",
  category: "Cardiology",
  tags: ["Heart Health", "Prevention", "Lifestyle"],
  featured: true,
}

const articles = [
  {
    id: 2,
    title: "The Importance of Regular Pediatric Checkups",
    excerpt:
      "Why routine visits to your child's pediatrician are crucial for healthy development and early intervention.",
    author: "Dr. Emily Chen",
    authorRole: "Pediatrician",
    publishDate: "2024-01-12",
    readTime: "5 min read",
    category: "Pediatrics",
    tags: ["Children's Health", "Prevention", "Development"],
    featured: false,
  },
  {
    id: 3,
    title: "Managing Diabetes: A Comprehensive Guide",
    excerpt: "Expert tips on managing diabetes through diet, exercise, medication, and regular monitoring.",
    author: "Dr. Sarah Mitchell",
    authorRole: "Internal Medicine",
    publishDate: "2024-01-10",
    readTime: "12 min read",
    category: "Primary Care",
    tags: ["Diabetes", "Chronic Care", "Lifestyle"],
    featured: false,
  },
  {
    id: 4,
    title: "Recognizing the Signs of Stroke: Act FAST",
    excerpt:
      "Learn the critical warning signs of stroke and why immediate medical attention can save lives and prevent disability.",
    author: "Dr. Michael Thompson",
    authorRole: "Neurologist",
    publishDate: "2024-01-08",
    readTime: "6 min read",
    category: "Neurology",
    tags: ["Stroke", "Emergency", "Prevention"],
    featured: false,
  },
  {
    id: 5,
    title: "Eye Health in the Digital Age",
    excerpt:
      "How to protect your vision from digital eye strain and maintain healthy eyes in our screen-dominated world.",
    author: "Dr. Lisa Park",
    authorRole: "Ophthalmologist",
    publishDate: "2024-01-05",
    readTime: "7 min read",
    category: "Ophthalmology",
    tags: ["Eye Health", "Digital Wellness", "Prevention"],
    featured: false,
  },
  {
    id: 6,
    title: "Mental Health Awareness: Breaking the Stigma",
    excerpt: "Understanding mental health conditions and the importance of seeking professional help when needed.",
    author: "Dr. Amanda Foster",
    authorRole: "Psychiatrist",
    publishDate: "2024-01-03",
    readTime: "9 min read",
    category: "Mental Health",
    tags: ["Mental Health", "Awareness", "Support"],
    featured: false,
  },
]

const announcements = [
  {
    id: 1,
    title: "New Cardiac Center Now Open",
    content:
      "We're excited to announce the opening of our state-of-the-art Cardiac Center with advanced diagnostic equipment.",
    date: "2024-01-20",
    type: "Facility Update",
  },
  {
    id: 2,
    title: "Extended Hours for Primary Care",
    content: "Our Primary Care department now offers extended evening hours Monday through Friday until 8 PM.",
    date: "2024-01-18",
    type: "Service Update",
  },
  {
    id: 3,
    title: "Free Health Screening Event",
    content:
      "Join us for a free community health screening event on February 15th. Blood pressure, cholesterol, and diabetes screenings available.",
    date: "2024-01-15",
    type: "Community Event",
  },
]

const healthTips = [
  {
    id: 1,
    title: "Stay Hydrated",
    tip: "Drink at least 8 glasses of water daily to maintain optimal health and energy levels.",
    category: "General Health",
  },
  {
    id: 2,
    title: "Get Moving",
    tip: "Aim for at least 30 minutes of moderate exercise most days of the week to improve cardiovascular health.",
    category: "Fitness",
  },
  {
    id: 3,
    title: "Prioritize Sleep",
    tip: "Adults should aim for 7-9 hours of quality sleep each night for optimal physical and mental health.",
    category: "Wellness",
  },
  {
    id: 4,
    title: "Eat the Rainbow",
    tip: "Include a variety of colorful fruits and vegetables in your diet to ensure you get diverse nutrients.",
    category: "Nutrition",
  },
]

const categories = [
  "All Categories",
  "Cardiology",
  "Pediatrics",
  "Primary Care",
  "Neurology",
  "Ophthalmology",
  "Mental Health",
]

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Cardiology":
      return Heart
    case "Neurology":
      return Brain
    case "Pediatrics":
      return Baby
    case "Ophthalmology":
      return Eye
    case "Primary Care":
      return Stethoscope
    default:
      return Activity
  }
}

export default function NewsPageClient() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all-categories")

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory =
        selectedCategory === "all-categories" ||
        article.category.toLowerCase().replace(/\s+/g, "-") === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 md:pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance px-2">
              News & Health Blog
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed px-4">
              Stay informed with the latest medical news, health tips, and expert insights from our healthcare
              professionals.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto px-2">
            <div className="glass-card p-4 sm:p-6 rounded-2xl">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search articles..."
                      className="pl-10 text-sm sm:text-base"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, "-")}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Featured Article
            </h2>
          </div>

          <Card className="glass-card hover:scale-[1.02] transition-all duration-300">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Badge variant="default">{featuredArticle.category}</Badge>
                    <Badge variant="outline">Featured</Badge>
                  </div>
                  <CardTitle className="text-xl sm:text-2xl md:text-3xl mb-4 text-balance">
                    {featuredArticle.title}
                  </CardTitle>
                  <CardDescription className="text-base sm:text-lg mb-6 text-pretty leading-relaxed">
                    {featuredArticle.excerpt}
                  </CardDescription>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <User className="h-3 sm:h-4 w-3 sm:w-4" />
                      <span>
                        {featuredArticle.author} - {featuredArticle.authorRole}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 sm:h-4 w-3 sm:w-4" />
                      <span>{new Date(featuredArticle.publishDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3 sm:h-4 w-3 sm:w-4" />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                  </div>
                  <Button size="lg" className="w-full sm:w-auto">
                    Read Full Article
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 sm:p-6 md:p-8 flex items-center justify-center min-h-[200px] sm:min-h-[300px]">
                  <div className="text-center">
                    <Heart className="h-16 sm:h-20 md:h-24 w-16 sm:w-20 md:w-24 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground text-sm sm:text-base">Featured Health Article</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Recent Articles
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl text-pretty leading-relaxed">
              Expert insights and medical advice from our healthcare professionals.
            </p>
          </div>

          <div className="mb-6 sm:mb-8">
            <p className="text-sm sm:text-base text-muted-foreground">
              {filteredArticles.length === 0
                ? "No articles found matching your criteria"
                : `Showing ${filteredArticles.length} article${filteredArticles.length !== 1 ? "s" : ""}`}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {filteredArticles.map((article) => {
              const CategoryIcon = getCategoryIcon(article.category)
              return (
                <Card key={article.id} className="glass-card hover:scale-105 transition-all duration-300 group h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <CategoryIcon className="h-5 sm:h-6 w-5 sm:w-6 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-xs sm:text-sm">
                        {article.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg sm:text-xl text-balance">{article.title}</CardTitle>
                    <CardDescription className="text-sm sm:text-base text-pretty leading-relaxed">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm text-muted-foreground">
                          {new Date(article.publishDate).toLocaleDateString()}
                        </span>
                        <Button variant="outline" size="sm" className="bg-transparent text-xs sm:text-sm">
                          Read More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Announcements & Health Tips */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Announcements */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8 text-balance">Latest Announcements</h2>
              <div className="space-y-6">
                {announcements.map((announcement) => (
                  <Card key={announcement.id} className="glass-card">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">{announcement.type}</Badge>
                        <span className="text-sm text-muted-foreground">
                          {new Date(announcement.date).toLocaleDateString()}
                        </span>
                      </div>
                      <CardTitle className="text-lg">{announcement.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-pretty leading-relaxed">{announcement.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Health Tips */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8 text-balance">Daily Health Tips</h2>
              <div className="space-y-6">
                {healthTips.map((tip) => (
                  <Card key={tip.id} className="glass-card">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Activity className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-2">{tip.title}</h3>
                          <p className="text-muted-foreground text-pretty leading-relaxed mb-2">{tip.tip}</p>
                          <Badge variant="outline" className="text-xs">
                            {tip.category}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Stay Informed</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-pretty leading-relaxed opacity-90">
            Subscribe to our newsletter to receive the latest health news, tips, and updates from MedCare Plus directly
            in your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="bg-primary-foreground text-primary placeholder:text-primary/60"
            />
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
