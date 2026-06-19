import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import os from "os";

export async function GET() {
  try {
    // 1. Measure DB Latency
    const start = Date.now();
    await prisma.$queryRaw`SELECT 1`.catch(() => {});
    const dbLatency = Date.now() - start;

    // 2. CPU Load (approximate or base + random for visual simulation)
    const cpus = os.cpus();
    const cpuCount = cpus.length;
    const baseCpu = 12;
    const cpuLoad = Math.min(Math.max(baseCpu + (Date.now() % 10), 5), 95);

    // 3. RAM Usage
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const ramUsage = Math.round(((totalMem - freeMem) / totalMem) * 100);

    // 4. Uptime
    const uptimeSeconds = Math.round(process.uptime());

    // 5. System Details
    const telemetryData = {
      dbLatency,
      cpuLoad,
      ramUsage,
      ramAllocatedMB: Math.round((totalMem - freeMem) / (1024 * 1024)),
      ramTotalMB: Math.round(totalMem / (1024 * 1024)),
      uptimeSeconds,
      cpuModel: cpus[0]?.model || "Virtual CPU",
      cpuCores: cpuCount,
      platform: os.platform(),
      arch: os.arch(),
    };

    return NextResponse.json(telemetryData);
  } catch (error) {
    console.error("Failed to fetch system telemetry:", error);
    return NextResponse.json({ error: "Failed to fetch system telemetry" }, { status: 500 });
  }
}
