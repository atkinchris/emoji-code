# emoji-code
Emoji creator with code

## Adding new components to the library

All components should be center aligned within a `0 0 100 100` viewbox.
Before merging new SVGs, `yarn svgo` should be run to clean them up and inline all styles.

For example:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <ellipse cx="50" cy="50" rx="25" fill="#fff"/>
</svg>
```
