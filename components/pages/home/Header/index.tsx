import { motion } from "framer-motion";

interface HeaderProp {
  children: string;
	delay?: number
}

export default function Header(props: HeaderProp) {
  const { children, delay } = props;
  return (
    <div className="text-center tracking-widest">
      <motion.h1
        className="text-4xl"
        animate={{ scale: [0, 1.15, 1] }}
        transition={{ duration: 0.25, delay }}
      >
        {children}
      </motion.h1>
    </div>
  );
}
