PyPreprocessor is a small library that adds c-style preprocessor macro support to Python. The library can either load and preprocess and external file, or work execute in a self-consuming manner.

<div class="ui two column stackable grid container">
  <div class="column">
    <h3>Development</h3>
    <ul>
      <li>preprocess external files</li>
      <li>preprocess by self-consuming the source</li>
      <li>basic functional tests</li>
      <li>useful examples for others</li>
    </ul>
  </div>
  <div class="column">
    <h3>Stack</h3>
    <ul>
      <li>Python 2/3</li>
      <li>GoogleCode -> GitHub</li>
      <li>Mercurial -> Git</li>
      <li>PyPi Package Release</li>
    </ul>
  </div>
</div>

**Usage:**

```language-python
from pypreprocessor import pypreprocessor

pypreprocessor.parse()

#define debug

#ifdef debug
print('The source is in debug mode')
#else
print('The source is not in debug mode')
#endif
```

**Motivations:**

I was experimenting with an idea that required a web scraper. I really wanted to stick to Python 3 but the scraping lib (ie Beautiful Soup) I was using hadn't been converted yet.

I thought about the maintenance issues inherent to supporting two separate code branches of a popular library and landed on the conclusion that a preprocessor with conditional includes would be the best option. Unfortunately, GvR hates preprocessors due to the way they're abused in C.

**Outcome:**

PyPreprocessor is limited to only conditional includes so it can't be used for abusing the syntax semantics of Python. The self-consuming bit was particularly difficult to solve do to the unique approach and lousy import module documentation. It cost me 400 rep on Stack Overflow to find somebody knowledgeable enough to locate the missing piece.

Unfortunately, it was all for naught. Pyton has distinct lexer and parser phases. If a file contains both Python 2 and 3 code the lexer will throw an exception before my preprocessor can intercept the parser.

Oh well, it's hosted on PyPi. I provided documentation with a few other viable use cases and other developers have found it useful so it wasn't a complete waste.