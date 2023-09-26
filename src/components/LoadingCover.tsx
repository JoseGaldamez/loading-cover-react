import React from 'react'
import './LoadingCover.css';
import { iLoadingCover } from '../interfaces/ILoadingCover.interface';

export const LoadingCoverComponent = (props: iLoadingCover) => {

    return (
        <div className='background__transparent'>
            {props.text}
        </div>
    )
}
