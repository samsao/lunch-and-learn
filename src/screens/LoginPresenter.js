import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LoginTitle, LoginForm } from '@mobile/components/login';
import { emailLogin } from '@mobile/reducers/auth';
import { Loader } from '@mobile/components/reusable';
import { Padding } from '@mobile/constants/style';

type Props = {
  actions: { emailLogin: any },
  isLoading: boolean,
  loginFailed: boolean
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Padding.EXTRA_LARGE,
    height: '100%',
  },
});

class LoginPresenter extends React.Component {
  props: Props;

  showError() {
    if (!this.props.loginFailed) return undefined;
    return <Text>Login failed. Please check your credentials.</Text>;
  }

  render() {
    return (
      <View style={styles.container}>
        <LoginTitle />
        <Loader display={this.props.isLoading} />
        <LoginForm
          onButtonPress={() => this.props.actions.emailLogin(
            'asdfasdf@fasdafa.co',
            'asdfasdf'
            )}
        />
        {this.showError}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
  loginFailed: state.auth.loginFailed,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ emailLogin }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPresenter);
