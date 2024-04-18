import React from "react";
import { ButtonList } from "./ButtonList";
// import { VideoConatiner } from "./VideoConatiner";
const VideoCont = React.lazy(() => import("./VideoConatiner"));

export const MainContainer = () => {
  return (
    <div className="">
      <ButtonList />
      <React.Suspense fallback={<>Loading...</>}>
        <VideoCont />
      </React.Suspense>
    </div>
  );
};
