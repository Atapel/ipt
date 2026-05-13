"use client";

import { motion } from "framer-motion";

export default function Blob({
  className = "",
  color = "#BFCDB1",
  delay = 0,
}: {
  className?: string;
  color?: string;
  delay?: number;
}) {
  return (
    <motion.svg
      viewBox="0 0 600 600"
      className={className}
      aria-hidden
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 0.85, scale: 1 }}
      transition={{ duration: 1.2, delay, ease: "easeOut" }}
    >
      <motion.path
        fill={color}
        animate={{
          d: [
            "M433,308Q422,366,376,407Q330,448,267,447Q204,446,150,401Q96,356,99,289Q102,222,151,177Q200,132,265,128Q330,124,388,164Q446,204,444,252Q442,300,433,308Z",
            "M425,300Q420,360,366,397Q312,434,253,432Q194,430,150,387Q106,344,109,283Q112,222,156,179Q200,136,265,135Q330,134,387,167Q444,200,435,250Q426,300,425,300Z",
            "M433,308Q422,366,376,407Q330,448,267,447Q204,446,150,401Q96,356,99,289Q102,222,151,177Q200,132,265,128Q330,124,388,164Q446,204,444,252Q442,300,433,308Z",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}
