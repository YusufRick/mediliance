import React, { useEffect, useRef, useState } from 'react';
import { motion, animate, useInView } from 'framer-motion';

/* Easing shared across animations */
export const ease = [0.22, 1, 0.36, 1];

/* Variants (parameterized so you can tweak per-usage) */
export const fadeUp = ({ duration = 0.6, y = 24, delay = 0, from = 0, to = 1 } = {}) => ({
  hidden: { opacity: from, y },
  visible: { opacity: to, y: 0, transition: { duration, ease, delay } },
});

export const fade = ({ duration = 0.6, delay = 0, from = 0, to = 1 } = {}) => ({
  hidden: { opacity: from },
  visible: { opacity: to, transition: { duration, ease, delay } },
});

export const stagger = ({ staggerChildren = 0.12, delayChildren = 0.1 } = {}) => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});

export const imageReveal = ({ duration = 1.0, scaleFrom = 0.96, delay = 0 } = {}) => ({
  hidden: { opacity: 0, scale: scaleFrom },
  visible: { opacity: 1, scale: 1, transition: { duration, ease, delay } },
});

/* Hover/tap micro-interactions for cards/tiles */
export const hoverable = ({
  hoverY = -4,
  hoverScale = 1.02,
  tapScale = 0.98,
  stiffness = 320,
  damping = 24,
} = {}) => ({
  whileHover: { y: hoverY, scale: hoverScale },
  whileTap: { scale: tapScale },
  transition: { type: 'spring', stiffness, damping },
});

/* Section wrapper to avoid repeating initial/whileInView/viewport */
export function MotionSection({
  as = 'section',
  variants = stagger(),
  initial = 'hidden',
  whileInView = 'visible',
  viewport = { once: true, amount: 0.2 },
  children,
  ...props
}) {
  const Comp = motion[as] || motion.section;
  return (
    <Comp variants={variants} initial={initial} whileInView={whileInView} viewport={viewport} {...props}>
      {children}
    </Comp>
  );
}

/** Animated number counter (safe for SSR, triggers when in view) */
export function MotionCounter({ to = '0', duration = 3, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const str = String(to);
  const numeric = Number(str.replace(/[^\d]/g, '')); // e.g. "98%" -> 98
  const suffix = str.replace(/[\d,\s]/g, '');        // e.g. "98%" -> "%"

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, numeric, {
      duration,
      ease,
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, numeric, duration]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}
