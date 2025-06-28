"use client";

import React from "react";
import Link from "next/link";
import { Icon } from '@iconify/react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from 'next/image';
import { ecommerceData } from '@/data/software/ecommerceData';
import { useSoftwareProjectPage } from '@/hooks/software/useSoftwareProjectPage';

export default function EcommerceProjectPage() {
  const { currentLang, setCurrentLang, isLoaded, currentData } = useSoftwareProjectPage(ecommerceData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/10 via-purple-100/5 to-indigo-100/10 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <Header currentLang={currentLang} onLanguageChange={(lang: string) => setCurrentLang(lang as "en" | "ja")} />

      <div className="relative z-10 container mx-auto px-4 py-12">
        <header className="text-center mb-20 animate-fadeIn">
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <h1 className={`font-display text-7xl md:text-8xl font-black bg-gradient-to-r from-green-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent mb-8 tracking-tight transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                {currentData.title}
              </h1>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-bounce"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
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
                src={ecommerceData.image}
                alt="E-commerce Platform Design"
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
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon icon="mdi:account" className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">My Role</h3>
              <p className="text-gray-300">{currentData.role}</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
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

        <section className="mb-20 animate-slideInLeft">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-6 tracking-tight">
              Technical Solution
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {currentData.finalSolution}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {currentData.keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500">
                  <Icon icon="mdi:check" className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20 animate-slideInRight">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 tracking-tight">
              Technical Architecture
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(currentData.technicalDetails).map(([key, detail]) => (
              <div
                key={key}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mb-6">
                  <Icon icon="mdi:code-braces" className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-4">{detail.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{detail.description}</p>
                <div className="flex flex-wrap gap-2">
                  {detail.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium border border-white/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20 animate-slideInUp">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 tracking-tight">
              {currentData.performance.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {currentData.performance.metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
              >
                <div className="text-4xl font-bold text-green-400 mb-2">{metric.value}</div>
                <h3 className="font-display text-lg font-bold text-white mb-2">{metric.label}</h3>
                <p className="text-gray-300">{metric.improvement}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeIn">
          <Link
            href="/software"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-display font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Icon icon="mdi:arrow-left" className="w-5 h-5 mr-2" />
            {currentData.back}
          </Link>

          <Link
            href={currentData.nextProjectLink}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-display font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            {currentData.nextProject}
            <Icon icon="mdi:arrow-right" className="w-5 h-5 ml-2" />
          </Link>
        </section>
      </div>

      <Footer currentLang={currentLang} />
    </div>
  );
}