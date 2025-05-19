
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface CodeLineProps {
  width: number;
  delay: number;
  color: string;
  className?: string;
}

const CodeLine: React.FC<CodeLineProps> = ({ width, delay, color, className }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start({
        width: `${width}%`,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: delay,
          ease: "easeOut"
        }
      });
    }
  }, [isInView, controls, width, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ width: "0%", opacity: 0 }}
      animate={controls}
      className={`h-[1px] bg-opacity-70 rounded-full my-2 ${className}`}
      style={{ backgroundColor: color }}
    />
  );
};

interface CodeBlockProps {
  delay: number;
  position: 'left' | 'right';
  content: string[];
  color: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ delay, position, content, color, className }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay: delay,
          ease: "easeOut"
        }
      });
    }
  }, [isInView, controls, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className={`bg-black/40 backdrop-blur-sm rounded-md p-4 border border-opacity-30 max-w-xs ${
        position === 'left' ? 'ml-4 md:ml-12' : 'mr-4 md:mr-12 ml-auto'
      } ${className}`}
      style={{ borderColor: color }}
    >
      <div className="flex gap-1.5 mb-2">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
      </div>
      <div className="font-mono text-xs md:text-sm">
        {content.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.1 * i, duration: 0.3 }}
            className={`${i % 3 === 0 ? `text-${color}-400` : i % 3 === 1 ? 'text-gray-300' : `text-${color}-200`}`}
          >
            {line}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const AnimatedCodeSpline: React.FC = () => {
  return (
    <div className="relative py-10 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid opacity-10"></div>
      
      {/* Left code block */}
      <CodeBlock 
        delay={0.1}
        position="left"
        color="blue"
        content={[
          "function generateLeads() {",
          "  const markets = ['Miami', 'Orlando', 'Tampa'];",
          "  return ai.scan(markets, { minPrice: 3000000 });"
        ]}
      />
      
      {/* Code line */}
      <div className="my-4 px-4">
        <CodeLine width={80} delay={0.7} color="#1A9BD7" />
      </div>
      
      {/* Right code block */}
      <CodeBlock 
        delay={1.0}
        position="right"
        color="orange"
        content={[
          "function analyzeProperty(deal) {",
          "  return {",
          "    capRate: deal.income / deal.price",
          "  };",
          "}"
        ]}
      />
      
      {/* Code line */}
      <div className="my-4 px-4">
        <CodeLine width={60} delay={1.7} color="#FF8024" />
      </div>
      
      {/* Left code block */}
      <CodeBlock 
        delay={2.0}
        position="left"
        color="blue"
        content={[
          "async function scheduleTour(property, client) {",
          "  const times = await client.availability();",
          "  return bookCalendar(property, times[0]);",
          "}"
        ]}
      />
      
      {/* Particles animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-eagle-blue opacity-70"
            initial={{
              x: `${50 + (Math.random() * 10) - 5}%`,
              y: "-10%",
              opacity: 0
            }}
            animate={{
              y: "110%",
              opacity: [0, 0.8, 0],
              x: `${50 + (Math.sin(i) * 15)}%`
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedCodeSpline;
