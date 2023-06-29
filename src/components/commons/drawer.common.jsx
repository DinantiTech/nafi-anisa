import Drawer from 'react-modern-drawer';

//import styles 👇
import 'react-modern-drawer/dist/index.css';

export default function DrawerCommon({ isOpen, toggleDrawer, children }) {


    return (
        <>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                style={{
                    width: '100%'
                }}
            >
                {children}
            </Drawer>
        </>
    )
}