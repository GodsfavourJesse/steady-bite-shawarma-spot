import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const reference = searchParams.get("reference");

    if (!reference) {
        return NextResponse.json({ error: "Missing reference" }, { status: 400 });
    }

    try {
        const secretKey = process.env.OPAY_SECRET_KEY;

        const res = await fetch(`https://sandbox.opaycheckout.com/api/v1/transactions/${reference}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${secretKey}`,
                "Content-Type": "application/json",
            },
        });

        const data = await res.json();

        if (!res.ok) {
            return NextResponse.json({ error: data }, { status: res.status });
        }

        return NextResponse.json(data);
    } catch (error: any) {
        console.error("Verification Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
