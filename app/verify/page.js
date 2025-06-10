
'use client';
import { useState } from 'react';
import { generateCode } from '@/lib/generateCode';

export default function VerifyPage() {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [enteredCode, setEnteredCode] = useState('');
  const [status, setStatus] = useState('');
  const [codeSentAt, setCodeSentAt] = useState(null);

  const handleSendCode = () => {
    if (!name) return alert("Veuillez entrer votre nom");
    const generated = generateCode();
    setCode(generated);
    setCodeSentAt(Date.now());
    setStatus("📨 Code envoyé (simulé) : " + generated);
  };

  const handleValidate = () => {
    const now = Date.now();
    if (now - codeSentAt > 180000) {
      setStatus("❌ Code expiré. Relancez une vérification.");
    } else if (enteredCode === code) {
      setStatus("✅ Identité validée avec succès !");
    } else {
      setStatus("⚠️ Échec : Code incorrect. Usurpation suspectée.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 space-y-4">
      <h2 className="text-2xl font-bold">Vérification d’identité</h2>
      <p className="text-gray-600 text-sm">🧠 L’usurpation d’identité est un délit puni par la loi. Cette simulation montre comment un accès sécurisé fonctionne.</p>

      <input
        type="text"
        placeholder="Votre nom complet"
        className="border p-2 w-full rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button
        onClick={handleSendCode}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        Générer un code sécurisé
      </button>

      {code && (
        <>
          <input
            type="text"
            placeholder="Entrez le code reçu"
            className="border p-2 w-full rounded"
            value={enteredCode}
            onChange={(e) => setEnteredCode(e.target.value)}
          />
          <button
            onClick={handleValidate}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Valider l'identité
          </button>
        </>
      )}

      {status && <p className="mt-4 font-semibold">{status}</p>}
    </div>
  );
}
