import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ArrowRight, Star, Users, Award } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">YourBrand</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-smooth">Features</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-smooth">About</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-smooth">Contact</a>
          </nav>
          <Button>Get Started</Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to Our Platform
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Simple, powerful, and designed for you. Start your journey today with our amazing platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white/20 text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Us?
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We provide everything you need to succeed with our simple yet powerful platform.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover-lift">
                <CardContent className="p-8 text-center">
                  <Star className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-3">Premium Quality</h4>
                  <p className="text-muted-foreground">
                    Top-notch quality in everything we do, ensuring you get the best experience possible.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover-lift">
                <CardContent className="p-8 text-center">
                  <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-3">Great Support</h4>
                  <p className="text-muted-foreground">
                    Our dedicated team is here to help you succeed every step of the way.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover-lift">
                <CardContent className="p-8 text-center">
                  <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-3">Proven Results</h4>
                  <p className="text-muted-foreground">
                    Join thousands of satisfied customers who have achieved their goals with us.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-accent text-accent-foreground">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join our community today and discover what makes us different.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-lg font-semibold mb-4">YourBrand</h5>
              <p className="text-muted-foreground">
                Building amazing experiences for our customers worldwide.
              </p>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Product</h6>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-smooth">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Support</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Company</h6>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-smooth">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Careers</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Connect</h6>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-smooth">Twitter</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">LinkedIn</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 YourBrand. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
