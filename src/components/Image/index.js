import { forwardRef, useState } from 'react'
import images from "~/assets/images";
import classNames from "classnames";
import styles from './Image.module.scss'

//dùng forwardRef để component Image được render bên trang khác nhận được tippy
const Image =forwardRef(({ src, alt, className, ...props }, ref) => {
  //fallback là khi lỗi dùng dung cái thay thế là fallback, fall back la chuoi rong
  const[fallback, setFallback] = useState('')
  const handleError = () => {
    setFallback(images.noImage)
  }

  return <img className={classNames(styles.wrapper, className)} ref={ref} src={ fallback || src } alt={alt} {...props} onError={handleError} />
})

export default Image;