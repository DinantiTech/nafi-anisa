export default function RightSection() {
    return (
        <div className="bg-primary relative bg-gradient-to-b from-transparent via-lime-300/10 to-orange-900/50 h-full" >
            <div className="absolute top-[70%]">
                <div className="flex flex-col justify-end text-center px-20">
                    <div className="relative w-full">
                        <p className="text-md md:text-5xl text-mainColorText tracking-wider font-name">
                            {/* {isInvitation ? 'THE WEDDING OF' : 'WEDDING ANNOUNCEMENT'} */}
                            {/* WEDDING ANNOUNCEMENT */}
                            Wedding Announcement
                        </p>
                    </div>
                    <div className="">
                        <p className="italic max-w-600px text-mainColorText tracking-wider font-secondary">
                            {"\"Indonesia’s diversity is formidable: some thirteen and a half thousand islands, two hundred and fifty million people, around three hundred and sixty ethnic groups, and more than seven hundred languages.\""}
                            <br />- Pankaj Mishra
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}