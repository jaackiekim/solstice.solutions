
import { Github, Linkedin, Mail } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Robert Jones",
      title: "CTO & Co-Founder",
      bio: "M.Eng, Electrical and Computer Engineering from Cornell Tech. Previously at NXP and P&G, specialized in power systems and grid optimization.",
      image: "public/lovable-uploads/3b223694-8085-42c2-a9cb-903f670d6058.png",
      companies: ["NXP", "P&G"],
      position: 0
    },
    {
      name: "Jackie Kim",
      title: "VP of Product",
      bio: "MS, Information Science Urban Tech from Cornell Tech. Former Apple product manager with expertise in software solutions for infrastructure problems.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=500&fit=crop&crop=faces&auto=format&q=80",
      companies: ["Apple", "NASA JPL"],
      position: 1
    },
    {
      name: "Akash Meesa",
      title: "CEO & Co-Founder",
      bio: "M.Eng, Computer Science from Cornell Tech. Previously at Starpath, leading AI-driven optimization solutions for energy systems.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop&crop=faces&auto=format&q=80",
      companies: ["Starpath"],
      position: 2
    },
    {
      name: "Rishabh Surendran",
      title: "CFO",
      bio: "MBA from Cornell Tech. Former investment banker at Goldman Sachs, specialized in renewable energy project financing and market analytics.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop&crop=faces&auto=format&q=80",
      companies: ["Goldman Sachs", "Government of India"],
      position: 3
    },
    {
      name: "Rowan Wu",
      title: "VP of Operations",
      bio: "MS, Information Science Urban Tech from Cornell Tech. Background in infrastructure planning at Port Authority NY/NJ, focused on sustainable development.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&h=500&fit=crop&crop=faces&auto=format&q=80",
      companies: ["Port Authority NY/NJ", "HR&A"],
      position: 4
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-solstice-blue mb-4">
            Our Multidisciplinary Team from Cornell Tech, NYC
          </h2>
          <p className="text-lg text-gray-700">
            We've assembled a world-class team of experts with diverse backgrounds in electrical engineering, computer science, urban tech, and finance to bridge the gap between clean energy and computing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-display font-semibold text-solstice-blue mb-1">{member.name}</h3>
                <p className="text-solstice-lightblue font-medium text-sm mb-2">{member.title}</p>
                <p className="text-gray-700 text-xs mb-3">{member.bio}</p>
                <div className="flex items-center space-x-3">
                  <div className="text-xs text-gray-500 font-medium">Previously:</div>
                  <div className="flex gap-2">
                    {member.companies.map((company, idx) => (
                      <div key={idx} className="text-xs font-semibold text-solstice-blue bg-solstice-blue/10 px-2 py-1 rounded-full">{company}</div>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-3 mt-3">
                  <a href="#" className="text-gray-500 hover:text-solstice-blue transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-solstice-blue transition-colors">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-display font-semibold text-solstice-blue mb-4">Join Our Team</h3>
          <p className="text-gray-700 mb-6">
            We're growing our team of passionate professionals dedicated to accelerating the clean energy transition. If you're interested in joining our mission, we'd love to hear from you.
          </p>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block text-solstice-blue font-semibold hover:text-solstice-lightblue underline underline-offset-4"
          >
            View Current Openings
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
