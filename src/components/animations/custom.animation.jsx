import { Bounce, Fade } from "react-reveal";

const EFFECT_TYPE = {
    bounce: 'bounce',
    fade: 'fade',
};

export default function CustomAnimation({ type, children, ...rest }) {
    // if (type === EFFECT_TYPE.bounce) {
    //     return (
    //         <Bounce bottom {...rest}>
    //             {children}
    //         </Bounce>
    //     );
    // }

    return (
        <Fade bottom {...rest}>
            {children}
        </Fade>
    );
}