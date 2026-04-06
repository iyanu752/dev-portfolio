import juno1 from "@/assets/juno1.png";
import juno2 from "@/assets/juno2.png";
import juno3 from "@/assets/juno3.png";
import juno4 from "@/assets/juno4.png";
import ProjectShowcasePage from "./projectShowcasePage";

export default function JunogPage() {
  return (
    <ProjectShowcasePage
      title="JUNO"
      subtitle="Open-source serverless platform contribution"
      description="Juno is an open-source serverless platform for building, deploying, and running apps in WASM containers with strong ownership, self-hosting control, and minimal DevOps overhead."
      tech={["Svelte", "Rust", "Docker", "Open Source"]}
      links={[
        { label: "View Project", href: "https://juno.build" },
        { label: "View Code", href: "https://github.com/junobuild/juno" },
      ]}
      images={[juno1, juno2, juno3, juno4]}
    />
  );
}
