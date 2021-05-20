import { StyleSheet } from 'react-native'
import colors from '../../../assets/theme/colors'

export default StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: 1,
    justifyContent: 'center'
  },
  modalView: {
    backgroundColor: colors.white,
    marginHorizontal: 20,
    borderRadius: 4,
    minHeight: 300
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomColor: colors.grey,
    borderBottomWidth: .5
  },
  title: {
    fontSize: 20
  },
  body: {
    minHeight: 300,
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    justifyContent: 'space-evenly',
    borderTopWidth: .5,
    borderTopColor: colors.grey
  },
  termsView: {
    width: 6,
    height: 6,
    borderRadius: 100,
    backgroundColor: colors.grey,
    opacity: 0.3
  }
})