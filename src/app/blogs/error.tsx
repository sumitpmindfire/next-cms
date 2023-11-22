"use client";

import { ErrorComponent } from "next/dist/client/components/error-boundary";
import React from "react";

const Error: ErrorComponent = (error) => {
  console.log("error", error.error);
  return <p>{error.error.message}</p>;
};

export default Error;
