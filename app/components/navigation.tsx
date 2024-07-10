"use client";
import React from "react";

export default function Navigation({ list }: any) {
  return (
    <>
      <div className="navbar flex mb-5 gap-6">
        {list.map((v: any, idx: number) => (
          <a href={v.refId} key={idx}>
            <span className={v.btnClass}>{v.label}</span>
          </a>
        ))}
      </div>
    </>
  );
}
