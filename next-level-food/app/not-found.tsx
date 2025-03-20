import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Not Found - NextLevel Food',
  description:
    'Unfortunately we could not found the requested page or resource.',
};

export default function NotFoundPage() {
  return (
    <main className="not-found">
      <h1>Not Found</h1>
      <p>Unfortunately we could not found the requested page or resource.</p>
    </main>
  );
}
