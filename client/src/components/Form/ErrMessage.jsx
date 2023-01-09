import React from 'react'

const ErrMessage = ({ErrMsg, color }) => {
  return (
    <div>
        <div className={`p-2 text-sm bg-${color}-700 text-white w-full`}>{ErrMsg}</div>
    </div>
  )
}

export default ErrMessage