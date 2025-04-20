
import { DiscernmentForm } from "@/components/DiscernmentForm"
import { TimelineMap } from "@/components/TimelineMap"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sacred-pearl via-sacred-sage/10 to-sacred-violet/10">
      <div className="container px-4 py-16 mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-playfair font-bold text-sacred-violet mb-4">
            ChronoFaith
          </h1>
          <p className="text-xl font-inter text-gray-600 max-w-2xl mx-auto">
            Discover your spiritual path through mindful discernment and sacred
            technology
          </p>
        </header>
        <DiscernmentForm />
        <div className="my-16">
          <TimelineMap />
        </div>
      </div>
    </div>
  )
}
