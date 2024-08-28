"use client";

import React from "react";
import ReactPlayer from "react-player/lazy";
import { Root } from "../courses.type";

const VideoPlayer = ({ course }: { course: Root }) => {
  const [domLoaded, setDomLoaded] = React.useState(false);

  React.useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (
        <ReactPlayer
          onContextMenu={(e: React.MouseEvent<HTMLDivElement>) =>
            e.preventDefault()
          }
          config={{ file: { attributes: { controlsList: "nodownload" } } }}
          // url="/videos/test.mkv"
          url={""}
          width={"100%"}
          height={"100%"}
          controls
        />
      )}
    </>
  );
};

export default VideoPlayer;
