const jwt = require('jsonwebtoken')

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJDSElSQVBIUiIsImxvY2F0aW9uQ29kZSI6IjExMDAiLCJncm91cCI6Ik1ZQ0hBTk5FTCIsInN1Ykdyb3VwIjoiUmV0cmlldmVTSU0iLCJpYXQiOjE2OTg3ODU0MTAsImV4cCI6MTY5ODc4NTQxM30.POGvpxVTIpvBCaeIFg_GrGXr_8b-8KDPTtKY14b91yU'
const secure = 'jQQ02TbNvNHb+9tkT85bFWlnmS213qKhcmtNSLvDjw=='

try {
  const a = jwt.verify(token, secure)
  console.log('a: ', a);
} catch (error) {
  console.log('error: ', error);
}
