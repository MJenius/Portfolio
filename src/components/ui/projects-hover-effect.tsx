import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
    Eye,
    MapPin,
    FileText,
    Mic,
    GraduationCap,
    ScanLine,
    TrendingUp,
    Share2
} from "lucide-react";

interface Project {
    title: string;
    description: string;
    link: string;
    category: "ai-ml" | "web";
    stats: string;
    icon: React.ReactNode;
    gradient: string;
}

const projects: Project[] = [
    {
        title: "AEGIS Surveillance",
        description:
            "Tamper-resistant surveillance system using computer vision, cryptographic watermarks, and forensics to detect attacks.",
        link: "#",
        category: "ai-ml",
        stats: "Cryptographically verifiable with <2% false positives",
        icon: <Eye className="w-6 h-6 text-white" />,
        gradient: "from-red-500 to-orange-600",
    },
    {
        title: "Adaptive Traffic Control",
        description:
            "Reinforcement Learning agent optimizing emergency vehicle routing in SUMO simulation using Bangalore traffic data.",
        link: "#",
        category: "ai-ml",
        stats: "10.6% faster emergency travel",
        icon: <MapPin className="w-6 h-6 text-white" />,
        gradient: "from-blue-500 to-cyan-600",
    },
    {
        title: "DocParse AI",
        description:
            "Multi-model PDF extraction platform (Surya, Docling, MinerU) with PyMuPDF fallback. Deployed via Modal + Vercel.",
        link: "https://pdf-playground-8wlek8vg8-mevin-joses-projects.vercel.app/",
        category: "web",
        stats: "99% accuracy",
        icon: <FileText className="w-6 h-6 text-white" />,
        gradient: "from-indigo-500 to-purple-600",
    },
    {
        title: "AI Voice Assistant",
        description:
            "Voice-enabled assistant for LeetCode with company-specific suggestions using spaCy NLP and LeetCode API integration.",
        link: "#",
        category: "ai-ml",
        stats: "30% accuracy improvement",
        icon: <Mic className="w-6 h-6 text-white" />,
        gradient: "from-blue-500 to-purple-600",
    },
    {
        title: "Superhhero Learning",
        description:
            "Full-stack MERN application for online learning platform with scalable architecture and optimized performance.",
        link: "https://www.superhhero.com/",
        category: "web",
        stats: "25% faster development",
        icon: <GraduationCap className="w-6 h-6 text-white" />,
        gradient: "from-orange-500 to-red-600",
    },
    {
        title: "CT-Based Radiomics",
        description:
            "Research-oriented radiomics pipeline for CT-based COVID-19 triage with feature extraction and model evaluation.",
        link: "#",
        category: "ai-ml",
        stats: "Research pipeline",
        icon: <ScanLine className="w-6 h-6 text-white" />,
        gradient: "from-rose-500 to-pink-600",
    },
    {
        title: "Demand Forecasting ML",
        description:
            "End-to-end retail demand forecasting with hybrid ML modeling, drift detection, and auto-retraining pipeline.",
        link: "#",
        category: "ai-ml",
        stats: "25% MAE improvement",
        icon: <TrendingUp className="w-6 h-6 text-white" />,
        gradient: "from-emerald-500 to-teal-600",
    },
    {
        title: "Social Media Management",
        description:
            "Production-grade social media platform with role-based access, post scheduling, and secure multi-user workflows.",
        link: "#",
        category: "web",
        stats: "~77% automated test coverage",
        icon: <Share2 className="w-6 h-6 text-white" />,
        gradient: "from-blue-500 to-cyan-600",
    },
];

