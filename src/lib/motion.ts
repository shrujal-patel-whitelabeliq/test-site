export const fadeIn = (direction: "up" | "down" | "left" | "right" = "up", delay: number = 0) => {
    return {
        hidden: {
            y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
            x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
            opacity: 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.25,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };
};

export const staggerContainer = (staggerChildren: number = 0.1, delayChildren: number = 0) => {
    return {
        hidden: {},
        show: {
            transition: {
                staggerChildren: staggerChildren,
                delayChildren: delayChildren,
            },
        },
    };
};

export const zoomIn = (delay: number = 0, duration: number = 0.75) => {
    return {
        hidden: {
            scale: 0.8,
            opacity: 0,
        },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: duration,
                delay: delay,
                ease: "easeOut",
            },
        },
    };
};
