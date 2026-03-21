import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import type { Easing } from "motion/react";
import SEO from "../../../components/SEO";

const EASE_IN_OUT: Easing = "easeInOut";

const floatAnimation = {
    y: [0, -18, 0],
    transition: {
        duration: 4,
        repeat: Infinity,
        ease: EASE_IN_OUT,
    },
};

const NotFound: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="relative w-full min-h-screen bg-gradient-to-b from-[#B2D9E7] via-[#CAE7F1] to-[#9ECCDC] flex flex-col items-center justify-center overflow-hidden px-6">
            <SEO
                title="Page Not Found"
                description="The page you're looking for doesn't exist. Return to Synchronicity 2026 home page."
                noindex={true}
            />
            {/* Decorative blurred orbs */}
            <motion.div
                className="absolute top-[10%] left-[10%] w-72 h-72 rounded-full bg-[#155DFC]/10 blur-3xl"
                animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: EASE_IN_OUT }}
            />
            <motion.div
                className="absolute bottom-[15%] right-[8%] w-96 h-96 rounded-full bg-[#155DFC]/8 blur-3xl"
                animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: EASE_IN_OUT }}
            />
            <motion.div
                className="absolute top-[40%] right-[30%] w-48 h-48 rounded-full bg-white/20 blur-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: EASE_IN_OUT }}
            />

            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center text-center">
                {/* Floating 404 number */}
                <motion.div animate={floatAnimation} className="relative mb-4">
                    <motion.h1
                        className="font-bounded text-[10rem] md:text-[14rem] lg:text-[18rem] leading-none font-black text-transparent select-none"
                        style={{
                            WebkitTextStroke: "3px #155DFC",
                        }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        404
                    </motion.h1>

                    {/* Glitch-like shadow layer */}
                    <motion.h1
                        className="absolute inset-0 font-bounded text-[10rem] md:text-[14rem] lg:text-[18rem] leading-none font-black text-[#155DFC]/5 select-none pointer-events-none"
                        animate={{ x: [0, 4, -3, 0], y: [0, -2, 3, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: EASE_IN_OUT }}
                    >
                        404
                    </motion.h1>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    className="font-bounded text-xl md:text-3xl text-[#155DFC] mb-3"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    Page Not Found
                </motion.p>

                {/* Description */}
                <motion.p
                    className="font-euclid text-black/60 text-base md:text-lg max-w-md mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    Looks like this page got lost in the synchronicity.
                    <br />
                    Let's get you back on track.
                </motion.p>

                {/* Action buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.button
                        onClick={() => navigate("/home")}
                        className="group relative px-8 py-3.5 rounded-full bg-[#155DFC] text-white font-euclid font-medium overflow-hidden cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.span
                            className="absolute inset-0 bg-white/20 rounded-full origin-left"
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        />
                        <span className="relative z-10">Go Home</span>
                    </motion.button>

                    <motion.button
                        onClick={() => navigate(-1)}
                        className="px-8 py-3.5 rounded-full border-2 border-[#155DFC] text-[#155DFC] font-euclid font-medium bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors duration-300 cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Go Back
                    </motion.button>
                </motion.div>
            </div>

            {/* Bottom decorative line with pulse */}
            <motion.div
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#155DFC] to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#155DFC] to-transparent opacity-50"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: EASE_IN_OUT }}
            />
        </div>
    );
};

export default NotFound;
