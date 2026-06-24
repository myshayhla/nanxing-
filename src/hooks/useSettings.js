import { useEffect, useState } from "react";
import { getSettings } from "../api";
import { extractSettings } from "../utils/settingsHelpers";

export function useSettings() {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSettings()
      .then((response) => setSettings(extractSettings(response)))
      .catch((error) => console.error("Ayarlar yüklənmədi:", error))
      .finally(() => setLoading(false));
  }, []);

  return { settings, loading };
}
