import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    padding: 40,
    
    backgroundColor: '#8257E5',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    maxWidth: 180,

    color: '#FFF',
    
    fontFamily: 'Archivo_700Bold',
    fontSize: 32,
    lineHeight: 37,
  },

  description: {
    maxWidth: 240,
    
    marginTop: 24,
    
    color: '#D4C2FF',
    
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    lineHeight: 26,
  },

  okButton: {
    justifyContent: 'center',
    alignItems: 'center',

    height: 58,
    
    marginVertical: 40,
    
    backgroundColor: '#04D361',
    
    borderRadius: 8,
  },

  okButtonText: {
    color: '#FFF',

    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
  },
});


export default styles;