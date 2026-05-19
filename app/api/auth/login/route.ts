import { NextResponse } from "next/server";
import { AUTH_COOKIE_MAX_AGE, AUTH_COOKIE_NAME, DEMO_CREDENTIALS } from "@/lib/auth";

type LoginPayload = {
  email?: string;
  password?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as LoginPayload;
  const email = payload.email?.trim().toLowerCase() ?? "";
  const password = payload.password ?? "";

  const isValidUser =
    email === DEMO_CREDENTIALS.email.toLowerCase() &&
    password === DEMO_CREDENTIALS.password;

  if (!isValidUser) {
    return NextResponse.json(
      { message: "E-posta veya sifre hatali." },
      { status: 401 },
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: AUTH_COOKIE_NAME,
    value: "demo-session",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: AUTH_COOKIE_MAX_AGE,
  });

  return response;
}
