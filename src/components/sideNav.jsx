import { useState } from 'react';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex items-center text-white ">
        <motion.button
          whileHover={{ rotate: '180deg' }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="text-[20px]  text-white hover:text-indigo-500 transition-colors p-4 "
        >
          <FiMenu />
        </motion.button>
      </div>
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

const Nav = ({ isOpen, setIsOpen }) => {
  return (
    <motion.nav
      className="fixed top-0 bottom-0 w-[100vw] right-0 bg-opacity-80 bg-slate-200 backdrop-blur-md z-50"
      animate={isOpen ? 'open' : 'closed'}
      variants={navVariants}
      initial="closed"
    >
      <motion.button
        className="text-3xl  text-black  p-4  absolute top-8 right-8"
        whileHover={{ rotate: '180deg' }}
        onClick={() => setIsOpen(false)}
        whileTap={{ scale: 0.9 }}
      >
        <FiX />
      </motion.button>
      <motion.div
        variants={linkWrapperVariants}
        className="flex flex-col gap-4 absolute bottom-8 left-8"
      >
        <div onClick={() => setIsOpen(false)}>
          <NavLink text="Home" to="/" />
        </div>
        <div onClick={() => setIsOpen(false)}>
          <NavLink text="About" to="/about" />
        </div>
        <div onClick={() => setIsOpen(false)}>
          <NavLink text="Activity" to="/activity" />
        </div>

        <div onClick={() => setIsOpen(false)}>
          <NavLink text="Contact" to="/contact" />
        </div>
      </motion.div>
    </motion.nav>
  );
};

const NavLink = ({ text, to }) => {
  return (
    <motion.a
      className="inline-block z-10 text-slate-800 w-fit font-black text-7xl  transition-colors"
      variants={navLinkVariants}
      transition={{
        type: 'spring',
        damping: 3,
      }}
      whileHover={{
        y: -15,
        rotate: '-7.5deg',
      }}
      rel="nofollow"
      href="#"
    >
      <Link to={to} className="no-underline text-current">
        {text}
      </Link>
    </motion.a>
  );
};

export default SideNav;

const navVariants = {
  open: {
    x: '0%',
    borderTopLeftRadius: '0vw',
    borderBottomLeftRadius: '0vw',
    opacity: 1,
  },
  closed: {
    x: '100%',
    borderTopLeftRadius: '50vw',
    borderBottomLeftRadius: '50vw',
    opacity: 0,
  },
};

const linkWrapperVariants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const navLinkVariants = {
  open: { x: 0 },
  closed: { x: 25 },
};
