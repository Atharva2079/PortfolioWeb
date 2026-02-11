import { motion } from "framer-motion";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { HACKATHONS } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

import "react-vertical-timeline-component/style.min.css";

type HackathonCardProps = {
    hackathon: (typeof HACKATHONS)[number];
};

const VrIcon = () => (
    <motion.div
        className="flex justify-center items-center w-full h-full"
        animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
            filter: [
                "drop-shadow(0 0 0px #915eff)",
                "drop-shadow(0 0 10px #915eff)",
                "drop-shadow(0 0 0px #915eff)",
            ],
        }}
        transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
        }}
    >
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[70%] h-[70%]"
        >
            <path
                d="M20 9C20 7.89543 19.1046 7 18 7H6C4.89543 7 4 7.89543 4 9V14C4 15.1046 4.89543 16 6 16H18C19.1046 16 20 15.1046 20 14V9Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2 11H4"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M20 11H22"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9 7V5.5C9 4.11929 10.1193 3 11.5 3H12.5C13.8807 3 15 4.11929 15 5.5V7"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </motion.div>
);

const HackathonCard = ({ hackathon }: HackathonCardProps) => (
    <VerticalTimelineElement
        contentStyle={{ background: "#1d1836", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid #232631" }}
        date={hackathon.date}
        iconStyle={{ background: "#1d1836", boxShadow: "0 0 0 4px #915eff" }}
        icon={<VrIcon />}
    >
        <div>
            <h3 className="text-white text-[24px] font-bold">{hackathon.title}</h3>
            <p
                className="text-secondary text-[16px] font-semibold"
                style={{ margin: 0 }}
            >
                {hackathon.company_name}
            </p>
        </div>

        <ul className="mt-5 list-disc ml-5 space-y-2">
            {hackathon.points.map((point, i) => (
                <li
                    key={`hackathon-point-${i}`}
                    className="text-white-100 text-[14px] pl-1 tracking-wider"
                >
                    {point}
                </li>
            ))}
        </ul>
    </VerticalTimelineElement>
);

export const Hackathons = () => {
    return (
        <SectionWrapper idName="hackathons">
            <>
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>My Achievements</p>
                    <h2 className={styles.sectionHeadText}>Hackathons.</h2>
                </motion.div>

                <motion.p
                    variants={fadeIn(undefined, undefined, 0.1, 1)}
                    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    Over the years, I have consistently performed at national and
                    international hackathons, innovation challenges, and technical
                    competitions, combining AR/VR, AI, and system design to deliver
                    impactful solutions. My journey reflects not just wins, but sustained
                    excellence, leadership, and mentorship across domains.
                </motion.p>

                <div className="mt-20 flex flex-col">
                    <VerticalTimeline>
                        {HACKATHONS.map((hackathon, i) => (
                            <HackathonCard key={i} hackathon={hackathon} />
                        ))}
                    </VerticalTimeline>
                </div>
            </>
        </SectionWrapper>
    );
};
