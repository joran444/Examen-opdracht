
import Link from 'next/link'

export default function Header() {
    return (
        <div >
            <ul className="flex justify-end" id="main-nav">
                <li className="w-1/4 bg-white shadow rounded text-center flex-1">
                <Link href="/" >
                    <i className="color-blue font-bold underline"></i>Home</Link>
                </li>
                <li className="w-1/4 bg-white shadow rounded text-center flex-1">
                <Link href="/blogs"><i className="fas fa-info-circle"></i>Blogs</Link>
                </li>
                <li className="w-1/4 bg-white shadow rounded text-center flex-1">
                <Link href="" ><i className="fas fa-image"></i>over ons</Link>
                </li>
                <li className="w-1/4 bg-white shadow rounded text-center flex-1">
                <Link href="" ><i className="fas fa-envelope"></i>Contact</Link>
                </li>
            </ul>
        </div>
        )
  }