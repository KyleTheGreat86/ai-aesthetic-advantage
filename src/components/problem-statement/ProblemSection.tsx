
import { memo } from "react";
import ProblemItem from "./ProblemItem";

interface ProblemSectionProps {
  problemItems: Array<{
    number: number;
    problem: string;
    detail: string;
    delay: number;
  }>;
  animationStarted: boolean;
  dollarAmount: string;
}

const ProblemSection = memo(({ problemItems, animationStarted, dollarAmount }: ProblemSectionProps) => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Is Your IP Law Firm Losing
        <span
          className={`gradient-text-orange relative ml-2 inline-block ${
            animationStarted ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500`}
          style={{ transitionDelay: "200ms" }}
        >
          <span className="text-eagle-orange font-bold animate-pulse-slow">{dollarAmount}</span>
        </span>
        <span className="ml-2">Monthly</span>
        Due To:
      </h2>

      <div className="mt-12 space-y-8">
        {problemItems.map(item => (
          <ProblemItem
            key={item.number}
            number={item.number}
            problem={item.problem}
            detail={item.detail}
            delay={item.delay}
            isVisible={animationStarted}
          />
        ))}
      </div>

      <p
        className={`mt-12 text-xl ${
          animationStarted ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
        style={{ transitionDelay: "800ms" }}
      >
        Most IP law firms lose{" "}
        <span className="text-eagle-orange font-semibold">
          30% of potential revenue
        </span>{" "}
        to these fixable problems.
      </p>
    </div>
  );
});

export default ProblemSection;
