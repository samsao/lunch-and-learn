import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Cell, TextField } from '@mobile/components/reusable';
import { isValidEmail, isNotEmpty } from '@mobile/helpers/validation';
import { Padding } from '@mobile/constants/style/';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    width: '100%',
    paddingTop: Padding.MEDIUM,
    paddingBottom: Padding.MEDIUM,
  },
});

type Props = {
  onButtonPress: () => void
};

export default class LoginForm extends React.Component {
  props: Props;

  state: {
    email: string,
    password: string,
    isEmailValid: boolean,
    isPasswordValid: boolean
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isEmailValid: true,
      isPasswordValid: true,
    };
  }

  onEmailChange = (email: string) => {
    this.setState({ email, isEmailValid: true });
  };

  onPasswordChange = (password: string) => {
    this.setState({ password });
  };

  fieldsAreInvalid(): boolean {
    const { isEmailValid, isPasswordValid } = this.state;
    return !(isEmailValid && isPasswordValid);
  }

  onButtonTap = () => {
    this.setState({
      isPasswordValid: isNotEmpty(this.state.password),
      isEmailValid: isValidEmail(this.state.email),
    });
    if (this.fieldsAreInvalid) return;
    this.props.onButtonPress();
  };

  render() {
    return (
      <View>
        <Cell>
          <TextField
            value={this.state.email}
            onChangeText={this.onEmailChange}
            placeholder='Email'
            isEmail={true}
            secureTextEntry={false}
            isValid={this.state.isEmailValid}
          />
        </Cell>
        <Cell>
          <TextField
            value={this.state.password}
            onChangeText={this.onPasswordChange}
            placeholder='Password'
            isEmail={false}
            secureTextEntry={true}
            isValid={this.state.isPasswordValid}
          />
        </Cell>
        <View style={styles.button}>
          <Button
            text={'Log In'}
            onButtonTap={this.props.onButtonPress}
            isButtonActive={true}
          />
        </View>
      </View>
    );
  }
}
