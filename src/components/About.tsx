
import { Zap, BarChart, Shield, Sparkles, Clock, Wind, Sun, Battery } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { 
  BarChart as RechartsBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

const About = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardHover = (index: number | null) => {
    setActiveCard(index);
  };

  // Data from the second image for queue statistics
  const queueData = [
    { name: 'Wind', months: 40, projects: 841, fill: '#3E7CB1' },
    { name: 'Solar', months: 34, projects: 4506, fill: '#F9A826' },
    { name: 'Wind + Storage', months: 34, projects: 76, fill: '#5C8EAD' },
    { name: 'Solar + Storage', months: 27, projects: 2377, fill: '#C7A82B' },
    { name: 'Storage', months: 24, projects: 2818, fill: '#A2D22A' }
  ];

  // Calculate percentages and totals
  const totalProjects = queueData.reduce((acc, curr) => acc + curr.projects, 0);
  const solarPercentage = Math.round((queueData[1].projects / totalProjects) * 100);
  const storagePercentage = Math.round((queueData[4].projects / totalProjects) * 100);
  const solarStoragePercentage = Math.round(((queueData[1].projects + queueData[3].projects + queueData[4].projects) / totalProjects) * 100);
  const averageWaitTime = Math.round(queueData.reduce((acc, curr) => acc + curr.months, 0) / queueData.length);
  const totalCapacityGW = 850; // Approximate based on the data

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Fun background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-solstice-lightblue/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-solstice-green/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-solstice-blue/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4 text-solstice-lightblue" />
            <span className="text-sm font-medium text-solstice-blue">Our Mission</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-solstice-blue mb-4">
            Unlocking Renewable Energy's Potential
          </h2>
          <p className="text-lg text-gray-700">
            Solstice is bridging the gap between renewable energy developers and data centers, solving critical interconnection challenges through innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card 
            className={`bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden ${activeCard === 0 ? 'scale-105 shadow-lg z-10' : ''}`}
            onMouseEnter={() => handleCardHover(0)}
            onMouseLeave={() => handleCardHover(null)}
          >
            <div className={`h-2 bg-solstice-blue transition-all duration-300 ${activeCard === 0 ? 'h-3' : ''}`}></div>
            <CardContent className="pt-6">
              <div className={`bg-solstice-gray p-3 rounded-full w-12 h-12 flex items-center justify-center mb-5 transform transition-transform duration-300 ${activeCard === 0 ? 'scale-110 rotate-6' : ''}`}>
                <Zap className={`h-6 w-6 text-solstice-blue transition-all duration-300 ${activeCard === 0 ? 'text-solstice-lightblue' : ''}`} />
              </div>
              <h3 className="text-xl font-display font-semibold text-solstice-dark mb-3">Unblocking Renewable Projects</h3>
              <p className="text-gray-600">
                We accelerate projects stuck in interconnection queues, reducing wait times from {averageWaitTime} months to under 12 months, enabling faster deployment of clean energy resources.
              </p>
            </CardContent>
          </Card>

          <Card 
            className={`bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden ${activeCard === 1 ? 'scale-105 shadow-lg z-10' : ''}`}
            onMouseEnter={() => handleCardHover(1)}
            onMouseLeave={() => handleCardHover(null)}
          >
            <div className={`h-2 bg-solstice-lightblue transition-all duration-300 ${activeCard === 1 ? 'h-3' : ''}`}></div>
            <CardContent className="pt-6">
              <div className={`bg-solstice-gray p-3 rounded-full w-12 h-12 flex items-center justify-center mb-5 transform transition-transform duration-300 ${activeCard === 1 ? 'scale-110 rotate-6' : ''}`}>
                <BarChart className={`h-6 w-6 text-solstice-blue transition-all duration-300 ${activeCard === 1 ? 'text-solstice-lightblue' : ''}`} />
              </div>
              <h3 className="text-xl font-display font-semibold text-solstice-dark mb-3">Powering AI Infrastructure</h3>
              <p className="text-gray-600">
                Our innovative approach ensures AI data centers and critical workloads have access to reliable, renewable energy, supporting the growing demand for sustainable computing.
              </p>
            </CardContent>
          </Card>

          <Card 
            className={`bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden ${activeCard === 2 ? 'scale-105 shadow-lg z-10' : ''}`}
            onMouseEnter={() => handleCardHover(2)}
            onMouseLeave={() => handleCardHover(null)}
          >
            <div className={`h-2 bg-solstice-green transition-all duration-300 ${activeCard === 2 ? 'h-3' : ''}`}></div>
            <CardContent className="pt-6">
              <div className={`bg-solstice-gray p-3 rounded-full w-12 h-12 flex items-center justify-center mb-5 transform transition-transform duration-300 ${activeCard === 2 ? 'scale-110 rotate-6' : ''}`}>
                <Shield className={`h-6 w-6 text-solstice-blue transition-all duration-300 ${activeCard === 2 ? 'text-solstice-green' : ''}`} />
              </div>
              <h3 className="text-xl font-display font-semibold text-solstice-dark mb-3">Energy Security & Stability</h3>
              <p className="text-gray-600">
                We provide energy storage as a service, enhancing grid stability while creating more resilient and reliable renewable energy systems for mission-critical applications.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-gradient-to-br from-solstice-gray via-white to-solstice-gray/50 rounded-xl p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-solstice-blue mb-4 relative inline-block">
                Our Mission
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-solstice-lightblue/50 rounded-full"></div>
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                At Solstice, we're committed to accelerating the clean energy transition by creating innovative solutions that bridge the gap between renewable energy developers and energy consumers.
              </p>
              <p className="text-lg text-gray-700">
                We believe in a future where clean energy powers our most demanding technologies, from AI to cloud computing, without compromising reliability or performance.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
              <h4 className="text-xl font-display font-semibold text-solstice-dark mb-4">The Challenge We Solve</h4>
              <div className="space-y-4">
                <div className="flex items-start group">
                  <div className="bg-solstice-blue/10 rounded-full p-1 mr-3 mt-1 group-hover:bg-solstice-blue/30 transition-colors duration-300">
                    <div className="w-2 h-2 bg-solstice-blue rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  </div>
                  <p className="text-gray-700">Over <span className="font-semibold text-solstice-blue">{totalProjects.toLocaleString()} renewable energy projects</span> representing approximately <span className="font-semibold text-solstice-blue">{totalCapacityGW} GW</span> of capacity are currently stuck in interconnection queues across the US</p>
                </div>
                <div className="flex items-start group">
                  <div className="bg-solstice-blue/10 rounded-full p-1 mr-3 mt-1 group-hover:bg-solstice-blue/30 transition-colors duration-300">
                    <div className="w-2 h-2 bg-solstice-blue rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  </div>
                  <p className="text-gray-700">Solar and storage projects make up <span className="font-semibold text-solstice-blue">{solarStoragePercentage}%</span> of all projects in queues, with solar alone accounting for <span className="font-semibold text-solstice-blue">{solarPercentage}%</span></p>
                </div>
                <div className="flex items-start group">
                  <div className="bg-solstice-blue/10 rounded-full p-1 mr-3 mt-1 group-hover:bg-solstice-blue/30 transition-colors duration-300">
                    <div className="w-2 h-2 bg-solstice-blue rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  </div>
                  <p className="text-gray-700">The average wait time across all project types is <span className="font-semibold text-solstice-blue">{averageWaitTime} months</span>, with wind projects facing the longest delays at <span className="font-semibold text-solstice-blue">40 months</span></p>
                </div>
                <div className="flex items-start group">
                  <div className="bg-solstice-green/10 rounded-full p-1 mr-3 mt-1 group-hover:bg-solstice-green/30 transition-colors duration-300">
                    <div className="w-2 h-2 bg-solstice-green rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  </div>
                  <p className="text-gray-700 font-medium">Solstice bridges this gap with innovative solutions that can reduce wait times by up to 75% and unlock gigawatts of clean energy capacity</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Queue Statistics Section */}
        <div className="mt-16 bg-solstice-blue/5 rounded-xl p-8 md:p-12 shadow-sm">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-solstice-blue mb-6 text-center">
            Interconnection Queue Statistics
          </h3>
          <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            The national average wait time for renewable energy projects is <span className="font-semibold text-solstice-blue">{averageWaitTime} months</span>, with significant variation by project type. Reducing these wait times is critical for accelerating our clean energy transition.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="bg-[#F9A826]/10 p-3 rounded-full mr-4">
                  <Sun className="h-6 w-6 text-[#F9A826]" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-solstice-dark">Solar Projects</h4>
                  <p className="text-sm text-gray-600">Largest category by volume</p>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Total Projects:</span>
                  <span className="text-sm font-medium text-solstice-blue">{queueData[1].projects.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Average Wait:</span>
                  <span className="text-sm font-medium text-solstice-blue">{queueData[1].months} months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">% of Total:</span>
                  <span className="text-sm font-medium text-solstice-blue">{solarPercentage}%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="bg-[#A2D22A]/10 p-3 rounded-full mr-4">
                  <Battery className="h-6 w-6 text-[#A2D22A]" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-solstice-dark">Storage Projects</h4>
                  <p className="text-sm text-gray-600">Fastest growing segment</p>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Total Projects:</span>
                  <span className="text-sm font-medium text-solstice-blue">{queueData[4].projects.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Average Wait:</span>
                  <span className="text-sm font-medium text-solstice-blue">{queueData[4].months} months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">% of Total:</span>
                  <span className="text-sm font-medium text-solstice-blue">{storagePercentage}%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="bg-[#3E7CB1]/10 p-3 rounded-full mr-4">
                  <Wind className="h-6 w-6 text-[#3E7CB1]" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-solstice-dark">Wind Projects</h4>
                  <p className="text-sm text-gray-600">Longest wait times</p>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Total Projects:</span>
                  <span className="text-sm font-medium text-solstice-blue">{queueData[0].projects.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Average Wait:</span>
                  <span className="text-sm font-medium text-solstice-blue">{queueData[0].months} months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Capacity Potential:</span>
                  <span className="text-sm font-medium text-solstice-blue">~{Math.round(totalCapacityGW * 0.15)} GW</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h4 className="text-xl font-semibold text-solstice-dark mb-4">Project Types by Queue Duration</h4>
            <div className="h-80 w-full">
              <ChartContainer
                config={{
                  months: { color: "#3E7CB1" },
                  projects: { color: "#5A8D50" }
                }}
              >
                <RechartsBarChart
                  data={queueData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" orientation="left" label={{ value: 'Months in Queue', angle: -90, position: 'insideLeft' }} />
                  <YAxis yAxisId="right" orientation="right" label={{ value: '# of Projects', angle: 90, position: 'insideRight' }} />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar yAxisId="left" dataKey="months" name="Months in Queue" fill="#3E7CB1" />
                  <Bar yAxisId="right" dataKey="projects" name="Number of Projects" fill="#5A8D50" />
                </RechartsBarChart>
              </ChartContainer>
            </div>
            <p className="text-xs text-gray-500 mt-4">Source: Berkeley Lab Dataset, 2023. Shows all active projects in queues (excludes Hawaii and Alaska).</p>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-solstice-blue/5 p-4 rounded-lg">
                <h5 className="text-lg font-semibold text-solstice-blue mb-3">Impacts on Clean Energy Transition</h5>
                <p className="text-sm text-gray-700">
                  Unblocking the interconnection queue could accelerate the U.S. clean energy transition by up to 5 years, allowing approximately {totalCapacityGW} GW of renewable capacity to come online sooner. This would significantly reduce carbon emissions and help meet climate goals.
                </p>
              </div>
              <div className="bg-solstice-green/5 p-4 rounded-lg">
                <h5 className="text-lg font-semibold text-solstice-green mb-3">Economic Benefits</h5>
                <p className="text-sm text-gray-700">
                  Reducing wait times by 50% could generate over $100 billion in economic activity and create thousands of clean energy jobs. Solar and storage projects, which represent {solarStoragePercentage}% of the queue, have the potential to transform the energy landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
