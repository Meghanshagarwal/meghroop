import { notFound } from 'next/navigation'
import { getSupabase } from '@/lib/supabase'
import ProjectForm from '../../_components/ProjectForm'

export default async function EditProjectPage({ params }: { params: { id: string } }) {
  const db = getSupabase()
  const { data: project, error } = await db.from('projects').select('*').eq('id', params.id).single()

  if (error || !project) notFound()

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-heading font-bold text-2xl text-white">Edit Project</h1>
        <p className="text-sm text-gray-500 mt-1 truncate max-w-md">{project.title}</p>
      </div>
      <ProjectForm project={project} />
    </div>
  )
}
