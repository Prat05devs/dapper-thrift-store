import Button from "./ui/button";  
import { Card, CardContent } from "./ui/card";  
import { Badge } from "./ui/badge";  
import Link from "next/link";  
import { ArrowRight, Leaf, Heart, Package, Sparkles, ShoppingBag, Gift } from "lucide-react";  

export default function LandingPage() {
  return (
    <div className="flex flex-col text-center mt-5">
      <section className="relative py-20 md:py-32 overflow-hidden bg-[url('https://images.unsplash.com/photo-1501622832816-1ea85e83687a?q=80&w=2371&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
  <div className="container relative px-4 mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left Side - Text Content */}
      <div className="max-w-3xl flex flex-col items-start justify-center text-left">
  <Badge className="mb-6" variant="outline">
    🌟 Join Our Sustainable Fashion Movement
  </Badge>
  <h1 className="mb-6 text-4xl md:text-6xl font-bold tracking-tight">
    Discover Unique Style at <span className="text-primary">Dapper</span>
  </h1>
  <p className="mb-8 text-lg md:text-xl text-muted-foreground">
    Your curated marketplace for premium pre-loved fashion. Buy, sell, and make a difference.
  </p>
  <div className="flex flex-col sm:flex-row gap-4">
    <Button size="lg" className="gap-2 bg-white" asChild>
      <Link href="/shop">
        Start Shopping
        <ArrowRight className="h-4 w-4" />
      </Link>
    </Button>
    <Button size="lg" className="bg-white" variant="outline" asChild>
      <Link href="/sell">List Your Items</Link>
    </Button>
  </div>
</div>


      {/* Right Side - Image */}
      <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&auto=format&fit=crop" 
          alt="Fashion Image"
          className="absolute inset-0 w-full h-full object-cover rounded-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50" />
      </div>
    </div>
  </div>
</section>


      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Dapper?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join our community of conscious shoppers and sellers making a positive impact on fashion and the environment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <Card className="bg-background/50 backdrop-blur-sm border-none">
              <CardContent className="pt-8">
                <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Shop Sustainably</h3>
                <p className="text-muted-foreground">
                  Reduce fashion waste while discovering unique pieces that tell a story.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background/50 backdrop-blur-sm border-none">
              <CardContent className="pt-8">
                <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                  <ShoppingBag className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Sell With Ease</h3>
                <p className="text-muted-foreground">
                  Turn your closet into cash with our simple, secure selling process.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background/50 backdrop-blur-sm border-none">
              <CardContent className="pt-8">
                <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Give Back</h3>
                <p className="text-muted-foreground">
                  Make a difference by donating items to those in need.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Simple & Seamless</Badge>
            <h2 className="text-3xl font-bold mb-4">How Dapper Works</h2>
            <p className="text-muted-foreground mt-10 max-w-2xl mx-auto">
              Your journey to sustainable fashion starts here. Buy, sell, or donate in just a few steps.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Browse & Discover</h3>
              <p className="text-muted-foreground">
                Explore our curated collection of pre-loved fashion treasures.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Buy or List</h3>
              <p className="text-muted-foreground">
                Purchase unique finds or list your items for others to discover.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Gift className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Make an Impact</h3>
              <p className="text-muted-foreground">
                Join our community in promoting sustainable fashion choices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Our Impact</Badge>
            <h2 className="text-3xl font-bold mb-4">Making Fashion Sustainable</h2>
            <p className="text-muted-foreground mb-8">
              Together, we're creating a more sustainable future for fashion. Every purchase and donation makes a difference.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">5K+</div>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">10K+</div>
                <p className="text-sm text-muted-foreground">Items Sold</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">2K+</div>
                <p className="text-sm text-muted-foreground">Items Donated</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">15T</div>
                <p className="text-sm text-muted-foreground">CO₂ Saved</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Dapper?</h2>
            <p className="text-muted-foreground mb-8">
              Start your sustainable fashion journey today. Join thousands of conscious shoppers making a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/shop">Start Shopping</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/sell">Become a Seller</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
