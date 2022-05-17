import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { useImageContext } from "../context/ImageContext";
import checkIcon from '../assets/check.png';

function Uploaded () {
    const [, setLocation] = useLocation();
    const { imageFromBackend } = useImageContext();
    const [isCopied, setIsCopied] = useState(false);

    const handleOnCopy = () => {
        navigator.clipboard.writeText(imageFromBackend);
        setIsCopied(true);
    }

    useEffect(() => {
        if (!imageFromBackend) setLocation("/");
    }, [])
    return (
        <>
            <img src={checkIcon} className="w-16" role="presentation" alt="" />
            <h1 className="text-2xl font-bold">Uploaded Succesfully!</h1>
            <img src={imageFromBackend} alt="Uploaded image" className="w-64 h-64 rounded-xl" />
            <div
              className="w-96 flex items-center gap-5 p-2 outline outline-2 outline-[#a8a8a8] bg-[#F6F8FB] rounded-lg cursor-pointer"
              onClick={handleOnCopy}
            >
                <p className="truncate" >{imageFromBackend}</p>
                <button
                  className={`rounded-xl ${isCopied ? "bg-[#219653] hover:bg-[#1a7642]" : "bg-[#2F80ED] hover:bg-[#2565b8]"} whitespace-nowrap transition-all delay-75 hover:translate-y-[-4px] hover:scale-105 ease-linear text-white p-[10px] outline-none`}
                  onClick={handleOnCopy}
                >
                  {isCopied ? "Copied!" : "Copy Link"}
                </button>
            </div>
        </>
    )
}

export default Uploaded