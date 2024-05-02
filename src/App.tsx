import { FacebookEmbed } from "react-social-media-embed";
import useMonday from "./useMonday";

export default function App() {
  const { url, width, height, theme } = useMonday();

  if (!url.includes("facebook.com")) {
    return (
      <main className={`center ${theme}`}>
        <p>Please enter a valid URL</p>
      </main>
    );
  }

  return (
    <main>
      <FacebookEmbed
        url={url}
        width={width}
        height={height}
        style={{ backgroundColor: "#fff" }}
      />
    </main>
  );
}
