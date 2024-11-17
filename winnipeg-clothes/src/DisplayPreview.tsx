import React, { useState, MouseEvent } from "react";
import "./DisplayPreview.css";

interface Position {
  x: number;
  y: number;
}

interface Size {
  width: number;
  height: number;
}

function ImageUpload({
  onImageUpload,
}: {
  onImageUpload: (image: string | null) => void;
}) {
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImageUpload(URL.createObjectURL(file));
    }
  };

  return (
    <div className="uploadSection">
      <input type="file" accept="image/*" onChange={handleImageUpload} />
    </div>
  );
}

function ImagePreview({
  image,
  position,
  size,
  onDrag,
  onResize,
}: {
  image: string | null;
  position: Position;
  size: Size;
  onDrag: (deltaX: number, deltaY: number) => void;
  onResize: (deltaWidth: number, deltaHeight: number) => void;
}) {
  const [dragging, setDragging] = useState<boolean>(false);
  const [resizing, setResizing] = useState<boolean>(false);
  const [startPos, setStartPos] = useState<Position>({ x: 0, y: 0 });

  const handleMouseDownOnImage = (e: MouseEvent<HTMLDivElement>) => {
    // Start dragging only on the image itself
    setDragging(true);
    setStartPos({ x: e.clientX, y: e.clientY });
    e.preventDefault();
    e.stopPropagation();
  };

  const handleMouseUp = () => {
    setDragging(false);
    setResizing(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (dragging) {
      const deltaX = e.clientX - startPos.x;
      const deltaY = e.clientY - startPos.y;
      onDrag(deltaX, deltaY);
      setStartPos({ x: e.clientX, y: e.clientY });
    } else if (resizing) {
      const deltaWidth = e.clientX - startPos.x;
      const deltaHeight = e.clientY - startPos.y;
      onResize(deltaWidth, deltaHeight);
      setStartPos({ x: e.clientX, y: e.clientY });
    }
  };

  const handleResizeMouseDown = (e: MouseEvent) => {
    setResizing(true);
    setStartPos({ x: e.clientX, y: e.clientY });
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div
      className="previewContainer"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {image ? (
        <div
          className="previewBox"
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            width: `${size.width}px`,
            height: `${size.height}px`,
          }}
          onMouseDown={handleMouseDownOnImage}
        >
          <img
            src={image}
            alt="Preview"
            draggable="false" // Prevents native drag behavior
            style={{ width: "100%", height: "100%", cursor: "grab" }}
          />
          <div
            className="resizeHandle"
            onMouseDown={handleResizeMouseDown}
          ></div>
        </div>
      ) : (
        <div className="placeholderText">No image uploaded</div>
      )}
    </div>
  );
}

function DisplayPreview() {
  const [image, setImage] = useState<string | null>(null);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [size, setSize] = useState<Size>({ width: 300, height: 300 });

  const handleImageUpload = (image: string | null) => {
    setImage(image);
  };

  const handleDrag = (deltaX: number, deltaY: number) => {
    setPosition((prevPosition) => ({
      x: prevPosition.x + deltaX,
      y: prevPosition.y + deltaY,
    }));
  };

  const handleResize = (deltaWidth: number, deltaHeight: number) => {
    setSize((prevSize) => ({
      width: Math.max(prevSize.width + deltaWidth, 100),
      height: Math.max(prevSize.height + deltaHeight, 100),
    }));
  };

  return (
    <div>
      <ImageUpload onImageUpload={handleImageUpload} />
      <ImagePreview
        image={image}
        position={position}
        size={size}
        onDrag={handleDrag}
        onResize={handleResize}
      />
    </div>
  );
}

export default DisplayPreview;
