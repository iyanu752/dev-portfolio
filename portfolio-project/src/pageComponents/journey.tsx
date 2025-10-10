import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function JourneySection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const journey = [
    {
      year: "THE BEGINNING",
      tag: "University",
      title: "Where It All Started",
      text: "Someone once told me I was special, and I let it get to my head. A jack of all trades, when I'm not building full stack applications, I'm writing articles on system design or drawing or animating even.",
      highlight: "Python · Facial Recognition · Teaching",
      story: "My journey starts from University where I picked up Python to build my Facial Recognition Attendance System Project. In the process, I co-led a class on python basics with the director of software for the department of computer science (my department of course)."
    },
    {
      year: "GROWTH",
      tag: "Internship",
      title: "First Real Challenge",
      text: "After graduation, I picked up an internship as a frontend software developer where I built the frontend of web applications. Due to my knowledge of design, my boss was astonished, if I do say so myself.",
      highlight: "Frontend · Design · UI/UX"
    },
    {
      year: "TODAY",
      tag: "Present",
      title: "Always Evolving",
      text: "Today I work as a fullstack software developer building scalable and ready-to-use web applications. But of course, I am not limited to web applications. I am ever growing, and I adapt to whatever environment and programming language is thrown at me.",
      highlight: "Full Stack · Scalability · Adaptability"
    }
  ];

  return (
    <div ref={sectionRef} className="bg-black py-32 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div 
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.3, 0.3, 0])
        }}
        className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-purple-950/20 to-black pointer-events-none"
      />

      {/* Timeline line */}
      <motion.div 
        style={{
          scaleY: useTransform(scrollYProgress, [0, 0.9], [0, 1])
        }}
        className="absolute left-8 md:left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent origin-top"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6">
            THE JOURNEY
          </h2>
          <p className="text-white/40 text-sm tracking-[0.3em]">
            FROM STUDENT TO BUILDER
          </p>
        </motion.div>

        {/* Journey items */}
        <div className="space-y-48">
          {journey.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex flex-col ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-12`}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute left-8 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-orange-500 shadow-lg shadow-white/50"
              >
                <div className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-20" />
              </motion.div>

              {/* Content card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="w-full md:w-5/12 ml-16 md:ml-0"
              >
                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 relative overflow-hidden group">
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
                  
                  <div className="relative z-10">
                    {/* Year tag */}
                    <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-white/60 text-xs tracking-widest mb-4">
                      {item.year}
                    </div>

                    {/* Tag */}
                    <div className="text-white/40 text-sm tracking-wider mb-3">
                      {item.tag}
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                      {item.title}
                    </h3>

                    {/* Main text */}
                    <p className="text-white/70 leading-relaxed mb-6">
                      {item.text}
                    </p>

                    {/* Story (if exists) */}
                    {item.story && (
                      <p className="text-white/50 text-sm leading-relaxed mb-6 italic">
                        {item.story}
                      </p>
                    )}

                    {/* Highlight tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.highlight.split(' · ').map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/60 text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                </div>
              </motion.div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block w-5/12" />
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-48"
        >
          <p className="text-white/40 text-lg max-w-3xl mx-auto leading-relaxed">
            The story doesn't end here. Every project, every challenge, every line of code
            is another chapter in an ever-evolving journey.
          </p>
        </motion.div>
      </div>
    </div>
  );
}