"use client";

import { CldUploadWidget } from "next-cloudinary";

declare global {
  var cloudinary: any;
}

interface MediaUploadProps {
  onChange: (value: string) => void;
}

const MediaUpload: React.FC<React.PropsWithChildren<MediaUploadProps>> = ({
  onChange,
  children,
}) => {
  const handleUpload = (result: any) => {
    console.log("Result : ", result.info.secure_url)
    onChange(result.info.secure_url);
  };

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="xvf3epfx"
      options={{ maxFiles: 1 }}
    >
      {({ open }) => {
        return (
          <div onClick={() => open()} className="inline-block">
            {children}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default MediaUpload;
