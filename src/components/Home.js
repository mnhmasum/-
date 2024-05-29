import React from 'react';
import '../Styles/Home.css';


function App() {
   return (
      <div className="App">
         <header className="App-header">
            <p>Nazmul Hasan <span>Masum</span></p>
            <div>Senior Software Engineer</div>

         </header>
         <section>
            <div><a href="mailto:mnhmasum@gmail.com"><li className="right-space fa fa-envelope"></li>mnhmasum@gmail.com</a></div>
            <div><a href="https://wa.me/+8801911291186"><li className="right-space fa fa-phone"></li>+8801911291186</a></div>

            <div className="horizontal-point">
               <p><a href="https://www.linkedin.com/in/nazmul-hasan-masum"><i className="fab fa-linkedin"></i></a></p>
               <p><a href="https://github.com/mnhmasum"><i className="fab fa-github"></i></a></p>
               <p><a href="https://stackoverflow.com/users/4384513/masum"><i className="fab fa-stack-overflow"></i></a></p>
               <p><a href="https://medium.com/@mnhmasum"><i className="fab fa-medium"></i></a></p>
               <p>
                  <a href="https://leetcode.com/u/mnhmasum/">
                     <img width="20" height="20" src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" className="custom-icon" />
                  </a>
               </p>

            </div>
         </section>
         <section>
            <div className="headline-medium">Summary</div>
            <p>
               As a Senior Software Engineer at Adaptive Enterprise Ltd. I specialize in developing a wide range of applications,
               including smartphone apps, IoT solutions, web applications, and desktop software. My passion lies in working with
               diverse technologies and languages such as Java, Kotlin, ReactJs, Dart, Python, and PHP. I possess a strong
               understanding of application development, architectural patterns, design patterns, and design principles.
            </p>
         </section>

         <section>
            <p className='company-title'>Expertise</p>
            <div className="headline-medium">Programming & Tools:</div>
            <p>
               <li>Languages: Java (Android), Kotlin, Dart, Python, PHP, JavaScript</li>
               <li>Frameworks & Libraries: Dagger2, Hilt, RxJava, ReactJs, React Native, Flutter</li>
               <li>Web Development: PHP Frameworks (CakePHP, CodeIgniter, Laravel), CSS Framework (Bootstrap), JS Framework (jQuery, ReactJs)</li>
               <li>Databases: MySQL, SQLite, Oracle</li>
               <li>Operating Systems: macOS, Ubuntu, Windows</li>
               <li>Version Control: GitHub, SVN, BitBucket</li>
               <li>Others: WebSocket, SignalR, Google Firebase, Firestore, Redux, Saga, MVP, MVVM, Bloc, Google GeoFence, Kotlin DSL</li>
               <li>Protocol: GATT (for Bluetooth Low Energy), TCP/IP, ZWave</li>
            </p>
         </section>

         <section>
            <div className="headline-medium">Certifications</div>
            <p>
               <li>Oracle Certified Java Professional JSE6</li>
               <li>Python 3 Programming</li>
               <li>Kotlin for Java Developers</li>
               <li>Engineering Maintainable Android Apps</li>
               <li>Introduction to CSS3</li>
               <li>Version Control</li>
               <li>Math for Data Science</li>
            </p>
         </section>

         <section>
            <div className="headline-medium">Projects</div>
            <p>
               <div><b>Gemini Commercial Security</b></div>
               <div>It&apos;s a complete home automation system based on Zwave, Blutooth Low energy, TCP/IP protocol. Integrated Access Control Systems from 8 to 255 zones/points. The App is supported on phones/smart devices for universality.</div>
               <div>Website: <a href="https://t.ly/gFWy8">App Download Link</a></div>
            </p>

            <p>
               <div><b>Citywide iLock</b></div>
               <div>iLock application is used to control AlarmLock Bluetooth enabled Locks. This iLock app can be use in place of a proximity credential.</div>
               <div>Website: <a href="https://play.google.com/store/apps/details?id=com.napcosecurity.ilockcitylink">App Download Link</a></div>
            </p>

            <p>
               <div><b>iSecure Alarm Security</b></div>
               <div>iSecure Smart Consumer App provides Security and Connected Home Control + Notification Alerts for multiple consumers within a protected premises/household.</div>
               <div>Website: <a href="https://play.google.com/store/apps/details?id=com.napcosecurity.iBridge2.isecure">App Download Link</a></div>
            </p>

            <p>
               <div><b>ChefOnline - Online Takeaways</b></div>
               <div>The perfect online food ordering app, designed to bring your favourite takeaway straight to you in just three simple step</div>
               <div>Website: <a href="https://play.google.com/store/apps/details?id=com.chefonline.chefonline">App Download Link</a></div>
            </p>

            <p>
               <div><b>English to Bangla Dictionary</b></div>
               <div>English to Bangla/বাংলা Offline (no internet connection required) Dictionary is a very fast and light weight dictionary application. User can easily find Bangla/Bengali/বাংলা meaning/অর্থ from english word.</div>
               <div>Website: <a href="https://play.google.com/store/apps/details?id=com.artifactslab.dictionary">App Download Link</a></div>
            </p>
            <p>
               <div><b>ChefOnline Partner</b></div>
               <div>The ChefOnline Partner app is the answer to everything you need for your restaurant management. We have a variety of services for restaurant owners throughout the UK to promote the craft of great eating. Join our platform and be among the top restaurant businesses with diverse cuisine types from all across the country.</div>
               <div>Website: <a href="https://play.google.com/store/apps/details?id=com.lechef.SRSITAPP">App Download Link</a></div>
            </p>

         </section>

         <section>
            <p className="headline-medium">Experience</p>
            <div className='company-title'>Adaptive Enterprise Limited</div>
            <div className='duration'>Senior Software Engineer, May 2018 - Present (6 years 1 month)</div>
            <ul>
               <li>• IoT Integration: Developed smart thermostat and lock solutions using Z-Wave and BLE</li>
               <li>• Geofencing: Implemented location-based services to enhance application functionalities</li>
               <li>• Network Communication: Ensured reliable and secure communication using TCP/IP protocols</li>
               <li>• Android Development: Led projects using MVP and MVVM for clean architecture</li>
               <li>• Reactive Programming: Utilized RxJava for managing asynchronous data and events</li>
               <li>• Java to Kotlin Migration: Converted complex app from Java to Kotlin, improving performance</li>
               <li>• Project Leadership: Led projects from concept to deployment, coordinating cross-functional teams</li>
               <li>• Code Reviews and Mentorship: Conducted code reviews and mentored junior developers</li>
            </ul>
            <div className='company-title'>Augmedix</div>
            <div className='duration'>Senior Software Engineer, April 2017 - April 2018 (1 year 1 month)</div>
            <ul>
               <li>• Developed applications for Google Glass and Android smartphones</li>
               <li>• Contributed key features to the main application</li>
               <li>• Implemented POC in a Google Glass alternative device</li>
               <li>• Conducted research on emerging smart glasses technologies</li>
               <li>• Developed GUI based application to reduce ADB command line dependencies</li>
               <li>• Engaged in extensive memory optimization efforts in the main application</li>
            </ul>
            <div className='company-title'>ChefOnline</div>
            <div className='duration'>Android Developer, March 2015 - January 2017 (1 year 11 months)</div>
            <ul>
               <li>• Developed FOOD online order app with Android MVP pattern, SignalR, Firebase push notification, and payment gateway</li>
               <li>• Implemented auto order system for Android POS device, ensuring efficient order management and delivery</li>
               <li>• Integrated SignalR for real-time communication, enhancing user experience and order processing</li>
               <li>• Utilized Firebase push notification for timely updates</li>
               <li>• Integrated third-party payment gateway for secure and convenient payments</li>
               <li>• Designed custom components for intuitive UI</li>
            </ul>
            <div className='company-title'>Atomix System Ltd.</div>
            <div className='duration'>Mobile Application Developer, March 2014 - March 2015 (1 year 1 month)</div>
            <ul>
               <li>• Developed and maintained native Android apps for phones and tablets</li>
               <li>• Integrated third-party libraries, APIs, and Google Maps</li>
               <li>• Employed background tasks and services for optimization</li>
               <li>• Collaborated with teams, conducted code reviews, and provided feedback</li>
            </ul>
            <div className='company-title'>VU Mobile Ltd (ZED Group)</div>
            <div className='duration'>Software Engineer, December 2012 - March 2014 (1 year 4 months)</div>
            <ul>
               <li>• Developed streaming app with content download for offline viewing</li>
               <li>• Integrated VAS services for personalized recommendations, in-app purchases, and subscriptions</li>
               <li>• Collaborated with content providers for high-quality streaming content</li>
               <li>• Utilized analytics and user feedback to improve app performance</li>
            </ul>
         </section>
         <section>
            <div className="headline-medium">Education</div>
            <p>
               <li><span>B.Sc. Computer Science and Engineering</span>, Bangladesh University (2011 - 2014)</li>
               <li><span>Diploma in Computer Technology</span>, Dhaka Polytechnic Institute (2006 - 2010)</li>
            </p>
         </section>
      </div>
   );
}

export default App;
