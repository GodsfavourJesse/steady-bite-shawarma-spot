import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        console.log("🟢 Incoming payment request:", body);

        const secretKey = process.env.NEXT_PUBLIC_OPAY_SECRET_KEY;
        console.log("🔑 Secret key loaded:", !!secretKey);

        const response = await fetch("https://testapi.opaycheckout.com/api/v1/payment/initialize", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${secretKey}`,
            },
            body: JSON.stringify({
                amount: body.amount,
                currency: "NGN",
                country: "NG",
                reference: body.reference,
                description: body.description,
                returnUrl: body.callbackUrl,
                cancelUrl: body.cancelUrl,
                customer: {
                name: body.customer.name,
                email: body.customer.email,
                phoneNumber: body.customer.phoneNumber,
                },
            }),
        });

        const data = await response.json();
        console.log("✅ Payment API response:", data);

        return NextResponse.json(data);
    } catch (error: any) {
        console.error("❌ Payment initialization error:", error);
        return NextResponse.json(
            { error: "Payment initialization failed", details: error },
            { status: 500 }
        );
    }
}
