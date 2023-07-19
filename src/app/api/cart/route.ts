import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from "next/server";
import { cartTable, db } from '@/lib/drizzle';
import {v4 as uuid} from "uuid"
import { cookies } from 'next/dist/client/components/headers';
import { eq } from 'drizzle-orm';

export async function GET(request: NextRequest) {

  const req=request.nextUrl;
  const uid=req.searchParams.get('user_id') as string
  try {

    // await sql`CREATE IF NOT EXISTS TABLE cart2 ( 
    //   id SERIAL PRIMARY KEY, 
    //   user_id varchar(255) NOT NULL,
    //   product_id varchar(255) NOT NULL,
    //    quantity int NOT NULL )`
    
    const res=await db.select().from(cartTable).where(eq(cartTable.user_id,uid))
    return NextResponse.json({res})
  } catch (error:any) {
    return NextResponse.json({ error: error.message }, {
        status: 500,
      });
  }
  }


export async function POST(request:NextRequest){
  const req=await request.json()
  const uid=uuid()
  const setCookies=cookies()
  const userIdCheck=setCookies.get("user_id")
  if(!userIdCheck){
    setCookies.set("user_id",uid)
  }

  try {
    
      const res=await db.insert(cartTable).values({
        user_id:setCookies.get("user_id")?.value as string,
        quantity:1,
        product_id:req.product_id

      }).returning();
      return NextResponse.json({res})   

  } catch (error:any) {
    return NextResponse.json({error:error.message})
    
  }

}