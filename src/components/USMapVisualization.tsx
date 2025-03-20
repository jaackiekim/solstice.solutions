
import { useEffect, useRef, useState } from "react";
import { ChartContainer } from "@/components/ui/chart";
import { Clock, MapPin, Wind, Sun, Battery } from "lucide-react";

const USMapVisualization = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredState, setHoveredState] = useState<{ name: string; projects: number; waitTime: number } | null>(null);
  
  // State data from the second image
  const stateData = [
    { id: "CA", name: "California", projects: 334, waitTime: 34, color: "#25A97E" },
    { id: "TX", name: "Texas", projects: 1208, waitTime: 34, color: "#25A97E" },
    { id: "NY", name: "New York", projects: 481, waitTime: 35, color: "#25A97E" },
    { id: "FL", name: "Florida", projects: 354, waitTime: 33, color: "#4169A0" },
    { id: "IL", name: "Illinois", projects: 137, waitTime: 32, color: "#25A97E" },
    { id: "PA", name: "Pennsylvania", projects: 116, waitTime: 36, color: "#25A97E" },
    { id: "OH", name: "Ohio", projects: 507, waitTime: 38, color: "#25A97E" },
    { id: "GA", name: "Georgia", projects: 105, waitTime: 32, color: "#25A97E" },
    { id: "NC", name: "North Carolina", projects: 189, waitTime: 33, color: "#25A97E" },
    { id: "MI", name: "Michigan", projects: 460, waitTime: 36, color: "#25A97E" },
    { id: "NJ", name: "New Jersey", projects: 39, waitTime: 35, color: "#4169A0" },
    { id: "VA", name: "Virginia", projects: 163, waitTime: 33, color: "#4169A0" },
    { id: "WA", name: "Washington", projects: 244, waitTime: 34, color: "#25A97E" },
    { id: "AZ", name: "Arizona", projects: 197, waitTime: 30, color: "#25A97E" },
    { id: "MA", name: "Massachusetts", projects: 188, waitTime: 36, color: "#25A97E" },
    { id: "TN", name: "Tennessee", projects: 78, waitTime: 32, color: "#25A97E" },
    { id: "IN", name: "Indiana", projects: 235, waitTime: 33, color: "#25A97E" },
    { id: "MO", name: "Missouri", projects: 216, waitTime: 31, color: "#25A97E" },
    { id: "MD", name: "Maryland", projects: 123, waitTime: 35, color: "#4169A0" },
    { id: "WI", name: "Wisconsin", projects: 102, waitTime: 32, color: "#25A97E" },
    { id: "MN", name: "Minnesota", projects: 136, waitTime: 34, color: "#25A97E" },
    { id: "CO", name: "Colorado", projects: 147, waitTime: 32, color: "#25A97E" },
    { id: "AL", name: "Alabama", projects: 101, waitTime: 31, color: "#25A97E" },
    { id: "LA", name: "Louisiana", projects: 104, waitTime: 33, color: "#25A97E" },
    { id: "KY", name: "Kentucky", projects: 743, waitTime: 37, color: "#25A97E" },
    { id: "OR", name: "Oregon", projects: 418, waitTime: 35, color: "#25A97E" },
    { id: "OK", name: "Oklahoma", projects: 210, waitTime: 32, color: "#25A97E" },
    { id: "CT", name: "Connecticut", projects: 67, waitTime: 35, color: "#25A97E" },
    { id: "IA", name: "Iowa", projects: 102, waitTime: 33, color: "#25A97E" },
    { id: "MS", name: "Mississippi", projects: 104, waitTime: 31, color: "#25A97E" },
    { id: "AR", name: "Arkansas", projects: 210, waitTime: 32, color: "#25A97E" },
    { id: "KS", name: "Kansas", projects: 233, waitTime: 33, color: "#25A97E" },
    { id: "UT", name: "Utah", projects: 116, waitTime: 30, color: "#25A97E" },
    { id: "NV", name: "Nevada", projects: 84, waitTime: 30, color: "#25A97E" },
    { id: "NM", name: "New Mexico", projects: 167, waitTime: 32, color: "#25A97E" },
    { id: "NE", name: "Nebraska", projects: 141, waitTime: 32, color: "#25A97E" },
    { id: "WV", name: "West Virginia", projects: 116, waitTime: 37, color: "#25A97E" },
    { id: "ID", name: "Idaho", projects: 102, waitTime: 30, color: "#F9A826" },
    { id: "HI", name: "Hawaii", projects: 0, waitTime: 0, color: "#DDDDDD" },
    { id: "ME", name: "Maine", projects: 83, waitTime: 34, color: "#25A97E" },
    { id: "NH", name: "New Hampshire", projects: 14, waitTime: 34, color: "#25A97E" },
    { id: "RI", name: "Rhode Island", projects: 48, waitTime: 35, color: "#4169A0" },
    { id: "MT", name: "Montana", projects: 331, waitTime: 34, color: "#25A97E" },
    { id: "DE", name: "Delaware", projects: 0, waitTime: 0, color: "#4169A0" },
    { id: "SD", name: "South Dakota", projects: 97, waitTime: 31, color: "#25A97E" },
    { id: "ND", name: "North Dakota", projects: 62, waitTime: 32, color: "#25A97E" },
    { id: "AK", name: "Alaska", projects: 0, waitTime: 0, color: "#DDDDDD" },
    { id: "VT", name: "Vermont", projects: 0, waitTime: 0, color: "#4169A0" },
    { id: "WY", name: "Wyoming", projects: 63, waitTime: 31, color: "#F9A826" }
  ];

  // Project type data from the second image
  const projectTypeData = [
    { type: "Wind", waitTime: 40, projects: 841, color: "#3E7CB1", icon: <Wind className="h-4 w-4" /> },
    { type: "Solar", waitTime: 34, projects: 4506, color: "#F9A826", icon: <Sun className="h-4 w-4" /> },
    { type: "Wind + Storage", waitTime: 34, projects: 76, color: "#5C8EAD", icon: <Wind className="h-4 w-4" /> },
    { type: "Solar + Storage", waitTime: 27, projects: 2377, color: "#C7A82B", icon: <Sun className="h-4 w-4" /> },
    { type: "Storage", waitTime: 24, projects: 2818, color: "#A2D22A", icon: <Battery className="h-4 w-4" /> }
  ];

  // Find state with most projects and longest wait time
  const maxProjects = Math.max(...stateData.map(state => state.projects));
  const maxWaitTime = Math.max(...stateData.map(state => state.waitTime));
  const totalProjects = stateData.reduce((sum, state) => sum + state.projects, 0);

  // Calculate total GW and percentages
  const totalProjectCount = projectTypeData.reduce((sum, type) => sum + type.projects, 0);
  const solarPercentage = Math.round((projectTypeData[1].projects / totalProjectCount) * 100);
  const storagePercentage = Math.round((projectTypeData[4].projects / totalProjectCount) * 100);
  const averageWaitTime = projectTypeData.reduce((sum, type) => sum + type.waitTime, 0) / projectTypeData.length;
  const estimatedCapacity = 850; // Approximate GW in interconnection queues

  useEffect(() => {
    // Canvas setup
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Pseudo-3D map rendering with wait time visualization
    const drawUSMap = () => {
      stateData.forEach((state, index) => {
        // Simplified state drawing - in a real app we'd use GeoJSON and a mapping library
        const x = 50 + (index % 10) * 80;
        const y = 50 + Math.floor(index / 10) * 80;
        const size = 30 + (state.projects / maxProjects) * 40;
        const waitTimeHeight = state.waitTime > 0 ? (state.waitTime / maxWaitTime) * 50 : 0;
        
        // State base (top)
        ctx.beginPath();
        ctx.fillStyle = getWaitTimeColor(state.waitTime);
        ctx.rect(x, y, size, size);
        ctx.fill();
        
        // 3D effect (side) showing wait time height
        ctx.beginPath();
        ctx.fillStyle = shadeColor(getWaitTimeColor(state.waitTime), -20);
        ctx.moveTo(x, y + size);
        ctx.lineTo(x + size, y + size);
        ctx.lineTo(x + size, y + size + waitTimeHeight);
        ctx.lineTo(x, y + size + waitTimeHeight);
        ctx.fill();
        
        // State label
        ctx.fillStyle = '#fff';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(state.id, x + size/2, y + size/2 + 4);
        
        // Project count
        ctx.font = '10px Arial';
        ctx.fillText(state.waitTime > 0 ? `${state.waitTime}m` : "-", x + size/2, y + size + 15);
        
        // Hover detection logic
        canvas.onmousemove = (e) => {
          const rect = canvas.getBoundingClientRect();
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;
          
          if (
            mouseX > x && mouseX < x + size &&
            mouseY > y && mouseY < y + size + waitTimeHeight
          ) {
            setHoveredState(state);
          }
        };
        
        canvas.onmouseleave = () => {
          setHoveredState(null);
        };
      });
    };
    
    // Function to get color based on wait time
    function getWaitTimeColor(waitTime: number) {
      if (waitTime === 0) return "#DDDDDD";
      if (waitTime < 25) return "#25A97E"; // Shorter wait (green)
      if (waitTime < 30) return "#3C9B84";
      if (waitTime < 35) return "#4A8A8A"; 
      if (waitTime < 40) return "#5676A0";
      return "#3E7CB1"; // Longer wait (blue)
    }
    
    drawUSMap();
    
    // Helper function to darken/lighten colors
    function shadeColor(color: string, percent: number) {
      let R = parseInt(color.substring(1,3),16);
      let G = parseInt(color.substring(3,5),16);
      let B = parseInt(color.substring(5,7),16);

      R = Math.floor(R * (100 + percent) / 100);
      G = Math.floor(G * (100 + percent) / 100);
      B = Math.floor(B * (100 + percent) / 100);

      R = (R<255)?R:255;  
      G = (G<255)?G:255;  
      B = (B<255)?B:255;  

      const RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
      const GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
      const BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

      return "#"+RR+GG+BB;
    }
  }, [maxProjects, stateData, maxWaitTime]);
  
  return (
    <section id="map-visualization" className="py-20 bg-solstice-blue/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-solstice-blue mb-4">
            U.S. Interconnection Queue Map
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Over {totalProjects.toLocaleString()} renewable energy projects totaling approximately {estimatedCapacity} GW of capacity are currently stuck in interconnection queues across the United States, with an average wait time of {Math.round(averageWaitTime)} months.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-solstice-blue/10 p-2 rounded-full">
                <MapPin className="h-5 w-5 text-solstice-blue" />
              </div>
              <h3 className="text-xl font-semibold text-solstice-blue">Total Capacity in Queue</h3>
            </div>
            <p className="text-4xl font-bold text-solstice-dark">{estimatedCapacity} GW</p>
            <p className="text-sm text-gray-500 mt-2">Across all 50 states</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-[#F9A826]/10 p-2 rounded-full">
                <Sun className="h-5 w-5 text-[#F9A826]" />
              </div>
              <h3 className="text-xl font-semibold text-solstice-blue">Solar Dominance</h3>
            </div>
            <p className="text-4xl font-bold text-solstice-dark">{solarPercentage}%</p>
            <p className="text-sm text-gray-500 mt-2">Of all projects are solar related</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-solstice-blue/10 p-2 rounded-full">
                <Clock className="h-5 w-5 text-solstice-blue" />
              </div>
              <h3 className="text-xl font-semibold text-solstice-blue">Average Wait Time</h3>
            </div>
            <p className="text-4xl font-bold text-solstice-dark">{Math.round(averageWaitTime)} months</p>
            <p className="text-sm text-gray-500 mt-2">National average across all projects</p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 relative">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <div className="relative bg-[#1B1464]/5 rounded-lg overflow-hidden h-[500px] flex items-center justify-center">
                <canvas 
                  ref={canvasRef} 
                  width={800} 
                  height={500} 
                  className="max-w-full h-auto"
                />
                <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-solstice-blue text-sm mb-2">Map Legend</h4>
                  <p className="text-xs text-gray-600 mb-2">Height represents wait time in months</p>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#25A97E]"></div>
                      <span className="text-xs">15-25 months</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#4A8A8A]"></div>
                      <span className="text-xs">25-35 months</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#3E7CB1]"></div>
                      <span className="text-xs">35+ months</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#DDDDDD]"></div>
                      <span className="text-xs">No data</span>
                    </div>
                  </div>
                </div>
                
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/20 to-transparent"></div>
              </div>
              <p className="text-xs text-gray-500 mt-4">Note: Height of each state block represents the wait time in months. Alaska and Hawaii are excluded from this visualization. Source: Berkeley Lab, 2023.</p>
            </div>
            
            <div className="md:w-1/3">
              <div className="bg-solstice-blue/5 p-6 rounded-lg h-full">
                <h3 className="text-xl font-semibold text-solstice-blue mb-4">Queue Insights</h3>
                
                {hoveredState ? (
                  <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <h4 className="text-lg font-semibold text-solstice-dark mb-1">{hoveredState.name}</h4>
                    <div className="grid grid-cols-2 gap-4 mt-3">
                      <div>
                        <p className="text-xs text-gray-600">Wait Time</p>
                        <p className="text-2xl font-bold text-solstice-blue">{hoveredState.waitTime > 0 ? `${hoveredState.waitTime}m` : "N/A"}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Projects</p>
                        <p className="text-2xl font-bold text-solstice-dark">{hoveredState.projects}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <p className="text-gray-600">Hover over a state to see details</p>
                  </div>
                )}
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-solstice-dark mb-1">Average Wait by Project Type</h4>
                    <div className="space-y-3 mt-3">
                      {projectTypeData.map((project, i) => (
                        <div key={i} className="bg-white p-2 rounded-lg shadow-sm">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: project.color }}></div>
                              <span className="text-sm text-gray-700">{project.type}</span>
                            </div>
                            <span className="text-sm font-medium text-solstice-blue">{project.waitTime} months</span>
                          </div>
                          <div className="mt-1 flex justify-between items-center text-xs text-gray-500">
                            <span>Projects: {project.projects.toLocaleString()}</span>
                            <span>{Math.round((project.projects / totalProjectCount) * 100)}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-4 p-4 bg-solstice-blue/10 rounded-lg">
                    <h4 className="text-sm font-semibold text-solstice-dark mb-2">Impact of Queue Reduction</h4>
                    <p className="text-xs text-gray-700">
                      Reducing wait times by 50% could add over {Math.round(estimatedCapacity/2)} GW of clean energy capacity to the grid by 2030, accelerating decarbonization timelines by approximately 5 years.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USMapVisualization;
