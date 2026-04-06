import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/ahmed-iyanuoluwa-b4111a26a" },
    { name: "GitHub", href: "https://github.com/iyanu752" },
    { name: "Medium", href: "https://medium.com/@iyanu752" },
  ];

  return (
    <footer className="px-4 pb-14 pt-10 md:px-6">
      <div className="tech-panel mx-auto flex max-w-7xl flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="terminal-label">External Links</p>
          <p className="muted-copy mt-3 text-sm leading-7">
            Further signals, writing, and build logs.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          {links.map((link) => (
            <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="tech-button">
              {link.name}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ))}

          <button onClick={handleBackToTop} className="tech-button tech-button--solid cursor-pointer">
            Back To Top
          </button>
        </div>
      </div>
    </footer>
  );
}
