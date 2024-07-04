import { FacebookEmbed } from "react-social-media-embed";
import useMonday from "./useMonday";

export default function App() {
  const { url, width, height, theme, isViewer } = useMonday();

  if (!url.includes("facebook.com")) {
    return (
      <main
        className={theme}
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
        }}
      >
        <p>Please enter a valid URL</p>
        <a href="https://mlinder10.github.io/howToUseFBE/" target="_blank">
          How to Use
        </a>
      </main>
    );
  }

  if (isViewer) {
    return (
      <main
        className={theme}
        style={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
        }}
      >
        <p>As a viewer, you are unable to make changes</p>
        <a href="https://mlinder10.github.io/howToUseFBE/" target="_blank">
          How to Use
        </a>
      </main>
    );
  }

  return (
    <main
      className={theme}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16,
      }}
    >
      {/* <FacebookEmbed
        url={url}
        width={width}
        height={height}
        style={{ backgroundColor: "#fff" }}
      /> */}
      <iframe
        src={`https://www.facebook.com/plugins/post.php?${encodeURI(
          url
        )}&show_text=true&width=${width}`}
        width={width}
        height={height}
        style={{ border: "none", overflow: "hidden" }}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
      <a href="https://mlinder10.github.io/howToUseFBE/" target="_blank">
        How to Use
      </a>
    </main>
  );
}
