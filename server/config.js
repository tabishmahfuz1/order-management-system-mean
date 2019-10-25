module.exports = {
  development: {
    port: process.env.PORT || 3000,
    secret: 'ABC123'
  },
  test: {
    port: process.env.PORT || 3000,
    secret: process.env.SECRET || 'ABC123'
  },
  office_pc: {
    port: process.env.PORT || 3000,
    secret: process.env.SECRET || 'ABC123'
  },
  home_acer_black: {
    port: process.env.PORT || 3000,
    secret: 'ABC123'
  }
}