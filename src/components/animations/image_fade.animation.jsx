import "../../styles/image_fade.style.css";

import { GALERIES } from "../../contants/identity.const";

export default function ImagesFade() {
    return (
        <div className="slide">
            {GALERIES.map((imageUrl, index) => (
                <img
                    key={index}
                    src={imageUrl}
                    alt=""
                    className="object-cover bg-contain"
                    style={{ animationDelay: `${index * 7}s` }}
                />
            ))}
        </div>
    );
}