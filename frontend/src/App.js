import React, { useState } from 'react';
import FileUploader from './components/FileUploader';
import ConversionStatus from './components/ConversionStatus';
import DownloadButton from './components/DownloadButton';
import './App.css';

const App = () => {
    const [status, setStatus] = useState('');
    const [convertedFile, setConvertedFile] = useState(null);

    const convertHeicToJpg = async (file) => {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('http://localhost:5000/api/conversion', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const data = await response.json();
            return data.file;
        } else {
            throw new Error('Conversion failed');
        }
    };

    const handleFileUpload = async (file) => {
        setStatus('Converting...');
        try {
            const convertedFile = await convertHeicToJpg(file);
            setConvertedFile(convertedFile);
            setStatus('Conversion completed');
        } catch (error) {
            setStatus('Conversion failed');
        }
    };

    return (
        <div className="container">
            <h1>HEIC to JPG Converter</h1>
            <FileUploader onUpload={handleFileUpload} />
            <ConversionStatus status={status} />
            <DownloadButton file={convertedFile} fileName="converted-image.jpg" />
        </div>
    );
};

export default App;
