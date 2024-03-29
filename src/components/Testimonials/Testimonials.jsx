import React from 'react'
import styles from './Testimonials.module.css'

function Testimonials() {
  return (
    <div className={styles.testi_con}>
        <p className={styles.testi_title}>Testimonials</p>
        <div className={styles.testi_list}>
            <div className={styles.testi_items}>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.
                </p>
                <img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww" alt="" />
                <h4>John Doe</h4>
                <p className={styles.bio}>Web Developer</p>
            </div>
            <div className={styles.testi_items}>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.
                </p>
                <img src="https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <h4>Jane Doe</h4>
                <p className={styles.bio}>Web Developer</p>
            </div>
            <div className={styles.testi_items}>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.
                </p>
                <img src="https://images.unsplash.com/photo-1577880216142-8549e9488dad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <h4>Joe Doe</h4>
                <p className={styles.bio}>Web Developer</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
