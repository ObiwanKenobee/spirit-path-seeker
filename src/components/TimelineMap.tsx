
import { Card } from "@/components/ui/card"

export const TimelineMap = () => {
  const paths = [
    {
      title: "Path of Wisdom",
      description: "A journey of deep contemplation and spiritual growth",
    },
    {
      title: "Path of Service",
      description: "An opportunity to make a meaningful impact",
    },
    {
      title: "Path of Balance",
      description: "Finding harmony between different aspects of life",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h3 className="text-2xl font-playfair text-sacred-violet mb-8 text-center">
        Potential Sacred Paths
      </h3>
      <div className="grid gap-6 md:grid-cols-3">
        {paths.map((path) => (
          <Card
            key={path.title}
            className="p-6 hover:shadow-lg transition-shadow bg-sacred-pearl/50 backdrop-blur-sm"
          >
            <h4 className="text-xl font-playfair text-sacred-violet mb-2">
              {path.title}
            </h4>
            <p className="text-gray-600 font-inter">{path.description}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
