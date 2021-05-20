import { StyleSheet } from 'react-native'
import colors from '../../assets/theme/colors'

export default StyleSheet.create({
  logoImage: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 30,
    marginVertical: 30,
    alignSelf: 'center'
  },
  menuItems: {
    // borderWidth: 1,
    // borderColor: colors.grey,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10
  },
  itemText: {
    fontSize: 16,
    paddingLeft: 12
  }
})