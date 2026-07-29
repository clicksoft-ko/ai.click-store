import { NextResponse } from "next/server";

// 빌드 시 정적으로 캐시되지 않도록 강제 (probe가 항상 실행 시점 상태를 확인)
export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
}
