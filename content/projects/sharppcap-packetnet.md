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

**Motivations:**

Anybody attempting to work with low-level network protocols in Windows will quickly discover that it's not possible. For 'security reasons' the default network drivers packaged with Windows won't let you peek at anything below the Transport Layer (ex TCP/UDP).

The winpcap/libpcap, workaround the limitation by providing a custom network driver with other enhancements such as promiscuous mode for network sniffing.

On the RIOS project, I was responsible for creating a custom Network Layer (ex Ethernet) protocol and client/server application to communicate over it. SharpPcap/Packet.net saved the day. So when the project concluded I immediately joined the project and started contributing.