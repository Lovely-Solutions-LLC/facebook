import { FacebookEmbed } from "react-social-media-embed";
import useMonday from "./useMonday";

export default function App() {
  const { url, width, height, theme, isViewer } = useMonday();

  if (!url.includes("facebook.com")) {
    return (
      <main
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <iframe
          src="https://mlinder10.github.io/howToUseFBE/"
          width={width}
          height={height}
        ></iframe>
        <a href="https://mlinder10.github.io/howToUseFBE/" target="_blank">
          How To Use
        </a>
      </main>
    );
  }

  if (isViewer) {
    return (
      <main className={`center ${theme}`}>
        <p>As a viewer, you are unable to make changes</p>
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
      <a href="https://mlinder10.github.io/howToUseFBE/" target="_blank">
        How To Use
      </a>
    </main>
  );
}
