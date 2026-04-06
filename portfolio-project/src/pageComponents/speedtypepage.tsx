import speedtypeImage1 from "@/assets/speedtype1.png";
import speedtypeImage2 from "@/assets/speedtype2.png";
import Landing from "@/assets/Landing.png";
import game from "@/assets/game.png";
import ProjectShowcasePage from "./projectShowcasePage";

export default function SpeedTypePage() {
  return (
    <ProjectShowcasePage
      title="SPEEDTYPE"
      subtitle="Typing practice with rhythm and feedback"
      description="SpeedType is a web application built to improve typing speed, accuracy, and endurance through focused practice loops, interactive feedback, and lightweight game-inspired presentation."
      tech={["React", "Node.js", "MongoDB", "Material Tailwind"]}
      links={[
        { label: "View Project", href: "https://speedtype-five.vercel.app/" },
        { label: "View Code", href: "https://github.com/iyanu752/speedtype" },
      ]}
      images={[speedtypeImage1, speedtypeImage2, Landing, game]}
    />
  );
}
