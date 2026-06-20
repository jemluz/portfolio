import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:3000"),
  NEXT_PUBLIC_S3_BUCKET_URL: z
    .string()
    .url()
    .default("https://upload-meindexe.s3.us-east-2.amazonaws.com"),
});

const parsedEnv = envSchema.safeParse({
  NODE_ENV: process.env.NODE_ENV,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  S3_BUCKET_URL: process.env.S3_BUCKET_URL,
});

if (!parsedEnv.success) {
  const errorDetails = parsedEnv.error.flatten().fieldErrors;
  console.error("Invalid environment variables", errorDetails);
  throw new Error("Invalid environment variables");
}

export const env = parsedEnv.data;
