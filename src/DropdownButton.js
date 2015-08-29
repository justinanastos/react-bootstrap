import React from 'react';
import BootstrapMixin from './BootstrapMixin';
import Dropdown from './Dropdown';
import NavDropdown from './NavDropdown';
import all from 'react-prop-types/lib/all';
import deprecationWarning from './utils/deprecationWarning';
import omit from 'lodash/object/omit';

class DropdownButton extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let { title, ...props } = this.props;

    let toggleProps = omit(props, Dropdown.ControlledComponent.propTypes);

    return (
      <Dropdown {...props}>
        <Dropdown.Toggle {...toggleProps}>
          {title}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {this.props.children}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

DropdownButton.propTypes = {
  /**
   * When used with the `title` prop, the noCaret option will not render a caret icon, in the toggle element.
   */
  noCaret: React.PropTypes.bool,

  title: React.PropTypes.node.isRequired,

  ...Dropdown.propTypes,
  ...BootstrapMixin.propTypes
};

DropdownButton.defaultProps = {
  pullRight: false,
  dropup: false,
  navItem: false,
  noCaret: false
};

export default DropdownButton;
