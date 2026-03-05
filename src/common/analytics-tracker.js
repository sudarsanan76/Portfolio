// src/components/AnalyticsTracker.js
import { useEffect } from "react";
import { analytics } from "../firebase";
import { logEvent } from "firebase/analytics";

const AnalyticsTracker = () => {

  useEffect(() => {
    // Log a page view manually every time the route changes
    logEvent(analytics, 'page_view', {
      page_path: "Dashboard",
    });
  },);

  return null;
};

export default AnalyticsTracker;