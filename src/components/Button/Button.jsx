import React from 'react';
import { motion } from 'framer-motion';

function Button({ children, variant = 'primary', as = 'button', href, ...props }) {
  const classes = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    ghost: 'bg-transparent border border-slate-700 text-white hover:bg-slate-900',
  }[variant];

  const Comp = as === 'a' ? 'a' : 'button';

  return (
    <motion.div whileTap={{ scale: 0.98 }} whileHover={{ y: -2 }}>
      <Comp
        href={href}
        className={`inline-flex items-center gap-3 px-4 py-2 rounded-md font-medium ${classes}`}
        {...props}
      >
        {children}
      </Comp>
    </motion.div>
  );
}

export default Button;
