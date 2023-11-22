import React from "react";
import { Metadata } from "next";
import Login from "./components/login";

export const metadata: Metadata = {
  title: "Login",
  description: "Login",
};

const Page = () => {
  return <Login />;
};

export default Page;
