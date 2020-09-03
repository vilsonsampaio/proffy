export default {
  secret: 'proffy',
  expiresIn: (rememberMe: boolean) => rememberMe ? '7d' : '1d',
}