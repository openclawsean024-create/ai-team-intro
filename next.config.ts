import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Vercel - outputs to /out
  output: "export",
  images: { unoptimized: true },
  // Distinguish from workspace root
  outputFileTracingRoot: "/home/sean/.openclaw/workspace/workspaces/sophia/repos/ai-team-intro",
};

export default nextConfig;
