import { StyleSheet } from 'react-native'
import colors from '../../assets/theme/colors'

export default StyleSheet.create({
  container: {
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: colors.grey,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarIcon: {
    fontSize: 100,
    color: colors.white
  },
  icon: {
    fontSize: 16,
    color: colors.grey
  },
  chooseText: {
    fontSize: 16,
    opacity: 0.7,
    textAlign: 'center',
    paddingVertical: 10,
    fontWeight: '500',
    color: colors.primary
  },

})