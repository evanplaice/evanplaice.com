## SharpPcap/Packet.Net (Open Source - Contributor)

SharpPcap is a C# winpcap/libpcap wrapper that provides an API for capturing and sending network packets at all layers of the stack.

Packet.Net is a parser lib used by SharpPcap to parse RAW network frames into structured protocol data, as well as build/modify custom network packets from scratch. Speed is a primary factor when it comes to inline parsing (ex Deep Packet Inspection) so the data structures use lazy-loading with minimal protocol detection strategies as much as possible.

<div class="ui two column stackable grid container">
  <div class="column">
    <h3>Development</h3>
    <ul>
      <li>implemented/improved various protocols</li>
      <li>added/improved unit testing for validity</li>
      <li>added unit tests to check performance</li>
      <li>added/improved usability examples</li>
      <li>performed a project-wide style cleanup for consistency</li>
      <li>updated the public documentation</li>
      <li>improved/added inline documentation</li>
      <li>assisted new and existing users with their issues</li>
    </ul>
  </div>
  <div class="column">
    <h3>Stack</h3>
    <ul>
      <li>C#/.NET</li>
      <li>Visual Studio 2008 Pro (Windows)</li>
      <li>MonoDevelop (linux)</li>
      <li>NUnit (testing)</li>
      <li>Subversion (SCM)</li>
      <li>Ethereal/Wireshark</li>
    </ul>
  </div>
</div>

*Motivations:*

Anybody attempting to work with low-level network protocols in Windows will quickly discover that it's not possible. For 'security reasons' the default network drivers packaged with Windows won't let you peek at anything below the Transport Layer (ex TCP/UDP).

The winpcap/libpcap, workaround the limitation by providing a custom network driver with other enhancements such as promiscuous mode for network sniffing.

On the RIOS project, I was responsible for creating a custom Network Layer (ex Ethernet) protocol and client/server application to communicate over it. SharpPcap/Packet.net saved the day. So when the project concluded I immediately joined the project and started contributing.

-----

## RIOS (Replacement Instructor Operating System) (Proprietary - Co-Developer)

The RIOS is a modern bolt-on replacement Instructor Operating Station use to control a 6-DOF (Degrees of Freedom) FFS (Full Flight Simulator).

In regular English terms. Imagine one of those huge hydraulic driven, ultra realistic, aircraft simulation devices used to train commercial pilots. This system is the workstation in the back of the cockpit used to control the entire simulator.

The intent was to replace the existing IOS. Which consisted of 100+ push buttons (imagine mission control), and 2 very old ray tracing monitors (imagine a more basic version of 80's TRON).

Flight simulation time is booked at the rate of about $350/pilot/hour and flight simulators are operated by pilots (ie stick jocks) not simulator engineers/techs (ie nerds). As such, it was important to make the tools as quick/efficient/simple/easy to operate as possible and guarantee little/no downtime. 

Our update would rip out all of the existing hardware and replace it with 3 beautiful modern touchscreens running a UI designed to match their other flight simulators in look-an-feel as closely as possible.

**Constraints:**

With this project came a significant number of challenges. The simulator itself was built in the early 80s (ie before I was born). The host computer is an Encore/SEL 32/77 Workstation (ie refrigerator-esque) running proprietary version of AIX (ie IBM flavored Unix), with no networking support, and a bolt-on FPU (Floating Point Unit) that uses a non-standard floating point format.

**Personal Challenges:**

In addition. I had never developed a desktop application. Worked with another developer. Worked remotely with another developer. Coded in a statically-typed language. Or an OOP language. Done any form of networking programming. Built a database. Used software configuration management tools. Integrated software into an existing system. Build a mission critical turnkey hardware solution. etc...

Up until that point, my development skills were limited to website development in HTML/CSS/JS/PHP.

**Why We Took the Project On Anyway:**

My late father and I were an epic team, my co-developer (based out of Montreal) is exceptionally skilled/talented, and the our integration specialist (ie responsible for writing all the host code) is a master of old host computers including authoring an emulator that mimics the old hardware.

We were simply following the same recipe that we had been following for 4 years leading up to that point. Build a small team of exceptionally talented/intelligent people. For me personally, any shortfall of skill/knowledge would have to be made up for with hard work and dedication.

<div class="ui four column doubling stackable grid container">
  <div class="column">
    <h3>Development</h3>
    <ul>
      <li>designed the IPC communication architecture</li>
      <li>implemented a LINQ-to-SQL ORM layer on the client</li>
      <li>translated the floating point converter from C to C#</li>
      <li>implemented the custom Layer 2 client/server</li>
      <li>built the application scaffold for a multi-display UI</li>
      <li>wrote an ARINC-424 (global station data) parser</li>
      <li>wrote parser to translate a binary dump of the host symbol table</li>
      <li>implemented an intermediate database cache table</li>
      <li>implemented a top-down + side-view dynamic 2D plots for runway approaches</li>
    </ul>
  </div>
  <div class="column">
    <h3>Administration</h3>
    <ul>
      <li>designed the database structures</li>
      <li>administered the database</li>
      <li>created TSQL sprocs for data insertion/retrieval</li>
      <li>SVN server for software development</li>
      <li>SVN server for documentation/specifications</li>
      <li>a private wiki for communication</li>
      <li>specified and purchased all hardware</li>
      <li>setup the host OS and custom configuration</li>
      <li>setup 2 hot spares</li>
      <li>setup auto-documentation generation</li>
    </ul>
  </div>
  <div class="column">
    <h3>Hardware</h3>
    <ul>
      <li>6 19" ELO commercial touchscreen displays (3 for development</li>
      <li>a triple-monitor stand for the testing setup</li>
      <li>1 17" cheapo monitor for the console</li>
      <li>3 custom 3U bolt-on PC (1 prod, 1 hot spare, 1 dev)</li>
      <li>2 2-port video cards for the displays</li>
      <li>1 serial card for the touch screen inputs</li>
      <li>2 hot-swap hard drive bays</li>
      <li>4 additional hard drive bays for backup</li>
      <li>3 KVM-over-ethernet devices</li>
    </ul>
  </div>
  <div class="column">
    <h3>Stack</h3>
    <ul>
      <li>C#/.NET</li>
      <li>WinForms (really sucky UI)</li>
      <li>Visual Studio 2008 Pro</li>
      <li>Windows XP Pro</li>
      <li>MS SQL</li>
      <li>NUnit (testing)</li>
      <li>SharpPcap/Packet.Net (low-level networking library)</li>
      <li>Subversion (SCM)</li>
      <li>MediaWiki (wiki)</li>
    </ul>
  </div>
</div>

You may ask, what was my co-developer doing the whole time. A lot actually. He designed and developed: the dynamic 2D map plot that displays radio stations and runways; The data middle-layer in the main application, consisting of hundreds of data symbols; as well as about 75 pages of UI.

I have some pretty massive brass ones but -- even by my standards -- the project was a massive risk. At one point, there was a 3 1/2 stretch where I slept on the floor of my office and worked 18-20 hours/day.

All in all, we delivered on-time and met our SLA of 99.9% uptime over a 3 month period. Not bad for a rookie.