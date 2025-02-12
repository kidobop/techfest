'use client';
import DeptHero from "@/components/DeptHero";

const ComputerEngineering = () => {
  return (
    <div>
      <DeptHero
        title="Computer Engineering"
        imageSrc="/900.jpg"
        imageAlt="Computer Engineering Cover Image"
        description="Welcome to the Computer Engineering department. Here, we focus on the latest technologies and innovations in the field of computer science and engineering. Our curriculum is designed to equip students with the skills and knowledge needed to excel in the ever-evolving tech industry."
      />
      {/* Additional content for the Computer Engineering page */}
    </div>
  );
};

export default ComputerEngineering;
