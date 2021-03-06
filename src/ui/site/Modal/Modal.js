/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'




//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './modal.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./modal.scss')
}

const baseClassName = 'modal'


/**
 * Use `Modal` to
 * Has color `x`
 */
const Modal = ({
  id,
  className,
  style
}) => {


  return (
    <div
      className={
        [
        //styles[baseClassName],
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      <h2>Welcome to the Modal component</h2>
    </div>
  )}

Modal.propTypes = {
  /**
   * Provide an HTML id to this element
   */
  id:PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  className:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the element.
   */
  style:PropTypes.object,

  /**
   *  The children JSX
   */
  children:PropTypes.node,

  /**
   * Which html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  //as: PropTypes.string,
}

/*
Modal.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default Modal
