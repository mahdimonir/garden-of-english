import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    // 1. Fetch total leads count
    const totalLeads = await prisma.lead.count();

    // 2. Fetch recent leads (last 5)
    const recentLeads = await prisma.lead.findMany({
      take: 5,
      orderBy: {
        createdAt: "desc",
      },
    });

    // 3. Fetch audit logs (last 5)
    const auditLogs = await prisma.auditLog.findMany({
      take: 5,
      orderBy: {
        createdAt: "desc",
      },
    });

    // 4. Measure database latency
    const start = Date.now();
    await prisma.$queryRaw`SELECT 1`.catch(() => {});
    const dbLatency = Date.now() - start;

    return NextResponse.json({
      totalLeads,
      recentLeads,
      auditLogs,
      dbLatency,
      activePrograms: 3, // Spoken, IELTS, Grammar
    });
  } catch (error) {
    console.error("Failed to fetch dashboard overview:", error);
    return NextResponse.json({ error: "Failed to fetch dashboard overview" }, { status: 500 });
  }
}
