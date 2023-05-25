import { ROLES, PAGES_BY_PERMISSION } from "~/constants/pages"
import CODE from "~/constants/code"
import _ from "lodash"

export default {
  isSuspendedByPaymentStatus(state) {
    const { paymentStatus } = state.currentUser

    return paymentStatus === "SUSPENDED"
  },

  /* 현재 로그인한 유저가 보유한 모든 브랜드 중 현재 선택된 브랜드의 권한 */
  permissionOfCurrentBrand(state) {
    const { permissions } = state.currentUser
    const { currentBrand } = state

    return _.find(permissions, [CODE.BRAND_NM, currentBrand])?.permission ?? []
  },

  /* 현재 로그인한 유저가 보유한 모든 브랜드 중 현재 선택된 브랜드에서 접근할 수 있는 페이지 리스트 */
  pageAccessibilityOfCurrentPermission(state, getters) {
    const { permissionOfCurrentBrand } = getters

    const accessiblePages = []

    for (const menuName in permissionOfCurrentBrand) {
      const permissionOfMenu = permissionOfCurrentBrand[menuName]

      accessiblePages.push(...PAGES_BY_PERMISSION[menuName][permissionOfMenu])
    }

    return accessiblePages
  },

  availabilityOfBrand(state) {
    const { permissions } = state.currentUser

    return permissions.map((item) => {
      return {
        brandName: item.brand_nm,
        isDisabled: Object.values(item.permission).every((permission) => permission === "NONE"),
      }
    })
  },
}
