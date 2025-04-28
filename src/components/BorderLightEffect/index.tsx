const BorderLightEffect = () => {

    const cardStyle = {
        background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.8) 65%, rgba(0, 0, 0, 0) 95%)"
    };

    return(
        <div style={cardStyle} className='h-[1px] absolute w-full mb-4 top-0'>
        </div>
    )
}

export default BorderLightEffect;