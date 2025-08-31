import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '@shared/schema';

const sql = neon(import.meta.env.VITE_DATABASE_URL || process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });
