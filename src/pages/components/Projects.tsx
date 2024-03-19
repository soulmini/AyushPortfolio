import { cn } from "../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";



function Projects () {
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
    description: [
      "Implemented intuitive, responsive UI with room creation and user count display.",
      "Achieved 30% improvement in user engagement and 20% reduction in onboarding time.",
      "Optimized backend for scalability and reduced latency by 40%.",
      "Fostered dynamic coding environment and enhanced collaborative coding experiences by 35%."
    ],
    link: "link/to/realtime-code-editor",
  },
  {
    title: "Chat GPT",
    description: [
      "Developed user-friendly chatbot interface, increasing engagement by 25%.",
      "Engineered scalable backend to manage high volumes of user interactions.",
      "Integrated frontend and backend for seamless communication.",
      "Demonstrated scalability and reliability with up to 1500 concurrent users."
    ],
    link: "link/to/chat-gpt",
  },
  {
    title: "Chat App",
    description: [
      "Developed intuitive frontend with SocketIO integration.",
      "Supported frontend with efficient server-side logic.",
      "Achieved seamless integration and flawless functionality.",
      "Ensured smooth and reliable chat application experience through thorough testing and debugging."
    ],
    link: "link/to/chat-app",
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
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
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
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
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
        <h1 className="absolute bottom-2 right-2 text-gray-600 dark:text-gray-300 transition-opacity opacity-0 group-hover:opacity-100">
          Github Link
        </h1>
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
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
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
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
