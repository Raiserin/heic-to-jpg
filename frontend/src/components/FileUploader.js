import React, { useState } from 'react';

const FileUploader = ({ onUpload }) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = () => {
        if (file) {
            onUpload(file);
        }
    };

    return (
        <div className="file-uploader">
            <input type="file" accept=".heic" onChange={handleFileChange} />
            <button className="button" onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default FileUploader;
