import { DetailCourse } from "@/utils/constant";
import React from "react";
import { Root } from "./courses.type";
import { secondToTime, secondToTimeText } from "@/utils/helper";
import VideoPlayer from "../components/VideoPlayer";
import { notFound } from "next/navigation";
import PulsatingButton from "@/components/PulsatingButton";

interface Props {
  params: {
    slug: string[];
  };
}

const Slug0: React.FC<Props> = ({ params }) => {
  const course = DetailCourse.find(
    (item) => item.slug === params.slug[0]
  ) as Root;
  if (!course) return notFound();
  return (
    <div className="prose xl:prose-xl mx-auto relative">
      <PulsatingButton
        className="fixed bottom-10 right-10 bg-pink-600 border hover:bg-pink-700 transition-all duration-500"
        pulseColor="#dc497b"
      >
        Beli course ini!
      </PulsatingButton>

      <h1>{course.title}</h1>
      <span>
        Course by{" "}
        <span className="text-pink-600 font-bold">
          {course.instructor.name}
        </span>
      </span>
      <div className="h-52 lg:h-96">
        <VideoPlayer video_overview={course.video_overview} />
      </div>
      <table>
        <tbody>
          <tr>
            <th>Duration</th>
            <td>: {secondToTimeText(course.duration)}</td>
          </tr>
          <tr>
            <th>Level</th>
            <td>: {course.level}</td>
          </tr>
          <tr>
            <th>Lecture Type</th>
            <td>: {course.lecture_type}</td>
          </tr>
        </tbody>
      </table>
      <PulsatingButton
        className="bg-pink-600 w-full border hover:bg-pink-700 transition-all duration-500"
        pulseColor="#dc497b"
      >
        Beli course ini!
      </PulsatingButton>
      <p>{course.description}</p>
      <h4>
        This course will have {course.stages.length}{" "}
        {course.stages.length > 1 ? `stages` : "stage"} :
      </h4>
      <ol>
        {course.stages.map((stage) => (
          <li key={stage.slug}>
            {stage.title}
            <ul>
              {stage.details.map((detail) => (
                <li key={detail.slug}>
                  {detail.title} - {secondToTime(detail.duration)}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Slug0;
