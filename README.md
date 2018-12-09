# JavaScript Equality Table Game…

…or why you should prefer the `===` operator.

* [**Play the game**][game]
* Inspired by [JavaScript Equality Table][table]
* [Discussion about value order][reorder]
* [Weak typing][wikipedia] in Wikipedia
* [Visual explanation][visual]

## Screenshot

[![Screenshot]][game]

## About `==` <a name="about"></a>

The `==` or loose equality operator in JavaScript tries to save the user from having to explicitly convert values (cast) to a common type to make comparisons, so, for example, `"5" == 5` implicitly converts (coerces) the string `"5"` to a number, so the comparison 'just works'. Without loose equality, the same comparison would need to be expressed as either `Number("5") == 5` or `"5" == String(5)`, or, at the shortest, `+"5" == 5` to be true.

The general principle behind having implicit type conversion is called *weak typing*, and it's useful to the degree that it makes code more terse, but the flip side is that the implicit conversion rules are basically guesswork about what the user expects, and, as such, can guess wrong and lead to unexpected results.


## Trivia

Brendan Eich was asked to add the loose equality checking rules by a coworker in Netscape and considers it a mistake.<sup>[citation needed]</sup>

## Motivation

The initial reason to make this game was to try out state management with [immer-wieder][wieder], but it's also to demonstrate that the `==` rules are easy to get wrong even if you feel like you're familiar with them. It's in response to claims like this one by the well-known author [getify][getify]:

> However, implicit coercion is a mechanism that can be learned, and moreover should be learned by anyone wishing to take JavaScript programming seriously. Not only is it not confusing once you learn the rules, it can actually make your programs better! The effort is well worth it.

If the implicit coercion rules were as claimed by getify, most experienced JavaScript users would be able to get close to perfect scores in this game, but there are numerous reports to the contrary, about giving it a serious attempt and being surprised by the results, including from seasoned users.

## Emojis

The game uses emojis; your system and browser should preferably support [color fonts] and have an emoji font like [EmojiOne] or [Noto Color Emoji] installed for the emojis to display properly. If not, the game will provide fallback SVG images from [emojitwo] (using [emoji-extractor]).

## Other Quirky Web-related Games

* [Flexbox Froggy](https://flexboxfroggy.com/) – learn CSS [flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
* [Grid Garden](http://cssgridgarden.com/) – learn CSS [grid](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids)
* [WarriorJS](https://warriorjs.com/) – control a game character using JS 

[table]: https://github.com/dorey/Javascript-Equality-Table/
[wikipedia]: https://en.wikipedia.org/wiki/Strong_and_weak_typing
[reorder]: http://algassert.com/visualization/2014/03/27/Better-JS-Equality-Table.html
[wieder]: https://github.com/drcmda/immer-wieder
[getify]: https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#converting-between-types
[visual]: https://i.imgur.com/rWoBHj4.png
[color fonts]: https://www.colorfonts.wtf/
[EmojiOne]: https://www.emojione.com/
[Noto Color Emoji]: https://www.google.com/get/noto/help/emoji/
[screenshot]: https://i.imgur.com/VFToyHp.png
[game]: https://slikts.github.io/js-equality-game/
[emojitwo]: https://emojitwo.github.io/
[emoji-extractor]: https://github.com/slikts/emoji-extractor
