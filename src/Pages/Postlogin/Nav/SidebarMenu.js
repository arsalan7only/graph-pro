import React from 'react'
import {AnimatePresence ,motion} from "framer-motion"


const SidebarMenu = ({route,setIsOpen,isOpen }) => {
    const [isMenuOpen,setIsMenuOpen] =useState (false)
  return (
    <div className='menu'>
        <div className="menu_item">
            <div className='icon'>{route.icone}</div>
            <AnimatePresence>
                                    {isOpen && (
                                        <motion.div 
                                        initial="hidden" animate="show" exit="hidden" className='link_text'>
                                            {route.name}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
        </div>
    </div>
  )
}

export default SidebarMenu