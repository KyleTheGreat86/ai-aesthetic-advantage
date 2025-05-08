
import { lazy, memo } from "react";

// Lazy load components with higher loading priority
export const LoadingScreen = lazy(() => 
  import("../../components/LoadingScreen")
    .then(module => ({ default: memo(module.default) }))
);

export const WorldMapHero = lazy(() => 
  import("../../components/WorldMapHero")
    .then(module => ({ default: memo(module.default) }))
);

// Lazy load components but with immediate loading for desktop
export const ProblemStatement = lazy(() => import("../../components/ProblemStatement"));
export const Solution = lazy(() => import("../../components/Solution"));
export const HowItWorks = lazy(() => import("../../components/HowItWorks"));
export const Results = lazy(() => import("../../components/Results"));
export const Pricing = lazy(() => import("../../components/Pricing"));
export const Guarantee = lazy(() => import("../../components/Guarantee"));
export const TeamExperts = lazy(() => import("../../components/TeamExperts"));
export const About = lazy(() => import("../../components/About"));
export const FAQ = lazy(() => import("../../components/FAQ"));
export const Footer = lazy(() => import("../../components/Footer"));
export const BackgroundGrid = lazy(() => import("../../components/BackgroundGrid"));
