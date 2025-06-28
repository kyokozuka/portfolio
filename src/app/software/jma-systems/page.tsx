"use client";

import React from "react";
import Link from "next/link";
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { jmaSystemsData } from '@/data/software/jmaSystemsData';
import { useSoftwareProjectPage } from '@/hooks/software/useSoftwareProjectPage';
import SoftwareProjectLayout from '@/components/software/SoftwareProjectLayout';

export default function JMASystemsProjectPage() {
  const { currentLang, setCurrentLang, isLoaded, currentData } = useSoftwareProjectPage(jmaSystemsData);

  return (
    <SoftwareProjectLayout
      currentLang={currentLang}
      setCurrentLang={(lang: string) => setCurrentLang(lang as "en" | "ja")}
      theme="blue"
    >
      <div className="container mx-auto px-4 py-12">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            href="/software"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-300 mb-6 group"
          >
            <Icon icon="mdi:arrow-left" className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            {currentData.back}
          </Link>
        </div>

        <header className="text-center mb-20 animate-fadeIn">
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <h1 className={`font-display text-7xl md:text-8xl font-black bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-8 tracking-tight transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                {currentData.title}
              </h1>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-bounce"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
            </div>
            <p className={`font-display text-2xl md:text-3xl text-gray-300 mb-10 font-light tracking-wide transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ animationDelay: '0.2s' }}>
              {currentData.subtitle}
            </p>
            <p className={`font-body text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ animationDelay: '0.4s' }}>
              {currentData.overview}
            </p>
          </div>
        </header>

        <section className="mb-20 animate-slideInUp">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/20">
              <Image
                src={jmaSystemsData.image}
                alt="JMA Systems Platform Design"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mb-20 animate-slideInUp">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon icon="mdi:account" className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">My Role</h3>
              <p className="text-gray-300">{currentData.role}</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon icon="mdi:tools" className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">Technologies</h3>
              <p className="text-gray-300">{currentData.tools}</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon icon="mdi:clock" className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">Duration</h3>
              <p className="text-gray-300">{currentData.duration}</p>
            </div>
          </div>
        </section>

        <section className="mb-20 animate-slideInLeft">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-6 tracking-tight">
              Technical Solution
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {currentData.finalSolution}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(currentData.technicalDetails).map(([key, detail]) => (
              <div key={key} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <h3 className="font-display text-2xl font-bold text-white mb-4">{detail.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{detail.description}</p>
                <div className="flex flex-wrap gap-2">
                  {detail.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20 animate-slideInRight">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-6 tracking-tight">
              Key Features
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {currentData.keyFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-xl flex items-center justify-center mb-4">
                  <Icon icon="mdi:check" className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-300 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20 animate-slideInUp">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-6 tracking-tight">
              {currentData.performance.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {currentData.performance.metrics.map((metric, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon icon="mdi:trending-up" className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">{metric.label}</h3>
                <p className="text-2xl font-bold text-blue-400 mb-2">{metric.value}</p>
                <p className="text-sm text-gray-400">{metric.improvement}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center animate-fadeIn">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/20 max-w-4xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-white mb-8">
              {currentLang === "en" ? "Ready to build something amazing?" : "素晴らしいものを作る準備はできていますか？"}
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-400 to-indigo-400 text-white font-bold rounded-2xl hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                {currentLang === "en" ? "Get In Touch" : "お問い合わせ"}
                <Icon icon="mdi:arrow-right" className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href={currentData.nextProjectLink}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-bold rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20"
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