import React from "react";
import { Button } from "@/components/ui/button";

const Download_CV = () => {
  return (
    <Button asChild variant={"default"} className="md:w-fit w-full">
      <a href="/docs/rakib_resume.pdf">Download Resume</a>
    </Button>
  );
};

export default Download_CV;
