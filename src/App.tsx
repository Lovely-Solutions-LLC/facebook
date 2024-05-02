import { FacebookEmbed } from "react-social-media-embed";
import useMonday from "./useMonday";

export default function App() {
  const { url, width, height, isValid, theme } = useMonday();

  if (!isValid) {
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
