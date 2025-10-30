"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Palette,
  Smartphone,
  Globe,
  Menu,
  X,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { LoadingScreen } from "@/components/loading-screen"
import { useTheme } from "next-themes"
import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
// import { useTranslation } from "@/lib/i18n.tsx" // Olib tashlandi

export default function Portfolio() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  // const { t, locale, setLocale } = useTranslation() // Olib tashlandi

  // Refs for section visibility
  const aboutRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  // State to trigger skill bar animations
  const [skillsInView, setSkillsInView] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Basic performance logging
    const loadTime = performance.now()
    console.log(`Sahifa ${loadTime.toFixed(2)} ms da yuklandi`)
  }, [])

  // Intersection Observer for skills section to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsInView(true)
        } else {
          setSkillsInView(false) // Reset animation if scrolled out
        }
      },
      { threshold: 0.5 }, // Trigger when 50% of the section is visible
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current)
      }
    }
  }, [skillsRef])

  const skills = [
    { name: "HTML", level: "Mutaxassis", color: "bg-orange-500", percentage: 95 },
    { name: "CSS", level: "Mutaxassis", color: "bg-blue-500", percentage: 95 },
    { name: "JavaScript", level: "Yuqori", color: "bg-yellow-500", percentage: 90 },
    { name: "TypeScript", level: "Yuqori", color: "bg-blue-600", percentage: 85 },
    { name: "React/TSX", level: "Yuqori", color: "bg-cyan-500", percentage: 85 },
  ]

  const projects = [
    {
      title: "O'zbek Veb-sayt Dizayni",
      description: "Zamonaviy dizayn va responsiv tartibga ega professional biznes veb-sayti",
      tech: ["HTML", "CSS", "JavaScript", "Responsiv Dizayn"],
      image: "/website-screenshot.jpg",
      github: "https://github.com/lexobro11",
      demo: "https://v0-uzbek-website-design-brown.vercel.app/",
    },
    {
      title: "Admin Paneli Qayta Dizayni",
      description: "Yaxshilangan foydalanuvchi tajribasi va funksionallikka ega zamonaviy admin paneli",
      tech: ["React", "TypeScript", "CSS", "Dashboard UI"],
      image: "/placeholder.svg?height=200&width=300",
      github: "https://github.com/lexobro11",
      demo: "https://v0-yuqori-panel-redesign.vercel.app/",
    },
    {
      title: "Portfolio Veb-sayti",
      description: "Veb-dasturlash ko'nikmalari va loyihalarini namoyish etuvchi shaxsiy portfolio",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Dark Mode"],
      image: "/placeholder.svg?height=200&width=300",
      github: "https://github.com/lexobro11",
      demo: "#",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div className={`min-h-screen transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <Image
                  src="/logo.png"
                  alt="G'iyos-Technoid Logo"
                  width={40}
                  height={40}
                  className="rounded-lg rounded-full"
                />
                <div className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">G'iyos-Technoid</div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors font-medium px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Men haqimda
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors font-medium px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Ko'nikmalar
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors font-medium px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Loyihalar
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors font-medium px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Bog'lanish
                </button>
                <ThemeToggle />
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center space-x-2">
                <ThemeToggle />
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </nav>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-4 py-4 border-t border-slate-200 dark:border-slate-700">
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-left text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors font-medium px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Men haqimda
                  </button>
                  <button
                    onClick={() => scrollToSection("skills")}
                    className="text-left text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors font-medium px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Ko'nikmalar
                  </button>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="text-left text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors font-medium px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Loyihalar
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-left text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors font-medium px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Bog'lanish
                  </button>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
          <div className="container mx-auto text-center">
            <div className="mb-8">
              <Image
                src="/logo.png"
                alt="G'iyos-Technoid"
                width={150}
                height={150}
                className="mx-auto mb-6 drop-shadow-2xl hover:scale-105 transition-transform duration-300 rounded-full"
              />
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent mb-4">
              G'iyos-Technoid
            </h1>

            <p className="text-lg md:text-2xl lg:text-3xl text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text font-semibold mb-8">
              Professional Veb Dasturchi
            </p>

            <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              HTML, CSS, JavaScript, TypeScript va React/TSX texnologiyalarida tajribali veb dasturchi. Zamonaviy va
              responsiv veb saytlar yaratishga ixtisoslashganman. Xorazm viloyatidan professional xizmatlar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="mr-2 h-4 w-4" />
                Bog'lanish
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 bg-transparent"
                onClick={() => window.open("https://github.com/lexobro11", "_blank")}
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub'ni ko'rish
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" ref={aboutRef} className="py-16 md:py-24 px-4 bg-gray-100 dark:bg-slate-800">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Men haqimda</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  Veb Dasturlash Ishqibozi
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Men professional veb dasturchi sifatida zamonaviy texnologiyalar bilan ishlashni yaxshi ko'raman.
                  HTML, CSS, JavaScript asoslaridan boshlab, TypeScript va React kabi ilg'or texnologiyalargacha keng
                  ko'lamda tajribaga egaman.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Xorazm viloyatida joylashgan bo'lib, mahalliy va xalqaro mijozlar uchun yuqori sifatli veb saytlar
                  yarataman. Har bir loyihada foydalanuvchi tajribasini yaxshilash va zamonaviy, responsiv dizaynlar
                  yaratishga e'tibor beraman.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Frontend Dasturlash", "Responsiv Dizayn", "Zamonaviy JavaScript", "TypeScript"].map((badge) => (
                    <Badge
                      key={badge}
                      className="bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 px-4 py-2 text-sm font-medium"
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    icon: Code,
                    title: "Toza Kod",
                    desc: "Saqlash oson & Kengaytiriladigan",
                    color: "text-blue-600 dark:text-blue-400",
                    bg: "bg-blue-50 dark:bg-blue-900/20",
                  },
                  {
                    icon: Palette,
                    title: "Zamonaviy Dizayn",
                    desc: "Foydalanuvchiga yo'naltirilgan UI/UX",
                    color: "text-green-600 dark:text-green-400",
                    bg: "bg-green-50 dark:bg-green-900/20",
                  },
                  {
                    icon: Smartphone,
                    title: "Responsiv",
                    desc: "Mobil-birinchi yondashuv",
                    color: "text-purple-600 dark:text-purple-400",
                    bg: "bg-purple-50 dark:bg-purple-900/20",
                  },
                  {
                    icon: ExternalLink,
                    title: "Ishlash unumdorligi",
                    desc: "Optimallashtirilgan & Tez",
                    color: "text-orange-600 dark:text-orange-400",
                    bg: "bg-orange-50 dark:bg-orange-900/20",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`${item.bg} p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700`}
                  >
                    <item.icon className={`h-10 w-10 mx-auto mb-4 ${item.color}`} />
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" ref={skillsRef} className="py-16 md:py-24 px-4 bg-white dark:bg-slate-900">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Texnik Ko'nikmalar</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{skill.name}</h3>
                    <Badge className="bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 font-medium">
                      {skill.level}
                    </Badge>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <span>Mahorat</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <motion.div
                        className={`h-3 rounded-full ${skill.color} shadow-sm`}
                        initial={{ width: 0 }}
                        animate={skillsInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.2 }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" ref={projectsRef} className="py-16 md:py-24 px-4 bg-gray-100 dark:bg-slate-800">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Tanlangan Loyihalar</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-600"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          className="bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 hover:bg-gray-50 dark:hover:bg-slate-600 bg-transparent"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Kod
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
                        onClick={() => window.open(project.demo, "_blank")}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-16 md:py-24 px-4 bg-gradient-to-br from-slate-800 via-slate-900 to-black text-white"
        >
          <div className="container mx-auto text-center">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Keling, birga ishlaymiz</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
            </div>

            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Yangi loyihalar ustida ishlashga va sizning g'oyalaringizni hayotga tatbiq etishga tayyorman. Xorazm
              viloyatidan professional veb development xizmatlari. Bog'lanish uchun quyidagi ma'lumotlardan foydalaning.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  info: "giyosbekganiybekov2011@gmail.com",
                  color: "text-cyan-400",
                },
                { icon: Phone, title: "Telefon", info: "+998 99 157 74 17", color: "text-green-400" },
                {
                  icon: MapPin,
                  title: "Manzil",
                  info: "Xorazm, Bog'ot, Dehqonbozor",
                  color: "text-red-400",
                },
                { icon: Globe, title: "Portfolio", info: "Jonli Loyihalar", color: "text-purple-400" },
              ].map((contact, index) => (
                <div
                  key={index}
                  className="bg-slate-700/50 border border-slate-600 text-white backdrop-blur-sm hover:bg-slate-700/70 transition-all duration-300 p-6 rounded-xl"
                >
                  <contact.icon className={`h-8 w-8 mx-auto mb-4 ${contact.color}`} />
                  <h3 className="font-bold mb-2 text-lg">{contact.title}</h3>
                  <p className="text-slate-300 text-sm break-all">{contact.info}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: Github, text: "GitHub'ni ko'rish", url: "https://github.com/lexobro11" },
                { icon: Globe, text: "Veb-sayt 1", url: "https://v0-uzbek-website-design-brown.vercel.app/" },
                { icon: Globe, text: "Veb-sayt 2", url: "https://v0-yuqori-panel-redesign.vercel.app/" },
                {
                  icon: Mail,
                  text: "Xabar yuborish",
                  url: "mailto:giyosbekganiybekov2011@gmail.com",
                  primary: true,
                },
              ].map((button, index) => (
                <Button
                  key={index}
                  variant={button.primary ? "default" : "outline"}
                  size="lg"
                  className={
                    button.primary
                      ? "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
                      : "border-slate-600 text-white hover:bg-slate-700 bg-transparent backdrop-blur-sm"
                  }
                  onClick={() => window.open(button.url, "_blank")}
                >
                  <button.icon className="mr-2 h-5 w-5" />
                  {button.text}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-slate-400 py-8 px-4 border-t border-slate-800">
          <div className="container mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <Image src="/logo.png" alt="G'iyos-Technoid" width={30} height={30} className="mr-2 rounded-full" />
              <span className="text-white font-semibold">G'iyos-Technoid</span>
            </div>
            <p className="text-sm">&copy; 2024 G'iyos-Technoid. Barcha huquqlar himoyalangan.</p>
            <p className="mt-2 text-xs">Next.js, TypeScript & Tailwind CSS bilan qurilgan | Xorazm, O'zbekiston</p>
          </div>
        </footer>

        {/* Live Chat Widget Placeholder */}
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            size="lg"
            className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 text-white shadow-lg flex items-center justify-center"
            onClick={() => alert("Jonli Chat Vidjeti: Bu yerda jonli chat ochiladi!")}
          >
            <MessageCircle className="h-7 w-7" />
            <span className="sr-only">Chatni ochish</span>
          </Button>
        </div>
      </div>
    </>
  )
}
