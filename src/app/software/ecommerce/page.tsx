"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { ecommerceData } from '@/data/software/ecommerceData';
import { useSoftwareProjectPage } from '@/hooks/software/useSoftwareProjectPage';
import SoftwareProjectLayout from '@/components/software/SoftwareProjectLayout';

export default function EcommerceProjectPage() {
  const { currentLang, setCurrentLang, isLoaded, currentData } = useSoftwareProjectPage(ecommerceData);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[data-section]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const element = section as HTMLElement;
        if (element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <SoftwareProjectLayout
      currentLang={currentLang}
      setCurrentLang={(lang: string) => setCurrentLang(lang as "en" | "ja")}
      theme="green"
    >
      <div className="container mx-auto px-4 py-12">
        {/* Enhanced Back Navigation */}
        <div className="mb-8">
          <Link
            href="/software"
            className="inline-flex items-center text-green-600 hover:text-green-700 transition-all duration-300 mb-6 group bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 hover:bg-white/20 border border-white/20"
          >
            <Icon icon="mdi:arrow-left" className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            {currentData.back}
          </Link>
        </div>

        {/* Enhanced Hero Section */}
        <section
          ref={heroRef}
          className="relative mb-20 overflow-hidden bg-gradient-to-br from-green-100/50 via-emerald-100/50 to-blue-100/50 rounded-3xl shadow-2xl border border-green-200/30"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Animated Background Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-green-400/30 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                }}
              />
            ))}
            {[...Array(20)].map((_, i) => (
              <div
                key={`emerald-${i}`}
                className="absolute w-1 h-1 bg-emerald-400/40 rounded-full animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${1.5 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          {/* Interactive Gradient Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-green-200/20 via-emerald-200/20 to-blue-200/20 transition-all duration-500"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 197, 94, 0.1) 0%, rgba(16, 185, 129, 0.05) 50%, transparent 100%)`,
            }}
          />

          <div className="relative z-10 p-12 md:p-16">
            <div className="text-center">
              <div className="relative mb-8">
                <h1 className={`text-6xl md:text-8xl font-black bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent mb-8 tracking-tight transition-all duration-1000 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                  {currentData.title.split('').map((char, index) => (
                    <span
                      key={index}
                      className="inline-block animate-bounce"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {char}
                    </span>
                  ))}
                </h1>
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-bounce"></div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              </div>
              <p className={`text-2xl md:text-3xl font-bold text-gray-800 mb-6 transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{ animationDelay: '0.2s' }}>
                {currentData.subtitle}
              </p>
              <p className={`text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{ animationDelay: '0.4s' }}>
                {currentData.overview}
              </p>
            </div>
          </div>

          {/* Wave SVG Effect */}
          <div className="absolute bottom-0 left-0 w-full">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-16 md:h-20"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                className="fill-green-100"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                className="fill-emerald-100"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className="fill-green-200"
              ></path>
            </svg>
          </div>
        </section>

        {/* Enhanced Project Image */}
        <section className="mb-20" data-section="0">
          <div className="max-w-6xl mx-auto">
            <div className="relative group">
              <div className="bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-white/50 transform group-hover:scale-105 transition-all duration-700">
                <Image
                  src={ecommerceData.image}
                  alt="E-commerce Platform Design"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </section>

        {/* Enhanced Project Info Cards */}
        <section className="mb-20" data-section="1">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/50 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                <Icon icon="mdi:account" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">My Role</h3>
              <p className="text-gray-600">{currentData.role}</p>
            </div>

            <div className="group bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/50 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                <Icon icon="mdi:tools" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Technologies</h3>
              <p className="text-gray-600">{currentData.tools}</p>
            </div>

            <div className="group bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/50 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                <Icon icon="mdi:clock" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Duration</h3>
              <p className="text-gray-600">{currentData.duration}</p>
            </div>
          </div>
        </section>

        {/* Enhanced Technical Solution */}
        <section className="mb-20" data-section="2">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6 tracking-tight">
              Technical Solution
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {currentData.finalSolution}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(currentData.technicalDetails).map(([key, detail], index) => (
              <div
                key={key}
                className="group bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300">{detail.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{detail.description}</p>
                <div className="flex flex-wrap gap-2">
                  {detail.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm border border-green-200 hover:bg-green-200 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Key Features */}
        <section className="mb-20" data-section="3">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6 tracking-tight">
              Key Features
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {currentData.keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-500">
                  <Icon icon="mdi:check" className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Performance Metrics */}
        <section className="mb-20" data-section="4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6 tracking-tight">
              {currentData.performance.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {currentData.performance.metrics.map((metric, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/50 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <Icon icon="mdi:trending-up" className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{metric.label}</h3>
                <p className="text-2xl font-bold text-green-600 mb-2">{metric.value}</p>
                <p className="text-sm text-gray-500">{metric.improvement}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Call to Action */}
        <section className="text-center" data-section="5">
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-3xl p-12 shadow-2xl border border-green-200 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              {currentLang === "en" ? "Ready to build something amazing?" : "素晴らしいものを作る準備はできていますか？"}
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-2xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                {currentLang === "en" ? "Get In Touch" : "お問い合わせ"}
                <Icon icon="mdi:arrow-right" className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href={currentData.nextProjectLink}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/80 text-gray-800 font-bold rounded-2xl hover:bg-white transition-all duration-300 transform hover:scale-105 border border-green-200 shadow-lg hover:shadow-xl"
              >
                {currentData.nextProject}
                <Icon icon="mdi:arrow-right" className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </SoftwareProjectLayout>
  );
}