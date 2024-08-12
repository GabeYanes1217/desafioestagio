import React from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.returnButton}
        onPress={() => navigation.navigate('Identification')}>
        <Svg
          svg
          width="49"
          height="48"
          viewBox="0 0 49 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M16.3125 29.625C16.0625 29.9375 15.5625 29.9375 15.25 29.625L2.1875 16.5625C1.875 16.25 1.875 15.8125 2.1875 15.5L15.25 2.4375C15.5625 2.125 16.0625 2.125 16.3125 2.4375L17.5625 3.625C17.875 3.9375 17.875 4.4375 17.5625 4.6875L7.875 14.375H29.25C29.625 14.375 30 14.75 30 15.125V16.875C30 17.3125 29.625 17.625 29.25 17.625H7.875L17.5625 27.375C17.875 27.625 17.875 28.125 17.5625 28.4375L16.3125 29.625Z"
            fill="#7B2CBF"
          />
        </Svg>
      </TouchableOpacity>
      <Text style={styles.title}>
        Para acessar sua conta no Poundsflats, por favor, insira seu número de
        telefone abaixo
      </Text>
      <TextInput
        placeholder="Número de celular"
        style={styles.input}
        keyboardType="phone-pad"
      />
      <Text>
        Para confirmar a sua identidade, enviaremos um código via SMS para o
        número informado
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
      <View style={styles.divider}>
        <Text style={styles.dividerText}>OU</Text>
      </View>
      <TouchableOpacity style={styles.socialButton}>
        <Svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M24.125 12C24.125 17.8125 19.8594 22.6406 14.2812 23.4844V15.375H17L17.5156 12H14.2812V9.84375C14.2812 8.90625 14.75 8.01562 16.2031 8.01562H17.6562V5.15625C17.6562 5.15625 16.3438 4.92188 15.0312 4.92188C12.4062 4.92188 10.6719 6.5625 10.6719 9.46875V12H7.71875V15.375H10.6719V23.4844C5.09375 22.6406 0.875 17.8125 0.875 12C0.875 5.57812 6.07812 0.375 12.5 0.375C18.9219 0.375 24.125 5.57812 24.125 12Z"
            fill="#7B2CBF"
          />
        </Svg>
        <Text style={styles.socialButtonText}>Continuar com Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M23.4375 12.2812C23.4375 18.9375 18.8906 23.625 12.1875 23.625C5.71875 23.625 0.5625 18.4688 0.5625 12C0.5625 5.57812 5.71875 0.375 12.1875 0.375C15.2812 0.375 17.9531 1.54688 19.9688 3.42188L16.7812 6.46875C12.6562 2.48438 4.96875 5.48438 4.96875 12C4.96875 16.0781 8.20312 19.3594 12.1875 19.3594C16.7812 19.3594 18.5156 16.0781 18.75 14.3438H12.1875V10.3594H23.25C23.3438 10.9688 23.4375 11.5312 23.4375 12.2812Z"
            fill="#7B2CBF"
          />
        </Svg>
        <Text style={styles.socialButtonText}>Continuar com Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M22.25 3C23.4688 3 24.5 4.03125 24.5 5.25V18.75C24.5 20.0156 23.4688 21 22.25 21H2.75C1.48438 21 0.5 20.0156 0.5 18.75V5.25C0.5 4.03125 1.48438 3 2.75 3H22.25ZM22.25 5.25H2.75V7.17188C3.78125 8.0625 5.46875 9.375 9.03125 12.1875C9.82812 12.7969 11.375 14.2969 12.5 14.25C13.5781 14.2969 15.125 12.7969 15.9219 12.1875C19.4844 9.375 21.1719 8.0625 22.25 7.17188V5.25ZM2.75 18.75H22.25V10.0781C21.1719 10.9219 19.625 12.1406 17.3281 13.9688C16.25 14.7656 14.4688 16.5469 12.5 16.5C10.4844 16.5469 8.65625 14.7656 7.625 13.9688C5.32812 12.1406 3.78125 10.9219 2.75 10.0781V18.75Z"
            fill="#7B2CBF"
          />
        </Svg>
        <Text style={styles.socialButtonText}>Continuar com e-mail</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'left',
    paddingHorizontal: 24,
    paddingVertical: 72,
    backgroundColor: '#F2F2F2',
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
    marginBottom: 20,
    color: '#10002B',
    fontWeight: 'regular',
  },
  input: {
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.16)',
    borderRadius: 4,
    marginBottom: 8,
  },
  button: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 8,
    backgroundColor: '#7B2CBF',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  divider: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  dividerText: {
    flex: 1,
    textAlign: 'center',
    color: '#10002B',
  },
  socialButton: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
    marginBottom: 10,
  },
  socialButtonText: {
    color: '#7B2CBF',
    fontSize: 16,
  },
});

export default LoginScreen;
