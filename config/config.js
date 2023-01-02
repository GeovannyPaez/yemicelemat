require('dotenv').config();


const config={
  env: process.env.NODE_ENV || 'development',
  isProd:process.env.NODE_ENV ==='production',
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost:process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  apiKey:process.env.API_KEY,
  jwtSecret: process.env.JWT_SECRET,
  gEmail:process.env.EMAIL_GOOGLE,
  gPassword:process.env.PASSWORD_GOOGLE,
  authTokenTwilio:process.env.AUTH_TOKEN,
  AccountSID:process.env.ACCOUNT_SID,
  dominioFronEnd:process.env.DOMINIO_FRONTEND,
  dbUrl:process.env.DATABASE_URL
}
module.exports= config;
