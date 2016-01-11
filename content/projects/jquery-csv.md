jquery-csv is the first fully [RFC 4180][rfc-4180] compliant CSV parser for Javascript. It can parse RAW CSV to Javascript data structures and vice-versa. The JS representation of CSV data can be either a 2D array or an array of Objects. Parsing is accomplished using a DFM (Deterministic Finite-State Machine) covering every edge case outlined in the spec, plus a few that *should* be included.

<div class="ui two column stackable grid container">
  <div class="column">
    <h3>Development</h3>
    <ul>
      <li>parse CSV to a 2D array</li>
      <li>parse CSV to an array of objects</li>
      <li>format a 2D array as CSV</li>
      <li>format an array of objects as CSV</li>
      <li>support customizable delimiter/separator/newline chars</li>
      <li>allow the injection of additional code at every step</li>
      <li>end-to-end unit testing coverage</li>
      <li>useful interactive demos/examples for others</li>
      <li>optimize for performance</li>
    </ul>
  </div>
  <div class="column">
    <h3>Stack</h3>
    <ul>
      <li>Javascript/HTML + Node.js</li>
      <li>JSUnit + Mocha/Chai</li>
      <li>GoogleCode -> GitHub</li>
      <li>Git</li>
      <li>Grunt: htmlhint + jshint + uglify</li>
    </ul>
  </div>
</div>

**Usage:**
```language-javascript
// sample csv (could be loaded via file/ajax, etc)
var csv = `
"All work","and no play","makes Jack","a dull boy..."
"All work","and no play","makes Jack","a dull boy..."
`;

// parse the csv
var data = $.csv.toArrays(csv);

// the 'data' variable will contain
// [
//     ['All work', 'and no play', 'makes Jack', 'a dull boy...'],
//     ['All work', 'and no play', 'makes Jack', 'a dull boy...']
// ]
```

**Motivations:**

Work was slow, feast or famine cycles are common in the military. I attempted to pitch a MVP to the president of my company to replace our existing (terrible) logistics tracking system. The concept would provide a web-based UI with a PostgreSQL back-end.

To enable the quick/efficient import/export of tabular data would require a robust CSV parser. I probably searched and read over 100+ different blogs/websites in search of a good example. The results, everybody sucks at parsing CSV and the JS dev community is riddled with amateurs who love ridiculous titles such as 'guru' or 'ninja'.

I received pushback on my proposal in the form of, and I quote "we don't want to get involved with technology." I had time to burn (ie I can't stand being idle) so I dropped the product MVP and redirected my focus on creating something useful for others. My goal, to write the first fully RFC compliant CSV parser for client-side CSV. 

It began with the poor assumption, 'RegEx *should* be capable of parsing CSV'. I found a 20 line monster on Stack Overflow and tweaked it for extensibility. Only to discover that -- by design -- the RegEx parser will always break on values that contain escaped newline characters.

Back to the drawing board. I read everything I could find about parsers, Chomsky types, EBNF, parser generators, finite state machines, etc. Then, and only then, I sat down and mapped out every single state and transition as a DFA (Deterministic Finite-State Automata). The foundation that would become the new feature-complete CSV parser.

**Outcome:**

The popularity of the library exploded with a little marketing help. Piggybacking on jquery didn't hurt either. Ironically, the library doesn't actually depend on jQuery.

Tons of people started using it so it took very little time for users to root out most of the bugs. It was really an intrinsically rewarding experience to have something I created be adopted by so many.

Anyway, the feast-or-famine pace at work switched directions and I left the project on autopilot. The project is mostly dead now. GoogleCode shutdown and the migration to GitHub left years of valuable history behind. In retrospect, I wish I had tried GitHub sooner. The collaborative nature of forks/pull-requests is simply... better.

I love writing code in Javascript. It pained me to see so many self-proclaimed 'JS Ninjas' churning out bullshit, misinformation, and low quality code. It took some effort to 'do things right' but I like to think that my work helped to raise the bar just a little.

To date, the project has had almost 500K downloads. Competing CSV parser libraries have cropped up since and I'm happy to say they all target [RFC 4180][rfc-4180] compliance as the baseline.

[rfc-4180]: https://tools.ietf.org/html/rfc4180