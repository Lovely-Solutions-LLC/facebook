import { FacebookEmbed } from "react-social-media-embed";
import useMonday from "./useMonday";

export default function App() {
  const { url, width, height } = useMonday();

  if (!url) return <p>Enter a valid URL</p>;

  return (
    <div>
      <FacebookEmbed
        url={url}
        width={width}
        height={height}
        style={{ backgroundColor: "#fff" }}
      />
    </div>
  );
}
