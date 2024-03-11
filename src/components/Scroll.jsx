import React, { useEffect, useState } from 'react';
import './style.css';

const Scroll = () => {
    const [scroll, setScroll] = useState(0);

    const updateScroll = () => {
        setScroll(window.scrollY);
        console.log(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', updateScroll);
        return () => {
            window.removeEventListener('scroll', updateScroll);
        };
    }, []);

    // className으로 적용하기위해 조건 설정
    const dynamicClassName = scroll > 100 ? 'smaller-box' : 'full-box';
    const finalClassName = `smaller-box ${dynamicClassName}`;

    return (
        <div className="flex flex-col justify-center mt-10">
            <div className="flex m-[3rem]">
                <h1 className="text-5xl font-bold ">귀여운 고양이 스크롤 이벤트</h1>
            </div>

            <div className="flex justify-center items-center">
                {/* video 조건 설정과 className지정*/}
                <video className={finalClassName} autoPlay loop muted> 
                    <source src="/Videos/cute_cat.mp4" type="video/mp4" />
                </video>
            </div>
            <div>
                <h2 className="text-3xl font-semibold"> </h2>
                <div>
                    <div className="w-[10rem] h-[40rem]"></div>
                </div>
            </div>
        </div>
    );
};

export default Scroll;
