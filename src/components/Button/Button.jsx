import React from 'react';
import { motion } from 'framer-motion';

function Button({ children, variant = 'primary', as = 'button', href, className = '', ...props }) {
  const classes = {
    primary: 'bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-white dark:hover:bg-neutral-200 dark:text-neutral-900',
    ghost: 'bg-transparent border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900',
  }[variant];

  const Comp = as === 'a' ? 'a' : 'button';

  return (
    <motion.div whileTap={{ scale: 0.98 }} whileHover={{ y: -2 }}>
      <Comp
        href={href}
        className={`inline-flex items-center gap-3 px-4 py-2 rounded-md font-medium ${classes} ${className}`}
        {...props}
      >
        {children}
      </Comp>
    </motion.div>
  );
}

export default Button;
