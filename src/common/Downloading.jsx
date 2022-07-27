import React from 'react'
import LoadingDots from '../common/LoadingDots';
import './downloading.css'

export default function Downloading({showDownloading}) {

    if(showDownloading){
        return (
            <div className='downloading'>
                <div className='downloadingOverlay'>Downloading</div>

                <div className='downloadingContent'>
                    <div className='hCenterFlex'>
                        <LoadingDots/>
                    </div>
                    Creating PDF File...
                </div>

            </div>
        )
    }
}
