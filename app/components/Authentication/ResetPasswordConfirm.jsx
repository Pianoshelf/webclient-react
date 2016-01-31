
import fluxMixin from 'flummox/mixin';
import FontAwesome from 'react-fontawesome';
import Helmet from 'react-helmet';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import includes from 'lodash/collection/includes';
import React from 'react';
import { Link } from 'react-router';

import Button from './utils/Button';
import ErrorMessage from './utils/ErrorMessage';
import InfoText from './utils/InfoText';
import Input from './utils/Input';
import Title from './utils/Title';
import { errors, success } from '../../utils/constants';

export default React.createClass({

  propTypes: {
    params: React.PropTypes.object,
  },

  mixins: [
    LinkedStateMixin,
    fluxMixin({
      login: store => store.state,
      progress: store => store.state,
    }),
  ],

  getInitialState() {
    return {
      password1: '',
      password2: '',
    };
  },

  handleSubmit_(event) {
    event.preventDefault();

    const { password1, password2 } = this.state;
    const { token, uid } = this.props.params;
    const user = { password1, password2 };

    // Trigger action
    const loginActions = this.flux.getActions('login');
    loginActions.resetPasswordConfirm(user, uid, token, this.flux);
  },

  render() {
    const inProgress = includes(this.state.inProgress, 'resetPasswordConfirm');

    return (
      <div>
        <Helmet title="Reset Password" />
        <Title>Reset your password</Title>
        <ErrorMessage errorCode={this.state.errorCode}
          dontDisplayIf={this.state.loggedIn || inProgress}
        />
        <If condition={this.state.errorCode === success.PASSWORD_CONFIRM_RESET}>
          <div>
            <InfoText>
              Click <Link to="/login/">here</Link> to go to the log in page.
            </InfoText>
          </div>
        <Else />
          <div>
            <InfoText>
              Enter a new password to reset your password.
            </InfoText>
            <form className="authentication__form" onSubmit={this.handleSubmit_}>
              <div className="authentication__inputs">
                <Input placeholder="New Password"
                  name="password1"
                  password
                  errorCode={this.state.errorCode}
                  errorWhen={[errors.NO_PASSWORD, errors.NOT_STRONG_PASSWORD]}
                  focusOnLoad
                  valueLink={this.linkState('password1')}
                />
                <Input placeholder="Confirm New Password"
                  name="password2"
                  password
                  errorCode={this.state.errorCode}
                  errorWhen={[errors.NOT_SAME_PASSWORD]}
                  valueLink={this.linkState('password2')}
                />
              </div>
              <Button color="red" disableIf={inProgress} submittedIf={inProgress}>
                <FontAwesome className="authentication__button-icon" name="paper-plane" />
                Reset password
              </Button>
            </form>
          </div>
        </If>
      </div>
    );
  },

});
