import { motion } from "framer-motion"

export const Button = ({ children, handleClick }) => {
    return (
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={handleClick}>
            {children}
        </motion.button>
    )
}