import { createContext, useContext, useState } from "react";

const ImageContext = createContext({ imageFromBackend: "", setImageFromBackend: () => {} });

export const useImageContext = () => useContext(ImageContext);

export default function ImageContextProvider ({ children }) {
  const [imageFromBackend, setImageFromBackend] = useState(null);
  return <ImageContext.Provider value={{ 
    imageFromBackend,
    setImageFromBackend
   }}>
      {children}
  </ImageContext.Provider>
}