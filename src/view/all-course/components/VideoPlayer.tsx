"use client";

import React from "react";
import ReactPlayer from "react-player/lazy";

const VideoPlayer = ({
  video_overview,
  is_card,
}: {
  video_overview: string;
  is_card?: boolean;
}) => {
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
          url={video_overview}
          width={"100%"}
          style={{ borderRadius: "10px" }}
          height={"100%"}
          controls
        />
      )}
    </>
  );
};

export default VideoPlayer;
