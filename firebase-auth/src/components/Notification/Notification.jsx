import classes from './Notification.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';

const notificationContainer = document.getElementById('notificationContainer');

/* Component ---------------------------------------------------------------- */

export function Notification({
  show,
  onClose,
  className,
  children,
  ...restProps
}) {
  //esc 누르면 notification이 닫혀지게 함
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const { current: closeButton } = closeButtonRef;

    if (closeButton) {
      const handleKeyUp = (e) => {
        console.log(e.key);
        if (e.key.toLowerCase() === 'escape') {
          onClose();
        }
      };

      // 버튼 요소에 이벤트를 연결하면
      // 초점이 버튼 요소에 적용되었을때 그때 이벤트가 발동
      globalThis.addEventListener('keyup', handleKeyUp);
      //cleanup
      return () => globalThis.removeEventListener('keyup', handleKeyUp);
    }
  }, [onClose, show]);

  return show
    ? createPortal(
        <div
          className={classNames(classes.Notification, className)}
          {...restProps}
        >
          {children}
          <button
            ref={closeButtonRef}
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
