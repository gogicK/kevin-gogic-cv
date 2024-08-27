import React from 'react';

const DownloadButton = ({ url, label }) => {
    return (
        <a href={url} download>
            <button className="rounded-lg px-3 py-2 text-indigo-500 border-indigo-500 border-2 hover:bg-indigo-500 hover:text-white">
                {label}
            </button>
        </a>
    );
};

export default DownloadButton;