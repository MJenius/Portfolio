import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Project } from "@/data/portfolioData";
import {
    Eye,
    MapPin,
    FileText,
    Mic,
    GraduationCap,
    ScanLine,
    TrendingUp,
    Share2,
    Code,
    Brain,
    Database,
    Network,
    Trophy,
    Search,
    Target,
    Shield,
    ChevronLeft,
    ChevronRight,
    Pause,
    Play,
    Sparkles,
    ArrowUpRight
} from "lucide-react";

const getProjectIcon = (projectId: string) => {
    const iconMap: Record<string, React.ReactNode> = {
        "aegis": <Eye className="w-5 h-5 text-amber-300" />,
        "sentinelgraph": <Network className="w-5 h-5 text-amber-300" />,
        "traffic-control": <MapPin className="w-5 h-5 text-amber-300" />,
        "docparse-ai": <FileText className="w-5 h-5 text-amber-300" />,
        "voice-assistant": <Mic className="w-5 h-5 text-amber-300" />,
        "superhhero": <GraduationCap className="w-5 h-5 text-amber-300" />,
        "covid-radiomics": <ScanLine className="w-5 h-5 text-amber-300" />,
        "demand-forecasting": <TrendingUp className="w-5 h-5 text-amber-300" />,
        "football-scouting": <Trophy className="w-5 h-5 text-amber-300" />,
        "nebula": <Search className="w-5 h-5 text-amber-300" />,
        "adaptive-golf": <Target className="w-5 h-5 text-amber-300" />,
        "smms": <Share2 className="w-5 h-5 text-amber-300" />,
        "spotify": <Code className="w-5 h-5 text-amber-300" />,
        "cardiovascular": <Brain className="w-5 h-5 text-amber-300" />,
        "ai-data-analyst": <Database className="w-5 h-5 text-amber-300" />,
        "mandate": <Shield className="w-5 h-5 text-amber-300" />
    };
    return iconMap[projectId] || <Code className="w-5 h-5 text-amber-300" />;
};

