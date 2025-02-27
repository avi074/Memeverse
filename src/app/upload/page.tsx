"use client";

import { useState } from "react";

export default function Upload() {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = () => {
    if (!file) return;
    console.log("Uploading:", file);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">📤 Upload Meme</h1>
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button className="bg-blue-500 text-white p-2 rounded mt-4" onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
}
