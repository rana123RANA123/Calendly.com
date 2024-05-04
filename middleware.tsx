import { withAuth } from "next-auth/middleware";
import type { NextRequest } from "next/server";

export default withAuth(function middleware(request: NextRequest) {}, {
  secret: process.env.NEXTAUTH_SECRET,
});

export const config = {
  matcher: ["/", "/profile", "/sidebar", "/availabilityHours", "/analysis"],
};
