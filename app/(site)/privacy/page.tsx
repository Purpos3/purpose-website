export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-[var(--primary-text)] mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-lg text-[var(--secondary-text)]">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p className="mt-4 text-sm text-[var(--secondary-text)]">
            Content coming soon
          </p>
        </div>
      </div>
    </div>
  )
}
