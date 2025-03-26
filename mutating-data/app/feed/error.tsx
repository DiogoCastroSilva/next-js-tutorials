'use client';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Error displaying our Posts',
  description: 'Somethign went wrong displaying our cummunity posts!',
};

export default function FeedError() {
  return (
    <>
      <h2>An error occurred!</h2>
      <p>Unfortunately, something went wrong. We&apos;re working on it!</p>
    </>
  );
}
