import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";
import BackgroundLogo from "@/components/BackgroundLogo";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Features from "@/pages/Features";
import Mission from "@/pages/Mission";
import Reviews from "@/pages/Reviews";
import Blog from "@/pages/Blog";
import BlogPost1 from "@/pages/BlogPost1";
import BlogPost2 from "@/pages/BlogPost2";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/features" component={Features} />
      <Route path="/mission" component={Mission} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/what-is-nexus" component={BlogPost1} />
      <Route path="/blog/creative-ways-to-use-nexus" component={BlogPost2} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [location] = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const showBgLogo = location !== "/";

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <div className="min-h-screen bg-black text-white font-nexus">
          {isLoading && <LoadingScreen />}
          <Navigation />
          {showBgLogo && <BackgroundLogo opacityClass="opacity-10" />}
          <Router />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
