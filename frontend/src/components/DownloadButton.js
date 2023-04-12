import React from 'react';

const DownloadButton = ({ file, fileName }) => {
    const downloadFile = () => {
        const link = document.createElement('a');
        link.href = `data:image/jpeg;base64,${file}`;
        link.download = fileName;
        link.click();
    };

    return (
        <div>
            {file && (
                <button className="button" onClick={downloadFile}>
                    Download Converted Image
                </button>
            )}
        </div>
    );
};

export default DownloadButton;