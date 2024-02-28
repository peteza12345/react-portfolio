import React from 'react'
import styles from './Portfolio.module.css'
import Tilt from 'react-parallax-tilt'

function Portfolio() {
  return (
    <div className={styles.portfolio_con}>
        <h3 className={styles.port_title}>Portfolio</h3>
        <div className={styles.port_list}>
            <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                   <img src="https://plus.unsplash.com/premium_photo-1678565202049-9e37b2da8060?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </Tilt>
                <p>Project title</p>
            </div>
            <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                   <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
                </Tilt>
                <p>Project title</p>
            </div>
            <div className={styles.port_items}>
               <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                   <img src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
                </Tilt>
                <p>Project title</p>
            </div>
            <div className={styles.port_items}>
               <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                   <img src="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww" alt="" />
                </Tilt>
                <p>Project title</p>
            </div>
            <div className={styles.port_items}>
               <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                   <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
                </Tilt>
                <p>Project title</p>
            </div>
            <div className={styles.port_items}>
               <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                  <img src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww" alt="" />
                </Tilt>
                <p>Project title</p>
            </div>
        </div>
    </div>
  )
}

export default Portfolio
