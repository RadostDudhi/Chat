import React, {Fragment} from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";

import './Status.scss';

const Status = ({ online }) => (
    <Fragment>
        <span className={classNames("status", {"status--online": online} )}>
            {online ? 'online' : 'offline'}
        </span>
    </Fragment>
)


Status.propTypes = {
    online: PropTypes.bool
};

export default Status;