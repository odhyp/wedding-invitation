import prismadb from "@/app/lib/prismadb";
import { NextResponse } from "next/server";

function addCorsHeaders(response: NextResponse) {
  response.headers.set("Access-Control-Allow-Origin", "*"); // Allow requests from any origin
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); // Allow these methods
  response.headers.set("Access-Control-Allow-Headers", "Content-Type"); // Allow these headers
  return response;
}

export async function OPTIONS() {
  // Handle preflight request
  return addCorsHeaders(new NextResponse(null, { status: 204 }));
}

export async function POST(req: Request) {
  try {
    if (req.method === "OPTIONS") {
      // Handle preflight request
      return addCorsHeaders(new NextResponse(null, { status: 204 }));
    }

    const body = await req.json();
    const { name, wishes, attendance } = body;

    if (!name || !wishes) {
      return addCorsHeaders(
        new NextResponse("Missing required fields", { status: 400 })
      );
    }

    await prismadb.wishes.create({
      data: {
        name,
        wishes,
        attendance,
      },
    });

    return addCorsHeaders(new NextResponse("Wishes created", { status: 201 }));
  } catch (error) {
    console.error("[POST_API_ERROR]", error);
    return addCorsHeaders(
      new NextResponse("Internal Server Error", { status: 500 })
    );
  }
}

export async function GET() {
  try {
    const response = await prismadb.wishes.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    console.log("Fetched wishes:", response);
    return addCorsHeaders(NextResponse.json(response));
  } catch (error) {
    console.error("[GET_API_ERROR]", error);
    return addCorsHeaders(
      new NextResponse("Internal Server Error", { status: 500 })
    );
  }
}
