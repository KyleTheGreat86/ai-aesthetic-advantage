
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
    <div className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid opacity-10"></div>
      
      <div className="max-w-5xl mx-auto px-4 relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full top-0 w-[1px] bg-gradient-to-b from-eagle-blue via-purple-500 to-eagle-orange opacity-50"></div>
        
        {/* Code Lines */}
        <div className="space-y-14 relative">
          {/* Block 1 */}
          <div className="relative">
            <CodeLine width={70} delay={0.2} color="#1A9BD7" className="ml-auto" />
            <CodeBlock
              delay={0.4}
              position="right"
              color="#1A9BD7"
              content={[
                "// AI Deal Finder",
                "const scanMarkets = async () => {",
                "  const deals = await ai.findDeals({",
                "    minPrice: 3000000,",
                "    maxPrice: 20000000,",
                "    type: 'off-market'",
                "  });",
                "  return deals.filter(isViable);",
                "};"
              ]}
            />
          </div>
          
          {/* Block 2 */}
          <div className="relative pt-4">
            <CodeLine width={65} delay={0.6} color="#FF8024" className="" />
            <CodeBlock
              delay={0.8}
              position="left"
              color="#FF8024"
              content={[
                "// Auto Deal Analysis",
                "function analyzeProperty(deal) {",
                "  const metrics = calculateMetrics({",
                "    capRate: deal.income / deal.price,",
                "    roi: predictedValue / deal.price,",
                "    risk: assessRisk(deal.location)",
                "  });",
                "  return metrics;",
                "}"
              ]}
            />
          </div>
          
          {/* Block 3 */}
          <div className="relative pt-4">
            <CodeLine width={80} delay={1.0} color="#D946EF" className="ml-auto" />
            <CodeBlock
              delay={1.2}
              position="right"
              color="#D946EF"
              content={[
                "// Client Matching",
                "const matchClients = (deal) => {",
                "  return clients.filter(client => {",
                "    return client.preferences.matches({",
                "      dealSize: deal.price,",
                "      location: deal.location,",
                "      propertyType: deal.type",
                "    });",
                "  });",
                "};"
              ]}
            />
          </div>
        </div>
        
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
    </div>
  );
};

export default AnimatedCodeSpline;
