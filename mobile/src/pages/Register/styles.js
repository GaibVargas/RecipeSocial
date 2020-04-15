import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c61111',
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    width: '80%',
    borderRadius: 8,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#c61111'
  },

  form: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 40,
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

  button: {
    marginTop: 20,
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
});
