import { useState } from "react";

import './ImageUploader.css'

interface ImageUploaderProps {
  onFileUpload: (image: string) => void;
}

function ImageUploader({ onFileUpload }: ImageUploaderProps) {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);

    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      convertFileToString(file);
    } else {
      alert("Please upload a valid image file.");
    }
  };

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      convertFileToString(file);
    } else {
      alert("Please upload a valid image file.");
    }
  };

  const convertFileToString = (file: File) => {
    setFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setImagePreview(result); // Update the preview
      onFileUpload(result); // Pass the image string to the parent
    };
    reader.readAsDataURL(file);
  };

  const handleClick = () => {
    document.getElementById("file-input")?.click();
  };

  return (
    <div
      className={dragging ? "image-uploader dragging" : "image-uploader"}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleClick}
    >
      <input
        id="file-input"
        type="file"
        accept="image/*"
        onChange={handleFileInputChange}
      />
      {imagePreview ? (
        <p>{file?.name}</p>
      ) : (
        <p>Click or drop an image file to upload</p>
      )}
    </div>
  );
}

export default ImageUploader;
