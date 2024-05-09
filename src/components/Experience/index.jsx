import React from "react";
import "./index.css";
import experience_img from "../../assets/images/experience.png";
import ExperienceCard from "../../UI/ExperienceCard";
import price from "../../assets/images/price.png";
import exper from "../../assets/images/exper.png";
import friendly from "../../assets/images/friendly.png";
import { language } from "../../lang/index.jsx";

const index = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="experience_wrapper">
            <div className="experience_left">
              <h2 className="experience_title">
                {localStorage.getItem("lang") === "Russian"
                  ? language?.russian?.experience?.left?.title
                  : localStorage.getItem("lang") === "Uzbek"
                  ? language?.uzbek?.experience?.left?.title
                  : language?.english?.experience?.left?.title}{" "}
              </h2>
              <p className="experience_description">
                {localStorage.getItem("lang") === "Russian"
                  ? language?.russian?.experience?.left?.description
                  : localStorage.getItem("lang") === "Uzbek"
                  ? language?.uzbek?.experience?.left?.description
                  : language?.english?.experience?.left?.description}
              </p>
              <img
                src={experience_img}
                alt="experience"
                className="img_exper"
              />
            </div>
            <div className="experience_right">
              <ExperienceCard
                photo={price}
                title={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.experience?.right?.price?.title
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.experience?.right?.price?.title
                    : language?.english?.experience?.right?.price?.title
                }
                description={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.experience?.right?.price?.description
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.experience?.right?.price?.description
                    : language?.english?.experience?.right?.price?.description
                }
              />
              <ExperienceCard
                photo={exper}
                title={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.experience?.right?.experienc?.title
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.experience?.right?.experienc?.title
                    : language?.english?.experience?.right?.experienc?.title
                }
                description={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.experience?.right?.experienc
                        ?.description
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.experience?.right?.experienc?.description
                    : language?.english?.experience?.right?.experienc
                        ?.description
                }
              />
              <ExperienceCard
                photo={friendly}
                title={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.experience?.right?.friendly?.title
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.experience?.right?.friendly?.title
                    : language?.english?.experience?.right?.friendly?.title
                }
                description={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.experience?.right?.friendly
                        ?.description
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.experience?.right?.friendly?.description
                    : language?.english?.experience?.right?.friendly
                        ?.description
                }
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
