import { BRAND } from "../../contants/brand.const";
import { SONG } from "../../contants/common.const";
import { DATE_AKAD } from "../../contants/date.const";
import { BOY_NAME_SHORT, GIRL_NAME_SHORT } from "../../contants/identity.const";

export default function Footer() {
    return (
        <div className="w-full h-fit flex items-center justify-center text-center py-4 bg-amber-900 text-white text-xs leading-relaxed">
            <div>
                {/* <img src="" alt="" /> */}
                <p>Specially created by {BRAND}</p>
                <p>Copyright © {new Date(DATE_AKAD).getUTCFullYear()} {BOY_NAME_SHORT} & {GIRL_NAME_SHORT}</p>
                <p>Song by {SONG}</p>
            </div>
        </div>
    )
}