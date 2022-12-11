import { motion } from "framer-motion";
import burgerBtn from "../../images/svg/bytesize_menu.svg";
import closeButton from "../../images/svg/radix-icons_cross-circled.svg";

const MobileBtn = ({ isMobile, setIsMobile }) => {
  const mobileBtnVar = {
    open: { rotate: 90 },
    closed: { rotate: 0 },
  };

  return (
    <motion.div
      className="mobile-btn-ctn"
      onClick={() => setIsMobile(!isMobile)}
      animate={isMobile ? "open" : "close"}
      variants={mobileBtnVar}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.95 }}
    >
      {isMobile ? (
        <img src={closeButton} alt="mobile-close" className="mobile-btn" />
      ) : (
        <img src={burgerBtn} alt="mobile-open" className="mobile-btn" />
      )}
    </motion.div>
  );
};

export default MobileBtn;
