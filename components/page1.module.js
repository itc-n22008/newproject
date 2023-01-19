import styles from 'styles/page1.module.css'

export default function PAGE1() {
	return (
	<div>
	<div className={styles.header}>
    	<h1>W我們去打疫苗吧
Wǒmen qù dǎ yìmiáo baarning!You got a virus</h1>
	</div>
	
    	<div className={styles.main}>
	<h2>Heading</h2>
    		<p>
		भवतः वायरसः अभवत्अतीव भयङ्करं भवति
    	</p>
    	<h2>Heading 2</h2>
    		<p>
        	Content comes here. Content comes here. Content comes here.
        	 Content comes here. Content comes here. Content comes here.
    		</p>
	</div>
	<div className={styles.footer}>
    		<p>Copyright (c) 2013 xxxxxxxx. All rights reserved.</p>
	</div>
	</div>
	)
}
