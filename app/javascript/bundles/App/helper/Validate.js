const ErrorMessages = {
  required: "必須項目です。",
  email: "正しいメールアドレスの形式でご入力ください。",
  num: "半角数字(小数不可)で入力して下さい。",
  password: "英字、数字を組み合わせた8文字以上、16文字以内で入力してください。",
  url: "URLの形式が間違っています。 例：https://example.com"
}

const Regex = {
  email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  num: /^[0-9]+$/,
  password: /^(?=.*?[a-zA-Z])(?=.*?\d)[!-\~]{8,16}$/,
  url: /^(https?)(:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+)$/
}

export const required = value => (value ? undefined : "Required")
export const url = value => (value && !Regex.url.test(value)) ? ErrorMessages.url : undefined
export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)