import { withIronSessionApiRoute } from "iron-session/next";

export default withIronSessionApiRoute(
  async function loginRoute(req: any, res: any) {
    req.session.user = {
      id: 230,
      admin: true
    };
    await req.session.save();
    res.send({ ok: true });
  },
  {
    cookieName: "ssr_recipes_cookie",
    password: `${process.env.IRON_SESSION}`,
    cookieOptions: {
      secure: process.env.NODE_ENV === "production"
    }
  }
);
