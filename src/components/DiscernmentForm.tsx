
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export const DiscernmentForm = () => {
  const [input, setInput] = useState("")
  const [prayer, setPrayer] = useState("")

  const handleSubmit = () => {
    console.log("Submitted discernment:", { input, prayer })
  }

  return (
    <div className="p-8 max-w-xl mx-auto bg-sacred-pearl/50 backdrop-blur-sm rounded-2xl space-y-6 shadow-xl">
      <h2 className="text-3xl font-playfair font-bold text-center text-sacred-violet">
        Discern Your Path
      </h2>
      <div className="space-y-4">
        <Input
          type="text"
          placeholder="What decision are you discerning?"
          className="w-full p-4 border-sacred-violet/20 font-inter"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Textarea
          placeholder="Share your prayer or spiritual reflection..."
          className="w-full p-4 min-h-[150px] border-sacred-violet/20 font-inter"
          value={prayer}
          onChange={(e) => setPrayer(e.target.value)}
        />
        <Button
          className="w-full bg-sacred-violet hover:bg-sacred-violet/90 text-white font-inter py-6 animate-sacred-pulse"
          onClick={handleSubmit}
        >
          Reveal Sacred Paths
        </Button>
      </div>
    </div>
  )
}
