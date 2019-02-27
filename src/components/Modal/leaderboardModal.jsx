import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';

export default class LeaderboardModal extends React.Component {
    render() {
        const {
        firstName, lastName, picture, major, year, opened, onChange
        } = this.props;

        return opened ? (
        <div className="modal-wrapper">
            <div className="leaderboard-modal-container">
                <div className="padding">
                    <h1>User Info</h1>
                    <br />
                    <br />
                    <div className="content-container">
                        <div className="image-container">
                            <img src={picture || "/assets/images/unknown.png"} />
                        </div>
                        <div className="text-container">
                            <h3>Name:  {firstName} {lastName}</h3>
                            <h3>Major:  {major}</h3>
                            <h3>
                                Year:  {(year == 1) && "Freshman"}{(year == 2) && "Sophomore"}{(year == 3) && "Junior"}{(year == 4) && "Senior"}
                            </h3>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="button-container">
                    <Button text="Close" color="red" onClick={onChange} />
                    </div>
                </div>
            </div>
        </div>
        ) : null;
    }
}

LeaderboardModal.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  opened: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
