import Img from 'next/image'

const Achievement = () => {
    return (
        <div className='px-5 md:px-28 container mx-auto'>
            <h3 className='text-4xl font-bold w-full text-center mb-12 hidden md:block font-dancing'>
                <span className='text-gradient'>Achievement</span>
            </h3>

            <div className='grid grid-cols-2 gap-5 my-20'>
                <div style={{alignSelf:"center"}} className='col-span-1 text-white text-shadow-lg text-shadow-amber-800'>
                    <h3 className='text-6xl h-fit'>Where <br/> performance <br/> meets <br/> perfection</h3>
                </div>
                <div className='col-span-1'>
                    <Img width={600} height={500} className='w-full rounded-2xl shadow-2xl shadow-yellow-500 mx-auto' src='/rockstar.png' alt='achievement'/>
                </div>
            </div>
        </div>
    );
};

export default Achievement;