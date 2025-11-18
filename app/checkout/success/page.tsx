"use client";

import { Suspense } from "react";
import SuccessPageInner from "./SuccessPageInner";

export default function SuccessPageWrapper() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SuccessPageInner />
        </Suspense>
    );
}
