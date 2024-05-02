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
    monday.listen("context", (res) => {
      setTheme(res.data.theme)
    })

    monday.listen("settings", (res): void => {
      setUrl(res.data.url);
      setWidth(parseInt(res.data.width));
      setHeight(parseInt(res.data.height));
    });
  }, []);

  useEffect(() => {
    async function checkUrl() {
      try {
        const res = await fetch(url);
        console.log(res.status)
        if (res.status >= 200 && res.status < 400) setIsValid(true);
        else setIsValid(false);
      } catch (err) {
        console.log(err)
      }
    }
    // use debounce to avoid too many requests
    const timer = setTimeout(checkUrl, 500);
    return () => clearTimeout(timer);
  }, [url]);

  return { url, width, height, isValid, theme };
}
