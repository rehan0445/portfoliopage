import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 95741 02202"
  },
  {
    icon: Mail,
    title: "Email",
    value: "nexus.rehansurani@gmail.com"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "India"
  }
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your interest in Nexus. We'll get back to you soon!",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-24 bg-nexus-gray/30 pt-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-nexus-gold to-nexus-gold-light bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300">We'd love to hear from you</p>
          <div className="w-24 h-1 bg-gradient-to-r from-nexus-gold to-nexus-gold-light mx-auto mt-6"></div>
        </ScrollReveal>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <ScrollReveal direction="left" className="space-y-8">
            {contactInfo.map((info, index) => (
              <motion.div 
                key={info.title}
                className="flex items-center space-x-6"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-nexus-gold to-nexus-gold-dark rounded-xl flex items-center justify-center">
                  <info.icon className="w-8 h-8 text-nexus-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-nexus-gold">{info.title}</h3>
                  <p className="text-gray-300 text-lg">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </ScrollReveal>
          
          <ScrollReveal direction="right">
            <div className="bg-nexus-dark p-8 rounded-2xl border border-nexus-gold/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-nexus-gold font-semibold mb-2">Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-nexus-gray border-nexus-gold/20 text-white focus:border-nexus-gold"
                    placeholder="Your name"
                    required
                    data-testid="contact-name-input"
                  />
                </div>
                <div>
                  <label className="block text-nexus-gold font-semibold mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-nexus-gray border-nexus-gold/20 text-white focus:border-nexus-gold"
                    placeholder="your.email@example.com"
                    required
                    data-testid="contact-email-input"
                  />
                </div>
                <div>
                  <label className="block text-nexus-gold font-semibold mb-2">Message</label>
                  <Textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-nexus-gray border-nexus-gold/20 text-white focus:border-nexus-gold resize-none"
                    placeholder="Tell us about your thoughts on Nexus..."
                    required
                    data-testid="contact-message-input"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-nexus-gold to-nexus-gold-dark hover:from-nexus-gold-dark hover:to-nexus-gold text-nexus-dark font-semibold transform hover:scale-105 transition-all duration-300"
                  data-testid="contact-submit-button"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </ScrollReveal>
        </div>

        {/* CTA Section */}
        <ScrollReveal className="mt-24">
          <div className="py-24 relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-nexus-gold/20 to-nexus-gold-dark/20"></div>
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-nexus-gold to-nexus-gold-light bg-clip-text text-transparent">
                  Be Part of the Revolution
                </span>
              </h2>
              <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
                Join thousands of Indians who are already experiencing the future of social networking. Where real connections happen.
              </p>
              <Button 
                onClick={() => window.open('https://wa.me/919574102202', '_blank')}
                className="bg-gradient-to-r from-nexus-gold to-nexus-gold-dark hover:from-nexus-gold-dark hover:to-nexus-gold text-nexus-dark px-16 py-6 rounded-full text-2xl font-bold transform hover:scale-110 transition-all duration-300 shadow-2xl shadow-nexus-gold/50 relative overflow-hidden"
                data-testid="whatsapp-cta-button"
              >
                <span className="relative z-10">Join WhatsApp Community</span>
                <div className="absolute inset-0 shimmer-effect"></div>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
