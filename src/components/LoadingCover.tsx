import React from 'react'
import './LoadingCoverCSS.css';
import { iLoadingCover } from '../interfaces/ILoadingCover.interface';

export const LoadingCoverComponent = (props: iLoadingCover) => {

    return (
        <div className='loading_cover_react-background__transparent'>
            {props.text}
        </div>
    )
}
