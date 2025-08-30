import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Stacks() {
  const stacks = [
    {
      id: 1,
      title: "Neural Network Visualizer",
      category: "AI/ML",
      description: "Interactive tool for visualizing neural network architectures",
      tech: ["React", "D3.js", "TensorFlow", "Python"],
    },
    {
      id: 2,
      title: "Real-time Collaboration Platform",
      category: "WEB APP",
      description: "Multi-user workspace with live editing and chat",
      tech: ["Next.js", "Socket.io", "PostgreSQL", "Redis"],
    },
    {
      id: 3,
      title: "Fitness Tracking App",
      category: "MOBILE",
      description: "Cross-platform mobile app",
      tech: ["React Native", "Firebase"],
    },
    {
      id: 4,
      title: "DeFi Dashboard",
      category: "BLOCKCHAIN",
      description: "Crypto trading interface",
      tech: ["Vue.js", "Web3.js"],
    },
    {
      id: 5,
      title: "GraphQL Gateway",
      category: "API",
      description: "Microservices orchestration",
      tech: ["Node.js", "GraphQL"],
    },
    {
      id: 6,
      title: "CI/CD Pipeline",
      category: "DEVOPS",
      description: "Automated deployment system",
      tech: ["Docker", "Kubernetes"],
    },
    {
      id: 7,
      title: "Smart Home Hub",
      category: "IOT",
      description: "IoT device management",
      tech: ["Python", "MQTT"],
    },
    {
      id: 8,
      title: "WebGL Game Engine",
      category: "GAME",
      description: "Browser-based 3D engine",
      tech: ["WebGL", "Three.js"],
    },
  ];

  return (
    <div className="bg-black py-10 px-4 md:px-10">
      {/* Row 1: 2 cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {stacks.slice(0, 2).map((stack) => (
          <Card
            key={stack.id}
            className="group border border-white/20 bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all duration-300 shadow-lg"
          >
            <div className="aspect-[5/3] rounded-t-lg overflow-hidden relative">
              <div className="absolute top-4 left-4">
                <Badge className="bg-primary text-white">{stack.category}</Badge>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-bold mb-1">{stack.title}</h3>
                <p className="text-sm">{stack.description}</p>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {stack.tech.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs text-white/80">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  Code
                </Button>
                <Button size="sm">Live Demo</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Row 2: 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {stacks.slice(2, 5).map((stack) => (
          <Card
            key={stack.id}
            className="group border border-white/20 bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all duration-300 shadow-lg"
          >
            <div className="aspect-[4/3] rounded-t-lg overflow-hidden relative">
              <div className="absolute top-4 left-4">
                <Badge className="bg-primary text-white">{stack.category}</Badge>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-lg font-bold mb-1">{stack.title}</h3>
                <p className="text-xs">{stack.description}</p>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex flex-wrap gap-1 mb-3">
                {stack.tech.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs text-white/80">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="text-xs px-2 bg-transparent">
                  Code
                </Button>
                <Button size="sm" className="text-xs px-2">
                  Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Row 3: 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stacks.slice(5, 8).map((stack) => (
          <Card
            key={stack.id}
            className="group border border-white/20 bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all duration-300 shadow-lg"
          >
            <div className="aspect-[4/3] rounded-t-lg overflow-hidden relative">
              <div className="absolute top-4 left-4">
                <Badge className="bg-primary text-white">{stack.category}</Badge>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-lg font-bold mb-1">{stack.title}</h3>
                <p className="text-xs">{stack.description}</p>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex flex-wrap gap-1 mb-3">
                {stack.tech.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs text-white/80">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="text-xs px-2 bg-transparent">
                  Code
                </Button>
                <Button size="sm" className="text-xs px-2">
                  Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
