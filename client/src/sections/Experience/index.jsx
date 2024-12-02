import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Experience = () => {
    // const project = [
    //     {
    //         timestamp:"2022-2023",
    //         title:"Online Course Website",
    //         des:" The \"Online Course Project\" is designed to create an efficient online learning platform that offers a rich and effective learning experience for everyone looking to develop themselves through online education. This project focuses on creating a user-friendly and efficient learning space using cutting-edge technology, allowing learners to access lessons anytime and anywhere they want. ",
    //         link:["github"],
    //         stack:["NextJS","Prisma"],
    //         image:""
    //     },
    //     {
    //         title:"test",
    //         des:"TEST",
    //         link:["github"],
    //         stack:["NextJS","Prisma"],
    //         image:""
    //     },
    //     {
    //         title:"CyberGeekClub Website",
    //         des:"TEST",
    //         link:[],
    //         stack:["NextJS","Prisma"],
    //         image:""
    //     }

    // ]

    return (
        
        <div className="" id="Project-section">
             <input type="checkbox" id="my_modal_11" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box bg-priBG overflow-auto">
                        <h3 className="text-lg font-bold mb-5">CyberArena</h3>
                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-image-storage-e7a58.appspot.com/o/cyberarena.PNG?alt=media&token=6858211e-c525-4aa4-83f6-781936fa2377" className="rounded-md" />

                    </div>
                <label className="modal-backdrop" htmlFor="my_modal_11">Close</label>
            </div>

            <input type="checkbox" id="my_modal_12" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box bg-priBG overflow-auto">
                        <h3 className="text-lg font-bold mb-5">CyberGeekClub Website </h3>

                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-image-storage-e7a58.appspot.com/o/cygergeekweb.PNG?alt=media&token=f1d09b80-be86-4837-bb42-c808756b97f0" className="rounded-md" />
                        
                    </div>
                <label className="modal-backdrop" htmlFor="my_modal_12">Close</label>
            </div>

            <input type="checkbox" id="my_modal_13" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box bg-priBG overflow-auto">
                        <h3 className="text-lg font-bold mb-5">Next Future </h3>

                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-image-storage-e7a58.appspot.com/o/Screenshot%202024-04-20%20014354.png?alt=media&token=d6a048f9-c6dc-4045-9cbf-a1382341674e" className="rounded-md" />
                        
                    </div>
                <label className="modal-backdrop" htmlFor="my_modal_13">Close</label>
            </div>
            <input type="checkbox" id="my_modal_14" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box bg-priBG overflow-auto">
                        <h3 className="text-lg font-bold mb-5">Personal Portfolio V1 </h3>

                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-image-storage-e7a58.appspot.com/o/portfirstver.png?alt=media&token=f6ab7a48-9153-450d-87ab-06ee14b5bfd0" className="rounded-md" />
                        
                    </div>
                <label className="modal-backdrop" htmlFor="my_modal_14">Close</label>
            </div>

            <span className="text-priAccent font-medium">Project</span>

            <label htmlFor="my_modal_11" className=" group grid grid-cols-[30%_70%] transition-all duration-100 hover:bg-[#525759] px-2 py-6 rounded-md">
                <div>
                    <div>
                        <span className="text-sm">2024</span>
                    </div>
                    <div>
                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-image-storage-e7a58.appspot.com/o/cyberarena.PNG?alt=media&token=6858211e-c525-4aa4-83f6-781936fa2377" className="w-5/6 rounded-md border-2 border-priSubContent" />
                    </div>
                </div>
                <div className="grid gap-y-4">
                    <div className="text-priAccent">CyberArena</div>
                    <div className="flex gap-4 text-xl">
                        <a className ="transition-all duration-150 hover:text-priTitle hover:scale-125 " target="_blank" href="https://cyberarena.vercel.app/"><FiExternalLink /></a>
                    </div>
                    <div className="text-sm ">It's a card game about CyberSecurity designed for training on various real-world cyber threats.  using NextJS </div>
                    <div className="grid grid-cols-3 md:flex gap-4 text-sm">
                        <div className="bg-priSubContent px-2 py-1 rounded-md hover:text-priTitle">NextJS</div>
                        <div className="bg-priSubContent px-2 py-1 rounded-md hover:text-priTitle">Tailwind</div>
                        <div className="bg-priSubContent px-2 py-1 rounded-md hover:text-priTitle">MongoDB</div>
                    </div>
                </div>
            </label>

            <label htmlFor="my_modal_12" className=" group grid grid-cols-[30%_70%] transition-all duration-100 hover:bg-[#525759] px-2 py-6 rounded-md">
                <div>
                    <div>
                        <span className="text-sm">2024</span>
                    </div>
                    <div>
                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-image-storage-e7a58.appspot.com/o/cygergeekweb.PNG?alt=media&token=f1d09b80-be86-4837-bb42-c808756b97f0" className="w-5/6 rounded-md border-2 border-priSubContent" />
                    </div>
                </div>
                <div className="grid gap-y-4">
                    <div className="text-priAccent">CyberGeekClub Website</div>
                    <div className="flex gap-4 text-xl">
                        <a className ="transition-all duration-150 hover:text-priTitle hover:scale-125 " target="_blank" href="https://cybergeekclub.vercel.app/"><FiExternalLink /></a>
                    </div>
                    <div className="text-sm ">The "Online Course Project" is designed to create an efficient online learning platform that offers a rich and effective learning experience for everyone looking to develop themselves through online education. This project focuses on creating a user-friendly and efficient learning space using cutting-edge technology, allowing learners to access lessons anytime and anywhere they want.</div>
                    <div className="grid grid-cols-3 md:flex gap-4 text-sm">
                        <div className="bg-priSubContent px-2 py-1 rounded-md hover:text-priTitle">NextJS</div>
                        <div className="bg-priSubContent px-2 py-1 rounded-md hover:text-priTitle">Tailwind</div>
                        <div className="bg-priSubContent px-2 py-1 rounded-md hover:text-priTitle">Prisma</div>
                        <div className="bg-priSubContent px-2 py-1 rounded-md hover:text-priTitle">MySQL</div>
                    </div>
                </div>
            </label>
            <label htmlFor="my_modal_13" className=" group  transition-all duration-100 font-kanit grid grid-cols-[30%_70%] hover:bg-[#525759] px-2 py-6 rounded-md">
                <div>
                    <div>
                        <span className="text-sm">2024</span>
                    </div>
                    <div>
                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-image-storage-e7a58.appspot.com/o/Screenshot%202024-04-20%20014354.png?alt=media&token=d6a048f9-c6dc-4045-9cbf-a1382341674e" className="w-5/6 rounded-md border-2 border-priSubContent" />
                    </div>
                </div>
                <div className="grid gap-y-4">
                    <div className="text-priAccent">Next Future</div>
                    <div className="flex gap-4 text-xl">
                        <a className ="transition-all duration-150 hover:text-priTitle hover:scale-125 " target="_blank" href="https://github.com/zignalssss/finalproject-appdev"><FaGithub /></a>
                        <a className ="transition-all duration-150 hover:text-priTitle hover:scale-125 " target="_blank" href="https://nextfuture-onlinecourse.vercel.app/"><FiExternalLink /></a>
                    </div>
                    <div className="text-sm">The "Online Course Project" is designed to create an efficient online learning platform that offers a rich and effective learning experience for everyone looking to develop themselves through online education. This project focuses on creating a user-friendly and efficient learning space using cutting-edge technology, allowing learners to access lessons anytime and anywhere they want.</div>
                    <div className="flex gap-4 text-sm">
                        <div className="bg-priSubContent px-2 py-1 rounded-md hover:text-priTitle">Tailwind</div>
                        <div className="bg-priSubContent px-2 py-1 rounded-md hover:text-priTitle">React</div>
                        <div className="bg-priSubContent px-2 py-1 rounded-md hover:text-priTitle">MongoDB</div>
                    </div>
                </div>
            </label>

            <label htmlFor="my_modal_14" className=" group  transition-all duration-100 grid grid-cols-[30%_70%] hover:bg-[#525759] px-2 py-6 rounded-md">
                <div>
                    <div>
                        <span className="text-sm">2023</span>
                    </div>
                    <div>
                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-image-storage-e7a58.appspot.com/o/portfirstver.png?alt=media&token=f6ab7a48-9153-450d-87ab-06ee14b5bfd0" className="w-5/6 rounded-md border-2 border-priSubContent" />
                    </div>
                </div>
                <div className="grid gap-y-4">
                    <div className="text-priAccent">Personal Protfolio V1</div>
                    <div className="flex gap-4 text-xl">
                        <a className ="transition-all duration-150 hover:text-priTitle hover:scale-125 " target="_blank" href="https://github.com/zignalssss/ReactPortfolio"><FaGithub /></a>
                        <a className ="transition-all duration-150 hover:text-priTitle hover:scale-125 " target="_blank" href="https://zignalssss.github.io/ReactPortfolio/?fbclid=PAZXh0bgNhZW0CMTEAAaaYScOx-ActwkI9o0EZ_SUNeteMtlNEKApFXsSojcIxlFWLMaqXRKsL2Ys_aem_6LOAdegeVh9yMJkUEFVg4g"><FiExternalLink /></a>
                    </div>
                    <div className="text-sm">The "Online Course Project" is designed to create an efficient online learning platform that offers a rich and effective learning experience for everyone looking to develop themselves through online education. This project focuses on creating a user-friendly and efficient learning space using cutting-edge technology, allowing learners to access lessons anytime and anywhere they want.</div>
                    <div className="flex gap-4 text-sm">
                        <div className="bg-priSubContent px-2 py-1 rounded-md hover:text-priTitle">CSS</div>
                        <div className="bg-priSubContent px-2 py-1 rounded-md hover:text-priTitle">React</div>
                    </div>
                </div>
            </label>
        </div>
    )
}
export default Experience;