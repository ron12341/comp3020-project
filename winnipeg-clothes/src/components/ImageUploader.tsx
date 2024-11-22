import { useEffect, useState } from "react";

import "./ImageUploader.css";

interface ImageUploaderProps {
  onFileUpload: (image: string) => void;
  onFileDelete: () => void;
  fileString?: string;
}

function ImageUploader({ onFileUpload, onFileDelete, fileString }: ImageUploaderProps) {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);

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
      onFileUpload(result); // Pass the image string to the parent
    };
    reader.readAsDataURL(file);
  };

  const deleteImage = () => {
    onFileDelete();
    setFile(null);
  };

  const handleClick = () => {
    document.getElementById("file-input")?.click();
  };

  useEffect(() => {
    if (!fileString) {
      deleteImage();
    }
  }, [fileString]);

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
      {file ? (
        <div className="filename-container">
          <p>{file?.name}</p>
          <button
            className="delete-btn"
            aria-label="Delete"
            onClick={(e) => {
              e.stopPropagation();
              deleteImage();
            }}
          >
            &#x2715;
          </button>
        </div>
      ) : (
        <p>Click or drop an image file to upload</p>
      )}
    </div>
  );
}

export default ImageUploader;
