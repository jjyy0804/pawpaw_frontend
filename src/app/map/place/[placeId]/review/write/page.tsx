"use client"
import ReviewCreateClient from "./ReviewCreateClient";

export default function ReviewWritePage() {

  return (
    <div className="mt-14 px-4">
      <h1 className="text-lg font-semibold">리뷰 남기기</h1>
      <ReviewCreateClient />
    </div>
  );
}