const isDev = process.env.NUXT_ENV_BUILD === "development"

export const MENUS = {
  PRODUCT: "product",
  SALES: "sales",
  STATISTICS: "statistics",
  INVENTORY: "inventory",
  SETTING: "setting",
}

export const ROLES = {
  ADMIN: "ADMIN",
  READ: "READ",
  NONE: "NONE",
  WRITE: "WRITE",
}

const PAGES = {
  ROOT: "/",
  ROOT_2: "",
  LOGIN: "/login",
  LANDING: "/landingPage",
  MAIN: "/main",
  MAIN_PRICE: "/main/price",

  REGISTER: "/register",
  REGISTER_INSERT_INFO: "/register/insertInfo",
  REGISTER_COMPLETE: "/complete",
  RECOVERY_PASSWORD: "/recovery/password",
  RECOVERY_PW_TOKEN_REQUESTED: "/recovery/password/requested",
  RECOVERY_PASSWORD_CHANGE: "/recovery/password/change",

  SUB_MEMBER_INITIAL_LOGIN: "/register/subMemberInitialLogin",

  BOARD_NOTICES: "/board/notice",
  BOARD_TIPS: "/board/tip",
  BOARD_FAQS: "/board/faq",
  BOARD_NOTICES_DETAIL: /^\/board\/notice\/((?:[^/]+?))(?:\/(?=$))?$/i,
  BOARD_TIPS_DETAIL: /^\/board\/tip\/((?:[^/]+?))(?:\/(?=$))?$/i,
  BOARD_FAQS_DETAIL: /^\/board\/faq\/((?:[^/]+?))(?:\/(?=$))?$/i,

  STATISTICS: {
    INDEX: "/statistics",
    YESTERDAY: "/statistics/yesterday",
    PRODUCT: "/statistics/product",
    CLAIM: "/statistics/claim",
    SALES: "/statistics/sales",
  },

  INVENTORY: {
    INDEX: "/inventory",
    INVENTORY_RECEIPT: "/inventory/receipt",
    INVENTORY_IN_OUT_MOVE: "/inventory/inOutMove",
  },

  PRODUCT: {
    INDEX: "/product",
    ADD: "/product/add",
    PUSH: "/product/push",
    REGISTER: "/product/register",
    PACKAGE: "/product/package",
    MATCHING: "/product/matching",
  },

  INVOICE: {
    INDEX: "/invoice",
    LIST: "/invoice/list",
    MANUAL: "/invoice/manual",
    CLAIM: "/claim",
  },

  KPI: "/kpi",

  ACCOUNT_INFO: {
    INDEX: "/accountInfo",
    MY_ACCOUNT: "/accountInfo#myAccount",
    TICKET_INFO: "/accountInfo#ticketInfo",
    BRAND_INFO: "/accountInfo#brandInfo",
    MEMBER_INFO: "/accountInfo#memberInfo",
  },

  PAYMENT: {
    INDEX: "/payment",
  },

  SETTING: {
    INDEX: "/setting",

    CHANNEL: {
      INDEX: "/setting/channel",
      ADD: "/setting/channel/add",
    },

    INVENTORY: {
      INDEX: "/setting/inventory",
    },
  },

  TICKET_GUIDE: "/accountInfo/ticketGuide",

  MANUAL_INPUT: "/manualInput",
  CONTACT: "/contact",

  ERROR_403: "/403",
  ERROR_404: "/404",
}

/* 메뉴별 & 권한별 접근 가능 페이지 */
export const PAGES_BY_PERMISSION = {
  [MENUS.PRODUCT]: {
    [ROLES.ADMIN]: [...Object.values(PAGES.PRODUCT)],
    [ROLES.WRITE]: [...Object.values(PAGES.PRODUCT)],
    [ROLES.READ]: [...Object.values(PAGES.PRODUCT)],
    [ROLES.NONE]: [],
  },
  [MENUS.SALES]: {
    [ROLES.ADMIN]: [...Object.values(PAGES.INVOICE)],
    [ROLES.WRITE]: [...Object.values(PAGES.INVOICE)],
    [ROLES.READ]: [...Object.values(PAGES.INVOICE)],
    [ROLES.NONE]: [],
  },
  [MENUS.STATISTICS]: {
    [ROLES.ADMIN]: [...Object.values(PAGES.STATISTICS)],
    [ROLES.WRITE]: [...Object.values(PAGES.STATISTICS)],
    [ROLES.READ]: [...Object.values(PAGES.STATISTICS)],
    [ROLES.NONE]: [],
  },
  [MENUS.INVENTORY]: {
    [ROLES.ADMIN]: [...Object.values(PAGES.INVENTORY)],
    [ROLES.WRITE]: [...Object.values(PAGES.INVENTORY)],
    [ROLES.READ]: [...Object.values(PAGES.INVENTORY)],
    [ROLES.NONE]: [],
  },
  [MENUS.SETTING]: {
    [ROLES.ADMIN]: [...Object.values(PAGES.SETTING.CHANNEL), ...Object.values(PAGES.SETTING.INVENTORY)],
    [ROLES.WRITE]: [],
    [ROLES.READ]: [],
    [ROLES.NONE]: [],
  },
}

/* 로그인 여부나 권한 획득 여부 상관 없이 접근할 수 있는 페이지 */
export const PUBLIC_PAGES = [
  ...(isDev ? [PAGES.LOGIN] : []),
  PAGES.ROOT,
  PAGES.ROOT_2,
  PAGES.REGISTER,
  PAGES.REGISTER_INSERT_INFO,
  PAGES.REGISTER_COMPLETE,
  PAGES.RECOVERY_PASSWORD,
  PAGES.RECOVERY_PW_TOKEN_REQUESTED,
  PAGES.RECOVERY_PASSWORD_CHANGE,
  PAGES.CONTACT,
  PAGES.SUB_MEMBER_INITIAL_LOGIN,
  PAGES.ERROR_403,
  PAGES.ERROR_404,
  PAGES.BOARD_NOTICES,
  PAGES.BOARD_TIPS,
  PAGES.BOARD_FAQS,
  PAGES.BOARD_NOTICES_DETAIL,
  PAGES.BOARD_TIPS_DETAIL,
  PAGES.BOARD_FAQS_DETAIL,
]

/* 로그인이 되어 있지 않을 때만 접근할 수 있는 페이지 */
export const ONLY_PUBLIC_PAGES = [
  ...(!isDev ? [PAGES.LOGIN] : []),
  PAGES.MAIN,
  PAGES.MAIN_PRICE,
  PAGES.REGISTER,
  PAGES.REGISTER_INSERT_INFO,
  PAGES.REGISTER_COMPLETE,
  PAGES.RECOVERY_PASSWORD,
  PAGES.RECOVERY_PASSWORD_CHANGE,
  PAGES.RECOVERY_PW_TOKEN_REQUESTED,
]

/* 로그인이 되어 있을 때만 접근할 수 있지만, 권한에 상관 없이 접근할 수 있는 페이지 */
export const PRIVATE_PAGES = [
  PAGES.LANDING,
  PAGES.CONTACT,
  ...Object.values(PAGES.ACCOUNT_INFO),
  PAGES.PAYMENT.INDEX, // 임시
  "/paymentTest",
  "/wsTest",
]

export default PAGES
