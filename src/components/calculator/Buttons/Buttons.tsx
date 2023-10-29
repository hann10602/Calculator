import React from 'react'

type Props = {
    size?: 'horizontal' | 'vertical' | ''
    color?: 'red' | 'blue' | 'gray' | ''
    title: string
    onClick: () => void
}

const Buttons = ({size = '', color = '', title, onClick}: Props) => {
  return (
    <div onClick={onClick} className={` 
    ${size === 'horizontal' && 'col-span-2 '}
    ${size === 'vertical' && 'row-span-2 '}
    ${size === '' && 'w-16 h-16'}
    ${color === 'red' && 'bg-red-custom '}
    ${color === 'blue' && 'bg-blue-custom '}
    ${color === 'gray' && 'bg-gray-custom '}
    ${color === '' && 'bg-default-custom '}
    border border-black text-white hover:border-gray-500 hover:text-black flex justify-center items-center`}>
        {title}
    </div>
  )
}

export default Buttons