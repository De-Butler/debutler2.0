import Logo from '../assets/img/De-Butler-white.png';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
const tabs = [
  { name: 'About', path: '/about' },
  { name: 'History', path: '/history' }, // Assuming history will navigate to '/history'
  { name: 'Activity', path: '/activity' },
  { name: 'Contact', path: '/contact' },
];

const TopBar = () => {
  const [selected, setSelected] = useState('');
  const handleLogoClick = () => {
    setSelected('');
  };
  const handleTabClick = (name) => {
    setSelected(name);
  };
  return (
    <div className="w-full h-12 bg-black flex items-center flex-wrap px-12 border-b-2 border-whilte">
      <Link to="/" onClick={handleLogoClick}>
        <img src={Logo} alt="Logo" className="w-24" />
      </Link>
      <div className="pl-12">
        {tabs.map((tab) => (
          <Link
            to={tab.path}
            key={tab.name}
            className={`${
              selected === tab.name
                ? 'text-white'
                : 'text-slate-300 hover:text-slate-200 hover:bg-slate-700'
            } text-sm transition-colors px-2.5 py-0.5 rounded-md relative mr-4`}
            onClick={() => handleTabClick(tab.name)}
          >
            <span className="relative z-10">{tab.name}</span>

            {selected === tab.name && (
              <motion.span
                layoutId="pill-tab"
                transition={{ type: 'spring', duration: 0.5 }}
                className="absolute inset-0 z-0 bg-gradient-to-r from-yellow-400 via-red-300 to-orange-400 rounded-md"
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Chip = ({ text, selected, setSelected }) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? 'text-white'
          : 'text-slate-300 hover:text-slate-200 hover:bg-slate-700'
      } text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: 'spring', duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-yellow-400 via-red-300 to-orange-400 rounded-md"
        ></motion.span>
      )}
    </button>
  );
};

export default TopBar;