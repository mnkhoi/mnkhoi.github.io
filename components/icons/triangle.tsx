import React, { FC } from 'react'

interface TriangleIconProps {
    className?: string;
    width: number;
    height: number;
    [otherProps: string]: any;
}

const TriangleIcon: FC<TriangleIconProps> = ( { otherProps, width, height, className } ) => {
  return (
    <svg className={className} {...otherProps}  xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"><path d="M24 22h-24l12-20z"/></svg>
  )
}

export default TriangleIcon