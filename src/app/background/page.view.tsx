"use client";

import {
  UserInfoDesktop,
  UserInfoMobile,
} from "../../components/custom/background-page/UserInfo";
import {
  Timeline,
  TimelineNavButtonsMobile,
} from "../../components/custom/background-page/Timeline";
import "./styles.css";
import { userData } from "@/background-data";
import { BackgroundProvider } from "../../contexts/BackgroundContext";
import { ContentArea } from "@/components/custom/background-page/ContentArea";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import YearTitle from "@/components/custom/background-page/ContentArea/YearTitle";

export default function BackgroundPage() {
  const isDesktop = useMediaQuery("(min-width: 769px)");

  return (
    <main className="user-page-grid grid h-screen overflow-hidden">
      {isDesktop ? (
        <UserInfoDesktop {...userData} />
      ) : (
        <UserInfoMobile {...userData} />
      )}

      <BackgroundProvider>
        {!isDesktop && <YearTitle />}

        <Timeline />
        <ContentArea />
        {!isDesktop && <TimelineNavButtonsMobile />}
      </BackgroundProvider>
    </main>
  );
}
