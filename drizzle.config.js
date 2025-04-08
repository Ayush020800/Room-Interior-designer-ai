import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_vMjAdzf1PZ3u@ep-misty-shadow-a5qqwace-pooler.us-east-2.aws.neon.tech/AI%20-ROOM-DESIDN?sslmode=require',
  },
});
