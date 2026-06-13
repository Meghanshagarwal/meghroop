import { notFound } from 'next/navigation'
import { getSupabase } from '@/lib/supabase'
import JournalForm from '../../_components/JournalForm'

export const dynamic = 'force-dynamic'

export default async function EditJournalPage({ params }: { params: { id: string } }) {
  const db = getSupabase()
  const { data: article, error } = await db
    .from('journal_articles')
    .select('*')
    .eq('id', params.id)
    .single()

  if (error || !article) notFound()

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-heading font-bold text-2xl text-white">Edit Article</h1>
        <p className="text-sm text-gray-500 mt-1 truncate max-w-md">{article.title}</p>
      </div>
      <JournalForm article={article} />
    </div>
  )
}
