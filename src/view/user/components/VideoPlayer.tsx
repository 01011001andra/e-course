"use client";

import React from "react";
import ReactPlayer from "react-player/lazy";

const VideoPlayer = ({ video_overview }: { video_overview: string }) => {
  const [domLoaded, setDomLoaded] = React.useState(false);
  // console.log(course.sta)
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
          url={video_overview}
          width={"100%"}
          height={"100%"}
          controls
        />
      )}
    </>
  );
};

export default VideoPlayer;
