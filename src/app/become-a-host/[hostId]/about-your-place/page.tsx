import Container from "@/components/Container";
import Image from "next/image";
import React from "react";

const AboutYourPlacePage = () => {
  return (
    <Container>
      <div className="flex min-h-[90vh]  gap-x-4 md:items-center py-16 flex-col md:flex-row">
        <div className="flex flex-col gap-y-4 w-full md:w-1/2">
          <p>Step 1</p>
          <h1 className=" text-3xl md:text-5xl font-[500] leading-[1.12] ">
            Tell us about your place
          </h1>
          <p>
            In this step, we'll ask you which type of property you have and if
            guests will book the entire place or just a room. Then let us know
            the location and how many guests can stay.
          </p>
        </div>

        <div className="md:w-1/2 ">
          <Image
            alt="isometric-3d"
            src="/assets/isometric-3d.png"
            sizes="100vw"
            height={100}
            width={200}
            className="w-full h-full"
          />
        </div>
      </div>
    </Container>
  );
};

export default AboutYourPlacePage;
