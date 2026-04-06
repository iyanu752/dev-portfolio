import Agromat1 from "@/assets/agromat1.png";
import Agromat2 from "@/assets/agromat2.png";
import Agromat3 from "@/assets/agromat3.png";
import Agromat4 from "@/assets/agromat4.png";
import ProjectShowcasePage from "./projectShowcasePage";

export default function AgromatPage() {
  return (
    <ProjectShowcasePage
      title="AGROMAT"
      subtitle="Agricultural commerce and investment platform"
      description="AgroMat connects farmers, agribusinesses, and consumers through an agricultural marketplace that supports produce sales, farm inputs, factory-made materials, and investment participation inside one system."
      tech={["React", "Node.js", "MongoDB", "Material Tailwind"]}
      links={[
        { label: "View Project", href: "https://agromat.vercel.app/" },
        { label: "View Code", href: "https://github.com/iyanu752/Agromat" },
      ]}
      images={[Agromat1, Agromat2, Agromat3, Agromat4]}
    />
  );
}
