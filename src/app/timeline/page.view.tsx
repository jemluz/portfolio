"use client";

import {
  UserInfoDesktop,
  UserInfoMobile,
} from "../../components/custom/timeline-page/UserInfo";
import {
  Timeline,
  TimelineNavButtonsMobile,
} from "../../components/custom/timeline-page/Timeline";
import "./styles.css";
import { userData } from "@/timeline-data";
import { ContentArea } from "@/components/custom/timeline-page/ContentArea";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import YearTitle from "@/components/custom/timeline-page/ContentArea/YearTitle";
import { TimelinePageProvider } from "@/contexts/TimelinePageContext";

export default function TimelinePage() {
  const isDesktop = useMediaQuery("(min-width: 769px)");

  return (
    <main className="user-page-grid grid overflow-hidden">
      {isDesktop ? (
        <UserInfoDesktop {...userData} />
      ) : (
        <UserInfoMobile {...userData} />
      )}

      <TimelinePageProvider>
        {!isDesktop && <YearTitle />}

        <Timeline />
        <ContentArea />
        {!isDesktop && <TimelineNavButtonsMobile />}
      </TimelinePageProvider>
    </main>
  );
}
