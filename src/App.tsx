import { FacebookEmbed } from "react-social-media-embed";
import useMonday from "./useMonday";

export default function App() {
  const { url, width, height, isValid } = useMonday();

  if (!isValid)
    return (
      <main className="center">
        <p>Please Enter a Valid Url</p>
      </main>
    );

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
