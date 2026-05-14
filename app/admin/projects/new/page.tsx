import ProjectForm from '../_components/ProjectForm'

export default function NewProjectPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-heading font-bold text-2xl text-white">Add Project</h1>
        <p className="text-sm text-gray-500 mt-1">Fill in the details for your new portfolio project</p>
      </div>
      <ProjectForm />
    </div>
  )
}
