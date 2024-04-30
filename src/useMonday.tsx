import mondaySdk from "monday-sdk-js";
import { useEffect, useState } from "react";

const monday = mondaySdk();

// const testUrl =
//   "https://www.facebook.com/photo/?fbid=798354132341633&set=a.592135939630121";

export default function useMonday() {
  const [url, setUrl] = useState("");
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(600);

  useEffect(() => {
    monday.listen("settings", (res): void => {
      setUrl(res.data.url);
      setWidth(parseInt(res.data.width));
      setHeight(parseInt(res.data.height));
    });
  }, []);

  return { url, width, height };
}
