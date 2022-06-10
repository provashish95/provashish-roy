import React from 'react';

const Loading = () => {
    return (
        <div style={{ height: '200px' }} className='w-100 d-flex align-items-center justify-content-center'>
            <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;