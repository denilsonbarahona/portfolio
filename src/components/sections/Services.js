import { Fragment } from "react";

const data = [
  {
    icon: "fa fa-code",
    title: "Web Development",
    desc: "I specialize in crafting high-quality, modern web applications with a strong focus on usability, performance, and scalability. With extensive experience in both front-end and back-end development, I deliver responsive, dynamic, and secure web solutions that meet the evolving needs of users and businesses.",
  },
  {
    icon: "fa fa-btc",
    title: "Blockchain development",
    desc: "I have experience in blockchain development, focusing on building secure and efficient decentralized solutions. While my primary expertise lies in web development, I have successfully applied my skills to blockchain projects, gaining hands-on experience with key technologies and practices",
  },
];

const Services = ({ serviceList }) => {
  const services = serviceList ? serviceList : data;
  return (
    <Fragment>
      <div className="content services">
        {/* title */}
        <div className="title">
          <span className="first-word">My</span> Services
        </div>
        {/* content */}
        <div className="row service-items border-line-v">
          {/* service item */}
          {services.map((service, i) => (
            <div key={i} className="col col-d-6 col-t-6 col-m-12 border-line-h">
              <div className="service-item">
                <div className="icon">
                  <span className={service.icon} />
                </div>
                <div className="name">
                  <span>{service.title}</span>
                </div>
                <div className="desc">
                  <div>
                    <p>{service.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="clear" />
      </div>
    </Fragment>
  );
};
export default Services;
