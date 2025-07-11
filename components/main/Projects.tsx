import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="features"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Key Features
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Screenshot 2025-07-11 204247.png"
          title="Easy way to sign in and sign up"
          description="Start your journey in just a few seconds. Our secure and minimal Sign-In page ensures a smooth entry."
        />
        <ProjectCard
          src="/Screenshot 2025-07-11 204421.png"
          title="AI Voice Interview: Practice. Speak. Succeed"
          description="Launch your mock interviews based on the role, domain, and tech stack you choose. With just a few clicks."
        />
        <ProjectCard
          src="/Screenshot 2025-07-11 204451.png"
          title="Take Interview and Get your Feedback"
          description="No more guessing how you did. Once your interview ends, HireQuest generates detailed feedback instantly"
        />
      </div>
    </div>
  );
};

export default Projects;
