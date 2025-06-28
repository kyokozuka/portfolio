"use client";

import React from "react";
import Link from "next/link";
import { Icon } from '@iconify/react';
import { jmaSystemsData } from '@/data/software/jmaSystemsData';
import { useSoftwareProjectPage } from '@/hooks/software/useSoftwareProjectPage';
import { SoftwareProjectLayout } from '@/components/software/SoftwareProjectLayout';

export default function JMASystemsPage() {
  const { currentLang, setCurrentLang, isLoaded, currentData } = useSoftwareProjectPage(jmaSystemsData);

  return (
    <SoftwareProjectLayout
      projectData={jmaSystemsData}
      currentLang={currentLang}
      setCurrentLang={setCurrentLang}
      isLoaded={isLoaded}
      currentData={currentData}
      theme="jma-systems"
    >
      {/* Hero Section */}
      <header className="text-center mb-16 animate-fadeIn">
        <h1 className={`font-display text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-6 transition-all duration-1000 drop-shadow-2xl ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {currentData.title}
        </h1>
        <p className={`font-body text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 drop-shadow-lg ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ animationDelay: '0.3s' }}>
          {currentData.subtitle}
        </p>
      </header>

      {/* Project Overview */}
      <section className="mb-16 animate-slideInUp">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20">
          <h2 className="font-display text-3xl font-bold text-white mb-6">Project Overview</h2>
          <p className="text-gray-300 leading-relaxed text-lg">{currentData.overview}</p>
        </div>
      </section>

      {/* Project Details Grid */}
      <section className="mb-16 animate-slideInUp">
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
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon icon="mdi:clock" className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2">Duration</h3>
            <p className="text-gray-300">{currentData.duration}</p>
          </div>
        </div>
      </section>

      {/* Technical Solution */}
      <section className="mb-16 animate-slideInLeft">
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

      {/* Key Features */}
      <section className="mb-16 animate-slideInRight">
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

      {/* Performance Metrics */}
      <section className="mb-16 animate-slideInUp">
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

      {/* Call to Action */}
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
    </SoftwareProjectLayout>
  );
}