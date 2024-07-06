"use client";
import React, { useState, useEffect } from "react";

export default function Home() {
  return (
    <div className="pre">
      <main className="flex flex-col justify-between">
        <p className="nes-balloon from-left nes-pointer w-[30rem]">
          Are you looking for warior software engineer or web developer ? <a href="/cover-letter">Yes</a> /{" "}
          <a href="#">No</a>
        </p>
        <i className="nes-octocat animate from-left"></i>
      </main>
    </div>
  );
}
