/**
 * the report somehow don´t adds the exact criteria as "1.1.1" etc, instead it
 * only provides something like "WCAG22:non-text-content".
 * remap this to points
 */

export const CRITERIA_MAP = [
  {
    provided: "WCAG22:non-text-content",
    remap: "1.1.1",
    order: 1
  },
  {
    provided: "WCAG22:audio-only-and-video-only-prerecorded",
    remap: "1.2.1",
    order: 2
  },
  {
    provided: "WCAG22:captions-prerecorded",
    remap: "1.2.2",
    order: 3
  },
  {
    provided: "WCAG22:audio-description-or-media-alternative-prerecorded",
    remap: "1.2.3",
    order: 4
  },
  {
    provided: "WCAG22:captions-live",
    remap: "1.2.4",
    order: 5
  },
  {
    provided: "WCAG22:audio-description-prerecorded",
    remap: "1.2.5",
    order: 6
  },
  {
    provided: "WCAG22:sign-language-prerecorded",
    remap: "1.2.6",
    order: 7
  },
  {
    provided: "WCAG22:extended-audio-description-prerecorded",
    remap: "1.2.7",
    order: 8
  },
  {
    provided: "WCAG22:media-alternative-prerecorded",
    remap: "1.2.8",
    order: 9
  },
  {
    provided: "WCAG22:audio-only-live",
    remap: "1.2.9",
    order: 10
  },
  {
    provided: "WCAG22:info-and-relationships",
    remap: "1.3.1",
    order: 11
  },
  {
    provided: "WCAG22:meaningful-sequence",
    remap: "1.3.2",
    order: 12
  },
  {
    provided: "WCAG22:sensory-characteristics",
    remap: "1.3.3",
    order: 13
  },
  {
    provided: "WCAG22:orientation",
    remap: "1.3.4",
    order: 14
  },
  {
    provided: "WCAG22:identify-input-purpose",
    remap: "1.3.5",
    order: 15
  },
  {
    provided: "WCAG22:identify-purpose",
    remap: "1.3.6",
    order: 16
  },
  {
    provided: "WCAG22:use-of-color",
    remap: "1.4.1",
    order: 17
  },
  {
    provided: "WCAG22:audio-control",
    remap: "1.4.2",
    order: 18
  },
  {
    provided: "WCAG22:contrast-minimum",
    remap: "1.4.3",
    order: 19
  },
  {
    provided: "WCAG22:resize-text",
    remap: "1.4.4",
    order: 20
  },
  {
    provided: "WCAG22:images-of-text",
    remap: "1.4.5",
    order: 21
  },
  {
    provided: "WCAG22:contrast-enhanced",
    remap: "1.4.6",
    order: 22
  },
  {
    provided: "WCAG22:low-or-no-background-audio",
    remap: "1.4.7",
    order: 23
  },
  {
    provided: "WCAG22:visual-presentation",
    remap: "1.4.8",
    order: 24
  },
  {
    provided: "WCAG22:images-of-text-no-exception",
    remap: "1.4.9",
    order: 25
  },
  {
    provided: "WCAG22:reflow",
    remap: "1.4.10",
    order: 26
  },
  {
    provided: "WCAG22:non-text-contrast",
    remap: "1.4.11",
    order: 27
  },
  {
    provided: "WCAG22:text-spacing",
    remap: "1.4.12",
    order: 28
  },
  {
    provided: "WCAG22:content-on-hover-or-focus",
    remap: "1.4.13",
    order: 29
  },
  {
    provided: "WCAG22:keyboard",
    remap: "2.1.1",
    order: 30
  },
  {
    provided: "WCAG22:no-keyboard-trap",
    remap: "2.1.2",
    order: 31
  },
  {
    provided: "WCAG22:keyboard-no-exception",
    remap: "2.1.3",
    order: 32
  },
  {
    provided: "WCAG22:character-key-shortcuts",
    remap: "2.1.4",
    order: 33
  },
  {
    provided: "WCAG22:timing-adjustable",
    remap: "2.2.1",
    order: 34
  },
  {
    provided: "WCAG22:pause-stop-hide",
    remap: "2.2.2",
    order: 35
  },
  {
    provided: "WCAG22:no-timing",
    remap: "2.2.3",
    order: 36
  },
  {
    provided: "WCAG22:interruptions",
    remap: "2.2.4",
    order: 37
  },
  {
    provided: "WCAG22:re-authenticating",
    remap: "2.2.5",
    order: 38
  },
  {
    provided: "WCAG22:timeouts",
    remap: "2.2.6",
    order: 39
  },
  {
    provided: "WCAG22:three-flashes-or-below-threshold",
    remap: "2.3.1",
    order: 40
  },
  {
    provided: "WCAG22:three-flashes",
    remap: "2.3.2",
    order: 41
  },
  {
    provided: "WCAG22:animation-from-interactions",
    remap: "2.3.3",
    order: 42
  },
  {
    provided: "WCAG22:bypass-blocks",
    remap: "2.4.1",
    order: 43
  },
  {
    provided: "WCAG22:page-titled",
    remap: "2.4.2",
    order: 44
  },
  {
    provided: "WCAG22:focus-order",
    remap: "2.4.3",
    order: 45
  },
  {
    provided: "WCAG22:link-purpose-in-context",
    remap: "2.4.4",
    order: 46
  },
  {
    provided: "WCAG22:multiple-ways",
    remap: "2.4.5",
    order: 47
  },
  {
    provided: "WCAG22:headings-and-labels",
    remap: "2.4.6",
    order: 48
  },
  {
    provided: "WCAG22:focus-visible",
    remap: "2.4.7",
    order: 49
  },
  {
    provided: "WCAG22:location",
    remap: "2.4.8",
    order: 50
  },
  {
    provided: "WCAG22:link-purpose-link-only",
    remap: "2.4.9",
    order: 51
  },
  {
    provided: "WCAG22:section-headings",
    remap: "2.4.10",
    order: 52
  },
  {
    provided: "WCAG22:focus-not-obscured-minimum",
    remap: "2.4.11",
    order: 53
  },
  {
    provided: "WCAG22:focus-not-obscured-enhanced",
    remap: "2.4.12",
    order: 54
  },
  {
    provided: "WCAG22:focus-appearance",
    remap: "2.4.13",
    order: 55
  },
  {
    provided: "WCAG22:pointer-gestures",
    remap: "2.5.1",
    order: 56
  },
  {
    provided: "WCAG22:pointer-cancellation",
    remap: "2.5.2",
    order: 57
  },
  {
    provided: "WCAG22:label-in-name",
    remap: "2.5.3",
    order: 58
  },
  {
    provided: "WCAG22:motion-actuation",
    remap: "2.5.4",
    order: 59
  },
  {
    provided: "WCAG22:target-size",
    remap: "2.5.5",
    order: 60
  },
  {
    provided: "WCAG22:concurrent-input-mechanisms",
    remap: "2.5.6",
    order: 61
  },
  {
    provided: "WCAG22:dragging-movements",
    remap: "2.5.7",
    order: 62
  },
  {
    provided: "WCAG22:target-size-minimum",
    remap: "2.5.8",
    order: 63
  },
  {
    provided: "WCAG22:language-of-page",
    remap: "3.1.1",
    order: 64
  },
  {
    provided: "WCAG22:language-of-parts",
    remap: "3.1.2",
    order: 66
  },
  {
    provided: "WCAG22:unusual-words",
    remap: "3.1.3",
    order: 67
  },
  {
    provided: "WCAG22:abbreviations",
    remap: "3.1.4",
    order: 68
  },
  {
    provided: "WCAG22:reading-level",
    remap: "3.1.5",
    order: 69
  },
  {
    provided: "WCAG22:pronunciation",
    remap: "3.1.6",
    order: 70
  },
  {
    provided: "WCAG22:on-focus",
    remap: "3.2.1",
    order: 71
  },
  {
    provided: "WCAG22:on-input",
    remap: "3.2.2",
    order: 72
  },
  {
    provided: "WCAG22:consistent-navigation",
    remap: "3.2.3",
    order: 73
  },
  {
    provided: "WCAG22:consistent-identification",
    remap: "3.2.4",
    order: 74
  },
  {
    provided: "WCAG22:change-on-request",
    remap: "3.2.5",
    order: 75
  },
  {
    provided: "WCAG22:consistent-help",
    remap: "3.2.6",
    order: 76
  },
  {
    provided: "WCAG22:error-identification",
    remap: "3.3.1",
    order: 77
  },
  {
    provided: "WCAG22:labels-or-instructions",
    remap: "3.3.2",
    order: 78
  },
  {
    provided: "WCAG22:error-suggestion",
    remap: "3.3.3",
    order: 79
  },
  {
    provided: "WCAG22:error-prevention-legal-financial-data",
    remap: "3.3.4",
    order: 80
  },
  {
    provided: "WCAG22:help",
    remap: "3.3.5",
    order: 81
  },
  {
    provided: "WCAG22:error-prevention-all",
    remap: "3.3.6",
    order: 82
  },
  {
    provided: "WCAG22:redundant-entry",
    remap: "3.3.7",
    order: 83
  },
  {
    provided: "WCAG22:accessible-authentication-minimum",
    remap: "3.3.8",
    order: 84
  },
  {
    provided: "WCAG22:accessible-authentication-enhanced",
    remap: "3.3.9",
    order: 85
  },
  {
    provided: "WCAG22:name-role-value",
    remap: "4.1.2",
    order: 86
  },
  {
    provided: "WCAG22:status-messages",
    remap: "4.1.3",
    order: 87
  }
]
