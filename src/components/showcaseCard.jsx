import { motion } from "framer-motion";

function ShowcaseCard(props){


    return(
        <div className="flex flex-col h-96 w-full md:w-2/6 bg-white p-4">
            <div className="bg-slate-200 h-full p-4 rounded-md">
            {/*Heading*/}
                <div className="w-full bg-blue-500 rounded-md p-2 text-white text-xl font-bold px-5">
                    {props.title}
                </div>
                <div className="h-full overflow-hidden items-center p-4 m-4">
                    <motion.div
                        className="flex flex-col space-y-2"
                        animate={{ y: ["100%", "-100%"] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}>
                        <p>Test Item 1</p>
                        <p>Test Item 2</p>
                        <p>Test Item 3</p>
                        <p>Test Item 4</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default ShowcaseCard;