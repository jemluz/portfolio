"use client"

import React, { createContext, useContext, useState, ReactNode, useMemo } from "react";
import { contentData, Background } from "@/background-data";

type BackgroundContextType = {
  selectedYear: number | null;
  setSelectedYear: (year: number | null) => void;
  selectedContent: string | null;
  setSelectedContent: (contentId: string | null) => void;
  initialContent: Background | null;
  selectedYearContentList: Background[];
};

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

export function BackgroundProvider({
  children,
  initialYear = null,
}: {
  children: ReactNode;
  initialYear?: number | null;
}) {
  const [selectedYear, setSelectedYear] = useState<number | null>(initialYear ?? null);
  const [selectedContent, setSelectedContent] = useState<string | null>(null);

  // Get content list for the selected year, sorted by month
  const selectedYearContentList = useMemo(() => {
    if (selectedYear === null) return [];
    return contentData
      .filter((c) => c.year === selectedYear)
      .sort((a, b) => (a.month ?? 0) - (b.month ?? 0));
  }, [selectedYear]);

  // Get the initial (oldest) content for the selected year
  const initialContent = useMemo(() => {
    if (selectedYearContentList.length === 0) return null;
    return selectedYearContentList[0];
  }, [selectedYearContentList]);

  // Auto-set selectedContent to initialContent when year changes
  React.useEffect(() => {
    if (initialContent) {
      setSelectedContent(initialContent.id);
    } else {
      setSelectedContent(null);
    }
  }, [initialContent]);

  return (
    <BackgroundContext.Provider value={{ 
      selectedYear, 
      setSelectedYear, 
      selectedContent, 
      setSelectedContent,
      initialContent,
      selectedYearContentList
    }}>
      {children}
    </BackgroundContext.Provider>
  );
}

export function useBackground() {
  const ctx = useContext(BackgroundContext);
  if (!ctx) throw new Error("useBackground must be used within BackgroundProvider");
  return ctx;
}

export default BackgroundContext;
