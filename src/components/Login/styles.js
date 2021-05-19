import { StyleSheet } from 'react-native'
import colors from '../../assets/theme/colors'

export default StyleSheet.create({
  logoImage: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 50,
    marginTop: 30,
    alignSelf: "center"
  },
  title: {
    fontSize: 21,
    textAlign: "center",
    paddingTop: 20,
    fontWeight: "500"
  },
  subTitle: {
    fontSize: 12,
    textAlign: "center",
    paddingVertical: 10,
    color: colors.black
  },
  form: {
    // borderWidth: 1,
    // borderColor: colors.grey,
    paddingTop: 20
  },
  createSection: {
    paddingVertical: 10,
    flexDirection: "row",
  },
  linkBtn: {
    paddingLeft: 10,
    color: colors.primary,
  }
})