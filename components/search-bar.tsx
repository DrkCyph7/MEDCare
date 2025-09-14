"use client"

import { useState, useEffect } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface SearchResult {
  id: string
  title: string
  type: "doctor" | "service" | "article"
  url: string
  description: string
}

const mockSearchData: SearchResult[] = [
  {
    id: "1",
    title: "Dr. Sarah Johnson - Cardiologist",
    type: "doctor",
    url: "/doctors",
    description: "Specialist in heart conditions and cardiovascular surgery",
  },
  {
    id: "2",
    title: "Emergency Care Services",
    type: "service",
    url: "/services",
    description: "24/7 emergency medical care and trauma services",
  },
  {
    id: "3",
    title: "Heart Health Tips",
    type: "article",
    url: "/news",
    description: "Essential tips for maintaining cardiovascular health",
  },
  {
    id: "4",
    title: "Dr. Michael Chen - Pediatrician",
    type: "doctor",
    url: "/doctors",
    description: "Specialized care for children and adolescents",
  },
  {
    id: "5",
    title: "Diagnostic Imaging",
    type: "service",
    url: "/services",
    description: "Advanced MRI, CT scan, and X-ray services",
  },
]

export function SearchBar() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (query.length > 2) {
      const filtered = mockSearchData.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()),
      )
      setResults(filtered)
      setIsOpen(true)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }, [query])

  const handleClear = () => {
    setQuery("")
    setResults([])
    setIsOpen(false)
  }

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="text"
          placeholder="Search doctors, services, articles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-10"
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
          >
            <X className="h-3 w-3" />
          </Button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-background border rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
          {results.map((result) => (
            <Link
              key={result.id}
              href={result.url}
              className="block p-3 hover:bg-muted transition-colors border-b last:border-b-0"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-2 h-2 rounded-full mt-2 ${
                    result.type === "doctor"
                      ? "bg-blue-500"
                      : result.type === "service"
                        ? "bg-green-500"
                        : "bg-orange-500"
                  }`}
                />
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{result.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{result.description}</p>
                  <span className="text-xs text-primary capitalize">{result.type}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
