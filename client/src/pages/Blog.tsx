import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const blogPosts = [
  {
    title: "What is Nexus?",
    description: "Discover the story behind India's first hybrid social network. Learn why we built Nexus, how it works, and why meaningful conversations matter more than endless scrolling.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    alt: "Digital networking and social connections"
  },
  {
    title: "Creative Ways to Use Nexus",
    description: "From study buddy rooms to language practice circles, anime character chats to confession pages - explore innovative ways to connect, learn, and grow on Nexus.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    alt: "Creative collaboration and learning together"
  }
];

export default function Blog() {
  return (
    <section className="py-24 pt-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-nexus-gold to-nexus-gold-light bg-clip-text text-transparent">
              Blog Highlights
            </span>
          </h2>
          <p className="text-xl text-gray-300">Discover insights, stories, and creative ways to connect</p>
          <div className="w-24 h-1 bg-gradient-to-r from-nexus-gold to-nexus-gold-light mx-auto mt-6"></div>
        </ScrollReveal>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {blogPosts.map((post, index) => (
            <ScrollReveal 
              key={post.title} 
              delay={index * 0.3}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <motion.div 
                className="bg-nexus-dark rounded-2xl border border-nexus-gold/20 overflow-hidden hover:border-nexus-gold/50 transition-all duration-300 cursor-pointer group"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                data-testid={`blog-card-${index}`}
              >
                <div className="overflow-hidden">
                  <motion.img 
                    src={post.image} 
                    alt={post.alt} 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-nexus-gold mb-4 group-hover:text-nexus-gold-light transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {post.description}
                  </p>
                  <span className="text-nexus-gold font-semibold group-hover:underline">
                    Read More →
                  </span>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
