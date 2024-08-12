import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const IdentificationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.returnButton}
        onPress={() => navigation.navigate('Splash')}>
        <Svg
          svg
          width="49"
          height="48"
          viewBox="0 0 49 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          {/* Substitua "M12 2L2 7h20L12 2z" pelo Path do seu ícone SVG */}
          <Path
            d="M16.3125 29.625C16.0625 29.9375 15.5625 29.9375 15.25 29.625L2.1875 16.5625C1.875 16.25 1.875 15.8125 2.1875 15.5L15.25 2.4375C15.5625 2.125 16.0625 2.125 16.3125 2.4375L17.5625 3.625C17.875 3.9375 17.875 4.4375 17.5625 4.6875L7.875 14.375H29.25C29.625 14.375 30 14.75 30 15.125V16.875C30 17.3125 29.625 17.625 29.25 17.625H7.875L17.5625 27.375C17.875 27.625 17.875 28.125 17.5625 28.4375L16.3125 29.625Z"
            fill="#7B2CBF"
          />
        </Svg>
        <Text style={styles.title}>
          Para fazer o login no Pounsflats, você precisa se identificar com uma
          das opções abaixo
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Svg
          width="49"
          height="48"
          viewBox="0 0 49 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          {/* Substitua "M12 2L2 7h20L12 2z" pelo Path do seu ícone SVG */}
          <Path
            d="M32.8438 27C39.7812 27 45.5 32.7188 45.5 39.6562V43.5C45.5 46.0312 43.4375 48 41 48H8C5.46875 48 3.5 46.0312 3.5 43.5V39.6562C3.5 32.7188 9.125 27 16.0625 27C18.7812 27 20 28.5 24.5 28.5C28.9062 28.5 30.125 27 32.8438 27ZM42.5 43.5V39.6562C42.5 34.3125 38.1875 30 32.8438 30C31.0625 30 29.1875 31.5 24.5 31.5C19.7188 31.5 17.9375 30 16.0625 30C10.7188 30 6.5 34.3125 6.5 39.6562V43.5C6.5 44.3438 7.15625 45 8 45H41C41.75 45 42.5 44.3438 42.5 43.5ZM24.5 24C17.8438 24 12.5 18.6562 12.5 12C12.5 5.4375 17.8438 0 24.5 0C31.0625 0 36.5 5.4375 36.5 12C36.5 18.6562 31.0625 24 24.5 24ZM24.5 3C19.5312 3 15.5 7.125 15.5 12C15.5 16.9688 19.5312 21 24.5 21C29.375 21 33.5 16.9688 33.5 12C33.5 7.125 29.375 3 24.5 3Z"
            fill="#7B2CBF"
          />
        </Svg>
        <Text style={styles.buttonText}>Sou Hóspede</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Svg
          svg
          width="49"
          height="48"
          viewBox="0 0 49 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          {/* Substitua "M12 2L2 7h20L12 2z" pelo Path do seu ícone SVG */}
          <Path
            d="M24.5 24C17.8438 24 12.5 18.6562 12.5 12C12.5 5.4375 17.8438 0 24.5 0C31.0625 0 36.5 5.4375 36.5 12C36.5 18.6562 31.0625 24 24.5 24ZM24.5 3C19.5312 3 15.5 7.125 15.5 12C15.5 16.9688 19.5312 21 24.5 21C29.375 21 33.5 16.9688 33.5 12C33.5 7.125 29.375 3 24.5 3ZM33.0312 28.5938C39.9688 28.6875 45.5 34.2188 45.5 41.1562V43.5C45.5 46.0312 43.4375 48 41 48H8C5.46875 48 3.5 46.0312 3.5 43.5V41.1562C3.5 34.2188 8.9375 28.6875 15.875 28.5938L19.5312 41.4375L22.7188 31.9688L20.375 29.625C19.4375 28.6875 20.0938 27 21.5 27H27.5C28.8125 27 29.4688 28.6875 28.5312 29.625L26.1875 31.9688L29.375 41.4375L33.0312 28.5938ZM8 45H17.4688L13.625 31.875C9.5 32.9062 6.5 36.75 6.5 41.1562V43.5C6.5 44.3438 7.15625 45 8 45ZM21.5 45H27.4062L24.5 36.2812L21.5 45ZM42.5 43.5H42.4062V41.1562C42.4062 36.75 39.4062 32.9062 35.2812 31.875L31.4375 45H41C41.75 45 42.5 44.3438 42.5 43.5Z"
            fill="#7B2CBF"
          />
        </Svg>
        <Text style={styles.buttonText}>Sou Anfitrião</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flexStart',
    alignItems: 'center',
    gap: 16,
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
  button: {
    width: '100%',
    height: 'auto',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 16,
    gap: 16,
    backgroundColor: '#ffffff',
    borderColor: '#6200EE',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  buttonText: {
    color: '#7B2CBF',
    fontSize: 20,
    lineHeight: 24,
    fontWeight: 'medium',
  },
  returnButton: {
    width: '100%',
    alignItems: 'left',
    justifyContent: 'center',
    gap: 16,
  },
});

export default IdentificationScreen;
