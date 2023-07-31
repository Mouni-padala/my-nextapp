import Link from "next/link";
const HomePage=()=>{
  return(
    <div><h1>Home Page</h1>
    <button className="btn">Button</button>
<button className="btn btn-neutral">Neutral</button>
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-accent">Accent</button>
<button className="btn btn-ghost">Ghost</button>
<button className="btn btn-link">Link</button>
    <ul>
    <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/about/contact">Contact Us</Link></li>
    </ul>
    </div>
  );
}
export default HomePage;