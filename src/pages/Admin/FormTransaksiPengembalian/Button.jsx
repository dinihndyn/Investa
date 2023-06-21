import React from 'react'
const Button = ({ children, onClick, className, type = "button" }) => {
  return <button type={type} onClick={onClick} className={"focus:outline-none text-white bg-investa-primary-50 hover:bg-investa-primary-50 focus:ring-4 focus:ring-yellow-300 font-medium rounded text-sm py-3 px-5 mr-2 dark:focus:ring-yellow-900 " + className}>{children}</button>
}

export default Button