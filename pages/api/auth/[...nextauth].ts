import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
  providers: [
    process.env.VERCEL_ENV === "preview"
      ? CredentialsProvider({
          name: "Credentials",
          credentials: {
            username: {
              label: "Username",
              type: "text",
              placeholder: "changyeol seo",
            },
            password: { label: "Password", type: "password" },
          },
          async authorize() {
            return {
              id: 1,
              name: "changyeol seo",
              email: "kongbaguni@gmail.com",
              image: "https://i.pravatar.cc/150",
            }
          },
        })
      : GoogleProvider({
          clientId: process.env.GOOGLE_ID,
          clientSecret: process.env.GOOGLE_SECRET,
        }),
  ],
})