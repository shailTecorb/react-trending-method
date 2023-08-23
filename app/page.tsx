import React, { lazy, Suspense } from "react";
import LandingPage from "./landingPage/page";

const Card = () => {
  return (
    <React.StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <LandingPage />
      </Suspense>
    </React.StrictMode>
  );
};

export default Card;
