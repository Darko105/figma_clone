import CursorSVG from '@/public/assets/CursorSVG'
import { CursorChatProps } from '@/types/type'
import React from 'react'

const CursorChat = ({cursor,cursorState,setCursorState,updateMyPresence}:CursorChatProps) => {
  return (
    <div className='absulote top-0 left-0' style={{transform:`translateX(${cursor.x}px) translateY(${cursor.y}px)`}}>
        {/* {cursorState.mode === CursorMode.Chat && ( */}
            <>
                <CursorSVG color='#000'/>
                <div className='absulote left-2 top-5 bg-blue-500 px-4 py-2 text-sm leading-relaxed text-white rounded-[20px]'>
                    {cursorState.previousMessage && (
                        <div>
                            {cursorState.previousMessage}
                        </div>
                    )}
                    <input
                    className='z-10 w-60 border-none bg-transparent text-white placeholder-blue-300 outline-none'
                    autoFocus={true}
                    />
                </div>
            </>
        {/* )} */}
    </div>
  )
}

export default CursorChat