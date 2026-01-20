"use client"

import React, { useCallback, useEffect, useRef, useState } from "react";
import { useBackground } from "../../../contexts/BackgroundContext";
import ContentItem from "../ContentItem";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ContentView() {
  const { selectedYear, selectedYearContentList, selectedContent, setSelectedContent } = useBackground();
  const [bulletTranslation, setBulletTranslation] = useState(0);
  const contentListRef = useRef<HTMLDivElement | null>(null);

  const handleBulletClick = useCallback((contentId: string, index: number) => {
    setSelectedContent(contentId);
  }, [setSelectedContent]);

  useEffect(() => {
    if (selectedYearContentList.length === 0) return;
    
    const currentIndex = selectedYearContentList.findIndex(c => c.id === selectedContent);
    if (currentIndex !== -1) {
      // Calculate bullet position (36px per bullet)
      setBulletTranslation(currentIndex * 36);
    }
  }, [selectedContent, selectedYearContentList]);

  // Handle scroll to change selected content
  const handleScroll = useCallback(() => {
    if (!contentListRef.current) return;
    
    const scrollTop = contentListRef.current.scrollTop;
    // Each content item is approximately 290px in height
    const itemHeight = 290;
    const newIndex = Math.round(scrollTop / itemHeight);
    
    if (newIndex >= 0 && newIndex < selectedYearContentList.length) {
      const newContent = selectedYearContentList[newIndex];
      if (newContent.id !== selectedContent) {
        setSelectedContent(newContent.id);
      }
    }
  }, [selectedYearContentList, selectedContent, setSelectedContent]);

  return (
    <div className="content-container flex flex-row md:pl-6 max-h-[290px] h-[290px]">
      <div 
        className="content-list flex flex-col overflow-y-auto flex-1 scroll-smooth"
        ref={contentListRef}
        onScroll={handleScroll}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style jsx>{`
          .content-list::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        
        <h1 className="text-3xl pb-4 mb-6 sticky top-0 z-10 bg-white shadow-xs">{selectedYear}</h1>
        
        {selectedYearContentList.map((period, index) => {
          const isCurrentContent = period.id === selectedContent;
          const currentIndex = selectedYearContentList.findIndex(c => c.id === selectedContent);
          const isPreviousContent = index < currentIndex;
          const isNextContent = index === currentIndex + 1;
          
          return (
            <ContentItem
              key={period.id}
              background={period}
              isCurrentContent={isCurrentContent}
              isPreviousContent={isPreviousContent}
              isNextContent={isNextContent}
            />
          );
        })}
      </div>
      
      {/* Bullet list */}
      {selectedYearContentList.length > 1 && (
        <div className="bullet-list flex flex-col items-center justify-start ml-4 relative">
          {/* Active indicator */}
          <div 
            className="absolute w-3 h-3 bg-zinc-900 rounded-full transition-transform duration-300 ease-out z-10"
            style={{ transform: `translateY(${bulletTranslation + 11}px)` }}
          />
          
          {/* Bullets */}
          {selectedYearContentList.map((content, index) => (
            <Bullet
              key={content.id}
              isActive={content.id === selectedContent}
              onClick={() => handleBulletClick(content.id, index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function Bullet({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onClick}
      className={cn(
        "w-8 h-8 p-0 rounded-full hover:bg-accent transition-all duration-200",
        "mb-1"
      )}
    >
      <div className={cn(
        "w-3 h-3 rounded-full border-2 transition-all duration-200",
        isActive 
          ? "border-zinc-900 bg-transparent" 
          : "border-zinc-300 bg-zinc-100 hover:border-zinc-400"
      )} />
    </Button>
  );
}
