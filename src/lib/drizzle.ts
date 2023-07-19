import {integer, pgTable,serial,varchar, } from 'drizzle-orm/pg-core'
import { InferModel } from 'drizzle-orm'
import { sql } from '@vercel/postgres'
import { drizzle } from 'drizzle-orm/vercel-postgres'


export const cartTable=pgTable('cart2',{
    id:serial('id').primaryKey(),
    user_id:varchar('user_id',{length:255}).notNull(),
    product_id:varchar('product_id',{length:255}).notNull(),
    quantity:integer('quantity').notNull(),
})

export type Addcart = InferModel<typeof cartTable>; // return type when queried
export type NewCart = InferModel<typeof cartTable, 'insert'>; // insert type



export const db=drizzle(sql)