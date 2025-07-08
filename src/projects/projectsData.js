import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "PRESCRIPTO",
    image: projectOne,
    description: (
      <>
        <p>
        A user-friendly web app that allows doctors to generate and manage digital prescriptions efficiently. It streamlines patient data entry, prescription creation, and record management with a simple and intuitive interface.
        </p>
      </>
    ),
    github:"https://github.com/devarsh82/prescripto_frontend",
    demo: "https://netlify.com",
  },
  2: {
    title: "Productivity App",
    image: projectTwo,
    description: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </>
    ),
    github: "https://github.com/devarsh82",
    demo: "https://netlify.com",
  },
  3: {
    title: "Food Delivery App",
    image: projectThree,
    description: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </>
    ),
    github: "https://github.com/devarsh82",
    demo: "https://netlify.com",
  },
};

export default projects;
