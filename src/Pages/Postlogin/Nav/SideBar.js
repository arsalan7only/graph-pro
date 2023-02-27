import React,{useState} from 'react'
import { route } from './RouteData'
import { AnimatePresence, motion } from 'framer-motion'
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import SidebarMenu from './SidebarMenu';


const SideBar = ()=>{
    const [isOpen , setisOpen]=useState(false)
    const toggle=()=>setisOpen(!isOpen)
    const showAnimation={
      hidden :{
        width :0,
        opacity :0,
        transition :{
          duration:0.5
        }
      },
      show :{
        opacity:1,
        width :"auto",
        transition :{
          duration :0.5
        }

      }
    }
    return(
        <div className='top-section'>
            <motion.div animate={{
                width : isOpen ? "200px" : "45px",
                transition : {
                    duration: 0.5,
                    type : "spring",
                    damping : 10,
                }
            }}
            className={"sidebar"}
            >
                <div className='main_container'>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                            variants={showAnimation}
                            initial="hidden" animate="show" exit="hidden" className='logo'
                            >
                                Admin Panel
                            </motion.div>
                            
                        )}
                    </AnimatePresence>
                    <div className='bars'>
                        <MenuIcon onClick={toggle}/>
                    </div>
                </div>
                <section className='routes'>
                    {route.map((item,index)=>{
                        if(item.subRoutes){
                            return (
                                <SidebarMenu setisOpen={setisOpen} routes={item} isOpen={isOpen} />
                            )
                        }
                        return (
                            <NavLink to={item.path} key={index} className="link" activeClassName="active">
                                <div className='icon'>
                                    {item.icon}
                                </div>
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div 
                                        initial="hidden" animate="show" exit="hidden" className='link_text'>
                                            {item.name}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </NavLink>
                        )
                    })}
                </section>
            </motion.div>
        </div>
    )
}
export default SideBar