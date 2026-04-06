import expertlisting1 from "@/assets/EXPERTLISTING1.png";
import expertlisting2 from "@/assets/EXPERTLISTING2.png";
import expertlisting3 from "@/assets/EXPERTLISTING3.png";
import expertlisting4 from "@/assets/EXPERTLISTING4.png";
import ProjectShowcasePage from "./projectShowcasePage";

export default function ExpertListingpage() {
  return (
    <ProjectShowcasePage
      title="EXPERT LISTING"
      subtitle="Verified property discovery interface"
      description="Expert Listing is a modern real-estate platform designed to surface verified property listings in Lagos with mapped locations, pricing data, and a clear responsive interface that demonstrates tight 1:1 UI implementation from design."
      tech={["React", "Tailwind CSS", "Responsive UI"]}
      links={[
        { label: "View Project", href: "https://expert-listing-orpin.vercel.app/" },
        { label: "View Code", href: "https://github.com/iyanu752/estate-run-client" },
        { label: "View Figma", href: "https://www.figma.com/design/4r4lQKWCS69Z22b8hKnwRA/Recruitment?node-id=0-1&p=f" },
      ]}
      images={[expertlisting1, expertlisting2, expertlisting3, expertlisting4]}
    />
  );
}
