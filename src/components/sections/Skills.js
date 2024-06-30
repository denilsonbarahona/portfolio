import { Fragment } from "react";

const Slice = () => (
  <div className="slice">
    <div className="bar" />
    <div className="fill" />
  </div>
);

const Skills = () => {
  return (
    <Fragment>
      <div className="content skills">
        {/* title */}
        <div className="title">My Skills</div>
        {/* content */}
        <div className="row">
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list list">
              <ul>
                <li>
                  <div className="name">SQL</div>
                </li>
                <li>
                  <div className="name">JavaScript</div>
                </li>
                <li>
                  <div className="name">CSS3</div>
                </li>
                <li>
                  <div className="name">HTML5</div>
                </li>
                <li>
                  <div className="name">Java</div>
                </li>
                <li>
                  <div className="name">Visual Basic</div>
                </li>
                <li>
                  <div className="name">C#</div>
                </li>
                <li>
                  <div className="name">Typescript</div>
                </li>
                <li>
                  <div className="name">Solidity</div>
                </li>
                <li>
                  <div className="name">React</div>
                </li>
                <li>
                  <div className="name">Nextjs</div>
                </li>
                <li>
                  <div className="name">Redux</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default Skills;
