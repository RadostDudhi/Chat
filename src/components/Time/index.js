import React, {Fragment} from "react";
import PropTypes from 'prop-types';
import format from 'date-fns/format';

const Time = ({ date }) => (
    <Fragment>
        {format(new Date(date), 'Pp')}
    </Fragment>
)


Time.propTypes = {
    date: PropTypes.string
};

export default Time;