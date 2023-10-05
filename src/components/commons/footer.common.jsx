import { BRAND } from "../../contants/brand.const";
import { IS_NAV_MOBILE, SONG } from "../../contants/common.const";
import { DATE_AKAD } from "../../contants/date.const";
import { BOY_NAME_SHORT, GIRL_NAME_SHORT } from "../../contants/identity.const";
import PATTERN_BATIK from '../../assets/patterns/batik/pattern_batik2.png';

export default function Footer() {
    return (
        <div className={`${IS_NAV_MOBILE ? 'mb-14 sm:mb-0' : null} w-full h-fit flex items-center justify-center text-center py-4 bg-amber-900 text-white text-xs leading-relaxed`} style={{ backgroundImage: `url(${PATTERN_BATIK})`}}>
            <div className="w-full h-full bg-black/50 py-3 text-amber-50">
                {/* <img src="" alt="" /> */}
                <p>Made with &hearts; Specially created by {BRAND}</p>
                <p>Copyright © {new Date(DATE_AKAD).getUTCFullYear()} {BOY_NAME_SHORT} & {GIRL_NAME_SHORT}</p>
                <p>Song by {SONG}</p>
            </div>
        </div>
    )
}