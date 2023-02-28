import classes from './Notification.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

const notificationContainer = document.getElementById('notificationContainer');

/* Component ---------------------------------------------------------------- */

export function Notification({
  show,
  onClose,
  className,
  children,
  ...restProps
}) {
  return show
    ? createPortal(
        <div
          className={classNames(classes.Notification, className)}
          {...restProps}
        >
          {children}
          <button
            type="button"
            className={classes.closeButton}
            onClick={onClose}
          >
            ×
          </button>
        </div>,
        notificationContainer
      )
    : null;
}

/* Props -------------------------------------------------------------------- */
Notification.defaultProps = {
  show: false,
};

Notification.propTypes = {
  show: PropTypes.bool,
  className: PropTypes.string,
  //node : 렌더링 될 수 있는 것들은 다음과 같습니다. 숫자(numbers), 문자(strings), 엘리먼트(elements),
  // 또는 이러한 타입들(types)을 포함하고 있는 배열(array) (혹은 배열의 fragment)
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
};
