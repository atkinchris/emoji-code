const CODE_KEY = 'emoji-code::code'

const saveCode = code => localStorage.setItem(CODE_KEY, code)
const loadCode = () => localStorage.getItem(CODE_KEY)

export { saveCode, loadCode }
