import React from 'react';

const DownloadButton = ({ url, label }) => {
    return (
        <a href={url} download>
            <button className="btn-primary-reverse">
                {label}
            </button>
        </a>
    );
};

export default DownloadButton;