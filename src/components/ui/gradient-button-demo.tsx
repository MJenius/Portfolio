import { GradientButton } from "@/components/ui/gradient-button"
import { Download, Mail, Eye } from "lucide-react"

/**
 * Demo of GradientButton component usage
 * 
 * This component showcases both variants of the gradient button:
 * - default: Pink/orange gradient that shifts on hover
 * - variant: Blue/cyan gradient with different hover effect
 */
function GradientButtonDemo() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-white">Default Variant</h2>
        <div className="flex gap-4 flex-wrap">
          <GradientButton>Get Started</GradientButton>
          <GradientButton>
            <Mail className="w-5 h-5 mr-2" />
            Send Email
          </GradientButton>
          <GradientButton>
            <Download className="w-5 h-5 mr-2" />
            Download
          </GradientButton>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 text-white">Variant Style</h2>
        <div className="flex gap-4 flex-wrap">
          <GradientButton variant="variant">Get Started</GradientButton>
          <GradientButton variant="variant">
            <Eye className="w-5 h-5 mr-2" />
            View Projects
          </GradientButton>
          <GradientButton variant="variant">
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </GradientButton>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 text-white">As Link (asChild prop)</h2>
        <div className="flex gap-4 flex-wrap">
          <GradientButton asChild>
            <a href="#projects">View Projects</a>
          </GradientButton>
          <GradientButton variant="variant" asChild>
            <a href="#contact">Contact Me</a>
          </GradientButton>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 text-white">Disabled State</h2>
        <div className="flex gap-4 flex-wrap">
          <GradientButton disabled>Disabled Button</GradientButton>
          <GradientButton variant="variant" disabled>Disabled Variant</GradientButton>
        </div>
      </div>
    </div>
  )
}

export { GradientButtonDemo }
