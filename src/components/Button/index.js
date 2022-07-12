import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function Button({
                  to,
                  href,
                  text = false,
                  primary = false,
                  disabled = false,
                  children,
                  onClick,
                  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps
  };

  if (disabled) {
    delete props.onClick;
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }
  const classes = cx('wrapper', {
    primary,
    text,
    disabled,
  });

  return (
    <Comp className={classes} {...props}>
      <span>{children}</span>
    </Comp>
  )
}

export default Button;