import jwt from "jsonwebtoken";

export const generateAuthToken = (_id) => {
    return jwt.sign({ _id },"testingforauthentication", { expiresIn: '5d' })
}