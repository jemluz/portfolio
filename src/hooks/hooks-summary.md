# Hooks Summary

## General hooks

- [src/hooks/useMediaQuery.ts](src/hooks/useMediaQuery.ts) - Detects media query matches and updates on viewport changes.

## Timeline page hooks

- [src/hooks/useContentItemRefs.ts](src/hooks/useContentItemRefs.ts) - Tracks a record of list item refs keyed by content id for scroll-based behavior.
- [src/hooks/useScrollActivation.ts](src/hooks/useScrollActivation.ts) - Activates content items based on their position relative to the scroll container top.
- [src/hooks/useScrollPadding.ts](src/hooks/useScrollPadding.ts) - Computes dynamic bottom padding from item heights to allow full scroll range.
- [src/hooks/useTimelineBlackBorder.ts](src/hooks/useTimelineBlackBorder.ts) - Syncs the timeline indicator position and visibility with scroll and selected year.
- [src/hooks/useTimelineNavigation.ts](src/hooks/useTimelineNavigation.ts) - Handles timeline navigation actions with boundary feedback and scroll-to-year.

### Hooks flow - parallel + context bridge

```
ContentList flow                                         Timeline flow
------------------------------------                    ------------------------------------
[useContentItemRefs.ts]                                  [useTimelineNavigation.ts]
	- ref map for content items                            - detect scroll/swipe to change selected year
     - used by ContentList.tsx                              - used by Timeline.tsx
     |                                                      |
     +--> [useScrollPadding.ts]                             |
     |      - generate custom bottom padding                v
     |        to standardize heights from all            (setSelectedYear)
     |        content items
     |      - used by ContentList.tsx
     |
     +--> [useScrollActivation.ts]                       [useTimelineBlackBorder.ts]
            - defines which content is active               - indicator sync + visibility
            - used by ContentList.tsx                       - black border will follow selected year
                                                            - just a nice animation
                                                            - used by Timeline.tsx

TimelinePageContext
-------------------------------------
- ContentArea > ContentList, & Timeline use context to sync
- updates yearContents + selectedContent

```
