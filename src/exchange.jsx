import React, { useState } from 'react'

const ExchangePage = () => {
    const [state, setState] = useState(0)
    const StyleButton = {
        boxShadow: 'inset 10px 10px 136px 21px #561185',
    };

    const ChangedCount = () => {
        setState(state + 1)
    }

    return (
        <div className='flex flex-col items-center justify-center py-[100px] gap-[100px]'>
            <div className='flex items-center gap-5'>
                <img className='w-[30px]' src="./src/assets/coin.png" alt="" />
                <p>{state}</p>
            </div>

            <div className=''>
                <button onClick={ChangedCount} style={StyleButton} className='active:scale-95 transform transition duration-200 bg-violet-300 shadow-md inset-shadow-lg w-[300px] h-[300px] rounded-[50%] flex justify-center items-center '>
                    <img src="./src/assets/bear.png" alt="" />
                </button>
            </div>
            <p>Hello Navfal</p>
        </div>
    )
}
export default ExchangePage