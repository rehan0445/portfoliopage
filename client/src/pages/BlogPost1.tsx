import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import ScrollReveal from "@/components/ScrollReveal";

export default function BlogPost1() {
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
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600" 
              alt="Digital networking and social connections" 
              className="w-full h-96 object-cover rounded-2xl shadow-2xl shadow-nexus-gold/20" 
            />
          </div>
        </ScrollReveal>
        
        <ScrollReveal>
          <h1 className="text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-nexus-gold to-nexus-gold-light bg-clip-text text-transparent">
              What is Nexus?
            </span>
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Imagine a place where you can join small, meaningful conversations — sometimes with real people who share your hobbies, sometimes with helpful AI characters who make chatting fun and safe. That's Nexus in a nutshell: a hybrid social platform designed to turn digital contact into real connection, not noise.
            </p>
            
            <h2 className="text-3xl font-bold text-nexus-gold mt-12 mb-6">Why Nexus exists (the problem we're fixing)</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Today's big social apps are noisy: endless feeds, high pressure to perform, and lots of shallow interactions. At the same time, many people feel lonely or stuck — they want conversation that matters, not just content to scroll past.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Nexus was built to fix that gap. Our core ideas:
            </p>
            <ul className="text-lg text-gray-300 leading-relaxed mb-6 space-y-2 list-disc pl-6">
              <li>Smaller-group conversations that encourage real talk, not broadcasting.</li>
              <li>Hybrid chats: humans + AI companions working together so you always have someone to talk to.</li>
              <li>Safety-first design so people feel supported and comfortable joining in.</li>
              <li>Think less "broadcast" and more "coffee table talk."</li>
            </ul>
            
            <h2 className="text-3xl font-bold text-nexus-gold mt-12 mb-6">How Nexus works</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Nexus mixes three pillars: group chats, AI companions, and community features.
            </p>
            
            <h3 className="text-2xl font-bold text-nexus-gold-light mt-8 mb-4">Group chats (human-first)</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Join topic-based rooms — like "Late-night coding help", "Beginner guitar practice" or "Daily motivation." Groups are purposely small or curated to keep conversations meaningful.
            </p>
            
            <h3 className="text-2xl font-bold text-nexus-gold-light mt-8 mb-4">AI companions (assistant but friendly)</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              These are AI characters you can talk to: imagine a polite study buddy, a travel-planning friend, or an anime character who remembers your favorite shows. The AI is there to help start conversations, answer simple questions, and keep rooms active when humans aren't around.
            </p>
            
            <h3 className="text-2xl font-bold text-nexus-gold-light mt-8 mb-4">Hybrid flow (AI + humans together)</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              If a room gets quiet, the AI can gently prompt topics or summarize recent messages. If a human joins with a serious question, the AI steps back and lets people respond. Humans are always the priority.
            </p>
            
            <h3 className="text-2xl font-bold text-nexus-gold-light mt-8 mb-4">Other useful features:</h3>
            <ul className="text-lg text-gray-300 leading-relaxed mb-6 space-y-2 list-disc pl-6">
              <li>Anonymous mode for people who want to try talking without revealing identity.</li>
              <li>Mood based mingle</li>
              <li>Events & workshops for real-time experiences (study sessions, mini-classes, guided chats).</li>
            </ul>
            
            <h2 className="text-3xl font-bold text-nexus-gold mt-12 mb-6">Why Nexus is different</h2>
            <ul className="text-lg text-gray-300 leading-relaxed mb-6 space-y-2 list-disc pl-6">
              <li>Designed around conversation quality, not engagement metrics. We measure success by the number of meaningful interactions, not time spent scrolling.</li>
              <li>Hybrid human-AI setup keeps rooms active without replacing human relationships.</li>
              <li>Small, purpose-driven groups reduce noise and make it easier to form real connections.</li>
            </ul>
            
            <div className="bg-nexus-dark p-8 rounded-2xl border border-nexus-gold/20 mt-12">
              <h3 className="text-2xl font-bold text-nexus-gold mb-4">Ready to get started?</h3>
              <p className="text-lg text-gray-300 mb-6">
                Join thousands of Indians who are already experiencing the future of social networking.
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
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}