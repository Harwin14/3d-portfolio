import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Wa from "./Wa";

function DownloadButton() {
    const handleClick = () => {
        window.location.href =
            "https://drive.google.com/uc?export=download&id=1dPA2N1TvgXGBsSLoz3ibMeLg5pQ2kfdR";
    };

    return (
        <button
            onClick={handleClick}
            className="button-82-pushable"
            role="button"
        >
            <span className="button-82-shadow"></span>
            <span className="button-82-edge"></span>
            <span className="button-82-front text">Download CV</span>
        </button>
    );
}

const CvButton = ({ index }) => {
    return (
        <motion.div
            variants={fadeIn("", "spring", index * 0.5, 0.75)}
            className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full  sm:mt-3 mt-[60px] wrapper_cv"
        >
            <div className="mt-1 ">
                <div className="button-85 w-[240px] rounded-xl h-[70px] flex justify-center items-center " >
                    <DownloadButton />
                </div>
            </div>
        </motion.div>
    );
};
const Cv = () => {
    return (
        <div className="mt-12 bg-black-100 rounder-[20px] card_button">
            <div
                className={`${styles.padding} bg-tertiary rounded-2xl min-h-[100px]`}
            >
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>Check my Cv here</p>
                    <h2 className={styles.sectionHeadText}>Download CV</h2>
                </motion.div>
            </div>
            <div
                className={`${styles.paddingX}  -mt-20 pb-14 flex flex-wrap gap-7 justify-between wrapper`}
            >
                <CvButton />
                <Wa />
            </div>
        </div>
    );
};

export default SectionWrapper(Cv, "");
