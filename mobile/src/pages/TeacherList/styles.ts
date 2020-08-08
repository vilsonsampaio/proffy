import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#F0F0F7',
  },

  teacherList: {
    marginTop: -40,
  },

  searchForm: {
    marginBottom: 24,
  },

  label: {
    color: '#D4C2FF',

    fontFamily: 'Poppins_400Regular'
  },

  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inputBlock: {
    width: '48%',
  },

  input: {
    justifyContent: 'center',

    height: 54,

    marginTop: 4,
    marginBottom: 16,
    paddingHorizontal: 16,
    
    backgroundColor: '#FFF',
    
    borderRadius: 8,
  },

  submitButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    height: 56,

    backgroundColor: '#04D361',

    borderRadius: 8,
  },

  submitButtonText: {
    color: '#FFF',

    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
  },
});

export default styles;