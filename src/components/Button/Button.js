import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import classnames from 'classnames';

import './Button.scss';

const isExternal = (url) => {
  return /^https?:\/\//.test(url);
};

const Button = ({ link, type, label, external, className, openNewtab }) => {
  const target = openNewtab ? '_blank' : '_self';
  const cssClass = classnames('btn', type, className);
  return link ? (
    isExternal(link) ?
      (
        <a href={link} target={target} className={cssClass} rel="noopener noreferrer" >
          {label}
        </a>
      ) : (
        <Link to={link} role="button" className={cssClass}>
          {label}
        </Link>
      )
  ) : (
    <button type={type} className={cssClass}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  link: PropTypes.string,
  external: PropTypes.bool,
};

Button.defaultProps = {
  external: false,
};

export default Button;
