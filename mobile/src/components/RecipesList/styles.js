import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  recipes_container: {
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  recipe: {
    backgroundColor: '#fff',
    borderRadius: 4,
    marginVertical: 10,
    width: '100%'
  },

  recipe_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  recipe_title: {
    fontSize: 18,
    textTransform: 'capitalize',
  },

  recipe_img_container: {
    width: '100%',
    height: 200,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },

  recipe_img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  }
});
