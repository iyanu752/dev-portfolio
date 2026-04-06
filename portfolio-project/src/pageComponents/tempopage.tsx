import TEMPO1 from "@/assets/TEMPO1.png";
import TEMPO2 from "@/assets/TEMPO2.png";
import TEMPO3 from "@/assets/TEMPO3.png";
import TEMPO4 from "@/assets/TEMPO4.png";
import ProjectShowcasePage from "./projectShowcasePage";

export default function TempoPage() {
  return (
    <ProjectShowcasePage
      title="TEMPO"
      subtitle="AI-assisted VS Code completion system"
      description="TEMPO is an AI-powered code completion extension for Visual Studio Code, built to deliver intelligent suggestions across multiple languages through OpenRouter-backed models while keeping the experience fast and focused."
      tech={["TypeScript", "VS Code Extension", "OpenRouter"]}
      links={[{ label: "View Code", href: "https://github.com/iyanu752/TEMPO" }]}
      images={[TEMPO1, TEMPO2, TEMPO3, TEMPO4]}
    />
  );
}
