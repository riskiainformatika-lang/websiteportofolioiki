import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useEffect } from "react"; // ← Tambah ini

const WelcomeScreen = ({ onLoadingComplete }) => {
  // TAMBAH DELAY DI SINI:
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete(); // Akan dipanggil setelah delay
    }, 5000); // ← UBAH ANGKA INI: 5000ms = 5 detik
    
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 3, // ← Durasi animasi welcome
        onComplete: () => {
          // Animasi selesai, tapi masih delay sebelum pindah
        }
      }
    }
  };

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      onAnimationComplete={onLoadingComplete}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20" />

      <div className="relative z-10 text-center px-4">
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6"
          variants={childVariants}
        >
          <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Riski Apriansyah
          </span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto"
          variants={childVariants}
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Full Stack Developer & UI/UX Designer
        </motion.p>

        <motion.div
          className="text-center"
          variants={childVariants}
          data-aos="fade-up"
          data-aos-delay="1200"
        >
          <a
            href="https://linktr.ee/riskiapriansyah22"
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 hover:border-indigo-400/50 hover:from-indigo-600/30 hover:to-purple-600/30 transition-all duration-300 group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative flex items-center gap-2 text-lg sm:text-xl md:text-2xl">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                https://linktr.ee/riskiapriansyah22
              </span>
            </div>
          </a>
          
          <p className="mt-4 text-sm text-gray-400">
            My complete portfolio and social links
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;