export const ProjectsHoverEffect = ({
    className,
    projects = [],
    onProjectClick,
}: {
    className?: string;
    projects?: Project[];
    onProjectClick?: (projectId: string) => void;
    isSearching?: boolean;
}) => {
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const [isPausedByUser, setIsPausedByUser] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const scrollLeftRef = useRef(0);

    // Only pause if user is actively hovering or explicitly paused
    const isPaused = (hoveredId !== null) || isPausedByUser;

    // Faster smooth continuous auto-scroll
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container || projects.length <= 1) return;

        let animationFrameId: number;
        const speed = 1.5;

        const step = () => {
            if (!isPaused && container && !isDraggingRef.current) {
                container.scrollLeft += speed;
                // Infinite wrap: if we scrolled past the midpoint of the doubled items
                const halfScroll = container.scrollWidth / 2;
                if (halfScroll > 0 && container.scrollLeft >= halfScroll) {
                    container.scrollLeft -= halfScroll;
                }
            }
            animationFrameId = requestAnimationFrame(step);
        };

        animationFrameId = requestAnimationFrame(step);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused, projects.length]);

    // Manual Arrow Navigation
    const scroll = (direction: "left" | "right") => {
        if (!scrollContainerRef.current) return;
        const offset = 480;
        scrollContainerRef.current.scrollBy({
            left: direction === "left" ? -offset : offset,
            behavior: "smooth"
        });
    };

    // Mouse drag support for smooth scrubbing
    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollContainerRef.current) return;
        isDraggingRef.current = true;
        startXRef.current = e.pageX - scrollContainerRef.current.offsetLeft;
        scrollLeftRef.current = scrollContainerRef.current.scrollLeft;
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDraggingRef.current || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startXRef.current) * 1.5;
        scrollContainerRef.current.scrollLeft = scrollLeftRef.current - walk;
    };

    const handleMouseUp = () => {
        isDraggingRef.current = false;
    };

    // Double the projects array for seamless, infinite looping
    const displayItems = projects.length > 1 ? [...projects, ...projects] : projects;

    return (
        <div className={cn("relative w-full overflow-hidden", className)}>
            {/* Header controls (Speed indicator + Navigation arrows) */}
            <div className="flex items-center justify-between px-4 sm:px-8 mb-2">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                    <span className={cn(
                        "inline-block w-2 h-2 rounded-full transition-colors duration-300",
                        isPaused ? "bg-amber-400 animate-pulse" : "bg-emerald-400"
                    )} />
                    <span className="tracking-wide uppercase text-[11px] font-mono">
                        {hoveredId !== null
                            ? "PAUSED (INSPECTING CARD)"
                            : isPausedByUser
                            ? "PAUSED"
                            : "ACTIVE AUTO-SCROLL"}
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setIsPausedByUser(!isPausedByUser)}
                        className="p-2 rounded-xl bg-slate-900/60 border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:outline-none"
                        title={isPausedByUser ? "Resume auto-scroll" : "Pause auto-scroll"}
                        aria-label={isPausedByUser ? "Resume carousel auto-scroll" : "Pause carousel auto-scroll"}
                    >
                        {isPausedByUser ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                    </button>
                    <button
                        onClick={() => scroll("left")}
                        className="p-2 rounded-xl bg-slate-900/60 border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:outline-none"
                        aria-label="Scroll projects left"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="p-2 rounded-xl bg-slate-900/60 border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:outline-none"
                        aria-label="Scroll projects right"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Edge fade gradients for seamless full-bleed edge look */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 z-30 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 z-30 bg-gradient-to-l from-background to-transparent" />

            {/* Horizontal Scrolling Track - Edge-to-Edge full page carousel */}
            <div
                ref={scrollContainerRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                className="flex items-stretch gap-6 sm:gap-8 overflow-x-auto no-scrollbar scroll-smooth py-6 px-4 sm:px-8 cursor-grab active:cursor-grabbing select-none"
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}
            >
                <AnimatePresence mode="popLayout">
                    {displayItems.map((project, idx) => (
                        <motion.div
                            key={`${project.id}-${idx}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{
                                duration: 0.25,
                                ease: 'easeOut'
                            }}
                            className="relative group shrink-0 w-[380px] sm:w-[440px] md:w-[480px] h-[340px] cursor-pointer flex"
                            onMouseEnter={() => setHoveredId(`${project.id}-${idx}`)}
                            onMouseLeave={() => setHoveredId(null)}
                            onClick={() => onProjectClick?.(project.id)}
                        >
                            <TicketCard project={project} index={idx} isHovered={hoveredId === `${project.id}-${idx}`} />
                        </motion.div>
                    ))}
                </AnimatePresence>

                {/* Empty state when no projects match */}
                {projects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="w-full text-center py-16"
                    >
                        <p className="text-slate-400 text-lg">No projects found matching your criteria.</p>
                        <p className="text-slate-500 text-sm mt-2">Try adjusting your search query or category filter.</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

/* YC Style Pass Card with 100% Transparent Notch Cutouts, Uniform Size, All Domains & Fluid Sheen */
const TicketCard = ({ project, isHovered }: { project: Project; index: number; isHovered?: boolean }) => {
    const icon = getProjectIcon(project.id);
    const primaryCategory = Array.isArray(project.category) ? project.category[0] : project.category;
    const allCategories = Array.isArray(project.category) ? project.category : [project.category];

    // Dynamic accent color themes per category
    const themeStyles = {
        "ai-ml": {
            bgGradient: "from-amber-600 via-orange-600 to-amber-700",
            glowColor: "group-hover:shadow-[0_0_40px_rgba(249,115,22,0.45)]",
            pillAccent: "bg-black/25 text-amber-100 border-white/15",
            sheenGlow: "from-amber-200/20 via-white/30 to-orange-300/10"
        },
        "web": {
            bgGradient: "from-emerald-600 via-teal-600 to-emerald-700",
            glowColor: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.45)]",
            pillAccent: "bg-black/25 text-emerald-100 border-white/15",
            sheenGlow: "from-emerald-200/20 via-white/30 to-teal-300/10"
        },
        "data-analysis": {
            bgGradient: "from-cyan-600 via-blue-600 to-indigo-700",
            glowColor: "group-hover:shadow-[0_0_40px_rgba(14,165,233,0.45)]",
            pillAccent: "bg-black/25 text-sky-100 border-white/15",
            sheenGlow: "from-cyan-200/20 via-white/30 to-blue-300/10"
        }
    };

    const currentTheme = themeStyles[primaryCategory as keyof typeof themeStyles] || themeStyles["ai-ml"];

    const getCategoryLabel = (cat: string) => {
        if (cat === "ai-ml") return "AI / ML";
        if (cat === "data-analysis") return "Data Analysis";
        if (cat === "web") return "Web Dev";
        return cat.toUpperCase();
    };

    return (
        <div
            className={cn(
                "relative rounded-3xl transition-all duration-500 select-none ticket-notch-mask",
                "w-full h-full flex flex-col justify-between text-white shadow-xl overflow-hidden",
                "bg-gradient-to-br",
                currentTheme.bgGradient,
                currentTheme.glowColor,
                isHovered ? "scale-[1.02] -translate-y-1" : "hover:scale-[1.01]"
            )}
        >
            {/* Stippled noise texture overlay */}
            <div
                className="absolute inset-0 opacity-25 pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
                    backgroundSize: '4px 4px'
                }}
            />

            {/* Dynamic Organic Aurora Glow Pulsing inside the card */}
            <div className="absolute -top-1/4 -right-1/4 w-[150%] h-[150%] rounded-full bg-radial from-white/20 via-transparent to-transparent pointer-events-none animate-aurora-glow" />

            {/* Dynamic Liquid Holographic Sheen Animation */}
            <div className="absolute -inset-full pointer-events-none overflow-hidden z-20">
                <div className={cn(
                    "w-[200%] h-[200%] absolute top-0 left-0 bg-gradient-to-br animate-fluid-sheen",
                    currentTheme.sheenGlow
                )} />
            </div>

            {/* Main Content Area */}
            <div className="p-7 sm:p-8 flex flex-col justify-between h-full relative z-10">
                {/* Header Ticket Details */}
                <div>
                    {/* All domains/categories tags */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-3.5">
                        {allCategories.map((cat) => (
                            <span
                                key={cat}
                                className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold uppercase px-2.5 py-0.5 rounded-full bg-black/30 text-white backdrop-blur-md border border-white/20 shadow-sm"
                            >
                                <Sparkles className="w-3 h-3 text-amber-300" />
                                <span>{getCategoryLabel(cat)}</span>
                            </span>
                        ))}
                    </div>

                    {/* Full Hero Title - always fully shown without truncation */}
                    <div className="flex items-start gap-3.5 mb-2.5">
                        <div className="p-2.5 rounded-xl bg-black/30 backdrop-blur-md shrink-0 border border-white/10 mt-0.5 shadow-sm">
                            {icon}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase drop-shadow-sm leading-snug">
                            {project.title}
                        </h3>
                    </div>

                    {/* Project Description excerpt */}
                    <p className="text-white/85 text-xs sm:text-sm line-clamp-3 leading-relaxed font-normal pl-0.5 mt-1">
                        {project.description}
                    </p>
                </div>

                {/* Footer Metadata & Badges */}
                <div className="pt-4 mt-auto border-t border-white/20 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5 max-w-[75%]">
                        {project.tags.slice(0, 4).map((tag) => (
                            <span
                                key={tag}
                                className={cn(
                                    "text-[10.5px] font-mono px-2 py-0.5 rounded-md backdrop-blur-sm",
                                    currentTheme.pillAccent
                                )}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center gap-1 text-xs font-bold text-white uppercase tracking-wider group-hover:translate-x-1 transition-transform shrink-0">
                        <span>OPEN</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsHoverEffect;

