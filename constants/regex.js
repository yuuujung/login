const regex = {
  NUM: /^[0-9-]*$/,
  ENG_NUM: /^[A-Za-z0-9]*$/,
  ENG_NUM_SPECIAL: /^[A-Za-z0-9~`!@#$%^&*()_+=[\]{}|;':",./<>?]*$/,
  EMAIL: /^[A-Za-z0-9@_.]*$/,
  KOR_ENG: /^[ㄱ-힣A-Za-z]*$/,
  KOR_ENG_NUM: /^[ㄱ-힣A-Za-z0-9 ]*$/, // 띄어쓰기 포함
  KOR_ENG_NUM_SPECIAL: /^[ㄱ-힣A-Za-z0-9~`!@#$%^&*()_+=[\]{}|;':",./<>? ]*$/,
  INTEGER: /^\d+$/,
  FLOAT: /^\d*\.?\d*$/,
  KOR: /^[ㄱ-힣]*$/,

  /* 처음이나 끝에 공백 문자가 오는 경우 */
  START_OR_END_WITH_SPACE: /^[^\s]+(\s+[^\s]+)*$/,

  /* 두 개 이상의 공백이 연속으로 나오는 경우 */
  CONSECUTIVE_SPACES: /^((?!\s{2}).)*$/,

  /* 전화번호: 지역번호가 2자리이거나 3자리 */
  PHONE_NUMBER: /^\d{2,3}-\d{3,4}-\d{4}$/,
  AS_PHONE_NUMBER: /^\d{4}-\d{4}$/,
}

export default regex
