import React from 'react';

const ShareSecton = ({slug}) => {
    return (
        <div style={{borderRadius:"15px"}} className='bg-gray-850 border-gray-800 p-3 my-4 d-flex justify-content-lg-between flex-column flex-lg-row align-items-center'>
            <h5 className='mb-4 mb-lg-0 article-subTitle'>اشتراک گذاری مقاله:</h5>
            <div className='d-flex'>
                <a 
                className='fs-4 mx-2 color-gray-600'
                target={'_blank'}
                rel="noreferrer"
                href={`https://t.me/share/url?url=https://www.codinglbf.ir/weblog/${slug}`}>
                    <i class="bi bi-telegram"></i>
                </a>
                <a 
                className='fs-4 mx-2 color-gray-600'
                target={'_blank'}
                rel="noreferrer"
                href={`whatsapp://send/?text=https://www.codinglbf.ir/weblog/${slug}`}>
                   <i class="bi bi-whatsapp"></i>
                </a>
                <a 
                className='fs-4 mx-2 color-gray-600'
                target={'_blank'}
                rel="noreferrer"
                href={`https://www.linkedin.com/sharing/share-offsite/?url=https://www.codinglbf.ir/weblog/${slug}`}>
                    <i class="bi bi-linkedin"></i>
                </a>
            
            </div>
        </div>
    );
};

export default ShareSecton;