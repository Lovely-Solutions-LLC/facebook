import { FacebookEmbed } from "react-social-media-embed";
import useMonday from "./useMonday";

export default function App() {
  const { url, width, height, isValid } = useMonday();

  return (
    <main >
      {isValid ? (
        <FacebookEmbed
          url={url}
          width={width}
          height={height}
          style={{ backgroundColor: "#fff" }}
        />
      ) : (
        <p>Please Enter a Valid Url</p>
      )}
    </main>
  );
}
