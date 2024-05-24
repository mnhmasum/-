import React from 'react';
import '../Styles/Home.css';

function App() {
   return (
      <div className="App">
         <header className="App-header">
            <h1>Nazmul Hasan Masum</h1>
            <p>Sr. Software Engineer | Android | Kotlin | Java | Web</p>

         </header>
         <section>
            <p>Email: <a href="mailto:mnhmasum@gmail.com">mnhmasum@gmail.com</a></p>
            <div className="horizontal-point">
               <p><a href="https://www.linkedin.com/in/nazmul-hasan-masum">LinkedIn</a></p>
               <p><a href="https://github.com/mnhmasum">GitHub</a></p>
               <p><a href="https://stackoverflow.com/users/4384513/masum">StackOverflow</a></p>
               <p><a href="https://medium.com/@mnhmasum">Medium</a></p>
               <p><a href="https://leetcode.com/u/mnhmasum/">LeetCode</a></p>
            </div>
         </section>
         <section>
            <h2>Top Skills</h2>
            <div className='horizontal-point'>
               <div>• Kotlin</div>
               <div>• Java</div>
               <div>• Android</div>
               <div>• Python</div>
               <div>• React Js</div>
               <div>• PHP</div>
               <div>• Codeignighter</div>
               <div>• Mobile Application Development</div>
               <div>• Web Application Development</div>
            </div>
         </section>
         <section>
            <h2>Languages</h2>
            <ul>
               <li>English</li>
               <li>Bengali</li>
            </ul>
         </section>
         <section>
            <h2>Certifications</h2>
            <ul>
               <li>Oracle Certified Java Professional SE6</li>
               <li>Python 3 Programming</li>
               <li>Kotlin for Java Developers</li>
               <li>Introduction to CSS3</li>
               <li>Python Classes and Inheritance</li>
               <li>Python Classes and Inheritance</li>
               <li>Python Classes and Inheritance</li>
               <li>Python Classes and Inheritance</li>
            </ul>
         </section>
         <section>
            <h2>Summary</h2>
            <p>
               As a Senior Software Engineer at Adaptive Enterprise Ltd., I specialize in developing a wide range of applications,
               including smartphone apps, IoT solutions, web applications, and desktop software. My passion lies in working with
               diverse technologies and languages such as Java, Kotlin, ReactJs, Dart, Python, and PHP. I possess a strong
               understanding of application development, architectural patterns, design patterns, and design principles.
            </p>
         </section>
         <section>
            <h2>Expertise</h2>
            <h3>Programming & Tools:</h3>
            <p>Languages: Java (Android), Kotlin, Dart, Python, PHP, JavaScript</p>
            <p>Frameworks & Libraries: Dagger2, Hilt, RxJava, ReactJs, React Native, Flutter</p>
            <p>Web Development: PHP Frameworks (CakePHP, CodeIgniter, Laravel), CSS Framework (Bootstrap), JS Framework (jQuery, ReactJs)</p>
            <p>Databases: MySQL, SQLite, Oracle</p>
            <p>Operating Systems: macOS, Ubuntu, Windows</p>
            <p>Version Control: GitHub, SVN, BitBucket</p>
            <p>Others: WebSocket, SignalR, Google Firebase, Firestore, Redux, Saga, MVP, MVVM, Bloc, Google GeoFence, Kotlin DSL</p>
         </section>
         <section>
            <h2>Experience</h2>
            <div className='company-title'>Adaptive Enterprise Limited</div>
            <div className='duration'>Senior Software Engineer, May 2018 - Present (6 years 1 month)</div>
            <ul>
               <li>IoT Integration: Developed smart thermostat and lock solutions using Z-Wave and BLE</li>
               <li>Geofencing: Implemented location-based services to enhance application functionalities</li>
               <li>Network Communication: Ensured reliable and secure communication using TCP/IP protocols</li>
               <li>Android Development: Led projects using MVP and MVVM for clean architecture</li>
               <li>Reactive Programming: Utilized RxJava for managing asynchronous data and events</li>
               <li>Java to Kotlin Migration: Converted complex app from Java to Kotlin, improving performance</li>
               <li>Project Leadership: Led projects from concept to deployment, coordinating cross-functional teams</li>
               <li>Code Reviews and Mentorship: Conducted code reviews and mentored junior developers</li>
            </ul>
            <h3>Augmedix</h3>
            <p>Senior Software Engineer, April 2017 - April 2018 (1 year 1 month)</p>
            <ul>
               <li>Developed applications for Google Glass and Android smartphones</li>
               <li>Contributed key features to the main application</li>
               <li>Implemented POC in a Google Glass alternative device</li>
               <li>Conducted research on emerging smart glasses technologies</li>
               <li>Developed GUI based application to reduce ADB command line dependencies</li>
               <li>Engaged in extensive memory optimization efforts in the main application</li>
            </ul>
            <h3>ChefOnline</h3>
            <p>Android Developer, March 2015 - January 2017 (1 year 11 months)</p>
            <ul>
               <li>Developed FOOD online order app with Android MVP pattern, SignalR, Firebase push notification, and payment gateway</li>
               <li>Implemented auto order system for Android POS device, ensuring efficient order management and delivery</li>
               <li>Integrated SignalR for real-time communication, enhancing user experience and order processing</li>
               <li>Utilized Firebase push notification for timely updates</li>
               <li>Integrated third-party payment gateway for secure and convenient payments</li>
               <li>Designed custom components for intuitive UI</li>
            </ul>
            <h3>Atomix System Ltd.</h3>
            <p>Mobile Application Developer, March 2014 - March 2015 (1 year 1 month)</p>
            <ul>
               <li>Developed and maintained native Android apps for phones and tablets</li>
               <li>Integrated third-party libraries, APIs, and Google Maps</li>
               <li>Employed background tasks and services for optimization</li>
               <li>Collaborated with teams, conducted code reviews, and provided feedback</li>
            </ul>
            <h3>VU Mobile Ltd (ZED Group)</h3>
            <p>Software Engineer, December 2012 - March 2014 (1 year 4 months)</p>
            <ul>
               <li>Developed streaming app with content download for offline viewing</li>
               <li>Integrated VAS services for personalized recommendations, in-app purchases, and subscriptions</li>
               <li>Collaborated with content providers for high-quality streaming content</li>
               <li>Utilized analytics and user feedback to improve app performance</li>
            </ul>
         </section>
         <section>
            <h2>Education</h2>
            <p>Bangladesh University, Bachelor of Science (BSc), Computer Science and Engineering (2011 - 2014)</p>
            <p>Dhaka Polytechnic Institute, Diploma Engineering, Computer Science (2006 - 2010)</p>
            <p>Shamsul Haque Khan School and College, S.S.C, High School/Secondary Certificate Programs (1994 - 2006)</p>
         </section>
      </div>
   );
}

export default App;
