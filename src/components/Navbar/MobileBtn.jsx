import { useRef } from 'react';
import { motion } from 'framer-motion';
import burgerBtn from '../../images/svg/bytesize_menu.svg';
import closeButton from '../../images/svg/radix-icons_cross-circled.svg';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

const MobileBtn = ({ isMobile, setIsMobile }) => {
  const mobileBtnRef = useRef(null);

  const hideMobileMenu = (e) => {
    if (!e.target.classList.contains('nav-link')) {
      setIsMobile(false);
    } else if (e.target.classList.contains('nav-link')) {
    }
  };
  useOnClickOutside(mobileBtnRef, hideMobileMenu);

  const mobileBtnVar = {
    open: { rotate: 90 },
    closed: { rotate: 0 },
  };

  return (
    <motion.div
      className="mobile-btn-ctn"
      ref={mobileBtnRef}
      onClick={() => setIsMobile(!isMobile)}
      animate={isMobile ? 'open' : 'close'}
      variants={mobileBtnVar}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.9 }}
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
