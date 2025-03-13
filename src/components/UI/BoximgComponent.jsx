import React from 'react'
import Boximg from './Boximg'

function BoximgComponent() {
    return (
        <div className='absolute  z-40 bottom-[29.5%] right-5 flex space-x-[56px] items-end'>
            <span className='flex items-center justify-center'>
                <Boximg HEIGHT="56px" WIDTH="56px" SRC="gates.svg" classNameImage={"!w-[16px] !h-[16px]"} Image="Gates" />
                <div className='flex flex-col space-y-[56px]'>
                <Boximg HEIGHT="56px" WIDTH="56px" SRC="Shops.svg" classNameImage={"!w-[16px] !h-[16px]"} Image="Shops" />
                <Boximg HEIGHT="56px" WIDTH="56px" SRC="Upload.svg" classNameImage={"!w-[16px] !h-[16px]"} Image={"Upload \n Tickets"} />
                </div>
            </span>
            <span className='flex flex-col space-y-[56px] items-center w-fit'>
                <Boximg HEIGHT="56px" WIDTH="56px" SRC="lounge.svg" classNameImage={"!w-[16px] !h-[16px]"} Image="Lounge" />
                <Boximg
                    HEIGHT="114px"
                    WIDTH="166px"
                    classNameImage={"!w-[61.78px] !h-[61.78px] mt-3"}
                    classNameText={"!-mt-4"}
                    SRC="Navigation.svg"
                    Image={"Indoor navi with fast \n route to destination"}
                    Arrow={true}
                />

            </span>
        </div>
    )
}

export default BoximgComponent
