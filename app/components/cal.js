"use client";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export default function MyCal() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("floatingButton", {
        calLink: "0xaloysius/30min",
        buttonText: "0x",
        buttonColor: "#09090b",
        buttonTextColor: "#f4f4f5",
        buttonPosition: "bottom-left",
        hideButtonIcon: true,
        borderColor: "#7e22ce",
      });
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#18181b" } },
        hideEventTypeDetails: false,
      });
    })();
  }, []);
}
