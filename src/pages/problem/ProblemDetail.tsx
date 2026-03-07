import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { findProblem } from "../home/sections/problemStatement/problemData";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ArrowLeft,
  FileText,
  Target,
  Lightbulb,
  BarChart3,
  Cpu,
  Smile,
  ExternalLink,
  Home,
  LayoutGrid,
  Rocket,
} from "lucide-react";
import FunkyButton from "../../../components/FunkyButton";
import FunkyColorButton from "../../../components/FunkyColorButton";

// ─── Animation Variants ────────────────────────────────────────────────────────

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: EASE,
      delay: i * 0.07,
    },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.35, delay: i * 0.07 },
  }),
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: EASE,
      delay: i * 0.08,
    },
  }),
};

const slideDown: Variants = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: EASE },
  },
};

const navBar: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE, delay: 0.3 },
  },
};

// ─── Component ─────────────────────────────────────────────────────────────────

const ProblemDetail: React.FC = () => {
  const { category, id } = useParams<{ category: string; id: string }>();
  const navigate = useNavigate();

  const result = findProblem(category || "", Number(id));

  if (!result) {
    return (
      <motion.div
        className="min-h-screen flex flex-col items-center justify-center bg-[#F4FAFB]"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        <h1 className="font-bounded text-3xl text-gray-800 mb-4">
          Problem Not Found
        </h1>
        <p className="font-euclid text-gray-500 mb-8">
          The problem you're looking for doesn't exist.
        </p>
        <motion.button
          onClick={() => navigate("/home")}
          className="px-6 py-3 rounded-full bg-blue-600 text-white font-euclid font-semibold hover:bg-[#0d8ab0] transition-colors"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          Back to Home
        </motion.button>
      </motion.div>
    );
  }

  const { event, problem } = result;

  const criteriaIcons: Record<string, React.ReactNode> = {
    Innovation: <Lightbulb size={22} />,
    Impact: <BarChart3 size={22} />,
    "Technical Depth": <Cpu size={22} />,
    Usability: <Smile size={22} />,
  };

  return (
    <div className="min-h-screen bg-[#F4FAFB] pb-24 overflow-x-hidden">
      {/* ── Sticky Back Navigation ── */}
      <motion.div
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
        variants={slideDown}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full px-2 md:px-6 lg:px-12 py-3 flex items-center">
          {/* <motion.button
            onClick={() =>
              navigate("/home", {
                state: { scrollTo: ".problem-statement-class" },
              })
            }
            className="flex items-center gap-2 text-blue-600 rounded-full border-2 border-blue-600 px-6 py-2 font-euclid font-semibold text-sm hover:border-blue-400 hover:text-blue-400 transition-colors cursor-pointer"
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <ArrowLeft size={18} />
            Back to Problems
          </motion.button> */}
          <FunkyColorButton
            color1="#155DFC"
            color2="#00DB96"
            className="font-euclid"
            onClick={() =>
              navigate("/home", {
                state: { scrollTo: ".problem-statement-class" },
              })
            }
          >
            Back to Problems
          </FunkyColorButton>
        </div>
      </motion.div>

      <div className="max-w-2xl mx-auto px-4 pt-6 pb-8">
        {/* ── Title ── */}
        <motion.h1
          className="font-bounded text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 break-words [overflow-wrap:break-word] [word-break:break-word]"
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate="visible"
        >
          {problem.title.split(":").length > 1 ? (
            <>
              {problem.title.split(":")[0]}:{" "}
              <span className="text-blue-600">
                {problem.title.split(":").slice(1).join(":")}
              </span>
            </>
          ) : (
            problem.title
          )}
        </motion.h1>

        {/* ── Tags ── */}
        <motion.div
          className="flex flex-wrap gap-2 mb-8"
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate="visible"
        >
          {[event, problem.difficulty, ...(problem.tags || []).slice(0, 2)]
            .filter(Boolean)
            .map((label, i) => (
              <motion.span
                key={i}
                className={`text-xs px-3 py-1.5 rounded-full font-euclid font-semibold ${
                  i < 2
                    ? "bg-[#E6F6FA] text-blue-600"
                    : "bg-gray-100 text-gray-600 font-medium"
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.1 + i * 0.07,
                  ease: EASE,
                }}
                whileHover={{ scale: 1.06 }}
              >
                {label}
              </motion.span>
            ))}
        </motion.div>

        {/* ── Problem Overview Card ── */}
        <motion.div
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6"
          variants={scaleIn}
          custom={2}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <div className="flex items-center gap-2 mb-4">
            <motion.div
              className="w-8 h-8 rounded-lg bg-[#E6F6FA] flex items-center justify-center"
              initial={{ rotate: -10, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.4, ease: EASE }}
            >
              <FileText size={16} className="text-blue-600" />
            </motion.div>
            <h2 className="font-bounded text-lg font-bold text-gray-900">
              Problem Overview
            </h2>
          </div>

          <motion.p
            className="font-euclid text-sm text-gray-600 leading-relaxed mb-6"
            variants={fadeIn}
            custom={3}
            initial="hidden"
            animate="visible"
          >
            {problem.description}
          </motion.p>

          {/* Objectives */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg bg-[#E6F6FA] flex items-center justify-center">
              <Target size={14} className="text-blue-600" />
            </div>
            <h3 className="font-euclid text-sm font-bold text-gray-900">
              Objectives
            </h3>
          </div>
          <ul className="space-y-2 mb-6 pl-1">
            {(problem.objectives || []).map((obj, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3"
                variants={fadeUp}
                custom={i}
                initial="hidden"
                animate="visible"
              >
                <motion.span
                  className="mt-1.5 w-2 h-2 rounded-full bg-blue-600 shrink-0"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.3 + i * 0.07,
                    type: "spring",
                    stiffness: 500,
                    damping: 18,
                  }}
                />
                <span className="font-euclid text-sm text-gray-600 leading-relaxed">
                  {obj}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* Expected Solution */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg bg-[#E6F6FA] flex items-center justify-center">
              <Rocket size={14} className="text-blue-600" />
            </div>
            <h3 className="font-euclid text-sm font-bold text-gray-900">
              Expected Solution
            </h3>
          </div>
          <motion.p
            className="font-euclid text-sm text-gray-600 leading-relaxed"
            variants={fadeIn}
            custom={5}
            initial="hidden"
            animate="visible"
          >
            {problem.expectedSolution || "No expected solution specified."}
          </motion.p>
        </motion.div>

        {/* ── Evaluation Criteria ── */}
        <motion.h2
          className="font-bounded text-lg font-bold text-gray-900 mb-4"
          variants={fadeUp}
          custom={6}
          initial="hidden"
          animate="visible"
        >
          Evaluation Criteria
        </motion.h2>
        <div className="grid grid-cols-2 gap-3 mb-6">
          {(problem.evaluationCriteria || []).map((c, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col items-center text-center gap-2"
              variants={scaleIn}
              custom={i}
              initial="hidden"
              animate="visible"
              whileHover={{
                y: -4,
                boxShadow: "0 8px 24px rgba(16,160,204,0.12)",
                borderColor: "rgba(16,160,204,0.3)",
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                className="w-10 h-10 rounded-xl bg-[#E6F6FA] flex items-center justify-center text-blue-600"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                {criteriaIcons[c.name] || <Lightbulb size={22} />}
              </motion.div>
              <h4 className="font-euclid text-sm font-bold text-gray-900">
                {c.name}
              </h4>
              <p className="font-euclid text-xs text-gray-500">
                {c.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── Resources ── */}
        <motion.h2
          className="font-bounded text-lg font-bold text-gray-900 mb-4"
          variants={fadeUp}
          custom={7}
          initial="hidden"
          animate="visible"
        >
          Resources
        </motion.h2>
        <div className="space-y-3 mb-6">
          {(problem.resources || []).map((r, i) => (
            <motion.a
              key={i}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white rounded-xl border border-gray-100 shadow-sm p-4 group"
              variants={fadeUp}
              custom={i}
              initial="hidden"
              animate="visible"
              whileHover={{
                x: 4,
                borderColor: "rgba(16,160,204,0.35)",
                boxShadow: "0 4px 16px rgba(16,160,204,0.09)",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E6F6FA] flex items-center justify-center">
                  <FileText size={18} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-euclid text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {r.name}
                  </h4>
                  <p className="font-euclid text-xs text-gray-500">
                    {r.description}
                  </p>
                </div>
              </div>
              <motion.div
                whileHover={{ x: 2, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <ExternalLink
                  size={16}
                  className="text-gray-400 group-hover:text-blue-600 transition-colors shrink-0"
                />
              </motion.div>
            </motion.a>
          ))}
        </div>

        {/* ── Footer Tags ── */}
        <motion.div
          className="flex flex-wrap gap-2"
          variants={fadeUp}
          custom={8}
          initial="hidden"
          animate="visible"
        >
          {(problem.tags || []).map((tag, i) => (
            <motion.span
              key={i}
              className="text-xs px-3 py-1.5 bg-[#E6F6FA] text-blue-600 rounded-full font-euclid font-medium"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.06 }}
            >
              #{tag.replace("#", "")}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* ── Bottom Navigation Bar ── */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]"
        variants={navBar}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-2xl mx-auto flex items-center justify-between px-6 py-3">
          <motion.button
            onClick={() => navigate("/home")}
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-blue-600 transition-colors cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Home size={20} />
            <span className="font-euclid text-[10px] font-medium">HOME</span>
          </motion.button>

          <motion.div className="flex flex-col items-center gap-1 text-blue-600 cursor-not-allowed">
            <LayoutGrid size={20} />
            <span className="font-euclid text-[10px] font-semibold">
              PROBLEMS
            </span>
          </motion.div>

          <motion.button
            onClick={() =>
              window.open(problem.resources?.[0]?.url || "#", "_blank")
            }
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full font-euclid text-sm font-semibold shadow-lg shadow-blue-600/20"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#0d8ab0",
              boxShadow: "0 8px 24px rgba(16,160,204,0.35)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
          >
            Start Building
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.6,
                ease: "easeInOut",
              }}
            >
              <Rocket size={16} />
            </motion.span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProblemDetail;