export const ProjectsHoverEffect = ({
    className,
}: {
    className?: string;
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [activeFilter, setActiveFilter] = useState<string>("all");
    const [searchTerm, setSearchTerm] = useState<string>("");

    // Listen to filter button clicks and search input changes
    useEffect(() => {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const searchInput = document.getElementById('project-search') as HTMLInputElement;

        const handleFilterClick = (e: Event) => {
            const button = e.currentTarget as HTMLElement;
            const filter = button.dataset.filter || "all";
            setActiveFilter(filter);

            // Update button active states
            filterButtons.forEach((btn) => btn.classList.remove('active'));
            button.classList.add('active');
        };

        const handleSearchInput = () => {
            if (searchInput) {
                setSearchTerm(searchInput.value.toLowerCase());
            }
        };

        // Add event listeners
        filterButtons.forEach((button) => {
            button.addEventListener('click', handleFilterClick);
        });

        if (searchInput) {
            searchInput.addEventListener('input', handleSearchInput);
        }

        // Cleanup
        return () => {
            filterButtons.forEach((button) => {
                button.removeEventListener('click', handleFilterClick);
            });
            if (searchInput) {
                searchInput.removeEventListener('input', handleSearchInput);
            }
        };
    }, []);

    // Filter projects based on active filter and search term
    const filteredProjects = projects.filter((project) => {
        const matchesFilter = activeFilter === "all" || project.category === activeFilter;
        const matchesSearch = searchTerm === "" || project.title.toLowerCase().includes(searchTerm);
        return matchesFilter && matchesSearch;
    });

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",
                className
            )}
        >
            <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, idx) => (
                    <motion.div
                        key={project.title}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="relative group block p-2 h-full w-full cursor-pointer"
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => {
                            // Trigger the existing modal system
                            const modalId = getModalId(project.title);
                            if (modalId && typeof window !== 'undefined') {
                                (window as any).openModal?.(modalId);
                            }
                        }}
                    >
                        <AnimatePresence>
                            {hoveredIndex === idx && (
                                <motion.span
                                    className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 block rounded-3xl"
                                    layoutId="projectHoverBackground"
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
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </AnimatePresence>

            {/* Empty state when no projects match */}
            {filteredProjects.length === 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="col-span-full text-center py-12"
                >
                    <p className="text-slate-400 text-lg">No projects found matching your criteria.</p>
                    <p className="text-slate-500 text-sm mt-2">Try adjusting your search or filter.</p>
                </motion.div>
            )}
        </div>
    );
};

function getModalId(title: string): string {
    const modalMap: Record<string, string> = {
        "AEGIS Surveillance": "aegis",
        "Adaptive Traffic Control": "traffic-rl",
        "DocParse AI": "pdf-playground",
        "AI Voice Assistant": "voice-assistant",
        "Superhhero Learning": "superhhero",
        "CT-Based Radiomics": "ct-radiomics",
        "Demand Forecasting ML": "demand-forecasting",
        "Social Media Management": "smms",
    };
    return modalMap[title] || "";
}

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-6 overflow-hidden",
                "bg-slate-900/80 backdrop-blur-sm",
                "border border-slate-700/50",
                "group-hover:border-purple-500/50 group-hover:shadow-lg group-hover:shadow-purple-500/10",
                "transition-all duration-300",
                "relative z-20"
            )}
        >
            <div className="relative z-50">
                {/* Header with Icon */}
                <div className="flex items-center gap-4 mb-4">
                    <div
                        className={cn(
                            "w-12 h-12 rounded-xl flex items-center justify-center",
                            "bg-gradient-to-r",
                            project.gradient,
                            "shadow-lg"
                        )}
                    >
                        {project.icon}
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-white tracking-wide">
                            {project.title}
                        </h4>
                        <span
                            className={cn(
                                "text-xs px-2 py-0.5 rounded-full",
                                project.category === "ai-ml"
                                    ? "bg-purple-500/20 text-purple-300"
                                    : "bg-green-500/20 text-green-300"
                            )}
                        >
                            {project.category === "ai-ml" ? "AI/ML" : "Web Dev"}
                        </span>
                    </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                </p>

                {/* Stats Badge */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="text-green-400">●</span>
                        <span>{project.stats}</span>
                    </div>
                    <span className="text-blue-400 text-sm group-hover:text-blue-300 transition-colors">
                        View Details →
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProjectsHoverEffect;
