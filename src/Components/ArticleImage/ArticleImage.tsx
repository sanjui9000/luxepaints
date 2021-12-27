import React from 'react';

import './ArticleImage.scss'

type Props = {
    backgroundImage: string,
    imageText: string,
}

export const ArticleImage = ({backgroundImage, imageText}: Props) => (
    <div className="article-item">
        <article>
            <div className="article-hero" style={{backgroundImage: `url(${backgroundImage})`}}/>
            <div className="article-content">
                <div className='content__container'>
                    <div className="content__copy">
                        <p>
                            {imageText}
                        </p>
                    </div>
                </div>
            </div>
        </article>
    </div>
);
