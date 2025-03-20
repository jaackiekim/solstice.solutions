
import { Server, Battery, Activity, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 bg-white dark:bg-solstice-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-solstice-blue dark:text-solstice-lightblue mb-4">
            Our Solutions
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Bridging renewable energy developers with data centers and high-demand workloads.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Software Solutions Card */}
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow dark:bg-solstice-dark/60 dark:border dark:border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Server className="h-7 w-7 text-solstice-blue dark:text-solstice-lightblue mr-3" />
                <h3 className="text-xl font-display font-semibold dark:text-white">Software Solutions</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Smart grid management and optimization tools for modern energy needs.</p>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-700 dark:text-gray-300 flex items-center">
                  <span className="bg-solstice-blue/10 dark:bg-solstice-blue/20 rounded-full p-1 mr-3">
                    <div className="w-1.5 h-1.5 bg-solstice-blue dark:bg-solstice-lightblue rounded-full"></div>
                  </span>
                  AI-powered load forecasting
                </li>
                <li className="text-gray-700 dark:text-gray-300 flex items-center">
                  <span className="bg-solstice-blue/10 dark:bg-solstice-blue/20 rounded-full p-1 mr-3">
                    <div className="w-1.5 h-1.5 bg-solstice-blue dark:bg-solstice-lightblue rounded-full"></div>
                  </span>
                  Real-time energy trading
                </li>
                <li className="text-gray-700 dark:text-gray-300 flex items-center">
                  <span className="bg-solstice-blue/10 dark:bg-solstice-blue/20 rounded-full p-1 mr-3">
                    <div className="w-1.5 h-1.5 bg-solstice-blue dark:bg-solstice-lightblue rounded-full"></div>
                  </span>
                  Grid integration support
                </li>
              </ul>
              <Button variant="ghost" className="text-solstice-blue dark:text-solstice-lightblue hover:text-solstice-blue hover:bg-solstice-blue/5 dark:hover:bg-solstice-blue/10 p-0 h-auto">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Load as a Service Card */}
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow dark:bg-solstice-dark/60 dark:border dark:border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Activity className="h-7 w-7 text-solstice-lightblue mr-3" />
                <h3 className="text-xl font-display font-semibold dark:text-white">Load as a Service</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Flexible computing workloads deployed when and where needed.</p>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-700 dark:text-gray-300 flex items-center">
                  <span className="bg-solstice-lightblue/10 dark:bg-solstice-lightblue/20 rounded-full p-1 mr-3">
                    <div className="w-1.5 h-1.5 bg-solstice-lightblue rounded-full"></div>
                  </span>
                  Modular data centers
                </li>
                <li className="text-gray-700 dark:text-gray-300 flex items-center">
                  <span className="bg-solstice-lightblue/10 dark:bg-solstice-lightblue/20 rounded-full p-1 mr-3">
                    <div className="w-1.5 h-1.5 bg-solstice-lightblue rounded-full"></div>
                  </span>
                  AI/HPC workload optimization
                </li>
                <li className="text-gray-700 dark:text-gray-300 flex items-center">
                  <span className="bg-solstice-lightblue/10 dark:bg-solstice-lightblue/20 rounded-full p-1 mr-3">
                    <div className="w-1.5 h-1.5 bg-solstice-lightblue rounded-full"></div>
                  </span>
                  Demand response services
                </li>
              </ul>
              <Button variant="ghost" className="text-solstice-lightblue hover:text-solstice-lightblue hover:bg-solstice-lightblue/5 dark:hover:bg-solstice-lightblue/10 p-0 h-auto">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Energy Storage Card */}
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow dark:bg-solstice-dark/60 dark:border dark:border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Battery className="h-7 w-7 text-solstice-green mr-3" />
                <h3 className="text-xl font-display font-semibold dark:text-white">Energy Storage</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Reliable power delivery when and where it's needed most.</p>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-700 dark:text-gray-300 flex items-center">
                  <span className="bg-solstice-green/10 dark:bg-solstice-green/20 rounded-full p-1 mr-3">
                    <div className="w-1.5 h-1.5 bg-solstice-green rounded-full"></div>
                  </span>
                  Scalable battery solutions
                </li>
                <li className="text-gray-700 dark:text-gray-300 flex items-center">
                  <span className="bg-solstice-green/10 dark:bg-solstice-green/20 rounded-full p-1 mr-3">
                    <div className="w-1.5 h-1.5 bg-solstice-green rounded-full"></div>
                  </span>
                  Long-duration storage
                </li>
                <li className="text-gray-700 dark:text-gray-300 flex items-center">
                  <span className="bg-solstice-green/10 dark:bg-solstice-green/20 rounded-full p-1 mr-3">
                    <div className="w-1.5 h-1.5 bg-solstice-green rounded-full"></div>
                  </span>
                  Power quality enhancement
                </li>
              </ul>
              <Button variant="ghost" className="text-solstice-green hover:text-solstice-green hover:bg-solstice-green/5 dark:hover:bg-solstice-green/10 p-0 h-auto">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <h3 className="text-2xl font-display font-bold text-solstice-blue dark:text-solstice-lightblue mb-8 text-center">How It Works</h3>
          
          <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
            <div className="text-center">
              <div className="bg-solstice-blue/5 dark:bg-solstice-blue/20 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-solstice-blue dark:text-solstice-lightblue">1</span>
              </div>
              <h4 className="text-lg font-semibold mb-2 dark:text-white">Connect</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Partner renewable energy with data centers
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-solstice-lightblue/5 dark:bg-solstice-lightblue/20 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-solstice-lightblue">2</span>
              </div>
              <h4 className="text-lg font-semibold mb-2 dark:text-white">Integrate</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Optimize energy flows with our software
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-solstice-green/5 dark:bg-solstice-green/20 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-solstice-green">3</span>
              </div>
              <h4 className="text-lg font-semibold mb-2 dark:text-white">Power</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Deliver clean energy to critical workloads
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
