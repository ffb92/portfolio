import { motion } from 'framer-motion';


const intro = () => {
  return (
<section className="flex flex-col items-center justify-center min-h-screen">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="flex flex-col items-center"
          >
            <motion.div
              className="hidden w-full h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
            <motion.h1
              className="py-3.5 px-0.5 z-10 text-4xl text-transparent text-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-8xl bg-clip-text"
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2.5, ease: 'easeOut' }}
            >
              Benjamin Westphal
            </motion.h1>
            <motion.div
              className="hidden w-full h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
          </motion.div>
          <div className="my-16 text-center">
            <h2 className="text-xl text-zinc-500">
              <p>Creative Web Developer focused on bringing unique ideas to life through code.</p>
            </h2>
          </div>
        </section>
  )
}

export default intro