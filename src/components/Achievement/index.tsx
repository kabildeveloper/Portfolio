import Img from 'next/image'
import {motion, useInView} from "framer-motion";
import {useRef} from "react";

const Achievement = () => {

    const ref = useRef<HTMLDivElement>(null);
    const refInView = useInView(ref, {
        once: true,
    });

    return (
        <motion.div
            ref={ref}
            className='w-full'
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: refInView ? 1 : 0, y: refInView ? 0 : 200 }}
            transition={{ duration: 1 }}
        >
        <div className='px-5 container mx-auto'>
            <h3 className='text-4xl font-bold w-full text-center hidden md:block font-dancing'>
                <span className='text-gradient'>Achievement</span>
            </h3>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5 my-10 lg:my-20'>
                <div style={{alignSelf:"center"}} className='col-span-1 text-white text-shadow-lg text-shadow-amber-800'>
                    <h3 className='text-6xl hidden h-fit lg:block'>Where <br/> performance <br/> meets <br/> perfection</h3>
                    <h3 className='text-4xl block text-center h-fit lg:hidden'>Where performance meets perfection</h3>
                </div>
                <div className='col-span-1'>
                    <Img width={600} height={500} className='w-full rounded-2xl shadow-2xl shadow-yellow-500 mx-auto' src='/rockstar.png' alt='achievement'/>
                </div>
            </div>
        </div>
        </motion.div>
    );
};

export default Achievement;