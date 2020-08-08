import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,

    backgroundColor: '#FFF',

    borderWidth: 1,
    borderColor: '#E6E6F0',
    borderRadius: 8,
    
    overflow: 'hidden',
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center',

    padding: 24,
  },

  avatar: {
    width: 64,
    height: 64,

    backgroundColor: '#EEE',

    borderRadius: 32,
  },

  profileInfo: {
    marginLeft: 16,
  },

  name: {
    color: '#32264D',

    fontFamily: 'Archivo_700Bold',
    fontSize: 20,
  },

  subject: {
    marginTop: 4,
    
    color: '#6A6180',
    
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },

  bio: {
    marginHorizontal: 24,

    color: '#6A6180',
    
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 24,
  },

  footer: {
    alignItems: 'center',
    
    marginTop: 24,
    padding: 24,

    backgroundColor: '#FAFAFC',
  },

  price: {
    color: '#6A6180',

    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
  },

  priceValue: {
    color: '#8257E5',

    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
  },

  buttonsContainer: {
    flexDirection: 'row',

    marginTop: 16,
  },

  favoriteButton: {
    justifyContent: 'center',
    alignItems: 'center',

    width: 56,
    height: 56,
    
    marginRight: 8,

    backgroundColor: '#8257E5',
    
    borderRadius: 8,
  },

  favorited: {
    backgroundColor: '#E33D3D'
  },

  contactButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    height: 56,

    marginRight: 8,

    backgroundColor: '#04D361',

    borderRadius: 8,
  },

  contactButtonText: {
    marginLeft: 16,
    
    color: '#FFF',

    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
  }
});

export default styles;