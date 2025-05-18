
import { 
  ContainerAnimated,
  ContainerInset,
  ContainerScroll,
  ContainerSticky,
  HeroButton,
  HeroVideo 
} from "@/components/ui/animated-video-on-scroll"
import { EagleButton } from "./eagle-button"
import { ChevronRight } from "lucide-react"
import { RainbowButton } from "./rainbow-button"

export const AnimatedVideoDemo = () => {
  return (
    <section>
      <ContainerScroll className="h-[350vh]">
        <ContainerSticky
          style={{
            background:
              "radial-gradient(40% 40% at 50% 20%, #174268 0%, #0A1F33 22.92%, #050A14 42.71%, #030526 88.54%)", 
          }}
          className="bg-eagle-dark px-6 py-10 text-slate-50"
        >
          <ContainerAnimated className="space-y-4 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter md:text-6xl">
              Transform Your Brokerage
            </h1>
            <p className="mx-auto max-w-[42ch] opacity-80">
              Close more $3M–$20M off-market deals using next-generation AI technology
              without adding staff or wasting time.
            </p>
          </ContainerAnimated>

          <ContainerInset className="max-h-[450px] w-auto py-6">
            <HeroVideo
              src="https://videos.pexels.com/video-files/8566672/8566672-uhd_2560_1440_30fps.mp4"
              data-src="https://videos.pexels.com/video-files/8566672/8566672-uhd_2560_1440_30fps.mp4"
            />
          </ContainerInset>
          
          <ContainerAnimated
            transition={{ delay: 0.4 }}
            outputRange={[-120, 0]}
            inputRange={[0, 0.7]}
            className="mx-auto mt-6 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="https://calendly.com/weareagencyeagleeye/30min" target="_blank" rel="noopener noreferrer">
              <RainbowButton className="uppercase font-bold text-base w-full sm:w-auto group flex items-center gap-2 justify-center">
                <span>Schedule Your Strategy Session</span>
                <ChevronRight className="transition-transform group-hover:translate-x-1 flex-shrink-0" />
              </RainbowButton>
            </a>
          </ContainerAnimated>
        </ContainerSticky>
      </ContainerScroll>
    </section>
  )
}
