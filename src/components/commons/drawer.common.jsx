import { useState, useMemo } from 'react'
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'

export default function DrawerCommon({ isOpen, full, toggleDrawer, children }) {
    const [drawerWidth, setDrawerWidth] = useState(full ? "100%" : '40%');

    useMemo(() => {
        const handleResize = () => {
            if(!full) {
                if (window.innerWidth <= 768) {
                    setDrawerWidth('100%')
                } else {
                    setDrawerWidth('40%')
                }
            }

            setDrawerWidth('100%')
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                style={{
                    width: drawerWidth
                }}
            >
                {children}
            </Drawer>
        </>
    )
}