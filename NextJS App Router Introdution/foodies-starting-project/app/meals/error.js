"use client";

export default function Error({ error }) {
  return (
    <main className="error">
      <h1>Error loading meals</h1>
      <p>{error.message}</p>
    </main>
  );
}
