import { AnnouncementCard } from '../components/AnnouncementCard';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};

export function Announcement() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <motion.section
        className="bg-gradient-to-br from-primary/5 to-primary/10 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            className="text-xs font-bold tracking-widest uppercase text-primary mb-4"
            variants={fadeUp}
          >
            Careers
          </motion.p>
          <motion.h1
            className="font-cool text-4xl md:text-6xl text-foreground mb-6"
            variants={fadeUp}
          >
            Join Our
            <span className="block text-primary">Growing Team</span>
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            variants={fadeUp}
          >
            We're looking for passionate individuals to be part of Mediliance's 
            mission in delivering excellence across healthcare.
          </motion.p>
        </div>
      </motion.section>

      {/* Card */}
      <motion.section
        className="py-20 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnnouncementCard />
        </div>
      </motion.section>

    </div>
  );
}