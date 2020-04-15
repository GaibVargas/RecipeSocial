import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },

  content: {
    padding: 10,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  header_favorite: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },

  author: {
    color: '#c61111',
    textDecorationLine: 'underline',
  },

  recipe_title: {
    textTransform: 'capitalize',
    fontSize: 15,
    marginRight: 5,
    fontWeight: 'bold',
  },

  img_container: {
    width: 150,
    height: 100,
    backgroundColor: 'blue',
  },

  details: {
    marginTop: 20,
  },

  details_container: {
    marginBottom: 20,
  },

  details_title: {
    fontWeight: 'bold',
    marginBottom: 5
  },

  details_text: {
    textAlign: 'justify'
  }
});
