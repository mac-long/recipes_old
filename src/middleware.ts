import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
	afterAuth(auth, req, evt) {
		if (!auth.userId && !auth.isPublicRoute) {
			const signInUrl = new URL("/sign-in", req.url);
			signInUrl.searchParams.set("redirect_url", req.url);
			return NextResponse.redirect(signInUrl);
		}
	},
	publicRoutes: ["/", "/recipes"],
});

export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
