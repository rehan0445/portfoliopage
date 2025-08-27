import { motion } from "framer-motion";
import { ArrowLeft, Users, MessageCircle, Eye, Heart, Zap } from "lucide-react";
import { Link } from "wouter";
import ScrollReveal from "@/components/ScrollReveal";

const creativeWays = [
  {
    icon: Users,
    title: "Study Buddy Rooms",
    description: "Small, focused rooms for joint studying, problem-solving, or exam prep.",
    whyItWorks: "Accountability + instant help (AI hints + peer support) beat solo cramming.",
    example: "\"DSA: 2-hour sprint\" — students take turns explaining problems while AI provides hints or simplifications.",
    howToTry: ["Create room", "Pin one learning goal", "Schedule a 2-hour sprint", "Use the AI companion as a hint-bot"]
  },
  {
    icon: MessageCircle,
    title: "Language Practice Circles",
    description: "Conversational groups for practicing a language (casual chats, story swaps, grammar mini-lessons).",
    whyItWorks: "Low-pressure practice with friendly correction from humans and AI.",
    example: "\"Spanish Coffee Hour\" — 30 min casual talk, 10 min vocabulary game run by an AI.",
    howToTry: ["Start a weekly recurring room", "Set \"only Spanish\" rule", "Ask AI to prepare 5 warm-up questions"]
  },
  {
    icon: Heart,
    title: "Anime Character Rooms",
    description: "Connect with AI companions inspired by your favorite anime characters.",
    whyItWorks: "Familiar personalities make conversations comfortable and engaging.",
    example: "Chat with an AI version of your favorite anime character about daily life, get advice, or discuss episodes.",
    howToTry: ["Choose your favorite character", "Start casual conversation", "Share your day or ask for advice"]
  },
  {
    icon: Eye,
    title: "Confession Pages",
    description: "Anonymous spaces for sharing thoughts, experiences, and seeking support.",
    whyItWorks: "Safe environment encourages honest sharing and meaningful support.",
    example: "Share personal struggles or achievements anonymously while receiving empathetic responses from community.",
    howToTry: ["Enter anonymous mode", "Share your thoughts", "Offer support to others"]
  },
  {
    icon: Zap,
    title: "Connect & Thrive",
    description: "Building genuine connections through shared interests and mutual support.",
    whyItWorks: "Real relationships form through consistent, meaningful interactions.",
    example: "Join hobby groups, share experiences, and build lasting friendships with like-minded individuals.",
    howToTry: ["Find your interest group", "Participate regularly", "Be authentic and supportive"]
  }
];

export default function BlogPost2() {
  return (
    <section className="py-24 pt-32">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <Link href="/blog" className="inline-flex items-center text-nexus-gold hover:text-nexus-gold-light transition-colors mb-8" data-testid="back-to-blog">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </Link>
        </ScrollReveal>
        
        <ScrollReveal>
          <div className="mb-12">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600" 
              alt="Creative collaboration and learning together" 
              className="w-full h-96 object-cover rounded-2xl shadow-2xl shadow-nexus-gold/20" 
            />
          </div>
        </ScrollReveal>
        
        <ScrollReveal>
          <h1 className="text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-nexus-gold to-nexus-gold-light bg-clip-text text-transparent">
              Creative Ways to Use Nexus
            </span>
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Nexus isn't just another chat app — it's a toolkit for meaningful interaction. Below are a few creative, ready-to-use ways to get more out of Nexus right away. For each idea I give a short description, a concrete example, and a tiny "how to try it" checklist so you can launch in minutes.
            </p>
            
            <div className="space-y-12 mt-12">
              {creativeWays.map((way, index) => (
                <ScrollReveal key={way.title} delay={index * 0.1}>
                  <div className="bg-nexus-dark p-8 rounded-2xl border border-nexus-gold/20">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-nexus-gold to-nexus-gold-dark rounded-xl flex items-center justify-center mr-4">
                        <way.icon className="w-6 h-6 text-nexus-dark" />
                      </div>
                      <h2 className="text-3xl font-bold text-nexus-gold">{way.title}</h2>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-nexus-gold-light mb-2">What:</h3>
                        <p className="text-gray-300">{way.description}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-nexus-gold-light mb-2">Why it works:</h3>
                        <p className="text-gray-300">{way.whyItWorks}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-nexus-gold-light mb-2">Example:</h3>
                        <p className="text-gray-300 italic">"{way.example}"</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-nexus-gold-light mb-2">Try it:</h3>
                        <ul className="text-gray-300 space-y-1">
                          {way.howToTry.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-center">
                              <span className="w-2 h-2 bg-nexus-gold rounded-full mr-3"></span>
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            
            <ScrollReveal delay={0.5}>
              <h2 className="text-3xl font-bold text-nexus-gold mt-16 mb-6">Why these formats work for Nexus</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Nexus is built for meaningful, intentional conversation. These formats leverage the app's hybrid strengths — AI that seeds and supports, human members who bring empathy and judgment, and small-group design that encourages real relationships. Together they turn the platform from a place to scroll into a place to do, learn, and belong.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.6}>
              <div className="bg-nexus-dark p-8 rounded-2xl border border-nexus-gold/20 mt-12">
                <h3 className="text-2xl font-bold text-nexus-gold mb-4">Ready to explore these creative ways?</h3>
                <p className="text-lg text-gray-300 mb-6">
                  Join our community and start creating meaningful connections today.
                </p>
                <motion.button 
                  onClick={() => window.open('https://wa.me/919574102202', '_blank')}
                  className="bg-gradient-to-r from-nexus-gold to-nexus-gold-dark hover:from-nexus-gold-dark hover:to-nexus-gold text-nexus-dark px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  data-testid="join-whatsapp-button"
                >
                  Join WhatsApp Community
                </motion.button>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}