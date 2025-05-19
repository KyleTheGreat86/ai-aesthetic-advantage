
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface PainPointCardProps {
  title: string;
  description: string;
  imageSrc: string;
  delay: number;
}

const PainPointCard: React.FC<PainPointCardProps> = ({ title, description, imageSrc, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <Card className="bg-white shadow-md hover:shadow-xl transition-shadow overflow-hidden">
        <div className="h-52 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
          />
        </div>
        <CardContent className="p-5">
          <h3 className="text-xl font-bold mb-2 text-eagle-dark">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const PainPoints: React.FC = () => {
  const painPoints = [
    {
      title: "Missed Deals",
      description: "47% of off-market deals slip through due to manual prospecting.",
      imageSrc: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Admin Overload",
      description: "60% of your time is spent on spreadsheets and scheduling.",
      imageSrc: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Dormant Clients",
      description: "Unnurtured clients cost you $250K+ in repeat deals.",
      imageSrc: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    }
  ];

  return (
    <section className="py-20 bg-white relative" id="pain-points">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-eagle-dark">
            Why Your Brokerage Is Leaving $1M on the Table
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Florida CRE brokers are losing deals and revenue due to these common challenges:
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <PainPointCard 
              key={index}
              title={point.title}
              description={point.description}
              imageSrc={point.imageSrc}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button 
            asChild
            size="lg"
            className="bg-eagle-dark text-white hover:bg-eagle-dark/90 uppercase font-semibold"
          >
            <Link to="/profit-maximizer">
              See How to Fix This
            </Link>
          </Button>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-eagle-gold/10 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-eagle-gold/5 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl"></div>
    </section>
  );
};

export default PainPoints;
