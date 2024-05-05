import { cn } from "../../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <p className="text-sm sm:text-3xl font-bold text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-900 py-8">
        Projects
      </p>
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Realtime Code Editor",
    description: "Real-time Code Editor a collaborative programming platform leveraging React.js, Node.js, Express.js and WebSockets. Seamlessly code together in real-time, share live updates, and communicate instantly. Elevate teamwork, problem-solving, and productivity. Experience the future of collaborative programming.",
    link: "https://real-time-code-editor-two.vercel.app/",
    githubLink: "https://github.com/soulmini/realTime_codeEditor",
    liveLink: "https://real-time-code-editor-two.vercel.app/"
  },
  {
    title: "Chat GPT",
    description: "Built a personalized Chat GPT application using React.js, Node.js, Express.js, and Tailwind CSS, leveraging the OpenAI API key. This project enables real-time interaction with an AI-powered chatbot, showcasing proficiency in full-stack development and integration of advanced APIs.",
    link: "https://your-live-link.com",
    githubLink: "https://github.com/soulmini/client",
    liveLink: "https://your-live-link.com"
  },
  {
    title: "Chat App",
    description: "Crafted a feature-rich chat application utilizing React.js, Node.js, Express.js, Tailwind CSS, and Socket.IO for real-time communication. This project showcases expertise in building responsive user interfaces and implementing WebSocket technology for seamless, instant messaging experiences.",
    link: "https://your-live-link.com",
    githubLink: "https://github.com/soulmini/Chat_APP",
    liveLink: "https://your-live-link.com"
  },
];

export default Projects;
export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    githubLink: string;
    liveLink: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item.link}  // Use anchor element instead of Link component
          key={item.link}
          className="relative group block p-2 h-full w-full"
          target="_blank"  // Open link in new tab
          rel="noopener noreferrer"  // Recommended for security
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card githubLink={item.githubLink} liveLink={item.liveLink}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
};


export const Card = ({
  className,
  children,
  githubLink,
  liveLink,
}: {
  className?: string;
  children: React.ReactNode;
  githubLink?: string;
  liveLink?: string;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
        <div className="absolute top-2 right-2">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 transition-opacity opacity-0 group-hover:opacity-100 block hover:underline mb-1"
            >
              Github
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 transition-opacity opacity-0 group-hover:opacity-100 block hover:underline"
            >
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 w-fit font-bold tracking-wide mt-4 border-b pb-2", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
