import { cookies } from "next/headers";

export async function setAccessToken(accessToken: string) {
  const cookieStore = cookies();
  cookieStore.set("access_token", accessToken, {
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
    httpOnly: true,
    sameSite: "strict",
  });
}
