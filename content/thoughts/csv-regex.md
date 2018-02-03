By CSV I'm going to assume you mean the convention as described in RFC 4180.

## While matching basic CSV data is trivial

```
"data", "more data"
```

For example here's the most comprehensive regular expression matching string I've found:

```javascript
re_valid = r"""
# Validate a CSV string having single, double or un-quoted values.
^                                   # Anchor to start of string.
\s*                                 # Allow whitespace before value.
(?:                                 # Group for value alternatives.
  '[^'\\]*(?:\\[\S\s][^'\\]*)*'     # Either Single quoted string,
| "[^"\\]*(?:\\[\S\s][^"\\]*)*"     # or Double quoted string,
| [^,'"\s\\]*(?:\s+[^,'"\s\\]+)*    # or Non-comma, non-quote stuff.
)                                   # End group of value alternatives.
\s*                                 # Allow whitespace after value.
(?:                                 # Zero or more additional values
  ,                                 # Values separated by a comma.
  \s*                               # Allow whitespace before value.
  (?:                               # Group for value alternatives.
    '[^'\\]*(?:\\[\S\s][^'\\]*)*'   # Either Single quoted string,
  | "[^"\\]*(?:\\[\S\s][^"\\]*)*"   # or Double quoted string,
  | [^,'"\s\\]*(?:\s+[^,'"\s\\]+)*  # or Non-comma, non-quote stuff.
  )                                 # End group of value alternatives.
  \s*                               # Allow whitespace after value.
)*                                  # Zero or more additional values
$                                   # Anchor to end of string.
"""
```

It reasonably handles single and double quoted values, but not newlines in values, escaped quotes, etc.

Source: [Stack Overflow - How can I parse a string with JavaScript](https://stackoverflow.com/a/8497474/290340)

It's becomes a nightmare once the common edge-cases are introduced like...

```
"such as ""escaped""","data"
"values that contain /n newline chars",""
"escaped, commas, like",",these"
"un-delimited data like", this
"","empty values"
"empty trailing values",        // <- this is completely valid
                                // <- trailing newline, may or may not be included
```

The newline-as-value edge case alone is enough to break 99.9999% of the RegEx based parsers found in the wild. The only 'reasonable' alternative is to use RegEx matching for basic control/non-control character (ie terminal vs non-terminal) tokenization paired with a state machine used for higher level analysis.

Source: Experience a.k.a pain and suffering.

I am the author of [jquery-CSV](https://github.com/evanplaice/jquery-csv), the first javascript based, fully RFC-compliant, CSV parser in the world. I have spent months tackling this problem, speaking with many intelligent people, and trying a ton if different implementations including 3 full rewrites of the core parser engine.

*Moral of the story, PCRE alone sucks for parsing anything but the most simple and strict regular (Ie Type-III) grammars. Albeit, it's useful for tokenizing terminal and non-terminal strings.*

*Note: I originally wrote this to [answer a question on StackOverflow](https://softwareengineering.stackexchange.com/a/215171/1256).*
