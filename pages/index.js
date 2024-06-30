import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About";
import Home from "../src/components/Home";
import Resume from "../src/components/Resume";
import AboutMe from "../src/components/sections/AboutMe";
import ResumeSection from "../src/components/sections/Resume";
import Services from "../src/components/sections/Services";
import Skills from "../src/components/sections/Skills";
import TypingAnimation from "../src/components/TypingAnimation";
import Work from "../src/components/Work";
import ContentContainer from "../src/layout/ContentContainer";
import Header from "../src/layout/Header";
import Layout from "../src/layout/Layout";
const RecentWorks = dynamic(
  () => import("../src/components/sections/RecentWorks"),
  {
    ssr: false,
  }
);
const bio = `<p>
Hello! my name is Denilson Barahona, I am a passionate person about entrepreneurship and technology, my interest in those areas started when I got comprehension about the impact a person can have in society through the correct use of technology focusing on problem resolution.

To this day, I had the pleasure to perform both as an employee and entrepreneur in areas like commerce retail, and social programs designed to help people with limited resources. Nowadays my main focus is to build accessible and inclusive tech products.
</p>`;
const IndexDark = () => {
  return (
    <Layout bg={"blured"}>
      <Head>
        <link rel="stylesheet" href="css/new-skin/new-skin.css" />
        <link rel="stylesheet" href="css/template-dark/dark.css" />
        <link rel="stylesheet" href="css/new-skin/minimal-skin.css" />
      </Head>
      <Header />
      <Home>
        <div className="profile no-photo">
          <div
            className="slide"
            style={{ backgroundImage: "url(images/denilson-1.jpeg)" }}
          />
          <div className="title">Denilson Barahona</div>
          <TypingAnimation />
          <div className="social">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/denilsonbarahona"
            >
              <span className="fa fa-github" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/denilson-barahona/"
            >
              <span className="fa fa-linkedin-square" />
            </a>
          </div>
          {/* profile buttons */}
          <div className="lnks">
            <a href="/pdf/Denilson Barahona_en.pdf" download className="lnk">
              <span className="text">Download CV</span>
              <span className="ion ion-ios-cloud-download"></span>
            </a>
            <a href="mailto: 91sbarahona@gmail.com" className="lnk discover">
              <span className="text">Contact Me</span>
              <span className="ion ion-paper-airplane"></span>
            </a>
          </div>
        </div>
      </Home>
      <ContentContainer>
        <About>
          <AboutMe bio={bio} />
          <Services />
        </About>
        <Resume>
          <ResumeSection />
          <Skills />
        </Resume>
        <Work>
          <RecentWorks />
        </Work>
      </ContentContainer>
    </Layout>
  );
};
export default IndexDark;
