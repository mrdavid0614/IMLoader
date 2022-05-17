import { useRef, useState } from 'react';
import { useLocation } from "wouter";
import axios from "axios";
import { useImageContext } from '../context/ImageContext';
import Uploading from '../components/Uploading';
import image from '../assets/image.svg';

function Upload() {
  const [, setLocation] = useLocation();
  const { setImageFromBackend } = useImageContext();
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const handleOnFileChange = (e) => {
    setSelectedImage(e.target.files[0]);
  }

  const handleOnDrop = (e) => {
    e.preventDefault();
    const image = e.dataTransfer.files[0];
    setSelectedImage(image);
  };

  const handleUpload = async () => {
    setIsFetching(true);
    const API_URL = import.meta.env.VITE_API_URL;
    const data = new FormData();
    data.append("file", selectedImage);
    const res = await axios.post(API_URL, data, { headers: { "Content-Type": "multipart/form-data" } });
    setIsFetching(false);
    if (res.status === 200) {
        setImageFromBackend(res.data.path);
        setLocation("/uploaded");
    }
  };

  return (
    <>
    {isFetching
        ? <Uploading /> : 
        <>
          <h1 className="text-2xl font-bold">Upload your image</h1>
          <small className="text-lg text-gray-500 font-bold">File should be Jpeg, Png...</small>
          <input
            type="file"
            className="hidden"
            ref={fileInputRef}
            onChange={handleOnFileChange}
            accept="image/png, image/jpeg"
          />
          {!!selectedImage ? (
            <>
              <img src={URL.createObjectURL(selectedImage)} alt={selectedImage.name} className="w-52" />
              <button
                className="mt-2 rounded-xl bg-green-600 hover:bg-green-700 transition-all delay-75 hover:translate-y-[-4px] hover:scale-105 ease-linear font-bold text-white p-[13px]"
                onClick={handleUpload}>
                  Upload
              </button>
              <p className="text-lg text-gray-500 font-bold">Or</p>
              <button
                className="rounded-xl bg-[#cbcbcb] hover:bg-[#a3a3a3] transition-all delay-75 hover:translate-y-[-4px] hover:scale-105 ease-linear font-bold p-[13px] outline-none"
                onClick={() => fileInputRef.current.click()}
              >
                  Choose another file
              </button>
            </>
          ) : (
            <>
              <div
                className="border-4 border-dashed border-blue-400 p-16 rounded-xl flex flex-col items-center gap-10 bg-blue-50 hover:bg-blue-100 cursor-pointer"
                onClick={() => fileInputRef.current.click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleOnDrop}
              >
                <img src={image} role="presentation" className="w-36" />
                <small className="text-2xl text-gray-500 font-bold">Drag & Drop your image here</small>
              </div>
              <p className="text-lg text-gray-500 font-bold">Or</p>
              <button
                className="rounded-xl bg-[#2F80ED] hover:bg-[#2565b8] transition-all delay-75 hover:translate-y-[-4px] hover:scale-105 ease-linear text-white p-[13px] outline-none"
                onClick={() => fileInputRef.current.click()}
              >
                  Choose a file
              </button>
            </>
          )}
        </>
      }
    </>
  )
}

export default Upload