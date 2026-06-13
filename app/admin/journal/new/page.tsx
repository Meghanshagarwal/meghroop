import JournalForm from '../_components/JournalForm'

export default function NewJournalPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-heading font-bold text-2xl text-white">New Article</h1>
        <p className="text-sm text-gray-500 mt-1">Write a new engineering journal article</p>
      </div>
      <JournalForm />
    </div>
  )
}
