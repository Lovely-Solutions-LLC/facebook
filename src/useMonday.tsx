import mondaySdk from "monday-sdk-js";
import { useEffect, useState } from "react";

const monday = mondaySdk();

// const testUrl =
//   "https://www.facebook.com/photo/?fbid=798354132341633&set=a.592135939630121";

export default function useMonday() {
  const [url, setUrl] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [theme, setTheme] = useState("light");
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(600);

  useEffect(() => {
    monday.listen("settings", (res): void => {
      setUrl(res.data.url);
      setWidth(parseInt(res.data.width));
      setHeight(parseInt(res.data.height));
      setTheme(res.data.theme);
    });
  }, []);

  useEffect(() => {
    async function checkUrl() {
      const res = await fetch(url);
      if (res.ok) setIsValid(true);
      else setIsValid(false);
    }
    // use debounce to avoid too many requests
    const timer = setTimeout(checkUrl, 500);
    return () => clearTimeout(timer);
  }, [url]);

  return { url, width, height, isValid, theme };
}
