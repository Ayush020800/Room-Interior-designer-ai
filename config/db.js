import { drizzle } from 'drizzle-orm/neon-http';
// import * as env from 'dotenv';

const db = drizzle(process.env.NEXT_PUBLIC_DATABASE_URL);