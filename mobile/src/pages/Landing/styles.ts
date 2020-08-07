import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    padding: 40,
    
    backgroundColor: '#8257E5',
  },

  banner: {
    width: '100%',
    
    resizeMode: 'contain',
  },

  title: {
    marginTop: 80,
    
    color: '#FFF',

    fontFamily: 'Poppins_400Regular',
    fontSize: 20,
    lineHeight: 30,
  },

  titleBold: {
    fontFamily: 'Poppins_600SemiBold',
    fontWeight: 'bold',
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
    marginTop: 40,
  },

  button: {
    justifyContent: 'space-between',
    
    width: '48%',
    height: 150,

    padding: 24,
    
    backgroundColor: '#333',

    borderRadius: 8,
  },

  buttonPrimary: {
    backgroundColor: '#9871F5',
  },

  buttonSecondary: {
    backgroundColor: '#04D361',
  },

  buttonText: {
    color: '#FFF',

    fontFamily: 'Archivo_700Bold',
    fontSize: 20,
  },

  totalConnections: {
    maxWidth: 140,

    marginTop: 40,

    color: '#D4C2FF',

    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    lineHeight: 20,
  },
});


export default styles;