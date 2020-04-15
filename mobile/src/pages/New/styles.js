import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#e5e5e5',
    flex: 1,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },

  form: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 30,
    marginBottom: 10,
    paddingHorizontal: 20,
  },

  input: {
    backgroundColor: '#fff',
    width: '100%',
    height: 50,
    borderRadius: 4,
    marginVertical: 10,
    paddingHorizontal: 10,
    fontSize: 20,
  },

  area: {
    height: 200,
  },

  button: {
    marginVertical: 10,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c61111',
    borderRadius: 4,
  },

  button_text: {
    color: '#eee',
    fontSize: 20,
  },

  img_container: {
    width: '100%',
    height: 280,
    backgroundColor: '#fff',
    marginBottom: 10,
  },

  img: {
    width: '100%',
    height: 280,
    resizeMode: 'contain',
  }
});
