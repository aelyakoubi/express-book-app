import { auth } from "express-oauth2-jwt-bearer";

const authMiddleware = auth({
  audience: "https://book-store-api",
  issuerBaseURL: `https://dev-qf7qwlhuy05tzufa.us.auth0.com/`,
});

export default authMiddleware;
