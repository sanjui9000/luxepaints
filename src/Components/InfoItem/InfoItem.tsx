import React from 'react';

import {Heading} from "../Heading/Heading";
import {FadeIn} from "../FadeIn/FadeIn";

import './InfoItem.scss';

type Props = {
    heading: string,
    paragraph: string,
    switchBorders?: boolean,
}

export const InfoItem = ({heading, paragraph, switchBorders = false}: Props) => {
    return !switchBorders ? (
        <div className='InfoItem'>
            <Heading header={heading}/>
            <FadeIn>
                <p className='InfoItem-paragraph'>{paragraph}</p>
            </FadeIn>
        </div>
    ) : (
        <div className='InfoItem-switchBorders'>
            <Heading header={heading}/>
            <FadeIn>
                <p className='InfoItem-paragraph--switchBorders'>{paragraph}</p>
            </FadeIn>
        </div>
    );
}
