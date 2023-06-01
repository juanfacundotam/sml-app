import styles from "./UploadWidget.module.css"
import { useEffect, useRef } from "react";
//import { useDispatch } from "react-redux";
import { Image } from 'cloudinary-react';
const { VITE_CLOUND_NAME, VITE_UPLOAD_PRESENT } = import.meta.env;
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const UploadWidget = ({ onImageUpload }) => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    const [imageUrl, setImageUrl] = useState("");


    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget(
          {
            cloudName: VITE_CLOUND_NAME,
            uploadPreset: VITE_UPLOAD_PRESENT
          },
          function (error, result) {
            if (!error && result && result.event === "success") {
              const img = result.info.secure_url;
              setImageUrl(img);
              // Utilizar la función de devolución de llamada con la URL de la imagen
              onImageUpload(img);
            }
          }
        );
      }, []);
      
    return (
        <div className="flex flex-col justify-end items-end gap-1 w-full h-fit mt-5">

            <button
                className={styles.boton}
                onClick={() => widgetRef.current.open()}
                >
                Cambiar foto
            </button>
              </div>

    )
}

export default UploadWidget;