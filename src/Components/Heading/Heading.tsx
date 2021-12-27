import React from 'react';

import {FadeIn} from "../FadeIn/FadeIn";

type Props = {
    header: string,
    alternateHeadingColor?: string,
    subHeader?: string,
}
export const Heading = ({header, subHeader, alternateHeadingColor = 'black'}: Props) => (
    <FadeIn>
        <h2 className="colors-body__heading">
            {header}
            <br/>
            <span style={{color: alternateHeadingColor}}>{subHeader}</span>
        </h2>
    </FadeIn>
);
