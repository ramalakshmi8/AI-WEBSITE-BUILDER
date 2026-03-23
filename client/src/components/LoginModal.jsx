import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase.js";
import { serverUrl } from "../App.jsx";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice.js";
const LoginModal = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const handleGoogleAuth = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const { data } = await axios.post(
        `${serverUrl}/api/auth/google`,
        {
          name: result.user.displayName,
          email: result.user.email,
          avatar: result.user.photoURL,
        },
        { withCredentials: true },
      );
      dispatch(setUserData(data.user));

      onClose();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-xl px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => onClose()}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 60 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md p-[1px] rounded-3xl bg-gradient-to-br from-purple-500/40 via-blue-500/30 to-transparent"
          >
            <div className="relative rounded-3xl bg-[#0b0b0b] border border-white/10 shadow-[0px_30px_120px_rgba(0,0,0,0.8) overflow-hidden">
              <motion.div
                animate={{ opacity: [0.25, 0.35, 0.25] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -top-32 -left-32 w-80 h-80 bg-purple-500/30 blur-[140px]"
              />
              <motion.div
                animate={{ opacity: [0.2, 0.25, 0.2] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-500/30 blur-[140px]"
              />
              <button
                onClick={() => onClose()}
                className="top-5 right-5 absolute z-20 text-zinc-400 hover:text-white transition text-lg"
              >
                X
              </button>
              <div className="relative px-8 pt-14 pb-10 text-center">
                <h1 className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300 ">
                  AI powered website builder
                </h1>
                <h1 className="text-3xl font-semibold leading-tight mb-3 space-x-2">
                  <span>Welcome to</span>
                  <span className="bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    GenWeb.ai
                  </span>
                </h1>

                <motion.button
                  onClick={() => handleGoogleAuth()}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="group relative w-full h-13 rounded-xl bg-white text-black font-semibold shadow-xl overflow-hidden"
                >
                  <div className="flex items-center justify-center gap-3">
                    <img
                      src="data:image/png;base64,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"
                      alt="Google icon"
                      className="h-5 w-5"
                    />
                    Continue with Google
                  </div>
                </motion.button>

                <div className="flex items-center gap-4 my-10">
                  <div className="h-px flex-1 bg-white/10 "></div>
                  <span className="text-xs text-zinc-400 tracking-wide">
                    Secure Login
                  </span>
                  <div className="h-px flex-1 bg-white/10"></div>
                </div>

                <p className="text-xs text-zinc-500 leading-relaxed">
                  By continuing,you agree to our{" "}
                  <span className="underline cursor-pointer hover:text-zinc-300">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="underline cursor-pointer hover:text-zinc-300">
                    Privacy Policy
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
