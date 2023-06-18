import { Icon } from "@iconify/react";
import { SocialType } from "../../enums/social_type.enum";


export default function ButtonSocial({ username = "Username", icon, rounded, typeSocial = SocialType.instagram }) {
    const handleRedirect = () => {
        if (!username) return '';
        
        if(typeSocial === SocialType.instagram) window.open(`https://instagram.com/${username}`, '_blank');
        if(typeSocial === SocialType.facebook) window.open(`https://facebook.com/${username}`, '_blank');
        if(typeSocial === SocialType.twitter) window.open(`https://twitter.com/${username}`, '_blank');
      };

    return (
        <button onClick={handleRedirect} className={`${rounded ? 'rounded-full' : 'rounded-xl'} mx-auto px-4 py-1 bg-amber-400 w-fit flex items-center justify-center shadow shadow-amber-500`}>
            <div className="flex items-center justify-center">
                {icon ? (
                    <div className="flex items-center justify-center gap-x-2">
                        <Icon icon={icon} />
                        <span>{username}</span>
                    </div>
                ) : (
                    <span>@{username}</span>
                )}
            </div>
        </button>
    )
}