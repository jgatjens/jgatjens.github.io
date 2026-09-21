'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { WorkItemProps } from "@/utils/types";
import { CATEGORY_MAP } from "@/utils/categories";

interface ProjectItemProps {
  items: WorkItemProps[];
}

// Categories array with 'All' prepended
const CATEGORIES = ['All', ...Object.values(CATEGORY_MAP)];

export const ProjectItem = ({ items }: ProjectItemProps) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter items based on selected category
  const filteredItems = selectedCategory === 'All'
    ? items
    : items.filter(item => {
      if (item.categories && typeof item.categories === 'object') {
        for (const [key, value] of Object.entries(item.categories)) {
          if (value && CATEGORY_MAP[key as keyof typeof CATEGORY_MAP]?.toLowerCase() === selectedCategory.toLowerCase()) {
            return true;
          }
        }
        return false;
      }
      return true;
    });

  return (
    <div className="w-full">
      {/* Filter Tabs with Borders */}
      <div className="border-t border-b border-gray-100 py-3 md:py-4 mb-8 md:mb-12">
        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {filteredItems.map((item, i) => (
          <Link
            href={`work/${item.slug}`}
            key={i}
            className="group flex flex-col rounded-lg overflow-hidden hover:opacity-75 transition-opacity"
          >
            {/* Image Container */}
            <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden rounded-lg bg-gray-200">
              {item.media?.url || item.media?.data?.attributes?.url ? (
                <Image
                  src={item.media?.url || item.media?.data?.attributes?.url || ''}
                  alt={item.headline}
                  fill
                  priority={false}
                  quality={75}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
              )}
            </div>

            {/* Content Container */}
            <div className="mt-4 flex flex-col flex-grow">
              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-black line-clamp-2">
                {item.headline}
              </h3>

              {/* Description */}
              {item.overview && (
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                  {item.overview}
                </p>
              )}

              {/* Metadata - pushed to bottom */}
              <div className="mt-2 pt-2 flex items-center">
                <div className="flex flex-col gap-1">
                  <p className="text-xs text-gray-500">{item.date}</p>
                </div>
                {/* Arrow Icon */}
                <div className="text-gray-500 group-hover:text-gray-900 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
