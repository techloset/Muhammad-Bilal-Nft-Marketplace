import React, { useEffect, useState } from "react";
import HeroSection from "./heroSection/HeroSection";
import TrendingSection from "./trendingSection/TrendingSection";
import BrowseSection from "./browseSection/BrowseSection";
import DiscoverSection from "./discoverSection/DiscoverSection";
import HighlightsSection from "./highlightsSection/Highlights";
import WorkSection from "./workSection/WorkSection";
import SubscribeSection from "./subscribeSection/SubscribeData";
import { useAppDispatch } from "../../store/store";
import { collectionsImages } from "../../store/slice/collectionsSlice";
import Loader from "../../components/loader/Loader";

const Index = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(collectionsImages());
  }, [dispatch]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 3000));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HeroSection />
          <TrendingSection />
          <BrowseSection />
          <DiscoverSection />
          <HighlightsSection />
          <WorkSection />
          <SubscribeSection />
        </>
      )}
    </>
  );
};

export default Index;
