import Link from "next/link"


const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link className="text-white" href={'/'}>Next.JS CRUD by Sajith</Link>
      <Link className="bg-white rounded-sm p-2" href={'/addTopic'}>Add Topic</Link>
    </nav>
  )
}

export default Navbar
