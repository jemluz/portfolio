"use client";

import UserInfoDesktop from "../../components/custom/UserInfo/UserInfoDesktop";
import UserInfoMobile from "../../components/custom/UserInfo/UserInfoMobile";
import Timeline from "../../components/custom/Timeline/Timeline";
import "./styles.css";
import { userData } from "@/background-data";
import { BackgroundProvider } from "../../contexts/BackgroundContext";
import ContentArea from "@/components/custom/ContentArea/ContentArea";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import TimelineNavButtonsMobile from "@/components/custom/Timeline/TimelineNavButtonsMobile";

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
        <Timeline />
        <ContentArea />
        {!isDesktop && <TimelineNavButtonsMobile />}
      </BackgroundProvider>
    </main>
  );
}
