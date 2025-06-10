
'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-8 max-w-2xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">🛡️ IDGuard</h1>
      <p className="mb-6 text-lg text-gray-600">
        Simulation pédagogique de vérification d’identité sécurisée. Protégez votre accès.
      </p>
      <Link href="/verify">
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
          Commencer la vérification
        </button>
      </Link>
    </main>
  );
}
