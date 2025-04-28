import Img, {ImageProps} from "next/image";

interface Props extends ImageProps{
    bgRequired?: boolean;
    width?: number;
    height?: number;
    bgWidth?: number;
    bgHeight?: number;
}

const SocialIcon = ({
    bgRequired,
    width=32,
    height=32,
    bgWidth=30,
    bgHeight=30,
    className,
    ...imgProps
   }: Props) => {

    return (
        <div className='flex items-center justify-center relative cursor-pointer'>
            {bgRequired && (
                <div style={{
                    width: bgWidth,
                    height: bgHeight,
                }}
                className='absolute bg-white top-0.5 rounded-full'>
                </div>)
            }
            <Img
                className={`relative ${className ? className : ''}`}
                width={width}
                height={height}
                {...imgProps}
            />
        </div>
    )
}

export default SocialIcon;