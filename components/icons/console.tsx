import React, { FC } from 'react'

interface ConsoleIconProps {
    [otherProps: string]: any;
}

const ConsoleIcon: FC<ConsoleIconProps> = ( { otherProps } ) => {
  return (
    <svg {...otherProps} fill="#000000" width={30} height={30}  viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>console-window</title>
        <path d="M0 26.016q0 2.496 1.76 4.224t4.256 1.76h20q2.464 0 4.224-1.76t1.76-4.224v-20q0-2.496-1.76-4.256t-4.224-1.76h-20q-2.496 0-4.256 1.76t-1.76 4.256v20zM4 26.016v-14.016h24v14.016q0 0.832-0.576 1.408t-1.408 0.576h-20q-0.832 0-1.44-0.576t-0.576-1.408zM4 10.016v-4q0-0.832 0.576-1.408t1.44-0.608h20q0.8 0 1.408 0.608t0.576 1.408v4h-24zM6.016 20h1.984v-1.984h-1.984v1.984zM6.016 16h1.984v-1.984h-1.984v1.984zM6.016 8h1.984v-1.984h-1.984v1.984zM8 18.016h2.016v-2.016h-2.016v2.016zM10.016 22.016h4v-2.016h-4v2.016zM10.016 8h1.984v-1.984h-1.984v1.984zM14.016 8h12v-1.984h-12v1.984z"></path>
    </svg>
  )
}

export default ConsoleIcon