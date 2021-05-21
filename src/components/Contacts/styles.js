import { StyleSheet } from 'react-native'
import colors from '../../assets/theme/colors'

export default StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemSeparator: {
    height: 0.5,
    backgroundColor: colors.grey
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 100,
    backgroundColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatarText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '500'
  },
  info: {
    paddingLeft: 14
  },
  name: {
    fontSize: 17
  },
  phone: {
    opacity: .6,
    paddingVertical: 5
  },
  icon: {
    marginLeft: 'auto',
    // color: colors.grey
  },
  floatingActionButton: {
    backgroundColor: colors.primary,
    width: 55,
    height: 55,
    position: 'absolute',
    bottom: 45,
    right: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionIcon: {
    color: colors.white,
    fontSize: 20
  }

})