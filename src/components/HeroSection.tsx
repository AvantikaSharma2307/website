"use client"

import type React from "react"

import { motion, useAnimation, useInView } from "framer-motion"
import { Play, ArrowUpRight, CheckCircle, TrendingUp, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

interface IndustryData {
  name: string
  description: string
  color: string
  icon: string
  features: string[]
}

interface VoiceBotHeroProps {
  industryData: IndustryData
}

const colorMap = {
  blue: {
    gradient: "from-blue-600 to-blue-800",
    light: "from-blue-400/20 to-purple-400/20",
    accent: "from-blue-500/30 to-cyan-500/30",
    button: "from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
    badge: "from-blue-600/10 to-purple-600/10 border-blue-200/50",
    badgeText: "text-blue-800",
    iconColor: "text-blue-600",
  },
  green: {
    gradient: "from-green-600 to-green-800",
    light: "from-green-400/20 to-emerald-400/20",
    accent: "from-green-500/30 to-teal-500/30",
    button: "from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700",
    badge: "from-green-600/10 to-emerald-600/10 border-green-200/50",
    badgeText: "text-green-800",
    iconColor: "text-green-600",
  },
  purple: {
    gradient: "from-purple-600 to-purple-800",
    light: "from-purple-400/20 to-pink-400/20",
    accent: "from-purple-500/30 to-indigo-500/30",
    button: "from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700",
    badge: "from-purple-600/10 to-indigo-600/10 border-purple-200/50",
    badgeText: "text-purple-800",
    iconColor: "text-purple-600",
  },
  orange: {
    gradient: "from-orange-600 to-orange-800",
    light: "from-orange-400/20 to-red-400/20",
    accent: "from-orange-500/30 to-yellow-500/30",
    button: "from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700",
    badge: "from-orange-600/10 to-red-600/10 border-orange-200/50",
    badgeText: "text-orange-800",
    iconColor: "text-orange-600",
  },
  red: {
    gradient: "from-red-600 to-red-800",
    light: "from-red-400/20 to-pink-400/20",
    accent: "from-red-500/30 to-rose-500/30",
    button: "from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700",
    badge: "from-red-600/10 to-pink-600/10 border-red-200/50",
    badgeText: "text-red-800",
    iconColor: "text-red-600",
  },
}

// Typing animation hook
const useTypewriter = (text: string, speed = 50) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return displayText
}

// Floating card component
const FloatingCard = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -5, scale: 1.02 }}
    className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 ${className}`}
  >
    {children}
  </motion.div>
)

// Geometric background pattern
const GeometricPattern = () => (
  <div className="absolute inset-0 overflow-hidden opacity-20 text-gray-300 pointer-events-none">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
      <defs>
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#grid)" />
    </svg>
  </div>
)

// Voice wave animation component
const VoiceWave = ({ color }: { color: string }) => (
  <div className="flex items-center space-x-1">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className={`w-1 bg-gradient-to-t ${colorMap[color as keyof typeof colorMap]?.button || colorMap.blue.button} rounded-full`}
        animate={{
          height: [8, 24, 8],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          delay: i * 0.1,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
)

export default function HeroSection({ industryData }: VoiceBotHeroProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  const colorTheme = colorMap[industryData.color as keyof typeof colorMap] || colorMap.blue
  const typedTitle = useTypewriter(`Transform ${industryData.name} with AI Voice Bots`, 60)

  // Generate stats based on the industry
  const stats = [
    { value: "24/7", label: "AI Support" },
    { value: "99.9%", label: "Uptime" },
    { value: "50%", label: "Cost Reduction" },
    { value: "95%", label: "Accuracy" },
  ]

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut" as const,
      },
    },
  }

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden"
    >
      {/* Geometric background */}
      <GeometricPattern />

      {/* Animated background blobs */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className={`absolute top-20 right-20 w-72 h-72 bg-gradient-to-r ${colorTheme.light} rounded-full blur-3xl`}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className={`absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r ${colorTheme.accent} rounded-full blur-3xl`}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <motion.div variants={containerVariants} initial="hidden" animate={controls} className="space-y-8">
            {/* Industry badge */}
            <motion.div variants={itemVariants}>
              <div
                className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${colorTheme.badge} border backdrop-blur-sm`}
              >
                <span className="text-2xl mr-2">{industryData.icon}</span>
                <span className={`text-sm font-medium ${colorTheme.badgeText}`}>AI Voice Bot Solutions</span>
              </div>
            </motion.div>

            {/* Main title with typing effect */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {typedTitle}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  className={colorTheme.iconColor}
                >
                  |
                </motion.span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-xl text-gray-600 leading-relaxed max-w-lg">
              {industryData.description}
            </motion.p>

            {/* Feature list */}
            <motion.div variants={itemVariants} className="space-y-3">
              {industryData.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className={`bg-gradient-to-r ${colorTheme.button} text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group`}
                >
                  Start Free Trial
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 rounded-2xl font-semibold text-black border-2 border-gray-300 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 group"
                >
                  <Play className="mr-2 w-5 h-5 text-black group-hover:scale-110 transition-transform" />
                  Listen to Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-8 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Interactive Cards */}
          <motion.div variants={containerVariants} initial="hidden" animate={controls} className="relative">
            {/* Main voice bot card */}
            <FloatingCard delay={0.5} className="mb-6 ">
              <div className="flex items-start space-x-4">
                <div
                  className={`p-3 bg-gradient-to-r ${colorTheme.button.split(" ")[0]} ${colorTheme.button.split(" ")[1]} rounded-xl flex items-center justify-center`}
                >
                  <Mic className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">AI Voice Assistant</h3>
                    <VoiceWave color={industryData.color} />
                  </div>
                  <p className="text-gray-600 text-sm">
                    Advanced natural language processing for seamless consumer interactions.
                  </p>
                </div>
              </div>
            </FloatingCard>

            {/* Secondary cards */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <FloatingCard delay={0.7} className="text-center">
                <div className="text-3xl mb-3">{industryData.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-1">{industryData.name}</h4>
                <p className="text-xs text-gray-600">Specialized Solutions</p>
              </FloatingCard>

              <FloatingCard delay={0.9} className="text-center">
                <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-1">Efficiency</h4>
                <p className="text-xs text-gray-600">50% Cost Reduction</p>
              </FloatingCard>
            </div>

            {/* Voice interaction demo card */}
            <FloatingCard delay={1.1} className={`bg-gradient-to-r ${colorTheme.badge} border-opacity-50`}>
              <div className="text-center">
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${colorTheme.button.split(" ")[0]} ${colorTheme.button.split(" ")[1]} rounded-full mx-auto mb-3 flex items-center justify-center relative`}
                >
                  <Mic className="w-8 h-8 text-white" />
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-white/30"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 0.3, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
                <p className="text-sm font-medium text-gray-700">
                  "Hello! How can I help you for {industryData.features[1]}?"
                </p>
                <div className="mt-2 flex justify-center">
                  <VoiceWave color={industryData.color} />
                </div>
              </div>
            </FloatingCard>

            {/* Floating elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl opacity-80 blur-sm"
            />
            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-60 blur-sm"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
