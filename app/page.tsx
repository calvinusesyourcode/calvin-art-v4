"use client"

const images916 = [
    "https://firebasestorage.googleapis.com/v0/b/creat1vecapital.appspot.com/o/public%2Fluxury_dubai_architecture__aesthetic_film_still_31a9a2e2-8c6f-474f-8ca8-17c61185c122.png?alt=media&token=5df6b8c0-32f0-43f4-a9a7-c8e9ebc76166",
    "https://firebasestorage.googleapis.com/v0/b/creat1vecapital.appspot.com/o/public%2Fluxury_dubai_architecture__aesthetic_film_still_bb147159-a88a-4c59-82bd-4bff363815a5.png?alt=media&token=c9840a53-de12-43be-bd17-54200b391457",   
]

const images169 = [
    "https://firebasestorage.googleapis.com/v0/b/creat1vecapital.appspot.com/o/public%2Fluxury_dubai_architecture_aesthetic_film_still_ed088808-375e-48a0-82fc-3d8f83ab6dfa.png?alt=media&token=abef8a51-4c39-461e-9bae-30b37d60f0d5",
]

const bg916 = images916[Math.floor(Math.random() * images916.length)]
const bg169 = images169[Math.floor(Math.random() * images169.length)]

const name = "calvin ducharme"
const bio = [
    "🌴 creative director",
    "💻 software engineer",
]

const items = [
    {
        title: "mobile podcast studio",
        description: "record, edit, publish",
        images: [
            "https://firebasestorage.googleapis.com/v0/b/creat1vecapital.appspot.com/o/public%2Fportfolio%2Ftable-bistro-setup.jpg?alt=media&token=7ad30eeb-c90a-4263-ab2a-680fd1e7fa4c",
            "https://firebasestorage.googleapis.com/v0/b/creat1vecapital.appspot.com/o/public%2Fportfolio%2Ftable-bistro.jpg?alt=media&token=b555d892-a211-404e-819a-707239792de8",
            "https://firebasestorage.googleapis.com/v0/b/creat1vecapital.appspot.com/o/public%2Fportfolio%2Ffitlab-podcast.jpg?alt=media&token=d59e04d8-93ab-4eed-82b6-3674c9d2e7e8",
        ],
    },
    {
        title: "design",
        description: "web, print, social",
        images: [
            "https://firebasestorage.googleapis.com/v0/b/creat1vecapital.appspot.com/o/public%2Fportfolio%2Fupnorth-vercel-on-iphones.jpg?alt=media&token=c005b113-9815-4556-b313-6fb8bb2f197a",
            "https://firebasestorage.googleapis.com/v0/b/creat1vecapital.appspot.com/o/public%2Fportfolio%2Fshh.jpg?alt=media&token=d50d1e2a-9bca-4217-9fe9-bb2b2b01183d",
            "https://firebasestorage.googleapis.com/v0/b/creat1vecapital.appspot.com/o/public%2Fportfolio%2FDSC00009.JPG?alt=media&token=f69515b5-b2e2-469f-8d20-a3d47c06821f",
            ]
    },
    {
        title: "software development",
        description: "websites, apps, games",
    },
    {
        title: "copywriting",
        description: "newsletters, seo, print, social",
    }
]

export default function Page() {

    return (
        <>
            <div style={{height:"100svh"}} className="relative w-full overflow-hidden text-black">
                {/* <img src={bg916} className="absolute inset-0 lg:hidden object-cover w-full h-full brightness-[25%]" /> */}
                {/* <img src={bg169} className="absolute inset-0 hidden lg:block object-cover w-full h-full brightness-[25%]" /> */}
                <div id="ui" style={{height:"100%"}} className="relative flex flex-col w-full gap-4 py-4 pb-12 overflow-x-hidden overflow-y-scroll text-2xl">
                    {/* content  */}
                    <div id="header" className="px-4 lg:px-[25vw]">
                        <p id="name" className="text-2xl font-bold">
                            {name}
                        </p>
                        <div id="bio" className="text-2xl ">
                            {bio.map((line, index) => (
                                <p key={index}>{line}</p>
                            ))}
                        </div>

                    </div>
                    {items.map((item, index) => (
                        <div>
                            <div className="lg:px-[25vw] px-4">
                                <p className="font-bold">{item.title}</p>
                                <p>{item.description}</p>
                            </div>
                            <div key={index} className="overflow-x-scroll overflow-y-hidden w-[100vw] h-max">
                                <div className="flex gap-2 px-4 lg:pl-[25vw] py-2 min-w-max w-max min-h-max h-max">
                                    {item.images && item.images.map((src, index) => (
                                        <div key={index} className="w-[80vw] lg:w-[50vw] flex flex-col gap-2">
                                            <img
                                                className="rounded-lg"
                                                src={src}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

