import { varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";
import {serial, integer} from "drizzle-orm/pg-core";


export const user=pgTable('users',{
    id:serial("id").primaryKey(),
    name: varchar("name").notNull(),  
    Email: varchar("email").notNull(),
    imageUrl: varchar("imageUrl").notNull(),
    credits:integer("credits").default(3)
})