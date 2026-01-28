"use client";

import UserInfoDesktop from "../../components/custom/UserInfo/UserInfoDesktop";
import UserInfoMobile from "../../components/custom/UserInfo/UserInfoMobile";
import Timeline from "../../components/custom/Timeline";
import "./styles.css";
import { contentData, userData } from "@/background-data";
import { BackgroundProvider } from "../../contexts/BackgroundContext";
import ContentArea from "@/components/custom/ContentArea/ContentArea";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function BackgroundPage() {
  const isDesktop = useMediaQuery("(min-width: 769px)");
  
  const backgroundYears = Array.from(
    new Set(contentData.map((item) => item.year)),
  );

  return (
    <main className="user-page-grid grid my-auto min-h-screen">
      {isDesktop ? (
        <UserInfoDesktop {...userData} />
      ) : (
        <UserInfoMobile {...userData} />
      )}
      <BackgroundProvider
        initialYear={backgroundYears.length > 0 ? backgroundYears[0] : null}
      >
        <Timeline years={backgroundYears} />
        <ContentArea />
      </BackgroundProvider>
    </main>
  );
}
