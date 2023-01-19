import Link from 'next/link'

export default function Nav() {
	return (
		<nav>
		  <ul type="sqare">
		     <li>
		       <Link legacyBehavior href="/page1">
			 リンク１
		       </Link>
		      </li>
		      <li>
			<Link legacyBehavior href="/page2">
                         リンク２
                       </Link>
                      </li>
		      <li>  
			<Link legacyBehavior href="/page3">
                         リンク３ （css未完全）
                       </Link>
                      </li>
		       <li>
                        <Link legacyBehavior href="/page4">
                        リンク４
                       </Link>
                      </li>
		       <li>
                        <Link legacyBehavior href="/page5">
                         リンク５
                       </Link>
		      </li>
		      <li>
                        <Link legacyBehavior href="/page6">
                         リンク６
                       </Link>
                      </li>
		   </ul>
		</nav>
	)
}

