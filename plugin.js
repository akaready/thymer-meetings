"use strict";
var plugins = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // plugin.js
  var plugin_exports = {};
  __export(plugin_exports, {
    Plugin: () => Plugin
  });

  // ../../shared/settings-ui/tokens.css
  var tokens_default = `/*
 * Thymer Plugin Settings UI \u2014 Design Tokens
 *
 * Canonical CSS custom properties for the plugin settings panel system.
 * Plugins consume this verbatim; component CSS reads from these vars.
 *
 * See shared/settings-ui/DESIGN.md for rationale.
 *
 * Thymer var names verified against library/css-tokens/ (ripped from shipped CSS).
 * Fallbacks use color-mix(currentColor) so panels work when a token is absent.
 *
 * SCOPE IS DOUBLED ON PURPOSE (.tps-panel.tps-panel, specificity 0,2,0).
 * Every plugin bundles its own copy of this file and injects it into the same
 * document, all declaring the same global .tps-panel class. At equal specificity
 * the last stylesheet injected wins for EVERY panel in the app, so one plugin
 * running an outdated bundle silently redefines these tokens for all the others.
 * That shipped: pre-1f753f6 builds set --tps-accent from --accent-color, a var
 * Thymer never defines, which collapsed the accent to currentColor (white text)
 * across every installed plugin's panel. Doubling the class lets a current copy
 * outrank any stale plain-.tps-panel copy regardless of injection order.
 * Do not "simplify" this back to a single class.
 */

.tps-panel.tps-panel {
  /* \u2500\u2500 Color: text \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-text:           var(--text-default,   currentColor);
  --tps-text-muted:     var(--text-muted,     color-mix(in srgb, currentColor 62%, transparent));
  --tps-text-faint:     var(--text-subtle,    color-mix(in srgb, currentColor 48%, transparent));
  --tps-text-whisper:   var(--text-disabled,  color-mix(in srgb, currentColor 34%, transparent));

  /* \u2500\u2500 Color: surfaces \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-bg-input:       var(--input-bg-color,
                        color-mix(in srgb, currentColor 6%, transparent));
  --tps-bg-hover:       var(--hover-subtle,
                        var(--sidebar-bg-hover,
                        color-mix(in srgb, currentColor 8%, transparent)));
  --tps-bg-active:      var(--active-bg-color,
                        color-mix(in srgb, currentColor 12%, transparent));

  /* \u2500\u2500 Color: borders / dividers \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-divider:        var(--divider-color,
                        var(--thin-divider-color,
                        color-mix(in srgb, currentColor 14%, transparent)));
  --tps-border:         var(--input-border-color,
                        var(--divider-color,
                        color-mix(in srgb, currentColor 22%, transparent)));
  --tps-border-strong:  var(--titlebar-border-color,
                        var(--selection-border,
                        color-mix(in srgb, currentColor 32%, transparent)));

  /* \u2500\u2500 Color: accent (Thymer uses --logo-color) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  /* Fallback is a real color, never currentColor: an accent that degrades into
     the text color fails invisibly. Deliberately the brand mark, not the theme's
     --color-primary-500 \u2014 that one is a muted slate on themes like
     basalt-bedrock, which would make checked rows harder to read, not easier. */
  --tps-accent:         var(--logo-color, #04d1ab);
  --tps-accent-soft:    color-mix(in srgb, var(--tps-accent) 15%, transparent);
  --tps-accent-strong:  color-mix(in srgb, var(--tps-accent) 80%, var(--tps-text));

  /* \u2500\u2500 Color: semantic \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-danger:         var(--enum-red-fg, #ef4444);
  --tps-danger-soft:    color-mix(in srgb, var(--tps-danger) 15%, transparent);
  --tps-warning:        var(--text-warning,
                        var(--enum-yellow-fg, #f59e0b));
  --tps-success:        var(--enum-green-fg, #10b981);
  --tps-success-soft:   color-mix(in srgb, var(--tps-success) 12%, transparent);

  --tps-on-accent:      var(--text-on-accent, light-dark(#111111, #fafafa));

  /* Panel chrome */
  --tps-panel-bg:       var(--panel-bg-color, transparent);
  --tps-swatch-inset:   color-mix(in srgb, var(--tps-text) 8%, transparent);

  /* \u2500\u2500 Typography \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  /* Font is INHERITED from Thymer's panel chrome (see components.css). */

  --tps-fs-title:       18px;
  --tps-fs-lede:        13px;
  --tps-fs-section:     11px;
  --tps-fs-hint:        12px;
  --tps-fs-label:       13px;
  --tps-fs-desc:        12px;
  --tps-fs-body:        13px;
  --tps-fs-value:       12px;
  --tps-fs-button:      12px;
  --tps-fs-list-header: 10px;

  --tps-lh-tight:       1;
  --tps-lh-snug:        1.2;
  --tps-lh-base:        1.4;
  --tps-lh-loose:       1.5;

  --tps-fw-regular:     400;
  --tps-fw-medium:      500;
  --tps-fw-semibold:    600;
  --tps-fw-bold:        700;

  --tps-ls-section:     0.06em;
  --tps-ls-list:        0.08em;
  --tps-ls-title:       0;

  /* \u2500\u2500 Spacing (8px scale) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-space-1:        4px;
  --tps-space-2:        8px;
  --tps-space-3:        12px;
  --tps-space-4:        16px;
  --tps-space-5:        24px;
  --tps-space-6:        32px;
  --tps-space-7:        48px;

  /* \u2500\u2500 Radii \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-radius-sm:      4px;
  --tps-radius-md:      6px;
  --tps-radius-lg:      8px;
  --tps-radius-pill:    999px;
  --tps-radius-circle:  50%;

  /* \u2500\u2500 Motion \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-ease-out:       cubic-bezier(0.2, 0.6, 0.2, 1);
  --tps-ease-in-out:    cubic-bezier(0.4, 0, 0.2, 1);
  --tps-dur-fast:       80ms;
  --tps-dur-base:       160ms;

  --tps-shadow-thumb:   0 1px 3px color-mix(in srgb, var(--tps-text) 28%, transparent);

  /* \u2500\u2500 Component dimensions \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-control-h-sm:   28px;
  --tps-control-h-md:   32px;
  --tps-input-w:        64px;
  --tps-num-step-w:     28px;
  --tps-swatch-size:    22px;
  --tps-thumb-size:     16px;
  --tps-track-h:        6px;

  --tps-slider-track:   color-mix(in srgb, var(--tps-text) 22%, transparent);
  --tps-slider-thumb-border: color-mix(in srgb, var(--tps-text) 28%, transparent);
}

@media (prefers-reduced-motion: reduce) {
  .tps-panel.tps-panel {
    --tps-dur-fast:     1ms;
    --tps-dur-base:     1ms;
  }
}
`;

  // ../../shared/settings-ui/components.css
  var components_default = `/*
 * Thymer Plugin Panel \u2014 Component Primitives
 *
 * All primitives scope under .tps-panel. Plugin-specific styles live elsewhere.
 * Reads tokens from tokens.css.
 */

/* \u2500\u2500 Panel root \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Inherit Thymer's font + sizing \u2014 DO NOT override. plugin-collection-icons
   demonstrates the right approach: simply \`font-family: inherit\`. Forcing a
   custom var fights both Thymer's body font AND the .ti icon font. */
.tps-panel {
  font-family: inherit;
  font-size: var(--tps-fs-body);
  line-height: var(--tps-lh-base);
  color: var(--tps-text);
  padding: 0 var(--tps-space-5) var(--tps-space-7);
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
}

.tps-panel *,
.tps-panel *::before,
.tps-panel *::after {
  box-sizing: border-box;
}

/* Mono opt-ins are explicit per-element, never via a panel-wide override. */
.tps-panel .tps-num-input,
.tps-panel .tps-slider-value,
.tps-panel .tps-mono,
.tps-panel .tps-mono * {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Courier New", monospace;
}

/* \u2500\u2500 Title block \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-title {
  font-size: var(--tps-fs-title);
  line-height: var(--tps-lh-snug);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-title);
  color: var(--tps-text);
  margin: 0 0 var(--tps-space-1);
}

.tps-lede {
  font-size: var(--tps-fs-lede);
  line-height: var(--tps-lh-loose);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3);
}

/* \u2500\u2500 Canonical plugin header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-plugin-header {
  position: relative;
  margin: var(--tps-space-5) 0 var(--tps-space-5);
  padding: 18px var(--tps-space-4);
  overflow: hidden;
  background:
    linear-gradient(to right,
      #f26548  8%, #f26548 28%,
      #fbac56 28%, #fbac56 48%,
      #fff460 48%, #fff460 68%,
      #f067a6 68%, #f067a6 88%,
      #03bdf2 88%
    ) top left / 100% 1px no-repeat,
    linear-gradient(to right,
      #f26548  0%, #f26548 12%,
      #fbac56 12%, #fbac56 32%,
      #fff460 32%, #fff460 52%,
      #f067a6 52%, #f067a6 72%,
      #03bdf2 72%, #03bdf2 92%
    ) bottom left / 100% 1px no-repeat,
    var(--tps-panel-bg, var(--panel-bg-color, var(--plg-ci-theme-bg, transparent)));
  border-left: 1px solid #f26548;
  border-right: 1px solid #03bdf2;
}

.tps-plugin-header-logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--tps-space-2, 8px);
  margin: 0 0 var(--tps-space-3, 12px);
  background: var(--tps-bg-hover);
  border-radius: var(--tps-radius-md, 6px);
}

.tps-plugin-header-logo-icon {
  flex: 0 0 auto;
  font-size: 34px;
  line-height: 1;
  color: var(--tps-text, currentColor);
}

.tps-plugin-header-title {
  font-size: 22px;
  line-height: var(--tps-lh-snug, 1.2);
  font-weight: var(--tps-fw-semibold, 600);
  letter-spacing: 0;
  color: var(--tps-text, var(--text-default, currentColor));
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-panel .tps-plugin-header-version {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  font-size: 11px;
  line-height: inherit;
  font-weight: var(--tps-fw-medium, 500);
  letter-spacing: 0;
  color: var(--tps-text-faint) !important;
  white-space: nowrap;
}

.tps-plugin-header-lede {
  font-size: 14px;
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-plugin-header-helper-wrap {
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-plugin-header-helper-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0;
  margin: 0;
  border: 0;
  background: transparent;
  color: inherit;
  opacity: 0.28;
  font: inherit;
  font-size: var(--tps-fs-section, 11px);
  font-weight: var(--tps-fw-semibold, 600);
  line-height: var(--tps-lh-tight, 1);
  letter-spacing: var(--tps-ls-section, 0.06em);
  text-transform: uppercase;
  cursor: pointer;
  transition: opacity var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-helper-toggle:hover {
  opacity: 0.72;
}

.tps-plugin-header-helper-toggle:focus-visible {
  outline: 1px solid color-mix(in srgb, var(--tps-accent, currentColor) 45%, transparent);
  outline-offset: 2px;
}

.tps-plugin-header-helper-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 13px;
  height: 13px;
  font-size: 13px;
  line-height: 1;
  color: inherit;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-toggle {
  opacity: 0.72;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-toggle:hover {
  opacity: 1;
}

.tps-plugin-header-helper-body {
  display: none;
  margin: 8px 0 0;
  padding-left: 18px;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-body {
  display: block;
  cursor: pointer;
}

.tps-plugin-header-helper-line {
  margin: 0;
  font-size: var(--tps-fs-hint, 12px);
  line-height: var(--tps-lh-base, 1.4);
  color: inherit;
  opacity: 0.72;
  transition: opacity var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-body:hover .tps-plugin-header-helper-line {
  opacity: 1;
}

/* Scoped .tps-panel on purpose: every plugin injects its own copy of this
   file, and older copies baseline-align this row (plus translateY icon
   shims). Higher specificity here makes the newest layout win the cascade
   war regardless of plugin load order. */
.tps-panel .tps-plugin-header-attr {
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0;
  width: 100%;
  font-size: 11.5px;
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
  margin: var(--tps-space-3, 12px) 0 0;
  padding-top: var(--tps-space-3, 12px);
  border-top: 0;
}

.tps-plugin-header-attr::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: clamp(40%, 50%, 55%);
  height: 1px;
  background: var(--tps-bg-hover);
}

.tps-plugin-header-link-group + .tps-plugin-header-link-group {
  margin-left: var(--tps-space-3, 12px);
  padding-left: var(--tps-space-3, 12px);
  border-left: 1px solid var(--tps-bg-hover);
}

.tps-panel .tps-plugin-header-icon,
.tps-panel .tps-plugin-header-attr .ti {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  font-size: 12px;
  line-height: 1;
  color: var(--tps-text-muted);
  margin-right: var(--tps-space-1, 4px);
}

.tps-plugin-header-iconify {
  background-color: currentColor;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

.tps-plugin-header-iconify-github {
  --tps-iconify-github: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'/%3E%3C/svg%3E");
  -webkit-mask-image: var(--tps-iconify-github);
  mask-image: var(--tps-iconify-github);
}

.tps-plugin-header-link {
  color: inherit;
  text-decoration: underline;
  text-decoration-color: color-mix(in srgb, currentColor 42%, transparent);
  transition: color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              text-decoration-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              filter var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-link--blue,
.tps-plugin-header-link--blue:hover {
  color: #03bdf2;
  text-decoration-color: #03bdf2;
}

.tps-plugin-header-link--pink,
.tps-plugin-header-link--pink:hover {
  color: #f067a6;
  text-decoration-color: #f067a6;
}

.tps-plugin-header-link--muted,
.tps-plugin-header-link--muted:hover {
  color: var(--tps-text-faint) !important;
  text-decoration-color: color-mix(in srgb, currentColor 42%, transparent);
}

.tps-plugin-header-link:hover {
  text-decoration: none;
  text-decoration-color: transparent;
  filter: brightness(1.2);
}

/* \u2500\u2500 Header controls: scope pill + bug report + kill switch \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Settings-scope cluster. Resting: one dim "All devices" pill. Diverged:
   pill lights amber (full-perimeter border + tint \u2014 never a single-edge
   accent) and the \u2191 push / \u21BA discard icon buttons appear beside it. Amber
   rides Thymer's orange enum tokens so it tracks the theme. */
.tps-scope {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.tps-scope-pill {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  height: 22px;
  padding: 0 8px;
  border: 1px solid var(--tps-border, rgba(127, 127, 127, 0.16));
  border-radius: 999px;
  font-size: 10.5px;
  line-height: 1;
  white-space: nowrap;
  color: var(--tps-text-muted);
  background: transparent;
  user-select: none;
}

.tps-scope-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--tps-text-muted);
  opacity: 0.55;
}

/* "This device" is a normal, saved state (per-device settings), NOT a warning \u2014
   so it wears the calm brand accent, not an alarming amber. Full-perimeter
   border, never a single-edge accent. */
.tps-scope-pill[data-diverged="true"] {
  color: var(--tps-accent);
  border-color: color-mix(in srgb, var(--tps-accent) 45%, transparent);
  background: var(--tps-accent-soft);
}

.tps-scope-pill[data-diverged="true"] .tps-scope-dot {
  background: var(--tps-accent);
  opacity: 1;
}

.tps-scope-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  border: 1px solid var(--tps-border, rgba(127, 127, 127, 0.16));
  border-radius: var(--tps-radius-sm, 4px);
  background: transparent;
  color: var(--tps-text-muted);
  cursor: pointer;
  transition: color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              background-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              border-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

/* Inline-SVG icons: a viewBox-centered vector in a block box has no font
   metrics \u2014 no baseline, no ascent/descent ink drift. The 14px vector in the
   22px button gives an exact 4px inset on every side. */
.tps-panel .tps-scope-svg {
  display: flex;
  width: 14px;
  height: 14px;
  flex: 0 0 auto;
}

.tps-panel .tps-scope-svg svg {
  width: 100%;
  height: 100%;
  display: block;
}

/* Optical correction for the (still webfont) bug glyph: near-zero descent
   rides the ink ~1px high of any line-box centering. */
.tps-panel .tps-plugin-header-bug .ti::before {
  display: inline-block;
  transform: translateY(1px);
}

.tps-scope-btn:hover {
  color: var(--tps-text);
  background: var(--tps-bg-hover);
  border-color: var(--tps-border);
}

.tps-scope-btn:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

.tps-scope-btn--push:hover {
  color: var(--enum-green-fg, #3fa653);
  border-color: var(--enum-green-border, rgba(63, 166, 83, 0.45));
  background: var(--enum-green-bg, rgba(63, 166, 83, 0.12));
}

/* Armed state must beat the generic :hover recolor (same specificity, order-
   dependent) \u2014 scope it up so the icon reddens with the box, hovered or not. */
.tps-panel .tps-scope-btn--discard[data-armed="true"],
.tps-panel .tps-scope-btn--discard[data-armed="true"]:hover {
  color: var(--enum-red-fg, #d64545);
  border-color: var(--enum-red-border, rgba(214, 69, 69, 0.5));
  background: var(--enum-red-bg, rgba(214, 69, 69, 0.12));
}

.tps-scope-btn[disabled] {
  opacity: 0.5;
  cursor: default;
}

/* \u2500\u2500 Header controls: bug report + kill switch \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Last flex item of the attr row; margin-left:auto pins the group to the
   right edge, align-self:center opts out of the row's baseline alignment. */
.tps-plugin-header-controls {
  display: inline-flex;
  align-items: center;
  gap: var(--tps-space-2, 8px);
  margin-left: auto;
  padding-left: var(--tps-space-3, 12px);
}

/* In-row placement (right of the version link). */
.tps-panel .tps-plugin-header-attr > .tps-plugin-header-bug {
  margin-left: var(--tps-space-2, 8px);
}

.tps-plugin-header-bug {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  border: 1px solid transparent;
  border-radius: var(--tps-radius-sm, 4px);
  background: transparent;
  color: var(--tps-text-muted);
  cursor: pointer;
  transition: color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              background-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              border-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

/* Undo the attr row's generic .ti treatment (translateY + margin) inside the button. */
.tps-panel .tps-plugin-header-bug .ti {
  width: 14px;
  height: 14px;
  font-size: 14px;
  transform: none;
  margin: 0;
}

.tps-plugin-header-bug:hover {
  color: var(--tps-text);
  background: var(--tps-bg-hover);
  border-color: var(--tps-border);
}

.tps-plugin-header-bug:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

.tps-switch {
  position: relative;
  display: inline-flex;
  flex: 0 0 auto;
  width: 30px;
  height: 16px;
  padding: 0;
  border: 1px solid var(--tps-border);
  border-radius: var(--tps-radius-pill, 999px);
  background: var(--tps-bg-input);
  cursor: pointer;
  transition: background-color var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out),
              border-color var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out);
}

.tps-switch-knob {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 12px;
  height: 12px;
  border-radius: var(--tps-radius-circle, 50%);
  background: var(--tps-text-muted);
  transition: transform var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out),
              background-color var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out);
}

.tps-switch[aria-checked="true"] {
  background: var(--tps-accent);
  border-color: var(--tps-accent);
}

.tps-switch[aria-checked="true"] .tps-switch-knob {
  transform: translateX(14px);
  background: var(--tps-on-accent, #fff);
}

.tps-switch:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

.tps-switch[data-busy],
.tps-switch:disabled {
  opacity: 0.55;
  pointer-events: none;
}

/* Off-state "safe mode": dim the body, keep it interactive \u2014 edits stage in the
   plugin's local drafts and apply on re-enable. Keyed off the pill's aria state
   so the optimistic flip dims instantly and heal re-renders stay correct with
   no JS. The header (pill, bug button, off-note) stays full opacity \u2014 exclude
   any direct child containing it (collection-icons wraps the header in a row
   element, so exclude by content, not class). */
.tps-panel:has(.tps-plugin-header .tps-switch[aria-checked="false"]) > :not(:has(.tps-plugin-header)) {
  opacity: 0.65;
  transition: opacity var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out);
}

/* Rendered whenever the header has a kill switch; shown only while it's off. */
.tps-plugin-header-off-note {
  display: none;
  margin: var(--tps-space-2, 8px) 0 0;
  font-size: var(--tps-fs-hint, 12px);
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
}

.tps-plugin-header:has(.tps-switch[aria-checked="false"]) .tps-plugin-header-off-note {
  display: block;
}

/* \u2500\u2500 Feedback dialog (panel-scoped modal) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* The overlay positions against the .tps-panel root (the scroll container). */
.tps-panel {
  position: relative;
}

.tps-feedback-overlay {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--tps-space-4);
  background: color-mix(in srgb, var(--panel-bg-color, light-dark(#ffffff, #131316)) 55%, transparent);
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
}

@supports not ((backdrop-filter: blur(6px)) or (-webkit-backdrop-filter: blur(6px))) {
  .tps-feedback-overlay {
    background: color-mix(in srgb, var(--panel-bg-color, light-dark(#ffffff, #131316)) 90%, transparent);
  }
}

/* Flex column with a growing description field: the card stretches to the
   available panel height (capped) and the textarea absorbs the difference,
   so the card itself never needs a scrollbar. */
.tps-feedback-card {
  display: flex;
  flex-direction: column;
  width: min(440px, 100%);
  height: min(760px, 100%);
  overflow: auto;
  background: var(--panel-bg-color, light-dark(#ffffff, #17171b));
  border: 1px solid var(--tps-border);
  border-radius: var(--tps-radius-lg);
  padding: var(--tps-space-4);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
}

/* Rows keep their natural height \u2014 when content doesn't fit (e.g. the system
   report drawer opens in a short panel) the CARD scrolls; rows must never be
   squeezed into overlapping each other. Only the description field flexes. */
.tps-feedback-card > * {
  flex: 0 0 auto;
}

.tps-feedback-card > .tps-feedback-field--grow {
  flex: 1 1 auto;
}

.tps-feedback-field--grow {
  display: flex;
  flex-direction: column;
}

.tps-feedback-field--grow .tps-feedback-textarea {
  flex: 1 1 auto;
  min-height: 72px;
}

.tps-feedback-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 var(--tps-space-2);
}

.tps-feedback-title {
  margin: 0;
  font-size: var(--tps-fs-label, 12.5px);
  font-weight: var(--tps-fw-semibold, 600);
  letter-spacing: var(--tps-ls-section, 0.06em);
  text-transform: uppercase;
  color: var(--tps-text);
}

.tps-feedback-close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  border: 1px solid transparent;
  border-radius: var(--tps-radius-sm, 4px);
  background: transparent;
  color: var(--tps-text-muted);
  cursor: pointer;
  font-size: 14px;
}

.tps-feedback-close:hover {
  color: var(--tps-text);
  background: var(--tps-bg-hover);
  border-color: var(--tps-border);
}

.tps-feedback-close:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

.tps-feedback-hint {
  margin: 0 0 var(--tps-space-3);
  font-size: var(--tps-fs-hint, 12px);
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
}

.tps-feedback-field {
  display: block;
  margin: 0 0 var(--tps-space-3);
}

.tps-feedback-label {
  display: block;
  margin: 0 0 var(--tps-space-1);
  font-size: var(--tps-fs-label, 12.5px);
  font-weight: var(--tps-fw-medium, 500);
  color: var(--tps-text);
}

.tps-feedback-input,
.tps-feedback-textarea {
  width: 100%;
  padding: var(--tps-space-1, 4px) var(--tps-space-2, 8px);
  font-family: inherit;
  font-size: var(--tps-fs-body, 13px);
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text);
  background: var(--tps-bg-input);
  border: 1px solid var(--tps-border);
  border-radius: var(--tps-radius-sm, 4px);
}

.tps-feedback-textarea {
  resize: vertical;
  min-height: 72px;
}

.tps-feedback-input:focus,
.tps-feedback-textarea:focus {
  outline: none;
  border-color: color-mix(in srgb, var(--tps-accent) 60%, transparent);
}

.tps-feedback-input[aria-invalid="true"],
.tps-feedback-textarea[aria-invalid="true"] {
  border-color: var(--tps-danger);
}

.tps-feedback-details {
  margin: 0 0 var(--tps-space-3);
}

.tps-feedback-summary {
  font-size: var(--tps-fs-hint, 12px);
  color: var(--tps-text-muted);
  cursor: pointer;
}

.tps-feedback-summary:hover {
  color: var(--tps-text);
}

.tps-feedback-report {
  margin: var(--tps-space-2) 0 0;
  padding: var(--tps-space-2);
  max-height: 140px;
  overflow: auto;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Courier New", monospace;
  font-size: 11px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;
  color: var(--tps-text-muted);
  background: var(--tps-bg-input);
  border: 1px solid var(--tps-divider);
  border-radius: var(--tps-radius-sm, 4px);
}

/* Themed thin scrollbars \u2014 the card (short panels) and the report pre both scroll. */
.tps-feedback-card,
.tps-feedback-report {
  scrollbar-width: thin;
  scrollbar-color: var(--tps-border, rgba(127, 127, 127, 0.25)) transparent;
}

.tps-feedback-card::-webkit-scrollbar,
.tps-feedback-report::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.tps-feedback-card::-webkit-scrollbar-track,
.tps-feedback-report::-webkit-scrollbar-track {
  background: transparent;
}

.tps-feedback-card::-webkit-scrollbar-thumb,
.tps-feedback-report::-webkit-scrollbar-thumb {
  background: var(--tps-border, rgba(127, 127, 127, 0.25));
  border-radius: 999px;
  border: 2px solid transparent;
  background-clip: padding-box;
}

.tps-feedback-actions {
  display: flex;
  justify-content: flex-end;
  gap: var(--tps-space-2);
}

/* \u2500\u2500 Section \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-section {
  padding: 0;
}

.tps-section + .tps-section {
  border-top: 1px solid var(--tps-divider);
  margin-top: var(--tps-space-4);
  padding-top: var(--tps-space-4);
}

.tps-section-label {
  display: block;
  font-size: var(--tps-fs-section);
  line-height: var(--tps-lh-tight);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-section);
  text-transform: uppercase;
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-2);
}

.tps-section-hint {
  font-size: var(--tps-fs-hint);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3);
}

.tps-section-body {
  display: flex;
  flex-direction: column;
  gap: var(--tps-space-3);
  margin-top: var(--tps-space-2);
}

.tps-section-body:first-child {
  margin-top: 0;
}

/* When the body is full of list rows (mode rows), drop the gap and the top
   margin entirely so the first row's hover background sits flush under the
   section label and adjacent rows tile with no dead space between them. */
.tps-section-body:has(> .tps-list-row),
.tps-section-body:has(> .tps-opt) {
  margin-top: 0;
  gap: 0;
}

/* Collapsible variant: header is a button, body is hidden when closed */

.tps-section--collapsible > .tps-section-header {
  display: flex;
  align-items: center;
  gap: var(--tps-space-2);
  width: 100%;
  min-height: 34px;
  padding: 0;
  margin: 0 0 var(--tps-space-2);
  background: transparent;
  border: 0;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.tps-section--collapsible > .tps-section-header:hover .tps-section-label {
  color: var(--tps-text);
}

.tps-section--collapsible > .tps-section-header .tps-section-label {
  margin: 0;
}

.tps-section-chev {
  display: inline-block;
  width: 10px;
  font-size: 10px;
  line-height: 1;
  color: var(--tps-text-faint);
  transition: transform var(--tps-dur-base) var(--tps-ease-out);
}

.tps-section--collapsible[data-open="true"] .tps-section-chev {
  transform: rotate(90deg);
}

.tps-section-summary {
  margin-left: auto;
  min-width: 0;
  min-height: 18px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: var(--tps-fs-hint);
  color: var(--tps-text-muted);
  font-weight: var(--tps-fw-regular);
  letter-spacing: 0;
  text-transform: none;
}

/* Reserve header height when expanded; summary text only shows collapsed */
.tps-section--collapsible[data-open="true"] .tps-section-summary {
  visibility: hidden;
}

.tps-section--collapsible[data-open="false"] > .tps-section-body {
  display: none;
}

/* \u2500\u2500 Option row (checkbox / radio + label + desc) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-opt {
  display: grid;
  grid-template-columns: 18px 1fr;
  column-gap: var(--tps-space-3);
  row-gap: 0;
  align-items: start;
  padding: 6px 10px;
  margin: 0 -10px;
  border-radius: var(--tps-radius-md);
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out);
}

/* Stack option rows tight so the hover background of one meets the next
   without a visible gap above. Outer section gap is handled by the section
   itself, not by spacing between opts. */
.tps-section-body > .tps-opt + .tps-opt {
  margin-top: 0;
}
.tps-section-body:has(> .tps-opt) {
  gap: 0;
}

.tps-opt:hover {
  background: var(--tps-bg-hover);
}

.tps-opt > input[type="checkbox"],
.tps-opt > input[type="radio"] {
  grid-column: 1;
  grid-row: 1;
  align-self: center;
  width: 16px;
  height: 16px;
  margin: 0;
  accent-color: var(--tps-accent);
  cursor: pointer;
}

.tps-opt > .tps-opt-label {
  grid-column: 2;
  grid-row: 1;
  font-size: var(--tps-fs-label);
  line-height: var(--tps-lh-base);
  font-weight: var(--tps-fw-medium);
  color: var(--tps-text);
  cursor: pointer;
  transition: color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-opt > .tps-opt-desc {
  grid-column: 2;
  grid-row: 2;
  margin-top: 1px;
  font-size: var(--tps-fs-desc);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
  cursor: pointer;
}

.tps-section-body > .tps-opt-note {
  margin: var(--tps-space-2) -10px 0;
  padding: 0 10px 0 calc(10px + 18px + var(--tps-space-3));
  font-size: var(--tps-fs-desc);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
}

.tps-opt > input:checked ~ .tps-opt-label {
  color: var(--tps-accent);
}

/* Checkbox option + nested number row (e.g. tuned value under a toggle) */
.tps-section-body:has(> .tps-opt-group) {
  margin-top: 0;
  gap: 0;
}

.tps-opt-group {
  display: flex;
  flex-direction: column;
}

.tps-opt-group + .tps-opt-group {
  margin-top: 0;
}

.tps-opt-group .tps-opt-group__value,
.tps-opt-group > .tps-num {
  margin-left: calc(18px + var(--tps-space-3));
  margin-top: var(--tps-space-1);
  margin-bottom: var(--tps-space-3);
  padding-right: 10px;
  max-width: 100%;
  box-sizing: border-box;
}

.tps-opt-group .tps-num-grid {
  margin-left: calc(18px + var(--tps-space-3));
  margin-top: var(--tps-space-1);
  margin-bottom: var(--tps-space-3);
  grid-template-columns: minmax(0, 1fr);
}

/* \u2500\u2500 Numeric stepper \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-num {
  display: flex;
  align-items: center;
  gap: var(--tps-space-1);
}

.tps-num-label {
  flex: 0 0 auto;
  min-width: 0;
  font-size: var(--tps-fs-label);
  color: var(--tps-text);
  margin-right: var(--tps-space-2);
}

.tps-num-step,
.tps-num-input,
.tps-num-reset {
  font-family: inherit;
  font-size: var(--tps-fs-button);
  height: var(--tps-control-h-sm);
  border: 1px solid var(--tps-divider);
  border-radius: var(--tps-radius-sm);
  background: transparent;
  color: var(--tps-text);
  transition: border-color var(--tps-dur-fast) var(--tps-ease-out),
              background-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-num-step {
  width: var(--tps-num-step-w);
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.tps-num-step:hover {
  border-color: var(--tps-border);
  background: var(--tps-bg-hover);
}

.tps-num-step:active {
  background: var(--tps-bg-active);
}

.tps-num-input {
  width: var(--tps-input-w);
  padding: 0 var(--tps-space-2);
  background: var(--tps-bg-input);
  text-align: center;
  font-variant-numeric: tabular-nums;
  -moz-appearance: textfield;
}

.tps-num-input::-webkit-outer-spin-button,
.tps-num-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.tps-num-input:focus {
  outline: none;
  border-color: var(--tps-accent);
}

.tps-num-unit {
  font-size: var(--tps-fs-hint);
  color: var(--tps-text-muted);
  margin: 0 var(--tps-space-2);
}

.tps-num-reset {
  font-size: 11px;
  color: var(--tps-text-muted);
  padding: 0 var(--tps-space-2);
  cursor: pointer;
}

.tps-num-reset:hover {
  color: var(--tps-text);
  border-color: var(--tps-border);
}

.tps-num-reset[hidden] {
  display: none !important;
}

/* Stacked layout: label / control row in a 200px / 1fr grid */

.tps-num-grid {
  display: grid;
  grid-template-columns: 200px 1fr;
  align-items: center;
  column-gap: var(--tps-space-3);
  row-gap: var(--tps-space-2);
}

.tps-num-grid > .tps-num-label {
  margin: 0;
  text-align: left;
}

.tps-num-grid > .tps-num {
  justify-self: start;
}

/* \u2500\u2500 Slider row \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Shared range styling for sliderRow and any other range input in a panel.
   Exclude hue pickers that paint their own gradient track. */
.tps-panel input[type="range"]:not(.plg-collection-colors__hue) {
  width: 100%;
  height: 22px;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  touch-action: pan-y;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-webkit-slider-runnable-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-moz-range-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
  margin-top: -5px;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-moz-range-thumb {
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue):active::-webkit-slider-thumb {
  cursor: grabbing;
}

.tps-slider {
  display: grid;
  grid-template-columns: 90px 1fr 56px auto;
  align-items: center;
  gap: var(--tps-space-3);
}

.tps-slider-label {
  font-size: var(--tps-fs-section);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-section);
  text-transform: uppercase;
  color: var(--tps-text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tps-slider-input {
  width: 100%;
  height: 22px;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  touch-action: pan-y;
}

.tps-slider-input::-webkit-slider-runnable-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-slider-input::-moz-range-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-slider-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
  margin-top: -5px;
}

.tps-slider-input::-moz-range-thumb {
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-slider-input:active::-webkit-slider-thumb {
  cursor: grabbing;
}

/* Hue picker keeps its gradient track; only style the thumb. */
.tps-panel input[type="range"].plg-collection-colors__hue {
  width: 100%;
  height: 10px;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
}

.tps-panel input[type="range"].plg-collection-colors__hue::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  border-radius: var(--tps-radius-circle);
  background: var(--panel-bg-color, var(--tps-panel-bg, currentColor));
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-panel input[type="range"].plg-collection-colors__hue::-moz-range-thumb {
  width: 14px;
  height: 14px;
  border-radius: var(--tps-radius-circle);
  background: var(--panel-bg-color, var(--tps-panel-bg, currentColor));
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-slider-value {
  font-family: var(--tps-font-mono);
  font-size: var(--tps-fs-value);
  color: var(--tps-text);
  text-align: right;
  font-variant-numeric: tabular-nums;
}

/* \u2500\u2500 Swatch + grid \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-swatch-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, var(--tps-swatch-size));
  gap: var(--tps-space-2) 6px;
}

.tps-swatch {
  width: var(--tps-swatch-size);
  height: var(--tps-swatch-size);
  border-radius: var(--tps-radius-circle);
  border: 0;
  padding: 0;
  cursor: pointer;
  outline: none;
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset);
  transition: transform var(--tps-dur-fast) var(--tps-ease-out),
              box-shadow var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-swatch:hover {
  transform: scale(1.1);
}

.tps-swatch[aria-pressed="true"] {
  box-shadow: 0 0 0 2px var(--tps-accent);
}

/* \u2500\u2500 List rows \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-list {
  display: flex;
  flex-direction: column;
}

.tps-list-header {
  display: grid;
  grid-template-columns: 18px 1fr auto;
  align-items: center;
  gap: var(--tps-space-3);
  padding: var(--tps-space-2) var(--tps-space-3);
  border-bottom: 1px solid var(--tps-divider);
  font-size: var(--tps-fs-list-header);
  font-weight: var(--tps-fw-bold);
  letter-spacing: var(--tps-ls-list);
  text-transform: uppercase;
  color: var(--tps-text-faint);
}

.tps-list-row {
  display: grid;
  grid-template-columns: 18px 1fr auto;
  align-items: center;
  gap: var(--tps-space-3);
  padding: var(--tps-space-2) var(--tps-space-3);
  border-bottom: 1px solid var(--tps-divider);
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-list-row:last-child {
  border-bottom: 0;
}

.tps-list-row:hover {
  background: var(--tps-bg-hover);
}

.tps-list-name {
  font-size: var(--tps-fs-label);
  color: var(--tps-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* \u2500\u2500 Keyboard shortcut rows (keyRow) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-key-name { min-width: 0; }

.tps-key-desc {
  font-size: var(--tps-fs-hint);
  color: var(--tps-text-muted);
  white-space: normal;
}

.tps-key-controls {
  display: inline-flex;
  align-items: center;
  gap: var(--tps-space-1);
}

.tps-key-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 110px;
  height: var(--tps-control-h-sm);
  padding: 0 var(--tps-space-3);
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Courier New", monospace;
  font-size: var(--tps-fs-button);
  color: var(--tps-text);
  background: var(--tps-bg-input);
  border: 1px solid var(--tps-divider);
  border-radius: var(--tps-radius-sm);
  cursor: pointer;
  transition: border-color var(--tps-dur-fast) var(--tps-ease-out),
              background-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-key-chip:hover { border-color: var(--tps-border); }

.tps-key-chip--unbound { color: var(--tps-text-faint); font-style: italic; }

.tps-key-chip[data-capturing="true"] {
  background: var(--tps-accent-soft);
  border-color: var(--tps-accent);
  color: var(--tps-accent);
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

.tps-key-clear {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--tps-control-h-sm);
  height: var(--tps-control-h-sm);
  padding: 0;
  font-size: var(--tps-fs-button);
  line-height: 1;
  color: var(--tps-text-muted);
  background: transparent;
  border: 1px solid transparent;
  border-radius: var(--tps-radius-sm);
  cursor: pointer;
}

.tps-key-clear:hover {
  color: var(--tps-text);
  background: var(--tps-bg-hover);
  border-color: var(--tps-divider);
}

.tps-key-chip:focus-visible,
.tps-key-clear:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

/* \u2500\u2500 Tabs / segmented control \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-tabs {
  display: inline-flex;
  align-items: center;
  gap: var(--tps-space-1);
  padding: 0;
}

.tps-tab {
  height: var(--tps-control-h-sm);
  padding: 0 var(--tps-space-2);
  font-family: inherit;
  font-size: var(--tps-fs-button);
  font-weight: var(--tps-fw-medium);
  color: var(--tps-text-muted);
  background: transparent;
  border: 1px solid transparent;
  border-radius: var(--tps-radius-sm);
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out),
              border-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-tab:hover {
  background: var(--tps-bg-hover);
  color: var(--tps-text);
}

.tps-tab[aria-pressed="true"],
.tps-tab[aria-selected="true"] {
  background: var(--tps-accent-soft);
  color: var(--tps-accent);
  border-color: color-mix(in srgb, var(--tps-accent) 50%, transparent);
}

/* \u2500\u2500 Buttons \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--tps-space-1);
  height: var(--tps-control-h-sm);
  padding: 0 var(--tps-space-3);
  font-family: inherit;
  font-size: var(--tps-fs-button);
  font-weight: var(--tps-fw-medium);
  border-radius: var(--tps-radius-sm);
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out),
              border-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-button--md { height: var(--tps-control-h-md); padding: 0 var(--tps-space-4); }

.tps-button--primary {
  background: var(--tps-accent);
  color: var(--tps-on-accent);
}

.tps-button--primary:hover {
  filter: brightness(1.08);
}

.tps-button--ghost {
  background: transparent;
  border-color: var(--tps-divider);
  color: var(--tps-text);
}

.tps-button--ghost:hover {
  background: var(--tps-bg-hover);
  border-color: var(--tps-border);
}

.tps-button--danger {
  background: transparent;
  border-color: var(--tps-divider);
  color: var(--tps-text-muted);
}

.tps-button--danger:hover {
  background: var(--tps-danger-soft);
  border-color: color-mix(in srgb, var(--tps-danger) 40%, transparent);
  color: var(--tps-danger);
}

/* \u2500\u2500 Focus rings (custom controls only \u2014 native inputs use accent-color) \u2500 */

.tps-tab:focus-visible,
.tps-button:focus-visible,
.tps-num-step:focus-visible,
.tps-num-reset:focus-visible,
.tps-swatch:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

/* \u2500\u2500 Inset card variant (rare \u2014 for palette-picker body, etc.) \u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-card {
  padding: var(--tps-space-3);
  border-radius: var(--tps-radius-lg);
  background: var(--tps-bg-input);
  border: 1px solid var(--tps-divider);
}
`;

  // ../../shared/settings-ui/color-field.css
  var color_field_default = `/*
 * colorField \u2014 shared color picker (Theme | Tailwind | Custom).
 * Scoped under .tps-panel .tps-color-field; styled through --tps-* tokens.
 * Every selectable swatch is the same .tps-cf-dot across all three tabs.
 */

.tps-panel .tps-color-field { display: block; }

/* \u2500\u2500 Tabs \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-tabs {
  display: grid; grid-auto-flow: column; grid-auto-columns: 1fr; gap: 4px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px);
  padding: 4px; margin-bottom: var(--tps-space-3, 12px);
}
.tps-panel .tps-cf-tab {
  cursor: pointer; border: 0; background: transparent;
  border-radius: var(--tps-radius-sm, 6px); padding: 8px 10px; font: inherit;
  font-size: var(--tps-fs-body, 13px); font-weight: var(--tps-fw-semibold, 600);
  color: var(--tps-text-muted, rgba(127,127,127,0.75));
  transition: background var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-tab:hover { color: var(--tps-text, inherit); }
.tps-panel .tps-cf-tab.is-active {
  background: var(--tps-panel-bg, var(--bg-default, #fff));
  color: var(--tps-text, inherit); box-shadow: 0 1px 2px rgba(0,0,0,0.12);
}

/* \u2500\u2500 Panes \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-pane { display: none; }
.tps-panel .tps-cf-pane.is-active { display: block; }

/* \u2500\u2500 Featured theme picks \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-featured {
  display: grid; grid-template-columns: 1fr 1fr; gap: 8px;
  margin-bottom: var(--tps-space-3, 12px);
}
.tps-panel .tps-cf-tile {
  display: flex; align-items: center; gap: 10px; width: 100%; text-align: left; cursor: pointer;
  background: var(--tps-bg-hover, rgba(127,127,127,0.04));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 10px 12px; color: var(--tps-text, inherit);
  transition: border-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              background var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-tile:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); }
.tps-panel .tps-cf-tile.is-sel {
  border-color: var(--tps-accent, currentColor);
  background: var(--tps-accent-soft, rgba(127,127,127,0.08));
}
.tps-panel .tps-cf-tile-dot {
  width: 22px; height: 22px; flex: 0 0 auto; border-radius: var(--tps-radius-sm, 6px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18));
}
.tps-panel .tps-cf-tile-label {
  font-size: var(--tps-fs-body, 13px); font-weight: var(--tps-fw-semibold, 600);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}

/* \u2500\u2500 Groups + the universal swatch dot \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-group { margin-bottom: var(--tps-space-3, 12px); }
.tps-panel .tps-cf-group-head { display: flex; align-items: baseline; gap: 8px; margin-bottom: var(--tps-space-2, 8px); }
.tps-panel .tps-cf-group-label {
  font-size: var(--tps-fs-section, 11px); letter-spacing: 0.06em; text-transform: uppercase;
  color: var(--tps-text-faint, var(--tps-text-muted, rgba(127,127,127,0.6))); font-weight: var(--tps-fw-semibold, 600);
}
.tps-panel .tps-cf-group-hint { font-size: var(--tps-fs-section, 11px); color: var(--tps-text-faint, rgba(127,127,127,0.5)); }

/* \u2500\u2500 Swatches: square dots that fill the row width (22 across in the Tailwind
 *    hue row); every swatch elsewhere matches that width. \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-dots {
  display: grid; grid-template-columns: repeat(22, minmax(0, 1fr)); gap: 5px;
  /* explicit resets so a stale accumulated .tps-cf-dots rule (old edge-to-edge
   * build injected an inset-ring outline) can't linger after a plugin reload. */
  border: 0; border-radius: 0; overflow: visible; box-shadow: none; background: none; padding: 0;
}
.tps-panel .tps-cf-dot {
  aspect-ratio: 1 / 1; min-width: 0; width: 100%; height: auto; border: 0; padding: 0; margin: 0;
  cursor: pointer; position: relative;
  border-radius: var(--tps-radius-sm, 6px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18));
  transition: transform var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              box-shadow var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-dot:hover { transform: scale(1.12); z-index: 3; }
.tps-panel .tps-cf-dot:focus-visible,
.tps-panel .tps-cf-dot.is-sel,
.tps-panel .tps-cf-dot.is-active {
  outline: none; z-index: 4;
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18)),
              0 0 0 2px var(--tps-panel-bg, #fff), 0 0 0 4px var(--tps-accent, currentColor);
}

/* \u2500\u2500 Lightness "tints": full-width ramp, shade number inside (do not touch) \u2500 */
.tps-panel .tps-cf-ramp {
  display: grid; grid-template-columns: repeat(11, minmax(0, 1fr));
  border-radius: var(--tps-radius-md, 8px); overflow: hidden;
  box-shadow: inset 0 0 0 1px var(--tps-border, rgba(127,127,127,0.14));
}
.tps-panel .tps-cf-ramp-cell {
  border: 0; padding: 0; cursor: pointer; height: 30px; position: relative;
  display: flex; align-items: center; justify-content: center;
  font-size: 9px; font-weight: var(--tps-fw-semibold, 600); font-variant-numeric: tabular-nums; letter-spacing: -0.02em;
  transition: box-shadow var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-ramp-cell:hover { z-index: 3; box-shadow: inset 0 0 0 2px color-mix(in srgb, var(--tps-panel-bg, #fff) 60%, transparent); }
.tps-panel .tps-cf-ramp-cell:focus-visible,
.tps-panel .tps-cf-ramp-cell.is-sel {
  outline: none; z-index: 4;
  box-shadow: inset 0 0 0 2px var(--tps-panel-bg, #fff), inset 0 0 0 4px var(--tps-accent, currentColor);
}
/* Faint secondary ring on the inverted ("invert lightness") mirror shade \u2014
   present alongside the prominent ring on the actually-selected shade. */
.tps-panel .tps-cf-ramp-cell.is-sel-mirror {
  z-index: 3;
  box-shadow: inset 0 0 0 2px var(--tps-panel-bg, #fff),
              inset 0 0 0 3px color-mix(in srgb, var(--tps-accent, currentColor) 42%, transparent);
}

/* \u2500\u2500 Invert-lightness toggle \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-invert {
  display: flex; align-items: center; gap: 8px; margin-top: var(--tps-space-3, 12px);
  cursor: pointer; font-size: var(--tps-fs-hint, 12px); color: var(--tps-text, inherit); font-weight: var(--tps-fw-medium, 500);
}
.tps-panel .tps-cf-invert-cb { margin: 0; cursor: pointer; accent-color: var(--tps-accent, currentColor); }
.tps-panel .tps-cf-invert-hint { color: var(--tps-text-faint, rgba(127,127,127,0.5)); font-weight: var(--tps-fw-regular, 400); }
/* Dimmed + non-interactive until a real, non-500 shade is picked (500 mirrors
   to itself, so inverting it is a no-op). */
.tps-panel .tps-cf-invert.is-disabled { opacity: 0.42; cursor: default; }
.tps-panel .tps-cf-invert.is-disabled .tps-cf-invert-cb { cursor: default; }

/* \u2500\u2500 Custom palette \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-custom-row { min-height: 30px; margin-bottom: var(--tps-space-3, 12px); }
.tps-panel .tps-cf-custom-empty {
  grid-column: 1 / -1; display: flex; align-items: center; padding: 0 10px; min-height: 30px;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-regular, 400); letter-spacing: 0;
  color: var(--tps-text-faint, rgba(127,127,127,0.55));
}
.tps-panel .tps-cf-custom-dot { cursor: grab; }
.tps-panel .tps-cf-custom-dot.is-dragging { opacity: 0.4; cursor: grabbing; }

.tps-panel .tps-cf-addrow { display: flex; align-items: center; gap: 8px; }
.tps-panel .tps-cf-remove {
  cursor: pointer; border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  background: var(--tps-bg-input, rgba(127,127,127,0.06)); color: var(--tps-text-muted, rgba(127,127,127,0.75));
  border-radius: var(--tps-radius-md, 8px); height: 32px; padding: 0 14px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-medium, 500);
}
.tps-panel .tps-cf-remove[hidden] { display: none; }
.tps-panel .tps-cf-remove:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-add {
  cursor: pointer; border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  background: var(--tps-bg-input, rgba(127,127,127,0.06)); color: var(--tps-text, inherit);
  border-radius: var(--tps-radius-md, 8px); height: 32px; padding: 0 14px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-semibold, 600);
}
.tps-panel .tps-cf-add:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); }
.tps-panel .tps-cf-custom-count {
  margin-left: auto; font-size: var(--tps-fs-section, 11px);
  color: var(--tps-text-faint, rgba(127,127,127,0.5)); font-variant-numeric: tabular-nums;
}

/* \u2500\u2500 Hex input \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-hexbox {
  display: inline-flex; align-items: center; gap: 8px; box-sizing: border-box; height: 32px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 0 8px 0 10px;
}
.tps-panel .tps-cf-hex-dot {
  width: 15px; height: 15px; border-radius: var(--tps-radius-sm, 5px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.22));
}
.tps-panel .tps-cf-hex-input {
  border: 0; background: transparent; outline: none;
  font-family: var(--tps-font-mono, ui-monospace, monospace);
  font-size: var(--tps-fs-hint, 12px); color: var(--tps-text, inherit); width: 84px;
  font-variant-numeric: tabular-nums;
}
.tps-panel .tps-cf-hex-input::placeholder { color: var(--tps-text-faint, rgba(127,127,127,0.5)); }

/* \u2500\u2500 Universal: No color \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-divider {
  height: 1px; margin: var(--tps-space-3, 12px) 0; background: var(--tps-divider, rgba(127,127,127,0.12));
}
.tps-panel .tps-cf-universal { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.tps-panel .tps-cf-none {
  display: inline-flex; align-items: center; gap: 7px; cursor: pointer; box-sizing: border-box; height: 32px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 0 12px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-medium, 500);
  color: var(--tps-text-muted, rgba(127,127,127,0.7));
}
.tps-panel .tps-cf-none:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-none.is-sel { border-color: var(--tps-accent, currentColor); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-none-sw {
  width: 15px; height: 15px; border-radius: 50%; position: relative; overflow: hidden;
  box-shadow: inset 0 0 0 1px var(--tps-border-strong, rgba(127,127,127,0.3));
}
.tps-panel .tps-cf-none-sw::after {
  content: ""; position: absolute; left: 50%; top: -3px; width: 1.5px; height: 21px;
  background: var(--tps-danger, #e2555f); transform: rotate(45deg);
}

/* \u2500\u2500 Instant tooltip (drawn by the component, not native title delay) \u2500\u2500\u2500 */
.tps-panel .tps-cf-tip {
  position: fixed; z-index: 2147483000; transform: translate(-50%, calc(-100% - 8px));
  padding: 3px 8px; border-radius: var(--tps-radius-sm, 5px);
  background: var(--tps-text, #1a1a1a); color: var(--tps-panel-bg, #fff);
  font-size: var(--tps-fs-section, 11px); font-weight: var(--tps-fw-medium, 500);
  line-height: 1.3; white-space: nowrap; pointer-events: none; opacity: 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.35);
}
.tps-panel .tps-cf-tip.is-visible { opacity: 1; }

@media (prefers-reduced-motion: reduce) {
  .tps-panel .tps-cf-dot,
  .tps-panel .tps-cf-tab,
  .tps-panel .tps-cf-tile,
  .tps-panel .tps-cf-remove { transition: none; }
}
`;

  // ../../shared/settings-ui/feedback.js
  var MAX_URL_LENGTH = 7600;
  function el(tag, props, ...children) {
    const node = document.createElement(tag);
    const dom = (
      /** @type {any} */
      node
    );
    if (props) {
      for (const k in props) {
        const v = props[k];
        if (v == null || v === false) continue;
        if (k === "class") node.className = v;
        else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2).toLowerCase(), v);
        else if (k in dom && typeof dom[k] !== "function") {
          try {
            dom[k] = v;
          } catch {
            node.setAttribute(k, v);
          }
        } else node.setAttribute(k, v === true ? "" : String(v));
      }
    }
    for (const c of children.flat(Infinity)) {
      if (c == null || c === false) continue;
      node.appendChild(c instanceof Node ? c : document.createTextNode(String(c)));
    }
    return node;
  }
  __name(el, "el");
  function versionFromConf(conf) {
    if (!conf || typeof conf !== "object") return "";
    if (typeof conf.version === "string" && conf.version) return conf.version;
    const custom = conf.custom;
    if (custom && typeof custom === "object") {
      const v = (
        /** @type {Record<string, unknown>} */
        custom.pluginVersion
      );
      if (typeof v === "string") return v;
    }
    return "";
  }
  __name(versionFromConf, "versionFromConf");
  async function collectSystemReport({ pluginName = "", pluginVersion = "", disabled = false, data } = {}) {
    const ua = navigator.userAgent || "";
    const lines = [];
    lines.push(`Plugin: ${pluginName} v${pluginVersion}${disabled ? " (kill switch: OFF)" : ""}`);
    lines.push(`App: ${/electron/i.test(ua) ? "Thymer desktop app (Electron)" : "Thymer web"}${location && location.host ? ` \xB7 ${location.host}` : ""}`);
    lines.push(`UA: ${ua}`);
    lines.push(`Platform: ${navigator.platform || "?"} \xB7 lang ${navigator.language || "?"} \xB7 tz ${Intl.DateTimeFormat().resolvedOptions().timeZone || "?"}`);
    const dpr = Math.round((window.devicePixelRatio || 1) * 100) / 100;
    lines.push(`Screen (css px): ${screen.width}x${screen.height} @${dpr}x (\u2248${Math.round(screen.width * dpr)}x${Math.round(screen.height * dpr)} device px) \xB7 viewport ${window.innerWidth}x${window.innerHeight}`);
    try {
      const dark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const themeClasses = Array.from(document.body.classList).filter((c) => /theme/i.test(c)).join(" ");
      lines.push(`Appearance: ${dark ? "dark" : "light"}${reducedMotion ? " \xB7 reduced-motion" : ""}${themeClasses ? ` \xB7 body: ${themeClasses}` : ""}`);
    } catch {
    }
    try {
      const bits = [];
      if (navigator.hardwareConcurrency) bits.push(`${navigator.hardwareConcurrency} cores`);
      const devMem = (
        /** @type {any} */
        navigator.deviceMemory
      );
      if (devMem) bits.push(devMem >= 8 ? `RAM \u22658GB (API cap)` : `~${devMem}GB RAM`);
      const heap = (
        /** @type {any} */
        performance.memory
      );
      if (heap && heap.usedJSHeapSize) bits.push(`JS heap ${Math.round(heap.usedJSHeapSize / 1048576)}MB of ${Math.round(heap.jsHeapSizeLimit / 1048576)}MB limit`);
      bits.push(navigator.onLine === false ? "OFFLINE" : "online");
      if (typeof performance.now === "function") bits.push(`session up ${Math.round(performance.now() / 6e4)}m`);
      lines.push(`System: ${bits.join(" \xB7 ")}`);
    } catch {
    }
    try {
      if (navigator.storage && typeof navigator.storage.estimate === "function") {
        const est = await navigator.storage.estimate();
        if (est && est.usage != null) {
          lines.push(`Storage: ${Math.round((est.usage || 0) / 1048576)}MB used${est.quota ? ` of ${Math.round(est.quota / 1048576)}MB quota` : ""}`);
        }
      }
    } catch {
    }
    try {
      if (data && typeof data.getAllGlobalPlugins === "function") {
        const plugins = await data.getAllGlobalPlugins();
        const listed = plugins.slice(0, 25).map((p) => {
          let name = "";
          let ver = "";
          try {
            name = p.getName?.() || "";
          } catch {
          }
          try {
            ver = versionFromConf(p.getConfiguration?.());
          } catch {
          }
          return ver ? `${name} v${ver}` : name;
        }).filter(Boolean);
        if (listed.length) {
          lines.push(`Global plugins, all installed (${plugins.length}): ${listed.join(", ")}${plugins.length > 25 ? ", \u2026" : ""}`);
        }
      }
      if (data && typeof /** @type {any} */
      data.getAllCollections === "function") {
        const collections = await /** @type {any} */
        data.getAllCollections();
        if (Array.isArray(collections)) lines.push(`Collection-level plugins: ${collections.length} (names withheld)`);
      }
    } catch {
    }
    return lines.join("\n");
  }
  __name(collectSystemReport, "collectSystemReport");
  function buildIssueUrl({ repository, description, discord, email, report }) {
    const repo = repository.replace(/\/+$/, "");
    const firstLine = description.split("\n")[0].trim();
    const title = `[bug] ${firstLine.length > 60 ? `${firstLine.slice(0, 57)}...` : firstLine}`;
    const bodyFor = /* @__PURE__ */ __name((desc2) => {
      const parts = [`**Describe the bug**

${desc2}`];
      if (discord || email) {
        const contact = [];
        if (discord) contact.push(`- Discord: ${discord}`);
        if (email) contact.push(`- Email: ${email}`);
        parts.push(`**Contact**

${contact.join("\n")}`);
      }
      parts.push(`**System report**

\`\`\`
${report}
\`\`\``);
      parts.push("_Screenshots: paste or drag images directly into this text box._");
      return parts.join("\n\n");
    }, "bodyFor");
    const urlFor = /* @__PURE__ */ __name((desc2) => `${repo}/issues/new?${new URLSearchParams({ title, body: bodyFor(desc2) })}`, "urlFor");
    let desc = description;
    let url = urlFor(desc);
    while (url.length > MAX_URL_LENGTH && desc.length > 200) {
      desc = `${desc.slice(0, Math.max(200, desc.length - 500)).trimEnd()}

[description truncated \u2014 URL length limit]`;
      url = urlFor(desc);
    }
    return url;
  }
  __name(buildIssueUrl, "buildIssueUrl");
  function openFeedbackDialog({ host, opener, pluginName = "", pluginVersion = "", repository = "", disabled = false, data } = {}) {
    const panelHost = host || /** @type {HTMLElement | null} */
    (opener ? opener.closest(".tps-panel") : null);
    if (!panelHost || !repository) return;
    if (panelHost.querySelector(".tps-feedback-overlay")) return;
    const reportPromise = collectSystemReport({ pluginName, pluginVersion, disabled, data });
    const discordInput = el("input", { class: "tps-feedback-input", type: "text", placeholder: "e.g. akaready", autocomplete: "off", spellcheck: "false" });
    const emailInput = el("input", { class: "tps-feedback-input", type: "email", placeholder: "e.g. you@example.com", autocomplete: "off", spellcheck: "false" });
    const descInput = el("textarea", { class: "tps-feedback-textarea", rows: "5", placeholder: "What happened? What did you expect instead?" });
    const reportPre = el("pre", { class: "tps-feedback-report" }, "Collecting\u2026");
    reportPromise.then((text) => {
      reportPre.textContent = text;
    }).catch(() => {
      reportPre.textContent = "Report unavailable.";
    });
    const fieldRow = /* @__PURE__ */ __name((label, field, extraClass) => el(
      "label",
      { class: `tps-feedback-field${extraClass ? ` ${extraClass}` : ""}` },
      el("span", { class: "tps-feedback-label" }, label),
      field
    ), "fieldRow");
    const prevOverflow = panelHost.style.overflow;
    const close = /* @__PURE__ */ __name(() => {
      overlay.remove();
      panelHost.style.overflow = prevOverflow;
      try {
        opener?.focus();
      } catch {
      }
    }, "close");
    const submit = /* @__PURE__ */ __name(async () => {
      const description = descInput.value.trim();
      if (!description) {
        descInput.setAttribute("aria-invalid", "true");
        descInput.focus();
        return;
      }
      let report = "";
      try {
        report = await reportPromise;
      } catch {
      }
      const url = buildIssueUrl({
        repository,
        description,
        discord: discordInput.value.trim(),
        email: emailInput.value.trim(),
        report
      });
      window.open(url, "_blank", "noopener");
      close();
    }, "submit");
    const card = el(
      "div",
      { class: "tps-feedback-card", role: "dialog", "aria-modal": "true", "aria-label": `Report a bug in ${pluginName}` },
      el(
        "div",
        { class: "tps-feedback-head" },
        el("h2", { class: "tps-feedback-title" }, "Report a bug"),
        el(
          "button",
          { type: "button", class: "tps-feedback-close", "aria-label": "Close", onClick: close },
          el("i", { class: "ti ti-x", "aria-hidden": "true" })
        )
      ),
      // Fixed short copy — no variable repo name, so each line stays on one line.
      el(
        "p",
        { class: "tps-feedback-hint" },
        "Opens a prefilled GitHub issue on the repo.",
        el("br"),
        "Please add relevant screenshots to the GitHub issue."
      ),
      fieldRow("Discord username (optional)", discordInput),
      fieldRow("Email (optional)", emailInput),
      fieldRow("What happened?", descInput, "tps-feedback-field--grow"),
      el(
        "details",
        { class: "tps-feedback-details" },
        el("summary", { class: "tps-feedback-summary" }, "System report (included with the issue)"),
        reportPre
      ),
      el(
        "div",
        { class: "tps-feedback-actions" },
        el("button", { type: "button", class: "tps-button tps-button--ghost", onClick: close }, "Cancel"),
        el("button", { type: "button", class: "tps-button tps-button--primary", onClick: submit }, "Open GitHub issue")
      )
    );
    const overlay = el("div", { class: "tps-feedback-overlay" }, card);
    overlay.addEventListener("mousedown", (e) => {
      if (e.target === overlay) close();
    });
    overlay.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        close();
      }
    });
    descInput.addEventListener("input", () => descInput.removeAttribute("aria-invalid"));
    panelHost.style.overflow = "hidden";
    overlay.style.top = `${panelHost.scrollTop}px`;
    overlay.style.height = `${panelHost.clientHeight}px`;
    panelHost.appendChild(overlay);
    descInput.focus();
  }
  __name(openFeedbackDialog, "openFeedbackDialog");

  // ../../shared/settings-ui/helpers.js
  var PANEL_CSS = tokens_default + "\n" + components_default + "\n" + color_field_default;
  function h(tag, props, ...children) {
    const el2 = document.createElement(tag);
    const dom = (
      /** @type {any} */
      el2
    );
    if (props) {
      for (const k in props) {
        const v = props[k];
        if (v == null || v === false) continue;
        if (k === "class" || k === "className") {
          el2.className = v;
        } else if (k === "style" && typeof v === "object") {
          Object.assign(el2.style, v);
        } else if (k === "dataset" && typeof v === "object") {
          for (const dk in v) el2.dataset[dk] = v[dk];
        } else if (k.startsWith("on") && typeof v === "function") {
          el2.addEventListener(k.slice(2).toLowerCase(), v);
        } else if (k in dom && typeof dom[k] !== "function") {
          try {
            dom[k] = v;
          } catch {
            el2.setAttribute(k, v);
          }
        } else {
          el2.setAttribute(k, v === true ? "" : String(v));
        }
      }
    }
    appendChildren(el2, children);
    return el2;
  }
  __name(h, "h");
  function appendChildren(parent, children) {
    for (const c of children) {
      if (c == null || c === false) continue;
      if (Array.isArray(c)) {
        appendChildren(parent, c);
        continue;
      }
      parent.appendChild(c instanceof Node ? c : document.createTextNode(String(c)));
    }
  }
  __name(appendChildren, "appendChildren");
  function panel({ pluginClass } = {}, children = []) {
    const cls = ["tps-panel", pluginClass].filter(Boolean).join(" ");
    const root = h("div", { class: cls }, ...children);
    restoreSectionState(root, pluginClass || "");
    return root;
  }
  __name(panel, "panel");
  function pluginHeader({
    title: heading,
    lede: ledeText,
    helper,
    helperOpen,
    helperDefaultOpen = false,
    onHelperToggle,
    icon = "",
    version = "1.0",
    author = "@akaready",
    homepage = "https://akaready.com",
    repository = "https://github.com/akaready",
    coffee = "https://buymeacoffee.com/akaready",
    killSwitch = null,
    feedback = null,
    scope = null
  }) {
    const iconClass = icon ? icon.startsWith("ti-") ? icon : `ti-${icon}` : "";
    const helperLines = normalizeHelperLines(helper);
    const fb = feedback ? {
      pluginName: (feedback === true ? "" : feedback.pluginName) || heading,
      pluginVersion: (feedback === true ? "" : feedback.pluginVersion) || version,
      repository: (feedback === true ? "" : feedback.repository) || repository,
      disabled: (feedback === true ? void 0 : feedback.disabled) ?? (killSwitch ? !killSwitch.on : false),
      data: feedback === true ? void 0 : feedback.data
    } : null;
    const children = [
      iconClass ? h(
        "div",
        { class: "tps-plugin-header-logo", "aria-hidden": "true" },
        h("i", { class: `ti ${iconClass} tps-plugin-header-logo-icon`, "aria-hidden": "true" })
      ) : null,
      h("h1", { class: "tps-plugin-header-title" }, heading),
      ledeText ? h("p", { class: "tps-plugin-header-lede" }, ledeText) : null,
      helperLines.length ? renderPluginHeaderHelper({
        lines: helperLines,
        defaultOpen: helperDefaultOpen,
        open: helperOpen,
        onToggle: onHelperToggle
      }) : null,
      h(
        "p",
        { class: "tps-plugin-header-attr" },
        h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("i", { class: "ti ti-link tps-plugin-header-icon", "aria-hidden": "true" }),
          h("a", {
            class: "tps-plugin-header-link tps-plugin-header-link--blue",
            href: homepage,
            target: "_blank",
            rel: "noopener noreferrer"
          }, author)
        ),
        h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("i", { class: "ti ti-coffee tps-plugin-header-icon", "aria-hidden": "true" }),
          h("a", {
            class: "tps-plugin-header-link tps-plugin-header-link--pink",
            href: coffee,
            target: "_blank",
            rel: "noopener noreferrer"
          }, "buy me a coffee")
        ),
        version ? h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("span", { class: "tps-plugin-header-icon tps-plugin-header-iconify tps-plugin-header-iconify-github", "aria-hidden": "true" }),
          h("a", { class: "tps-plugin-header-link tps-plugin-header-link--muted tps-plugin-header-version", href: repository, target: "_blank", rel: "noopener noreferrer" }, `v${version}`)
        ) : null,
        // Bug report sits with the attribution links (right of the version);
        // the far-right corner is reserved for state toggles (scope pill,
        // kill switch).
        fb ? renderFeedbackButton(fb) : null,
        killSwitch || scope ? h(
          "span",
          { class: "tps-plugin-header-controls" },
          scope ? scopeCluster(scope) : null,
          killSwitch ? renderKillSwitch(killSwitch) : null
        ) : null
      ),
      // Always rendered with a kill switch; CSS shows it only while the pill is
      // off, so it appears instantly on the optimistic flip with no re-render.
      killSwitch ? h(
        "p",
        { class: "tps-plugin-header-off-note" },
        "Plugin is off \u2014 settings stay editable and your changes apply when you switch it back on."
      ) : null
    ];
    return h("div", { class: "tps-plugin-header" }, ...children);
  }
  __name(pluginHeader, "pluginHeader");
  var SCOPE_SVG_NS = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">';
  function scopeSvgIcon(paths) {
    const wrap = h("span", { class: "tps-scope-svg", "aria-hidden": "true" });
    wrap.innerHTML = `${SCOPE_SVG_NS}${paths}</svg>`;
    return wrap;
  }
  __name(scopeSvgIcon, "scopeSvgIcon");
  function scopeCluster(scope) {
    const pill = h(
      "span",
      {
        class: "tps-scope-pill tooltip",
        "data-diverged": String(!!scope.diverged),
        "data-tooltip": scope.diverged ? "Custom settings for this device, saved automatically. Your other devices are unaffected." : "Using your shared defaults \u2014 the same on all your devices. Edits here apply to this device only.",
        "data-tooltip-dir": "top"
      },
      h("span", { class: "tps-scope-dot", "aria-hidden": "true" }),
      scope.diverged ? "This device" : "All devices"
    );
    if (!scope.diverged) {
      return h("span", { class: "tps-scope" }, pill);
    }
    const push = h("button", {
      type: "button",
      class: "tps-scope-btn tps-scope-btn--push tooltip",
      "data-tooltip": "Copy these settings to all my devices",
      "data-tooltip-dir": "top",
      "aria-label": "Copy these settings to all my devices",
      onClick: /* @__PURE__ */ __name((e) => {
        const btn = (
          /** @type {HTMLButtonElement} */
          e.currentTarget
        );
        if (btn.disabled) return;
        btn.disabled = true;
        try {
          scope.onPush();
        } catch {
          btn.disabled = false;
        }
      }, "onClick")
    }, scopeSvgIcon('<path d="M12 5v14"/><path d="M18 11l-6-6"/><path d="M6 11l6-6"/>'));
    let disarmTimer = 0;
    const discard = h("button", {
      type: "button",
      class: "tps-scope-btn tps-scope-btn--discard tooltip",
      "data-tooltip": "Reset this device to your shared defaults",
      "data-tooltip-dir": "top",
      "aria-label": "Reset this device to your shared defaults",
      onClick: /* @__PURE__ */ __name((e) => {
        const btn = (
          /** @type {HTMLButtonElement} */
          e.currentTarget
        );
        if (btn.getAttribute("data-armed") !== "true") {
          btn.setAttribute("data-armed", "true");
          btn.setAttribute("data-tooltip", "Tap again to reset this device");
          clearTimeout(disarmTimer);
          disarmTimer = window.setTimeout(() => {
            btn.removeAttribute("data-armed");
            btn.setAttribute("data-tooltip", "Reset this device to your shared defaults");
          }, 3e3);
          return;
        }
        clearTimeout(disarmTimer);
        try {
          scope.onDiscard();
        } catch {
        }
      }, "onClick")
    }, scopeSvgIcon('<path d="M9 14L5 10l4-4"/><path d="M5 10h11a4 4 0 1 1 0 8h-1"/>'));
    return h("span", { class: "tps-scope" }, pill, push, discard);
  }
  __name(scopeCluster, "scopeCluster");
  function renderFeedbackButton(fb) {
    return h("button", {
      type: "button",
      class: "tps-plugin-header-bug",
      title: "Report a bug",
      "aria-label": "Report a bug",
      onClick: /* @__PURE__ */ __name((e) => {
        const btn = (
          /** @type {HTMLElement} */
          e.currentTarget
        );
        openFeedbackDialog({
          host: (
            /** @type {HTMLElement | null} */
            btn.closest(".tps-panel")
          ),
          opener: btn,
          ...fb
        });
      }, "onClick")
    }, h("i", { class: "ti ti-bug", "aria-hidden": "true" }));
  }
  __name(renderFeedbackButton, "renderFeedbackButton");
  function renderKillSwitch(killSwitch) {
    const sw = h("button", {
      type: "button",
      class: "tps-switch",
      role: "switch",
      "aria-checked": String(!!killSwitch.on),
      "aria-label": killSwitch.label || "Plugin enabled",
      title: killSwitch.on ? "Plugin enabled \u2014 click to disable all of its effects" : "Plugin disabled \u2014 click to re-enable"
    }, h("span", { class: "tps-switch-knob" }));
    const unlock = /* @__PURE__ */ __name(() => {
      sw.removeAttribute("data-busy");
      sw.disabled = false;
    }, "unlock");
    sw.addEventListener("click", () => {
      if (sw.disabled) return;
      const nextOn = sw.getAttribute("aria-checked") !== "true";
      sw.setAttribute("aria-checked", String(nextOn));
      sw.setAttribute("data-busy", "");
      sw.disabled = true;
      setTimeout(unlock, 700);
      try {
        killSwitch.onToggle(nextOn);
      } catch {
        unlock();
        sw.setAttribute("aria-checked", String(!nextOn));
      }
    });
    return sw;
  }
  __name(renderKillSwitch, "renderKillSwitch");
  function normalizeHelperLines(helper) {
    if (!helper) return [];
    if (typeof helper === "string") {
      const text = helper.trim();
      return text ? [text] : [];
    }
    if (Array.isArray(helper)) {
      return helper.map((line) => String(line).trim()).filter(Boolean);
    }
    return [];
  }
  __name(normalizeHelperLines, "normalizeHelperLines");
  function renderPluginHeaderHelper({ lines, defaultOpen = false, open, onToggle }) {
    const initialOpen = open == null ? !!defaultOpen : !!open;
    const wrap = h("div", {
      class: "tps-plugin-header-helper-wrap",
      dataset: { open: String(initialOpen) }
    });
    const icon = h("i", { class: "ti ti-info-circle tps-plugin-header-helper-icon", "aria-hidden": "true" });
    const toggle = h("button", {
      type: "button",
      class: "tps-plugin-header-helper-toggle",
      "aria-expanded": String(initialOpen)
    }, icon, h("span", { class: "tps-plugin-header-helper-toggle-label" }, "Instructions"));
    const body = h(
      "div",
      { class: "tps-plugin-header-helper-body" },
      h("p", { class: "tps-plugin-header-helper-line" }, lines.join(" "))
    );
    const setOpen = /* @__PURE__ */ __name((nextOpen) => {
      wrap.dataset.open = String(nextOpen);
      toggle.setAttribute("aria-expanded", String(nextOpen));
      if (onToggle) onToggle(nextOpen);
    }, "setOpen");
    toggle.addEventListener("click", () => {
      setOpen(wrap.dataset.open !== "true");
    });
    body.addEventListener("click", () => {
      if (wrap.dataset.open === "true") setOpen(false);
    });
    wrap.appendChild(toggle);
    wrap.appendChild(body);
    return wrap;
  }
  __name(renderPluginHeaderHelper, "renderPluginHeaderHelper");
  function pluginHeaderFromConfig(conf, { version, helper, helperOpen, helperDefaultOpen, onHelperToggle, killSwitch, feedback, scope } = {}) {
    const resolvedHelper = helper ?? conf.instructions;
    return pluginHeader({
      title: conf.name || "",
      lede: conf.description,
      helper: resolvedHelper,
      helperOpen,
      helperDefaultOpen,
      onHelperToggle,
      icon: conf.icon,
      version: version ?? conf.version,
      author: conf.author,
      homepage: conf.homepage,
      repository: conf.repository,
      coffee: conf.coffee,
      killSwitch,
      feedback,
      scope
    });
  }
  __name(pluginHeaderFromConfig, "pluginHeaderFromConfig");
  var SECTION_STATE = (() => {
    const g = (
      /** @type {Record<string, any>} */
      /** @type {unknown} */
      globalThis
    );
    if (!g.__tpsSectionState) g.__tpsSectionState = /* @__PURE__ */ new Map();
    return (
      /** @type {Map<string, boolean>} */
      g.__tpsSectionState
    );
  })();
  function sectionStateKey(el2, key) {
    const scope = (
      /** @type {HTMLElement} */
      el2.dataset.sectionScope || ""
    );
    return scope + "::" + key;
  }
  __name(sectionStateKey, "sectionStateKey");
  function restoreSectionState(root, scope) {
    const nodes = root.querySelectorAll(".tps-section--collapsible[data-section-key]");
    for (const node of nodes) {
      const el2 = (
        /** @type {HTMLElement} */
        node
      );
      el2.dataset.sectionScope = scope;
      const key = el2.dataset.sectionKey || "";
      const remembered = SECTION_STATE.get(sectionStateKey(el2, key));
      if (remembered === void 0) continue;
      const apply = (
        /** @type {any} */
        el2._tpsSetOpen
      );
      if (typeof apply === "function") apply(remembered, true);
    }
  }
  __name(restoreSectionState, "restoreSectionState");
  function section({ label, hint, collapsible, defaultOpen = true, open, onToggle, persistKey, summary, body = [] }) {
    const bodyChildren = Array.isArray(body) ? body : [body];
    const bodyEl = h("div", { class: "tps-section-body" }, ...bodyChildren);
    if (!collapsible) {
      return h(
        "section",
        { class: "tps-section" },
        h("div", { class: "tps-section-label" }, label),
        hint ? h("p", { class: "tps-section-hint" }, hint) : null,
        bodyEl
      );
    }
    const initialOpen = open == null ? !!defaultOpen : !!open;
    const sectionEl = h("section", {
      class: "tps-section tps-section--collapsible",
      // `open` is the controlled form — a caller driving it owns the state, so
      // that case opts out of the remembered-state machinery entirely.
      dataset: open == null ? { open: String(initialOpen), sectionKey: persistKey || label } : { open: String(initialOpen) }
    });
    const chev = h("span", { class: "tps-section-chev", "aria-hidden": "true" }, "\u25B8");
    const labelEl = h("span", { class: "tps-section-label" }, label);
    const summaryEl = h("span", { class: "tps-section-summary" });
    const paintSummary = /* @__PURE__ */ __name((isOpen) => {
      summaryEl.replaceChildren();
      if (isOpen || summary == null) return;
      const content = typeof summary === "function" ? summary() : summary;
      if (content == null || content === "") return;
      if (typeof content === "string") summaryEl.textContent = content;
      else summaryEl.appendChild(content);
    }, "paintSummary");
    const setOpen = /* @__PURE__ */ __name((nextOpen, restoring) => {
      sectionEl.dataset.open = String(nextOpen);
      header.setAttribute("aria-expanded", String(nextOpen));
      paintSummary(nextOpen);
      if (!restoring && sectionEl.dataset.sectionKey != null) {
        SECTION_STATE.set(sectionStateKey(sectionEl, sectionEl.dataset.sectionKey), nextOpen);
      }
      if (onToggle) onToggle(nextOpen);
    }, "setOpen");
    sectionEl._tpsSetOpen = setOpen;
    const header = h("button", {
      type: "button",
      class: "tps-section-header",
      "aria-expanded": String(initialOpen),
      onClick: /* @__PURE__ */ __name(() => setOpen(sectionEl.dataset.open !== "true"), "onClick")
    }, chev, labelEl, summaryEl);
    paintSummary(initialOpen);
    sectionEl.appendChild(header);
    if (hint) sectionEl.appendChild(h("p", { class: "tps-section-hint" }, hint));
    sectionEl.appendChild(bodyEl);
    return sectionEl;
  }
  __name(section, "section");
  function optionRow({ type = "checkbox", name, value, label, desc, checked, onChange }) {
    const input = h("input", {
      type,
      name,
      value,
      checked: !!checked,
      onChange: onChange ? (e) => onChange(e) : null
    });
    const labelEl = h("span", { class: "tps-opt-label" }, label);
    const descEl = desc ? h("span", { class: "tps-opt-desc" }, desc) : null;
    return h("label", { class: "tps-opt" }, input, labelEl, descEl);
  }
  __name(optionRow, "optionRow");
  function tabs({ options, value, onChange, multiSelect = false }) {
    const isActive = /* @__PURE__ */ __name((v) => multiSelect ? Array.isArray(value) && value.includes(v) : value === v, "isActive");
    return h(
      "div",
      { class: "tps-tabs", role: "tablist" },
      ...options.map((opt) => h("button", {
        type: "button",
        class: "tps-tab",
        role: "tab",
        "aria-pressed": String(isActive(opt.value)),
        onClick: /* @__PURE__ */ __name(() => {
          if (!onChange) return;
          if (multiSelect) {
            const cur = Array.isArray(value) ? value.slice() : [];
            const i = cur.indexOf(opt.value);
            if (i >= 0) cur.splice(i, 1);
            else cur.push(opt.value);
            onChange(cur);
          } else {
            onChange(opt.value);
          }
        }, "onClick")
      }, opt.label))
    );
  }
  __name(tabs, "tabs");
  function button({ label, variant = "ghost", size = "sm", onClick, disabled }) {
    const cls = ["tps-button", `tps-button--${variant}`];
    if (size === "md") cls.push("tps-button--md");
    return h("button", {
      type: "button",
      class: cls.join(" "),
      disabled: !!disabled,
      onClick
    }, label);
  }
  __name(button, "button");

  // ../../shared/plugin-version.js
  var CONFIG_WRITE_QUEUES_KEY = "__tpsPluginConfigWriteQueues";
  function configWriteIdentity(plugin) {
    let workspace = "default";
    try {
      workspace = plugin.getWorkspaceGuid?.() || "default";
    } catch {
    }
    let guid = "";
    try {
      guid = plugin.getGuid?.() || plugin.collection?.getGuid?.() || "";
    } catch {
    }
    let name = "plugin";
    try {
      name = plugin.getConfiguration?.()?.name || "plugin";
    } catch {
    }
    return `${workspace}/${guid || name}`;
  }
  __name(configWriteIdentity, "configWriteIdentity");
  function queuePluginConfigWrite(plugin, task) {
    let queues;
    try {
      const root = (
        /** @type {any} */
        globalThis
      );
      if (!(root[CONFIG_WRITE_QUEUES_KEY] instanceof Map)) root[CONFIG_WRITE_QUEUES_KEY] = /* @__PURE__ */ new Map();
      queues = root[CONFIG_WRITE_QUEUES_KEY];
    } catch {
      return Promise.resolve().then(task);
    }
    const key = configWriteIdentity(plugin);
    const prior = queues.get(key) || Promise.resolve();
    const result = prior.then(task, task);
    const tail = result.then(() => void 0, () => void 0);
    queues.set(key, tail);
    void tail.then(() => {
      if (queues.get(key) === tail) queues.delete(key);
    });
    return result;
  }
  __name(queuePluginConfigWrite, "queuePluginConfigWrite");
  function readPluginVersion(conf, fallback = "0.0.1") {
    if (!conf || typeof conf !== "object") return fallback;
    if (typeof conf.version === "string" && conf.version) return conf.version;
    const custom = (
      /** @type {Record<string, unknown> | undefined} */
      conf.custom
    );
    if (custom && typeof custom === "object" && typeof custom.pluginVersion === "string" && custom.pluginVersion) {
      return custom.pluginVersion;
    }
    return fallback;
  }
  __name(readPluginVersion, "readPluginVersion");
  function configWithPluginVersion(conf, customPatch, pluginVersion) {
    const base = conf && typeof conf === "object" ? conf : {};
    const custom = base.custom && typeof base.custom === "object" ? base.custom : {};
    return {
      ...base,
      version: pluginVersion,
      custom: {
        ...custom,
        ...customPatch,
        pluginVersion
      }
    };
  }
  __name(configWithPluginVersion, "configWithPluginVersion");
  async function resolveConfigApi(plugin) {
    if (!plugin) return null;
    if (typeof plugin.saveConfiguration === "function") return plugin;
    try {
      const data = plugin.data;
      const guid = typeof plugin.getGuid === "function" && plugin.getGuid() || plugin.collection && typeof plugin.collection.getGuid === "function" && plugin.collection.getGuid() || null;
      if (guid && data && typeof data.getPluginByGuid === "function") {
        const byGuid = data.getPluginByGuid(guid);
        if (byGuid && typeof byGuid.saveConfiguration === "function") return byGuid;
      }
      if (guid && data && typeof data.getAllCollections === "function") {
        const all = await data.getAllCollections();
        const found = (all || []).find((c) => c && typeof c.getGuid === "function" && c.getGuid() === guid);
        if (found && typeof found.saveConfiguration === "function") return found;
      }
      if (data && typeof data.getAllGlobalPlugins === "function") {
        const all = await data.getAllGlobalPlugins();
        const name = plugin.getConfiguration?.()?.name;
        const found = all.find((p) => p && typeof p.getGuid === "function" && p.getGuid() === guid) || (name ? all.find((p) => p && typeof p.getName === "function" && p.getName() === name) : null);
        if (found && typeof found.saveConfiguration === "function") return found;
      }
    } catch {
    }
    return null;
  }
  __name(resolveConfigApi, "resolveConfigApi");
  async function syncPluginVersionOnLoad(plugin, pluginVersion, customPatch = {}) {
    return queuePluginConfigWrite(plugin, () => syncPluginVersionOnLoadNow(plugin, pluginVersion, customPatch));
  }
  __name(syncPluginVersionOnLoad, "syncPluginVersionOnLoad");
  async function syncPluginVersionOnLoadNow(plugin, pluginVersion, customPatch = {}) {
    const api = await resolveConfigApi(plugin);
    if (!api) return;
    let conf = {};
    try {
      conf = api.getConfiguration?.() || plugin.getConfiguration?.() || {};
    } catch {
      return;
    }
    if (typeof conf.name !== "string" || !conf.name.trim()) return;
    const custom = conf.custom && typeof conf.custom === "object" ? { .../** @type {Record<string, unknown>} */
    conf.custom, ...customPatch } : { ...customPatch };
    if (readPluginVersion(conf, "") === pluginVersion) return;
    try {
      let ws = "default";
      try {
        ws = plugin.getWorkspaceGuid?.() || "default";
      } catch {
      }
      const guardKey = `tps-version-synced/${ws}/${conf.name}`;
      if (sessionStorage.getItem(guardKey) === pluginVersion) return;
      sessionStorage.setItem(guardKey, pluginVersion);
    } catch {
    }
    try {
      await api.saveConfiguration(configWithPluginVersion(conf, custom, pluginVersion));
    } catch {
    }
  }
  __name(syncPluginVersionOnLoadNow, "syncPluginVersionOnLoadNow");
  async function healPluginIdentity(plugin, identity) {
    return queuePluginConfigWrite(plugin, () => healPluginIdentityNow(plugin, identity));
  }
  __name(healPluginIdentity, "healPluginIdentity");
  async function healPluginIdentityNow(plugin, identity) {
    if (!identity || typeof identity.name !== "string" || !identity.name.trim()) return;
    const STUB_NAMES = ["New Global Plugin", "New Collection", "My Global Plugin"];
    const api = await resolveConfigApi(plugin);
    if (!api) return;
    let conf = {};
    try {
      conf = api.getConfiguration?.() || plugin.getConfiguration?.() || {};
    } catch {
      return;
    }
    if (conf.ver === void 0 && conf.custom === void 0) return;
    const hasStubName = typeof conf.name !== "string" || !conf.name.trim() || STUB_NAMES.includes(conf.name.trim());
    const staleRepo = !!identity.sourceRepo && Array.isArray(identity.legacySourceRepos) && identity.legacySourceRepos.includes(
      /** @type {string} */
      conf.__source_repo
    );
    const missingRepo = !!identity.sourceRepo && (conf.__source_repo === void 0 || staleRepo);
    if (!hasStubName && !missingRepo) return;
    try {
      let ws = "default";
      try {
        ws = plugin.getWorkspaceGuid?.() || "default";
      } catch {
      }
      const guardKey = `tps-identity-healed/${ws}/${identity.name}`;
      if (sessionStorage.getItem(guardKey) === "1") return;
      sessionStorage.setItem(guardKey, "1");
    } catch {
    }
    const next = { ...conf };
    if (hasStubName) {
      next.name = identity.name;
      if (identity.icon) next.icon = identity.icon;
      if (identity.description) next.description = identity.description;
    }
    if (missingRepo) {
      next.__source_repo = identity.sourceRepo;
      if (conf.__source_files === void 0 && identity.sourceFiles) {
        next.__source_files = { ...identity.sourceFiles };
      }
    }
    try {
      await api.saveConfiguration(next);
    } catch {
    }
  }
  __name(healPluginIdentityNow, "healPluginIdentityNow");

  // ../../shared/plugin-kill-switch.js
  var MARKER_SYNC_HORIZON_MS = 9e4;
  function isPluginDisabled(conf) {
    if (!conf || typeof conf !== "object") return false;
    const custom = conf.custom;
    return !!(custom && typeof custom === "object" && /** @type {Record<string, unknown>} */
    custom.pluginDisabled === true);
  }
  __name(isPluginDisabled, "isPluginDisabled");
  function markerKey(plugin) {
    let ws = "default";
    try {
      ws = plugin.getWorkspaceGuid?.() || "default";
    } catch {
    }
    let name = "plugin";
    try {
      name = plugin.getConfiguration?.()?.name || "plugin";
    } catch {
    }
    return `tps-kill-switch/${ws}/${name}`;
  }
  __name(markerKey, "markerKey");
  function writeKillSwitchMarker(plugin, disabled) {
    try {
      localStorage.setItem(markerKey(plugin), JSON.stringify({ disabled, ts: Date.now() }));
    } catch {
    }
  }
  __name(writeKillSwitchMarker, "writeKillSwitchMarker");
  function clearKillSwitchMarker(plugin) {
    try {
      localStorage.removeItem(markerKey(plugin));
    } catch {
    }
  }
  __name(clearKillSwitchMarker, "clearKillSwitchMarker");
  function readKillSwitch(plugin) {
    let conf = {};
    try {
      conf = plugin.getConfiguration?.() || {};
    } catch {
    }
    const confDisabled = isPluginDisabled(conf);
    try {
      const raw = localStorage.getItem(markerKey(plugin));
      if (raw) {
        const marker = JSON.parse(raw);
        if (marker && typeof marker.disabled === "boolean") {
          if (marker.disabled === confDisabled) {
            clearKillSwitchMarker(plugin);
            return confDisabled;
          }
          if (Date.now() - (Number(marker.ts) || 0) < MARKER_SYNC_HORIZON_MS) {
            return marker.disabled;
          }
          clearKillSwitchMarker(plugin);
        }
      }
    } catch {
    }
    return confDisabled;
  }
  __name(readKillSwitch, "readKillSwitch");
  async function setPluginDisabled(plugin, disabled, pluginVersion, customPatch = {}) {
    return queuePluginConfigWrite(plugin, () => setPluginDisabledNow(plugin, disabled, pluginVersion, customPatch));
  }
  __name(setPluginDisabled, "setPluginDisabled");
  async function setPluginDisabledNow(plugin, disabled, pluginVersion, customPatch) {
    const api = await resolveConfigApi(plugin);
    if (!api) return false;
    let conf = {};
    try {
      conf = api.getConfiguration?.() || plugin.getConfiguration?.() || {};
    } catch {
      return false;
    }
    if (typeof conf.name !== "string" || !conf.name.trim()) return false;
    const custom = conf.custom && typeof conf.custom === "object" ? (
      /** @type {Record<string, unknown>} */
      conf.custom
    ) : {};
    const resolvedPatch = typeof customPatch === "function" ? customPatch(custom) : customPatch;
    const patch = resolvedPatch && typeof resolvedPatch === "object" ? resolvedPatch : {};
    if (!Object.keys(patch).length && readKillSwitch(plugin) === disabled && isPluginDisabled(conf) === disabled) return true;
    writeKillSwitchMarker(plugin, disabled);
    try {
      const result = await api.saveConfiguration(configWithPluginVersion(conf, { ...patch, pluginDisabled: disabled }, pluginVersion));
      if (result === false) throw new Error("Thymer rejected the config save.");
      return true;
    } catch {
      clearKillSwitchMarker(plugin);
      return false;
    }
  }
  __name(setPluginDisabledNow, "setPluginDisabledNow");

  // ../../shared/plugin-settings.js
  function createSettingsStore(plugin, {
    slug,
    key = "settings",
    version,
    normalize = /* @__PURE__ */ __name((raw) => raw && typeof raw === "object" ? raw : {}, "normalize"),
    scopeKey = null,
    readSynced = null,
    pickSynced = null
  }) {
    const readBag = readSynced || ((custom) => custom?.[key]);
    const pickSyncedSubset = pickSynced || ((s) => s);
    let current = {};
    let dirty = false;
    let editRevision = 0;
    let localUnavailable = false;
    let restoredFromMirror = false;
    let writeChain = Promise.resolve();
    let flushTimer = null;
    let settleTimer = null;
    const fnv1a = /* @__PURE__ */ __name((s) => {
      let h2 = 2166136261;
      for (let i = 0; i < s.length; i++) {
        h2 ^= s.charCodeAt(i);
        h2 = Math.imul(h2, 16777619);
      }
      return (h2 >>> 0).toString(36);
    }, "fnv1a");
    const deviceIdentityParts = /* @__PURE__ */ __name(() => {
      try {
        const n = (
          /** @type {any} */
          typeof navigator !== "undefined" ? navigator : {}
        );
        const ua = String(n.userAgent || "");
        const isApp = /electron/i.test(ua);
        const os = /android/i.test(ua) ? "android" : /iphone|ipad|ios/i.test(ua) ? "ios" : /linux/i.test(ua) ? "linux" : /mac|darwin/i.test(ua) ? "mac" : /win/i.test(ua) ? "win" : "x";
        return { n, ua, isApp, os };
      } catch {
        return { n: {}, ua: "", isApp: false, os: "x" };
      }
    }, "deviceIdentityParts");
    const identity = deviceIdentityParts();
    const legacyDeviceKey = `${identity.isApp ? "app" : "web"}-${identity.os}-${fnv1a(`${identity.ua}|${identity.n.platform || ""}|${identity.n.language || ""}`)}`;
    const stableFingerprint = `${identity.isApp ? "app" : "web"}-${identity.os}-${fnv1a(`${String(identity.ua).replace(/\d+(?:[._]\d+)*/g, "#")}|${identity.n.platform || ""}|${identity.n.language || ""}`)}`;
    const persistentDeviceKey = /* @__PURE__ */ __name(() => {
      const storageKey = "tps-settings-device-id";
      try {
        const existing = localStorage.getItem(storageKey);
        if (existing && /^device-[a-z0-9-]+$/i.test(existing)) return existing;
        let id = "";
        try {
          id = `device-${crypto.randomUUID()}`;
        } catch {
        }
        if (!id) id = `device-${fnv1a(`${Date.now()}|${Math.random()}|${stableFingerprint}`)}`;
        localStorage.setItem(storageKey, id);
        if (localStorage.getItem(storageKey) === id) return id;
      } catch {
      }
      return stableFingerprint;
    }, "persistentDeviceKey");
    const deviceKey = persistentDeviceKey();
    const asMap = /* @__PURE__ */ __name((bag) => {
      if (bag && typeof bag === "object" && bag.byDevice && typeof bag.byDevice === "object") {
        return {
          shared: bag.shared,
          byDevice: { ...bag.byDevice },
          aliases: bag.aliases && typeof bag.aliases === "object" ? { ...bag.aliases } : {}
        };
      }
      if (bag && typeof bag === "object" && Object.keys(bag).length) {
        return { shared: bag, byDevice: {}, aliases: {} };
      }
      return { shared: void 0, byDevice: {}, aliases: {} };
    }, "asMap");
    const readCustom = /* @__PURE__ */ __name(() => {
      try {
        const conf = plugin.getConfiguration?.();
        const custom = conf && conf.custom;
        return custom && typeof custom === "object" ? (
          /** @type {Record<string, unknown>} */
          custom
        ) : {};
      } catch {
        return {};
      }
    }, "readCustom");
    const resolveDeviceSlotKey = /* @__PURE__ */ __name((m) => {
      if (Object.prototype.hasOwnProperty.call(m.byDevice, deviceKey)) return deviceKey;
      const aliased = m.aliases[stableFingerprint];
      if (aliased && Object.prototype.hasOwnProperty.call(m.byDevice, aliased)) return aliased;
      if (Object.prototype.hasOwnProperty.call(m.byDevice, stableFingerprint)) return stableFingerprint;
      if (Object.prototype.hasOwnProperty.call(m.byDevice, legacyDeviceKey)) return legacyDeviceKey;
      return null;
    }, "resolveDeviceSlotKey");
    const readSyncedDevice = /* @__PURE__ */ __name((custom) => {
      const m = asMap(readBag(custom));
      const slotKey = resolveDeviceSlotKey(m);
      if (slotKey) return m.byDevice[slotKey];
      return m.shared ?? null;
    }, "readSyncedDevice");
    const prune = /* @__PURE__ */ __name((m) => {
      const out = { byDevice: m.byDevice };
      if (m.shared !== void 0) out.shared = m.shared;
      if (Object.keys(m.aliases).length) out.aliases = m.aliases;
      return out;
    }, "prune");
    const buildDevicePatch = /* @__PURE__ */ __name((custom, subset) => {
      const m = asMap(readBag(custom));
      m.byDevice[deviceKey] = subset;
      m.aliases[stableFingerprint] = deviceKey;
      return { [key]: prune(m) };
    }, "buildDevicePatch");
    const buildAllPatch = /* @__PURE__ */ __name((custom, subset) => {
      const m = asMap(readBag(custom));
      m.shared = subset;
      for (const k of Object.keys(m.byDevice)) m.byDevice[k] = subset;
      m.byDevice[deviceKey] = subset;
      m.aliases[stableFingerprint] = deviceKey;
      return { [key]: prune(m) };
    }, "buildAllPatch");
    const buildResetPatch = /* @__PURE__ */ __name((custom) => {
      const m = asMap(readBag(custom));
      const resolved = resolveDeviceSlotKey(m);
      if (resolved) delete m.byDevice[resolved];
      delete m.byDevice[deviceKey];
      delete m.byDevice[stableFingerprint];
      delete m.byDevice[legacyDeviceKey];
      delete m.aliases[stableFingerprint];
      return { [key]: prune(m) };
    }, "buildResetPatch");
    const normalizedStringify = /* @__PURE__ */ __name((raw) => JSON.stringify(normalize(raw)), "normalizedStringify");
    const workspaceGuid = /* @__PURE__ */ __name(() => {
      try {
        return String(plugin.getWorkspaceGuid?.() || "") || "default";
      } catch {
        return "default";
      }
    }, "workspaceGuid");
    const scope = /* @__PURE__ */ __name(() => {
      if (!scopeKey) return "";
      try {
        return `/${String(scopeKey() || "scope")}`;
      } catch {
        return "/scope";
      }
    }, "scope");
    const cacheKey = /* @__PURE__ */ __name(() => `${slug}/${workspaceGuid()}${scope()}/${deviceKey}/cache`, "cacheKey");
    const legacyCacheKey = /* @__PURE__ */ __name(() => `${slug}/${workspaceGuid()}${scope()}/${legacyDeviceKey}/cache`, "legacyCacheKey");
    const readCache = /* @__PURE__ */ __name(() => {
      try {
        const raw = localStorage.getItem(cacheKey()) ?? localStorage.getItem(legacyCacheKey());
        if (raw === null) return null;
        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === "object" ? parsed : null;
      } catch {
        return null;
      }
    }, "readCache");
    const writeCache = /* @__PURE__ */ __name((value) => {
      try {
        const keyName = cacheKey();
        localStorage.setItem(keyName, value);
        if (localStorage.getItem(keyName) !== value) throw new Error("localStorage read-back mismatch");
        localUnavailable = false;
        return true;
      } catch {
        localUnavailable = true;
        return false;
      }
    }, "writeCache");
    const clearCache = /* @__PURE__ */ __name(() => {
      try {
        localStorage.removeItem(cacheKey());
        localStorage.removeItem(legacyCacheKey());
      } catch {
      }
    }, "clearCache");
    const mirrorKey = /* @__PURE__ */ __name(() => `${slug}/${workspaceGuid()}${scope()}/mirror`, "mirrorKey");
    const readMirror = /* @__PURE__ */ __name(() => {
      try {
        const raw = localStorage.getItem(mirrorKey());
        if (raw === null) return null;
        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === "object" ? parsed : null;
      } catch {
        return null;
      }
    }, "readMirror");
    const writeMirror = /* @__PURE__ */ __name((bag) => {
      try {
        const m = asMap(bag);
        if (m.shared === void 0 && !Object.keys(m.byDevice).length) return;
        localStorage.setItem(mirrorKey(), JSON.stringify(prune(m)));
      } catch {
      }
    }, "writeMirror");
    const recoveryFlagKey = /* @__PURE__ */ __name(() => `tps-settings-recovered/${slug}/${workspaceGuid()}${scope()}`, "recoveryFlagKey");
    const recoveryAttempted = /* @__PURE__ */ __name(() => {
      try {
        return sessionStorage.getItem(recoveryFlagKey()) === "1";
      } catch {
        return false;
      }
    }, "recoveryAttempted");
    const markRecoveryAttempted = /* @__PURE__ */ __name(() => {
      try {
        sessionStorage.setItem(recoveryFlagKey(), "1");
      } catch {
      }
    }, "markRecoveryAttempted");
    const bagIsAbsent = /* @__PURE__ */ __name((custom) => {
      const bag = readBag(custom);
      if (!bag || typeof bag !== "object") return true;
      const m = asMap(bag);
      return m.shared === void 0 && !Object.keys(m.byDevice).length;
    }, "bagIsAbsent");
    const saveCustomNow = /* @__PURE__ */ __name(async (buildPatch) => {
      try {
        const api = await resolveConfigApi(plugin);
        if (!api || typeof api.saveConfiguration !== "function") return false;
        let conf = {};
        try {
          conf = api.getConfiguration?.() || plugin.getConfiguration?.() || {};
        } catch {
          return false;
        }
        if (typeof conf.name !== "string" || !conf.name.trim()) return false;
        const custom = conf.custom && typeof conf.custom === "object" ? conf.custom : {};
        const patch = buildPatch(custom);
        const patchKeys = Object.keys(patch);
        if (!patchKeys.length) return true;
        const converged = patchKeys.every((patchKey) => patchKey === key ? bagConverged(custom[key], patch[key]) : JSON.stringify(custom[patchKey]) === JSON.stringify(patch[patchKey]));
        if (converged) {
          if (patch[key] !== void 0) writeMirror(patch[key]);
          return true;
        }
        const result = await api.saveConfiguration(configWithPluginVersion(conf, patch, version));
        if (result === false) return false;
        if (patch[key] !== void 0) writeMirror(patch[key]);
        return true;
      } catch {
        return false;
      }
    }, "saveCustomNow");
    const saveCustom = /* @__PURE__ */ __name((buildPatch) => {
      const run = /* @__PURE__ */ __name(() => queuePluginConfigWrite(plugin, () => saveCustomNow(buildPatch)), "run");
      const result = writeChain.then(run, run);
      writeChain = result.then(() => void 0, () => void 0);
      return result;
    }, "saveCustom");
    const bagConverged = /* @__PURE__ */ __name((a, b) => {
      const ma = asMap(a);
      const mb = asMap(b);
      if (normalizedStringify(ma.shared || {}) !== normalizedStringify(mb.shared || {})) return false;
      const keys = /* @__PURE__ */ new Set([...Object.keys(ma.byDevice), ...Object.keys(mb.byDevice)]);
      for (const k of keys) {
        if (normalizedStringify(ma.byDevice[k] || {}) !== normalizedStringify(mb.byDevice[k] || {})) return false;
      }
      if (JSON.stringify(Object.entries(ma.aliases).sort()) !== JSON.stringify(Object.entries(mb.aliases).sort())) return false;
      return true;
    }, "bagConverged");
    const FLUSH_DELAY_MS = 4e3;
    const cancelFlush = /* @__PURE__ */ __name(() => {
      if (flushTimer) {
        clearTimeout(flushTimer);
        flushTimer = null;
      }
    }, "cancelFlush");
    const flushDevice = /* @__PURE__ */ __name(async () => {
      cancelFlush();
      if (!dirty) return true;
      const revision = editRevision;
      const subset = pickSyncedSubset(normalize(current));
      const ok = await saveCustom((custom) => buildDevicePatch(custom, subset));
      if (ok && editRevision === revision) {
        dirty = false;
        clearCache();
      } else if (dirty) scheduleFlush();
      return ok;
    }, "flushDevice");
    const scheduleFlush = /* @__PURE__ */ __name(() => {
      cancelFlush();
      flushTimer = setTimeout(() => {
        flushTimer = null;
        void flushDevice();
      }, FLUSH_DELAY_MS);
    }, "scheduleFlush");
    const store = {
      /**
       * Read this device's settings from the synced config. A localStorage cache
       * that differs (an edit not yet flushed before a crash/reload) wins and is
       * re-flushed. Read-only w.r.t. the synced config.
       */
      load() {
        if (dirty) return { settings: current, diverged: this.isDiverged() };
        let custom = readCustom();
        if (bagIsAbsent(custom)) {
          const mirrored = readMirror();
          if (mirrored && !recoveryAttempted()) {
            markRecoveryAttempted();
            restoredFromMirror = true;
            void saveCustomNow(() => ({ [key]: prune(asMap(mirrored)) }));
            custom = { ...custom, [key]: prune(asMap(mirrored)) };
          }
        }
        const synced = normalize(readSyncedDevice(custom) || {});
        const cached = readCache();
        if (cached && normalizedStringify(cached) !== JSON.stringify(synced)) {
          current = normalize(cached);
          dirty = true;
          scheduleFlush();
        } else {
          current = synced;
          dirty = false;
          writeMirror(readBag(custom));
          if (cached) clearCache();
          const resolved = resolveDeviceSlotKey(asMap(readBag(custom)));
          if (resolved && resolved !== deviceKey) {
            dirty = true;
            editRevision += 1;
            if (writeCache(JSON.stringify(current))) scheduleFlush();
            else void flushDevice();
          }
        }
        return { settings: current, diverged: this.isDiverged() };
      },
      get() {
        return current;
      },
      /** This device's settings differ from the shared baseline (informational). */
      isDiverged() {
        const shared = asMap(readBag(readCustom())).shared;
        return normalizedStringify(shared || {}) !== JSON.stringify(normalize(current));
      },
      /** True when the immediate recovery journal could not be verified. */
      isLocalUnavailable() {
        return localUnavailable;
      },
      /**
       * True when this load found the synced settings gone and rebuilt them from
       * the durable local mirror. Worth surfacing to the user — a silent recovery
       * hides that something wiped their config, and they should know to check
       * whatever did it.
       */
      wasRestoredFromMirror() {
        return restoredFromMirror;
      },
      /**
       * Lossless migration/recovery entry point. The normalized value is journaled
       * through the store's real cache key and retried to synced config; callers
       * never need to know or recreate that private key.
       */
      recover(raw) {
        const next = normalize(raw);
        const synced = normalize(readSyncedDevice(readCustom()) || {});
        if (JSON.stringify(next) === JSON.stringify(synced)) return false;
        current = next;
        dirty = true;
        editRevision += 1;
        if (writeCache(JSON.stringify(current))) scheduleFlush();
        else void flushDevice();
        return true;
      },
      /** Force this device's pending settings into its durable synced slot. */
      flush() {
        return flushDevice();
      },
      /**
       * Apply an edit to THIS device: update memory, cache locally for instant UI,
       * and schedule a durable flush to this device's synced slot. Never touches
       * another device's slot or the shared baseline.
       */
      update(patch) {
        current = normalize({ ...current, ...patch });
        dirty = true;
        editRevision += 1;
        if (writeCache(JSON.stringify(current))) scheduleFlush();
        else void flushDevice();
        return { settings: current, diverged: this.isDiverged() };
      },
      /**
       * "Copy these settings to all my devices": write the current settings to the
       * shared baseline AND every existing device slot, in ONE saveConfiguration.
       * (This is the header pill's ↑ action.)
       */
      async pushToAll() {
        cancelFlush();
        const revision = editRevision;
        const subset = pickSyncedSubset(normalize(current));
        const ok = await saveCustom((custom) => buildAllPatch(custom, subset));
        if (ok && editRevision === revision) {
          dirty = false;
          clearCache();
        } else if (dirty) scheduleFlush();
        return ok;
      },
      /**
       * "Reset this device": drop this device's slot so it re-inherits the shared
       * baseline (or defaults). (The header pill's ↺ action.) Returns the settings
       * this device now shows.
       */
      discardLocal() {
        cancelFlush();
        const shared = asMap(readBag(readCustom())).shared;
        current = normalize(shared || {});
        dirty = true;
        editRevision += 1;
        const revision = editRevision;
        writeCache(JSON.stringify(current));
        void saveCustom((custom) => buildResetPatch(custom)).then((ok) => {
          if (ok && editRevision === revision) {
            dirty = false;
            clearCache();
          } else if (dirty) scheduleFlush();
        });
        return current;
      },
      /**
       * Persist sibling custom data and this device's pending settings in one
       * serialized save. Data-owning plugins use this instead of manually
       * snapshotting the settings bag from a potentially stale config instance.
       */
      async saveCustomPatch(extraPatch = {}) {
        cancelFlush();
        const revision = editRevision;
        const hadDirty = dirty;
        const subset = hadDirty ? pickSyncedSubset(normalize(current)) : null;
        const ok = await saveCustom((custom) => ({
          ...typeof extraPatch === "function" ? extraPatch(custom) : extraPatch,
          ...hadDirty ? buildDevicePatch(custom, subset) : {}
        }));
        if (ok && hadDirty && editRevision === revision) {
          dirty = false;
          clearCache();
        } else if (dirty) scheduleFlush();
        return ok;
      },
      /**
       * The canonical settings-aware kill switch. Pending device settings and any
       * sibling data patch land atomically with pluginDisabled, and recovery is
       * cleared only after Thymer confirms the save.
       */
      async setDisabled(disabled, extraPatch = {}) {
        cancelFlush();
        const revision = editRevision;
        const hadDirty = dirty;
        const subset = hadDirty ? pickSyncedSubset(normalize(current)) : null;
        const run = /* @__PURE__ */ __name(() => setPluginDisabled(plugin, disabled, version, (custom) => ({
          ...extraPatch,
          ...hadDirty ? buildDevicePatch(custom, subset) : {}
        })), "run");
        const okPromise = writeChain.then(run, run);
        writeChain = okPromise.then(() => void 0, () => void 0);
        const ok = await okPromise;
        if (ok && hadDirty && editRevision === revision) {
          dirty = false;
          clearCache();
        } else if (dirty) scheduleFlush();
        return ok;
      },
      /**
       * Post-push pill settle. A successful push saves the config, which reloads
       * the plugin; the fresh instance can render its scope pill from a config
       * snapshot the save hasn't reached yet, and the follow-up config event is
       * filtered as local (attachLifecycle, by design) — so nothing repaints and
       * the pill sits on "This device" even though the push landed. Re-read the
       * synced config on a short interval until it converges: when the adopted
       * settings changed, `onAdopt(settings)` fires (apply + full panel render);
       * otherwise `refreshPill()` fires (pill-only repaint). A genuine local
       * edit still wins — load() carries it through the crash cache. No-ops
       * instantly when already settled. Call from the push success callback AND
       * the post-reload panel heal; returns a cancel fn for onUnload.
       */
      settleAfterPush({ onAdopt = void 0, refreshPill = void 0, tries = 8, intervalMs = 500 } = {}) {
        if (settleTimer) {
          clearTimeout(settleTimer);
          settleTimer = null;
        }
        const tick = /* @__PURE__ */ __name((left) => {
          const before = JSON.stringify(current);
          const next = this.load().settings;
          if (JSON.stringify(next) !== before) onAdopt?.(next);
          else refreshPill?.();
          if (left <= 0 || !this.isDiverged()) return;
          settleTimer = setTimeout(() => {
            settleTimer = null;
            tick(left - 1);
          }, intervalMs);
        }, "tick");
        tick(tries);
        return () => {
          if (settleTimer) {
            clearTimeout(settleTimer);
            settleTimer = null;
          }
        };
      },
      /**
       * Live-follow: when another device does "apply to all" (or edits propagate),
       * `global-plugin.updated` (or, for CollectionPlugins, the collection event the
       * adopter also wires) fires; re-read this device's synced settings and, if
       * they changed, hand them to the plugin's central apply. Also registers the
       * boundary flush (hidden / pagehide) so a just-made edit isn't stranded in the
       * localStorage cache. Returns a detach function for onUnload.
       */
      attachLifecycle({ onRemoteChange } = {}) {
        const handlerIds = [];
        const onHide = /* @__PURE__ */ __name(() => {
          if (document.visibilityState === "hidden") void flushDevice();
        }, "onHide");
        const onPageHide = /* @__PURE__ */ __name(() => {
          void flushDevice();
        }, "onPageHide");
        try {
          document.addEventListener("visibilitychange", onHide);
          window.addEventListener("pagehide", onPageHide);
        } catch {
        }
        try {
          const id = plugin.events?.on?.("global-plugin.updated", (event) => {
            try {
              if (dirty) return;
              if (event?.source?.isLocal) return;
              const guid = plugin.getGuid?.();
              const eventGuid = event?.pluginGuid || event?.guid || event?.rootId || null;
              if (eventGuid && guid && eventGuid !== guid) return;
              const next = normalize(readSyncedDevice(readCustom()) || {});
              if (JSON.stringify(next) === JSON.stringify(current)) return;
              current = next;
              onRemoteChange?.(current);
            } catch {
            }
          });
          if (id) handlerIds.push(id);
        } catch {
        }
        return () => {
          cancelFlush();
          if (settleTimer) {
            clearTimeout(settleTimer);
            settleTimer = null;
          }
          try {
            document.removeEventListener("visibilitychange", onHide);
            window.removeEventListener("pagehide", onPageHide);
          } catch {
          }
          for (const id of handlerIds) {
            try {
              plugin.events?.off?.(id);
            } catch {
            }
          }
        };
      }
    };
    return store;
  }
  __name(createSettingsStore, "createSettingsStore");

  // summary-citations.js
  function extractSummaryCitations(markdown, sections) {
    const valid = new Map((Array.isArray(sections) ? sections : []).map((section2, index) => [
      Number.isFinite(Number(section2 && section2.sourceIndex)) ? Number(section2.sourceIndex) : index,
      section2
    ]));
    const citations = [];
    const lines = String(markdown || "").split("\n").map((line) => {
      const ids = [];
      const clean = line.replace(/[ \t]*\{\{\s*cite\s*:\s*([^{}]*)\}\}/gi, (_match, payload) => {
        for (const token of String(payload || "").split(",")) {
          const trimmed = token.trim();
          const match = trimmed.match(/^(\d+)(?::(\d+))?$/);
          if (!match) continue;
          const sectionId = Number(match[1]);
          const section2 = valid.get(sectionId);
          if (!section2) continue;
          const requestedEntry = match[2] == null ? null : Number(match[2]);
          const entryIndex = requestedEntry != null && requestedEntry >= Number(section2.start) && requestedEntry <= Number(section2.end) ? requestedEntry : null;
          if (entryIndex != null) {
            const broad = ids.findIndex((item) => item.sectionId === sectionId && item.entryIndex == null);
            if (broad >= 0) ids.splice(broad, 1);
            if (!ids.some((item) => item.sectionId === sectionId && item.entryIndex === entryIndex)) ids.push({ sectionId, entryIndex });
          } else if (!ids.some((item) => item.sectionId === sectionId)) {
            ids.push({ sectionId, entryIndex: null });
          }
        }
        return "";
      }).replace(/[ \t]+$/g, "");
      citations.push(ids);
      return clean;
    });
    return { markdown: lines.join("\n"), citations };
  }
  __name(extractSummaryCitations, "extractSummaryCitations");
  function groupSummaryLines(markdown, citations) {
    const preamble = [];
    const groups = [];
    let current = null;
    const lines = String(markdown || "").split("\n");
    for (let index = 0; index < lines.length; index++) {
      const line = lines[index];
      const heading = line.match(/^\s{0,3}#{1,6}\s+(.*?)\s*#*\s*$/);
      if (heading) {
        current = { heading: heading[1].trim(), content: [] };
        groups.push(current);
        continue;
      }
      if (!line.trim()) continue;
      const entry = {
        markdown: line,
        citations: Array.isArray(citations && citations[index]) ? citations[index] : []
      };
      if (current) current.content.push(entry);
      else preamble.push(entry);
    }
    return { preamble, groups };
  }
  __name(groupSummaryLines, "groupSummaryLines");
  function buildSummaryReferenceSegments(existingSegments, citations, sectionAnchorById, turnAnchorByIndex) {
    if (!Array.isArray(citations) || !citations.length || !(sectionAnchorById instanceof Map) || !(turnAnchorByIndex instanceof Map)) return null;
    const base = Array.isArray(existingSegments) ? existingSegments : [];
    const existingRefs = new Set(base.filter((segment) => segment && segment.type === "ref" && segment.text && typeof segment.text.guid === "string").map((segment) => segment.text.guid));
    const anchors = [];
    for (const citation of citations) {
      if (!citation) continue;
      const exact = citation.entryIndex == null ? null : turnAnchorByIndex.get(Number(citation.entryIndex));
      const anchor = exact || sectionAnchorById.get(Number(citation.sectionId));
      if (!anchor || !anchor.guid || existingRefs.has(anchor.guid) || anchors.some((item) => item.guid === anchor.guid)) continue;
      anchors.push(anchor);
    }
    if (!anchors.length) return null;
    const segments = base.slice();
    if (segments.length) segments.push({ type: "text", text: " \xB7 " });
    for (let index = 0; index < anchors.length; index++) {
      if (index) segments.push({ type: "text", text: " " });
      segments.push({ type: "ref", text: { guid: anchors[index].guid, title: anchors[index].title } });
    }
    return segments;
  }
  __name(buildSummaryReferenceSegments, "buildSummaryReferenceSegments");
  function deriveTranscriptTurnAnchors(items, trackedGuids, entries, sections, sectionAnchors, labelForEntry) {
    const allItems = Array.isArray(items) ? items : [];
    const tracked = new Set(Array.isArray(trackedGuids) ? trackedGuids : []);
    const sectionById = new Map((Array.isArray(sectionAnchors) ? sectionAnchors : []).map((anchor) => [Number(anchor.sectionId), anchor]));
    const turnsBySection = /* @__PURE__ */ new Map();
    let totalTurns = 0;
    for (let order = 0; order < sections.length; order++) {
      const section2 = sections[order];
      const sectionId = Number(section2.sourceIndex ?? order);
      const sectionAnchor = sectionById.get(sectionId);
      const turns = sectionAnchor ? allItems.filter((item) => item.parent_guid === sectionAnchor.guid && tracked.has(item.guid)) : [];
      turnsBySection.set(sectionId, turns);
      totalTurns += turns.length;
    }
    const oneTurnPerEntry = totalTurns === entries.length;
    const result = [];
    for (let order = 0; order < sections.length; order++) {
      const section2 = sections[order];
      const sectionId = Number(section2.sourceIndex ?? order);
      const turns = turnsBySection.get(sectionId) || [];
      let cursor = 0;
      for (let entryIndex = section2.start; entryIndex <= section2.end; entryIndex++) {
        const entry = entries[entryIndex];
        if (!entry) continue;
        const sourceCount = oneTurnPerEntry ? 1 : Math.max(1, Number(entry.sourceCount) || 1);
        const turn = turns[cursor] || null;
        cursor += sourceCount;
        if (!turn || !oneTurnPerEntry && sourceCount > 1) continue;
        const textNode = allItems.find((item) => item.parent_guid === turn.guid && tracked.has(item.guid)) || null;
        const target = textNode || turn;
        result.push({ entryIndex, guid: target.guid, title: labelForEntry(entry) });
      }
    }
    return result;
  }
  __name(deriveTranscriptTurnAnchors, "deriveTranscriptTurnAnchors");

  // document-ownership.js
  var LINE_META = Object.freeze({
    SCHEMA: "recall_ai_schema",
    BOT_ID: "recall_ai_bot_id",
    ROLE: "recall_ai_role",
    ENTRY_INDEX: "recall_ai_entry_index",
    SECTION_ID: "recall_ai_section_id",
    SECTION_START: "recall_ai_section_start",
    SECTION_END: "recall_ai_section_end",
    CITATIONS: "recall_ai_citations",
    COMPLETE: "recall_ai_complete"
  });
  var LINE_META_SCHEMA = 1;
  function lineMeta(line, key) {
    return line && line.props && line.props[key] != null ? line.props[key] : null;
  }
  __name(lineMeta, "lineMeta");
  function isOwnedLine(line, botId, role = "") {
    if (!line || String(lineMeta(line, LINE_META.BOT_ID) || "") !== String(botId || "")) return false;
    return !role || String(lineMeta(line, LINE_META.ROLE) || "") === role;
  }
  __name(isOwnedLine, "isOwnedLine");
  function findOwnedLine(items, botId, role, index = null) {
    return (Array.isArray(items) ? items : []).find((line) => {
      if (!isOwnedLine(line, botId, role)) return false;
      return index == null || Number(lineMeta(line, LINE_META.ENTRY_INDEX)) === Number(index);
    }) || null;
  }
  __name(findOwnedLine, "findOwnedLine");
  function findOwnedRole(items, role, index = null) {
    const wanted = String(role || "");
    if (!wanted) return null;
    return (Array.isArray(items) ? items : []).find((line) => {
      if (String(lineMeta(line, LINE_META.ROLE) || "") !== wanted) return false;
      return index == null || Number(lineMeta(line, LINE_META.ENTRY_INDEX)) === Number(index);
    }) || null;
  }
  __name(findOwnedRole, "findOwnedRole");
  function ownershipProps(botId, role, extra = {}) {
    const props = {
      [LINE_META.SCHEMA]: LINE_META_SCHEMA,
      [LINE_META.BOT_ID]: String(botId),
      [LINE_META.ROLE]: role
    };
    if (extra.entryIndex != null) props[LINE_META.ENTRY_INDEX] = Number(extra.entryIndex);
    if (extra.sectionId != null) props[LINE_META.SECTION_ID] = Number(extra.sectionId);
    if (extra.sectionStart != null) props[LINE_META.SECTION_START] = Number(extra.sectionStart);
    if (extra.sectionEnd != null) props[LINE_META.SECTION_END] = Number(extra.sectionEnd);
    if (extra.citations != null) props[LINE_META.CITATIONS] = JSON.stringify(extra.citations);
    if (extra.complete != null) props[LINE_META.COMPLETE] = extra.complete ? 1 : 0;
    return props;
  }
  __name(ownershipProps, "ownershipProps");
  async function runCoalesced(map, key, factory) {
    const active = key && map && map.get(key);
    if (active) return active;
    const task = Promise.resolve().then(factory);
    if (key && map) map.set(key, task);
    try {
      return await task;
    } finally {
      if (key && map && map.get(key) === task) map.delete(key);
    }
  }
  __name(runCoalesced, "runCoalesced");

  // meeting-body.js
  var BODY_ROLES = Object.freeze({
    SUMMARY: "summary_root",
    ACTION_ITEMS: "action_items_root",
    NOTES: "notes_root",
    TRANSCRIPT: "transcript_root"
  });
  var TEMPLATE_OWNER = "meeting";
  var BODY_SECTION_ORDER = Object.freeze([
    { role: BODY_ROLES.SUMMARY, headingTextKey: "summaryHeadingText", headingLevelKey: "summaryHeadingLevel", fallbackText: "\u{1F4DD} Summary", fallbackLevel: "h2" },
    { role: BODY_ROLES.ACTION_ITEMS, headingTextKey: "actionItemsHeadingText", headingLevelKey: "actionItemsHeadingLevel", fallbackText: "\u2705 Action items", fallbackLevel: "h2" },
    { role: BODY_ROLES.NOTES, headingTextKey: "notesHeadingText", headingLevelKey: "notesHeadingLevel", fallbackText: "\u{1F5D2}\uFE0F Notes", fallbackLevel: "h2" },
    { role: BODY_ROLES.TRANSCRIPT, headingTextKey: "transcriptHeadingText", headingLevelKey: "transcriptHeadingLevel", fallbackText: "\u{1F399}\uFE0F Transcript", fallbackLevel: "h2" }
  ]);
  var DEFAULT_BODY_SECTION_ORDER = "Summary, Action items, Notes, Transcript";
  var BODY_SECTION_ALIASES = Object.freeze({
    summary: BODY_ROLES.SUMMARY,
    summary_root: BODY_ROLES.SUMMARY,
    "action items": BODY_ROLES.ACTION_ITEMS,
    action_items: BODY_ROLES.ACTION_ITEMS,
    action_items_root: BODY_ROLES.ACTION_ITEMS,
    notes: BODY_ROLES.NOTES,
    notes_root: BODY_ROLES.NOTES,
    transcript: BODY_ROLES.TRANSCRIPT,
    transcript_root: BODY_ROLES.TRANSCRIPT
  });
  function recordCollectionGuid(record) {
    if (!record) return "";
    try {
      const coll = typeof record.getCollection === "function" ? record.getCollection() : record.collection;
      if (coll && typeof coll.getGuid === "function") {
        const guid = coll.getGuid();
        if (guid) return String(guid);
      }
    } catch {
    }
    const raw = record.collection_guid || record.collectionGuid || "";
    return raw ? String(raw) : "";
  }
  __name(recordCollectionGuid, "recordCollectionGuid");
  function lineItemPlainText(line) {
    if (!line) return "";
    const segs = Array.isArray(line.segments) ? line.segments : [];
    return segs.map(
      /** @param {any} seg */
      (seg) => {
        if (!seg) return "";
        if (typeof seg.text === "string") return seg.text;
        if (seg.text && typeof seg.text === "object") {
          if (typeof seg.text.title === "string" && seg.text.title.trim()) return seg.text.title;
          if (typeof seg.text.link === "string") return seg.text.link;
          if (typeof seg.text.text === "string") return seg.text.text;
        }
        return "";
      }
    ).join("").replace(/\s+/g, " ").trim();
  }
  __name(lineItemPlainText, "lineItemPlainText");
  function headingSearchLabel(headingText) {
    return String(headingText || "").replace(/\p{Extended_Pictographic}/gu, "").replace(/\uFE0F/g, "").replace(/\s+/g, " ").trim().toLowerCase();
  }
  __name(headingSearchLabel, "headingSearchLabel");
  function parseBodySectionOrder(raw, extraAliases = {}) {
    const parts = String(raw || "").split(",").map((part) => headingSearchLabel(part)).filter(Boolean);
    if (parts.length !== BODY_SECTION_ORDER.length) return null;
    const roles = [];
    const seen = /* @__PURE__ */ new Set();
    for (const part of parts) {
      const role = BODY_SECTION_ALIASES[part] || extraAliases[part] || "";
      if (!role || seen.has(role)) return null;
      seen.add(role);
      roles.push(role);
    }
    return seen.size === BODY_SECTION_ORDER.length ? roles : null;
  }
  __name(parseBodySectionOrder, "parseBodySectionOrder");
  function normalizeBodySectionOrder(raw) {
    const roles = parseBodySectionOrder(raw);
    if (!roles) return DEFAULT_BODY_SECTION_ORDER;
    const labels = {
      [BODY_ROLES.SUMMARY]: "Summary",
      [BODY_ROLES.ACTION_ITEMS]: "Action items",
      [BODY_ROLES.NOTES]: "Notes",
      [BODY_ROLES.TRANSCRIPT]: "Transcript"
    };
    return roles.map((role) => labels[role]).join(", ");
  }
  __name(normalizeBodySectionOrder, "normalizeBodySectionOrder");
  function orderedBodySectionSpecs(orderRoles) {
    const byRole = new Map(BODY_SECTION_ORDER.map((spec) => [spec.role, spec]));
    const roles = Array.isArray(orderRoles) && orderRoles.length ? orderRoles : BODY_SECTION_ORDER.map((spec) => spec.role);
    const ordered = [];
    for (const role of roles) {
      const spec = byRole.get(role);
      if (spec) ordered.push(spec);
    }
    return ordered.length === BODY_SECTION_ORDER.length ? ordered : BODY_SECTION_ORDER.slice();
  }
  __name(orderedBodySectionSpecs, "orderedBodySectionSpecs");
  function headingHasDescendantText(items, rootGuid) {
    return !!notesTextFromItems(items, rootGuid);
  }
  __name(headingHasDescendantText, "headingHasDescendantText");
  function lineLooksLikeSkeletonHeading(line, spec) {
    if (!line || !spec) return false;
    if (String(lineMeta(line, LINE_META.ROLE) || "") === spec.role) return true;
    const text = lineItemPlainText(line);
    return (Array.isArray(spec.texts) ? spec.texts : []).some((expected) => {
      const want = String(expected || "").trim();
      return !!want && text === want;
    });
  }
  __name(lineLooksLikeSkeletonHeading, "lineLooksLikeSkeletonHeading");
  function emptyLeakedSkeletonGuids(items, recordGuid, specs) {
    const list2 = Array.isArray(items) ? items : [];
    const rec = String(recordGuid || "");
    if (!rec || !Array.isArray(specs) || !specs.length) return [];
    const guids = [];
    for (const spec of specs) {
      const heading = list2.find((line) => String(line && line.parent_guid || "") === rec && lineLooksLikeSkeletonHeading(line, spec));
      if (!heading || !heading.guid) continue;
      if (headingHasDescendantText(list2, heading.guid)) continue;
      guids.push(String(heading.guid));
    }
    return guids;
  }
  __name(emptyLeakedSkeletonGuids, "emptyLeakedSkeletonGuids");
  function headingLevelToSize(level) {
    if (level === "h1") return 1;
    if (level === "h2") return 2;
    if (level === "h3") return 3;
    return null;
  }
  __name(headingLevelToSize, "headingLevelToSize");
  function lineHeadingSize(line) {
    if (!line) return null;
    if (typeof line.getHeadingSize === "function") {
      try {
        const size2 = Number(line.getHeadingSize());
        return Number.isFinite(size2) ? size2 : null;
      } catch {
        return null;
      }
    }
    const raw = line.heading_size != null ? line.heading_size : line.headingSize;
    const size = Number(raw);
    return Number.isFinite(size) ? size : null;
  }
  __name(lineHeadingSize, "lineHeadingSize");
  function planHeadingFormatRepair(items, recordGuid, specs) {
    const list2 = Array.isArray(items) ? items : [];
    const rec = String(recordGuid || "");
    const top = list2.filter((line) => line && String(line.parent_guid || "") === rec);
    const chosen = [];
    const relabel = [];
    const resize = [];
    const missingRoles = [];
    for (const spec of Array.isArray(specs) ? specs : []) {
      const matches = top.filter((line) => lineLooksLikeSkeletonHeading(line, spec));
      const heading = matches.find((line) => String(lineMeta(line, LINE_META.ROLE) || "") === spec.role) || matches[0] || null;
      const expectedText = String(spec.expectedText || "").trim();
      if (!heading || !heading.guid) {
        missingRoles.push(spec.role);
        chosen.push({ role: spec.role, guid: null, expectedText });
        continue;
      }
      chosen.push({ role: spec.role, guid: String(heading.guid), expectedText });
      if (expectedText && lineItemPlainText(heading) !== expectedText) {
        relabel.push({ guid: String(heading.guid), text: expectedText });
      }
      const expectedSize = headingLevelToSize(spec.expectedLevel);
      const currentSize = lineHeadingSize(heading);
      if (expectedSize != null && Number.isFinite(currentSize) && currentSize !== expectedSize) {
        resize.push({ guid: String(heading.guid), size: expectedSize });
      }
    }
    const present = new Set(chosen.map((slot) => slot.guid).filter(Boolean));
    const currentOrder = top.filter((line) => present.has(String(line.guid))).map((line) => String(line.guid));
    const desiredOrder = chosen.map((slot) => slot.guid).filter(Boolean);
    const needsReorder = desiredOrder.length > 1 && currentOrder.join("\0") !== desiredOrder.join("\0");
    return { relabel, resize, missingRoles, chosen, needsReorder };
  }
  __name(planHeadingFormatRepair, "planHeadingFormatRepair");
  function guessHeadingByLabel(items, recordGuid, headingText) {
    const label = headingSearchLabel(headingText);
    if (!label || !recordGuid) return null;
    return (Array.isArray(items) ? items : []).find((line) => {
      if (!line || String(line.parent_guid || "") !== String(recordGuid)) return false;
      if (lineMeta(line, LINE_META.ROLE)) return false;
      const text = lineItemPlainText(line).toLowerCase();
      return text.includes(label);
    }) || null;
  }
  __name(guessHeadingByLabel, "guessHeadingByLabel");
  function notesTextFromItems(items, notesRootGuid) {
    const root = String(notesRootGuid || "");
    if (!root) return "";
    const list2 = Array.isArray(items) ? items : [];
    const kids = /* @__PURE__ */ new Map();
    for (const line of list2) {
      const parent = line && line.parent_guid ? String(line.parent_guid) : "";
      if (!parent) continue;
      const arr = kids.get(parent) || [];
      arr.push(line);
      kids.set(parent, arr);
    }
    const lines = [];
    const walk = /* @__PURE__ */ __name((parentGuid) => {
      for (const child of kids.get(parentGuid) || []) {
        const text = lineItemPlainText(child);
        if (text) lines.push(text);
        if (child && child.guid) walk(String(child.guid));
      }
    }, "walk");
    walk(root);
    return lines.join("\n").trim();
  }
  __name(notesTextFromItems, "notesTextFromItems");

  // summary-format.js
  var SUMMARY_WRAPPER_TITLES = /* @__PURE__ */ new Set(["meeting notes", "summary", "meeting summary", "notes", "meeting recap", "recap"]);
  var SUMMARY_JSON_PREFIX = /^\s*\{\s*"summary"\s*:/i;
  var SUMMARY_JSON_STRING_PREFIX = /^\s*\{\s*"summary"\s*:\s*"/i;
  var SUMMARY_JSON_NEXT_KEY = /"\s*,\s*"[^"]+"\s*:/;
  var SUMMARY_JSON_SECTIONS_LINE = /^\s*(?:"\s*,\s*)?"sections"\s*:/i;
  var SUMMARY_JSON_CLOSER_LINE = /^\s*"?\s*\}+\s*$/;
  var GLUED_BRACE_QUOTE_SECTIONS = /\}\"\s*,\s*"sections"\s*:/i;
  var QUOTE_COMMA_SECTIONS = /"\s*,\s*"sections"\s*:/i;
  var LEFTOVER_SECTIONS_KEY = /"sections"\s*:\s*\[/i;
  var LEFTOVER_CHAPTER_OBJECT = /\{\s*"title"\s*:\s*"[^"]*"\s*,\s*"start"\s*:\s*-?\d+\s*,\s*"end"\s*:\s*-?\d+/;
  var DANGLING_JSON_CLOSER = /([.!?])\}\s*"?\s*$/;
  function isTableSeparatorRow(line) {
    return /\|/.test(line) && /-/.test(line) && /^[\s|:-]+$/.test(line);
  }
  __name(isTableSeparatorRow, "isTableSeparatorRow");
  function tableRowCells(line) {
    return line.replace(/^\s*\|/, "").replace(/\|\s*$/, "").split("|").map(
      /** @param {string} c */
      (c) => c.trim()
    ).filter(Boolean);
  }
  __name(tableRowCells, "tableRowCells");
  function looksLikeGluedMarkdown(text) {
    return /nn#{1,6}\s|n#{1,6}\s|nn---|n-\s/.test(text);
  }
  __name(looksLikeGluedMarkdown, "looksLikeGluedMarkdown");
  function stripSummaryJsonFence(text) {
    return String(text || "").replace(/^\s*```(?:json)?\s*/i, "").replace(/\s*```\s*$/, "");
  }
  __name(stripSummaryJsonFence, "stripSummaryJsonFence");
  function trimLeadingJsonJunk(s, index) {
    let cut = index;
    while (cut > 0 && /[\s,\[\]}"]/.test(s[cut - 1])) cut--;
    return s.slice(0, cut);
  }
  __name(trimLeadingJsonJunk, "trimLeadingJsonJunk");
  function stripTrailingClaudeEnvelope(text) {
    let s = String(text || "");
    if (!s) return s;
    const glued = s.search(GLUED_BRACE_QUOTE_SECTIONS);
    if (glued >= 0) s = s.slice(0, glued);
    else {
      const quoted = s.search(QUOTE_COMMA_SECTIONS);
      if (quoted >= 0) s = s.slice(0, quoted);
      else {
        const sections = s.search(LEFTOVER_SECTIONS_KEY);
        if (sections >= 0 && /"start"\s*:/.test(s) && /"end"\s*:/.test(s)) {
          s = trimLeadingJsonJunk(s, sections);
        } else {
          const chapter = s.search(LEFTOVER_CHAPTER_OBJECT);
          if (chapter >= 0) s = trimLeadingJsonJunk(s, chapter);
        }
      }
    }
    return s.replace(DANGLING_JSON_CLOSER, "$1");
  }
  __name(stripTrailingClaudeEnvelope, "stripTrailingClaudeEnvelope");
  function looksLikeLeftoverSummaryJson(text) {
    const s = String(text || "");
    if (!s.trim()) return false;
    const t = stripSummaryJsonFence(s).trim();
    if (SUMMARY_JSON_PREFIX.test(t)) return true;
    if (SUMMARY_JSON_SECTIONS_LINE.test(t) || SUMMARY_JSON_CLOSER_LINE.test(t)) return true;
    if (SUMMARY_JSON_NEXT_KEY.test(s) && /"sections"\s*:/i.test(s)) return true;
    if (GLUED_BRACE_QUOTE_SECTIONS.test(s)) return true;
    if (LEFTOVER_SECTIONS_KEY.test(s) && /"start"\s*:/.test(s) && /"end"\s*:/.test(s)) return true;
    if (LEFTOVER_CHAPTER_OBJECT.test(s)) return true;
    if (DANGLING_JSON_CLOSER.test(t)) return true;
    return false;
  }
  __name(looksLikeLeftoverSummaryJson, "looksLikeLeftoverSummaryJson");
  function tryParseSummaryObject(text) {
    const unfenced = stripSummaryJsonFence(text).trim();
    let obj = null;
    try {
      obj = JSON.parse(unfenced);
    } catch {
    }
    if (!obj || typeof obj !== "object") {
      const start = unfenced.indexOf("{");
      const end = unfenced.lastIndexOf("}");
      if (start >= 0 && end > start) {
        try {
          obj = JSON.parse(unfenced.slice(start, end + 1));
        } catch {
          obj = null;
        }
      }
    }
    if (obj && typeof obj === "object" && typeof obj.summary === "string") return obj.summary;
    return null;
  }
  __name(tryParseSummaryObject, "tryParseSummaryObject");
  function unescapeJsonStringFragment(text) {
    return String(text || "").replace(/\\r\\n/g, "\n").replace(/\\n/g, "\n").replace(/\\r/g, "\n").replace(/\\t/g, "	").replace(/\\"/g, '"');
  }
  __name(unescapeJsonStringFragment, "unescapeJsonStringFragment");
  function unwrapSummaryJsonEnvelope(text) {
    const original = String(text == null ? "" : text);
    if (!looksLikeLeftoverSummaryJson(original)) return original;
    const s = stripSummaryJsonFence(original);
    const parsed = tryParseSummaryObject(s);
    if (parsed != null) return parsed;
    let body = s;
    const prefix = body.match(SUMMARY_JSON_STRING_PREFIX);
    if (prefix) body = body.slice(prefix[0].length);
    const nextKey = body.search(SUMMARY_JSON_NEXT_KEY);
    if (nextKey >= 0) {
      body = body.slice(0, nextKey);
    } else if (prefix) {
      body = body.replace(/"\s*,?\s*\}\s*$/, "");
    } else if (SUMMARY_JSON_SECTIONS_LINE.test(body.trim()) || SUMMARY_JSON_CLOSER_LINE.test(body.trim())) {
      return "";
    }
    return unescapeJsonStringFragment(stripTrailingClaudeEnvelope(body));
  }
  __name(unwrapSummaryJsonEnvelope, "unwrapSummaryJsonEnvelope");
  function looksLikeMashedSummary(text) {
    const s = String(text == null ? "" : text).replace(/\r\n/g, "\n").replace(/\r/g, "\n");
    if (!s.trim()) return false;
    if (looksLikeLeftoverSummaryJson(s)) return true;
    if (s.includes("\n")) return false;
    if (s.includes("\\n") || s.includes("\\r") || s.includes("\\t")) return true;
    return looksLikeGluedMarkdown(s);
  }
  __name(looksLikeMashedSummary, "looksLikeMashedSummary");
  function recoverSummaryMarkdown(text) {
    let s = stripTrailingClaudeEnvelope(unwrapSummaryJsonEnvelope(String(text == null ? "" : text).replace(/\r\n/g, "\n").replace(/\r/g, "\n")));
    if (s.includes("\\n") || s.includes("\\r") || s.includes("\\t")) {
      s = s.replace(/\\r\\n/g, "\n").replace(/\\n/g, "\n").replace(/\\t/g, "	");
    }
    if (s.includes("\n")) return s;
    if (!looksLikeGluedMarkdown(s)) return s;
    return s.replace(/nn(#{1,6}\s)/g, "\n\n$1").replace(/n(#{1,6}\s)/g, "\n$1").replace(/nn(---)/g, "\n\n$1").replace(/n(---)/g, "\n$1").replace(/n(-\s)/g, "\n$1").replace(/n(\|)/g, "\n$1").replace(/(#{1,6}\s[^\n]+)n([A-Z])/g, "$1\n$2");
  }
  __name(recoverSummaryMarkdown, "recoverSummaryMarkdown");
  function sanitizeSummaryMarkdown(md) {
    const src = String(md || "").replace(/\r\n?/g, "\n").split("\n");
    const out = [];
    for (let i = 0; i < src.length; i++) {
      const line = src[i];
      if (/^\s*([-*_])\1{2,}\s*$/.test(line)) continue;
      if (line.includes("|") && i + 1 < src.length && isTableSeparatorRow(src[i + 1])) {
        let j = i + 2;
        for (; j < src.length; j++) {
          const row = src[j];
          if (!row.trim() || !row.includes("|")) break;
          const cells = tableRowCells(row);
          if (cells.length) out.push(`- ${cells.join(" \u2014 ")}`);
        }
        i = j - 1;
        continue;
      }
      out.push(line);
    }
    let start = 0;
    while (start < out.length && !out[start].trim()) start++;
    if (start < out.length) {
      const m = out[start].match(/^\s{0,3}#{1,6}\s+(.*?)\s*#*\s*$/) || out[start].match(/^\s*\*\*(.+?)\*\*\s*$/);
      if (m && SUMMARY_WRAPPER_TITLES.has(m[1].trim().replace(/[:.]+$/, "").toLowerCase())) out.splice(start, 1);
    }
    for (let k = 0; k < out.length; k++) out[k] = out[k].replace(/^(\s{0,3})#{1,6}(?=\s)/, "$1###");
    let inActionItems = false;
    for (let k = 0; k < out.length; k++) {
      const heading = out[k].match(/^\s{0,3}#{1,6}\s+(.*?)\s*#*\s*$/);
      if (heading) {
        inActionItems = /^action items?\b/i.test(heading[1].trim());
        continue;
      }
      if (inActionItems) out[k] = out[k].replace(/^(\s*)[-*+]\s+(?!\[[ xX]\]\s)/, "$1- [ ] ");
    }
    return out.join("\n").replace(/\n{3,}/g, "\n\n").trim();
  }
  __name(sanitizeSummaryMarkdown, "sanitizeSummaryMarkdown");
  var DEFAULT_SUMMARY_PROMPT = [
    "Summarize this meeting as clean Markdown for a Thymer outline note. Follow these formatting rules exactly:",
    "- Do NOT add a title or top-level heading \u2014 the note already has Summary and Action items headings.",
    "- Start with ### Overview: one short paragraph (2\u20134 sentences, about 80 words max). Capture what was decided and what remains open \u2014 not a recap of who said what.",
    '- Then ### Decisions and ### Open Questions with brief "- " bullets only (one idea each, at most 5\u20137 bullets per section). Skip any section with nothing to say.',
    '- After the summary, output a separate section headed exactly "### Action Items" with one "- [ ] " checkbox each, written "<action> \u2014 <owner>" (drop "\u2014 <owner>" when no owner is named). Do NOT put Action Items inside the summary.',
    "- Never use numbered lists (1. 2. or 1) 2)). Never rewrite or narrate the transcript. No play-by-play. No long prose under bullets.",
    "- Never use horizontal rules (--- or ***), never use Markdown tables, and do not leave blank lines inside a section.",
    "- If HUMAN NOTES are provided, treat them as higher priority than the transcript: they are the participant's own record of what mattered. Prefer them when they conflict with or focus the spoken discussion."
  ].join("\n");
  var LEGACY_SUMMARY_PROMPTS = Object.freeze([
    "Summarize this meeting transcript for a Thymer note. Include: 1) a concise overview, 2) decisions made, 3) action items with owners when mentioned, and 4) open questions. Keep the output skimmable and factual.",
    [
      "Summarize this meeting transcript as clean Markdown for a Thymer outline note. Follow these formatting rules exactly:",
      "- Do NOT add a title or top-level heading \u2014 the note already has a Summary heading, so start directly with the first section.",
      '- Give each section its own "### " heading: Overview, Decisions, Action Items, Open Questions. Include a section only when it has content.',
      '- Overview: one short paragraph. Decisions: one "- " bullet each. Action Items: one "- [ ] " checkbox each, written "<action> \u2014 <owner>" (drop the "\u2014 <owner>" when no owner is named). Open Questions: one "- " bullet each.',
      "- Never use horizontal rules (--- or ***), never use Markdown tables, and do not leave blank lines inside a section.",
      "Be concise and factual."
    ].join("\n"),
    [
      "Summarize this meeting as clean Markdown for a Thymer outline note. Follow these formatting rules exactly:",
      "- Do NOT add a title or top-level heading \u2014 the note already has Summary and Action items headings.",
      '- Summary sections each get a "### " heading: Overview, Decisions, Open Questions. Include a section only when it has content. Do NOT put Action Items inside the summary.',
      '- After the summary, output a separate section headed exactly "### Action Items" with one "- [ ] " checkbox each, written "<action> \u2014 <owner>" (drop "\u2014 <owner>" when no owner is named).',
      '- Overview: one short paragraph. Decisions: one "- " bullet each. Open Questions: one "- " bullet each.',
      "- Never use horizontal rules (--- or ***), never use Markdown tables, and do not leave blank lines inside a section.",
      "- If HUMAN NOTES are provided, treat them as higher priority than the transcript: they are the participant's own record of what mattered. Prefer them when they conflict with or focus the spoken discussion.",
      "Be concise and factual."
    ].join("\n")
  ]);
  function resolveSummaryPrompt(stored) {
    const text = typeof stored === "string" ? stored : "";
    if (!text || LEGACY_SUMMARY_PROMPTS.includes(text)) return DEFAULT_SUMMARY_PROMPT;
    return text;
  }
  __name(resolveSummaryPrompt, "resolveSummaryPrompt");
  var DEFAULT_ACTION_ITEMS_PROMPT = [
    "Extract action items from this meeting as clean Markdown for a Thymer outline note. Follow these formatting rules exactly:",
    "- Do NOT add a title or top-level heading \u2014 the note already has an Action items heading.",
    '- Output a section headed exactly "### Action Items" with one "- [ ] " checkbox each, written "<action> \u2014 <owner>" (drop "\u2014 <owner>" when no owner is named).',
    "- Never use numbered lists (1. 2. or 1) 2)). Never write a Summary, Overview, Decisions, or Open Questions.",
    "- Never use horizontal rules (--- or ***), never use Markdown tables, and do not leave blank lines inside the list.",
    "- If HUMAN NOTES are provided, treat them as higher priority than the transcript: they are the participant's own record of what mattered. Prefer them when they name follow-ups or owners."
  ].join("\n");
  function splitSummaryAndActionItems(md) {
    const lines = String(md || "").replace(/\r\n?/g, "\n").split("\n");
    const summary = [];
    const actions = [];
    let inActions = false;
    for (const line of lines) {
      const heading = line.match(/^\s{0,3}#{1,6}\s+(.*?)\s*#*\s*$/);
      if (heading) {
        inActions = /^action items?\b/i.test(heading[1].trim());
        if (inActions) {
          actions.push(line);
          continue;
        }
      }
      if (inActions) actions.push(line);
      else summary.push(line);
    }
    return {
      summary: summary.join("\n").replace(/\n{3,}/g, "\n\n").trim(),
      actionItems: actions.join("\n").replace(/\n{3,}/g, "\n\n").trim()
    };
  }
  __name(splitSummaryAndActionItems, "splitSummaryAndActionItems");
  function ensureActionItemsHeading(md) {
    const text = String(md || "").trim();
    if (!text) return "";
    if (/^#{1,6}\s+action items?\b/im.test(text)) return text;
    return `### Action Items
${text}`;
  }
  __name(ensureActionItemsHeading, "ensureActionItemsHeading");
  function sectionJsonInstruction(count2) {
    return [
      'Additionally, divide the transcript into a handful of topic sections in time order \u2014 for the JSON "sections" array only. Do not write those topics as extra long prose in the markdown summary.',
      `Each line below is numbered like [N], from 0 to ${count2 - 1}.`,
      "At the end of every non-heading summary line, add one or two citations. Use {{cite:S:E}} when transcript line E directly supports that wording, where S is the zero-based index into your sections array. Use the broader {{cite:S}} only when the line synthesizes several turns in that topic and no single transcript line is sufficient.",
      "For multiple sources use one marker such as {{cite:1:8,2:14}}. Every E must fall inside section S. Choose only the most direct source or two, and do not put citation markers on headings.",
      'Keep the markdown summary brief: one short Overview paragraph, then brief "- " bullets under ### Decisions and ### Open Questions. Never numbered lists. Do not rewrite or narrate the transcript.',
      "Put real newlines in the JSON summary string. Use JSON string escaping so each line break is a real newline in the parsed value \u2014 do not write the two characters backslash and n as visible text, and do not glue headings together.",
      'Do NOT put Action Items inside the summary \u2014 they go in a separate "### Action Items" block that the plugin will hoist out of the summary.',
      "Respond with ONLY a JSON object \u2014 no code fence, no text before or after \u2014 of the form:",
      '{"summary": "<the markdown summary with {{cite:0:3}} or {{cite:0}} markers, as one JSON string>", "sections": [{"title": "<short topic label, no timestamps>", "start": <first transcript line number>, "end": <last transcript line number>}]}',
      "Sections must be in order, must not overlap, and together must cover every line from 0 to " + (count2 - 1) + ". Aim for 3\u20138 sections."
    ].join("\n");
  }
  __name(sectionJsonInstruction, "sectionJsonInstruction");
  function parseSummaryAndSections(raw, count2) {
    const text = String(raw || "").trim();
    const unfenced = text.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "").trim();
    let obj = null;
    try {
      obj = JSON.parse(unfenced);
    } catch {
    }
    if (!obj) {
      const start = unfenced.indexOf("{");
      const end = unfenced.lastIndexOf("}");
      if (start >= 0 && end > start) {
        try {
          obj = JSON.parse(unfenced.slice(start, end + 1));
        } catch {
        }
      }
    }
    if (!obj || typeof obj !== "object") return { summary: recoverSummaryMarkdown(text), sections: [] };
    const summary = typeof obj.summary === "string" && obj.summary.trim() ? obj.summary : text;
    return { summary: recoverSummaryMarkdown(summary), sections: normalizeSections(Array.isArray(obj.sections) ? obj.sections : [], count2) };
  }
  __name(parseSummaryAndSections, "parseSummaryAndSections");
  function normalizeSections(rawSections, count2) {
    const out = [];
    for (let sourceIndex = 0; sourceIndex < rawSections.length; sourceIndex++) {
      const s = rawSections[sourceIndex];
      if (!s || typeof s !== "object") continue;
      const title = String(s.title || "").trim();
      let start = Math.floor(Number(s.start));
      let end = Math.floor(Number(s.end));
      if (!title || !Number.isFinite(start) || !Number.isFinite(end)) continue;
      start = Math.max(0, Math.min(start, count2 - 1));
      end = Math.max(start, Math.min(end, count2 - 1));
      out.push({ title, start, end, sourceIndex });
    }
    out.sort((a, b) => a.start - b.start);
    const clean = [];
    let cursor = -1;
    for (const s of out) {
      if (s.start <= cursor) s.start = cursor + 1;
      if (s.start > s.end || s.start > count2 - 1) continue;
      clean.push(s);
      cursor = s.end;
    }
    if (clean.length) {
      clean[0].start = 0;
      for (let i = 1; i < clean.length; i++) clean[i - 1].end = clean[i].start - 1;
      clean[clean.length - 1].end = count2 - 1;
    }
    return clean;
  }
  __name(normalizeSections, "normalizeSections");

  // transcript-quality.js
  function coalesceAdjacentTranscriptEntries(entries) {
    const out = [];
    for (const entry of Array.isArray(entries) ? entries : []) {
      if (!entry || !entry.text) continue;
      const previous = out[out.length - 1];
      const speakerKey = entry.speakerKey || `name:${String(entry.speaker || "").trim().toLowerCase()}`;
      if (previous && previous.speakerKey === speakerKey) {
        previous.text = `${previous.text} ${entry.text}`.replace(/\s{2,}/g, " ").trim();
        previous.sourceCount += 1;
        continue;
      }
      out.push({ ...entry, speakerKey, sourceCount: 1 });
    }
    return out;
  }
  __name(coalesceAdjacentTranscriptEntries, "coalesceAdjacentTranscriptEntries");

  // meeting-lifecycle.js
  var COMPLETED_MEETING_STATUSES = /* @__PURE__ */ new Set(["transcribed", "summarized", "summary_failed"]);
  var COMPLETED_SUMMARY_STATUSES = /* @__PURE__ */ new Set(["summarized", "summary_failed"]);
  var LOCAL_PROCESSING_STATUSES = /* @__PURE__ */ new Set(["processing transcript", "summarizing"]);
  function shouldRestoreMeetingPolling(botId, rawStatus) {
    const status = String(rawStatus || "").trim().toLowerCase();
    return !!String(botId || "").trim() && !COMPLETED_MEETING_STATUSES.has(status);
  }
  __name(shouldRestoreMeetingPolling, "shouldRestoreMeetingPolling");
  function completedMeetingStatus(options = {}) {
    const { autoSummarize, hasSummary, summaryFailed = false } = options;
    if (hasSummary) return "summarized";
    if (autoSummarize && summaryFailed) return "summary_failed";
    if (!autoSummarize) return "transcribed";
    return "processing transcript";
  }
  __name(completedMeetingStatus, "completedMeetingStatus");
  function count(value) {
    const number = Number(value);
    return Number.isFinite(number) && number >= 0 ? number : 0;
  }
  __name(count, "count");
  function valueOrUnknown(value) {
    const text = String(value == null ? "" : value).trim();
    return text || "unknown";
  }
  __name(valueOrUnknown, "valueOrUnknown");
  function list(value) {
    return Array.isArray(value) && value.length ? value.map(String).join(", ") : "none";
  }
  __name(list, "list");
  function statusCounts(value) {
    if (!value || typeof value !== "object" || Array.isArray(value)) return "none";
    const entries = Object.entries(value).filter(([, amount]) => Number(amount) > 0).sort(([left], [right]) => left.localeCompare(right));
    return entries.length ? entries.map(([key, amount]) => `${key}=${count(amount)}`).join(", ") : "none";
  }
  __name(statusCounts, "statusCounts");
  function formatMeetingDiagnosticsReport(options = {}) {
    const { pluginVersion, recordGuid, botId, meetingStatus, debug } = options;
    const data = debug && typeof debug === "object" ? debug : {};
    return [
      "Recall.ai Meeting Diagnostics",
      `Plugin: ${valueOrUnknown(pluginVersion)}`,
      `Record: ${valueOrUnknown(recordGuid)}`,
      `Bot: ${valueOrUnknown(botId)}`,
      `Meeting status: ${valueOrUnknown(meetingStatus)}`,
      `Bridge: ${valueOrUnknown(data.bridgeVersion)}`,
      `KV: ${valueOrUnknown(data.kv)}`,
      `Webhook verification: ${valueOrUnknown(data.webhookVerification)}`,
      `Recall bot status: ${valueOrUnknown(data.botStatus)}`,
      `Webhook events: ${count(data.realtimePosts)}`,
      `Parsed live rows: ${count(data.liveRows)}`,
      `Unparsed events: ${count(data.realtimeParseFailures)}`,
      `Parse statuses: ${statusCounts(data.realtimeParseStatuses)}`,
      `Last realtime event: ${valueOrUnknown(data.lastRealtimeEvent)}`,
      `Last parse status: ${valueOrUnknown(data.lastRealtimeParseStatus)}`,
      `Last event time: ${valueOrUnknown(data.liveUpdatedAt)}`,
      `Recordings: ${count(data.recordings)}`,
      `Transcript artifacts: ${count(data.transcriptArtifacts)}`,
      `Transcript statuses: ${list(data.transcriptStatuses)}`,
      `Realtime endpoints: ${count(data.realtimeEndpoints)}`,
      `Endpoint statuses: ${list(data.realtimeEndpointStatuses)}`,
      `Endpoint events: ${list(Array.isArray(data.realtimeEndpointEvents) ? data.realtimeEndpointEvents.flat() : [])}`
    ].join("\n");
  }
  __name(formatMeetingDiagnosticsReport, "formatMeetingDiagnosticsReport");

  // recall-storage.js
  var RECORDING_RETENTION_OPTIONS = Object.freeze([
    ["168", "7 days \u2014 no storage charges (recommended)"],
    ["72", "3 days \u2014 no storage charges"],
    ["24", "24 hours \u2014 shortest repair window"],
    ["720", "30 days \u2014 billed after day 7"],
    ["forever", "Forever \u2014 billed after day 7"],
    ["account", "Recall account default \u2014 may retain forever"]
  ]);
  var VALUES = new Set(RECORDING_RETENTION_OPTIONS.map(([value]) => value));
  function normalizeRecordingRetention(value) {
    const normalized = String(value || "").trim().toLowerCase();
    return VALUES.has(normalized) ? normalized : "168";
  }
  __name(normalizeRecordingRetention, "normalizeRecordingRetention");
  function recordingRetentionConfig(value) {
    const normalized = normalizeRecordingRetention(value);
    if (normalized === "account") return void 0;
    if (normalized === "forever") return { type: "forever" };
    return { type: "timed", hours: Number(normalized) };
  }
  __name(recordingRetentionConfig, "recordingRetentionConfig");
  function recordingRetentionDoctorMessage(value) {
    const normalized = normalizeRecordingRetention(value);
    if (normalized === "account") return {
      level: "warn",
      message: "Future bots use the Recall account default, which may retain media forever and incur storage charges after day 7."
    };
    if (normalized === "forever") return {
      level: "warn",
      message: "Future bot media is retained forever; Recall charges for storage after day 7."
    };
    const hours = Number(normalized);
    if (hours > 168) return {
      level: "warn",
      message: `Future bot media is retained for ${hours / 24} days; Recall charges for storage after day 7.`
    };
    return {
      level: "pass",
      message: `Future bot media expires after ${hours / 24} day${hours === 24 ? "" : "s"}, before Recall storage charges begin.`
    };
  }
  __name(recordingRetentionDoctorMessage, "recordingRetentionDoctorMessage");

  // api-costs.js
  var RECALL_PAYG_RECORDING_PER_HOUR_USD = 0.5;
  var RECALL_TRANSCRIPTION_PER_HOUR_USD = 0.15;
  var PRICING_VERIFIED_DATE = "July 18, 2026";
  var CLAUDE_ESTIMATE_INPUT_TOKENS = 12e3;
  var CLAUDE_ESTIMATE_OUTPUT_TOKENS = 1500;
  var SONNET_5_STANDARD_PRICE_START = Date.UTC(2026, 8, 1);
  var CLAUDE_PRICING = Object.freeze({
    "claude-haiku-4-5": Object.freeze({ input: 1, output: 5, tokenizerFactor: 1 }),
    "claude-sonnet-4-6": Object.freeze({ input: 3, output: 15, tokenizerFactor: 1 }),
    "claude-sonnet-5": Object.freeze({
      input: 3,
      output: 15,
      introInput: 2,
      introOutput: 10,
      tokenizerFactor: 1.3
    }),
    "claude-opus-4-8": Object.freeze({ input: 5, output: 25, tokenizerFactor: 1.3 })
  });
  function instant(value) {
    if (value instanceof Date) return value.getTime();
    if (typeof value === "number") return value;
    if (typeof value === "string") return new Date(value).getTime();
    return Date.now();
  }
  __name(instant, "instant");
  function estimateRecallCost(minutes = 60) {
    const duration = Math.max(0, Number(minutes) || 0) / 60;
    const recordingUsd = RECALL_PAYG_RECORDING_PER_HOUR_USD * duration;
    const transcriptionUsd = RECALL_TRANSCRIPTION_PER_HOUR_USD * duration;
    return {
      recordingUsd,
      transcriptionUsd,
      totalUsd: recordingUsd + transcriptionUsd
    };
  }
  __name(estimateRecallCost, "estimateRecallCost");
  function estimateClaudeSummaryCost(model, { at, inputTokens = CLAUDE_ESTIMATE_INPUT_TOKENS, outputTokens = CLAUDE_ESTIMATE_OUTPUT_TOKENS } = {}) {
    const pricing = CLAUDE_PRICING[String(model || "").trim()];
    if (!pricing) return null;
    const promotional = model === "claude-sonnet-5" && instant(at) < SONNET_5_STANDARD_PRICE_START;
    const inputPerMillionUsd = promotional ? pricing.introInput ?? pricing.input : pricing.input;
    const outputPerMillionUsd = promotional ? pricing.introOutput ?? pricing.output : pricing.output;
    const adjustedInputTokens = Math.round(Math.max(0, Number(inputTokens) || 0) * pricing.tokenizerFactor);
    const adjustedOutputTokens = Math.round(Math.max(0, Number(outputTokens) || 0) * pricing.tokenizerFactor);
    const totalUsd = adjustedInputTokens / 1e6 * inputPerMillionUsd + adjustedOutputTokens / 1e6 * outputPerMillionUsd;
    return {
      adjustedInputTokens,
      adjustedOutputTokens,
      inputPerMillionUsd,
      outputPerMillionUsd,
      promotional,
      totalUsd
    };
  }
  __name(estimateClaudeSummaryCost, "estimateClaudeSummaryCost");
  function formatEstimatedUsd(value) {
    const amount = Math.max(0, Number(value) || 0);
    return `$${amount.toFixed(2)}`;
  }
  __name(formatEstimatedUsd, "formatEstimatedUsd");
  function recallStorageCostNote(retention) {
    const value = String(retention || "168").trim().toLowerCase();
    if (value === "forever") return "Ongoing storage: $0.05 per recorded hour for each additional 30 days after day 7.";
    if (value === "account") return "Storage depends on the Recall account default; charges begin after day 7 when media is retained.";
    const hours = Number(value);
    if (Number.isFinite(hours) && hours > 168) return "Storage: up to about $0.05 per recorded hour for each additional 30 days after day 7.";
    return "Storage: $0 with the selected retention because media expires within Recall\u2019s free 7-day window.";
  }
  __name(recallStorageCostNote, "recallStorageCostNote");

  // participant-linking.js
  function normalizeIdentity(value) {
    return String(value == null ? "" : value).normalize("NFKC").trim().replace(/\s+/g, " ").toLocaleLowerCase();
  }
  __name(normalizeIdentity, "normalizeIdentity");
  function dedupeParticipants(items) {
    const out = [];
    const seen = /* @__PURE__ */ new Set();
    for (const raw of Array.isArray(items) ? items : []) {
      const participant = raw && typeof raw === "object" ? raw : {};
      const name = String(participant.name || "").trim().replace(/\s+/g, " ");
      const email = String(participant.email || "").trim().toLocaleLowerCase();
      if (!name && !email) continue;
      const key = email ? `email:${email}` : `name:${normalizeIdentity(name)}`;
      if (seen.has(key)) continue;
      seen.add(key);
      out.push({ ...participant, name, email });
    }
    return out;
  }
  __name(dedupeParticipants, "dedupeParticipants");
  function participantsFromTranscriptEntries(entries) {
    return dedupeParticipants((Array.isArray(entries) ? entries : []).map((entry) => ({
      ...entry && entry.participant && typeof entry.participant === "object" ? entry.participant : {},
      name: entry && (entry.participant && entry.participant.name || entry.speaker) || ""
    })));
  }
  __name(participantsFromTranscriptEntries, "participantsFromTranscriptEntries");
  function participantNames(participants, botName = "") {
    const excluded = normalizeIdentity(botName);
    const seen = /* @__PURE__ */ new Set();
    const names = [];
    for (const participant of dedupeParticipants(participants)) {
      const name = String(participant.name || "").trim();
      const key = normalizeIdentity(name);
      if (!key || key === excluded || seen.has(key)) continue;
      seen.add(key);
      names.push(name);
    }
    return names;
  }
  __name(participantNames, "participantNames");
  function isAttendeesRelationField(field) {
    return !!field && field.active !== false && String(field.type || "").toLowerCase() === "record" && field.many === true;
  }
  __name(isAttendeesRelationField, "isAttendeesRelationField");
  function findAttendeesRelationField(fields, preferredId = "") {
    const relations = (Array.isArray(fields) ? fields : []).filter(isAttendeesRelationField);
    const selected = String(preferredId || "").trim();
    if (selected) return relations.find((field) => String(field.id || "") === selected) || null;
    return relations.find((field) => String(field.id || "") === "attendees") || relations.find((field) => String(field.label || "").trim().toLowerCase() === "attendees") || null;
  }
  __name(findAttendeesRelationField, "findAttendeesRelationField");
  function attendeesTargetCollectionGuid(field) {
    return isAttendeesRelationField(field) ? String(field.filter_colguid || "").trim() : "";
  }
  __name(attendeesTargetCollectionGuid, "attendeesTargetCollectionGuid");
  var PEOPLE_COLLECTION_EXACT = /* @__PURE__ */ new Set(["people", "contacts", "team", "staff"]);
  function guessPeopleCollection(collections) {
    let best = null;
    let bestScore = 0;
    for (const collection of Array.isArray(collections) ? collections : []) {
      let name = "";
      try {
        name = collection && collection.getName ? String(collection.getName() || "") : "";
      } catch {
        name = "";
      }
      const key = name.trim().toLowerCase();
      if (!key) continue;
      let score = 0;
      if (PEOPLE_COLLECTION_EXACT.has(key)) score = 2;
      else if ([...PEOPLE_COLLECTION_EXACT].some((token) => key.includes(token))) score = 1;
      if (score > bestScore) {
        bestScore = score;
        best = collection;
      }
    }
    return best;
  }
  __name(guessPeopleCollection, "guessPeopleCollection");
  function mergeAttendeeGuids(existing, matched) {
    const out = [];
    for (const value of [...Array.isArray(existing) ? existing : [], ...Array.isArray(matched) ? matched : []]) {
      const guid = String(value || "").trim();
      if (guid && !out.includes(guid)) out.push(guid);
    }
    return out;
  }
  __name(mergeAttendeeGuids, "mergeAttendeeGuids");
  function propertyTexts(prop) {
    const values = [];
    try {
      const texts = prop && prop.texts ? prop.texts() : [];
      if (Array.isArray(texts)) values.push(...texts);
    } catch {
    }
    try {
      const text = prop && prop.text ? prop.text() : null;
      if (text != null) values.push(text);
    } catch {
    }
    return values.map((value) => String(value || "").trim()).filter(Boolean);
  }
  __name(propertyTexts, "propertyTexts");
  function matchParticipantsToPeople(participants, records) {
    const byName = /* @__PURE__ */ new Map();
    const byEmail = /* @__PURE__ */ new Map();
    const push = /* @__PURE__ */ __name((map, key, record) => {
      if (!key) return;
      const matches = map.get(key) || [];
      if (!matches.some((item) => item && item.guid === record.guid)) matches.push(record);
      map.set(key, matches);
    }, "push");
    for (const record of Array.isArray(records) ? records : []) {
      if (!record || !record.guid) continue;
      let name = "";
      try {
        name = record.getName ? record.getName() : "";
      } catch {
      }
      push(byName, normalizeIdentity(name), record);
      let props = [];
      try {
        props = record.getAllProperties ? record.getAllProperties() : [];
      } catch {
      }
      for (const prop of Array.isArray(props) ? props : []) {
        for (const value of propertyTexts(prop)) {
          if (value.includes("@")) push(byEmail, value.toLocaleLowerCase(), record);
        }
      }
    }
    const guids = [];
    const matchedNames = [];
    const unmatchedNames = [];
    const creatableParticipants = [];
    for (const participant of dedupeParticipants(participants)) {
      const emailMatches = participant.email ? byEmail.get(participant.email) || [] : [];
      const nameMatches = participant.name ? byName.get(normalizeIdentity(participant.name)) || [] : [];
      const match = emailMatches.length === 1 ? emailMatches[0] : !emailMatches.length && nameMatches.length === 1 ? nameMatches[0] : null;
      if (match && !guids.includes(match.guid)) {
        guids.push(match.guid);
        if (participant.name) matchedNames.push(participant.name);
      } else if (participant.name) {
        unmatchedNames.push(participant.name);
        if (!emailMatches.length && !nameMatches.length) creatableParticipants.push(participant);
      }
    }
    return { guids, matchedNames, unmatchedNames, creatableParticipants };
  }
  __name(matchParticipantsToPeople, "matchParticipantsToPeople");
  function assignPersonEmail(record, email) {
    const value = String(email || "").trim();
    if (!record || !value || !value.includes("@")) return false;
    const names = ["email", "Email", "e-mail", "E-mail"];
    for (const name of names) {
      try {
        const prop = record.prop ? record.prop(name) : null;
        if (prop && typeof prop.set === "function") {
          prop.set(value);
          return true;
        }
      } catch {
      }
    }
    try {
      const props = record.getAllProperties ? record.getAllProperties() : [];
      for (const prop of Array.isArray(props) ? props : []) {
        let label = "";
        try {
          label = String(prop.label || prop.id || prop.name || prop.getName && prop.getName() || "");
        } catch {
        }
        const type = String(prop.type || "").toLowerCase();
        if (type === "email" || /e-?mail/i.test(label)) {
          if (typeof prop.set === "function") {
            prop.set(value);
            return true;
          }
        }
      }
    } catch {
    }
    return false;
  }
  __name(assignPersonEmail, "assignPersonEmail");

  // meeting-schema.js
  var ATTENDEES_FIELD_DEFINITION = Object.freeze({
    id: "attendees",
    label: "Attendees",
    type: "record",
    icon: "ti-users",
    many: true,
    read_only: false,
    active: true
  });
  var RELATED_FIELD_DEFINITION = Object.freeze({
    id: "related",
    label: "Related",
    type: "record",
    icon: "ti-link",
    many: true,
    read_only: false,
    active: true
  });
  function migrateMeetingSchema(configuration) {
    const conf = JSON.parse(JSON.stringify(configuration && typeof configuration === "object" ? configuration : {}));
    conf.fields = Array.isArray(conf.fields) ? conf.fields : [];
    let changed = false;
    const retired = /* @__PURE__ */ new Set(["transcript", "summary", "participant_names"]);
    for (const field of conf.fields) {
      if (!field) continue;
      const id = String(field.id || "");
      if (retired.has(id) && field.active !== false) {
        field.active = false;
        changed = true;
      }
      if (id === "join_at" && String(field.label || "") !== "Date") {
        field.label = "Date";
        changed = true;
      }
    }
    const withoutRetired = /* @__PURE__ */ __name((ids) => {
      if (!Array.isArray(ids)) return ids;
      const next = ids.filter((id) => !retired.has(String(id || "")));
      if (next.length !== ids.length) changed = true;
      return next;
    }, "withoutRetired");
    if (Array.isArray(conf.page_field_ids)) conf.page_field_ids = withoutRetired(conf.page_field_ids);
    for (const view of Array.isArray(conf.views) ? conf.views : []) {
      if (Array.isArray(view && view.field_ids)) view.field_ids = withoutRetired(view.field_ids);
    }
    let attendees = findAttendeesRelationField(conf.fields);
    const canonicalOccupied = conf.fields.some((field) => String(field && field.id || "") === ATTENDEES_FIELD_DEFINITION.id);
    if (!attendees && !canonicalOccupied) {
      attendees = { ...ATTENDEES_FIELD_DEFINITION };
      conf.fields.push(attendees);
      changed = true;
    }
    let related = (Array.isArray(conf.fields) ? conf.fields : []).find((field) => String(field && field.id || "") === RELATED_FIELD_DEFINITION.id) || null;
    if (!related) {
      related = { ...RELATED_FIELD_DEFINITION };
      conf.fields.push(related);
      changed = true;
    }
    const ensureFieldId = /* @__PURE__ */ __name((ids, id, afterId = "") => {
      if (!id || ids.includes(id)) return ids;
      changed = true;
      const at = afterId ? ids.indexOf(afterId) : -1;
      if (at >= 0) ids.splice(at + 1, 0, id);
      else ids.push(id);
      return ids;
    }, "ensureFieldId");
    const attendeesId = attendees ? String(attendees.id || "") : "";
    const relatedId = related ? String(related.id || "") : "";
    if (attendeesId || relatedId) {
      conf.page_field_ids = Array.isArray(conf.page_field_ids) ? conf.page_field_ids : [];
      if (attendeesId) conf.page_field_ids = ensureFieldId(conf.page_field_ids, attendeesId);
      if (relatedId) conf.page_field_ids = ensureFieldId(conf.page_field_ids, relatedId, attendeesId);
      const table = (Array.isArray(conf.views) ? conf.views : []).find((view) => String(view && view.type || "") === "table");
      if (table) {
        table.field_ids = Array.isArray(table.field_ids) ? table.field_ids : [];
        if (attendeesId) table.field_ids = ensureFieldId(table.field_ids, attendeesId);
        if (relatedId) table.field_ids = ensureFieldId(table.field_ids, relatedId, attendeesId);
      }
    }
    return { configuration: conf, changed, attendeesFieldId: attendeesId, relatedFieldId: relatedId };
  }
  __name(migrateMeetingSchema, "migrateMeetingSchema");

  // collection-template.js
  var FIELDS = Object.freeze({
    TITLE: "title",
    MEETING_URL: "meeting_url",
    JOIN_AT: "join_at",
    PARTICIPANT_NAMES: "participant_names",
    ATTENDEES: "attendees",
    RELATED: "related",
    BOT_ID: "recall_bot_id",
    STATUS: "recall_status",
    LAST_ERROR: "last_error"
  });
  var TITLE_FIELD_DEFINITION = Object.freeze({ id: FIELDS.TITLE, label: "Title", type: "text", icon: "ti-abc", many: false, read_only: false, active: true });
  var FIELD_DEFS = Object.freeze({
    [FIELDS.MEETING_URL]: { id: FIELDS.MEETING_URL, label: "Meeting URL", type: "url", icon: "ti-link", many: false, read_only: false, active: true },
    [FIELDS.JOIN_AT]: { id: FIELDS.JOIN_AT, label: "Date", type: "datetime", icon: "ti-calendar", many: false, read_only: false, active: true },
    [FIELDS.PARTICIPANT_NAMES]: { id: FIELDS.PARTICIPANT_NAMES, label: "Participant Names", type: "text", icon: "ti-users", many: false, read_only: false, active: false },
    [FIELDS.ATTENDEES]: ATTENDEES_FIELD_DEFINITION,
    [FIELDS.RELATED]: RELATED_FIELD_DEFINITION,
    [FIELDS.BOT_ID]: { id: FIELDS.BOT_ID, label: "Bot ID", type: "text", icon: "ti-robot", many: false, read_only: false, active: true },
    [FIELDS.STATUS]: { id: FIELDS.STATUS, label: "Bot Status", type: "text", icon: "ti-activity", many: false, read_only: false, active: true },
    [FIELDS.LAST_ERROR]: { id: FIELDS.LAST_ERROR, label: "Last Error", type: "text", icon: "ti-alert-triangle", many: false, read_only: false, active: true }
  });
  var HOSTED_FIELD_IDS = Object.freeze([FIELDS.BOT_ID, FIELDS.STATUS, FIELDS.LAST_ERROR]);
  var MEETINGS_COLLECTION_TEMPLATE = Object.freeze({
    name: "Meetings",
    item_name: "Meeting",
    icon: "microphone",
    description: "Send Recall.ai bots to meeting URLs and stream transcripts and summaries into Thymer.",
    fields: [
      { ...TITLE_FIELD_DEFINITION },
      { ...FIELD_DEFS[FIELDS.MEETING_URL] },
      { ...FIELD_DEFS[FIELDS.JOIN_AT] },
      { ...FIELD_DEFS[FIELDS.PARTICIPANT_NAMES] },
      { ...FIELD_DEFS[FIELDS.ATTENDEES] },
      { ...FIELD_DEFS[FIELDS.RELATED] },
      { ...FIELD_DEFS[FIELDS.BOT_ID] },
      { ...FIELD_DEFS[FIELDS.STATUS] },
      { ...FIELD_DEFS[FIELDS.LAST_ERROR] }
    ],
    views: [
      {
        id: "table",
        label: "Meetings",
        description: "Recall.ai meeting bot control table.",
        type: "table",
        icon: "ti-table",
        shown: true,
        read_only: false,
        sort_field_id: FIELDS.JOIN_AT,
        sort_dir: "desc",
        group_by_field_id: null,
        field_ids: [FIELDS.TITLE, FIELDS.MEETING_URL, FIELDS.JOIN_AT, FIELDS.STATUS, FIELDS.BOT_ID, FIELDS.ATTENDEES, FIELDS.RELATED],
        query: ""
      }
    ],
    page_field_ids: [FIELDS.TITLE, FIELDS.MEETING_URL, FIELDS.JOIN_AT, FIELDS.ATTENDEES, FIELDS.RELATED, FIELDS.BOT_ID, FIELDS.STATUS, FIELDS.LAST_ERROR],
    managed: { fields: false, views: false, sidebar: true }
  });

  // bindings.js
  var BINDING_MAPPING_KEYS = Object.freeze([
    "meetingUrlFieldId",
    "joinAtFieldId",
    "attendeesFieldId",
    "relatedFieldId",
    "participantNamesFieldId"
  ]);
  var BINDING_ROLES = Object.freeze(["owned", "hosted"]);
  function normalizeBinding(raw) {
    const src = raw && typeof raw === "object" ? raw : {};
    const role = src.role === "owned" ? "owned" : "hosted";
    const str = /* @__PURE__ */ __name((key) => typeof src[key] === "string" ? src[key].trim() : "", "str");
    return {
      role,
      enabled: typeof src.enabled === "boolean" ? src.enabled : true,
      autoSchedule: typeof src.autoSchedule === "boolean" ? src.autoSchedule : role === "owned",
      meetingUrlFieldId: str("meetingUrlFieldId"),
      joinAtFieldId: str("joinAtFieldId"),
      attendeesFieldId: str("attendeesFieldId"),
      relatedFieldId: str("relatedFieldId"),
      participantNamesFieldId: str("participantNamesFieldId")
    };
  }
  __name(normalizeBinding, "normalizeBinding");
  function normalizeBindings(raw) {
    const src = raw && typeof raw === "object" && !Array.isArray(raw) ? raw : {};
    const out = {};
    for (const guid of Object.keys(src).sort()) {
      const key = String(guid || "").trim();
      if (!key) continue;
      out[key] = normalizeBinding(src[guid]);
    }
    return out;
  }
  __name(normalizeBindings, "normalizeBindings");
  function newBinding(role) {
    return normalizeBinding({ role: role === "owned" ? "owned" : "hosted" });
  }
  __name(newBinding, "newBinding");

  // meeting-url.js
  var TRAILING_JUNK = /[.,;:!?'"»)\]}>]+$/;
  function extractMeetingUrl(text) {
    const match = String(text == null ? "" : text).match(/https?:\/\/\S+/i);
    if (!match) return "";
    const url = match[0].replace(TRAILING_JUNK, "");
    return /^https?:\/\/[^/\s]/i.test(url) ? url : "";
  }
  __name(extractMeetingUrl, "extractMeetingUrl");

  // ../../shared/collection-code.js
  var ANY_PATCH_BLOCK = /\/\* (.+?): managed collection hook - begin \*\/[\s\S]*?\/\* \1: managed collection hook - end \*\//g;
  function extractPatchBlocks(code) {
    const out = [];
    const text = String(code || "");
    for (const m of text.matchAll(ANY_PATCH_BLOCK)) out.push({ name: m[1], text: m[0] });
    return out;
  }
  __name(extractPatchBlocks, "extractPatchBlocks");
  function stripAllPatchBlocks(code) {
    return String(code || "").replace(ANY_PATCH_BLOCK, "").replace(/\n{3,}/g, "\n\n").trim();
  }
  __name(stripAllPatchBlocks, "stripAllPatchBlocks");
  function classifyCollectionCode(code) {
    const text = String(code || "");
    const blocks = extractPatchBlocks(text);
    const rest = stripCodeCommentsAndStrings(stripAllPatchBlocks(text));
    const hasOwnerLogic = OWNER_SIGNALS.some((sig) => rest.includes(sig));
    if (hasOwnerLogic) return { kind: "owner", patches: blocks, occupant: attributeOccupant(text) };
    return { kind: blocks.length ? "patched" : "blank", patches: blocks, occupant: "" };
  }
  __name(classifyCollectionCode, "classifyCollectionCode");
  var OWNER_SIGNALS = Object.freeze([
    "customizeRecordTitle",
    "customizeSidebarItems",
    "setSidebarWidget",
    "addCollectionNavigationButton",
    "this.properties",
    "this.views",
    "this.collection",
    "this.events",
    "this.data",
    "this.ws",
    "localStorage",
    "fetch",
    "savePlugin",
    "saveConfiguration",
    "previewPlugin",
    "insertFromMarkdown",
    "createRecord",
    "createLineItem",
    "prop(",
    "setName"
  ]);
  var KNOWN_OCCUPANTS = Object.freeze([
    ["plg-meetings", "Meetings"],
    ["plg-recall-ai", "Meetings (pre-1.24 bundle)"],
    ["plg-collection-icons", "Collection Icons"],
    ["Build Title from Properties", "Build Title from Properties"]
  ]);
  function attributeOccupant(code) {
    const text = String(code || "");
    const hit = KNOWN_OCCUPANTS.find(([needle]) => text.includes(needle));
    return hit ? hit[1] : "another plugin";
  }
  __name(attributeOccupant, "attributeOccupant");
  function stripCodeCommentsAndStrings(code) {
    return String(code || "").replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/[^\n]*/g, "").replace(/'(?:\\.|[^'\\])*'/g, "''").replace(/"(?:\\.|[^"\\])*"/g, '""').replace(/`(?:\\.|[^`\\])*`/g, "``");
  }
  __name(stripCodeCommentsAndStrings, "stripCodeCommentsAndStrings");
  var STUB_MARKER = "/* thymer-collection-stub */";
  var STUB_OWNER_CLASS = `${STUB_MARKER}
class Plugin extends CollectionPlugin {
	onLoad() {}
	onUnload() {}
}`;
  function assertCodeSafe(code) {
    const text = String(code || "");
    try {
      new Function(text);
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e);
      return { ok: false, reason: `would not parse \u2014 ${message}` };
    }
    if (!/\bclass\s+Plugin\b|\bvar\s+Plugin\s*=|\bPlugin\s*=\s*class\b/.test(text)) {
      return { ok: false, reason: "declares no Plugin class \u2014 the collection would not load" };
    }
    return { ok: true };
  }
  __name(assertCodeSafe, "assertCodeSafe");

  // time-formatting.js
  var TRANSCRIPT_TIMESTAMP_GROUPS = Object.freeze([
    Object.freeze({
      label: "Clock time",
      options: Object.freeze([
        Object.freeze(["clock", "12-hour \u2014 2:47 PM"]),
        Object.freeze(["clock-lower", "12-hour, lowercase \u2014 2:47 pm"]),
        Object.freeze(["clock-24", "24-hour \u2014 14:47"])
      ])
    }),
    Object.freeze({
      label: "Meeting time",
      options: Object.freeze([
        Object.freeze(["elapsed", "Elapsed \u2014 0:37"])
      ])
    })
  ]);
  var SECTION_RANGE_STYLE_GROUPS = Object.freeze([
    Object.freeze({
      label: "12-hour clock",
      options: Object.freeze([
        Object.freeze(["clock", "Compact \u2014 2:47\u20132:52 PM"]),
        Object.freeze(["clock-long", "Full \u2014 2:47 PM \u2013 2:52 PM"]),
        Object.freeze(["clock-lower", "Compact, lowercase \u2014 2:47\u20132:52 pm"]),
        Object.freeze(["clock-lower-long", "Full, lowercase \u2014 2:47 pm \u2013 2:52 pm"]),
        Object.freeze(["start-clock", "Start only \u2014 2:47 PM"]),
        Object.freeze(["start-clock-lower", "Start only, lowercase \u2014 2:47 pm"])
      ])
    }),
    Object.freeze({
      label: "24-hour clock",
      options: Object.freeze([
        Object.freeze(["clock-24", "Compact \u2014 14:47\u201314:52"]),
        Object.freeze(["clock-24-long", "Full \u2014 14:47 \u2013 14:52"]),
        Object.freeze(["start-clock-24", "Start only \u2014 14:47"])
      ])
    }),
    Object.freeze({
      label: "Elapsed time",
      options: Object.freeze([
        Object.freeze(["elapsed", "Range \u2014 0:00\u20135:12"]),
        Object.freeze(["start-elapsed", "Start only \u2014 0:00"])
      ])
    })
  ]);
  var timestampStyles = new Set(TRANSCRIPT_TIMESTAMP_GROUPS.flatMap((group) => group.options.map(([value]) => value)));
  var rangeStyles = new Set(SECTION_RANGE_STYLE_GROUPS.flatMap((group) => group.options.map(([value]) => value)));
  function normalizeTranscriptTimestampStyle(value) {
    const style = String(value || "");
    return timestampStyles.has(style) ? style : "clock";
  }
  __name(normalizeTranscriptTimestampStyle, "normalizeTranscriptTimestampStyle");
  function normalizeSectionRangeStyle(value) {
    const style = String(value || "");
    return rangeStyles.has(style) ? style : "clock";
  }
  __name(normalizeSectionRangeStyle, "normalizeSectionRangeStyle");
  function formatClockTime(iso, style = "clock") {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return null;
    const normalized = String(style || "clock");
    try {
      const text = normalized.includes("24") ? d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hourCycle: "h23" }) : d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
      return normalized.includes("lower") ? text.replace(/\b(?:AM|PM)\b/gi, (match) => match.toLowerCase()) : text;
    } catch {
      return null;
    }
  }
  __name(formatClockTime, "formatClockTime");
  function entryStamp(entry, settings) {
    const style = normalizeTranscriptTimestampStyle(settings && settings.transcriptTimestamps);
    const clock = entry && entry.absoluteIso ? formatClockTime(entry.absoluteIso, style) : null;
    const elapsed = entry && entry.relativeSec != null ? formatRelativeTime(entry.relativeSec) : null;
    return style === "elapsed" ? elapsed || clock : clock || elapsed;
  }
  __name(entryStamp, "entryStamp");
  function compactClockRange(a, b) {
    if (!a || !b) return a || b || "";
    if (a === b) return a;
    const am = a.match(/\s*(AM|PM)$/i);
    const bm = b.match(/\s*(AM|PM)$/i);
    if (am && bm && am[1].toLowerCase() === bm[1].toLowerCase()) return `${a.replace(/\s*(AM|PM)$/i, "")}\u2013${b}`;
    return `${a}\u2013${b}`;
  }
  __name(compactClockRange, "compactClockRange");
  function sectionRange(first, last, settings) {
    const style = normalizeSectionRangeStyle(settings && settings.sectionRangeStyle);
    const elapsed = /* @__PURE__ */ __name((entry) => entry && entry.relativeSec != null ? formatRelativeTime(entry.relativeSec) : null, "elapsed");
    if (style === "elapsed") return compactClockRange(elapsed(first), elapsed(last));
    if (style === "start-elapsed") return elapsed(first) || "";
    const clockStyle = style.includes("24") ? "clock-24" : style.includes("lower") ? "clock-lower" : "clock";
    const clock = /* @__PURE__ */ __name((entry) => entry && entry.absoluteIso ? formatClockTime(entry.absoluteIso, clockStyle) : null, "clock");
    if (style.startsWith("start-")) return clock(first) || "";
    const a = clock(first);
    const b = clock(last);
    if (style.endsWith("-long")) return a && b && a !== b ? `${a} \u2013 ${b}` : a || b || "";
    return compactClockRange(a, b);
  }
  __name(sectionRange, "sectionRange");
  var CITATION_STYLE_OPTIONS = Object.freeze([
    Object.freeze(["name-time", "Name and time \u2014 Zac \xB7 9:29 AM"]),
    Object.freeze(["name", "Name only \u2014 Zac"]),
    Object.freeze(["time", "Time only \u2014 9:29 AM"])
  ]);
  var citationStyles = new Set(CITATION_STYLE_OPTIONS.map(([value]) => value));
  function normalizeCitationStyle(value) {
    const style = String(value || "");
    return citationStyles.has(style) ? style : "name-time";
  }
  __name(normalizeCitationStyle, "normalizeCitationStyle");
  function formatTranscriptCitationLabel(entry, settings) {
    const speaker = String(entry && entry.speaker || "Speaker").trim() || "Speaker";
    const stamp = entryStamp(entry, settings);
    const style = normalizeCitationStyle(settings && settings.citationStyle);
    if (style === "time") return stamp || speaker;
    if (style === "name") return speaker;
    return stamp ? `${speaker} \xB7 ${stamp}` : speaker;
  }
  __name(formatTranscriptCitationLabel, "formatTranscriptCitationLabel");
  function formatRelativeTime(seconds) {
    const total = Math.max(0, Math.floor(seconds));
    const minutes = Math.floor(total / 60);
    const remainder = total % 60;
    return `${minutes}:${String(remainder).padStart(2, "0")}`;
  }
  __name(formatRelativeTime, "formatRelativeTime");

  // meeting-date.js
  var SCHEDULED_LEAD_MS = 10 * 60 * 1e3;
  var BOT_JOIN_LEAD_MS = 2 * 60 * 1e3;
  function recallJoinAtIso(meetingIso, leadMs = BOT_JOIN_LEAD_MS) {
    if (!meetingIso) return null;
    const ms = Date.parse(meetingIso);
    if (!Number.isFinite(ms)) return null;
    return new Date(ms - leadMs).toISOString();
  }
  __name(recallJoinAtIso, "recallJoinAtIso");
  function isSchedulableMeeting(meetingMs, now = Date.now(), scheduledLeadMs = SCHEDULED_LEAD_MS, botLeadMs = BOT_JOIN_LEAD_MS) {
    if (meetingMs == null || !Number.isFinite(Number(meetingMs))) return false;
    const botJoin = Number(meetingMs) - botLeadMs;
    return botJoin - now >= scheduledLeadMs;
  }
  __name(isSchedulableMeeting, "isSchedulableMeeting");
  function botJoinMs(meetingMs, botLeadMs = BOT_JOIN_LEAD_MS) {
    if (meetingMs == null || !Number.isFinite(Number(meetingMs))) return null;
    return Number(meetingMs) - botLeadMs;
  }
  __name(botJoinMs, "botJoinMs");
  function scheduleBlockReason(meetingMs, now = Date.now()) {
    if (meetingMs == null || !Number.isFinite(Number(meetingMs))) return "missing";
    if (Number(meetingMs) <= now) return "past";
    if (!isSchedulableMeeting(meetingMs, now)) return "too_soon";
    return null;
  }
  __name(scheduleBlockReason, "scheduleBlockReason");
  function formatMeetingWhen(iso) {
    const ms = Date.parse(String(iso || ""));
    if (!Number.isFinite(ms)) return "";
    try {
      return new Date(ms).toLocaleString(void 0, { dateStyle: "medium", timeStyle: "short" });
    } catch {
      return new Date(ms).toISOString();
    }
  }
  __name(formatMeetingWhen, "formatMeetingWhen");

  // confirm-dialog-helpers.js
  var MEETINGS_GITHUB_REPO = "https://github.com/akaready/thymer-meetings";
  var GITHUB_ISSUE_URL_MAX = 7e3;
  function normalizeConfirmBody(body) {
    if (body && typeof body === "object") {
      return {
        intro: String(body.intro || ""),
        items: Array.isArray(body.items) ? body.items.map((item) => String(item || "")).filter(Boolean) : [],
        outro: String(body.outro || "")
      };
    }
    return { intro: String(body || ""), items: [], outro: "" };
  }
  __name(normalizeConfirmBody, "normalizeConfirmBody");
  function regenerateConfirmCopy(value) {
    if (value === "actions") {
      return "This will replace the Action items list. Summary, Notes, and Transcript stay. Checkboxes you edited will be overwritten.";
    }
    if (value === "both") {
      return "This will replace the Summary section and the Action items list. Notes and Transcript stay. Checkboxes you edited will be overwritten.";
    }
    return "This will replace the Summary section. Notes, Transcript, and Action items stay.";
  }
  __name(regenerateConfirmCopy, "regenerateConfirmCopy");
  function buildGitHubIssueUrl(options) {
    const repo = String(options.repo || MEETINGS_GITHUB_REPO).replace(/\/+$/, "");
    const title = String(options.title || "Meetings diagnostics");
    const body = String(options.body || "");
    const maxLength = Number(options.maxLength) > 0 ? Number(options.maxLength) : GITHUB_ISSUE_URL_MAX;
    const base = `${repo}/issues/new`;
    const withParams = /* @__PURE__ */ __name((issueTitle, issueBody) => `${base}?title=${encodeURIComponent(issueTitle)}&body=${encodeURIComponent(issueBody)}`, "withParams");
    const full = withParams(title, body);
    if (full.length <= maxLength) return { url: full, truncated: false, copyFull: false };
    const note = "\n\n---\nThe full diagnostic report is in the clipboard (the GitHub URL was too long).";
    let cut = body;
    const suffix = `\u2026${note}`;
    while (cut.length > 240 && withParams(title, cut + suffix).length > maxLength) {
      cut = cut.slice(0, Math.max(240, Math.floor(cut.length * 0.72)));
    }
    const truncated = withParams(title, cut + suffix);
    if (truncated.length <= maxLength) return { url: truncated, truncated: true, copyFull: true };
    return { url: base, truncated: true, copyFull: true };
  }
  __name(buildGitHubIssueUrl, "buildGitHubIssueUrl");
  async function copyTextToClipboard(text) {
    try {
      const write = typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText;
      if (write) {
        await write.call(navigator.clipboard, String(text || ""));
        return true;
      }
    } catch {
    }
    return false;
  }
  __name(copyTextToClipboard, "copyTextToClipboard");
  var HOVER_BOUND = "overlayHoverBound";
  function overlayHoverStyles(kind = "ghost") {
    if (kind === "save" || kind === "primary") {
      return {
        background: "rgba(16, 185, 129, 0.28)",
        outline: "2px solid #10b981",
        outlineOffset: "2px"
      };
    }
    return {
      background: "rgba(127, 127, 127, 0.22)",
      outline: "2px solid rgba(127, 127, 127, 0.85)",
      outlineOffset: "2px"
    };
  }
  __name(overlayHoverStyles, "overlayHoverStyles");
  function applyOverlayHoverStyles(el2, kind = "ghost") {
    if (!el2 || !el2.style) return el2;
    const styles = overlayHoverStyles(kind);
    el2.style.setProperty("background", styles.background, "important");
    el2.style.setProperty("outline", styles.outline, "important");
    el2.style.setProperty("outline-offset", styles.outlineOffset, "important");
    return el2;
  }
  __name(applyOverlayHoverStyles, "applyOverlayHoverStyles");
  function clearOverlayHoverStyles(el2) {
    if (!el2 || !el2.style) return el2;
    el2.style.removeProperty("background");
    el2.style.removeProperty("outline");
    el2.style.removeProperty("outline-offset");
    return el2;
  }
  __name(clearOverlayHoverStyles, "clearOverlayHoverStyles");
  function attachOverlayButtonHover(el2, kind = "ghost") {
    if (!el2 || !el2.addEventListener) return el2;
    if (el2.dataset && el2.dataset[HOVER_BOUND] === "1") return el2;
    if (el2.dataset) el2.dataset[HOVER_BOUND] = "1";
    const kindOf = /* @__PURE__ */ __name(() => typeof kind === "function" ? kind() : kind, "kindOf");
    el2.addEventListener("mouseenter", () => applyOverlayHoverStyles(el2, kindOf()));
    el2.addEventListener("mouseleave", () => {
      if (el2.classList && el2.classList.contains("is-selected")) {
        applyOverlayHoverStyles(el2, "save");
        return;
      }
      clearOverlayHoverStyles(el2);
    });
    return el2;
  }
  __name(attachOverlayButtonHover, "attachOverlayButtonHover");
  function overlayLocalCss(rootClass) {
    const skip = `.${rootClass}-confirm-skip`;
    const save = `.${rootClass}-confirm-save`;
    const choice = `.${rootClass}-choice-item`;
    return [
      `${skip}:hover,${choice}:hover{background:rgba(127,127,127,0.22)!important;outline:2px solid rgba(127,127,127,0.85)!important;outline-offset:2px!important}`,
      `${save}:hover,${choice}.is-selected,${choice}.is-selected:hover{background:rgba(16,185,129,0.28)!important;outline:2px solid #10b981!important;outline-offset:2px!important}`
    ].join("");
  }
  __name(overlayLocalCss, "overlayLocalCss");
  function mountOverlaySurface(root, rootClass) {
    if (!root || !root.querySelectorAll) return root;
    const styleId = `${rootClass}-overlay-css`;
    if (!root.querySelector(`style#${styleId}`)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = overlayLocalCss(rootClass);
      root.insertBefore(style, root.firstChild);
    }
    const saveClass = `${rootClass}-confirm-save`;
    for (const btn of root.querySelectorAll("button")) {
      const kind = /* @__PURE__ */ __name(() => {
        if (btn.classList.contains("is-selected") || btn.classList.contains(saveClass)) return "save";
        return "ghost";
      }, "kind");
      attachOverlayButtonHover(btn, kind);
      if (btn.classList.contains("is-selected")) applyOverlayHoverStyles(btn, "save");
    }
    return root;
  }
  __name(mountOverlaySurface, "mountOverlaySurface");

  // participant-confirm-drafts.js
  function draftsFromUnmatched(participants) {
    const drafts = [];
    const seen = /* @__PURE__ */ new Set();
    for (const raw of Array.isArray(participants) ? participants : []) {
      const name = String(raw && raw.name || "").trim().replace(/\s+/g, " ");
      if (!name) continue;
      const key = name.toLocaleLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      drafts.push({
        recallName: name,
        name,
        email: String(raw && raw.email || "").trim(),
        include: true
      });
    }
    return drafts;
  }
  __name(draftsFromUnmatched, "draftsFromUnmatched");
  function confirmedCreates(drafts) {
    return (Array.isArray(drafts) ? drafts : []).filter((draft) => draft && draft.include !== false).map((draft) => ({
      name: String(draft.name || "").trim().replace(/\s+/g, " "),
      email: String(draft.email || "").trim()
    })).filter((draft) => !!draft.name);
  }
  __name(confirmedCreates, "confirmedCreates");

  // participant-confirm.js
  var overlayEl = null;
  var detachKey = null;
  function closeParticipantConfirmDialog() {
    if (detachKey) {
      window.removeEventListener("keydown", detachKey, true);
      detachKey = null;
    }
    try {
      overlayEl?.remove();
    } catch {
    }
    overlayEl = null;
  }
  __name(closeParticipantConfirmDialog, "closeParticipantConfirmDialog");
  function openParticipantConfirmDialog(options) {
    closeParticipantConfirmDialog();
    const rootClass = options.rootClass || "plg-meetings";
    const drafts = draftsFromUnmatched(options.participants);
    if (!drafts.length) {
      options.onSkip?.();
      return;
    }
    const rows = drafts.map((draft) => {
      const nameInput = (
        /** @type {HTMLInputElement} */
        h("input", {
          type: "text",
          class: `${rootClass}-confirm-input`,
          value: draft.name,
          "aria-label": `Full name for ${draft.recallName}`
        })
      );
      const emailInput = (
        /** @type {HTMLInputElement} */
        h("input", {
          type: "email",
          class: `${rootClass}-confirm-input`,
          value: draft.email,
          placeholder: "email@example.com",
          "aria-label": `Email for ${draft.recallName}`
        })
      );
      const include = (
        /** @type {HTMLInputElement} */
        h("input", {
          type: "checkbox",
          checked: true,
          "aria-label": `Create ${draft.recallName}`
        })
      );
      nameInput.addEventListener("input", () => {
        draft.name = nameInput.value;
      });
      emailInput.addEventListener("input", () => {
        draft.email = emailInput.value;
      });
      include.addEventListener("change", () => {
        draft.include = include.checked;
      });
      return h(
        "div",
        { class: `${rootClass}-confirm-row` },
        h("label", { class: `${rootClass}-confirm-include` }, include, "Add"),
        h(
          "div",
          { class: `${rootClass}-confirm-fields` },
          h("span", { class: `${rootClass}-confirm-recall` }, draft.recallName),
          nameInput,
          emailInput
        )
      );
    });
    const dialog = h(
      "div",
      {
        class: `${rootClass}-confirm-dialog`,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": `${rootClass}-confirm-title`
      },
      h("h2", { class: `${rootClass}-confirm-title`, id: `${rootClass}-confirm-title` }, "Confirm new people"),
      h(
        "p",
        { class: `${rootClass}-confirm-lede` },
        "These names did not match an existing Person. Confirm the full name and email, or skip anyone you do not want to add."
      ),
      h("div", { class: `${rootClass}-confirm-list` }, ...rows),
      h(
        "div",
        { class: `${rootClass}-confirm-actions` },
        h("button", {
          type: "button",
          class: `${rootClass}-confirm-skip`,
          onClick: /* @__PURE__ */ __name(() => {
            closeParticipantConfirmDialog();
            options.onSkip?.();
          }, "onClick")
        }, "Skip all"),
        h("button", {
          type: "button",
          class: `${rootClass}-confirm-save`,
          onClick: /* @__PURE__ */ __name(() => {
            const creates = confirmedCreates(drafts);
            closeParticipantConfirmDialog();
            options.onConfirm(creates);
          }, "onClick")
        }, "Add selected")
      )
    );
    overlayEl = /** @type {HTMLElement} */
    h("div", { class: `${rootClass}-confirm-overlay` }, dialog);
    overlayEl.addEventListener("mousedown", (event) => {
      if (event.target === overlayEl) {
        closeParticipantConfirmDialog();
        options.onSkip?.();
      }
    });
    document.body.appendChild(overlayEl);
    mountOverlaySurface(overlayEl, rootClass);
    detachKey = /* @__PURE__ */ __name((event) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      event.stopPropagation();
      closeParticipantConfirmDialog();
      options.onSkip?.();
    }, "detachKey");
    window.addEventListener("keydown", detachKey, true);
    const first = (
      /** @type {HTMLInputElement|null} */
      overlayEl.querySelector('input[type="text"]')
    );
    if (first && typeof first.focus === "function") first.focus();
  }
  __name(openParticipantConfirmDialog, "openParticipantConfirmDialog");

  // confirm-dialog.js
  var overlayEl2 = null;
  var detachKey2 = null;
  var settle = null;
  function closeConfirmDialog(value = false) {
    const done = settle;
    settle = null;
    if (detachKey2) {
      window.removeEventListener("keydown", detachKey2, true);
      detachKey2 = null;
    }
    try {
      overlayEl2?.remove();
    } catch {
    }
    overlayEl2 = null;
    if (done) done(value);
  }
  __name(closeConfirmDialog, "closeConfirmDialog");
  function confirmBodyNodes(rootClass, body) {
    const parts = normalizeConfirmBody(body);
    const nodes = [];
    if (parts.intro) nodes.push(h("p", { class: `${rootClass}-confirm-lede` }, parts.intro));
    if (parts.items.length) {
      nodes.push(h(
        "ul",
        { class: `${rootClass}-confirm-bullets` },
        ...parts.items.map((item) => h("li", {}, item))
      ));
    }
    if (parts.outro) nodes.push(h("p", { class: `${rootClass}-confirm-note` }, parts.outro));
    if (!nodes.length) nodes.push(h("p", { class: `${rootClass}-confirm-lede` }, ""));
    return nodes;
  }
  __name(confirmBodyNodes, "confirmBodyNodes");
  function attachOverlayChrome(rootClass, cancelValue) {
    const root = (
      /** @type {HTMLElement} */
      overlayEl2
    );
    if (!root) return;
    root.addEventListener("mousedown", (event) => {
      if (event.target === root) closeConfirmDialog(cancelValue);
    });
    document.body.appendChild(root);
    mountOverlaySurface(root, rootClass);
    detachKey2 = /* @__PURE__ */ __name((event) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      event.stopPropagation();
      closeConfirmDialog(cancelValue);
    }, "detachKey");
    window.addEventListener("keydown", detachKey2, true);
  }
  __name(attachOverlayChrome, "attachOverlayChrome");
  function openConfirmDialog(options) {
    closeConfirmDialog(false);
    const rootClass = options.rootClass || "plg-meetings";
    const title = String(options.title || "Confirm");
    const confirmLabel = options.confirmLabel || "Apply";
    const cancelLabel = options.cancelLabel || "Cancel";
    return new Promise((resolve) => {
      settle = resolve;
      const dialog = h(
        "div",
        {
          class: `${rootClass}-confirm-dialog`,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": `${rootClass}-ask-title`
        },
        h("h2", { class: `${rootClass}-confirm-title`, id: `${rootClass}-ask-title` }, title),
        ...confirmBodyNodes(rootClass, options.body),
        h(
          "div",
          { class: `${rootClass}-confirm-actions` },
          h("button", {
            type: "button",
            class: `${rootClass}-confirm-skip`,
            onClick: /* @__PURE__ */ __name(() => closeConfirmDialog(false), "onClick")
          }, cancelLabel),
          h("button", {
            type: "button",
            class: `${rootClass}-confirm-save`,
            onClick: /* @__PURE__ */ __name(() => closeConfirmDialog(true), "onClick")
          }, confirmLabel)
        )
      );
      overlayEl2 = /** @type {HTMLElement} */
      h("div", { class: `${rootClass}-confirm-overlay` }, dialog);
      attachOverlayChrome(rootClass, false);
      const primary = (
        /** @type {HTMLElement|null} */
        overlayEl2.querySelector(`.${rootClass}-confirm-save`)
      );
      if (primary && typeof primary.focus === "function") primary.focus();
    });
  }
  __name(openConfirmDialog, "openConfirmDialog");
  function openChoiceApplyDialog(options) {
    closeConfirmDialog(null);
    const rootClass = options.rootClass || "plg-meetings";
    const title = String(options.title || "Choose");
    const items = Array.isArray(options.items) ? options.items : [];
    const confirmLabel = options.confirmLabel || "Apply";
    const copyFor = /* @__PURE__ */ __name((value) => {
      if (typeof options.confirmCopy === "function") return options.confirmCopy(value);
      if (options.confirmCopy && options.confirmCopy[value]) return options.confirmCopy[value];
      return regenerateConfirmCopy(value);
    }, "copyFor");
    return new Promise((resolve) => {
      settle = resolve;
      let selected = null;
      const lede = (
        /** @type {HTMLElement} */
        h(
          "p",
          { class: `${rootClass}-confirm-lede` },
          "Choose Summary, Action items, or both. Apply runs the rewrite."
        )
      );
      const applyBtn = (
        /** @type {HTMLButtonElement} */
        h("button", {
          type: "button",
          class: `${rootClass}-confirm-save`,
          disabled: true,
          onClick: /* @__PURE__ */ __name(() => {
            if (!selected) return;
            closeConfirmDialog(selected);
          }, "onClick")
        }, confirmLabel)
      );
      const buttons = items.map((item) => {
        const btn = (
          /** @type {HTMLButtonElement} */
          h(
            "button",
            {
              type: "button",
              class: `${rootClass}-choice-item`,
              "aria-pressed": "false"
            },
            h("span", { class: `${rootClass}-choice-item-label` }, item.label),
            item.detail ? h("span", { class: `${rootClass}-choice-item-detail` }, item.detail) : null
          )
        );
        btn.addEventListener("click", () => {
          selected = item.value;
          for (const other of buttons) {
            const on = other === btn;
            other.classList.toggle("is-selected", on);
            other.setAttribute("aria-pressed", on ? "true" : "false");
            if (on) applyOverlayHoverStyles(other, "save");
            else clearOverlayHoverStyles(other);
          }
          lede.textContent = copyFor(item.value);
          applyBtn.disabled = false;
        });
        return btn;
      });
      const dialog = h(
        "div",
        {
          class: `${rootClass}-confirm-dialog ${rootClass}-choice-dialog`,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": `${rootClass}-choice-title`
        },
        h("h2", { class: `${rootClass}-confirm-title`, id: `${rootClass}-choice-title` }, title),
        lede,
        h("div", { class: `${rootClass}-choice-list` }, ...buttons),
        h(
          "div",
          { class: `${rootClass}-confirm-actions` },
          h("button", {
            type: "button",
            class: `${rootClass}-confirm-skip`,
            onClick: /* @__PURE__ */ __name(() => closeConfirmDialog(null), "onClick")
          }, "Cancel"),
          applyBtn
        )
      );
      overlayEl2 = /** @type {HTMLElement} */
      h("div", { class: `${rootClass}-confirm-overlay` }, dialog);
      attachOverlayChrome(rootClass, null);
      const first = (
        /** @type {HTMLElement|null} */
        overlayEl2.querySelector(`.${rootClass}-choice-item`)
      );
      if (first && typeof first.focus === "function") first.focus();
    });
  }
  __name(openChoiceApplyDialog, "openChoiceApplyDialog");
  function openReportDialog(options) {
    closeConfirmDialog(null);
    const rootClass = options.rootClass || "plg-meetings";
    const title = String(options.title || "Diagnostics");
    const report = String(options.report || "");
    const issueTitle = String(options.issueTitle || "Meetings diagnostics");
    const repo = options.repo || MEETINGS_GITHUB_REPO;
    return new Promise((resolve) => {
      settle = resolve;
      const dialog = h(
        "div",
        {
          class: `${rootClass}-confirm-dialog ${rootClass}-report-dialog`,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": `${rootClass}-report-title`
        },
        h("h2", { class: `${rootClass}-confirm-title`, id: `${rootClass}-report-title` }, title),
        h(
          "p",
          { class: `${rootClass}-confirm-lede` },
          "Bridge, webhook, parser, and transcript diagnostics for this meeting. Nothing is written to the meeting body."
        ),
        h("pre", { class: `${rootClass}-confirm-report` }, report),
        h(
          "div",
          { class: `${rootClass}-confirm-actions` },
          h("button", {
            type: "button",
            class: `${rootClass}-confirm-skip`,
            onClick: /* @__PURE__ */ __name(async () => {
              const ok = await copyTextToClipboard(report);
              options.onCopied?.(ok);
            }, "onClick")
          }, "Copy to clipboard"),
          h("button", {
            type: "button",
            class: `${rootClass}-confirm-save`,
            onClick: /* @__PURE__ */ __name(async () => {
              const plan = buildGitHubIssueUrl({ repo, title: issueTitle, body: report });
              let copied = false;
              if (plan.copyFull) copied = await copyTextToClipboard(report);
              options.onSubmit?.({ truncated: plan.truncated, copied });
              try {
                window.open(plan.url, "_blank", "noopener");
              } catch {
              }
              closeConfirmDialog(null);
            }, "onClick")
          }, "Submit bug"),
          h("button", {
            type: "button",
            class: `${rootClass}-confirm-skip`,
            onClick: /* @__PURE__ */ __name(() => closeConfirmDialog(null), "onClick")
          }, "Cancel")
        )
      );
      overlayEl2 = /** @type {HTMLElement} */
      h("div", { class: `${rootClass}-confirm-overlay` }, dialog);
      attachOverlayChrome(rootClass, null);
      const first = (
        /** @type {HTMLElement|null} */
        overlayEl2.querySelector(`.${rootClass}-confirm-skip`)
      );
      if (first && typeof first.focus === "function") first.focus();
    });
  }
  __name(openReportDialog, "openReportDialog");

  // settings-transfer.js
  var EXPORT_FORMAT = "meetings-settings";
  var EXPORT_MAPPING_KEYS = Object.freeze([
    "meetingUrlFieldId",
    "joinAtFieldId",
    "attendeesFieldId",
    "relatedFieldId",
    "participantNamesFieldId"
  ]);
  function buildSettingsExport({ conf, userGuid, version, collectionGuid, settings, prefsKey = "recallAi", secretsKey = "recallAiSecrets" }) {
    const custom = conf && typeof conf === "object" && conf.custom && typeof conf.custom === "object" ? conf.custom : {};
    const prefs = custom[prefsKey] && typeof custom[prefsKey] === "object" ? custom[prefsKey] : null;
    const slots = custom[secretsKey] && typeof custom[secretsKey] === "object" ? custom[secretsKey] : null;
    let secrets = userGuid && slots && slots[userGuid] && typeof slots[userGuid] === "object" ? slots[userGuid] : null;
    if (!secrets && slots) {
      const keys = Object.keys(slots).filter((k) => slots[k] && typeof slots[k] === "object");
      if (keys.length === 1) secrets = slots[keys[0]];
    }
    const mapping = {};
    for (const key of EXPORT_MAPPING_KEYS) mapping[key] = String(settings && settings[key] || "");
    return {
      format: EXPORT_FORMAT,
      version: String(version || ""),
      exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
      collectionGuid: String(collectionGuid || ""),
      userGuid: String(userGuid || ""),
      prefs,
      secrets,
      mapping,
      autoSchedule: !!(settings && settings.autoSchedule)
    };
  }
  __name(buildSettingsExport, "buildSettingsExport");
  function settingsFromLegacyBag(bag, deviceKey = "") {
    if (!bag || typeof bag !== "object") return {};
    const isMap = bag.shared && typeof bag.shared === "object" || bag.byDevice && typeof bag.byDevice === "object";
    if (!isMap) return { ...bag };
    const shared = bag.shared && typeof bag.shared === "object" ? bag.shared : {};
    const slots = bag.byDevice && typeof bag.byDevice === "object" ? bag.byDevice : {};
    const mine = deviceKey && slots[deviceKey] && typeof slots[deviceKey] === "object" ? slots[deviceKey] : null;
    const first = mine || Object.values(slots).find((slot) => slot && typeof slot === "object") || {};
    return { ...shared, ...first };
  }
  __name(settingsFromLegacyBag, "settingsFromLegacyBag");
  function buildLegacyCollectionExport({ conf, userGuid, version, collectionGuid, deviceKey = "" }) {
    const custom = conf && typeof conf === "object" && conf.custom && typeof conf.custom === "object" ? conf.custom : {};
    return buildSettingsExport({ conf, userGuid, version, collectionGuid, settings: settingsFromLegacyBag(custom.recallAi, deviceKey) });
  }
  __name(buildLegacyCollectionExport, "buildLegacyCollectionExport");
  function parseSettingsImport(text) {
    const raw = String(text == null ? "" : text).trim();
    if (!raw) return { error: "Paste the JSON exported from Meetings 1.25 first." };
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch (err) {
      return { error: `Not valid JSON \u2014 ${err instanceof Error ? err.message : String(err)}` };
    }
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return { error: "Expected a JSON object." };
    if (parsed.format !== EXPORT_FORMAT) return { error: `Expected "format": "${EXPORT_FORMAT}".` };
    const collectionGuid = String(parsed.collectionGuid || "").trim();
    if (!collectionGuid) return { error: "The export carries no collectionGuid, so there is nothing to bind." };
    const mapping = {};
    const rawMapping = parsed.mapping && typeof parsed.mapping === "object" ? parsed.mapping : {};
    for (const key of EXPORT_MAPPING_KEYS) mapping[key] = String(rawMapping[key] || "").trim();
    return {
      format: EXPORT_FORMAT,
      version: String(parsed.version || ""),
      collectionGuid,
      userGuid: String(parsed.userGuid || "").trim(),
      prefs: parsed.prefs && typeof parsed.prefs === "object" ? parsed.prefs : null,
      secrets: parsed.secrets && typeof parsed.secrets === "object" ? parsed.secrets : null,
      mapping,
      autoSchedule: !!parsed.autoSchedule
    };
  }
  __name(parseSettingsImport, "parseSettingsImport");
  function applySettingsImport(custom, imported, userGuid, { prefsKey = "recallAi", secretsKey = "recallAiSecrets", bindingsKey = "recallAiCollections" } = {}) {
    if (!imported || imported.error) return {};
    const live = custom && typeof custom === "object" ? custom : {};
    const patch = {};
    if (imported.prefs) patch[prefsKey] = imported.prefs;
    if (imported.secrets && userGuid) {
      const slots = live[secretsKey] && typeof live[secretsKey] === "object" ? live[secretsKey] : {};
      const mine = slots[userGuid] && typeof slots[userGuid] === "object" ? slots[userGuid] : {};
      const merged = { ...mine };
      for (const key of ["recallApiKey", "anthropicApiKey"]) {
        const incoming = String(imported.secrets[key] || "");
        if (incoming && !String(merged[key] || "")) merged[key] = incoming;
      }
      patch[secretsKey] = { ...slots, [userGuid]: merged };
    }
    const bindings = normalizeBindings(live[bindingsKey]);
    patch[bindingsKey] = normalizeBindings({
      ...bindings,
      [imported.collectionGuid]: {
        ...bindings[imported.collectionGuid] || {},
        role: "owned",
        enabled: true,
        autoSchedule: imported.autoSchedule,
        ...imported.mapping
      }
    });
    return patch;
  }
  __name(applySettingsImport, "applySettingsImport");
  function composeStubCode(code) {
    const patches = extractPatchBlocks(String(code || "")).map((block) => block.text);
    const next = [STUB_OWNER_CLASS, ...patches].join("\n\n");
    const safe = assertCodeSafe(next);
    if (!safe.ok) return { ok: false, reason: safe.reason };
    return { ok: true, code: next, patches };
  }
  __name(composeStubCode, "composeStubCode");

  // ../../shared/settings-ui/tooltip.js
  var TIP_SELECTOR = "[data-tps-tip],[data-cf-tip]";
  var STYLE_ID = "tps-tip-css";
  var WIN_FLAG = "__tpsInstantTooltip";
  function installInstantTooltip() {
    if (typeof document === "undefined") return;
    if (typeof window !== "undefined" && /** @type {any} */
    window[WIN_FLAG]) return;
    if (typeof window !== "undefined") window[WIN_FLAG] = true;
    injectTooltipCss();
    const tip = document.createElement("div");
    tip.className = "tps-tip";
    tip.setAttribute("aria-hidden", "true");
    (document.body || document.documentElement).appendChild(tip);
    const hide = /* @__PURE__ */ __name(() => tip.classList.remove("is-visible"), "hide");
    const label = /* @__PURE__ */ __name((el2) => el2.getAttribute("data-tps-tip") || el2.getAttribute("data-cf-tip") || "", "label");
    document.addEventListener("mouseover", (e) => {
      const t = e.target instanceof Element ? e.target.closest(TIP_SELECTOR) : null;
      if (!t) {
        hide();
        return;
      }
      const text = label(t);
      if (!text) {
        hide();
        return;
      }
      tip.textContent = text;
      const r = t.getBoundingClientRect();
      tip.style.left = `${r.left + r.width / 2}px`;
      tip.style.top = `${r.top}px`;
      tip.classList.add("is-visible");
    }, true);
    document.addEventListener("mouseout", (e) => {
      const t = e.target instanceof Element ? e.target.closest(TIP_SELECTOR) : null;
      const to = e.relatedTarget instanceof Element ? e.relatedTarget : null;
      if (t && (!to || !t.contains(to))) hide();
    }, true);
    window.addEventListener("scroll", hide, true);
    window.addEventListener("blur", hide);
  }
  __name(installInstantTooltip, "installInstantTooltip");
  function injectTooltipCss() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = [
      ".tps-tip{position:fixed;z-index:2147483000;transform:translate(-50%,calc(-100% - 8px));",
      "padding:3px 8px;border-radius:var(--tps-radius-sm,5px);background:var(--tps-text,#1a1a1a);",
      "color:var(--tps-panel-bg,#fff);font-size:11px;font-weight:500;line-height:1.3;white-space:nowrap;",
      "pointer-events:none;opacity:0;box-shadow:0 2px 8px rgba(0,0,0,.35)}",
      ".tps-tip.is-visible{opacity:1}"
    ].join("");
    (document.head || document.documentElement).appendChild(style);
  }
  __name(injectTooltipCss, "injectTooltipCss");

  // plugin.js
  var PLUGIN_VERSION = "2.0.18";
  var DEV_TOOLS = true;
  var MIN_BRIDGE_VERSION = "1.22.1";
  var REQUIRED_BRIDGE_CAPABILITIES = Object.freeze([
    "append-only-realtime",
    "bridge-checks",
    "participant-artifact",
    "parser-diagnostics",
    "scheduled-bot-cancel"
  ]);
  var CANONICAL_FIELD_FOR_SETTING = Object.freeze({
    meetingUrlFieldId: FIELDS.MEETING_URL,
    joinAtFieldId: FIELDS.JOIN_AT,
    participantNamesFieldId: FIELDS.PARTICIPANT_NAMES,
    attendeesFieldId: FIELDS.ATTENDEES,
    relatedFieldId: FIELDS.RELATED
  });
  var CREATE_FIELD_OPTION = "__create__";
  var ROOT_CLASS = "plg-meetings";
  var PANEL_TYPE = "recall-ai-settings";
  var CONFIG_KEY = "recallAi";
  var SECRETS_CONFIG_KEY = "recallAiSecrets";
  var BINDINGS_CONFIG_KEY = "recallAiCollections";
  var INLINE_BUTTON_CLASS = `${ROOT_CLASS}__inline-button`;
  var INLINE_APPLIED_ATTR = "data-recall-ai-inline";
  var EDITOR_SCOPE = ".editor-panel";
  var INLINE_SKIP_SELECTOR = [
    ".sidebar",
    ".tps-panel",
    ".CodeMirror",
    ".cm-editor",
    ".plugin-code-editor",
    ".listview-overlaybuttons",
    // the editor's hover-handle overlay singleton
    ".options-cell-handle",
    // table-view row handle
    ".table-view-cell"
  ].join(", ");
  var INLINE_REF_SELECTOR = ".lineitem-ref, .lineitem-ref-title, .lineitem-lineref";
  var PLUGIN_FIELD_IDS = new Set(Object.values(FIELDS));
  var DEFAULT_SETTINGS = Object.freeze({
    version: 1,
    recallApiKey: "",
    recallRegion: "us-west-2",
    anthropicApiKey: "",
    anthropicModel: "claude-sonnet-4-6",
    bridgeUrl: "",
    mapParticipantNamesToAttendees: true,
    createMissingPeople: false,
    botImageUrl: "",
    botImageData: "",
    botImageName: "",
    botName: "Thymer Notetaker",
    joinChatMessage: "This meeting is being recorded and transcribed.",
    sendJoinChatMessage: true,
    pollSeconds: 30,
    recordingRetention: "168",
    autoSummarize: true,
    transcriptTimestamps: "clock",
    saveTranscript: true,
    transcriptLayout: "blocks",
    utteranceTimestamps: true,
    followLiveTranscript: true,
    turnHeaderTemplate: "[{Time}] {Speaker}",
    transcriptSections: false,
    sectionHeadingTemplate: "{Topic} | {Range}",
    sectionRangeStyle: "clock",
    summaryPrompt: DEFAULT_SUMMARY_PROMPT,
    transcriptHeadingText: "\u{1F399}\uFE0F Transcript",
    transcriptHeadingLevel: "h2",
    summaryHeadingText: "\u{1F4DD} Summary",
    summaryHeadingLevel: "h2",
    actionItemsHeadingText: "\u2705 Action items",
    actionItemsHeadingLevel: "h2",
    notesHeadingText: "\u{1F5D2}\uFE0F Notes",
    notesHeadingLevel: "h2",
    bodySectionOrder: DEFAULT_BODY_SECTION_ORDER,
    citationStyle: "name-time"
  });
  var HEADING_LEVEL_OPTIONS = [
    ["h1", "Heading 1 (largest)"],
    ["h2", "Heading 2"],
    ["h3", "Heading 3"],
    ["none", "No heading (plain line)"]
  ];
  var API_KEY_FIELDS = Object.freeze(["recallApiKey", "anthropicApiKey"]);
  var BOT_IMAGE_FIELDS = Object.freeze(["botImageData", "botImageName"]);
  var SECRET_KEYS = Object.freeze([...API_KEY_FIELDS]);
  function normalizePrefs(raw) {
    const src = raw && typeof raw === "object" ? raw : {};
    const str = /* @__PURE__ */ __name((key) => typeof src[key] === "string" ? src[key] : DEFAULT_SETTINGS[
      /** @type {keyof typeof DEFAULT_SETTINGS} */
      key
    ], "str");
    const bool = /* @__PURE__ */ __name((key) => typeof src[key] === "boolean" ? src[key] : DEFAULT_SETTINGS[
      /** @type {keyof typeof DEFAULT_SETTINGS} */
      key
    ], "bool");
    return {
      version: 1,
      recallRegion: str("recallRegion"),
      anthropicModel: str("anthropicModel"),
      bridgeUrl: str("bridgeUrl"),
      mapParticipantNamesToAttendees: typeof src.mapParticipantNamesToAttendees === "boolean" ? src.mapParticipantNamesToAttendees : true,
      createMissingPeople: bool("createMissingPeople"),
      botImageUrl: str("botImageUrl"),
      botImageData: str("botImageData"),
      botImageName: str("botImageName"),
      botName: str("botName"),
      joinChatMessage: str("joinChatMessage"),
      sendJoinChatMessage: bool("sendJoinChatMessage"),
      pollSeconds: clampNumber(src.pollSeconds, 10, 300, DEFAULT_SETTINGS.pollSeconds),
      recordingRetention: normalizeRecordingRetention(src.recordingRetention),
      autoSummarize: bool("autoSummarize"),
      transcriptTimestamps: normalizeTranscriptTimestampStyle(src.transcriptTimestamps),
      saveTranscript: bool("saveTranscript"),
      transcriptLayout: src.transcriptLayout === "inline" ? "inline" : "blocks",
      utteranceTimestamps: bool("utteranceTimestamps"),
      followLiveTranscript: bool("followLiveTranscript"),
      turnHeaderTemplate: str("turnHeaderTemplate"),
      transcriptSections: bool("transcriptSections"),
      sectionHeadingTemplate: str("sectionHeadingTemplate"),
      sectionRangeStyle: normalizeSectionRangeStyle(src.sectionRangeStyle),
      summaryPrompt: resolveSummaryPrompt(str("summaryPrompt")),
      transcriptHeadingText: str("transcriptHeadingText"),
      transcriptHeadingLevel: ["h1", "h2", "h3", "none"].includes(src.transcriptHeadingLevel) ? src.transcriptHeadingLevel : DEFAULT_SETTINGS.transcriptHeadingLevel,
      summaryHeadingText: str("summaryHeadingText"),
      summaryHeadingLevel: ["h1", "h2", "h3", "none"].includes(src.summaryHeadingLevel) ? src.summaryHeadingLevel : DEFAULT_SETTINGS.summaryHeadingLevel,
      actionItemsHeadingText: str("actionItemsHeadingText"),
      actionItemsHeadingLevel: ["h1", "h2", "h3", "none"].includes(src.actionItemsHeadingLevel) ? src.actionItemsHeadingLevel : DEFAULT_SETTINGS.actionItemsHeadingLevel,
      notesHeadingText: str("notesHeadingText"),
      notesHeadingLevel: ["h1", "h2", "h3", "none"].includes(src.notesHeadingLevel) ? src.notesHeadingLevel : DEFAULT_SETTINGS.notesHeadingLevel,
      bodySectionOrder: normalizeBodySectionOrder(src.bodySectionOrder),
      citationStyle: normalizeCitationStyle(src.citationStyle)
    };
  }
  __name(normalizePrefs, "normalizePrefs");
  function normalizeSecrets(raw) {
    const src = raw && typeof raw === "object" ? raw : {};
    const str = /* @__PURE__ */ __name((key) => typeof src[key] === "string" ? src[key] : "", "str");
    return {
      recallApiKey: str("recallApiKey"),
      anthropicApiKey: str("anthropicApiKey")
    };
  }
  __name(normalizeSecrets, "normalizeSecrets");
  function normalizeKeySlot(raw) {
    const src = raw && typeof raw === "object" ? raw : {};
    const str = /* @__PURE__ */ __name((key) => typeof src[key] === "string" ? src[key] : "", "str");
    return {
      recallApiKey: str("recallApiKey"),
      anthropicApiKey: str("anthropicApiKey")
    };
  }
  __name(normalizeKeySlot, "normalizeKeySlot");
  var RECALL_REGIONS = Object.freeze({
    "us-east-1": "https://us-east-1.recall.ai",
    "us-west-2": "https://us-west-2.recall.ai",
    "eu-central-1": "https://eu-central-1.recall.ai",
    "ap-northeast-1": "https://ap-northeast-1.recall.ai",
    payg: "https://api.recall.ai"
  });
  var CLAUDE_MODELS = Object.freeze([
    ["claude-haiku-4-5", "Claude Haiku 4.5 \u2014 fastest, lowest cost"],
    ["claude-sonnet-4-6", "Claude Sonnet 4.6 \u2014 balanced"],
    ["claude-sonnet-5", "Claude Sonnet 5 \u2014 higher quality"],
    ["claude-opus-4-8", "Claude Opus 4.8 \u2014 most capable"]
  ]);
  var DONE_STATUSES = /* @__PURE__ */ new Set(["done", "bot.done", "recording_done"]);
  var FATAL_STATUSES = /* @__PURE__ */ new Set(["fatal", "bot.fatal", "call_ended_by_host", "bot_rejected", "media_expired", "analysis_failed"]);
  var STATUS_LABELS = Object.freeze({
    // Recall lifecycle
    joining_call: "Joining",
    in_waiting_room: "Waiting Room",
    in_call_not_recording: "In Call",
    recording_permission_allowed: "Recording",
    recording_permission_denied: "Permission Denied",
    in_call_recording: "Recording",
    call_ended: "Call Ended",
    recording_done: "Recording Done",
    done: "Done",
    fatal: "Error",
    media_expired: "Media Expired",
    analysis_failed: "Analysis Failed",
    call_ended_by_host: "Call Ended by Host",
    bot_rejected: "Bot Rejected",
    // Plugin post-processing
    created: "Starting",
    "creating bot": "Starting",
    "leaving call": "Leaving Call",
    cancelling: "Cancelling",
    cancelled: "Cancelled",
    syncing: "Syncing",
    "processing transcript": "Processing Transcript",
    summarizing: "Summarizing",
    transcribed: "Transcribed",
    summarized: "Summarized",
    summary_failed: "Summary Failed",
    scheduled: "Scheduled",
    error: "Error"
  });
  function statusLabel(raw) {
    const normalized = String(raw || "").toLowerCase().replace(/^bot\./, "").trim();
    if (!normalized) return "";
    if (STATUS_LABELS[
      /** @type {keyof typeof STATUS_LABELS} */
      normalized
    ]) return STATUS_LABELS[
      /** @type {keyof typeof STATUS_LABELS} */
      normalized
    ];
    return normalized.replace(/[._-]+/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
  }
  __name(statusLabel, "statusLabel");
  var TELEMETRY_ENDPOINT = "https://thymer-plugins.goatcounter.com/count";
  var TELEMETRY_SCRIPT_SRC = "https://gc.zgo.at/count.js";
  var _telemetryScriptPromise = null;
  function _loadGoatCounter() {
    if (_telemetryScriptPromise) return _telemetryScriptPromise;
    _telemetryScriptPromise = new Promise((resolve) => {
      window.goatcounter = window.goatcounter || {};
      window.goatcounter.no_onload = true;
      window.goatcounter.allow_local = false;
      if (typeof window.goatcounter.count === "function") {
        resolve();
        return;
      }
      const s = document.createElement("script");
      s.async = true;
      s.src = TELEMETRY_SCRIPT_SRC;
      s.setAttribute("data-goatcounter", TELEMETRY_ENDPOINT);
      s.setAttribute("data-goatcounter-settings", '{"no_onload": true}');
      s.onload = () => resolve();
      s.onerror = () => resolve();
      document.head.appendChild(s);
    });
    return _telemetryScriptPromise;
  }
  __name(_loadGoatCounter, "_loadGoatCounter");
  function _fireTelemetry(path) {
    _loadGoatCounter().then(() => {
      try {
        window.goatcounter?.count?.({ path, title: "", event: false });
      } catch (_) {
      }
    });
  }
  __name(_fireTelemetry, "_fireTelemetry");
  function _telemetryBlocked() {
    try {
      if (navigator.doNotTrack === "1") return true;
      if (localStorage.getItem("tps-telemetry-opt-out") === "1") return true;
    } catch (_) {
      return true;
    }
    return false;
  }
  __name(_telemetryBlocked, "_telemetryBlocked");
  function pingInstall(slug) {
    try {
      if (_telemetryBlocked()) return;
      const key = "tps-tcm-" + slug;
      if (localStorage.getItem(key) === "1") return;
      localStorage.setItem(key, "1");
      _fireTelemetry("thymer-" + slug);
    } catch (_) {
    }
  }
  __name(pingInstall, "pingInstall");
  function pingActive(slug) {
    try {
      if (_telemetryBlocked()) return;
      const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
      const key = "tps-act-" + slug;
      if (localStorage.getItem(key) === today) return;
      localStorage.setItem(key, today);
      _fireTelemetry("thymer-" + slug + "/active");
    } catch (_) {
    }
  }
  __name(pingActive, "pingActive");
  var Plugin = class extends AppPlugin {
    static {
      __name(this, "Plugin");
    }
    onLoad() {
      pingInstall("meetings");
      pingActive("meetings");
      this._configReady = this._safeAsync("sync plugin version and managed schemas", async () => {
        await syncPluginVersionOnLoad(this, PLUGIN_VERSION);
        await healPluginIdentity(this, {
          name: "Meetings",
          sourceRepo: "https://github.com/akaready/thymer-meetings",
          legacySourceRepos: ["https://github.com/akaready/thymer-recall-ai"],
          sourceFiles: { branch: "main", json: "plugin.json", js: "plugin.js" }
        });
        await this._loadManaged();
        await this._migrateOwnedSchemas();
      });
      this._disabled = readKillSwitch(this);
      this._initState();
      this._safe("load settings", () => {
        this._secrets = this._loadSecrets();
        this._prefs = this._settingsStore.load().settings;
        this._recomputeSettings();
      });
      this._safe("promote api keys", () => void /** @type {Promise<any>} */
      this._configReady.then(() => this._promoteLocalKeysToSlot()));
      this._safe("inject css", () => {
        this.ui.injectCSS(PANEL_CSS);
        this.ui.injectCSS(this._css());
        try {
          installInstantTooltip();
        } catch {
        }
      });
      this._safe("register settings panel", () => this._registerSettingsPanel());
      this._safe("register action commands", () => this._registerActionCommands());
      this._safe("attach settings lifecycle", () => this._registerSettingsLifecycle());
      this._safe("load workspace collections", () => void this._loadWorkspaceCollections());
      this._safe("heal mounted panel", () => {
        const staleRoot = document.querySelector(".plg-meetings-panel");
        if (staleRoot && staleRoot.parentElement) {
          this._panelEl = staleRoot.parentElement;
          this._renderPanel();
          this._refreshScopePillUntilSettled();
        }
      });
      if (this._disabled) {
        this._log("loaded (kill switch off \u2014 effects skipped)");
        return;
      }
      this._safe("register events", () => this._registerEvents());
      this._safe("attach editor observer", () => this._attachEditorObserver());
      void this._safeAsync("refresh records", async () => {
        await this._configReady;
        await this._refreshRecordIndex();
        await this._restorePolling();
        this._decorateInlineRefs();
        this._autoScheduleSweep();
      });
      this._log("loaded", { settingsLoaded: !!this._settings });
    }
    _initState() {
      this._handlerIds = [];
      this._panelEl = null;
      this._settingsPanel = null;
      this._commandItem = null;
      this._actionCommands = [];
      this._managed = /* @__PURE__ */ new Map();
      this._recordCollection = /* @__PURE__ */ new Map();
      this._selectedCollectionGuid = "";
      this._importDraft = "";
      this._createCollectionInFlight = null;
      this._regenerateInFlight = /* @__PURE__ */ new Map();
      this._regenerateActionsInFlight = /* @__PURE__ */ new Map();
      this._healInFlight = null;
      this._healRecordInFlight = /* @__PURE__ */ new Map();
      this._cleanupInFlight = null;
      this._headingRepairInFlight = null;
      this._attendeePrompted = /* @__PURE__ */ new Set();
      this._editorObserver = null;
      this._observedRoot = null;
      this._attachRetryTimer = null;
      this._recordRefreshTimer = null;
      this._detachSettingsLifecycle = null;
      this._cancelPillSettle = null;
      this._recordsByGuid = /* @__PURE__ */ new Map();
      this._pollers = /* @__PURE__ */ new Map();
      this._syncInFlight = /* @__PURE__ */ new Map();
      this._botCreateInFlight = /* @__PURE__ */ new Map();
      this._personCreateInFlight = /* @__PURE__ */ new Map();
      this._skeletonInFlight = /* @__PURE__ */ new Map();
      this._diagnosticsByRecord = /* @__PURE__ */ new Map();
      this._setupDoctorState = this._loadSetupDoctorState();
      this._setupDoctorInFlight = null;
      this._workspaceCollections = [];
      this._workspaceCollectionsLoaded = false;
      this._workspaceCollectionsPromise = null;
      this._autoScheduled = /* @__PURE__ */ new Set();
      this._lastJoinAtByGuid = /* @__PURE__ */ new Map();
      this._activeRecordGuid = "";
      this._restorePanelPlace();
      this._settingsStore = createSettingsStore(this, {
        slug: "recall-ai",
        key: CONFIG_KEY,
        // synced blob stays at conf.custom.recallAi
        version: PLUGIN_VERSION,
        normalize: /* @__PURE__ */ __name((raw) => normalizePrefs(raw), "normalize")
        // No scopeKey in 2.x: prefs belong to the global plugin, not to any one collection.
      });
      this._prefs = normalizePrefs(null);
      this._secrets = normalizeSecrets(null);
      this._recomputeSettings();
    }
    /** Runtime + panel read ONE merged view; prefs and secrets are disjoint key sets. */
    _recomputeSettings() {
      this._settings = { ...this._prefs, ...this._secrets };
      this._draft = { ...this._settings };
    }
    /**
     * Every collection Meetings manages, resolved from the bindings map.
     *
     * A binding can name a collection that has since been deleted, and the workspace can gain one
     * Meetings was told about before it existed — so the registry is a JOIN, rebuilt whenever either
     * side can have moved (load, collection.*, and after any binding save).
     */
    async _loadManaged() {
      const next = /* @__PURE__ */ new Map();
      const bindings = this._bindings();
      const guids = Object.keys(bindings);
      if (guids.length) {
        let collections = [];
        try {
          collections = await this.data.getAllCollections() || [];
        } catch {
          collections = [];
        }
        for (const api of collections) {
          let guid = "";
          try {
            guid = String(api && api.getGuid ? api.getGuid() : "");
          } catch {
          }
          const binding = guid ? bindings[guid] : null;
          if (binding && binding.enabled) next.set(guid, { api, binding });
        }
      }
      this._managed = next;
      return next;
    }
    /** The bindings map as stored on THIS plugin's config. */
    _bindings() {
      try {
        const conf = (
          /** @type {any} */
          this.getConfiguration ? this.getConfiguration() : {}
        );
        return normalizeBindings(conf && conf.custom ? conf.custom[BINDINGS_CONFIG_KEY] : null);
      } catch {
        return normalizeBindings(null);
      }
    }
    /**
     * Read-modify-write one binding through the store's atomic custom patch, so a binding edit can
     * never race a settings flush or a secret-slot write. The save reloads the plugin.
     *
     * @param {string} collectionGuid
     * @param {any} patch pass null to REMOVE the binding
     */
    async _saveBinding(collectionGuid, patch) {
      const guid = String(collectionGuid || "").trim();
      if (!guid) return false;
      const ok = await this._settingsStore.saveCustomPatch((custom) => {
        const current = normalizeBindings(custom[BINDINGS_CONFIG_KEY]);
        if (patch === null) delete current[guid];
        else current[guid] = { ...current[guid] || newBinding("hosted"), ...patch };
        return { [BINDINGS_CONFIG_KEY]: normalizeBindings(current) };
      });
      if (!ok) {
        this._toast("Could not save the collection binding", "Thymer did not hand over a writable config handle.");
        return false;
      }
      await this._loadManaged();
      if (this._panelEl && document.contains(this._panelEl)) this._renderPanel();
      return true;
    }
    /**
     * The collection a record belongs to.
     *
     * `PluginRecord` has no `getCollection()`, so this is the event's `collectionGuid` (recorded into
     * `_recordCollection` as events arrive) or the index built from each managed collection's records.
     * Empty when unknown — never guess, because every write gate hangs off this.
     *
     * @param {any} record
     */
    _collectionGuidOf(record) {
      if (!record || !record.guid) return "";
      const direct = recordCollectionGuid(record);
      if (direct) return direct;
      return (
        /** @type {Map<string, string>} */
        this._recordCollection.get(record.guid) || ""
      );
    }
    /** @param {any} record */
    _bindingFor(record) {
      const entry = (
        /** @type {Map<string, any>} */
        this._managed.get(this._collectionGuidOf(record))
      );
      return entry ? entry.binding : null;
    }
    /** The collection API handle for a managed collection guid. */
    /** @param {string} collectionGuid */
    _managedApi(collectionGuid) {
      const entry = (
        /** @type {Map<string, any>} */
        this._managed.get(String(collectionGuid || ""))
      );
      return entry ? entry.api : null;
    }
    /**
     * One send button wired to _startBot, injected into the record page's Bot Status property row.
     * mousedown/click are stopped so a click sends the bot instead of entering the field.
     */
    /**
     * @param {any} record
     * @param {string} icon
     * @param {string} label
     * @param {any} opts
     */
    _sendButton(record, icon, label, opts) {
      const btn = this.ui.createButton({ icon, label, onClick: /* @__PURE__ */ __name(() => void this._startBot(record, opts), "onClick") });
      btn.classList.add(`${ROOT_CLASS}__pagebtn`);
      btn.addEventListener("mousedown", (ev) => ev.stopPropagation());
      btn.addEventListener("click", (ev) => ev.stopPropagation());
      return btn;
    }
    /**
     * Append the send button(s) to `container` when this record can take a bot — no bot in flight (so a
     * click can't double-book) AND it is actually a meeting (has a URL, so a mixed collection grows no
     * dead buttons). A schedulable meeting also gets an immediate "Join now" so a future Date never
     * traps you. Join Now always means now. Returns true if anything was appended.
     */
    /**
     * @param {any} container
     * @param {any} record
     */
    _appendSendButtons(container, record, state = this._recordVisualState(record)) {
      const sendable = (state.kind === "idle" || state.kind === "schedulable") && !!this._meetingUrl(record);
      if (!sendable) return false;
      container.appendChild(this._sendButton(record, state.icon, state.label, { immediate: state.kind === "idle" }));
      if (state.kind === "schedulable") container.appendChild(this._sendButton(record, "microphone", "Join now", { immediate: true }));
      return true;
    }
    /**
     * Inject the send button into the Bot Status property row ON THE RECORD PAGE — the one affordance
     * a global plugin has, now that there is no collection nav strip and no CollectionPlugin-only
     * `properties.render` hook for table cells. Thymer renders each property as
     * `.page-props-row[data-field-id=<id>]` with a `.page-prop-val` value cell inside `.page-props-editor`
     * (confirmed via DOM probe). We target the recall_status row's value cell for the panel's active
     * record. Runs synchronously inside the panel MutationObserver; a state signature stops it churning
     * the DOM on every unrelated keystroke, and it self-removes once a bot is in flight (not sendable).
     * Note: an empty status row is hidden in the properties panel's "Filled in" mode, so the button
     * shows for a fresh meeting only in "All" mode — acceptable, and it always shows once it has a value.
     *
     * @param {HTMLElement} [root] the active panel's element (passed by _attachEditorObserver)
     */
    _decorateStatusField(root) {
      if (this._disabled) return;
      try {
        const panel2 = this.ui.getActivePanel && this.ui.getActivePanel();
        const scope = root || (panel2 && panel2.getElement ? panel2.getElement() : null);
        if (!scope || typeof scope.querySelector !== "function") return;
        const valCell = scope.querySelector(`.page-props-editor .page-props-row[data-field-id="${FIELDS.STATUS}"] .page-prop-val`);
        if (!valCell) return;
        const record = panel2 && panel2.getActiveRecord ? panel2.getActiveRecord() : null;
        if (!record) return;
        const MARK = `${ROOT_CLASS}__pagebtns`;
        let holder = valCell.querySelector(`.${MARK}`);
        if (!this._isOurRecord(record)) {
          if (holder) holder.remove();
          return;
        }
        const state = this._recordVisualState(record);
        const sendable = (state.kind === "idle" || state.kind === "schedulable") && !!this._meetingUrl(record);
        if (!sendable) {
          if (holder) holder.remove();
          return;
        }
        const sig = `${state.kind}|${state.label}|${record.guid}`;
        if (holder && holder.getAttribute("data-sig") === sig) return;
        if (holder) holder.remove();
        holder = document.createElement("span");
        holder.className = MARK;
        holder.setAttribute("data-sig", sig);
        this._appendSendButtons(holder, record, state);
        valCell.appendChild(holder);
      } catch (err) {
        this._log("status field decorate failed", { error: this._errorMessage(err) });
      }
    }
    /** The user-visible name of a collection, for panel rows and toasts. */
    /** @param {string} guid */
    _collectionName(guid) {
      const api = this._managedApi(guid) || this._collectionByGuid(guid);
      try {
        const name = api && api.getName ? api.getName() : "";
        if (name) return String(name);
      } catch {
      }
      return guid ? `Collection ${String(guid).slice(0, 8)}` : "this collection";
    }
    /**
     * Cache collection API handles: the Collections tab's "add an existing collection" list, and the
     * People collection lookup for attendee matching. No self-filter in 2.x — a global plugin is not
     * a collection, and every collection in the workspace is a candidate.
     */
    async _loadWorkspaceCollections(force = false) {
      if (this._workspaceCollectionsPromise && !force) return this._workspaceCollectionsPromise;
      const task = (async () => {
        try {
          const list2 = await this.data.getAllCollections();
          this._workspaceCollections = (Array.isArray(list2) ? list2 : []).filter((collection) => collection && collection.getGuid).sort((a, b) => String(a.getName ? a.getName() : "").localeCompare(String(b.getName ? b.getName() : "")));
          this._workspaceCollectionsLoaded = true;
        } catch (err) {
          this._workspaceCollectionsLoaded = true;
          this._log("workspace collections unavailable", { error: this._errorMessage(err) });
        }
        if (this._panelEl && document.contains(this._panelEl)) this._renderPanel();
        return this._workspaceCollections;
      })();
      this._workspaceCollectionsPromise = task;
      try {
        return await task;
      } finally {
        if (this._workspaceCollectionsPromise === task) this._workspaceCollectionsPromise = null;
      }
    }
    /** @param {string} guid */
    _collectionByGuid(guid) {
      return (this._workspaceCollections || []).find((collection) => {
        try {
          return String(collection.getGuid()) === String(guid || "");
        } catch {
          return false;
        }
      }) || null;
    }
    _registerSettingsPanel() {
      this._commandItem = this.ui.addCommandPaletteCommand({
        label: "Plugin: Meetings",
        icon: "microphone",
        onSelected: /* @__PURE__ */ __name(() => this._openPanel(), "onSelected")
      });
      this.ui.registerCustomPanelType(PANEL_TYPE, (pluginPanel) => {
        try {
          pluginPanel.setTitle("Meetings Settings");
        } catch {
        }
        const root = pluginPanel.getElement();
        if (!root) return;
        this._settingsPanel = pluginPanel;
        this._panelEl = root;
        this._draft = { ...this._settings };
        this._renderPanel();
      });
    }
    /**
     * The record the user is looking at, or null. Every palette action works on it — there is no
     * collection nav strip in a global plugin.
     */
    _activeRecord() {
      try {
        const panel2 = this.ui.getActivePanel && this.ui.getActivePanel();
        const record = panel2 && panel2.getActiveRecord ? panel2.getActiveRecord() : null;
        if (record && record.guid) this._activeRecordGuid = record.guid;
        return record || null;
      } catch {
        return null;
      }
    }
    /**
     * The four record actions that used to be nav-strip buttons. Join Now also stays as the button
     * injected into the Bot Status property row; these are the keyboard route to all of them.
     *
     * @param {string} label
     * @param {string} icon
     * @param {(record: any) => any} run
     */
    _addActionCommand(label, icon, run) {
      const item = this.ui.addCommandPaletteCommand({
        label,
        icon,
        onSelected: /* @__PURE__ */ __name(() => {
          if (this._disabled) return this._toast("Meetings is off", "Turn the plugin on in Plugin: Meetings to use this.");
          const record = this._activeRecord();
          if (!record || !this._isOurRecord(record)) {
            return this._toast("Open a meeting first", "This record is not in a collection Meetings manages.");
          }
          void run(record);
        }, "onSelected")
      });
      /** @type {any[]} */
      this._actionCommands.push(item);
      return item;
    }
    _registerActionCommands() {
      this._addActionCommand("Meetings: Join now", "microphone", (record) => this._joinNowAction(record));
      this._addActionCommand("Meetings: Repair meeting", "hammer", (record) => this._confirmRepairMeeting(record));
      this._addActionCommand("Meetings: Regenerate summary or action items", "refresh", (record) => this._openRegenerateMenu(record));
      this._addActionCommand("Meetings: Diagnostics", "stethoscope", (record) => this._showMeetingDiagnostics(record));
    }
    /**
     * One button, one command, one meaning per state — lifted verbatim from the retired Join Now nav
     * button so the palette and the row button cannot drift apart.
     * @param {any} record
     */
    _joinNowAction(record) {
      const kind = this._recordVisualState(record).kind;
      if (kind === "scheduled") return this._cancelScheduledBot(record);
      if (kind === "recording") return this._stopBot(record);
      if (kind === "summarizing" || kind === "processing" || kind === "cancelling") {
        return this._toast("Still working", "The meeting is over and the transcript is being processed. Nothing to do.");
      }
      if (kind === "done" || kind === "repair") return this._confirmRepairMeeting(record);
      return this._startBot(
        /** @type {any} */
        record,
        { immediate: true }
      );
    }
    _registerEvents() {
      const on = this.events && this.events.on ? this.events.on.bind(this.events) : null;
      if (!on) return;
      const ALL = { collection: "*" };
      /** @type {string[]} */
      this._handlerIds.push(on("panel.navigated", () => {
        this._attachEditorObserver();
        this._activeRecord();
      }));
      /** @type {string[]} */
      this._handlerIds.push(on("panel.focused", () => {
        this._attachEditorObserver();
        this._activeRecord();
      }));
      /** @type {string[]} */
      this._handlerIds.push(on("record.created", (ev) => {
        const collGuid = String(ev && ev.collectionGuid || "");
        const entry = collGuid ? (
          /** @type {Map<string, any>} */
          this._managed.get(collGuid)
        ) : null;
        if (!entry) return;
        this._scheduleRecordRefresh();
        const rec = (
          /** @type {any} */
          ev && typeof ev.getRecord === "function" ? ev.getRecord() : null
        );
        if (!rec || !rec.guid) return;
        /** @type {Map<string, any>} */
        this._recordsByGuid.set(rec.guid, rec);
        /** @type {Map<string, string>} */
        this._recordCollection.set(rec.guid, collGuid);
        if (entry.binding.role === "owned") void this._ensureMeetingSkeleton(rec);
      }, ALL));
      /** @type {any[]} */
      this._handlerIds.push(on("record.updated", (ev) => {
        const collGuid = String(ev && ev.collectionGuid || "");
        if (collGuid && !/** @type {Map<string, any>} */
        this._managed.has(collGuid)) return;
        this._scheduleRecordRefresh();
        this._decorateStatusField();
        const rec = (
          /** @type {any} */
          ev && typeof ev.getRecord === "function" ? ev.getRecord() : ev
        );
        if (!rec || !rec.guid) return;
        if (collGuid) /** @type {Map<string, string>} */
        this._recordCollection.set(rec.guid, collGuid);
        if (this._isOurRecord(rec)) void this._handleMeetingDateUpdate(rec);
      }, ALL));
      /** @type {any[]} */
      this._handlerIds.push(on("record.moved", () => this._scheduleRecordRefresh()));
      const onCollectionChange = /* @__PURE__ */ __name(() => {
        void this._safeAsync("reload managed collections", async () => {
          await this._loadManaged();
          this._scheduleRecordRefresh();
        });
      }, "onCollectionChange");
      /** @type {any[]} */
      this._handlerIds.push(on("collection.created", onCollectionChange, ALL));
      /** @type {any[]} */
      this._handlerIds.push(on("collection.updated", onCollectionChange, ALL));
      /** @type {any[]} */
      this._handlerIds.push(on("reload", () => {
        this._scheduleRecordRefresh();
        this._attachEditorObserver();
      }));
    }
    onUnload() {
      this._cancelPillSettle?.();
      this._cancelPillSettle = null;
      for (const id of this._handlerIds || []) {
        try {
          if (this.events && this.events.off) this.events.off(id);
        } catch {
        }
      }
      this._handlerIds = [];
      if (this._commandItem) {
        this._commandItem.remove();
        this._commandItem = null;
      }
      for (const item of this._actionCommands || []) {
        try {
          if (item && item.remove) item.remove();
        } catch {
        }
      }
      this._actionCommands = [];
      closeParticipantConfirmDialog();
      closeConfirmDialog(false);
      if (this._editorObserver) this._editorObserver.disconnect();
      this._editorObserver = null;
      this._settingsPanel = null;
      if (this._attachRetryTimer) clearTimeout(this._attachRetryTimer);
      if (this._recordRefreshTimer) clearTimeout(this._recordRefreshTimer);
      try {
        if (this._detachSettingsLifecycle) this._detachSettingsLifecycle();
      } catch {
      }
      this._detachSettingsLifecycle = null;
      for (const poller of this._pollers && this._pollers.values ? this._pollers.values() : []) clearInterval(poller.timer);
      if (this._pollers && this._pollers.clear) this._pollers.clear();
      if (this._syncInFlight && this._syncInFlight.clear) this._syncInFlight.clear();
      if (this._botCreateInFlight && this._botCreateInFlight.clear) this._botCreateInFlight.clear();
      if (this._skeletonInFlight && this._skeletonInFlight.clear) this._skeletonInFlight.clear();
      if (this._healRecordInFlight && this._healRecordInFlight.clear) this._healRecordInFlight.clear();
      if (this._regenerateInFlight && this._regenerateInFlight.clear) this._regenerateInFlight.clear();
      if (this._regenerateActionsInFlight && this._regenerateActionsInFlight.clear) this._regenerateActionsInFlight.clear();
      if (this._diagnosticsByRecord && this._diagnosticsByRecord.clear) this._diagnosticsByRecord.clear();
      this._setupDoctorInFlight = null;
      this._healInFlight = null;
      this._cleanupInFlight = null;
      this._headingRepairInFlight = null;
      this._workspaceCollectionsPromise = null;
      this._safe("strip inline buttons", () => this._stripInlineButtons());
    }
    async _openPanel() {
      if (this._panelEl && document.contains(this._panelEl)) return;
      const active = this.ui.getActivePanel && this.ui.getActivePanel();
      const next = await this.ui.createPanel(active ? { afterPanel: active } : void 0);
      if (next) next.navigateToCustomType(PANEL_TYPE);
    }
    /**
     * Device-local secrets entry: the bot image always, and the API keys only
     * as a fallback until they are promoted into the per-user synced slot.
     * Never folded into any saveConfiguration payload.
     */
    _secretsStorageKey() {
      let workspace = "";
      try {
        workspace = this.getWorkspaceGuid ? this.getWorkspaceGuid() || "" : "";
      } catch {
      }
      return `recall-ai/${workspace || "default"}/global/secrets`;
    }
    _loadLocalSecrets() {
      try {
        const raw = localStorage.getItem(this._secretsStorageKey());
        return normalizeSecrets(raw ? JSON.parse(raw) : null);
      } catch {
        return normalizeSecrets(null);
      }
    }
    /**
     * Patch-write the device-local entry. Always a PATCH, never a dump of
     * `this._secrets` — the in-memory view may hold slot-sourced API keys,
     * and an image edit must not resurrect them into the local entry.
     * @param {any} patch
     */
    _writeLocalSecretsEntry(patch) {
      try {
        const next = normalizeSecrets({ ...this._loadLocalSecrets(), ...patch });
        const serialized = JSON.stringify(next);
        localStorage.setItem(this._secretsStorageKey(), serialized);
        if (localStorage.getItem(this._secretsStorageKey()) !== serialized) {
          throw new Error("Local storage did not retain the write.");
        }
        return true;
      } catch (err) {
        this._toast("Unable to save on this device", this._errorMessage(err));
        return false;
      }
    }
    /** The current user's guid — the official `getActiveUsers()[0]` SDK idiom. */
    _currentUserGuid() {
      try {
        const users = this.data && this.data.getActiveUsers ? this.data.getActiveUsers() : null;
        const user = users && users[0];
        return user && typeof user.guid === "string" && user.guid || "";
      } catch {
        return "";
      }
    }
    /** This user's synced key slot, or null when unresolvable/absent. */
    _readSecretsSlot(userGuid = this._currentUserGuid()) {
      if (!userGuid) return null;
      try {
        const conf = (
          /** @type {any} */
          this.getConfiguration ? this.getConfiguration() : {}
        );
        const map = conf && conf.custom ? conf.custom[SECRETS_CONFIG_KEY] : null;
        const slot = map && typeof map === "object" ? map[userGuid] : null;
        return slot && typeof slot === "object" ? normalizeKeySlot(slot) : null;
      } catch {
        return null;
      }
    }
    /**
     * The merged in-memory secrets view: API keys from this user's synced slot
     * (per-field device-local fallback, so a key never vanishes mid-promotion
     * or when a slot was created elsewhere with only one key), bot image from
     * this device. With no resolvable user this degrades to exactly the
     * device-local behavior.
     */
    _loadSecrets() {
      const local = this._loadLocalSecrets();
      const slot = this._readSecretsSlot();
      if (!slot) return local;
      return {
        ...local,
        recallApiKey: slot.recallApiKey || local.recallApiKey,
        anthropicApiKey: slot.anthropicApiKey || local.anthropicApiKey
      };
    }
    /**
     * Write this user's key slot: read the map from config, spread it, replace
     * ONLY self's slot, ONE saveConfiguration (which reloads the plugin — the
     * mounted panel heals onto the fresh instance, same as after a ↑ push).
     * Same identity guard as the shared store. Resolves false when nothing was
     * persisted (caller falls back to the device-local entry).
     * @param {string} userGuid
     * @param {any} keys
     */
    async _writeSecretsSlot(userGuid, keys) {
      if (!userGuid) return false;
      try {
        const nextSlot = normalizeKeySlot(keys);
        return await this._settingsStore.saveCustomPatch((custom) => {
          const map = custom[SECRETS_CONFIG_KEY] && typeof custom[SECRETS_CONFIG_KEY] === "object" ? custom[SECRETS_CONFIG_KEY] : {};
          return { [SECRETS_CONFIG_KEY]: { ...map, [userGuid]: nextSlot } };
        });
      } catch {
        return false;
      }
    }
    /**
     * Keep a device-local copy of the API keys, mirroring whatever the synced
     * slot now holds.
     *
     * This used to STRIP the local copy once the slot owned the keys, on the
     * reasoning that one source of truth is cleaner. It is — right until
     * something replaces `conf.custom` wholesale, at which point the slot is
     * gone and the key is unrecoverable. Unlike a preference the user cannot
     * reconstruct it; they have to go and re-issue a credential.
     *
     * So the copy stays, as a durable mirror. `_loadSecrets` only reaches for it
     * when there is NO slot at all, so it cannot outvote a live slot — and
     * because a CLEARED key mirrors an empty string here too, clearing still
     * works rather than being resurrected on the next load.
     * @param {{recallApiKey?: string, anthropicApiKey?: string}} keys
     */
    _mirrorKeysLocally(keys) {
      this._writeLocalSecretsEntry({
        recallApiKey: keys && keys.recallApiKey || "",
        anthropicApiKey: keys && keys.anthropicApiKey || ""
      });
    }
    /**
     * Commit point for API-key edits (key input `change`, i.e. blur/Enter —
     * NEVER per keystroke: the save reloads the plugin). Writes the synced slot
     * when a user is resolvable, and mirrors locally either way, so a typed key
     * survives an offline save, a failed save, and a wiped `conf.custom`.
     */
    async _commitApiKeys() {
      const keys = { recallApiKey: this._secrets.recallApiKey, anthropicApiKey: this._secrets.anthropicApiKey };
      const userGuid = this._currentUserGuid();
      if (userGuid) await this._writeSecretsSlot(userGuid, keys);
      this._mirrorKeysLocally(keys);
    }
    /**
     * One-time promotion (≤1.3.0 device-local keys → per-user synced slot).
     * Runs on load; guarded by sessionStorage set BEFORE the save attempt
     * (the syncPluginVersionOnLoad pattern) so a save that never sticks can't
     * become a reload loop. Skipped entirely when the slot already has keys —
     * then the slot is the source of truth and the local copy is stripped.
     */
    async _promoteLocalKeysToSlot() {
      const userGuid = this._currentUserGuid();
      if (!userGuid) return;
      const slot = this._readSecretsSlot(userGuid);
      if (slot && (slot.recallApiKey || slot.anthropicApiKey)) {
        this._mirrorKeysLocally(slot);
        return;
      }
      const local = this._loadLocalSecrets();
      if (!local.recallApiKey && !local.anthropicApiKey) return;
      try {
        let workspace = "";
        try {
          workspace = this.getWorkspaceGuid ? this.getWorkspaceGuid() || "" : "";
        } catch {
        }
        const guardKey = `recall-ai-secrets-promoted/${workspace || "default"}/global`;
        if (sessionStorage.getItem(guardKey) === "1") return;
        sessionStorage.setItem(guardKey, "1");
      } catch {
      }
      const ok = await this._writeSecretsSlot(userGuid, {
        recallApiKey: local.recallApiKey,
        anthropicApiKey: local.anthropicApiKey
      });
      if (ok) this._mirrorKeysLocally(local);
    }
    /**
     * @param {string} key
     * @param {any} value
     * @param {{rerender?: boolean}} [options]
     */
    _updateSetting(key, value, { rerender = false } = {}) {
      if (SECRET_KEYS.includes(key)) {
        this._secrets = normalizeSecrets({ ...this._secrets, [key]: value });
        this._recomputeSettings();
        if (rerender) this._renderPanel();
        return;
      }
      const prevPollSeconds = this._prefs.pollSeconds;
      this._prefs = this._settingsStore.update({ [key]: value }).settings;
      this._recomputeSettings();
      if (this._prefs.pollSeconds !== prevPollSeconds) this._restartPollingIntervals();
      if (rerender) this._renderPanel();
      else this._refreshScopePill();
    }
    /**
     * Live-follow of remote config changes. The shared store's own lifecycle handles the PREFS bag;
     * this second listener covers the two custom siblings the store knows nothing about — the
     * per-user API-key slot (so a second device picks up pushed keys without a reload) and the
     * collection bindings. Filtered the way the store filters: this plugin's guid, remote only.
     * Registered BEFORE the kill-switch early-return so a disabled panel still tracks remote pushes.
     */
    _registerSettingsLifecycle() {
      this._detachSettingsLifecycle = this._settingsStore.attachLifecycle({
        onRemoteChange: /* @__PURE__ */ __name((prefs) => this._onRemoteSettingsChange(prefs), "onRemoteChange")
      });
      const on = this.events && this.events.on ? this.events.on.bind(this.events) : null;
      if (!on) return;
      /** @type {any[]} */
      this._handlerIds.push(on("global-plugin.updated", (event) => {
        try {
          if (event && event.source && event.source.isLocal) return;
          let guid = "";
          try {
            guid = this.getGuid ? this.getGuid() || "" : "";
          } catch {
          }
          const ev = (
            /** @type {any} */
            event
          );
          const eventGuid = ev && (ev.pluginGuid || ev.guid || ev.rootId) || "";
          if (eventGuid && guid && eventGuid !== guid) return;
          let changed = false;
          const nextSecrets = this._loadSecrets();
          if (JSON.stringify(nextSecrets) !== JSON.stringify(this._secrets)) {
            this._secrets = nextSecrets;
            changed = true;
          }
          if (!this._settingsStore.isDiverged()) {
            const nextPrefs = this._settingsStore.load().settings;
            if (JSON.stringify(nextPrefs) !== JSON.stringify(this._prefs)) {
              this._prefs = nextPrefs;
              changed = true;
            }
          }
          void this._safeAsync("reload managed collections", async () => {
            const before = JSON.stringify(Array.from(
              /** @type {Map<string, any>} */
              this._managed.keys()
            ));
            await this._loadManaged();
            if (JSON.stringify(Array.from(
              /** @type {Map<string, any>} */
              this._managed.keys()
            )) !== before) {
              this._scheduleRecordRefresh();
              this._renderPanel();
            }
          });
          if (!changed) return;
          this._recomputeSettings();
          this._restartPollingIntervals();
          this._renderPanel();
        } catch {
        }
      }));
    }
    /**
     * Store-lifecycle adopt path ('global-plugin.updated'): adopt pushed prefs
     * AND re-read the key slot, re-apply, re-render.
     * @param {any} prefs
     */
    _onRemoteSettingsChange(prefs) {
      this._prefs = prefs;
      this._secrets = this._loadSecrets();
      this._recomputeSettings();
      this._restartPollingIntervals();
      this._renderPanel();
    }
    /**
     * Scope-cluster wiring for the header pill: push = one saveConfiguration
     * (the reload's hot-reload heal re-renders the panel); discard = two-tap
     * armed in the shared cluster, then re-adopt synced values here. The pill
     * reflects synced-prefs divergence only — secrets never influence it.
     */
    _scopeArgs() {
      return {
        diverged: this._settingsStore.isDiverged(),
        localUnavailable: !!this._settingsStore.isLocalUnavailable(),
        onPush: /* @__PURE__ */ __name(() => {
          void this._settingsStore.pushToAll().then((ok) => {
            if (!ok) {
              this._refreshScopePill();
              this._toast("Could not apply to all devices", "Thymer did not hand over a writable config handle for this plugin.");
              return;
            }
            this._toast("Meetings", "Settings applied to all devices");
            this._refreshScopePillUntilSettled();
          });
        }, "onPush"),
        onDiscard: /* @__PURE__ */ __name(() => {
          this._prefs = this._settingsStore.discardLocal();
          this._recomputeSettings();
          this._restartPollingIntervals();
          this._renderPanel();
          this._toast("Meetings", "Reverted to synced settings");
        }, "onDiscard")
      };
    }
    /** Swap just the pill cluster — never nukes inputs mid-edit. */
    _refreshScopePill() {
      const el2 = this._panelEl && this._panelEl.querySelector ? this._panelEl.querySelector(".tps-scope") : null;
      if (el2) el2.replaceWith(scopeCluster(this._scopeArgs()));
    }
    /** Post-push pill settle — see settleAfterPush in shared/plugin-settings.js. */
    _refreshScopePillUntilSettled() {
      this._cancelPillSettle?.();
      this._cancelPillSettle = this._settingsStore.settleAfterPush({
        onAdopt: /* @__PURE__ */ __name((settings) => this._onRemoteSettingsChange(settings), "onAdopt"),
        refreshPill: /* @__PURE__ */ __name(() => this._refreshScopePill(), "refreshPill")
      });
    }
    /**
     * @param {any} record
     * @param {{immediate?: boolean}} [options] immediate: ignore Date and send the bot in
     *   right now. Lets you override a scheduled meeting without clearing the field.
     */
    async _startBot(record, options = {}) {
      const key = record && record.guid || "";
      const active = key && this._botCreateInFlight && this._botCreateInFlight.get(key);
      if (active) {
        this._toast("Notetaker is already being created", "Please wait for the current request to finish.");
        return active;
      }
      return runCoalesced(
        /** @type {any} */
        this._botCreateInFlight,
        key,
        () => this._startBotOnce(record, options)
      );
    }
    /** @param {any} record */
    async _startBotOnce(record, { immediate = false } = {}) {
      if (!record) return this._toast("Open a Meeting record first", "This button needs an active record in this collection.");
      if (!this._settings.recallApiKey) return this._toast("Recall API key required", "Open Plugin: Meetings and add a Recall API key.");
      const activeBot = this._text(record, FIELDS.BOT_ID);
      const activeStatus = this._text(record, FIELDS.STATUS);
      if (activeBot && !isTerminalStatus(activeStatus) && activeStatus !== "error") {
        return this._toast(
          "A notetaker is already on this meeting",
          `Bot ${activeBot} is ${activeStatus || "active"}. Sending another would put two bots in the same call and bill you twice. Stop this one first.`
        );
      }
      const meetingUrl = this._meetingUrl(record);
      if (!meetingUrl) {
        this._setField(record, FIELDS.LAST_ERROR, "Missing meeting URL.");
        return this._toast("Missing meeting URL", "Add a meeting link, or choose the correct URL field in Plugin: Meetings.");
      }
      await this._ensureMeetingSkeleton(record);
      try {
        this._activeRecordGuid = record.guid || this._activeRecordGuid;
        this._setField(record, FIELDS.STATUS, "creating bot");
        this._updateNavButtonForRecord(record);
        this._setField(record, FIELDS.LAST_ERROR, "");
        const json = await this._createRecallBot(record, meetingUrl, { immediate });
        const botId = json.botId || json.id || json.bot_id;
        if (!botId) throw new Error("No bot id was returned.");
        this._setField(record, FIELDS.BOT_ID, botId);
        this._setField(record, FIELDS.STATUS, json.status || latestRecallStatus(json.recall || json) || "bot.created");
        this._log("bot created", { botId, status: json.status || latestRecallStatus(json.recall || json) || "bot.created" });
        this._updateNavButtonForRecord(record);
        const meetingIso = this._joinAtIso(record);
        const scheduledFor = !immediate && recallJoinAtIso(meetingIso);
        if (scheduledFor) {
          const when = formatMeetingWhen(meetingIso);
          this._toast("Bot scheduled", when ? `Bot scheduled for ${when}.` : "The notetaker is booked and will join two minutes before the meeting Date.");
        } else {
          this._toast("Bot created", botId);
        }
        this._ensurePolling(record, botId);
      } catch (err) {
        this._setField(record, FIELDS.STATUS, "error");
        this._updateNavButtonForRecord(record);
        this._setField(record, FIELDS.LAST_ERROR, this._errorMessage(err));
        this._toast("Unable to send transcriber", this._errorMessage(err));
      }
    }
    /**
     * Delete a future scheduled bot. Scheduled bots are not in a call, so `leave_call` is invalid.
     * @param {any} record
     */
    async _cancelScheduledBot(record) {
      const botId = record ? this._text(record, FIELDS.BOT_ID) : "";
      if (!botId) return this._toast("No scheduled bot to cancel", "This meeting has no booked bot.");
      const previousStatus = this._text(record, FIELDS.STATUS);
      try {
        this._setField(record, FIELDS.STATUS, "cancelling");
        this._updateNavButtonForRecord(record);
        if (this._bridgeUrl()) {
          await this._bridgeJson("/api/recall/cancel", {
            recallApiKey: this._settings.recallApiKey,
            recallRegion: this._settings.recallRegion,
            botId
          });
        } else {
          const response = await fetchWithBackoff(`${this._recallBaseUrl()}/api/v1/bot/${encodeURIComponent(botId)}/`, {
            method: "DELETE",
            headers: this._recallHeaders(false)
          });
          if (!response.ok) throw new Error(recallError(await response.json().catch(() => ({})), response.status));
        }
        this._stopPolling(botId);
        if (record.guid) /** @type {Set<string>} */
        this._autoScheduled.add(record.guid);
        this._setField(record, FIELDS.BOT_ID, "");
        this._setField(record, FIELDS.STATUS, "cancelled");
        this._setField(record, FIELDS.LAST_ERROR, "");
        this._toast("Scheduled Bot Cancelled", "The notetaker will not join this meeting.");
      } catch (err) {
        this._setField(record, FIELDS.STATUS, previousStatus || "scheduled");
        this._setField(record, FIELDS.LAST_ERROR, this._errorMessage(err));
        this._toast("Could Not Cancel Scheduled Bot", this._errorMessage(err));
      }
      this._updateNavButtonForRecord(record);
    }
    /**
     * Pull the notetaker out of the call. Recall keeps whatever it already recorded, so polling
     * carries on and the transcript and summary still land — this ends the bot's attendance, it does
     * not throw the meeting away.
     * @param {any} record
     */
    async _stopBot(record) {
      const botId = record ? this._text(record, FIELDS.BOT_ID) : "";
      if (!botId) return this._toast("No notetaker to stop", "This meeting has no active bot.");
      try {
        this._setField(record, FIELDS.STATUS, "leaving call");
        this._updateNavButtonForRecord(record);
        if (this._bridgeUrl()) {
          await this._bridgeJson("/api/recall/leave", {
            recallApiKey: this._settings.recallApiKey,
            recallRegion: this._settings.recallRegion,
            botId
          });
        } else {
          const response = await fetchWithBackoff(`${this._recallBaseUrl()}/api/v1/bot/${encodeURIComponent(botId)}/leave_call/`, {
            method: "POST",
            headers: this._recallHeaders(),
            body: JSON.stringify({})
          });
          if (!response.ok) throw new Error(recallError(await response.json().catch(() => ({})), response.status));
        }
        this._toast("Notetaker leaving", "The notetaker keeps what it already recorded \u2014 the transcript and summary will still arrive.");
        void this._syncRecord(record, { summarize: true, quiet: true, botId });
      } catch (err) {
        this._setField(record, FIELDS.LAST_ERROR, this._errorMessage(err));
        this._toast("Could not stop the notetaker", this._errorMessage(err));
      }
      this._updateNavButtonForRecord(record);
    }
    /**
     * Threaded from `_startBot`. `immediate` MUST be a parameter: when it was only
     * referenced here, `immediate` was a free variable bound to nothing, so every send
     * threw `ReferenceError: immediate is not defined` — swallowed by `_startBot`'s catch into a
     * bare "Unable to send transcriber" toast. No bot could be sent at all (1.6.0–1.7.0).
     * @param {any} record
     * @param {string} meetingUrl
     */
    async _createRecallBot(record, meetingUrl, { immediate = false } = {}) {
      const payload = this._createBotPayload(record, meetingUrl, { immediate });
      if (this._bridgeUrl()) {
        return await this._bridgeJson("/api/recall/bots", {
          recallApiKey: this._settings.recallApiKey,
          recallRegion: this._settings.recallRegion,
          payload,
          bridgeUrl: this._bridgeUrl(),
          botImageUrl: this._settings.botImageUrl || "",
          botImageData: this._settings.botImageData || ""
        });
      }
      const response = await fetchWithBackoff(`${this._recallBaseUrl()}/api/v1/bot/`, {
        method: "POST",
        headers: this._recallHeaders(),
        body: JSON.stringify(payload)
      });
      const json = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(recallError(json, response.status));
      return json;
    }
    /**
     * @param {any} record
     * @param {string} meetingUrl
     */
    _createBotPayload(record, meetingUrl, { immediate = false } = {}) {
      const payload = (
        /** @type {any} */
        {
          meeting_url: meetingUrl,
          bot_name: this._settings.botName || DEFAULT_SETTINGS.botName,
          recording_config: {
            transcript: {
              provider: {
                recallai_streaming: {
                  mode: "prioritize_low_latency",
                  language_code: "en"
                }
              },
              diarization: {
                use_separate_streams_when_available: true
              }
            }
          },
          metadata: {
            source: "thymer-recall-ai-plugin",
            record_guid: record.guid || "",
            collection_guid: this._collectionGuidOf(record),
            workspace_guid: this.getWorkspaceGuid ? this.getWorkspaceGuid() : ""
          }
        }
      );
      const retention = recordingRetentionConfig(this._settings.recordingRetention);
      if (retention) payload.recording_config.retention = retention;
      if (this._bridgeUrl()) {
        payload.recording_config.realtime_endpoints = [{
          type: "webhook",
          url: `${this._bridgeUrl()}/api/recall/realtime`,
          events: ["transcript.data"]
        }];
      }
      const joinAt = immediate ? null : recallJoinAtIso(this._joinAtIso(record));
      if (joinAt) payload.join_at = joinAt;
      if (this._settings.sendJoinChatMessage && this._settings.joinChatMessage) {
        payload.chat = {
          on_bot_join: {
            send_to: "everyone",
            message: this._settings.joinChatMessage
          }
        };
      }
      return payload;
    }
    /**
     * @param {any} record
     * @param {{botId?: string, summarize?: boolean, quiet?: boolean, repair?: boolean}} [options]
     */
    async _syncRecord(record, options = {}) {
      const knownBotId = options.botId || "";
      const botId = knownBotId || (record ? this._text(record, FIELDS.BOT_ID) : "");
      const syncKey = `${record && record.guid || "record"}:${botId || "bot"}`;
      const active = this._syncInFlight && this._syncInFlight.get(syncKey);
      if (active) {
        this._log("sync coalesced with in-flight poll", { botId });
        return active;
      }
      const task = this._syncRecordOnce(record, options);
      if (this._syncInFlight) this._syncInFlight.set(syncKey, task);
      try {
        return await task;
      } finally {
        if (this._syncInFlight && this._syncInFlight.get(syncKey) === task) this._syncInFlight.delete(syncKey);
      }
    }
    /** @param {any} record */
    async _syncRecordOnce(record, { summarize = false, quiet = false, repair = false, botId: knownBotId = "" } = {}) {
      if (!record) {
        if (!quiet) this._toast("Open a Meeting record first", "Sync needs a meeting record with a Bot ID.");
        return false;
      }
      const botId = knownBotId || this._text(record, FIELDS.BOT_ID);
      if (!botId) {
        this._log("sync skipped: missing bot id", { recordGuid: record.guid || "" });
        if (!quiet) this._toast("No bot ID", "Send the transcriber first, or paste an existing Bot ID.");
        return false;
      }
      if (!this._settings.recallApiKey) {
        if (!quiet) this._toast("Recall API key required", "Open Plugin: Meetings and add a Recall API key.");
        return false;
      }
      try {
        const repairReport = [];
        const [bot, transcript] = await Promise.all([
          this._fetchRecallJson(`/api/v1/bot/${encodeURIComponent(botId)}/`).catch(() => null),
          this._fetchRecallJson(`/api/v1/bot/${encodeURIComponent(botId)}/transcript/`)
        ]);
        const previousStatus = String(this._text(record, FIELDS.STATUS) || "").toLowerCase();
        const recallStatus = latestRecallStatus(bot) || previousStatus || "syncing";
        const keepLocalStatus = COMPLETED_MEETING_STATUSES.has(previousStatus) || LOCAL_PROCESSING_STATUSES.has(previousStatus);
        const status = keepLocalStatus ? previousStatus : recallStatus;
        if (status !== previousStatus) this._setField(record, FIELDS.STATUS, status);
        this._updateNavButtonForRecord(record);
        const liveTranscript = !!(transcript && transcript.live);
        const ended = !!bot && isMeetingEndedStatus(recallStatus);
        const recallFailed = !!bot && isFatalStatus(recallStatus);
        const rawEntries = transcriptEntries(transcript);
        if (transcript && transcript.debug && record.guid) /** @type {Map<string, any>} */
        this._diagnosticsByRecord.set(record.guid, transcript.debug);
        const entries = ended && !liveTranscript ? coalesceAdjacentTranscriptEntries(rawEntries) : rawEntries;
        const transcriptText = entriesToText(entries, this._settings);
        this._log("sync poll", {
          botId,
          status,
          pending: !!(transcript && transcript.pending),
          live: !!(transcript && transcript.live),
          rows: transcriptRowCount(transcript),
          debug: transcript && transcript.debug || null
        });
        const transcriptCompletedBeforeRepair = COMPLETED_MEETING_STATUSES.has(previousStatus);
        const summaryCompletedBeforeRepair = COMPLETED_SUMMARY_STATUSES.has(previousStatus);
        const transcriptBodyState = await this._bodyOwnershipState(record, botId, BODY_ROLES.TRANSCRIPT, "tx-head", transcriptCompletedBeforeRepair);
        const summaryBodyState = await this._bodyOwnershipState(record, botId, BODY_ROLES.SUMMARY, "summary-body", summaryCompletedBeforeRepair);
        const actionItemsBodyState = await this._bodyOwnershipState(record, botId, BODY_ROLES.ACTION_ITEMS, "action-items-body", summaryCompletedBeforeRepair);
        let mashedHealed = false;
        if (repair && typeof record.getLineItems === "function") {
          const mashed = await this._healMashedSummaryRecord(record, { quiet: true });
          if (mashed === "healed") {
            repairReport.push("mashed summary healed");
            mashedHealed = true;
          } else if (summaryBodyState === "owned" || summaryBodyState === "incomplete") {
            try {
              await this._restoreMarkedSummaryReferences(await record.getLineItems(false), botId);
            } catch {
            }
          }
        }
        const summaryNeedsWrite = !mashedHealed && (["missing", "incomplete", "unavailable"].includes(summaryBodyState) || ["missing", "incomplete", "unavailable"].includes(actionItemsBodyState));
        const summaryBodyProtected = summaryBodyState === "unknown" || actionItemsBodyState === "unknown";
        let hasSummary = mashedHealed || ["owned", "legacy", "unknown"].includes(summaryBodyState) && ["owned", "legacy", "unknown"].includes(actionItemsBodyState) && !summaryNeedsWrite;
        const finalTranscriptReady = !!transcriptText && !liveTranscript;
        const deferFinalBodyForSections = ended && finalTranscriptReady && summarize && this._settings.autoSummarize && !hasSummary && !!this._settings.anthropicApiKey && !!this._settings.saveTranscript && !!this._settings.transcriptSections && summaryNeedsWrite;
        if (transcriptText) {
          this._setField(record, FIELDS.LAST_ERROR, "");
          this._log("transcript written", { botId, characters: transcriptText.length });
          if (this._settings.saveTranscript) {
            const bodySafe = transcriptBodyState !== "unknown";
            if (!deferFinalBodyForSections && bodySafe) {
              const newestLine = await this._streamTranscriptToBody(record, entries);
              this._scrollToLiveTranscript(record, newestLine);
              repairReport.push(transcriptBodyState === "owned" || transcriptBodyState === "legacy" ? "transcript body already present" : "transcript body repaired");
            } else if (repair && transcriptBodyState === "unknown") repairReport.push("legacy transcript body skipped (ownership unknown)");
          }
        } else if (recallFailed || transcript && transcript.debug && transcript.debug.kv === "MISSING") {
          this._setField(record, FIELDS.LAST_ERROR, describeTranscriptState(transcript, bot));
        } else {
          this._setField(record, FIELDS.LAST_ERROR, "");
          this._log("transcript pending", { botId, state: describeTranscriptState(transcript, bot) });
        }
        if (ended && !finalTranscriptReady) {
          if (recallFailed) {
            this._setField(record, FIELDS.STATUS, "error");
            this._stopPolling(botId);
            this._updateNavButtonForRecord(record);
            if (!quiet) this._toast("Meeting Processing Failed", describeTranscriptState(transcript, bot));
            return true;
          }
          this._setField(record, FIELDS.STATUS, "processing transcript");
          this._updateNavButtonForRecord(record);
          return false;
        }
        const shouldGenerateSummary = summaryNeedsWrite && !summaryBodyProtected;
        if (ended && summarize && this._settings.autoSummarize && shouldGenerateSummary) {
          const summaryOk = await this._summarize(record, transcriptText, entries, {
            deferTranscriptBody: deferFinalBodyForSections
          });
          if (summaryOk) {
            hasSummary = true;
            repairReport.push("summary repaired");
          } else if (repair) repairReport.push("summary failed");
        } else if (repair && ended && hasSummary) repairReport.push(summaryBodyState === "unknown" ? "legacy summary skipped (ownership unknown)" : "summary already present");
        else if (repair && ended && summaryBodyProtected) repairReport.push("legacy summary skipped (ownership unknown)");
        if (ended && finalTranscriptReady) {
          await this._syncMeetingAttendees(record, botId, entries);
          if (repair) repairReport.push("attendees checked");
        }
        let finalized = false;
        if (ended && finalTranscriptReady) {
          const currentStatus = String(this._text(record, FIELDS.STATUS) || "").toLowerCase();
          const finalStatus = completedMeetingStatus({
            autoSummarize: !!this._settings.autoSummarize,
            hasSummary,
            summaryFailed: currentStatus === "summary_failed"
          });
          if (currentStatus !== finalStatus) this._setField(record, FIELDS.STATUS, finalStatus);
          finalized = COMPLETED_MEETING_STATUSES.has(finalStatus);
          if (finalized) this._stopPolling(botId);
        }
        this._updateNavButtonForRecord(record);
        const displayedStatus = statusLabel(this._text(record, FIELDS.STATUS) || status);
        if (!quiet) this._toast(repair ? "Meeting Repair Complete" : "Meeting Synced", repair ? repairReport.join(" \xB7 ") || displayedStatus : displayedStatus);
        return finalized;
      } catch (err) {
        const msg = this._errorMessage(err);
        this._setField(record, FIELDS.LAST_ERROR, msg);
        this._updateNavButtonForRecord(record);
        if (!quiet) this._toast("Unable to sync meeting", msg);
        return false;
      }
    }
    /** @param {string} path */
    async _fetchRecallJson(path) {
      if (this._bridgeUrl()) {
        const transcriptMatch = path.match(/^\/api\/v1\/bot\/([^/]+)\/transcript\/?$/);
        if (transcriptMatch) {
          return await this._bridgeJson("/api/recall/transcript", {
            recallApiKey: this._settings.recallApiKey,
            recallRegion: this._settings.recallRegion,
            botId: decodeURIComponent(transcriptMatch[1])
          });
        }
        const botMatch = path.match(/^\/api\/v1\/bot\/([^/]+)\/?$/);
        if (botMatch) {
          return await this._bridgeJson("/api/recall/bot", {
            recallApiKey: this._settings.recallApiKey,
            recallRegion: this._settings.recallRegion,
            botId: decodeURIComponent(botMatch[1])
          });
        }
        throw new Error(`Unsupported Recall bridge path: ${path}`);
      }
      const response = await fetchWithBackoff(`${this._recallBaseUrl()}${path}`, {
        method: "GET",
        headers: this._recallHeaders(false)
      });
      const json = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(recallError(json, response.status));
      return json;
    }
    /**
     * @param {string} botId
     * @param {any[]} entries
     */
    async _fetchFinalParticipants(botId, entries) {
      let participants = [];
      let source = "transcript";
      if (this._bridgeUrl()) {
        try {
          const result = await this._bridgeJson("/api/recall/participants", {
            recallApiKey: this._settings.recallApiKey,
            recallRegion: this._settings.recallRegion,
            botId
          });
          if (result && Array.isArray(result.participants) && result.participants.length) {
            participants = result.participants;
            source = result.source || "participant artifact";
          }
        } catch (err) {
          this._log("participant artifact unavailable; using transcript speakers", { error: this._errorMessage(err) });
        }
      }
      if (!participants.length) participants = participantsFromTranscriptEntries(entries);
      return { participants: dedupeParticipants(participants), source };
    }
    /**
     * @param {any} peopleCollection
     * @param {any} participant
     */
    async _createMissingPerson(peopleCollection, participant) {
      const name = String(participant && participant.name || "").trim().replace(/\s+/g, " ");
      if (!name || !peopleCollection || typeof peopleCollection.createRecord !== "function") return null;
      let collectionGuid = "";
      try {
        collectionGuid = peopleCollection.getGuid?.() || "";
      } catch {
      }
      const key = `${collectionGuid}:${normalizeIdentity(name)}`;
      return runCoalesced(
        /** @type {any} */
        this._personCreateInFlight,
        key,
        async () => {
          const latest = typeof peopleCollection.getAllRecords === "function" ? await peopleCollection.getAllRecords() : [];
          const rematched = matchParticipantsToPeople([participant], latest);
          if (rematched.guids.length) return { guid: rematched.guids[0], created: false };
          if (!rematched.creatableParticipants.length) return null;
          const guid = peopleCollection.createRecord(name);
          if (!guid) return null;
          let person = typeof peopleCollection.getRecord === "function" ? peopleCollection.getRecord(guid) : null;
          if (!person && typeof peopleCollection.getAllRecords === "function") {
            const created = (await peopleCollection.getAllRecords()).find((item) => item && item.guid === guid) || null;
            person = created;
          }
          if (person) assignPersonEmail(person, participant.email);
          return { guid, created: true };
        }
      );
    }
    /**
     * Match Recall participants to Attendees. Unmatched names get a confirm dialog — never auto-create.
     * @param {any} record
     * @param {string} botId
     * @param {any[]} entries
     */
    async _syncMeetingAttendees(record, botId, entries) {
      try {
        if (!this._isOurRecord(record)) return;
        const { participants, source } = await this._fetchFinalParticipants(botId, entries);
        const names = participantNames(participants, this._settings.botName || DEFAULT_SETTINGS.botName);
        if (names.length && this._fieldById(this._collectionGuidOf(record), this._mappedFieldId(record, FIELDS.PARTICIPANT_NAMES))) {
          this._setMappedField(record, FIELDS.PARTICIPANT_NAMES, names.join("\n"));
        }
        const botIdentity = normalizeIdentity(this._settings.botName || DEFAULT_SETTINGS.botName);
        const matchable = participants.filter((participant) => {
          const name = normalizeIdentity(participant && participant.name);
          return name !== botIdentity && (!!name || !!String(participant && participant.email || "").trim());
        });
        if (!this._settings.mapParticipantNamesToAttendees || !matchable.length) {
          this._log("participants noted", { source, names: names.length, peopleLinking: false });
          return;
        }
        const field = this._attendeesField(record);
        if (!isAttendeesRelationField(field)) {
          this._log("people linking skipped: Attendees must be a multi-record collection-link");
          return;
        }
        const personCollectionGuid = attendeesTargetCollectionGuid(field);
        let peopleCollection = null;
        if (personCollectionGuid) {
          peopleCollection = this._collectionByGuid(personCollectionGuid);
          if (!peopleCollection) {
            await this._loadWorkspaceCollections(true);
            peopleCollection = this._collectionByGuid(personCollectionGuid);
          }
        } else {
          if (!this._workspaceCollectionsLoaded) await this._loadWorkspaceCollections(true);
          peopleCollection = guessPeopleCollection(
            /** @type {any[]} */
            this._workspaceCollections
          );
        }
        if (!peopleCollection || typeof peopleCollection.getAllRecords !== "function") {
          this._log("people linking skipped: People collection is unavailable", { personCollectionGuid: personCollectionGuid || "auto" });
          return;
        }
        const people = await peopleCollection.getAllRecords();
        const matched = matchParticipantsToPeople(matchable, people);
        const prop = this._prop(record, field.id);
        if (!prop || typeof prop.set !== "function") return;
        const existing = this._attendeeGuids(prop);
        const next = mergeAttendeeGuids(existing, matched.guids);
        if (next.length) prop.set(next);
        this._log("participants linked", {
          source,
          names: names.length,
          matched: matched.guids.length,
          unmatched: matched.unmatchedNames.length,
          preserved: existing.length
        });
        const unmatched = matched.creatableParticipants.filter((participant) => String(participant && participant.name || "").trim());
        if (unmatched.length) this._promptUnmatchedParticipants(record, botId, unmatched, peopleCollection, field);
      } catch (err) {
        this._log("participant linking failed without blocking meeting finalization", { error: this._errorMessage(err) });
      }
    }
    /** @param {any} prop */
    _attendeeGuids(prop) {
      const existing = [];
      try {
        for (const linked of prop.linkedRecords ? prop.linkedRecords() : []) {
          if (linked && linked.guid && !existing.includes(linked.guid)) existing.push(linked.guid);
        }
      } catch {
      }
      try {
        for (const value of prop.texts ? prop.texts() : []) {
          const guid = String(value || "").trim();
          if (guid && !existing.includes(guid)) existing.push(guid);
        }
      } catch {
      }
      return existing;
    }
    /**
     * @param {any} record
     * @param {string} botId
     * @param {any[]} unmatched
     * @param {any} peopleCollection
     * @param {any} field
     */
    _promptUnmatchedParticipants(record, botId, unmatched, peopleCollection, field) {
      const key = `${record && record.guid || ""}:${botId || ""}`;
      if (!key || /** @type {Set<string>} */
      this._attendeePrompted.has(key)) return;
      /** @type {Set<string>} */
      this._attendeePrompted.add(key);
      openParticipantConfirmDialog({
        rootClass: ROOT_CLASS,
        participants: unmatched,
        onConfirm: /* @__PURE__ */ __name((creates) => void this._addConfirmedPeople(record, peopleCollection, field, creates), "onConfirm")
      });
    }
    /**
     * @param {any} record
     * @param {any} peopleCollection
     * @param {any} field
     * @param {any[]} creates
     */
    async _addConfirmedPeople(record, peopleCollection, field, creates) {
      if (!this._isOurRecord(record) || !Array.isArray(creates) || !creates.length) return;
      const prop = this._prop(record, field && field.id);
      if (!prop || typeof prop.set !== "function") return;
      const createdGuids = [];
      for (const person of creates) {
        try {
          const result = await this._createMissingPerson(peopleCollection, person);
          if (result && result.guid && !createdGuids.includes(result.guid)) createdGuids.push(result.guid);
        } catch (err) {
          this._log("person creation skipped", { name: person.name || "", error: this._errorMessage(err) });
        }
      }
      const next = mergeAttendeeGuids(this._attendeeGuids(prop), createdGuids);
      if (next.length) prop.set(next);
      if (createdGuids.length) this._toast("People added", `${createdGuids.length} attendee${createdGuids.length === 1 ? "" : "s"} linked.`);
    }
    /**
     * @param {any} record
     * @param {string} transcriptText
     * @param {any[]} entries
     */
    async _summarize(record, transcriptText, entries, { deferTranscriptBody = false } = {}) {
      if (!this._settings.anthropicApiKey) {
        this._setField(record, FIELDS.LAST_ERROR, "Anthropic API key is missing; transcript fetched but summary was skipped.");
        this._setField(record, FIELDS.STATUS, "summary_failed");
        this._updateNavButtonForRecord(record);
        return false;
      }
      try {
        this._setField(record, FIELDS.STATUS, "summarizing");
        this._updateNavButtonForRecord(record);
        this._log("summary start", { characters: transcriptText.length });
        const { summary, sections, citations } = await this._createSummary(record, transcriptText, entries);
        if (!summary) throw new Error("Claude returned an empty summary.");
        let sectionResult = { ok: false, anchors: [], turnAnchors: [] };
        if (this._settings.saveTranscript && this._settings.transcriptSections && sections.length && Array.isArray(entries) && entries.length) {
          sectionResult = await this._reorganizeTranscriptBySections(record, entries, sections);
        }
        const sectioned = !!sectionResult.ok;
        if (deferTranscriptBody && !sectioned && this._settings.saveTranscript) {
          await this._streamTranscriptToBody(record, entries);
        }
        const summaryWritten = await this._writeSummaryToBody(record, summary, citations, sectionResult.anchors, sectionResult.turnAnchors);
        if (!summaryWritten) throw new Error("Thymer could not write the summary to the meeting body.");
        this._setField(record, FIELDS.STATUS, "summarized");
        this._updateNavButtonForRecord(record);
        this._log("summary written", { characters: summary.length, sections: sections.length });
        return true;
      } catch (err) {
        if (deferTranscriptBody && this._settings.saveTranscript) {
          await this._streamTranscriptToBody(record, entries);
        }
        this._setField(record, FIELDS.LAST_ERROR, `Summary failed: ${this._errorMessage(err)}`);
        this._setField(record, FIELDS.STATUS, "summary_failed");
        this._updateNavButtonForRecord(record);
        this._log("summary failed", { error: this._errorMessage(err) });
        return false;
      }
    }
    /**
     * Summarize, and — when topic-sections are on — also return the section outline from the SAME Claude
     * call. With sections on we send a NUMBERED transcript (`[N] Speaker: text`) and ask for a JSON object
     * `{ summary, sections:[{title,start,end}] }` indexing those numbers. A tolerant parse recovers the
     * summary even if the JSON is malformed; bad/empty sections just fall back to the un-sectioned
     * transcript (reorganize is skipped). Returns `{ summary, sections, citations }`.
     *
     * @param {any} record
     * @param {string} transcriptText
     * @param {Array<{speaker:string,text:string,absoluteIso:string|null,relativeSec:number|null}>} [entries]
     */
    async _createSummary(record, transcriptText, entries) {
      let basePrompt = this._settings.summaryPrompt || DEFAULT_SETTINGS.summaryPrompt;
      const notes = await this._readNotesText(record);
      if (notes) {
        basePrompt = `${basePrompt}

HUMAN NOTES (higher priority than the transcript \u2014 treat as ground truth when they conflict; weave their substance into Overview/Decisions/Open Questions and into Action Items):
${notes}`;
      }
      const wantSections = !!this._settings.transcriptSections && Array.isArray(entries) && entries.length > 0;
      if (!wantSections) {
        const raw2 = await this._callClaude(basePrompt, transcriptText, 800);
        return { summary: sanitizeSummaryMarkdown(recoverSummaryMarkdown(raw2)), sections: [], citations: [] };
      }
      const prompt = `${basePrompt}

${sectionJsonInstruction(entries.length)}`;
      const numbered = entries.map((e, i) => `[${i}] ${e.speaker}: ${e.text}`).join("\n");
      const raw = await this._callClaude(prompt, numbered, 1200);
      const parsed = parseSummaryAndSections(raw, entries.length);
      const sanitized = sanitizeSummaryMarkdown(parsed.summary);
      const cited = extractSummaryCitations(sanitized, parsed.sections);
      return { summary: cited.markdown, sections: parsed.sections, citations: cited.citations };
    }
    /**
     * POST the summary request to the bridge or to Anthropic directly; returns Claude's raw text.
     * @param {string} prompt
     * @param {string} transcriptText
     * @param {number} maxTokens
     */
    async _callClaude(prompt, transcriptText, maxTokens) {
      if (this._bridgeUrl()) {
        const json2 = await this._bridgeJson("/api/anthropic/summary", {
          anthropicApiKey: this._settings.anthropicApiKey,
          anthropicModel: this._settings.anthropicModel || DEFAULT_SETTINGS.anthropicModel,
          summaryPrompt: prompt,
          transcriptText,
          maxTokens
        });
        return json2.summary || "";
      }
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "x-api-key": this._settings.anthropicApiKey,
          "anthropic-version": "2023-06-01",
          "content-type": "application/json"
        },
        body: JSON.stringify({
          model: this._settings.anthropicModel || DEFAULT_SETTINGS.anthropicModel,
          max_tokens: maxTokens,
          messages: [{ role: "user", content: `${prompt}

Transcript:
${transcriptText}` }]
        })
      });
      const json = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(anthropicError(json, response.status));
      return Array.isArray(json.content) ? json.content.map((part) => part && part.type === "text" ? part.text : "").join("\n").trim() : "";
    }
    /**
     * Render summary + transcript into the record BODY as real Thymer blocks (headings, bold,
     * checkboxes) via insertFromMarkdown — a property can only show markdown as literal text.
     *
     * ADDITIVE and guarded once per bot. Persistent line-item metadata is the source of truth, allowing
     * another device or an interrupted write to resume the same structure. localStorage is retained only
     * as a legacy/cache hint; unowned content is never cleared or rewritten.
     */
    /**
     * @param {any} record
     * @param {string} suffix
     */
    _bodyKey(record, suffix) {
      return `recall-ai/${this._collectionGuidOf(record) || "collection"}/${record && record.guid || ""}/${suffix}`;
    }
    /**
     * @param {any} line
     * @param {string} key
     */
    _lineMeta(line, key) {
      return lineMeta(line, key);
    }
    /**
     * @param {any} line
     * @param {string} botId
     */
    _isOwnedLine(line, botId, role = "") {
      return isOwnedLine(line, botId, role);
    }
    /**
     * @param {any[]} items
     * @param {string} botId
     * @param {string} role
     */
    _findOwnedLine(items, botId, role, index = null) {
      return findOwnedLine(items, botId, role, index) || findOwnedRole(items, role, index);
    }
    /**
     * @param {any} line
     * @param {string} botId
     * @param {string} role
     */
    async _markOwnedLine(line, botId, role, extra = {}) {
      if (!line || typeof line.setMetaProperties !== "function" || !botId || !role) return false;
      const props = ownershipProps(botId, role, extra);
      try {
        const ok = await line.setMetaProperties(props);
        if (ok !== false) line.props = { ...line.props || {}, ...props };
        return ok !== false;
      } catch (err) {
        this._log("line ownership metadata failed", { guid: line.guid, role, error: this._errorMessage(err) });
        return false;
      }
    }
    /**
     * @param {any[]} items
     * @param {any} heading
     * @param {string} botId
     * @param {any[]} tracked
     * @param {any} written
     */
    async _migrateLegacyTranscriptMetadata(items, heading, botId, tracked, written) {
      if (!heading || !botId) return;
      await this._markOwnedLine(heading, botId, BODY_ROLES.TRANSCRIPT);
      const byGuid = new Map((Array.isArray(items) ? items : []).map((line) => [line.guid, line]));
      const guids = Array.isArray(tracked) ? tracked : [];
      const inline = this._settings.transcriptLayout === "inline";
      for (let index = 0; index < Number(written || 0); index++) {
        const turn = byGuid.get(guids[inline ? index : index * 2]);
        if (turn) await this._markOwnedLine(turn, botId, "transcript_turn", { entryIndex: index });
        if (!inline) {
          const text = byGuid.get(guids[index * 2 + 1]);
          if (text) await this._markOwnedLine(text, botId, "transcript_text", { entryIndex: index });
        }
      }
    }
    /**
     * @param {any} record
     * @param {string} botId
     * @param {string} role
     * @param {string} legacySuffix
     */
    async _bodyOwnershipState(record, botId, role, legacySuffix, completed = false) {
      if (!record || typeof record.getLineItems !== "function") return "unavailable";
      try {
        const items = await record.getLineItems(false);
        const owned = this._findOwnedLine(items, botId, role);
        if (owned) {
          if ((role === BODY_ROLES.SUMMARY || role === BODY_ROLES.ACTION_ITEMS) && Number(this._lineMeta(owned, LINE_META.COMPLETE)) !== 1) return "incomplete";
          return "owned";
        }
      } catch {
        return "unavailable";
      }
      try {
        const legacy = localStorage.getItem(this._bodyKey(record, legacySuffix)) || "";
        if (legacy && (legacy === botId || !legacySuffix.includes("summary"))) return "legacy";
      } catch {
      }
      return completed ? "unknown" : "missing";
    }
    /** insertFromMarkdown treats `#` before a digit as a hashtag — escape so "#5" stays literal. */
    /** @param {string} text */
    _escMd(text) {
      return String(text || "").replace(/#(?=\d)/g, "\\#");
    }
    /**
     * The body-anchor markdown for a heading setting: an h1/h2/h3 markdown heading, or — for level
     * 'none' — a plain text line (content just nests beneath it, no heading chrome). The `#` prefix is
     * NOT escaped (it must stay a heading marker); only the user's text runs through `_escMd`.
     */
    /**
     * @param {string} text
     * @param {string} level
     */
    _headingAnchorMd(text, level) {
      const t = this._escMd(String(text || "").trim());
      const n = level === "h1" ? 1 : level === "h2" ? 2 : level === "h3" ? 3 : 0;
      return n ? `${"#".repeat(n)} ${t}` : t;
    }
    /** @param {{headingTextKey: string, headingLevelKey: string, fallbackText: string, fallbackLevel: string}} spec */
    _headingForSpec(spec) {
      const text = String(this._settings && this._settings[spec.headingTextKey] || spec.fallbackText || "").trim();
      const level = ["h1", "h2", "h3", "none"].includes(this._settings && this._settings[spec.headingLevelKey]) ? this._settings[spec.headingLevelKey] : spec.fallbackLevel;
      return { text, level };
    }
    /**
     * Membership: is this record in a collection Meetings manages?
     *
     * A property handle is NOT membership (`record.prop(...)` is truthy on any page), and neither is
     * a matching field id. If the record's collection is unknown, refuse rather than write.
     * @param {any} record
     */
    _isOurRecord(record) {
      if (!record || !record.guid) return false;
      const collGuid = this._collectionGuidOf(record);
      return !!collGuid && /** @type {Map<string, any>} */
      this._managed.has(collGuid);
    }
    /** True only for a collection Meetings created (or a migrated pre-2.0 install). */
    /** @param {any} record */
    _isOwnedRecord(record) {
      const binding = this._bindingFor(record);
      return !!binding && binding.role === "owned";
    }
    _bodySectionSpecs() {
      const extra = {};
      for (const spec of BODY_SECTION_ORDER) {
        const label = headingSearchLabel(this._settings && this._settings[spec.headingTextKey] || spec.fallbackText);
        if (label) extra[label] = spec.role;
      }
      return orderedBodySectionSpecs(parseBodySectionOrder(this._settings && this._settings.bodySectionOrder, extra));
    }
    _cleanupHeadingSpecs() {
      return BODY_SECTION_ORDER.map((spec) => {
        const current = this._headingForSpec(spec).text;
        return { role: spec.role, texts: [...new Set([spec.fallbackText, current].filter(Boolean))] };
      });
    }
    _repairHeadingSpecs() {
      return this._bodySectionSpecs().map((spec) => {
        const { text, level } = this._headingForSpec(spec);
        return { role: spec.role, expectedText: text, expectedLevel: level, texts: [...new Set([spec.fallbackText, text].filter(Boolean))] };
      });
    }
    /**
     * Seed the four-section outline on a Meetings record this plugin owns.
     * Never writes Journal or other collections. Existing headings are left in place;
     * only missing section headings are inserted (new meetings / first bot join / body writers).
     * @param {any} record
     */
    async _ensureMeetingSkeleton(record) {
      if (this._disabled || !record || !record.guid) return;
      if (!this._isOwnedRecord(record)) return;
      if (typeof record.insertFromMarkdown !== "function" || typeof record.getLineItems !== "function") return;
      if (!this._skeletonInFlight) this._skeletonInFlight = /* @__PURE__ */ new Map();
      return runCoalesced(this._skeletonInFlight, record.guid, async () => {
        let items = await record.getLineItems(false);
        if (!Array.isArray(items)) items = [];
        let afterPrevious = null;
        for (const spec of this._bodySectionSpecs()) {
          let heading = findOwnedRole(items, spec.role);
          if (!heading) {
            const { text } = this._headingForSpec(spec);
            heading = guessHeadingByLabel(items, record.guid, text);
          }
          if (!heading) {
            const { text, level } = this._headingForSpec(spec);
            const anchorMd = this._headingAnchorMd(text, level);
            if (!anchorMd) continue;
            let afterItem = afterPrevious;
            if (!afterPrevious && spec.role === BODY_ROLES.SUMMARY) {
              const txSpec = BODY_SECTION_ORDER.find((item) => item.role === BODY_ROLES.TRANSCRIPT);
              const txText = txSpec ? this._headingForSpec(txSpec).text : "Transcript";
              const existingTx = findOwnedRole(items, BODY_ROLES.TRANSCRIPT) || guessHeadingByLabel(items, record.guid, txText);
              if (existingTx) afterItem = null;
            }
            const before = new Set(items.map((li) => li.guid));
            if (await record.insertFromMarkdown(anchorMd, null, afterItem) === false) continue;
            items = await record.getLineItems(false);
            heading = items.find((li) => !before.has(li.guid)) || null;
            if (heading) await this._markOwnedLine(heading, TEMPLATE_OWNER, spec.role);
          } else if (!this._lineMeta(heading, LINE_META.ROLE)) {
            const hasKids = items.some((li) => li.parent_guid === heading.guid);
            const extra = spec.role === BODY_ROLES.SUMMARY || spec.role === BODY_ROLES.ACTION_ITEMS ? { complete: !!hasKids } : {};
            await this._markOwnedLine(heading, TEMPLATE_OWNER, spec.role, extra);
          }
          if (heading) afterPrevious = heading;
        }
      });
    }
    /** @param {any} record */
    async _readNotesText(record) {
      if (!record || typeof record.getLineItems !== "function") return "";
      try {
        const items = await record.getLineItems(false);
        const notesRoot = findOwnedRole(items, BODY_ROLES.NOTES);
        if (!notesRoot) return "";
        return notesTextFromItems(items, notesRoot.guid);
      } catch {
        return "";
      }
    }
    /** Existing Transcript heading descendants — the on-page artifact, not a new Recall fetch. */
    /** @param {any} record */
    async _readTranscriptText(record) {
      if (!record || typeof record.getLineItems !== "function") return "";
      try {
        const items = await record.getLineItems(false);
        const root = this._sectionRoot(items, record, BODY_ROLES.TRANSCRIPT, "transcriptHeadingText", "Transcript");
        if (!root) return "";
        return notesTextFromItems(items, root.guid);
      } catch {
        return "";
      }
    }
    /**
     * Prefer the meeting body's Transcript. If that is empty and a bot already exists, fetch
     * Recall's artifact — never create or join a bot.
     */
    /** @param {any} record */
    async _readTranscriptForSummary(record) {
      const fromBody = await this._readTranscriptText(record);
      if (fromBody) return fromBody;
      const botId = this._text(record, FIELDS.BOT_ID);
      if (!botId || !this._settings.recallApiKey) return "";
      try {
        const transcript = await this._fetchRecallJson(`/api/v1/bot/${encodeURIComponent(botId)}/transcript/`);
        const rawEntries = transcriptEntries(transcript);
        const live = !!(transcript && transcript.live);
        const entries = live ? rawEntries : coalesceAdjacentTranscriptEntries(rawEntries);
        return entriesToText(entries, this._settings);
      } catch {
        return "";
      }
    }
    /** @param {any} record */
    async _openRegenerateMenu(record) {
      const choice = await openChoiceApplyDialog({
        rootClass: ROOT_CLASS,
        title: "Regenerate",
        items: [
          { label: "Summary", value: "summary", detail: "Rewrite Overview, Decisions, and Open Questions." },
          { label: "Action items", value: "actions", detail: "Rewrite the checkbox list." },
          { label: "Both", value: "both", detail: "Rewrite Summary and Action items together." }
        ],
        confirmCopy: regenerateConfirmCopy,
        confirmLabel: "Apply"
      });
      if (choice === "summary") return this._regenerateSummary(record, { confirmed: true });
      if (choice === "actions") return this._regenerateActionItems(record, { confirmed: true });
      if (choice === "both") return this._regenerateBoth(record);
      return false;
    }
    /** @param {{title: string, body: any, confirmLabel?: string}} options */
    async _confirmBodyWrite({ title, body, confirmLabel = "Apply" }) {
      return openConfirmDialog({
        rootClass: ROOT_CLASS,
        title,
        body,
        confirmLabel,
        cancelLabel: "Cancel"
      });
    }
    /** @param {any} record */
    async _confirmRepairMeeting(record) {
      const ok = await this._confirmBodyWrite({
        title: "Repair Meeting",
        body: {
          intro: "Repair fills missing pieces from Recall. It will:",
          items: [
            "Fetch the latest transcript and append any missing plugin-owned turns (it does not wipe an existing Transcript)",
            "Write Summary / Action items only if those sections are missing or incomplete",
            "Heal leftover JSON or a glued \u201Cmashed\u201D summary blob on plugin-owned Summary / Action items nodes",
            "Refresh bot status and check attendees"
          ],
          outro: "It will not overwrite Notes. It will not regenerate a healthy existing Summary or Action items \u2014 use Regenerate for that."
        },
        confirmLabel: "Apply"
      });
      if (!ok) return false;
      return this._syncRecord(record, { summarize: true, repair: true });
    }
    /**
     * Re-run the current summary prompt against the existing transcript + Notes.
     * Rewrites Summary only. Never touches Action items, Notes, Transcript, or bot join.
     */
    /** @param {any} record */
    async _regenerateSummary(record, { confirmed = false } = {}) {
      if (this._disabled) {
        this._toast("Meetings is off", "Turn the plugin on to regenerate a summary.");
        return false;
      }
      if (!record || !this._isOurRecord(record)) {
        this._toast("Open a Meeting record first", "Regenerate summary only runs on a Meetings collection record.");
        return false;
      }
      if (!this._settings.anthropicApiKey) {
        this._toast("Claude API key required", "Open Plugin: Meetings and add a Claude API key.");
        return false;
      }
      if (!confirmed) {
        const ok = await this._confirmBodyWrite({
          title: "Regenerate summary",
          body: regenerateConfirmCopy("summary"),
          confirmLabel: "Apply"
        });
        if (!ok) return false;
      }
      if (!this._regenerateInFlight) this._regenerateInFlight = /* @__PURE__ */ new Map();
      return runCoalesced(this._regenerateInFlight, record.guid, async () => {
        const transcriptText = await this._readTranscriptForSummary(record);
        if (!String(transcriptText || "").trim()) {
          this._toast("Nothing to summarize", "This meeting has no transcript yet.");
          return false;
        }
        const previousStatus = this._text(record, FIELDS.STATUS);
        this._setField(record, FIELDS.STATUS, "summarizing");
        this._updateNavButtonForRecord(record);
        this._toast("Regenerating summary", "Re-running the summary prompt against this transcript and notes.");
        try {
          const { summary, citations } = await this._createSummary(record, transcriptText, []);
          if (!summary) throw new Error("Claude returned an empty summary.");
          const summaryOnly = splitSummaryAndActionItems(summary).summary;
          if (!summaryOnly) throw new Error("Claude returned an empty summary.");
          const written = await this._replaceSummaryBody(record, summaryOnly, citations, { section: "summary" });
          if (!written) throw new Error("Thymer could not write the summary to the meeting body.");
          this._setField(record, FIELDS.LAST_ERROR, "");
          this._setField(record, FIELDS.STATUS, "summarized");
          this._updateNavButtonForRecord(record);
          this._log("summary regenerated", { characters: summaryOnly.length });
          this._toast("Summary regenerated", "Summary was rewritten. Action items, Notes, and Transcript were left alone.");
          return true;
        } catch (err) {
          this._setField(record, FIELDS.LAST_ERROR, `Summary failed: ${this._errorMessage(err)}`);
          this._setField(record, FIELDS.STATUS, previousStatus === "summarized" ? "summary_failed" : previousStatus || "summary_failed");
          this._updateNavButtonForRecord(record);
          this._log("summary regenerate failed", { error: this._errorMessage(err) });
          this._toast("Could not regenerate summary", this._errorMessage(err));
          return false;
        }
      });
    }
    /**
     * Re-run Action items only from the existing transcript + Notes.
     * Never touches Summary, Notes, Transcript, or bot join.
     */
    /** @param {any} record */
    async _regenerateActionItems(record, { confirmed = false } = {}) {
      if (this._disabled) {
        this._toast("Meetings is off", "Turn the plugin on to regenerate action items.");
        return false;
      }
      if (!record || !this._isOurRecord(record)) {
        this._toast("Open a Meeting record first", "Regenerate action items only runs on a Meetings collection record.");
        return false;
      }
      if (!this._settings.anthropicApiKey) {
        this._toast("Claude API key required", "Open Plugin: Meetings and add a Claude API key.");
        return false;
      }
      if (!confirmed) {
        const ok = await this._confirmBodyWrite({
          title: "Regenerate action items",
          body: regenerateConfirmCopy("actions"),
          confirmLabel: "Apply"
        });
        if (!ok) return false;
      }
      if (!this._regenerateActionsInFlight) this._regenerateActionsInFlight = /* @__PURE__ */ new Map();
      return runCoalesced(this._regenerateActionsInFlight, record.guid, async () => {
        const transcriptText = await this._readTranscriptForSummary(record);
        if (!String(transcriptText || "").trim()) {
          this._toast("Nothing to summarize", "This meeting has no transcript yet.");
          return false;
        }
        const previousStatus = this._text(record, FIELDS.STATUS);
        this._setField(record, FIELDS.STATUS, "summarizing");
        this._updateNavButtonForRecord(record);
        this._toast("Regenerating action items", "Re-running action items against this transcript and notes.");
        try {
          const markdown = await this._createActionItems(record, transcriptText);
          if (!markdown) throw new Error("Claude returned no action items.");
          const written = await this._replaceSummaryBody(record, markdown, [], { section: "actions" });
          if (!written) throw new Error("Thymer could not write action items to the meeting body.");
          this._setField(record, FIELDS.LAST_ERROR, "");
          this._setField(record, FIELDS.STATUS, previousStatus === "summarized" || previousStatus === "transcribed" ? previousStatus : "summarized");
          this._updateNavButtonForRecord(record);
          this._log("action items regenerated", { characters: markdown.length });
          this._toast("Action items regenerated", "Action items were rewritten. Summary, Notes, and Transcript were left alone.");
          return true;
        } catch (err) {
          this._setField(record, FIELDS.LAST_ERROR, `Action items failed: ${this._errorMessage(err)}`);
          this._setField(record, FIELDS.STATUS, previousStatus || "summary_failed");
          this._updateNavButtonForRecord(record);
          this._log("action items regenerate failed", { error: this._errorMessage(err) });
          this._toast("Could not regenerate action items", this._errorMessage(err));
          return false;
        }
      });
    }
    /**
     * Rewrite Summary and Action items in one Apply. Notes and Transcript stay.
     */
    /** @param {any} record */
    async _regenerateBoth(record) {
      if (this._disabled) {
        this._toast("Meetings is off", "Turn the plugin on to regenerate the meeting write-up.");
        return false;
      }
      if (!record || !this._isOurRecord(record)) {
        this._toast("Open a Meeting record first", "Regenerate only runs on a Meetings collection record.");
        return false;
      }
      if (!this._settings.anthropicApiKey) {
        this._toast("Claude API key required", "Open Plugin: Meetings and add a Claude API key.");
        return false;
      }
      if (!this._regenerateInFlight) this._regenerateInFlight = /* @__PURE__ */ new Map();
      return runCoalesced(this._regenerateInFlight, record.guid, async () => {
        const transcriptText = await this._readTranscriptForSummary(record);
        if (!String(transcriptText || "").trim()) {
          this._toast("Nothing to summarize", "This meeting has no transcript yet.");
          return false;
        }
        const previousStatus = this._text(record, FIELDS.STATUS);
        this._setField(record, FIELDS.STATUS, "summarizing");
        this._updateNavButtonForRecord(record);
        this._toast("Regenerating summary and action items", "Re-running both sections against this transcript and notes.");
        try {
          const { summary, citations } = await this._createSummary(record, transcriptText, []);
          if (!summary) throw new Error("Claude returned an empty summary.");
          const summaryOnly = splitSummaryAndActionItems(summary).summary;
          if (!summaryOnly) throw new Error("Claude returned an empty summary.");
          const markdown = await this._createActionItems(record, transcriptText);
          if (!markdown) throw new Error("Claude returned no action items.");
          const wroteSummary = await this._replaceSummaryBody(record, summaryOnly, citations, { section: "summary" });
          if (!wroteSummary) throw new Error("Thymer could not write the summary to the meeting body.");
          const wroteActions = await this._replaceSummaryBody(record, markdown, [], { section: "actions" });
          if (!wroteActions) throw new Error("Thymer could not write action items to the meeting body.");
          this._setField(record, FIELDS.LAST_ERROR, "");
          this._setField(record, FIELDS.STATUS, "summarized");
          this._updateNavButtonForRecord(record);
          this._log("summary and action items regenerated", { summary: summaryOnly.length, actions: markdown.length });
          this._toast("Meeting regenerated", "Summary and Action items were rewritten. Notes and Transcript were left alone.");
          return true;
        } catch (err) {
          this._setField(record, FIELDS.LAST_ERROR, `Regenerate failed: ${this._errorMessage(err)}`);
          this._setField(record, FIELDS.STATUS, previousStatus === "summarized" ? "summary_failed" : previousStatus || "summary_failed");
          this._updateNavButtonForRecord(record);
          this._log("regenerate both failed", { error: this._errorMessage(err) });
          this._toast("Could not regenerate", this._errorMessage(err));
          return false;
        }
      });
    }
    /**
     * @param {any} record
     * @param {string} transcriptText
     */
    async _createActionItems(record, transcriptText) {
      let prompt = DEFAULT_ACTION_ITEMS_PROMPT;
      const notes = await this._readNotesText(record);
      if (notes) {
        prompt = `${prompt}

HUMAN NOTES (higher priority than the transcript \u2014 treat as ground truth when they conflict; extract follow-ups and owners from them):
${notes}`;
      }
      const raw = await this._callClaude(prompt, transcriptText, 600);
      return ensureActionItemsHeading(sanitizeSummaryMarkdown(recoverSummaryMarkdown(raw)));
    }
    /**
     * Stream the transcript into the record body LIVE, under a collapsible "🎙️ Transcript" heading —
     * append-only, one utterance at a time, so it grows as the meeting runs. Takes STRUCTURED entries
     * so it can honor the layout setting:
     *   - inline: each turn a flat line "[time] Speaker: text" under the heading.
     *   - blocks: each turn a header line ("[time] Speaker") with the words nested BENEATH it, so a
     *     collapsed transcript is a scannable list of turns. Nesting proven against the live doc tree.
     * Each node carries its bot/role/entry index in document metadata. Per-record localStorage keys are
     * only a fast cache and a migration path for meetings created before schema metadata existed.
     *
     * NEVER navigates or repaints — appending nodes elsewhere in the doc leaves your cursor alone.
     */
    /**
     * @param {any} record
     * @param {any[]} entries
     */
    async _streamTranscriptToBody(record, entries) {
      if (!record || typeof record.insertFromMarkdown !== "function" || typeof record.createLineItem !== "function" || typeof record.getLineItems !== "function") return;
      if (!Array.isArray(entries) || !entries.length) return;
      await this._ensureMeetingSkeleton(record);
      const headKey = this._bodyKey(record, "tx-head");
      const countKey = this._bodyKey(record, "tx-count");
      const trackKey = this._bodyKey(record, "tx-guids");
      const botId = this._text(record, FIELDS.BOT_ID) || "current";
      let written = 0;
      try {
        written = parseInt(localStorage.getItem(countKey) || "0", 10) || 0;
      } catch {
      }
      try {
        let items = await record.getLineItems(false);
        let heading = this._findOwnedLine(items, botId, BODY_ROLES.TRANSCRIPT);
        let headGuid = "";
        try {
          headGuid = localStorage.getItem(headKey) || "";
        } catch {
        }
        if (!heading && headGuid) heading = items.find((li) => li.guid === headGuid) || null;
        let tracked = [];
        try {
          tracked = JSON.parse(localStorage.getItem(trackKey) || "[]") || [];
        } catch {
        }
        if (!Array.isArray(tracked)) tracked = [];
        if (heading && !this._isOwnedLine(heading, botId, BODY_ROLES.TRANSCRIPT)) {
          await this._markOwnedLine(heading, botId, BODY_ROLES.TRANSCRIPT);
        }
        if (!heading) {
          const before = new Set(items.map((li) => li.guid));
          const anchorMd = this._headingAnchorMd(this._settings.transcriptHeadingText, this._settings.transcriptHeadingLevel);
          if (!anchorMd) return;
          if (await record.insertFromMarkdown(anchorMd, null, null) === false) return;
          items = await record.getLineItems(false);
          heading = items.find((li) => !before.has(li.guid)) || null;
          if (!heading) return;
          await this._markOwnedLine(heading, botId, BODY_ROLES.TRANSCRIPT);
          try {
            localStorage.setItem(headKey, heading.guid);
          } catch {
          }
          written = 0;
        }
        try {
          localStorage.setItem(headKey, heading.guid);
        } catch {
        }
        const existingTurns = new Map(items.filter((item) => this._isOwnedLine(item, botId, "transcript_turn") && this._lineMeta(item, LINE_META.ENTRY_INDEX) != null).map((item) => [Number(this._lineMeta(item, LINE_META.ENTRY_INDEX)), item]));
        if (entries.every((_entry, index) => existingTurns.has(index))) return;
        const sectionRanges = items.filter((item) => this._isOwnedLine(item, botId, "transcript_section")).map((item) => ({
          item,
          start: Number(this._lineMeta(item, LINE_META.SECTION_START)),
          end: Number(this._lineMeta(item, LINE_META.SECTION_END))
        })).filter((range) => Number.isFinite(range.start) && Number.isFinite(range.end));
        const parentForIndex = /* @__PURE__ */ __name((index) => {
          const section2 = sectionRanges.find((range) => index >= range.start && index <= range.end);
          return section2 ? section2.item : heading;
        }, "parentForIndex");
        const afterByParent = /* @__PURE__ */ new Map();
        const settings = this._settings;
        let newestGuid = null;
        let created = 0;
        for (let entryIndex = 0; entryIndex < entries.length; entryIndex++) {
          const e = entries[entryIndex];
          const existingTurn = existingTurns.get(entryIndex);
          if (existingTurn) {
            afterByParent.set(existingTurn.parent_guid, existingTurn);
            continue;
          }
          const parent = parentForIndex(entryIndex);
          let afterTurn = afterByParent.get(parent.guid) || null;
          if (!afterTurn) {
            const earlier = items.filter((item) => item.parent_guid === parent.guid && this._isOwnedLine(item, botId, "transcript_turn") && Number(this._lineMeta(item, LINE_META.ENTRY_INDEX)) < entryIndex);
            afterTurn = earlier.length ? earlier[earlier.length - 1] : null;
          }
          const inline = settings.transcriptLayout === "inline";
          const line = inline ? `${formatEntryHeader(e, settings)}: ${e.text}` : formatEntryHeader(e, settings);
          const turn = await record.createLineItem(parent, afterTurn, "text", [{ type: "text", text: line }], null);
          if (!turn) break;
          await this._markOwnedLine(turn, botId, "transcript_turn", { entryIndex });
          if (!inline) {
            const textNode = await record.createLineItem(turn, null, "text", [{ type: "text", text: e.text }], null);
            if (!textNode) {
              try {
                await turn.delete();
              } catch {
              }
              break;
            }
            await this._markOwnedLine(textNode, botId, "transcript_text", { entryIndex });
            tracked.push(turn.guid, textNode.guid);
            newestGuid = textNode.guid;
          } else {
            tracked.push(turn.guid);
            newestGuid = turn.guid;
          }
          afterByParent.set(parent.guid, turn);
          items.push(turn);
          existingTurns.set(entryIndex, turn);
          created += 1;
          try {
            localStorage.setItem(countKey, String(existingTurns.size));
          } catch {
          }
          try {
            localStorage.setItem(trackKey, JSON.stringify(tracked));
          } catch {
          }
        }
        this._log("transcript streamed to body", { newTurns: created, total: existingTurns.size, layout: settings.transcriptLayout });
        return newestGuid;
      } catch (err) {
        this._log("transcript stream failed", { error: this._errorMessage(err) });
      }
      return null;
    }
    /**
     * At meeting end, regroup the live (un-sectioned) transcript into collapsible topic sections:
     * move existing streamed turns under section nodes, or build the sectioned shape directly when live
     * rows never arrived. A mismatch is left intact: this path never rebuilds or replays an existing
     * transcript. Returns stable line-item GUIDs for topic headings and exact final entries.
     */
    /**
     * @param {any} record
     * @param {any[]} entries
     * @param {any[]} sections
     */
    async _reorganizeTranscriptBySections(record, entries, sections) {
      if (!record || typeof record.insertFromMarkdown !== "function" || typeof record.createLineItem !== "function" || typeof record.getLineItems !== "function") return { ok: false, anchors: [], turnAnchors: [] };
      if (!Array.isArray(sections) || !sections.length || !Array.isArray(entries) || !entries.length) return { ok: false, anchors: [], turnAnchors: [] };
      await this._ensureMeetingSkeleton(record);
      const headKey = this._bodyKey(record, "tx-head");
      const trackKey = this._bodyKey(record, "tx-guids");
      const countKey = this._bodyKey(record, "tx-count");
      const botId = this._text(record, FIELDS.BOT_ID) || "current";
      const sectionedKey = this._bodyKey(record, `tx-sectioned:${botId}`);
      const anchorsKey = this._bodyKey(record, `tx-section-anchors:${botId}`);
      const turnAnchorsKey = this._bodyKey(record, `tx-turn-anchors:${botId}`);
      try {
        const persistedAnchors = await this._recoverTranscriptSectionAnchors(record, entries, sections, anchorsKey);
        if (persistedAnchors.length === sections.length) {
          const persistedTurns = await this._recoverTranscriptTurnAnchors(record, entries, sections, persistedAnchors, turnAnchorsKey);
          const persistedItems = await record.getLineItems(false);
          const hasOwnedRanges = persistedAnchors.every((anchor) => {
            const node = persistedItems.find((item) => item.guid === anchor.guid);
            return this._isOwnedLine(node, botId, "transcript_section") && this._lineMeta(node, LINE_META.SECTION_START) != null && this._lineMeta(node, LINE_META.SECTION_END) != null;
          });
          const hasFragments = persistedItems.some((item) => this._isOwnedLine(item, botId, "transcript_fragment"));
          if (hasOwnedRanges && !hasFragments && persistedTurns.length < entries.length) {
            await this._streamTranscriptToBody(record, entries);
          }
          const repairedTurns = await this._recoverTranscriptTurnAnchors(record, entries, sections, persistedAnchors, turnAnchorsKey);
          return { ok: true, anchors: persistedAnchors, turnAnchors: repairedTurns };
        }
        try {
          localStorage.setItem(sectionedKey, `writing:${Date.now()}`);
        } catch {
        }
        const abort = /* @__PURE__ */ __name(() => {
          try {
            localStorage.removeItem(sectionedKey);
            localStorage.removeItem(anchorsKey);
            localStorage.removeItem(turnAnchorsKey);
          } catch {
          }
          return { ok: false, anchors: [], turnAnchors: [] };
        }, "abort");
        let headGuid = "";
        try {
          headGuid = localStorage.getItem(headKey) || "";
        } catch {
        }
        let items = await record.getLineItems(false);
        let heading = this._findOwnedLine(items, botId, BODY_ROLES.TRANSCRIPT) || items.find((li) => li.guid === headGuid) || null;
        if (!heading) {
          const before = new Set(items.map((li) => li.guid));
          const anchorMd = this._headingAnchorMd(this._settings.transcriptHeadingText, this._settings.transcriptHeadingLevel);
          if (!anchorMd || await record.insertFromMarkdown(anchorMd, null, null) === false) return abort();
          items = await record.getLineItems(false);
          heading = items.find((li) => !before.has(li.guid)) || null;
          if (!heading) return abort();
          await this._markOwnedLine(heading, botId, BODY_ROLES.TRANSCRIPT);
          try {
            localStorage.setItem(headKey, heading.guid);
          } catch {
          }
        }
        let tracked = [];
        try {
          tracked = JSON.parse(localStorage.getItem(trackKey) || "[]") || [];
        } catch {
        }
        if (!Array.isArray(tracked)) tracked = [];
        let legacyWritten = 0;
        try {
          legacyWritten = parseInt(localStorage.getItem(countKey) || "0", 10) || 0;
        } catch {
        }
        if (!this._isOwnedLine(heading, botId, BODY_ROLES.TRANSCRIPT)) {
          await this._migrateLegacyTranscriptMetadata(items, heading, botId, tracked, legacyWritten);
        }
        const trackedSet = new Set(tracked);
        const turns = items.filter((li) => this._isOwnedLine(li, botId, "transcript_turn"));
        const canMoveExisting = turns.length > 0 && turns.every((li) => typeof li.move === "function");
        if (turns.length && !canMoveExisting) return abort();
        const settings = this._settings;
        const newTracked = new Set(canMoveExisting ? tracked : []);
        const sourceOffsets = [];
        let sourceCursor = 0;
        for (const entry of entries) {
          sourceOffsets.push(sourceCursor);
          sourceCursor += Math.max(1, Number(entry && entry.sourceCount) || 1);
        }
        const turnBySourceIndex = new Map(turns.filter((turn) => this._lineMeta(turn, LINE_META.ENTRY_INDEX) != null).map((turn) => [Number(this._lineMeta(turn, LINE_META.ENTRY_INDEX)), turn]));
        let afterSection = items.filter((li) => li.parent_guid === heading.guid).at(-1) || null;
        let written = 0;
        const anchors = [];
        const turnAnchors = [];
        for (let sectionOrder = 0; sectionOrder < sections.length; sectionOrder++) {
          const sec = sections[sectionOrder];
          const secEntries = entries.slice(sec.start, sec.end + 1).filter(Boolean);
          if (!secEntries.length) continue;
          const label = formatSectionHeading(sec.title, secEntries[0], secEntries[secEntries.length - 1], settings);
          const sectionId = sec.sourceIndex ?? sectionOrder;
          let secNode = items.find((item) => this._isOwnedLine(item, botId, "transcript_section") && Number(this._lineMeta(item, LINE_META.SECTION_ID)) === Number(sectionId)) || null;
          if (!secNode) {
            secNode = await record.createLineItem(heading, afterSection, "text", [{ type: "bold", text: label }], null);
            if (!secNode) continue;
            items.push(secNode);
          }
          await this._markOwnedLine(secNode, botId, "transcript_section", {
            sectionId,
            sectionStart: sec.start,
            sectionEnd: sec.end
          });
          anchors.push({ sectionId, guid: secNode.guid, title: label });
          newTracked.add(secNode.guid);
          afterSection = secNode;
          let afterTurn = null;
          for (let index = sec.start; index <= sec.end; index++) {
            const e = entries[index];
            if (!e) continue;
            let turnTarget = null;
            const count2 = Math.max(1, Number(e.sourceCount) || 1);
            let group = Array.from({ length: count2 }, (_unused, offset) => turnBySourceIndex.get(sourceOffsets[index] + offset)).filter(Boolean);
            if (!group.length && canMoveExisting) group = turns.slice(sourceOffsets[index], sourceOffsets[index] + count2);
            if (group.length) {
              const primary = group[0];
              if (!primary) continue;
              const extras = group.slice(1);
              const extraChildren = extras.flatMap((turn) => items.filter((li) => li.parent_guid === turn.guid));
              const hasUserChildren = extraChildren.some((li) => !trackedSet.has(li.guid));
              const inline = settings.transcriptLayout === "inline";
              const primaryText = inline ? null : items.find((li) => li.parent_guid === primary.guid && (trackedSet.has(li.guid) || this._isOwnedLine(li, botId, "transcript_text")));
              const canCompact = group.length === count2 && !hasUserChildren && typeof primary.setSegments === "function" && (inline || !!(primaryText && typeof primaryText.setSegments === "function")) && extras.every((turn) => typeof turn.delete === "function") && extraChildren.every((li) => typeof li.delete === "function");
              if (canCompact) {
                const line = inline ? `${formatEntryHeader(e, settings)}: ${e.text}` : formatEntryHeader(e, settings);
                await primary.setSegments([{ type: "text", text: line }]);
                if (primaryText) await primaryText.setSegments([{ type: "text", text: e.text }]);
                for (const turn of extras.slice().reverse()) {
                  const children = items.filter((li) => li.parent_guid === turn.guid && trackedSet.has(li.guid));
                  for (const child of children.slice().reverse()) {
                    if (await child.delete()) newTracked.delete(child.guid);
                  }
                  if (await turn.delete()) newTracked.delete(turn.guid);
                }
                const moved = (
                  /** @type {any} */
                  await primary.move(secNode, afterTurn)
                );
                if (!moved) continue;
                await this._markOwnedLine(moved, botId, "transcript_turn", { entryIndex: index });
                if (primaryText) await this._markOwnedLine(primaryText, botId, "transcript_text", { entryIndex: index });
                afterTurn = moved;
                turnTarget = inline ? moved : primaryText;
              } else {
                let movedAny = false;
                for (const turn of group) {
                  const moved = (
                    /** @type {any} */
                    await turn.move(secNode, afterTurn)
                  );
                  if (!moved) continue;
                  afterTurn = moved;
                  movedAny = true;
                }
                if (!movedAny) continue;
                if (count2 === 1 && group.length === 1) {
                  await this._markOwnedLine(afterTurn, botId, "transcript_turn", { entryIndex: index });
                  if (primaryText) await this._markOwnedLine(primaryText, botId, "transcript_text", { entryIndex: index });
                  turnTarget = inline ? afterTurn : primaryText;
                } else {
                  for (const fragment of group) {
                    await this._markOwnedLine(fragment, botId, "transcript_fragment");
                    for (const child of items.filter((item) => item.parent_guid === fragment.guid && (trackedSet.has(item.guid) || this._isOwnedLine(item, botId, "transcript_text")))) {
                      await this._markOwnedLine(child, botId, "transcript_fragment_text");
                    }
                  }
                }
              }
            } else {
              const inline = settings.transcriptLayout === "inline";
              const line = inline ? `${formatEntryHeader(e, settings)}: ${e.text}` : formatEntryHeader(e, settings);
              const turn = (
                /** @type {any} */
                await record.createLineItem(secNode, afterTurn, "text", [{ type: "text", text: line }], null)
              );
              if (!turn) continue;
              await this._markOwnedLine(turn, botId, "transcript_turn", { entryIndex: index });
              newTracked.add(turn.guid);
              afterTurn = turn;
              if (inline) {
                turnTarget = turn;
              } else {
                const textNode = await record.createLineItem(turn, null, "text", [{ type: "text", text: e.text }], null);
                if (!textNode) continue;
                await this._markOwnedLine(textNode, botId, "transcript_text", { entryIndex: index });
                newTracked.add(textNode.guid);
                turnTarget = textNode;
              }
            }
            if (turnTarget && turnTarget.guid) turnAnchors.push({ entryIndex: index, guid: turnTarget.guid, title: formatTranscriptCitationLabel(e, settings) });
            written += 1;
          }
        }
        if (written !== entries.length) return abort();
        try {
          localStorage.setItem(trackKey, JSON.stringify(Array.from(newTracked)));
        } catch {
        }
        try {
          localStorage.setItem(countKey, String(written));
        } catch {
        }
        try {
          localStorage.setItem(anchorsKey, JSON.stringify(anchors));
        } catch {
        }
        try {
          localStorage.setItem(turnAnchorsKey, JSON.stringify(turnAnchors));
        } catch {
        }
        try {
          localStorage.setItem(sectionedKey, "done");
        } catch {
        }
        this._log("transcript reorganized by sections", { sections: sections.length, turns: written, moved: canMoveExisting, anchors: anchors.length, turnAnchors: turnAnchors.length });
        return { ok: written > 0, anchors, turnAnchors };
      } catch (err) {
        try {
          localStorage.removeItem(sectionedKey);
          localStorage.removeItem(anchorsKey);
          localStorage.removeItem(turnAnchorsKey);
        } catch {
        }
        this._log("transcript reorganize failed", { error: this._errorMessage(err) });
        return { ok: false, anchors: [], turnAnchors: [] };
      }
    }
    /**
     * Recover persisted section GUIDs after a summary retry, or derive them from the transcript tree.
     * @param {any} record
     * @param {any[]} entries
     * @param {any[]} sections
     * @param {string} anchorsKey
     */
    async _recoverTranscriptSectionAnchors(record, entries, sections, anchorsKey) {
      let items = [];
      try {
        items = await record.getLineItems(false);
      } catch {
        return [];
      }
      const botId = this._text(record, FIELDS.BOT_ID) || "current";
      const marked = items.filter((item) => this._isOwnedLine(item, botId, "transcript_section"));
      if (marked.length) {
        const byId = new Map(marked.map((item) => [Number(this._lineMeta(item, LINE_META.SECTION_ID)), item]));
        const recovered = sections.map((section2, index) => {
          const sectionId = section2.sourceIndex ?? index;
          const node = byId.get(Number(sectionId));
          const sectionEntries = entries.slice(section2.start, section2.end + 1).filter(Boolean);
          if (!node || !sectionEntries.length) return null;
          return {
            sectionId,
            guid: node.guid,
            title: formatSectionHeading(section2.title, sectionEntries[0], sectionEntries[sectionEntries.length - 1], this._settings)
          };
        }).filter(Boolean);
        if (recovered.length === sections.length) {
          try {
            localStorage.setItem(anchorsKey, JSON.stringify(recovered));
          } catch {
          }
          return recovered;
        }
      }
      let stored = [];
      try {
        stored = JSON.parse(localStorage.getItem(anchorsKey) || "[]") || [];
      } catch {
      }
      if (Array.isArray(stored) && stored.length) {
        const guids = new Set(items.map((item) => item.guid));
        const valid = stored.filter((anchor) => anchor && Number.isFinite(Number(anchor.sectionId)) && typeof anchor.guid === "string" && anchor.guid && typeof anchor.title === "string" && guids.has(anchor.guid));
        if (valid.length === stored.length) return valid.map((anchor) => ({ sectionId: Number(anchor.sectionId), guid: anchor.guid, title: anchor.title }));
      }
      let headGuid = "";
      let tracked = [];
      try {
        headGuid = localStorage.getItem(this._bodyKey(record, "tx-head")) || "";
        tracked = JSON.parse(localStorage.getItem(this._bodyKey(record, "tx-guids")) || "[]") || [];
      } catch {
      }
      const trackedSet = new Set(Array.isArray(tracked) ? tracked : []);
      const sectionNodes = items.filter((item) => item.parent_guid === headGuid && trackedSet.has(item.guid));
      if (sectionNodes.length < sections.length) return [];
      const anchors = sections.map((section2, index) => {
        const sectionEntries = entries.slice(section2.start, section2.end + 1).filter(Boolean);
        const node = sectionNodes[index];
        if (!node || !sectionEntries.length) return null;
        return {
          sectionId: section2.sourceIndex ?? index,
          guid: node.guid,
          title: formatSectionHeading(section2.title, sectionEntries[0], sectionEntries[sectionEntries.length - 1], this._settings)
        };
      }).filter(Boolean);
      if (anchors.length === sections.length) {
        try {
          localStorage.setItem(anchorsKey, JSON.stringify(anchors));
        } catch {
        }
        return anchors;
      }
      return [];
    }
    /**
     * Recover exact transcript-entry targets for a summary retry; unresolved entries use section refs.
     * @param {any} record
     * @param {any[]} entries
     * @param {any[]} sections
     * @param {any[]} sectionAnchors
     * @param {string} turnAnchorsKey
     */
    async _recoverTranscriptTurnAnchors(record, entries, sections, sectionAnchors, turnAnchorsKey) {
      let items = [];
      try {
        items = await record.getLineItems(false);
      } catch {
        return [];
      }
      const botId = this._text(record, FIELDS.BOT_ID) || "current";
      const marked = items.filter((item) => this._isOwnedLine(item, botId, "transcript_text") || this._isOwnedLine(item, botId, "transcript_turn"));
      if (marked.length) {
        const byIndex = /* @__PURE__ */ new Map();
        for (const item of marked) {
          const index = Number(this._lineMeta(item, LINE_META.ENTRY_INDEX));
          if (!Number.isFinite(index)) continue;
          const current = byIndex.get(index);
          if (!current || this._isOwnedLine(item, botId, "transcript_text")) byIndex.set(index, item);
        }
        const recovered = entries.map((entry, entryIndex) => {
          const node = byIndex.get(entryIndex);
          return node ? { entryIndex, guid: node.guid, title: formatTranscriptCitationLabel(entry, this._settings) } : null;
        }).filter(Boolean);
        if (recovered.length) {
          try {
            localStorage.setItem(turnAnchorsKey, JSON.stringify(recovered));
          } catch {
          }
          return recovered;
        }
      }
      let stored = [];
      try {
        stored = JSON.parse(localStorage.getItem(turnAnchorsKey) || "[]") || [];
      } catch {
      }
      if (Array.isArray(stored) && stored.length) {
        const guids = new Set(items.map((item) => item.guid));
        const valid = stored.filter((anchor) => anchor && Number.isFinite(Number(anchor.entryIndex)) && typeof anchor.guid === "string" && anchor.guid && typeof anchor.title === "string" && guids.has(anchor.guid));
        if (valid.length) return valid.map((anchor) => ({ entryIndex: Number(anchor.entryIndex), guid: anchor.guid, title: anchor.title }));
      }
      let tracked = [];
      try {
        tracked = JSON.parse(localStorage.getItem(this._bodyKey(record, "tx-guids")) || "[]") || [];
      } catch {
      }
      const turnAnchors = deriveTranscriptTurnAnchors(
        items,
        Array.isArray(tracked) ? tracked : [],
        entries,
        sections,
        sectionAnchors,
        (entry) => formatTranscriptCitationLabel(entry, this._settings)
      );
      if (turnAnchors.length) {
        try {
          localStorage.setItem(turnAnchorsKey, JSON.stringify(turnAnchors));
        } catch {
        }
      }
      return turnAnchors;
    }
    /**
     * Append resolved transcript references to an already-parsed summary line. `setSegments`
     * changes only the line's inline content, so a Thymer task stays a task (and keeps its checkbox).
     * Citation failures are deliberately non-fatal: the summary line is still useful without its link.
     * @param {any} lineItem
     * @param {any[]} citations
     * @param {any} sectionAnchorById
     * @param {any} turnAnchorByIndex
     */
    async _appendSummaryReferences(lineItem, citations, sectionAnchorById, turnAnchorByIndex) {
      if (!lineItem || typeof lineItem.setSegments !== "function" || !Array.isArray(citations) || !citations.length) return;
      const segments = buildSummaryReferenceSegments(lineItem.segments, citations, sectionAnchorById, turnAnchorByIndex);
      if (!segments) return;
      try {
        const updated = await lineItem.setSegments(segments);
        if (updated === false) this._log("summary citation skipped", { lineItemGuid: lineItem.guid });
      } catch (err) {
        this._log("summary citation skipped", { lineItemGuid: lineItem.guid, error: this._errorMessage(err) });
      }
    }
    /** @param {any} line */
    _linePlainText(line) {
      return (Array.isArray(line && line.segments) ? line.segments : []).map((segment) => {
        if (!segment || segment.type === "ref") return "";
        return typeof segment.text === "string" ? segment.text : "";
      }).join("").trim();
    }
    /**
     * @param {any[]} items
     * @param {string} botId
     */
    async _restoreMarkedSummaryReferences(items, botId) {
      const sectionAnchorById = /* @__PURE__ */ new Map();
      const turnAnchorByIndex = /* @__PURE__ */ new Map();
      for (const line of Array.isArray(items) ? items : []) {
        if (this._isOwnedLine(line, botId, "transcript_section")) {
          const id = Number(this._lineMeta(line, LINE_META.SECTION_ID));
          if (Number.isFinite(id)) sectionAnchorById.set(id, { guid: line.guid, title: this._linePlainText(line) || "Transcript section" });
        }
        if (this._isOwnedLine(line, botId, "transcript_text") || this._isOwnedLine(line, botId, "transcript_turn")) {
          const index = Number(this._lineMeta(line, LINE_META.ENTRY_INDEX));
          if (Number.isFinite(index) && (!turnAnchorByIndex.has(index) || this._isOwnedLine(line, botId, "transcript_text"))) {
            turnAnchorByIndex.set(index, { guid: line.guid, title: this._linePlainText(line) || "Transcript wording" });
          }
        }
      }
      for (const line of Array.isArray(items) ? items : []) {
        const role = String(this._lineMeta(line, LINE_META.ROLE) || "");
        if (role !== "summary_item" && role !== "action_item") continue;
        let citations = [];
        try {
          citations = JSON.parse(String(this._lineMeta(line, LINE_META.CITATIONS) || "[]"));
        } catch {
        }
        await this._appendSummaryReferences(line, citations, sectionAnchorById, turnAnchorByIndex);
      }
    }
    /**
     * The summary as a collapsible "📝 Summary" heading in the body, once per bot, placed just BEFORE
     * the transcript heading (summary on top, transcript below). Rich markdown — headings, bold,
     * action-item checkboxes — because the body parses it, unlike the flat property. When transcript
     * section anchors exist, every cited content line receives a native Thymer reference chip.
     * @param {any} record
     * @param {string} summary
     * @param {any[]} [citations]
     * @param {any[]} [sectionAnchors]
     * @param {any[]} [turnAnchors]
     * @param {any} [options]
     */
    async _writeSummaryToBody(record, summary, citations = [], sectionAnchors = [], turnAnchors = [], options = {}) {
      if (!record || typeof record.insertFromMarkdown !== "function" || !summary || !summary.trim()) return false;
      const force = !!(options && options.force);
      const section2 = options && options.section === "summary" ? "summary" : options && options.section === "actions" ? "actions" : "all";
      const writeSummary = section2 === "all" || section2 === "summary";
      const writeActions = section2 === "all" || section2 === "actions";
      await this._ensureMeetingSkeleton(record);
      const flagKey = this._bodyKey(record, "summary-body");
      const botId = this._text(record, FIELDS.BOT_ID) || "current";
      const writingValue = `writing:${botId}:${Date.now()}`;
      let items = typeof record.getLineItems === "function" ? await record.getLineItems(false) : [];
      let head = this._findOwnedLine(items, botId, BODY_ROLES.SUMMARY);
      let actionHead = this._findOwnedLine(items, botId, BODY_ROLES.ACTION_ITEMS);
      const summaryDone = !!(head && Number(this._lineMeta(head, LINE_META.COMPLETE)) === 1);
      const actionsDone = !!(actionHead && Number(this._lineMeta(actionHead, LINE_META.COMPLETE)) === 1);
      if (!force && writeSummary && writeActions && summaryDone && actionsDone) {
        await this._restoreMarkedSummaryReferences(items, botId);
        try {
          localStorage.setItem(flagKey, botId);
        } catch {
        }
        return true;
      }
      if (!force && writeSummary && !writeActions && summaryDone) {
        await this._restoreMarkedSummaryReferences(items, botId);
        return true;
      }
      if (!force && writeActions && !writeSummary && actionsDone) return true;
      try {
        const state = localStorage.getItem(flagKey) || "";
        if (!force && !head && state === botId) return true;
        localStorage.setItem(flagKey, writingValue);
      } catch {
      }
      const fail = /* @__PURE__ */ __name(() => {
        try {
          if (localStorage.getItem(flagKey) === writingValue) localStorage.removeItem(flagKey);
        } catch {
        }
        return false;
      }, "fail");
      try {
        if (writeSummary && !head) {
          let txHeadGuid = "";
          try {
            txHeadGuid = localStorage.getItem(this._bodyKey(record, "tx-head")) || "";
          } catch {
          }
          const ownedTranscript = this._findOwnedLine(items, botId, BODY_ROLES.TRANSCRIPT);
          if (ownedTranscript) txHeadGuid = ownedTranscript.guid;
          const topLevel = items.filter((li) => li.parent_guid === record.guid);
          const txIdx = topLevel.findIndex((li) => li.guid === txHeadGuid);
          const afterItem = txIdx > 0 ? topLevel[txIdx - 1] : null;
          const before = new Set(items.map((li) => li.guid));
          const anchorMd = this._headingAnchorMd(this._settings.summaryHeadingText, this._settings.summaryHeadingLevel);
          if (!anchorMd || await record.insertFromMarkdown(anchorMd, null, afterItem) === false) return fail();
          items = await record.getLineItems(false);
          head = items.find((li) => !before.has(li.guid)) || null;
          if (!head) return fail();
        }
        if (writeActions && !actionHead) {
          const spec = BODY_SECTION_ORDER.find((item) => item.role === BODY_ROLES.ACTION_ITEMS);
          const { text, level } = spec ? this._headingForSpec(spec) : { text: "\u2705 Action items", level: "h2" };
          const anchorMd = this._headingAnchorMd(text, level);
          const before = new Set(items.map((li) => li.guid));
          if (anchorMd && await record.insertFromMarkdown(anchorMd, null, head) !== false) {
            items = await record.getLineItems(false);
            actionHead = items.find((li) => !before.has(li.guid)) || null;
          }
        }
        if (writeSummary && head) await this._markOwnedLine(head, botId, BODY_ROLES.SUMMARY, { complete: false });
        if (writeActions && actionHead) await this._markOwnedLine(actionHead, botId, BODY_ROLES.ACTION_ITEMS, { complete: false });
        const { preamble, groups } = groupSummaryLines(summary, citations);
        const isActionGroup = /* @__PURE__ */ __name((heading) => /^action items?\b/i.test(String(heading || "")), "isActionGroup");
        const summaryGroups = [];
        const actionGroups = [];
        for (let groupIndex = 0; groupIndex < groups.length; groupIndex++) {
          const g = groups[groupIndex];
          if (actionHead && isActionGroup(g.heading)) actionGroups.push({ ...g, groupIndex });
          else summaryGroups.push({ ...g, groupIndex });
        }
        const sectionAnchorById = new Map((Array.isArray(sectionAnchors) ? sectionAnchors : []).filter((anchor) => anchor && Number.isFinite(Number(anchor.sectionId)) && anchor.guid).map((anchor) => [Number(anchor.sectionId), anchor]));
        const turnAnchorByIndex = new Map((Array.isArray(turnAnchors) ? turnAnchors : []).filter((anchor) => anchor && Number.isFinite(Number(anchor.entryIndex)) && anchor.guid).map((anchor) => [Number(anchor.entryIndex), anchor]));
        const afterOf = /* @__PURE__ */ __name((parentGuid) => {
          const kids = items.filter((li) => li.parent_guid === parentGuid);
          return kids.length ? kids[kids.length - 1] : null;
        }, "afterOf");
        let summaryItemIndex = 0;
        let actionItemIndex = 0;
        let writtenItems = 0;
        const insertOwnedLine = /* @__PURE__ */ __name(async (entry, parent, after, role, index) => {
          const existing = this._findOwnedLine(
            items,
            botId,
            role,
            /** @type {any} */
            index
          );
          if (existing) {
            await this._appendSummaryReferences(existing, entry.citations, sectionAnchorById, turnAnchorByIndex);
            writtenItems += 1;
            return existing;
          }
          const lineBefore = new Set(items.map((item) => item.guid));
          if (await record.insertFromMarkdown(this._escMd(entry.markdown), parent, after) === false) return after;
          items = await record.getLineItems(false);
          const created = items.find((item) => item.parent_guid === parent.guid && !lineBefore.has(item.guid)) || items.find((item) => !lineBefore.has(item.guid)) || null;
          if (created) {
            await this._markOwnedLine(created, botId, role, { entryIndex: index, citations: entry.citations });
            await this._appendSummaryReferences(created, entry.citations, sectionAnchorById, turnAnchorByIndex);
            writtenItems += 1;
          }
          return created || after;
        }, "insertOwnedLine");
        if (writeSummary && head) {
          let afterPreamble = null;
          for (const entry of preamble) {
            afterPreamble = await insertOwnedLine(entry, head, afterPreamble, "summary_item", summaryItemIndex++);
          }
          for (const g of summaryGroups) {
            let sec = (items || []).find((item) => String(this._lineMeta(item, LINE_META.ROLE) || "") === "summary_section" && Number(this._lineMeta(item, LINE_META.SECTION_ID)) === g.groupIndex) || null;
            if (!sec) {
              const b = new Set(items.map((li) => li.guid));
              if (await record.insertFromMarkdown(`### ${this._escMd(g.heading)}`, head, afterOf(head.guid)) === false) continue;
              items = await record.getLineItems(false);
              sec = items.find((li) => li.parent_guid === head.guid && !b.has(li.guid)) || null;
              if (sec) await this._markOwnedLine(sec, botId, "summary_section", { sectionId: g.groupIndex });
            }
            if (sec && g.content.length) {
              let afterContent = null;
              for (const entry of g.content) afterContent = await insertOwnedLine(entry, sec, afterContent, "summary_item", summaryItemIndex++);
            }
          }
        }
        if (writeActions && actionHead) {
          let afterAction = null;
          for (const g of actionGroups) {
            for (const entry of g.content) afterAction = await insertOwnedLine(entry, actionHead, afterAction, "action_item", actionItemIndex++);
          }
        }
        const expectedItems = (writeSummary ? preamble.length + summaryGroups.reduce((sum, group) => sum + group.content.length, 0) : 0) + (writeActions ? actionGroups.reduce((sum, group) => sum + group.content.length, 0) : 0);
        if (writtenItems !== expectedItems) return fail();
        if (writeSummary && head) await this._markOwnedLine(head, botId, BODY_ROLES.SUMMARY, { complete: true });
        if (writeActions && actionHead) await this._markOwnedLine(actionHead, botId, BODY_ROLES.ACTION_ITEMS, { complete: true });
        try {
          localStorage.setItem(flagKey, botId);
        } catch {
        }
        this._log("summary written to body", { botId });
        return true;
      } catch (err) {
        fail();
        this._log("summary body write failed", { error: this._errorMessage(err) });
        return false;
      }
    }
    /**
     * Delete owned Summary and/or Action items content, then write a fresh outline.
     * Leaves Notes and Transcript (and their descendants) untouched.
     * `options.section`: 'all' | 'summary' | 'actions'
     * @param {any} record
     * @param {string} summary
     * @param {any[]} [citations]
     * @param {any} [options]
     */
    async _replaceSummaryBody(record, summary, citations = [], options = {}) {
      if (!record || typeof record.getLineItems !== "function") return false;
      const section2 = options && options.section === "summary" ? "summary" : options && options.section === "actions" ? "actions" : "all";
      let items = await record.getLineItems(false);
      if (!await this._deleteHealRewriteNodes(items, [], section2)) return false;
      items = await record.getLineItems(false);
      const botId = this._text(record, FIELDS.BOT_ID) || TEMPLATE_OWNER;
      const head = this._findOwnedLine(items, botId, BODY_ROLES.SUMMARY);
      const actionHead = this._findOwnedLine(items, botId, BODY_ROLES.ACTION_ITEMS);
      if ((section2 === "all" || section2 === "summary") && head) await this._markOwnedLine(head, botId, BODY_ROLES.SUMMARY, { complete: false });
      if ((section2 === "all" || section2 === "actions") && actionHead) await this._markOwnedLine(actionHead, botId, BODY_ROLES.ACTION_ITEMS, { complete: false });
      if (section2 === "all") {
        try {
          localStorage.removeItem(this._bodyKey(record, "summary-body"));
        } catch {
        }
      }
      return this._writeSummaryToBody(record, summary, citations, [], [], { force: true, section: section2 });
    }
    /**
     * @param {any[]} items
     * @param {any} line
     * @param {string} rootGuid
     */
    _lineIsUnder(items, line, rootGuid) {
      if (!line || !rootGuid || line.guid === rootGuid) return false;
      const byGuid = new Map((Array.isArray(items) ? items : []).map((item) => [item.guid, item]));
      let guid = line.parent_guid;
      const seen = /* @__PURE__ */ new Set();
      while (guid && !seen.has(guid)) {
        if (guid === rootGuid) return true;
        seen.add(guid);
        const parent = byGuid.get(guid);
        guid = parent && parent.parent_guid;
      }
      return false;
    }
    /**
     * @param {any[]} items
     * @param {any} line
     */
    _lineDepth(items, line) {
      const byGuid = new Map((Array.isArray(items) ? items : []).map((item) => [item.guid, item]));
      let depth = 0;
      let guid = line && line.parent_guid;
      const seen = /* @__PURE__ */ new Set();
      while (guid && !seen.has(guid)) {
        seen.add(guid);
        depth += 1;
        const parent = byGuid.get(guid);
        guid = parent && parent.parent_guid;
      }
      return depth;
    }
    /**
     * @param {any[]} items
     * @param {any} record
     * @param {string} role
     * @param {string} headingTextKey
     * @param {string} fallbackLabel
     */
    _sectionRoot(items, record, role, headingTextKey, fallbackLabel) {
      const botId = this._text(record, FIELDS.BOT_ID) || TEMPLATE_OWNER;
      return this._findOwnedLine(items, botId, role) || guessHeadingByLabel(items, record && record.guid, this._settings && this._settings[headingTextKey] || fallbackLabel);
    }
    /**
     * @param {any[]} items
     * @param {any} record
     */
    _collectMashedSummaryBlobs(items, record) {
      const list2 = Array.isArray(items) ? items : [];
      const recordGuid = record && record.guid || "";
      const summaryRoot = this._sectionRoot(list2, record, BODY_ROLES.SUMMARY, "summaryHeadingText", "Summary");
      const notesRoot = this._sectionRoot(list2, record, BODY_ROLES.NOTES, "notesHeadingText", "Notes");
      const transcriptRoot = this._sectionRoot(list2, record, BODY_ROLES.TRANSCRIPT, "transcriptHeadingText", "Transcript");
      const protectedRoles = /* @__PURE__ */ new Set([
        BODY_ROLES.NOTES,
        BODY_ROLES.TRANSCRIPT,
        "transcript_turn",
        "transcript_text",
        "transcript_section"
      ]);
      const rewriteRoles = /* @__PURE__ */ new Set(["summary_item", "summary_section", "action_item", BODY_ROLES.SUMMARY, BODY_ROLES.ACTION_ITEMS]);
      const blobs = [];
      for (const line of list2) {
        if (!line) continue;
        const role = String(this._lineMeta(line, LINE_META.ROLE) || "");
        if (protectedRoles.has(role)) continue;
        if (notesRoot && (line.guid === notesRoot.guid || this._lineIsUnder(list2, line, notesRoot.guid))) continue;
        if (transcriptRoot && (line.guid === transcriptRoot.guid || this._lineIsUnder(list2, line, transcriptRoot.guid))) continue;
        const text = this._linePlainText(line);
        if (!looksLikeMashedSummary(text)) continue;
        const underSummary = !!(summaryRoot && (line.guid === summaryRoot.guid || this._lineIsUnder(list2, line, summaryRoot.guid)));
        const topLevel = String(line.parent_guid || "") === String(recordGuid);
        if (underSummary || rewriteRoles.has(role) || topLevel && !role) {
          blobs.push({
            line,
            text,
            isRoot: !!(summaryRoot && line.guid === summaryRoot.guid) || role === BODY_ROLES.SUMMARY
          });
        }
      }
      return blobs;
    }
    /**
     * @param {any[]} items
     * @param {any[]} blobs
     */
    async _deleteHealRewriteNodes(items, blobs, section2 = "all") {
      const rewriteRoles = /* @__PURE__ */ new Set();
      if (section2 === "all" || section2 === "summary") {
        rewriteRoles.add("summary_item");
        rewriteRoles.add("summary_section");
      }
      if (section2 === "all" || section2 === "actions") rewriteRoles.add("action_item");
      const blobGuids = new Set((blobs || []).filter((blob) => blob && blob.line && !blob.isRoot).map((blob) => blob.line.guid));
      const toDelete = (Array.isArray(items) ? items : []).filter((line) => {
        const role = String(this._lineMeta(line, LINE_META.ROLE) || "");
        if (rewriteRoles.has(role)) return true;
        return blobGuids.has(line.guid);
      });
      toDelete.sort((a, b) => this._lineDepth(items, b) - this._lineDepth(items, a));
      for (const line of toDelete) {
        if (!line || typeof line.delete !== "function") continue;
        const ok = await line.delete();
        if (ok === false) {
          this._log("heal delete failed", { guid: line.guid });
          return false;
        }
      }
      return true;
    }
    /**
     * @param {any} record
     * @returns {Promise<'healed'|'skipped'|'failed'>}
     */
    async _healMashedSummaryRecord(record, { quiet: _quiet = false } = {}) {
      if (!record || typeof record.getLineItems !== "function" || typeof record.insertFromMarkdown !== "function") return "failed";
      try {
        let items = await record.getLineItems(false);
        const blobs = this._collectMashedSummaryBlobs(items, record);
        if (!blobs.length) return "skipped";
        const rewriteRoles = /* @__PURE__ */ new Set(["summary_item", "summary_section", "action_item"]);
        const ownedRewrite = items.filter((line) => rewriteRoles.has(String(this._lineMeta(line, LINE_META.ROLE) || "")));
        const healthyOwned = ownedRewrite.filter((line) => {
          const text = this._linePlainText(line);
          return text && !looksLikeMashedSummary(text);
        });
        const recoveredParts = blobs.map((blob) => recoverSummaryMarkdown(blob.text)).filter((text) => String(text || "").trim());
        let recovered = sanitizeSummaryMarkdown(recoveredParts.join("\n\n"));
        if (!recovered || looksLikeMashedSummary(recovered)) return "skipped";
        const actionOnly = blobs.length > 0 && blobs.every((blob) => String(this._lineMeta(blob.line, LINE_META.ROLE) || "") === "action_item");
        if (actionOnly && !/^#{1,6}\s+action items?\b/im.test(recovered)) recovered = `### Action Items
${recovered}`;
        const cited = extractSummaryCitations(recovered, []);
        if (healthyOwned.length && !blobs.some((blob) => blob.isRoot)) {
          const ok = await this._healMashedBlobsInPlace(record, items, blobs);
          return ok ? "healed" : "failed";
        }
        if (!await this._deleteHealRewriteNodes(items, blobs)) return "failed";
        items = await record.getLineItems(false);
        for (const blob of blobs) {
          if (!blob.isRoot || !blob.line || typeof blob.line.setSegments !== "function") continue;
          const spec = BODY_SECTION_ORDER.find((item) => item.role === BODY_ROLES.SUMMARY);
          const text = spec ? this._headingForSpec(spec).text : "\u{1F4DD} Summary";
          await blob.line.setSegments([{ type: "text", text }]);
        }
        const botId = this._text(record, FIELDS.BOT_ID) || TEMPLATE_OWNER;
        const head = this._findOwnedLine(items, botId, BODY_ROLES.SUMMARY);
        const actionHead = this._findOwnedLine(items, botId, BODY_ROLES.ACTION_ITEMS);
        if (head) await this._markOwnedLine(head, botId, BODY_ROLES.SUMMARY, { complete: false });
        if (actionHead) await this._markOwnedLine(actionHead, botId, BODY_ROLES.ACTION_ITEMS, { complete: false });
        try {
          localStorage.removeItem(this._bodyKey(record, "summary-body"));
        } catch {
        }
        const written = await this._writeSummaryToBody(record, cited.markdown, cited.citations, [], [], { force: true });
        if (!written) return "failed";
        this._log("mashed summary healed", { recordGuid: record.guid || "" });
        return "healed";
      } catch (err) {
        this._log("mashed summary heal failed", { recordGuid: record.guid || "", error: this._errorMessage(err) });
        return "failed";
      }
    }
    /**
     * @param {any} record
     * @param {any[]} items
     * @param {any[]} blobs
     */
    async _healMashedBlobsInPlace(record, items, blobs) {
      const botId = this._text(record, FIELDS.BOT_ID) || TEMPLATE_OWNER;
      for (const blob of blobs) {
        if (!blob || blob.isRoot || !blob.line) continue;
        const recovered = sanitizeSummaryMarkdown(recoverSummaryMarkdown(blob.text));
        if (looksLikeMashedSummary(recovered)) continue;
        if (!recovered) {
          if (typeof blob.line.delete === "function" && await blob.line.delete() === false) return false;
          continue;
        }
        const parentGuid = blob.line.parent_guid;
        const parent = (items || []).find((item) => item.guid === parentGuid) || null;
        const siblings = (items || []).filter((item) => item.parent_guid === parentGuid);
        const index = siblings.findIndex((item) => item.guid === blob.line.guid);
        const after = index > 0 ? siblings[index - 1] : null;
        const before = new Set((items || []).map((item) => item.guid));
        const role = String(this._lineMeta(blob.line, LINE_META.ROLE) || "") === "action_item" ? "action_item" : "summary_item";
        if (await record.insertFromMarkdown(recovered, parent, after) === false) return false;
        if (typeof blob.line.delete === "function" && await blob.line.delete() === false) return false;
        items = await record.getLineItems(false);
        const created = items.filter((item) => !before.has(item.guid) && item.guid !== blob.line.guid);
        for (const line of created) {
          const createdRole = /^\s{0,3}#{1,6}\s/.test(this._linePlainText(line)) ? "summary_section" : role;
          await this._markOwnedLine(line, botId, createdRole);
        }
      }
      return true;
    }
    /** @param {any} record */
    async _healMashedSummariesForRecord(record, { quiet = false } = {}) {
      if (this._disabled) {
        if (!quiet) this._toast("Meetings is off", "Turn the plugin on to heal summaries.");
        return "failed";
      }
      if (!record) {
        if (!quiet) this._toast("Open a Meeting record first", "Heal mashed summaries needs an open meeting.");
        return "failed";
      }
      const result = await runCoalesced(
        /** @type {any} */
        this._healRecordInFlight,
        record.guid,
        () => this._healMashedSummaryRecord(record, { quiet: true })
      );
      if (!quiet) {
        if (result === "healed") this._toast("Heal mashed summaries", "1 meeting healed");
        else if (result === "skipped") this._toast("Heal mashed summaries", "Already healthy \u2014 nothing to rewrite");
        else this._toast("Heal mashed summaries", "Could not rewrite this summary");
      }
      return result;
    }
    async _confirmHealMashedSummaries() {
      const ok = await this._confirmBodyWrite({
        title: "Heal mashed summaries",
        body: "This scans every meeting and rewrites plugin-owned Summary / Action items nodes that look like leftover JSON or one glued blob. Healthy outlines, Notes, and Transcript are left alone.",
        confirmLabel: "Apply"
      });
      if (!ok) return;
      return this._healMashedSummariesBulk();
    }
    async _confirmApplyHeadingFormat() {
      const ok = await this._confirmBodyWrite({
        title: "Apply heading format",
        body: "This relabels, resizes, and reorders the four section headings (Summary, Action items, Notes, Transcript) on every Meetings record to match current settings. It may insert an empty heading for a missing section. It does not rewrite the text under those headings or re-summarize.",
        confirmLabel: "Apply"
      });
      if (!ok) return;
      return this._applyHeadingFormatBulk();
    }
    async _confirmCleanupEmptySkeleton() {
      const ok = await this._confirmBodyWrite({
        title: "Remove empty leaked skeleton",
        body: "This deletes empty default meeting headings on the page you have open. Headings with your notes or other text underneath are left alone.",
        confirmLabel: "Apply"
      });
      if (!ok) return;
      return this._cleanupEmptySkeletonFromActivePage();
    }
    async _healMashedSummariesBulk() {
      if (this._healInFlight) return this._healInFlight;
      if (this._disabled) {
        this._toast("Meetings is off", "Turn the plugin on to heal summaries.");
        return;
      }
      const task = (async () => {
        await this._refreshRecordIndex();
        let healed = 0;
        let skipped = 0;
        let failed = 0;
        for (
          const record of
          /** @type {Map<string, any>} */
          this._recordsByGuid.values()
        ) {
          const result = await runCoalesced(
            /** @type {any} */
            this._healRecordInFlight,
            record.guid,
            () => this._healMashedSummaryRecord(record, { quiet: true })
          );
          if (result === "healed") healed += 1;
          else if (result === "skipped") skipped += 1;
          else failed += 1;
        }
        this._toast("Heal mashed summaries", `${healed} healed \xB7 ${skipped} already healthy${failed ? ` \xB7 ${failed} failed` : ""}`);
        if (this._panelEl && document.contains(this._panelEl)) this._renderPanel();
      })();
      this._healInFlight = task;
      try {
        await task;
      } finally {
        if (this._healInFlight === task) this._healInFlight = null;
      }
    }
    _healDiagnosticsSection() {
      return section({
        label: "Diagnostics",
        hint: "Opt-in repairs for records in managed collections only.",
        body: [
          h(
            "div",
            { class: `${ROOT_CLASS}-field` },
            button({
              label: this._healInFlight ? "Healing\u2026" : "Heal mashed summaries",
              variant: "ghost",
              size: "md",
              disabled: !!this._healInFlight || !!this._disabled,
              onClick: /* @__PURE__ */ __name(() => void this._confirmHealMashedSummaries(), "onClick")
            })
          ),
          h(
            "span",
            { class: `${ROOT_CLASS}-field-hint` },
            "Scans every managed meeting; healthy outlines are left alone."
          ),
          h(
            "div",
            { class: `${ROOT_CLASS}-field` },
            button({
              label: this._headingRepairInFlight ? "Updating headings\u2026" : "Apply to existing meetings",
              variant: "ghost",
              size: "md",
              disabled: !!this._headingRepairInFlight || !!this._disabled,
              onClick: /* @__PURE__ */ __name(() => void this._confirmApplyHeadingFormat(), "onClick")
            })
          ),
          h(
            "span",
            { class: `${ROOT_CLASS}-field-hint` },
            "Relabels, resizes and reorders the four section headings to match current settings. Content is not rewritten."
          ),
          h(
            "div",
            { class: `${ROOT_CLASS}-field` },
            button({
              label: this._cleanupInFlight ? "Removing\u2026" : "Remove empty leaked skeleton from this page",
              variant: "ghost",
              size: "md",
              disabled: !!this._cleanupInFlight || !!this._disabled,
              onClick: /* @__PURE__ */ __name(() => void this._confirmCleanupEmptySkeleton(), "onClick")
            })
          ),
          h(
            "span",
            { class: `${ROOT_CLASS}-field-hint` },
            "Removes empty default headings from the open page only."
          )
        ]
      });
    }
    async _cleanupEmptySkeletonFromActivePage() {
      if (this._cleanupInFlight) return this._cleanupInFlight;
      if (this._disabled) {
        this._toast("Meetings is off", "Turn the plugin on to remove a leaked skeleton.");
        return;
      }
      const task = (async () => {
        const panel2 = this.ui.getActivePanel && this.ui.getActivePanel();
        const record = panel2 && panel2.getActiveRecord ? panel2.getActiveRecord() : null;
        if (!record || typeof record.getLineItems !== "function") {
          this._toast("Open a page first", "This cleanup only looks at the page you have open.");
          return;
        }
        const items = await record.getLineItems(false);
        const guids = new Set(emptyLeakedSkeletonGuids(items, record.guid, this._cleanupHeadingSpecs()));
        if (!guids.size) {
          this._toast("No empty leaked skeleton", "This page has no empty default meeting headings to remove.");
          return;
        }
        let removed = 0;
        for (const line of items) {
          if (!line || !guids.has(String(line.guid))) continue;
          if (headingHasDescendantText(items, line.guid)) continue;
          const emptyKids = items.filter((child) => child && child.parent_guid === line.guid && !lineItemPlainText(child));
          for (const child of emptyKids) {
            if (typeof child.delete === "function") {
              try {
                await child.delete();
              } catch {
              }
            }
          }
          if (typeof line.delete !== "function") continue;
          if (await line.delete() === false) continue;
          removed += 1;
        }
        this._toast("Removed empty leaked skeleton", `${removed} empty heading${removed === 1 ? "" : "s"} removed. User content was left alone.`);
      })();
      this._cleanupInFlight = task;
      try {
        await task;
      } finally {
        if (this._cleanupInFlight === task) this._cleanupInFlight = null;
      }
    }
    /** @param {any} record */
    async _applyHeadingFormatForRecord(record, { quiet = false } = {}) {
      if (this._disabled) {
        if (!quiet) this._toast("Meetings is off", "Turn the plugin on to apply heading format.");
        return "failed";
      }
      if (!this._isOwnedRecord(record)) {
        if (!quiet) this._toast("Meetings collections only", "Apply heading format seeds missing section headings, so it only ever runs on a collection Meetings owns \u2014 never on a hosted calendar\u2019s events, Journal, or anything else.");
        return "failed";
      }
      const result = await this._applyHeadingFormatRecord(record);
      if (!quiet) {
        if (result === "updated") this._toast("Apply heading format", "Updated this meeting\u2019s section headings.");
        else if (result === "skipped") this._toast("Apply heading format", "Already matches current settings.");
        else this._toast("Apply heading format", "Could not update this meeting.");
      }
      return result;
    }
    async _applyHeadingFormatBulk() {
      if (this._headingRepairInFlight) return this._headingRepairInFlight;
      if (this._disabled) {
        this._toast("Meetings is off", "Turn the plugin on to apply heading format.");
        return;
      }
      const task = (async () => {
        await this._refreshRecordIndex();
        let updated = 0;
        let skipped = 0;
        let failed = 0;
        for (
          const record of
          /** @type {Map<string, any>} */
          this._recordsByGuid.values()
        ) {
          if (!this._isOwnedRecord(record)) continue;
          const result = await this._applyHeadingFormatRecord(record);
          if (result === "updated") updated += 1;
          else if (result === "skipped") skipped += 1;
          else failed += 1;
        }
        this._toast("Apply heading format", `${updated} updated \xB7 ${skipped} already current${failed ? ` \xB7 ${failed} failed` : ""}`);
        if (this._panelEl && document.contains(this._panelEl)) this._renderPanel();
      })();
      this._headingRepairInFlight = task;
      try {
        await task;
      } finally {
        if (this._headingRepairInFlight === task) this._headingRepairInFlight = null;
      }
    }
    /** @param {any} record */
    async _applyHeadingFormatRecord(record) {
      if (!record || !this._isOwnedRecord(record)) return "failed";
      if (typeof record.getLineItems !== "function") return "failed";
      try {
        let items = await record.getLineItems(false);
        if (!Array.isArray(items)) items = [];
        const specs = this._repairHeadingSpecs();
        let plan = planHeadingFormatRepair(items, record.guid, specs);
        let changed = false;
        for (const job of plan.relabel) {
          const line = items.find((item) => item && item.guid === job.guid);
          if (!line || typeof line.setSegments !== "function") continue;
          if (await line.setSegments([{ type: "text", text: job.text }]) === false) continue;
          line.segments = [{ type: "text", text: job.text }];
          changed = true;
        }
        for (const job of plan.resize) {
          const line = items.find((item) => item && item.guid === job.guid);
          if (!line || typeof line.setHeadingSize !== "function") continue;
          if (await line.setHeadingSize(job.size) === false) continue;
          changed = true;
        }
        for (const spec of this._bodySectionSpecs()) {
          items = await record.getLineItems(false);
          if (!Array.isArray(items)) items = [];
          plan = planHeadingFormatRepair(items, record.guid, specs);
          const slot = plan.chosen.find((item) => item.role === spec.role);
          if (slot && slot.guid) continue;
          const prior = [];
          for (const earlier of plan.chosen) {
            if (earlier.role === spec.role) break;
            if (earlier.guid) prior.push(earlier.guid);
          }
          const afterItem = prior.length ? items.find((item) => item && item.guid === prior[prior.length - 1]) || null : null;
          const { text, level } = this._headingForSpec(spec);
          const anchorMd = this._headingAnchorMd(text, level);
          if (!anchorMd || typeof record.insertFromMarkdown !== "function") continue;
          const before = new Set(items.map((item) => item.guid));
          if (await record.insertFromMarkdown(anchorMd, null, afterItem) === false) continue;
          items = await record.getLineItems(false);
          const heading = items.find((item) => !before.has(item.guid)) || null;
          if (heading) {
            await this._markOwnedLine(heading, TEMPLATE_OWNER, spec.role);
            const size = headingLevelToSize(level);
            if (size != null && typeof heading.setHeadingSize === "function") {
              await heading.setHeadingSize(size);
            }
          }
          changed = true;
        }
        items = await record.getLineItems(false);
        if (!Array.isArray(items)) items = [];
        plan = planHeadingFormatRepair(items, record.guid, specs);
        if (plan.needsReorder) {
          let after = null;
          for (const slot of plan.chosen) {
            if (!slot.guid) continue;
            const heading = items.find((item) => item && item.guid === slot.guid) || null;
            if (!heading || typeof heading.move !== "function") continue;
            const moved = (
              /** @type {any} */
              await heading.move(record, after)
            );
            after = moved || heading;
            changed = true;
          }
        }
        return changed ? "updated" : "skipped";
      } catch (err) {
        this._log("heading format repair failed", { error: this._errorMessage(err) });
        return "failed";
      }
    }
    /**
     * Make freshly-streamed transcript lines VISIBLE mid-meeting. Thymer only repaints the editor on
     * navigation — a plugin's out-of-band body writes sit invisible until then, which is exactly why
     * the transcript looked like it "only appeared at the end". Re-navigate the open panel to the newest
     * line (which re-renders the editor and scrolls the live feed to it), but ONLY when this record is
     * the one on screen AND the user is NOT typing in it — so it never yanks the cursor out of notes
     * they're writing. When they are typing, the writes stay pending and show on their next navigation.
     *
     * @param {any} record
     * @param {string|null} itemGuid the newest streamed line to scroll to
     */
    _scrollToLiveTranscript(record, itemGuid) {
      if (this._disabled || !itemGuid || !record || this._settings.followLiveTranscript === false) return;
      try {
        const panel2 = this.ui.getActivePanel && this.ui.getActivePanel();
        if (!panel2 || typeof panel2.navigateTo !== "function") return;
        const active = panel2.getActiveRecord ? panel2.getActiveRecord() : null;
        if (!active || active.guid !== record.guid) return;
        if (this._userTypingInPanel(panel2)) return;
        void panel2.navigateTo({ type: "edit_panel", rootId: record.guid, subId: null, workspaceGuid: null, itemGuid, highlight: true });
      } catch {
      }
    }
    /**
     * True when the caret/focus sits inside this panel's editor — i.e. the user is actively typing.
     * @param {any} panel
     */
    _userTypingInPanel(panel2) {
      try {
        const el2 = (
          /** @type {HTMLElement|null} */
          document.activeElement
        );
        if (!el2) return false;
        const root = panel2 && panel2.getElement ? panel2.getElement() : null;
        if (!root || !root.contains(el2)) return false;
        return el2.isContentEditable === true || el2.tagName === "INPUT" || el2.tagName === "TEXTAREA";
      } catch {
        return false;
      }
    }
    /**
     * @param {any} record
     * @param {string} botId
     */
    _ensurePolling(record, botId) {
      if (!this._pollers) this._pollers = /* @__PURE__ */ new Map();
      if (!record || !botId || this._pollers.has(botId)) return;
      let tickCount = 0;
      const tick = /* @__PURE__ */ __name(() => {
        tickCount += 1;
        this._log("poll tick", { botId, tick: tickCount, pollSeconds: this._settings.pollSeconds });
        void this._syncRecord(record, { summarize: true, quiet: true, botId }).then((done) => {
          if (done) {
            this._log("poll complete", { botId, tick: tickCount });
            this._stopPolling(botId);
          }
        }).catch((err) => {
          this._log("poll failed", { botId, tick: tickCount, error: this._errorMessage(err) });
        });
      }, "tick");
      const timer = setInterval(tick, this._settings.pollSeconds * 1e3);
      this._pollers.set(botId, { recordGuid: record.guid, timer });
      this._log("polling started", { botId, pollSeconds: this._settings.pollSeconds });
      setTimeout(tick, 1e3);
    }
    /** @param {string} botId */
    _stopPolling(botId) {
      if (!this._pollers) return;
      const poller = this._pollers.get(botId);
      if (!poller) return;
      clearInterval(poller.timer);
      this._pollers.delete(botId);
    }
    /**
     * The nav-strip buttons are gone in 2.0 (a global plugin has no collection action bar), but ~27
     * call sites still say "the record's affordance may have gone stale, refresh it". They mean the
     * record-page Bot Status button now, so the NAME stays and the body redirects — zero call-site
     * churn, and no risk of missing one.
     * @param {any} _record
     */
    _updateNavButtonForRecord(_record) {
      this._decorateStatusField();
    }
    /**
     * Meeting Date as epoch ms, or null when unset/unparseable.
     * @param {any} record
     */
    _joinAtMs(record) {
      const iso = this._joinAtIso(record);
      if (!iso) return null;
      const ms = Date.parse(iso);
      return Number.isFinite(ms) ? ms : null;
    }
    /**
     * True when Date is far enough out that (Date − 2 min) still meets Recall's scheduled-bot cliff.
     * @param {any} record
     */
    _isScheduledDispatch(record) {
      return isSchedulableMeeting(this._joinAtMs(record));
    }
    /** @param {any} record */
    _recordVisualState(record) {
      const IDLE = {
        kind: "idle",
        icon: "microphone",
        label: "Join Now"
      };
      if (!record) return IDLE;
      const status = this._text(record, FIELDS.STATUS).toLowerCase();
      const botId = this._text(record, FIELDS.BOT_ID);
      if (status === "summarizing") return {
        kind: "summarizing",
        icon: "loader-2",
        label: "Summarizing"
      };
      if (status === "cancelling") return {
        kind: "cancelling",
        icon: "loader-2",
        label: "Cancelling"
      };
      if (status === "processing transcript") return {
        kind: "processing",
        icon: "loader-2",
        label: "Processing Transcript"
      };
      if (botId && (status === "summary_failed" || status === "error" || isFatalStatus(status))) return {
        kind: "repair",
        icon: "alert-circle",
        label: "Repair"
      };
      if (botId && COMPLETED_MEETING_STATUSES.has(status)) return {
        kind: "done",
        icon: "circle-check",
        label: "Done"
      };
      if (botId && isMeetingEndedStatus(status)) return {
        kind: "processing",
        icon: "loader-2",
        label: "Processing Transcript"
      };
      if (botId && (botJoinMs(this._joinAtMs(record)) ?? 0) > Date.now() && !isTerminalStatus(status) && status !== "error") return {
        kind: "scheduled",
        icon: "calendar",
        label: "Scheduled"
      };
      if (botId && !isTerminalStatus(status) && status !== "error") return {
        kind: "recording",
        icon: "circle-dot",
        label: "Recording"
      };
      if (this._isScheduledDispatch(record)) return {
        kind: "schedulable",
        icon: "calendar",
        label: "Schedule Bot"
      };
      return IDLE;
    }
    async _restorePolling() {
      const records = this._recordsByGuid && this._recordsByGuid.values ? this._recordsByGuid.values() : [];
      for (const record of records) {
        const botId = this._text(record, FIELDS.BOT_ID);
        const status = this._text(record, FIELDS.STATUS);
        if (shouldRestoreMeetingPolling(botId, status)) this._ensurePolling(record, botId);
      }
    }
    _restartPollingIntervals() {
      if (this._disabled) return;
      const existing = this._pollers && this._pollers.keys ? Array.from(this._pollers.keys()) : [];
      for (const botId of existing) this._stopPolling(botId);
      void this._restorePolling();
    }
    _recallHeaders(includeContentType = true) {
      const headers = { Authorization: `Token ${this._settings.recallApiKey}` };
      if (includeContentType) headers["Content-Type"] = "application/json";
      return headers;
    }
    _recallBaseUrl() {
      return RECALL_REGIONS[
        /** @type {keyof typeof RECALL_REGIONS} */
        this._settings.recallRegion
      ] || RECALL_REGIONS["us-west-2"];
    }
    _bridgeUrl() {
      return String(this._settings.bridgeUrl || "").trim().replace(/\/+$/, "");
    }
    /**
     * @param {string} path
     * @param {any} body
     */
    async _bridgeJson(path, body) {
      const base = this._bridgeUrl();
      if (!base) throw new Error("Bridge URL is not configured.");
      const response = await fetchWithBackoff(`${base}${path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body || {})
      });
      const json = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(formatBridgeError(json, response.status));
      return json;
    }
    /** @param {any} record */
    async _showMeetingDiagnostics(record) {
      if (!record) return this._toast("Open a Meeting record first", "Diagnostics needs an active Meeting record.");
      const botId = this._text(record, FIELDS.BOT_ID);
      if (!botId) return this._toast("No bot ID", "Send the notetaker before opening meeting diagnostics.");
      if (!this._bridgeUrl()) return this._toast("Bridge not configured", "Realtime diagnostics require the hosted bridge.");
      try {
        const result = await this._bridgeJson("/api/recall/diagnostics", {
          recallApiKey: this._settings.recallApiKey,
          recallRegion: this._settings.recallRegion,
          botId
        });
        const debug = result && result.debug || {};
        if (record.guid) /** @type {Map<string, any>} */
        this._diagnosticsByRecord.set(record.guid, debug);
        const report = formatMeetingDiagnosticsReport({
          pluginVersion: PLUGIN_VERSION,
          recordGuid: record.guid || "",
          botId,
          meetingStatus: this._text(record, FIELDS.STATUS),
          debug
        });
        console.info("[meetings] meeting diagnostics\n" + report);
        await openReportDialog({
          rootClass: ROOT_CLASS,
          title: "Diagnostics",
          report,
          issueTitle: `Meetings diagnostics ${botId}`,
          onCopied: /* @__PURE__ */ __name((ok) => {
            this._toast(ok ? "Diagnostics copied" : "Could not copy diagnostics", ok ? "The report is on the clipboard." : "Clipboard is blocked \u2014 the full report is in the browser console.");
          }, "onCopied"),
          onSubmit: /* @__PURE__ */ __name(({ truncated, copied }) => {
            if (truncated && copied) {
              this._toast("Opening GitHub issue", "The URL was too long, so the full report is on the clipboard.");
              return;
            }
            if (truncated) {
              this._toast("Opening GitHub issue", "The full report is in the browser console \u2014 paste it into the issue if the form is empty.");
              return;
            }
            this._toast("Opening GitHub issue", "A new Meetings issue is prefilled with this report.");
          }, "onSubmit")
        });
      } catch (err) {
        this._toast("Unable to load diagnostics", this._errorMessage(err));
      }
    }
    /**
     * A managed collection's active properties.
     *
     * In 1.x this read `this.getConfiguration()` — the collection's own config. A global plugin's
     * config has no `fields`, so every field lookup now has to name the collection it means.
     * @param {string} collectionGuid
     */
    _collectionFields(collectionGuid) {
      const api = this._managedApi(collectionGuid) || this._collectionByGuid(collectionGuid);
      let conf = null;
      try {
        conf = api && api.getConfiguration ? api.getConfiguration() : null;
      } catch {
        conf = null;
      }
      const fields = conf && Array.isArray(conf.fields) ? conf.fields : [];
      return fields.filter((field) => field && field.active !== false);
    }
    /**
     * Bring every OWNED collection's schema up to date: hide the retired transcript/summary text
     * properties, rename Join At → Date, guarantee an Attendees relation and a Related relation.
     *
     * Owned only, and — unlike 1.x — WITHOUT `configWithPluginVersion`. A collection is not this
     * plugin any more; stamping our semver onto it would make the Plugins Manager and the collection
     * disagree about what is installed where.
     */
    async _migrateOwnedSchemas() {
      for (
        const [guid, entry] of
        /** @type {Map<string, any>} */
        this._managed
      ) {
        if (!entry || entry.binding.role !== "owned") continue;
        await this._safeAsync("migrate owned schema", () => this._migrateOwnedSchema(guid, entry.api));
      }
    }
    /**
     * @param {string} collectionGuid
     * @param {any} api
     */
    async _migrateOwnedSchema(collectionGuid, api) {
      if (!api || typeof api.saveConfiguration !== "function") return;
      return queuePluginConfigWrite(api, async () => {
        const live = api.getConfiguration?.() || {};
        const migrated = migrateMeetingSchema(live);
        if (!migrated.changed) return;
        try {
          let workspace = "default";
          try {
            workspace = this.getWorkspaceGuid?.() || "default";
          } catch {
          }
          const guardKey = `recall-ai/schema/${workspace}/${collectionGuid}/${PLUGIN_VERSION}`;
          if (sessionStorage.getItem(guardKey) === "attempted") return;
          sessionStorage.setItem(guardKey, "attempted");
        } catch {
        }
        await api.saveConfiguration(migrated.configuration);
      });
    }
    /**
     * Add the three integration properties to a HOSTED collection — bot id, status, last error — and
     * nothing else. One save, idempotent. `meeting_url` is deliberately NOT here: a calendar already
     * has the link somewhere, and the Collections tab's "Create a … property" offers it explicitly if
     * the user really wants a dedicated one.
     *
     * @param {string} collectionGuid
     */
    async _ensureHostedFields(collectionGuid) {
      const api = this._managedApi(collectionGuid) || this._collectionByGuid(collectionGuid);
      if (!api || typeof api.saveConfiguration !== "function") {
        this._toast("Could not add the Meetings properties", "Thymer did not hand over a writable config handle for that collection.");
        return false;
      }
      return queuePluginConfigWrite(api, async () => {
        const live = api.getConfiguration?.() || {};
        const conf = JSON.parse(JSON.stringify(live));
        conf.fields = Array.isArray(conf.fields) ? conf.fields : [];
        let changed = false;
        for (const id of HOSTED_FIELD_IDS) {
          if (conf.fields.some((field) => String(field && field.id || "") === id)) continue;
          conf.fields.push({ ...FIELD_DEFS[id] });
          changed = true;
        }
        changed = this._ensureFieldVisible(conf, HOSTED_FIELD_IDS) || changed;
        if (!changed) return true;
        const ok = await api.saveConfiguration(conf);
        if (ok === false) {
          this._toast("Could not add the Meetings properties", "Thymer rejected the change.");
          return false;
        }
        return true;
      });
    }
    /**
     * Put field ids on the record page, in the first table view, and in the default property set.
     * Returns true when anything changed.
     *
     * @param {any} conf a MUTABLE clone of a collection config
     * @param {readonly string[]} ids
     */
    _ensureFieldVisible(conf, ids) {
      let changed = false;
      conf.page_field_ids = Array.isArray(conf.page_field_ids) ? conf.page_field_ids : [];
      const table = (Array.isArray(conf.views) ? conf.views : []).find((view) => String(view && view.type || "") === "table");
      const setName = conf.property_set_default;
      const sets = conf.property_sets && typeof conf.property_sets === "object" ? conf.property_sets : null;
      const defaultSet = setName && sets && sets[setName] && typeof sets[setName] === "object" ? sets[setName] : null;
      for (const id of ids) {
        if (!conf.page_field_ids.includes(id)) {
          conf.page_field_ids.push(id);
          changed = true;
        }
        if (table && Array.isArray(table.field_ids) && !table.field_ids.includes(id)) {
          table.field_ids.push(id);
          changed = true;
        }
        if (defaultSet && Array.isArray(defaultSet.member_ids) && !defaultSet.member_ids.includes(id)) {
          defaultSet.member_ids.push(id);
          changed = true;
        }
      }
      return changed;
    }
    /**
     * @param {string} collectionGuid
     * @param {any} id
     */
    _fieldById(collectionGuid, id) {
      if (!id) return null;
      return this._collectionFields(collectionGuid).find((field) => String(field.id) === String(id)) || null;
    }
    /** @param {any} record */
    _attendeesField(record) {
      const collGuid = this._collectionGuidOf(record);
      const binding = this._bindingFor(record);
      const selected = binding ? binding.attendeesFieldId : "";
      return findAttendeesRelationField(this._collectionFields(collGuid), selected);
    }
    /** @param {string} field */
    _mappingSettingFor(field) {
      if (field === FIELDS.MEETING_URL) return "meetingUrlFieldId";
      if (field === FIELDS.JOIN_AT) return "joinAtFieldId";
      if (field === FIELDS.PARTICIPANT_NAMES) return "participantNamesFieldId";
      if (field === FIELDS.ATTENDEES) return "attendeesFieldId";
      if (field === FIELDS.RELATED) return "relatedFieldId";
      return "";
    }
    /**
     * The property id to read/write for a canonical field ON THIS RECORD'S collection: the binding's
     * mapping when set, else the canonical id.
     * @param {any} record
     * @param {string} field
     */
    _mappedFieldId(record, field) {
      const setting = this._mappingSettingFor(field);
      const binding = this._bindingFor(record);
      const mapped = setting && binding ? String(binding[setting] || "").trim() : "";
      return mapped || field;
    }
    /**
     * Auto-detect order for the meeting link, OWNED collections only. Hosted collections never guess:
     * a calendar record carries a "Google Link" to the event page on every single row, and sending a
     * paid bot to a calendar web page is worse than doing nothing.
     * @param {string} collectionGuid
     */
    _meetingUrlFieldIds(collectionGuid) {
      const fields = this._collectionFields(collectionGuid);
      const ids = [];
      const add = /* @__PURE__ */ __name((id) => {
        if (id && !ids.includes(id)) ids.push(id);
      }, "add");
      add(FIELDS.MEETING_URL);
      const normalizedMatches = /* @__PURE__ */ __name((field) => {
        const haystack = `${field.id || ""} ${field.label || ""}`.toLowerCase();
        return haystack.includes("meeting") && (haystack.includes("url") || haystack.includes("link"));
      }, "normalizedMatches");
      for (const field of fields) {
        if (String(field.type || "").toLowerCase() === "url" && normalizedMatches(field)) add(field.id);
      }
      for (const field of fields) {
        if (normalizedMatches(field)) add(field.id);
      }
      for (const field of fields) {
        if (String(field.type || "").toLowerCase() === "url") add(field.id);
      }
      return ids;
    }
    /**
     * The meeting link on a record, or '' when there is none.
     *
     * Mapped field set → that field ONLY, through extractMeetingUrl (a calendar keeps the Meet link
     * inside Location/description prose). Unset + owned → today's auto-detect heuristic. Unset +
     * hosted → inert: no button, no inline mic, no auto-schedule, until the user maps a field.
     * @param {any} record
     */
    _meetingUrl(record) {
      if (!record) return "";
      const binding = this._bindingFor(record);
      if (!binding) return "";
      const mapped = String(binding.meetingUrlFieldId || "").trim();
      if (mapped) return extractMeetingUrl(this._text(record, mapped));
      if (binding.role !== "owned") return "";
      for (const fieldId of this._meetingUrlFieldIds(this._collectionGuidOf(record))) {
        const value = this._text(record, fieldId);
        if (value) return value;
      }
      try {
        const props = record.getAllProperties ? record.getAllProperties() : [];
        for (const prop of props) {
          const value = this._propertyText(prop);
          if (/^https?:\/\//i.test(value)) return value;
        }
      } catch {
      }
      return "";
    }
    _scheduleRecordRefresh() {
      if (this._recordRefreshTimer) clearTimeout(this._recordRefreshTimer);
      this._recordRefreshTimer = setTimeout(() => {
        this._recordRefreshTimer = null;
        void this._refreshRecordIndex().then(() => {
          this._decorateInlineRefs();
          this._autoScheduleSweep();
        });
      }, 300);
    }
    /**
     * Book a bot for any meeting whose Date is far enough out that Recall treats it as a scheduled
     * bot. Deliberately never fires for imminent/past meetings — an auto-sent ad-hoc bot would walk
     * into a room nobody is in yet and bill for it.
     *
     * Auto-scheduling is PER COLLECTION in 2.x (binding.autoSchedule), on by default for a
     * collection Meetings owns and off for a hosted one: a calendar full of future Meet links would
     * otherwise book — and bill for — a paid bot on every single event.
     */
    _autoScheduleSweep() {
      if (this._disabled) return;
      if (!this._settings.recallApiKey) return;
      for (
        const record of
        /** @type {Map<string, any>} */
        this._recordsByGuid.values()
      ) void this._maybeAutoSchedule(record);
    }
    /**
     * React to Date being set, changed, or cleared on a Meetings record.
     * Far-out Dates book a scheduled bot. Too-soon (but future) Dates convert to an immediate Join Now
     * when auto-schedule is on, else toast. Past Dates always toast instead of failing silent.
     * @param {any} record
     */
    async _handleMeetingDateUpdate(record) {
      const guid = record && record.guid;
      if (!guid) return;
      const iso = this._joinAtIso(record) || "";
      if (!/** @type {Map<string, any>} */
      this._lastJoinAtByGuid.has(guid)) {
        /** @type {Map<string, any>} */
        this._lastJoinAtByGuid.set(guid, iso);
        return;
      }
      const prev = (
        /** @type {Map<string, any>} */
        this._lastJoinAtByGuid.get(guid) || ""
      );
      if (iso === prev) return;
      /** @type {Map<string, any>} */
      this._lastJoinAtByGuid.set(guid, iso);
      if (!iso) {
        /** @type {Set<string>} */
        this._autoScheduled.delete(guid);
        const prevMs = Date.parse(prev);
        const wasFuture = Number.isFinite(prevMs) && (botJoinMs(prevMs) || 0) > Date.now();
        if (wasFuture && this._text(record, FIELDS.BOT_ID)) await this._cancelScheduledBot(record);
        this._updateNavButtonForRecord(record);
        return;
      }
      if (!this._meetingUrl(record)) {
        this._toast("Add a meeting link", "Date is set, but the notetaker needs a meeting URL before it can be scheduled.");
        return;
      }
      const blocked = scheduleBlockReason(this._joinAtMs(record));
      if (blocked) {
        if (blocked === "too_soon" && this._bindingFor(record)?.autoSchedule && !this._text(record, FIELDS.BOT_ID)) {
          await this._startBot(
            /** @type {any} */
            record,
            { immediate: true }
          );
          return;
        }
        const leadMinutes = Math.round((SCHEDULED_LEAD_MS + BOT_JOIN_LEAD_MS) / 6e4);
        this._toast(
          "Join Now needed",
          blocked === "past" ? "This Date is in the past. Click Join Now to send the notetaker immediately." : `Scheduled bots need a Date at least ${leadMinutes} minutes out. Click Join Now to send the notetaker immediately.`
        );
        return;
      }
      /** @type {Set<string>} */
      this._autoScheduled.delete(guid);
      if (this._bindingFor(record)?.autoSchedule) await this._maybeAutoSchedule(record);
    }
    /** @param {any} record */
    async _maybeAutoSchedule(record) {
      const guid = record && record.guid;
      if (!guid || /** @type {Set<string>} */
      this._autoScheduled.has(guid)) return;
      if (!this._bindingFor(record)?.autoSchedule) return;
      if (this._text(record, FIELDS.BOT_ID)) return;
      if (!this._meetingUrl(record)) return;
      if (!this._isScheduledDispatch(record)) return;
      /** @type {Set<string>} */
      this._autoScheduled.add(guid);
      this._log("auto-scheduling bot", { recordGuid: guid });
      await this._startBot(record);
      if (!this._text(record, FIELDS.BOT_ID)) /** @type {Set<string>} */
      this._autoScheduled.delete(guid);
    }
    /**
     * Rebuild both indexes across EVERY managed collection.
     *
     * `_recordCollection` is the half that matters most: a PluginRecord cannot say which collection
     * it is in, so without this map a record handed to us by a poller or a panel is unattributable —
     * and every field lookup, body key and write gate depends on knowing.
     */
    async _refreshRecordIndex() {
      const byGuid = /* @__PURE__ */ new Map();
      const collectionOf = /* @__PURE__ */ new Map();
      for (
        const [collGuid, entry] of
        /** @type {Map<string, any>} */
        this._managed
      ) {
        let records = [];
        try {
          records = await entry.api.getAllRecords() || [];
        } catch (err) {
          this._log("collection records unavailable", { collectionGuid: collGuid, error: this._errorMessage(err) });
          continue;
        }
        for (const record of records) {
          if (!record || !record.guid) continue;
          byGuid.set(record.guid, record);
          collectionOf.set(record.guid, collGuid);
        }
      }
      this._recordsByGuid = byGuid;
      this._recordCollection = collectionOf;
      for (const record of byGuid.values()) {
        if (!/** @type {Map<string, any>} */
        this._lastJoinAtByGuid.has(record.guid)) {
          /** @type {Map<string, any>} */
          this._lastJoinAtByGuid.set(record.guid, this._joinAtIso(record) || "");
        }
      }
    }
    /** @param {any} record */
    _joinAtIso(record) {
      const prop = this._prop(record, this._mappedFieldId(record, FIELDS.JOIN_AT));
      if (!prop) return null;
      try {
        const dt = prop.datetime && prop.datetime();
        if (dt && dt.toDate) return dt.toDate().toISOString();
        const date2 = prop.date && prop.date();
        if (date2 instanceof Date) return date2.toISOString();
      } catch {
      }
      const raw = prop.text && prop.text();
      if (!raw) return null;
      const date = new Date(raw);
      return Number.isNaN(date.getTime()) ? raw : date.toISOString();
    }
    /**
     * @param {any} record
     * @param {any} field
     */
    _text(record, field) {
      try {
        const prop = this._prop(record, field);
        if (!prop) return "";
        return this._propertyText(prop);
      } catch {
        return "";
      }
    }
    /**
     * @param {any} record
     * @param {any} field
     * @param {any} value
     */
    _setField(record, field, value) {
      try {
        const prop = this._prop(record, field);
        if (prop) prop.set(value == null ? "" : value);
      } catch (err) {
        this._toast("Unable to update meeting record", `${field}: ${this._errorMessage(err)}`);
      }
    }
    /**
     * @param {any} record
     * @param {any} field
     * @param {any} value
     */
    _setMappedField(record, field, value) {
      return this._setField(record, this._mappedFieldId(record, field), value);
    }
    /**
     * @param {any} record
     * @param {any} fieldIdOrLabel
     */
    _prop(record, fieldIdOrLabel) {
      if (!record || !fieldIdOrLabel) return null;
      let prop = null;
      try {
        prop = record.prop(fieldIdOrLabel);
      } catch {
      }
      if (prop) return prop;
      const field = this._fieldById(this._collectionGuidOf(record), fieldIdOrLabel);
      if (field && field.label) {
        try {
          prop = record.prop(field.label);
        } catch {
        }
        if (prop) return prop;
      }
      if (field && field.id) {
        try {
          prop = record.prop(field.id);
        } catch {
        }
        if (prop) return prop;
      }
      return null;
    }
    /** @param {any} prop */
    _propertyText(prop) {
      if (!prop) return "";
      try {
        const value = prop.text ? prop.text() : null;
        if (value != null && String(value).trim()) return String(value).trim();
      } catch {
      }
      try {
        const values = prop.values ? prop.values() : [];
        for (const value of values) {
          const text = propertyValueToText(value);
          if (text) return text;
        }
      } catch {
      }
      try {
        const texts = prop.texts ? prop.texts() : [];
        for (const text of texts) {
          if (text != null && String(text).trim()) return String(text).trim();
        }
      } catch {
      }
      return "";
    }
    _attachEditorObserver() {
      if (this._attachRetryTimer) {
        clearTimeout(this._attachRetryTimer);
        this._attachRetryTimer = null;
      }
      const panel2 = this.ui.getActivePanel && this.ui.getActivePanel();
      const root = panel2 && panel2.getElement ? panel2.getElement() : null;
      if (!root) {
        this._attachRetryTimer = setTimeout(() => this._attachEditorObserver(), 500);
        return;
      }
      if (this._observedRoot === root && this._editorObserver) {
        this._decorateRecordPage(root);
        return;
      }
      if (this._editorObserver) this._editorObserver.disconnect();
      this._observedRoot = root;
      this._editorObserver = new MutationObserver((mutations) => {
        if (mutations.some((m) => m.type === "childList" || m.attributeName === "data-guid" || m.attributeName === "class")) {
          this._decorateRecordPage(root);
        }
      });
      this._editorObserver.observe(root, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["data-guid", "class"]
      });
      this._decorateRecordPage(root);
    }
    /**
     * Both record-page decorations that ride the panel MutationObserver: inline refs + the status-field send button.
     * @param {any} root
     */
    _decorateRecordPage(root) {
      this._decorateInlineRefs(root);
      this._decorateStatusField(root);
    }
    /**
     * Structural guids are not real inline references: journal date-group headers
     * ("nest-...") and the open page's own title node both carry a data-guid.
     */
    /** @param {any} guid */
    _isStructuralGuid(guid) {
      if (!guid) return true;
      if (guid.startsWith("nest-")) return true;
      if (this._activeRecordGuid && guid === this._activeRecordGuid) return true;
      return false;
    }
    /** @param {any} [root] */
    _decorateInlineRefs(root = this._observedRoot || document.body) {
      if (!root || !/** @type {Map<string, any>} */
      this._recordsByGuid.size) return;
      const leaves = root.querySelectorAll("span[data-guid]");
      for (const leaf of leaves) {
        if (!(leaf instanceof HTMLElement)) continue;
        if (!leaf.closest(EDITOR_SCOPE)) continue;
        if (leaf.closest(INLINE_SKIP_SELECTOR)) continue;
        if (leaf.querySelector("[data-guid]")) continue;
        const guid = leaf.getAttribute("data-guid");
        if (!guid || !/** @type {Map<string, any>} */
        this._recordsByGuid.has(guid)) continue;
        if (this._isStructuralGuid(guid)) continue;
        if (!this._meetingUrl(
          /** @type {Map<string, any>} */
          this._recordsByGuid.get(guid)
        )) continue;
        const anchor = leaf.closest(INLINE_REF_SELECTOR) || leaf;
        const next = anchor.nextElementSibling;
        if (next && next.classList && next.classList.contains(INLINE_BUTTON_CLASS) && next.getAttribute("data-guid") === guid) {
          anchor.setAttribute(INLINE_APPLIED_ATTR, guid);
          continue;
        }
        const record = (
          /** @type {Map<string, any>} */
          this._recordsByGuid.get(guid)
        );
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = INLINE_BUTTON_CLASS;
        btn.contentEditable = "false";
        btn.setAttribute("data-guid", guid);
        btn.title = `Send transcriber${record ? ` to ${this._recordTitle(record)}` : ""}`;
        btn.setAttribute("aria-label", "Send transcriber");
        btn.innerHTML = '<i class="ti ti-microphone" aria-hidden="true"></i>';
        btn.addEventListener("mousedown", (ev) => ev.preventDefault());
        btn.addEventListener("click", (ev) => {
          ev.preventDefault();
          ev.stopPropagation();
          void this._startBot(
            /** @type {Map<string, any>} */
            this._recordsByGuid.get(guid)
          );
        });
        anchor.insertAdjacentElement("afterend", btn);
        anchor.setAttribute(INLINE_APPLIED_ATTR, guid);
      }
    }
    /** @param {any} record */
    _recordTitle(record) {
      return this._text(record, FIELDS.TITLE) || "this meeting";
    }
    _stripInlineButtons() {
      document.querySelectorAll(`.${INLINE_BUTTON_CLASS}`).forEach((el2) => el2.remove());
      document.querySelectorAll(`[${INLINE_APPLIED_ATTR}]`).forEach((el2) => el2.removeAttribute(INLINE_APPLIED_ATTR));
    }
    /**
     * Where the user was in the panel, across the plugin reload every config save triggers.
     *
     * sessionStorage, not the settings store: this is UI position, it is per-window, and routing it
     * through a synced blob would mean a save to remember where you were before a save.
     */
    _panelPlaceKey() {
      let workspace = "";
      try {
        workspace = this.getWorkspaceGuid ? this.getWorkspaceGuid() || "" : "";
      } catch {
      }
      return `recall-ai/${workspace || "default"}/panel-place`;
    }
    _restorePanelPlace() {
      this._activeTab = "setup";
      try {
        const parsed = JSON.parse(sessionStorage.getItem(this._panelPlaceKey()) || "null");
        if (parsed && typeof parsed.tab === "string") this._activeTab = parsed.tab;
        if (parsed && typeof parsed.collection === "string") this._selectedCollectionGuid = parsed.collection;
      } catch {
      }
    }
    _savePanelPlace() {
      try {
        sessionStorage.setItem(this._panelPlaceKey(), JSON.stringify({
          tab: this._activeTab || "setup",
          collection: this._selectedCollectionGuid || ""
        }));
      } catch {
      }
    }
    _renderPanel() {
      if (!this._panelEl) return;
      if (!this._activeTab) this._activeTab = "setup";
      const draft = this._draft;
      this._panelEl.replaceChildren(panel({ pluginClass: `${ROOT_CLASS}-panel` }, [
        pluginHeaderFromConfig(this.getConfiguration(), {
          version: PLUGIN_VERSION,
          scope: this._scopeArgs(),
          killSwitch: {
            on: !this._disabled,
            onToggle: /* @__PURE__ */ __name((nextOn) => {
              void /** @type {any} */
              this._settingsStore.setDisabled(!nextOn);
            }, "onToggle")
          },
          feedback: { data: this.data }
        }),
        tabs({
          options: [
            { value: "setup", label: "Setup" },
            { value: "connection", label: "Connection" },
            { value: "collections", label: "Collections" },
            { value: "transcripts", label: "Transcripts" },
            { value: "summary", label: "Summary" },
            { value: "costs", label: "Costs" }
          ],
          value: this._activeTab,
          onChange: /* @__PURE__ */ __name((value) => {
            this._activeTab = value;
            this._savePanelPlace();
            this._renderPanel();
          }, "onChange")
        }),
        ...this._renderActiveTab(draft)
      ]));
    }
    /**
     * The section(s) for the active tab. Sections are non-collapsible — the TAB is the collapse now.
     * @param {any} draft
     */
    _renderActiveTab(draft) {
      switch (this._activeTab) {
        case "connection":
          return this._tabConnection(draft);
        case "collections":
          return this._tabCollections();
        case "transcripts":
          return this._tabTranscripts(draft);
        case "summary":
          return this._tabSummary(draft);
        case "costs":
          return this._tabCosts();
        case "setup":
        default:
          return this._tabSetup();
      }
    }
    _tabSetup() {
      const managed = (
        /** @type {Map<string, any>} */
        this._managed.size
      );
      return [
        section({
          label: "Setup",
          body: [
            h(
              "p",
              { class: `${ROOT_CLASS}-collection-note` },
              managed ? `Meetings is a global plugin. It currently manages ${managed} collection${managed === 1 ? "" : "s"} \u2014 add, remove, and map them in the Collections tab.` : "No collections yet. Use the Collections tab to create one or add an existing collection."
            ),
            this._setupSteps()
          ]
        }),
        this._setupDoctorSection(),
        this._healDiagnosticsSection(),
        DEV_TOOLS ? this._settingsExportSection() : null
      ];
    }
    /** Dev-only: the JSON the 2.x Import button consumes (settings, this user's keys, field mapping). */
    _settingsExportSection() {
      const json = JSON.stringify(buildSettingsExport({
        conf: this.getConfiguration ? this.getConfiguration() : {},
        userGuid: this._currentUserGuid(),
        version: PLUGIN_VERSION,
        collectionGuid: this._selectedCollectionGuid || Object.keys(this._bindings())[0] || "",
        settings: { ...this._settings, ...this._bindings()[this._selectedCollectionGuid] || {} }
      }), null, 2);
      return section({
        label: "Export settings (dev)",
        hint: "Copy before installing 2.0. Contains your API keys.",
        body: [
          h(
            "label",
            { class: `${ROOT_CLASS}-field` },
            h("span", { class: `${ROOT_CLASS}-field-label` }, "Settings JSON"),
            h("textarea", { rows: 8, readonly: true, value: json })
          ),
          h(
            "div",
            { class: `${ROOT_CLASS}-field` },
            button({
              label: "Copy settings JSON",
              variant: "ghost",
              size: "md",
              onClick: /* @__PURE__ */ __name(() => void copyTextToClipboard(json).then((ok) => this._toast(ok ? "Copied" : "Copy failed", ok ? "Settings JSON is in the clipboard." : "Select the text and copy it by hand.")), "onClick")
            })
          )
        ]
      });
    }
    /**
     * Dev-only: restore a 1.x collection install into this global plugin.
     *
     * One `saveCustomPatch`, so prefs, this user's API keys, and the owned binding for the exported
     * collection land together or not at all. The imported keys only fill EMPTY slot fields — an
     * accidental re-import can never overwrite a key rotated since.
     */
    _settingsImportSection() {
      return section({
        label: "Import settings (dev)",
        hint: "Bring settings, keys and field mapping over from a 1.x install.",
        body: [
          this._legacyCollectionPicker(),
          h(
            "label",
            { class: `${ROOT_CLASS}-field` },
            h("span", { class: `${ROOT_CLASS}-field-label` }, "Settings JSON"),
            h("textarea", {
              rows: 8,
              placeholder: '{ "format": "meetings-settings", \u2026 }',
              value: this._importDraft || "",
              onInput: /* @__PURE__ */ __name((event) => {
                this._importDraft = event.target.value;
              }, "onInput")
            })
          ),
          h(
            "div",
            { class: `${ROOT_CLASS}-field` },
            button({
              label: "Import settings",
              variant: "primary",
              size: "md",
              onClick: /* @__PURE__ */ __name(() => void this._importSettings(), "onClick")
            })
          )
        ]
      });
    }
    /** Dev-only: collections still carrying a 1.x settings bag, offered for a direct import. */
    _legacyCollectionPicker() {
      const candidates = (this._workspaceCollections || []).filter((api) => {
        try {
          const c = api.getConfiguration();
          return !!(c && c.custom && c.custom[CONFIG_KEY]);
        } catch {
          return false;
        }
      });
      if (!candidates.length) return null;
      const guids = candidates.map((api) => {
        try {
          return String(api.getGuid());
        } catch {
          return "";
        }
      });
      if (!this._legacyPickGuid || !guids.includes(this._legacyPickGuid)) this._legacyPickGuid = guids[0];
      return h(
        "div",
        { class: `${ROOT_CLASS}-field` },
        h("span", { class: `${ROOT_CLASS}-field-label` }, "Import from a 1.x collection"),
        h(
          "div",
          { class: `${ROOT_CLASS}-coll-pick` },
          this._dropdown({
            value: String(this._legacyPickGuid || ""),
            options: guids.map((guid) => (
              /** @type {[string, string]} */
              [guid, this._collectionName(guid)]
            )),
            onChange: /* @__PURE__ */ __name((guid) => {
              this._legacyPickGuid = guid;
              if (this._panelEl && document.contains(this._panelEl)) this._renderPanel();
            }, "onChange")
          }),
          button({
            label: "Import from this collection",
            variant: "primary",
            size: "md",
            onClick: /* @__PURE__ */ __name(() => void this._importFromLegacyCollection(String(this._legacyPickGuid || "")), "onClick")
          })
        ),
        h("span", { class: `${ROOT_CLASS}-field-hint` }, "Reads that collection\u2019s stored settings. It is not modified.")
      );
    }
    /** The settings store's stable per-device id, so a 1.x device slot can be matched to this device. */
    _deviceKey() {
      try {
        return String(localStorage.getItem("tps-settings-device-id") || "");
      } catch {
        return "";
      }
    }
    /** @param {string} collectionGuid */
    async _importFromLegacyCollection(collectionGuid) {
      const api = this._collectionByGuid(collectionGuid);
      if (!api) return this._toast("Could not import", "That collection is no longer available.");
      let conf = null;
      try {
        conf = api.getConfiguration();
      } catch {
        conf = null;
      }
      if (!conf || !conf.custom || !conf.custom[CONFIG_KEY]) return this._toast("Could not import", "That collection carries no Meetings settings.");
      const imported = buildLegacyCollectionExport({ conf, userGuid: this._currentUserGuid(), version: PLUGIN_VERSION, collectionGuid, deviceKey: this._deviceKey() });
      try {
        let workspace = "";
        try {
          workspace = this.getWorkspaceGuid ? this.getWorkspaceGuid() || "" : "";
        } catch {
        }
        const raw = localStorage.getItem(`recall-ai/${workspace || "default"}/${collectionGuid}/secrets`);
        const local = raw ? normalizeSecrets(JSON.parse(raw)) : null;
        if (local) {
          const slot = imported.secrets && typeof imported.secrets === "object" ? { ...imported.secrets } : {};
          const localKeys = { recallApiKey: local.recallApiKey || "", anthropicApiKey: local.anthropicApiKey || "" };
          for (const k of ["recallApiKey", "anthropicApiKey"]) if (!slot[k] && localKeys[k]) slot[k] = localKeys[k];
          if (slot.recallApiKey || slot.anthropicApiKey) imported.secrets = slot;
        }
      } catch {
      }
      return this._importSettings(imported);
    }
    /** @param {any} [importedArg] a ready export object; omitted → parse the pasted JSON draft */
    async _importSettings(importedArg) {
      const imported = (
        /** @type {any} */
        importedArg || parseSettingsImport(this._importDraft || "")
      );
      if (imported.error) return this._toast("Could not import", imported.error);
      const userGuid = this._currentUserGuid();
      const ok = await this._settingsStore.saveCustomPatch((custom) => applySettingsImport(custom, imported, userGuid, {
        prefsKey: CONFIG_KEY,
        secretsKey: SECRETS_CONFIG_KEY,
        bindingsKey: BINDINGS_CONFIG_KEY
      }));
      if (!ok) return this._toast("Could not import", "Thymer did not hand over a writable config handle.");
      try {
        this._settingsStore.recover(settingsFromLegacyBag(imported.prefs, this._deviceKey()));
      } catch {
      }
      if (imported.secrets) {
        try {
          this._mirrorKeysLocally(imported.secrets);
        } catch {
        }
      }
      this._importDraft = "";
      this._selectedCollectionGuid = imported.collectionGuid;
      this._savePanelPlace();
      await this._loadManaged();
      this._toast("Settings imported", `${this._collectionName(imported.collectionGuid)} is now a Meetings collection. Clear its old plugin code next.`);
      if (this._panelEl && document.contains(this._panelEl)) this._renderPanel();
      return true;
    }
    /**
     * Dev-only: put the Meetings properties back on an OWNED collection whose field definitions were
     * stripped — a Plugins Manager "update" that wrote the 2.0 manifest (which has no fields) into the
     * old collection does exactly that. Property VALUES survive in the records; only the definitions
     * go, and they come back under their original ids, so every value reattaches.
     * @param {string} collectionGuid
     */
    _restoreSchemaControl(collectionGuid) {
      const binding = this._bindings()[collectionGuid];
      if (!binding || binding.role !== "owned") return null;
      const api = this._managedApi(collectionGuid) || this._collectionByGuid(collectionGuid);
      let conf = (
        /** @type {any} */
        null
      );
      try {
        conf = api ? api.getConfiguration() : null;
      } catch {
        conf = null;
      }
      if (!conf) return null;
      const have = new Set((Array.isArray(conf.fields) ? conf.fields : []).map((f) => String(f && f.id || "")));
      const missing = MEETINGS_COLLECTION_TEMPLATE.fields.filter((f) => !have.has(f.id));
      const noViews = !Array.isArray(conf.views) || !conf.views.length;
      if (!missing.length && !noViews) return null;
      return h(
        "div",
        { class: `${ROOT_CLASS}-field` },
        button({
          label: `Restore Meetings schema (${missing.length} missing propert${missing.length === 1 ? "y" : "ies"}${noViews ? ", no views" : ""})`,
          variant: "primary",
          size: "md",
          onClick: /* @__PURE__ */ __name(() => void this._restoreCollectionSchema(collectionGuid), "onClick")
        }),
        h("span", { class: `${ROOT_CLASS}-field-hint` }, "Adds the missing Meetings properties and table view under their original ids. Existing values reattach.")
      );
    }
    /** @param {string} collectionGuid */
    async _restoreCollectionSchema(collectionGuid) {
      const api = this._managedApi(collectionGuid) || this._collectionByGuid(collectionGuid);
      if (!api || typeof api.saveConfiguration !== "function") return this._toast("Could not restore", "Thymer did not hand over a writable handle for that collection.");
      return queuePluginConfigWrite(api, async () => {
        try {
          const live = JSON.parse(JSON.stringify(api.getConfiguration?.() || {}));
          live.fields = Array.isArray(live.fields) ? live.fields : [];
          const have = new Set(live.fields.map((f) => String(f && f.id || "")));
          let added = 0;
          for (const def of MEETINGS_COLLECTION_TEMPLATE.fields) {
            if (have.has(def.id)) continue;
            live.fields.push({ ...def });
            added += 1;
          }
          if (!Array.isArray(live.views) || !live.views.length) live.views = JSON.parse(JSON.stringify(MEETINGS_COLLECTION_TEMPLATE.views));
          const page = new Set(Array.isArray(live.page_field_ids) ? live.page_field_ids : []);
          live.page_field_ids = [...Array.isArray(live.page_field_ids) ? live.page_field_ids : [], ...MEETINGS_COLLECTION_TEMPLATE.page_field_ids.filter((id) => !page.has(id))];
          if (!live.item_name) live.item_name = MEETINGS_COLLECTION_TEMPLATE.item_name;
          const ok = await api.saveConfiguration(live);
          if (ok === false) throw new Error("Thymer rejected the change.");
          this._toast("Schema restored", `${added} propert${added === 1 ? "y" : "ies"} added back to ${this._collectionName(collectionGuid)}.`);
          await this._loadManaged();
          if (this._panelEl && document.contains(this._panelEl)) this._renderPanel();
          return true;
        } catch (err) {
          this._toast("Could not restore", this._errorMessage(err));
          return false;
        }
      });
    }
    /**
     * Dev-only: the button that retires the 1.x CollectionPlugin still running beside this one.
     *
     * Shown only when that collection's code really is a Meetings bundle — a foreign owner must
     * never be offered up for replacement.
     * @param {string} collectionGuid
     */
    _clearOldCodeControl(collectionGuid) {
      const code = this._collectionCode(collectionGuid);
      if (!code) return null;
      const classified = classifyCollectionCode(code);
      if (classified.kind !== "owner" || !/plg-(meetings|recall-ai)/.test(code)) return null;
      return h(
        "div",
        { class: `${ROOT_CLASS}-field` },
        button({
          label: "Clear old plugin code (dev)",
          variant: "ghost",
          size: "md",
          onClick: /* @__PURE__ */ __name(() => void this._clearOldCollectionCode(collectionGuid), "onClick")
        }),
        h(
          "span",
          { class: `${ROOT_CLASS}-field-hint` },
          "The 1.x copy still runs here. Replaces its code with an empty stub; other plugins\u2019 hooks and the collection\u2019s data stay."
        )
      );
    }
    /** @param {string} collectionGuid */
    _collectionCode(collectionGuid) {
      const api = this._managedApi(collectionGuid) || this._collectionByGuid(collectionGuid);
      try {
        const existing = api && api.getExistingCodeAndConfig ? api.getExistingCodeAndConfig() : null;
        return String(existing && existing.code || "");
      } catch {
        return "";
      }
    }
    /**
     * Replace a retired Meetings collection's code with a stub.
     *
     * NEVER save collection code that has not been parsed: Thymer `new Function()`s it, and a fatal
     * load halts its data worker — one bad string makes the whole app unopenable in every synced
     * client. `composeStubCode` runs the same check Thymer does and refuses rather than return a
     * string; the belt-and-braces `assertCodeSafe` here is deliberate.
     *
     * @param {string} collectionGuid
     */
    async _clearOldCollectionCode(collectionGuid) {
      const api = this._managedApi(collectionGuid) || this._collectionByGuid(collectionGuid);
      if (!api || typeof api.savePlugin !== "function") {
        return this._toast("Could not clear the old code", "Thymer did not hand over a writable handle for that collection.");
      }
      const name = this._collectionName(collectionGuid);
      const confirmed = await this._confirmBodyWrite({
        title: "Clear old plugin code",
        body: {
          intro: `${name} still runs the pre-2.0 Meetings collection plugin. Replacing its code with an empty stub will:`,
          items: [
            "Stop the old copy from running beside this global plugin",
            "Keep every appended hook from other plugins exactly as it is",
            "Leave the collection\u2019s properties, views, records, and stored settings untouched"
          ],
          outro: "The plugin\u2019s repository link is removed so the Plugins Manager stops offering it collection updates."
        },
        confirmLabel: "Clear old code"
      });
      if (!confirmed) return false;
      return queuePluginConfigWrite(api, async () => {
        try {
          const existing = api.getExistingCodeAndConfig ? api.getExistingCodeAndConfig() : null;
          const code = String(existing && existing.code || "");
          if (!code.trim()) return this._toast("Nothing to clear", `${name} has no collection code.`);
          const stub = composeStubCode(code);
          if (!stub.ok) return this._toast("Refused to clear the old code", `The replacement ${stub.reason}. Nothing was written.`);
          const recheck = assertCodeSafe(stub.code);
          if (!recheck.ok) return this._toast("Refused to clear the old code", `The replacement ${recheck.reason}. Nothing was written.`);
          const json = JSON.parse(JSON.stringify(existing && existing.json || api.getConfiguration?.() || {}));
          delete json.__source_repo;
          delete json.__source_files;
          const ok = await api.savePlugin(json, stub.code);
          if (ok === false) throw new Error("Thymer rejected the change.");
          this._toast("Old plugin code cleared", stub.patches.length ? `${name} now runs an empty stub; ${stub.patches.length} other plugin hook${stub.patches.length === 1 ? "" : "s"} preserved.` : `${name} now runs an empty stub.`);
          if (this._panelEl && document.contains(this._panelEl)) this._renderPanel();
          return true;
        } catch (err) {
          this._toast("Could not clear the old code", this._errorMessage(err));
          return false;
        }
      });
    }
    _tabCosts() {
      const recall = estimateRecallCost(60);
      const row = /* @__PURE__ */ __name((label, estimate, ...details) => h(
        "div",
        { class: `${ROOT_CLASS}-cost-row` },
        h("span", { class: `${ROOT_CLASS}-field-label` }, label),
        h("span", { class: `${ROOT_CLASS}-field-hint ${ROOT_CLASS}-cost-estimate` }, estimate),
        h("span", { class: `${ROOT_CLASS}-field-hint ${ROOT_CLASS}-cost-detail` }, ...details)
      ), "row");
      const storage = recallStorageCostNote(this._draft.recordingRetention).replace(/^(?:Ongoing )?Storage:\s*/i, "").replace(/^Storage\s+/i, "");
      return [section({
        label: "API cost estimates",
        hint: "One active meeting hour at public list prices. Estimates\u2014not billing.",
        body: [
          h(
            "div",
            { class: `${ROOT_CLASS}-cost-grid` },
            row(
              "Recall.ai pay-as-you-go",
              `~${formatEstimatedUsd(recall.totalUsd)} / active bot-hour`,
              `${formatEstimatedUsd(recall.recordingUsd)} recording + ${formatEstimatedUsd(recall.transcriptionUsd)} transcription \xB7 Waiting-room time counts.`
            ),
            ...CLAUDE_MODELS.map(([model, label]) => {
              const estimate = (
                /** @type {any} */
                estimateClaudeSummaryCost(model)
              );
              return row(
                label.split(" \u2014 ")[0],
                `~${formatEstimatedUsd(estimate.totalUsd)} / meeting hour`,
                `$${estimate.inputPerMillionUsd} input / $${estimate.outputPerMillionUsd} output per million tokens`
              );
            }),
            row("Storage", storage.startsWith("$0 ") ? "$0" : "", storage.replace(/^\$0\s+/, "")),
            row(
              "Estimate basis",
              `${Math.round(CLAUDE_ESTIMATE_INPUT_TOKENS / 1e3)}k input \xB7 ${CLAUDE_ESTIMATE_OUTPUT_TOKENS.toLocaleString()} output tokens`,
              "Sonnet 5 and Opus 4.8 use a 1.3\xD7 tokenizer adjustment."
            ),
            row(
              "Rates checked",
              PRICING_VERIFIED_DATE,
              h("a", { href: "https://www.recall.ai/pricing", target: "_blank", rel: "noopener noreferrer" }, "Recall pricing"),
              " \xB7 ",
              h("a", { href: "https://platform.claude.com/docs/en/about-claude/pricing", target: "_blank", rel: "noopener noreferrer" }, "Claude pricing"),
              " \xB7 Actual charges vary by plan and usage."
            )
          )
        ]
      })];
    }
    _setupDoctorSection() {
      const state = this._setupDoctorState;
      const rows = state && Array.isArray(state.results) ? state.results : [];
      const doctor = section({
        label: "Setup Doctor",
        hint: "Checks bridge, keys, storage and field bindings. Creates nothing.",
        body: [
          h(
            "div",
            { class: `${ROOT_CLASS}-field` },
            button({
              label: this._setupDoctorInFlight ? "Checking\u2026" : "Run setup check",
              variant: "ghost",
              size: "md",
              disabled: !!this._setupDoctorInFlight,
              onClick: /* @__PURE__ */ __name(() => void this._runSetupDoctor(), "onClick")
            }),
            state && state.checkedAt ? h("span", { class: `${ROOT_CLASS}-meta` }, `Last checked ${new Date(state.checkedAt).toLocaleString()}`) : null
          ),
          rows.length ? h("div", { class: `${ROOT_CLASS}-doctor-results` }, rows.map(
            (item) => h(
              "div",
              { class: `${ROOT_CLASS}-doctor-result ${ROOT_CLASS}-doctor-result--${item.level}` },
              h("i", { class: `ti ti-${item.level === "pass" ? "circle-check" : item.level === "warn" ? "alert-triangle" : "x"}`, "aria-hidden": "true" }),
              h("span", {}, h("strong", {}, item.label), ` \u2014 ${item.message}`)
            )
          )) : h("span", { class: `${ROOT_CLASS}-meta` }, "No checks run yet.")
        ]
      });
      doctor.classList.add(`${ROOT_CLASS}-doctor-card`);
      return doctor;
    }
    _setupDoctorStorageKey() {
      let workspace = "";
      try {
        workspace = this.getWorkspaceGuid ? this.getWorkspaceGuid() || "" : "";
      } catch {
      }
      return `recall-ai/${workspace || "default"}/setup-doctor-v1`;
    }
    _loadSetupDoctorState() {
      try {
        const parsed = JSON.parse(localStorage.getItem(this._setupDoctorStorageKey()) || "null");
        const checkedAt = Number(parsed && parsed.checkedAt);
        const rawResults = parsed && Array.isArray(parsed.results) ? parsed.results : [];
        if (!Number.isFinite(checkedAt) || checkedAt <= 0 || !rawResults.length) return null;
        const results = rawResults.slice(0, 30).map((item) => ({
          level: ["pass", "warn", "fail"].includes(String(item && item.level)) ? String(item.level) : "fail",
          label: String(item && item.label || "").slice(0, 100),
          message: String(item && item.message || "").slice(0, 1e3)
        })).filter((item) => item.label && item.message);
        return results.length ? { checkedAt, results } : null;
      } catch {
        return null;
      }
    }
    /** @param {any} state */
    _saveSetupDoctorState(state) {
      try {
        localStorage.setItem(this._setupDoctorStorageKey(), JSON.stringify(state));
      } catch {
      }
    }
    async _runSetupDoctor() {
      if (this._setupDoctorInFlight) return this._setupDoctorInFlight;
      const task = (async () => {
        const results = [];
        const add = /* @__PURE__ */ __name((level, label, message) => results.push({ level, label, message }), "add");
        const bridge = this._bridgeUrl();
        let health = null;
        if (!bridge || !/^https:\/\//i.test(bridge)) {
          add("fail", "Bridge", "Enter a valid HTTPS Bridge URL.");
        } else {
          try {
            const healthUrl = `${bridge}/health?setup_doctor=${Date.now()}`;
            const response = await fetchWithBackoff(healthUrl, { method: "GET", cache: "no-store" });
            health = await response.json().catch(() => ({}));
            if (!response.ok || !health.ok) throw new Error(formatBridgeError(health, response.status));
            const version = String(health.bridgeVersion || "0.0.0");
            if (compareVersions(version, MIN_BRIDGE_VERSION) < 0) add("fail", "Bridge", `Version ${version} is too old; deploy ${MIN_BRIDGE_VERSION}.`);
            else add("pass", "Bridge", `Version ${version} is reachable.`);
            const capabilities = new Set(Array.isArray(health.capabilities) ? health.capabilities : []);
            const missingCapabilities = REQUIRED_BRIDGE_CAPABILITIES.filter((capability) => !capabilities.has(capability));
            if (missingCapabilities.length) add("fail", "Bridge capabilities", `Missing ${missingCapabilities.join(", ")}.`);
            else add("pass", "Bridge capabilities", "Realtime storage, connection checks, and participant artifacts are supported.");
            if (health.kv === "bound") add("pass", "Live storage", "RECALL_TRANSCRIPTS is bound.");
            else add("fail", "Live storage", "Bind the RECALL_TRANSCRIPTS KV namespace and redeploy.");
            if (health.webhookVerification === "enforced") add("pass", "Live transcript security", "The public realtime endpoint accepts only transcript events signed by Recall.");
            else add("warn", "Live transcript security (optional)", "This Worker still reports compatibility mode, which accepts unsigned transcript posts. In the same production Worker, add a Secret named RECALL_WORKSPACE_VERIFICATION_SECRET, paste the Recall Workspace Secret as its value, and select Deploy. See Setup step 5.");
          } catch (err) {
            add("fail", "Bridge", this._errorMessage(err));
          }
        }
        const retentionCheck = recordingRetentionDoctorMessage(this._settings.recordingRetention);
        add(retentionCheck.level, "Recall media retention", retentionCheck.message);
        if (!this._settings.recallApiKey) add("fail", "Recall", "Recall API key is missing.");
        else if (health && health.ok && compareVersions(String(health.bridgeVersion || "0.0.0"), MIN_BRIDGE_VERSION) >= 0) {
          try {
            await this._bridgeJson("/api/recall/check", {
              recallApiKey: this._settings.recallApiKey,
              recallRegion: this._settings.recallRegion
            });
            add("pass", "Recall", `Key works in ${this._settings.recallRegion}.`);
          } catch (err) {
            add("fail", "Recall", this._errorMessage(err));
          }
        }
        if (!this._settings.anthropicApiKey) add("fail", "Claude", "Anthropic API key is missing.");
        else if (health && health.ok && compareVersions(String(health.bridgeVersion || "0.0.0"), MIN_BRIDGE_VERSION) >= 0) {
          try {
            const checked = await this._bridgeJson("/api/anthropic/check", {
              anthropicApiKey: this._settings.anthropicApiKey,
              anthropicModel: this._settings.anthropicModel
            });
            if (checked.modelAvailable === false) add("warn", "Claude", `Key works, but ${this._settings.anthropicModel} was not returned by the Models API.`);
            else add("pass", "Claude", `Key and ${this._settings.anthropicModel} are available.`);
          } catch (err) {
            add("fail", "Claude", this._errorMessage(err));
          }
        }
        const managed = Array.from(
          /** @type {Map<string, any>} */
          this._managed.entries()
        );
        if (!managed.length) add("fail", "Collections", "Meetings manages no collection yet. Add or create one in the Collections tab.");
        for (const [collGuid, entry] of managed) {
          const name = this._collectionName(collGuid);
          const binding = entry.binding;
          const urlId = binding.meetingUrlFieldId;
          if (urlId) {
            if (this._fieldById(collGuid, urlId)) add("pass", "Meeting URL", `${name}: reading the meeting link from ${this._fieldLabel(collGuid, urlId)}.`);
            else add("fail", "Meeting URL", `${name}: the mapped property no longer exists. Re-pick it in Collections.`);
          } else if (binding.role === "owned") {
            if (this._meetingUrlFieldIds(collGuid).some((id) => this._fieldById(collGuid, id))) {
              add("pass", "Meeting URL", `${name}: auto-detected. Transcript and summary use the page body.`);
            } else add("fail", "Meeting URL", `${name}: no url property to read the meeting link from. Create one in Collections.`);
          } else {
            add("fail", "Meeting URL", `${name}: hosted collections never guess \u2014 choose the property holding the meeting link in Collections, or Meetings stays inert here.`);
          }
          for (const id of HOSTED_FIELD_IDS) {
            if (this._fieldById(collGuid, id)) continue;
            add("fail", "Bot properties", `${name}: ${FIELD_DEFS[id].label} is missing. Re-add the collection in Collections to create it.`);
          }
          const attendees = findAttendeesRelationField(this._collectionFields(collGuid), binding.attendeesFieldId);
          if (!attendees) {
            add("warn", "Attendees", `${name}: no multi-record collection-link property, so the roster is not written. Pick or create one in Collections.`);
            continue;
          }
          if (!this._settings.mapParticipantNamesToAttendees) {
            add("warn", "Attendee matching", "Optional and turned off; Attendees remains available for manual links.");
            continue;
          }
          const attendeesLabel = String(attendees.label || "Attendees");
          const peopleGuid = attendeesTargetCollectionGuid(attendees);
          if (!peopleGuid) {
            add("warn", "Attendee matching", `${name}: matching will use an auto-detected People/Contacts collection if one exists, because ${attendeesLabel} is not limited to a single collection.`);
            continue;
          }
          if (!this._workspaceCollectionsLoaded) await this._loadWorkspaceCollections(true);
          const target = this._collectionByGuid(peopleGuid);
          if (target) {
            add("pass", "Attendee matching", `${name}: ${attendeesLabel} is limited to ${this._collectionName(peopleGuid)}; confident matches are linked silently. Unmatched names get a confirmation dialog after the meeting.`);
          } else add("fail", "Attendee matching", `${name}: the collection restriction on ${attendeesLabel} points to an unavailable collection.`);
        }
        this._setupDoctorState = { checkedAt: Date.now(), results };
        this._saveSetupDoctorState(this._setupDoctorState);
        this._renderPanel();
        const failures = results.filter((item) => item.level === "fail").length;
        this._toast(failures ? "Setup needs attention" : "Setup looks healthy", failures ? `${failures} check${failures === 1 ? "" : "s"} failed.` : "All required checks passed.");
      })();
      this._setupDoctorInFlight = task;
      this._renderPanel();
      try {
        await task;
      } finally {
        if (this._setupDoctorInFlight === task) this._setupDoctorInFlight = null;
        this._renderPanel();
      }
    }
    /**
     * Attendee matching: the global on/off pref plus THIS collection's Attendees property.
     * @param {string} collectionGuid
     */
    _attendeeMappingControls(collectionGuid) {
      return [
        optionRow({
          type: "checkbox",
          name: "mapParticipantNamesToAttendees",
          label: "Match participants to Attendees",
          desc: "Matches by email or unique name. Unmatched people get a confirmation dialog after the meeting.",
          checked: !!this._draft.mapParticipantNamesToAttendees,
          onChange: /* @__PURE__ */ __name((event) => this._updateSetting("mapParticipantNamesToAttendees", !!event.target.checked, { rerender: true }), "onChange")
        }),
        this._fieldSelectInput(collectionGuid, "Attendees property", "attendeesFieldId", ["record"], {
          filter: isAttendeesRelationField,
          emptyTypeLabel: "multi-record collection-link"
        })
      ];
    }
    /** @param {any} draft */
    _tabConnection(draft) {
      return [
        section({
          label: "Keys & bridge",
          body: [
            this._textInput("Bridge URL", "bridgeUrl", "https://your-bridge.example.com"),
            this._textInput("Recall API key", "recallApiKey", "Token from Recall", true),
            this._textInput("Anthropic API key", "anthropicApiKey", "Claude API key for summaries", true)
          ]
        }),
        section({
          label: "Recall",
          body: [
            this._selectInput("Region", "recallRegion", [
              ["us-west-2", "US West 2"],
              ["us-east-1", "US East 1"],
              ["eu-central-1", "EU Central 1"],
              ["ap-northeast-1", "Japan"],
              ["payg", "Pay-as-you-go"]
            ]),
            this._textInput("Bot name", "botName", "Thymer Notetaker"),
            this._fileInput("Bot image JPEG upload", "botImageData", "botImageName"),
            this._textInput("Bot image JPEG URL", "botImageUrl", "https://example.com/notetaker.jpg"),
            this._numberInput("Poll interval (seconds)", "pollSeconds", 10, 300),
            this._selectInput("Recall media retention", "recordingRetention", RECORDING_RETENTION_OPTIONS, {
              hint: "Future bots only. Expiration deletes Recall media, not content saved in Thymer."
            }),
            optionRow({
              type: "checkbox",
              name: "sendJoinChatMessage",
              label: "Send join chat message",
              checked: !!draft.sendJoinChatMessage,
              onChange: /* @__PURE__ */ __name((event) => this._updateSetting("sendJoinChatMessage", !!event.target.checked, { rerender: true }), "onChange")
            }),
            draft.sendJoinChatMessage ? this._textareaInput("Join chat message", "joinChatMessage", 3) : null
          ]
        })
      ];
    }
    /**
     * Which collections Meetings manages, and how each one is wired.
     *
     * This replaces 1.x's Field Mapping tab: a mapping is meaningless without naming the collection
     * it applies to now that there can be several.
     */
    _tabCollections() {
      const bindings = this._bindings();
      const guids = Object.keys(bindings);
      if (guids.length && !bindings[this._selectedCollectionGuid]) this._selectedCollectionGuid = guids[0];
      return [
        this._managedCollectionsSection(bindings, guids),
        this._addCollectionSection(bindings),
        ...this._selectedCollectionGuid && bindings[this._selectedCollectionGuid] ? [this._collectionMappingSection(this._selectedCollectionGuid, bindings[this._selectedCollectionGuid])] : [],
        DEV_TOOLS ? this._settingsImportSection() : null
      ].filter(Boolean);
    }
    /**
     * @param {Record<string, any>} bindings
     * @param {string[]} guids
     */
    _managedCollectionsSection(bindings, guids) {
      return section({
        label: "Managed collections",
        hint: "Select a row to edit its field mapping.",
        body: guids.length ? guids.map((guid) => this._collectionRow(guid, bindings[guid])) : [
          h(
            "span",
            { class: `${ROOT_CLASS}-field-hint` },
            "Nothing yet. Create a Meetings collection below, or add one you already have."
          )
        ]
      });
    }
    /**
     * @param {string} guid
     * @param {any} binding
     */
    _collectionRow(guid, binding) {
      const live = (
        /** @type {Map<string, any>} */
        this._managed.has(guid)
      );
      const selected = guid === this._selectedCollectionGuid;
      const status = !live ? { level: "fail", text: "not found in this workspace" } : binding.meetingUrlFieldId || binding.role === "owned" ? { level: "pass", text: "ready" } : { level: "warn", text: "needs a meeting URL property" };
      return h(
        "div",
        {
          class: `${ROOT_CLASS}-coll-row${selected ? ` ${ROOT_CLASS}-coll-row--selected` : ""}`
        },
        h(
          "button",
          {
            type: "button",
            class: `${ROOT_CLASS}-coll-pick`,
            "aria-pressed": selected ? "true" : "false",
            onClick: /* @__PURE__ */ __name(() => {
              this._selectedCollectionGuid = guid;
              this._savePanelPlace();
              this._renderPanel();
            }, "onClick")
          },
          h("span", { class: `${ROOT_CLASS}-coll-name` }, this._collectionName(guid)),
          h("span", { class: `${ROOT_CLASS}-coll-role` }, binding.role === "owned" ? "Meetings collection" : "Hosted"),
          h("span", { class: `${ROOT_CLASS}-coll-status ${ROOT_CLASS}-coll-status--${status.level}` }, status.text)
        ),
        button({
          label: "Remove",
          variant: "ghost",
          size: "sm",
          onClick: /* @__PURE__ */ __name(() => void this._removeBinding(guid), "onClick")
        })
      );
    }
    /**
     * Drop a collection from the managed list. The binding only — the collection, its properties,
     * and every transcript already written stay exactly where they are.
     * @param {string} guid
     */
    async _removeBinding(guid) {
      const name = this._collectionName(guid);
      const ok = await this._confirmBodyWrite({
        title: "Stop managing this collection",
        body: {
          intro: `Meetings will stop watching ${name}. This removes the binding only:`,
          items: [
            "The collection, its records, and every transcript and summary already written stay untouched",
            "The Bot ID / Bot Status / Last Error properties stay, with their values",
            "No bot is cancelled \u2014 stop a running notetaker first if you need to"
          ],
          outro: "You can add it again at any time; its field mapping is forgotten."
        },
        confirmLabel: "Stop managing"
      });
      if (!ok) return false;
      if (this._selectedCollectionGuid === guid) this._selectedCollectionGuid = "";
      this._savePanelPlace();
      return this._saveBinding(guid, null);
    }
    /** @param {Record<string, any>} bindings */
    _addCollectionSection(bindings) {
      const available = (this._workspaceCollections || []).filter((collection) => {
        try {
          return !bindings[String(collection.getGuid())];
        } catch {
          return false;
        }
      });
      const options = [["", "Add an existing collection\u2026"]];
      for (const collection of available) {
        try {
          options.push([String(collection.getGuid()), String(collection.getName ? collection.getName() : collection.getGuid())]);
        } catch {
        }
      }
      return section({
        label: "Add a collection",
        hint: "Hosted mode: adds only Bot ID, Bot Status and Last Error, reads only the mapped link property, never seeds headings or books bots.",
        body: [
          h(
            "label",
            { class: `${ROOT_CLASS}-field` },
            h("span", { class: `${ROOT_CLASS}-field-label` }, "Existing collection"),
            this._dropdown({
              value: "",
              placeholder: "Add an existing collection\u2026",
              options: options.filter(([value]) => value !== ""),
              onChange: /* @__PURE__ */ __name((guid) => {
                if (guid) void this._addHostedCollection(guid);
              }, "onChange")
            }),
            h(
              "span",
              { class: `${ROOT_CLASS}-field-hint` },
              available.length ? "" : "Every collection in this workspace is already managed."
            )
          ),
          h(
            "div",
            { class: `${ROOT_CLASS}-field` },
            button({
              label: this._createCollectionInFlight ? "Creating\u2026" : "Create a Meetings collection",
              variant: "ghost",
              size: "md",
              disabled: !!this._createCollectionInFlight,
              onClick: /* @__PURE__ */ __name(() => void this._createMeetingsCollection(), "onClick")
            }),
            h(
              "span",
              { class: `${ROOT_CLASS}-field-hint` },
              "Full Meetings schema: auto-detected links, seeded headings, automatic booking."
            )
          )
        ]
      });
    }
    /**
     * Adopt a foreign collection. The three integration properties go in FIRST — a binding whose
     * collection has no `recall_status` has nowhere to put a status and no row button to show.
     * @param {string} guid
     */
    async _addHostedCollection(guid) {
      const saved = await this._saveBinding(guid, newBinding("hosted"));
      if (!saved) return false;
      await this._ensureHostedFields(guid);
      this._selectedCollectionGuid = guid;
      this._savePanelPlace();
      this._toast("Collection added", `Choose the property holding the meeting link for ${this._collectionName(guid)} \u2014 until then Meetings stays inert there.`);
      if (this._panelEl && document.contains(this._panelEl)) this._renderPanel();
      return true;
    }
    /** Create a brand-new Meetings collection and own it. Writes no collection CODE — only config. */
    async _createMeetingsCollection() {
      if (this._createCollectionInFlight) return this._createCollectionInFlight;
      const task = (async () => {
        try {
          const api = await this.data.createCollection();
          if (!api || typeof api.saveConfiguration !== "function") throw new Error("Thymer did not create a collection.");
          const guid = String(api.getGuid());
          const ok = await api.saveConfiguration(
            /** @type {any} */
            { ...api.getConfiguration?.() || {}, ...MEETINGS_COLLECTION_TEMPLATE }
          );
          if (ok === false) throw new Error("Thymer rejected the collection template.");
          await this._loadWorkspaceCollections(true);
          await this._saveBinding(guid, newBinding("owned"));
          this._selectedCollectionGuid = guid;
          this._savePanelPlace();
          this._toast("Meetings collection created", "Add a meeting link to a record and run Meetings: Join now.");
        } catch (err) {
          this._toast("Could not create the collection", this._errorMessage(err));
        }
      })();
      this._createCollectionInFlight = task;
      this._renderPanel();
      try {
        await task;
      } finally {
        if (this._createCollectionInFlight === task) this._createCollectionInFlight = null;
        if (this._panelEl && document.contains(this._panelEl)) this._renderPanel();
      }
    }
    /**
     * @param {string} guid
     * @param {any} binding
     */
    _collectionMappingSection(guid, binding) {
      const name = this._collectionName(guid);
      return section({
        label: `Field mapping \u2014 ${name}`,
        hint: binding.role === "owned" ? "Leave on Auto-detect to use the Meetings property of that name." : "Hosted: nothing is guessed. The first link in the chosen property is used.",
        body: [
          this._fieldSelectInput(guid, "Meeting URL property", "meetingUrlFieldId", ["url", "text"]),
          this._fieldSelectInput(guid, "Date property", "joinAtFieldId", ["datetime", "date"]),
          ...this._attendeeMappingControls(guid),
          this._fieldSelectInput(guid, "Related property", "relatedFieldId", ["record"], {
            filter: /* @__PURE__ */ __name((field) => !!field && field.active !== false && String(field.type || "").toLowerCase() === "record" && field.many === true, "filter"),
            emptyTypeLabel: "multi-record collection-link"
          }),
          optionRow({
            type: "checkbox",
            name: `autoSchedule-${guid}`,
            label: "Send the bot automatically to scheduled meetings",
            desc: "Books the notetaker when Date is 12+ minutes out; it joins 2 minutes early. Off by default on hosted collections.",
            checked: !!binding.autoSchedule,
            onChange: /* @__PURE__ */ __name((event) => void this._saveBinding(guid, { autoSchedule: !!event.target.checked }), "onChange")
          }),
          ...DEV_TOOLS ? [this._clearOldCodeControl(guid), this._restoreSchemaControl(guid)] : []
        ].filter(Boolean)
      });
    }
    /** @param {any} draft */
    _tabTranscripts(draft) {
      const enabled = draft.saveTranscript !== false;
      return [
        section({
          label: "Output",
          body: [
            optionRow({
              type: "checkbox",
              name: "saveTranscript",
              label: "Save transcript",
              checked: enabled,
              onChange: /* @__PURE__ */ __name((event) => this._updateSetting("saveTranscript", !!event.target.checked, { rerender: true }), "onChange")
            })
          ]
        }),
        ...enabled ? [
          section({
            label: "Heading",
            body: [
              this._textInput("Heading text", "transcriptHeadingText", "\u{1F399}\uFE0F Transcript"),
              this._selectInput("Heading level", "transcriptHeadingLevel", HEADING_LEVEL_OPTIONS)
            ]
          }),
          section({
            label: "Formatting",
            body: [
              this._selectInput("Layout", "transcriptLayout", [
                ["blocks", "Speaker blocks (collapsible)"],
                ["inline", "Inline lines"]
              ]),
              this._groupedSelectInput("Timestamps", "transcriptTimestamps", TRANSCRIPT_TIMESTAMP_GROUPS),
              this._textInput("Turn header", "turnHeaderTemplate", "[{Time}] {Speaker}", false, "Use {Speaker} and {Time}."),
              optionRow({
                type: "checkbox",
                name: "utteranceTimestamps",
                label: "Timestamp each speaker turn",
                checked: draft.utteranceTimestamps !== false,
                onChange: /* @__PURE__ */ __name((event) => this._updateSetting("utteranceTimestamps", !!event.target.checked, { rerender: true }), "onChange")
              }),
              optionRow({
                type: "checkbox",
                name: "followLiveTranscript",
                label: "Follow live transcript in the open record",
                checked: draft.followLiveTranscript !== false,
                onChange: /* @__PURE__ */ __name((event) => this._updateSetting("followLiveTranscript", !!event.target.checked, { rerender: true }), "onChange")
              })
            ]
          }),
          section({
            label: "AI topic sections",
            body: [
              optionRow({
                type: "checkbox",
                name: "transcriptSections",
                label: "Group into topic sections",
                checked: !!draft.transcriptSections,
                onChange: /* @__PURE__ */ __name((event) => this._updateSetting("transcriptSections", !!event.target.checked, { rerender: true }), "onChange")
              }),
              ...draft.transcriptSections ? [
                this._textInput("Heading template", "sectionHeadingTemplate", "{Topic} | {Range}", false, "Use {Topic} and {Range}."),
                this._groupedSelectInput("Range style", "sectionRangeStyle", SECTION_RANGE_STYLE_GROUPS)
              ] : []
            ]
          })
        ] : []
      ];
    }
    /** @param {any} draft */
    _tabSummary(draft) {
      const enabled = !!draft.autoSummarize;
      return [
        section({
          label: "Output",
          body: [
            optionRow({
              type: "checkbox",
              name: "autoSummarize",
              label: "Auto summarize after the meeting",
              checked: enabled,
              onChange: /* @__PURE__ */ __name((event) => this._updateSetting("autoSummarize", !!event.target.checked, { rerender: true }), "onChange")
            })
          ]
        }),
        section({
          label: "Body outline",
          hint: "Heading order for new meetings. Apply to existing ones from Setup \u2192 Diagnostics.",
          body: [
            this._textInput(
              "Section order",
              "bodySectionOrder",
              DEFAULT_BODY_SECTION_ORDER,
              false,
              "Comma-separated. All four required: Summary, Action items, Notes, Transcript."
            )
          ]
        }),
        ...enabled ? [
          section({
            label: "Headings",
            body: [
              this._textInput("Summary heading", "summaryHeadingText", "\u{1F4DD} Summary"),
              this._selectInput("Summary heading level", "summaryHeadingLevel", HEADING_LEVEL_OPTIONS),
              this._textInput("Action items heading", "actionItemsHeadingText", "\u2705 Action items"),
              this._selectInput("Action items heading level", "actionItemsHeadingLevel", HEADING_LEVEL_OPTIONS),
              this._textInput("Notes heading", "notesHeadingText", "\u{1F5D2}\uFE0F Notes"),
              this._selectInput("Notes heading level", "notesHeadingLevel", HEADING_LEVEL_OPTIONS)
            ]
          }),
          section({
            label: "Citations",
            hint: "Label on new citation chips. Existing chips update on the next summary.",
            body: [
              this._selectInput("Citation label", "citationStyle", CITATION_STYLE_OPTIONS)
            ]
          }),
          section({
            label: "Generation",
            body: [
              this._modelSelectInput("Claude model", "anthropicModel"),
              this._textareaInput("Summary prompt", "summaryPrompt", 8, DEFAULT_SETTINGS.summaryPrompt)
            ]
          })
        ] : []
      ];
    }
    _bridgeWorkerUrl() {
      const conf = this.getConfiguration ? this.getConfiguration() : (
        /** @type {any} */
        {}
      );
      const repo = String(conf && conf.repository || "https://github.com/akaready/thymer-meetings").replace(/\/+$/, "");
      return `${repo}/tree/main/backend`;
    }
    /** Recall API keys are issued per region, so the link has to follow the Region setting. */
    _recallKeyUrl() {
      const region = String(this._draft.recallRegion || DEFAULT_SETTINGS.recallRegion).trim();
      const dashboard = region === "payg" || !region ? "us-west-2" : region;
      return `https://${dashboard}.recall.ai/dashboard/developers/api-keys`;
    }
    /** Once all three are filled in, the Setup section starts collapsed. */
    _isConfigured() {
      const s = this._draft || this._settings || {};
      return !!(String(s.recallApiKey || "").trim() && String(s.anthropicApiKey || "").trim() && String(s.bridgeUrl || "").trim());
    }
    /**
     * @param {any} value
     * @param {any} copyButton
     */
    async _copySetupValue(value, copyButton) {
      const text = String(value || "");
      let copied = false;
      try {
        const write = typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText;
        if (typeof write === "function") {
          await write.call(navigator.clipboard, text);
          copied = true;
        }
      } catch {
      }
      if (!copied) {
        let input = null;
        try {
          input = document.createElement("textarea");
          input.value = text;
          input.setAttribute("readonly", "");
          input.style.position = "fixed";
          input.style.opacity = "0";
          document.body.appendChild(input);
          input.select();
          copied = document.execCommand("copy");
        } catch {
        } finally {
          try {
            input?.remove();
          } catch {
          }
        }
      }
      if (copied) {
        const label = copyButton && copyButton.querySelector ? copyButton.querySelector(`.${ROOT_CLASS}-setup-copy-label`) : null;
        if (label) label.textContent = "Copied";
        if (copyButton && copyButton.classList) copyButton.classList.add(`${ROOT_CLASS}-setup-copy-button--copied`);
        setTimeout(() => {
          if (label && label.isConnected) label.textContent = "Copy";
          if (copyButton && copyButton.isConnected) copyButton.classList.remove(`${ROOT_CLASS}-setup-copy-button--copied`);
        }, 1600);
        this._toast("Copied", `${text} copied to the clipboard.`);
      } else {
        this._toast("Copy failed", "Select the secret name and copy it manually.");
      }
      return copied;
    }
    _setupSteps() {
      const link = /* @__PURE__ */ __name((href, text) => h("a", { href, target: "_blank", rel: "noopener noreferrer" }, text), "link");
      const copyCode = /* @__PURE__ */ __name((text) => h(
        "span",
        { class: `${ROOT_CLASS}-setup-copy` },
        h("code", { title: "Select and copy this value" }, text),
        h(
          "button",
          {
            type: "button",
            class: `${ROOT_CLASS}-setup-copy-button`,
            title: `Copy ${text}`,
            "aria-label": `Copy ${text}`,
            onClick: /* @__PURE__ */ __name((event) => {
              event.preventDefault();
              void this._copySetupValue(text, event.currentTarget);
            }, "onClick")
          },
          h("i", { class: "ti ti-copy", "aria-hidden": "true" }),
          h("span", { class: `${ROOT_CLASS}-setup-copy-label` }, "Copy")
        )
      ), "copyCode");
      return h(
        "ol",
        { class: `${ROOT_CLASS}-steps` },
        h(
          "li",
          {},
          "Get a Recall key from your ",
          link(this._recallKeyUrl(), "Recall dashboard"),
          ". Keys belong to one region, so it has to match the Region you choose below."
        ),
        h(
          "li",
          {},
          "Get a Claude key from the ",
          link("https://console.anthropic.com/settings/keys", "Anthropic console"),
          ". This is what writes the summary."
        ),
        h(
          "li",
          {},
          "Put the bridge online \u2014 it is free, takes about two minutes, and needs no terminal. ",
          link(this._bridgeWorkerUrl(), "Follow the bridge guide"),
          ". Browsers cannot call Recall or Claude directly; the bridge passes requests along."
        ),
        h("li", {}, "Paste the bridge address and both keys into Connection, just below."),
        h(
          "li",
          {},
          h("strong", {}, "Optional \u2014 authenticate live transcript events: "),
          "Optional hardening: the bridge verifies that each live transcript event was signed by Recall. In your ",
          link(this._recallKeyUrl(), "Recall API Keys & Secrets page"),
          ", click Create Workspace Secret. In Cloudflare \u2192 Worker \u2192 Settings \u2192 Variables and Secrets, add an encrypted secret named ",
          copyCode("RECALL_WORKSPACE_VERIFICATION_SECRET"),
          ", paste the value, redeploy, then run Setup Doctor again. ",
          link("https://docs.recall.ai/docs/authenticating-requests-from-recallai", "Recall\u2019s verification guide"),
          "."
        ),
        h(
          "li",
          {},
          "Put a meeting link on a record and click Join Now. With a Date 12+ minutes out the bot is booked and joins 2 minutes early. The transcript streams live; the summary is written when the meeting ends."
        ),
        h(
          "li",
          {},
          "Optional: restrict the Attendees relation to your People collection for the tightest matching."
        )
      );
    }
    /**
     * @param {string} label
     * @param {string} key
     * @param {string} [placeholder]
     * @param {boolean} [password]
     * @param {string} [hint]
     */
    _textInput(label, key, placeholder = "", password = false, hint = "") {
      const attrs = {
        type: password ? "password" : "text",
        value: this._draft[key] || "",
        placeholder,
        onInput: /* @__PURE__ */ __name((event) => this._updateSetting(key, event.target.value), "onInput")
      };
      if (API_KEY_FIELDS.includes(key)) {
        attrs.onChange = () => void this._commitApiKeys();
      }
      return h(
        "label",
        { class: `${ROOT_CLASS}-field` },
        h("span", { class: `${ROOT_CLASS}-field-label` }, label),
        h("input", attrs),
        hint ? h("span", { class: `${ROOT_CLASS}-field-hint` }, hint) : null
      );
    }
    /**
     * The bot's avatar. A DIV, never a <label> — label-forwarding would make a click anywhere in the
     * row (including "Remove") reopen the file picker, the same trap that bites stepper buttons.
     * The native <input type="file"> is hidden and driven by our own button, because "Choose File /
     * No file chosen" is the browser's chrome, not ours, and cannot be styled.
     */
    /**
     * @param {string} label
     * @param {string} dataKey
     * @param {string} nameKey
     */
    _fileInput(label, dataKey, nameKey) {
      const filename = this._draft[nameKey] || "";
      const data = this._draft[dataKey] || "";
      const picker = h("input", {
        type: "file",
        accept: "image/jpeg,image/jpg",
        class: `${ROOT_CLASS}-file-native`,
        onChange: /* @__PURE__ */ __name((event) => void this._setBotImageFile(event.target.files && event.target.files[0], dataKey, nameKey), "onChange")
      });
      const choose = h(
        "button",
        {
          type: "button",
          class: `${ROOT_CLASS}-upload`,
          onClick: /* @__PURE__ */ __name(() => picker.click(), "onClick")
        },
        h("i", { class: `ti ti-upload ${ROOT_CLASS}-upload-icon`, "aria-hidden": "true" }),
        filename ? "Replace" : "Choose JPEG"
      );
      const body = filename ? h(
        "div",
        { class: `${ROOT_CLASS}-file-set` },
        data ? h("img", { class: `${ROOT_CLASS}-avatar`, src: `data:image/jpeg;base64,${data}`, alt: "" }) : null,
        h("span", { class: `${ROOT_CLASS}-file-name` }, filename),
        choose,
        h("button", {
          type: "button",
          class: `${ROOT_CLASS}-file-remove`,
          onClick: /* @__PURE__ */ __name(() => {
            this._updateSetting(dataKey, "");
            this._updateSetting(nameKey, "", { rerender: true });
          }, "onClick")
        }, "Remove")
      ) : choose;
      return h(
        "div",
        { class: `${ROOT_CLASS}-field` },
        h("span", { class: `${ROOT_CLASS}-field-label` }, label),
        picker,
        body
      );
    }
    /**
     * @param {any} file
     * @param {string} dataKey
     * @param {string} nameKey
     */
    async _setBotImageFile(file, dataKey, nameKey) {
      if (!file) return;
      if (!/jpe?g/i.test(file.type || file.name || "")) {
        this._toast("JPEG required", "Choose a .jpg or .jpeg file for the bot image.");
        return;
      }
      if (file.size > 5e6) {
        this._toast("Image too large", "Choose a JPEG under 5MB.");
        return;
      }
      const bytes = new Uint8Array(await file.arrayBuffer());
      const b64 = bytesToBase64(bytes);
      this._updateSetting(dataKey, b64);
      this._updateSetting(nameKey, file.name || "bot-image.jpg", { rerender: true });
    }
    /**
     * @param {string} label
     * @param {string} key
     * @param {number} min
     * @param {number} max
     */
    _numberInput(label, key, min, max) {
      const current = /* @__PURE__ */ __name(() => Number(this._draft[key] || DEFAULT_SETTINGS[
        /** @type {keyof typeof DEFAULT_SETTINGS} */
        key
      ]), "current");
      const clamp = /* @__PURE__ */ __name((value) => Math.max(min, Math.min(max, Math.round(Number.isFinite(value) ? value : current()))), "clamp");
      const apply = /* @__PURE__ */ __name((input, value) => {
        const next = clamp(value);
        input.value = String(next);
        this._updateSetting(key, next);
      }, "apply");
      return h(
        "label",
        { class: `${ROOT_CLASS}-field` },
        h("span", { class: `${ROOT_CLASS}-field-label` }, label),
        h("input", {
          type: "number",
          min,
          max,
          step: 1,
          value: current(),
          onInput: /* @__PURE__ */ __name((event) => this._updateSetting(key, Number(event.target.value)), "onInput"),
          onKeyDown: /* @__PURE__ */ __name((event) => {
            if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
            event.preventDefault();
            const input = event.target;
            const base = Number.isFinite(Number(input.value)) ? Number(input.value) : current();
            apply(input, base + (event.key === "ArrowUp" ? 1 : -1) * (event.shiftKey ? 10 : 1));
          }, "onKeyDown")
        })
      );
    }
    /**
     * A dropdown that belongs to the interface: a control-shaped trigger that opens Thymer's own
     * menu (ui.createDropdown). Native selects pop the operating system's list, which no CSS can
     * style, so they are never used in the panel.
     *
     * @param {{ value: string, options: [string, string][], onChange: (value: string) => void, placeholder?: string }} args
     */
    _dropdown({ value, options, onChange, placeholder = "Choose\u2026" }) {
      const current = options.find(([v]) => v === value);
      const text = current ? current[1] : placeholder;
      const trigger = h(
        "button",
        {
          type: "button",
          class: `${ROOT_CLASS}-select`,
          "aria-haspopup": "listbox"
        },
        h("span", { class: `${ROOT_CLASS}-select__value${current ? "" : ` ${ROOT_CLASS}-select__value--empty`}` }, text),
        h("i", { class: `ti ti-chevron-down ${ROOT_CLASS}-select__chevron`, "aria-hidden": "true" })
      );
      trigger.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        try {
          this.ui.createDropdown({
            attachedTo: trigger,
            width: Math.max(220, Math.round(trigger.getBoundingClientRect().width)),
            inputPlaceholder: "Filter\u2026",
            options: options.map(([v, label]) => ({
              label,
              icon: v === value ? "check" : void 0,
              onSelected: /* @__PURE__ */ __name(() => {
                if (v !== value) onChange(v);
              }, "onSelected")
            }))
          });
        } catch (err) {
          this._log("dropdown failed", { error: this._errorMessage(err) });
        }
      });
      return trigger;
    }
    /**
     * @param {string} label
     * @param {string} key
     * @param {any} options
     * @param {{onChange?: any, hint?: string}} [opts]
     */
    _selectInput(label, key, options, { onChange, hint } = {}) {
      const current = this._draft[key] || DEFAULT_SETTINGS[
        /** @type {keyof typeof DEFAULT_SETTINGS} */
        key
      ];
      return h(
        "label",
        { class: `${ROOT_CLASS}-field` },
        h("span", { class: `${ROOT_CLASS}-field-label` }, label),
        this._dropdown({
          value: String(current || ""),
          options: (
            /** @type {[string, string][]} */
            options
          ),
          onChange: /* @__PURE__ */ __name((v) => onChange ? onChange(v) : this._updateSetting(key, v, { rerender: true }), "onChange")
        }),
        hint ? h("span", { class: `${ROOT_CLASS}-field-hint` }, hint) : null
      );
    }
    /**
     * @param {string} label
     * @param {string} key
     * @param {any} groups
     */
    _groupedSelectInput(label, key, groups) {
      const current = this._draft[key] || DEFAULT_SETTINGS[
        /** @type {keyof typeof DEFAULT_SETTINGS} */
        key
      ];
      return h(
        "label",
        { class: `${ROOT_CLASS}-field` },
        h("span", { class: `${ROOT_CLASS}-field-label` }, label),
        this._dropdown({
          value: String(current || ""),
          options: (Array.isArray(groups) ? groups : []).flatMap((group) => (Array.isArray(group.options) ? group.options : []).map(([value, optionLabel]) => (
            /** @type {[string, string]} */
            [value, group.label ? `${group.label} \xB7 ${optionLabel}` : optionLabel]
          ))),
          onChange: /* @__PURE__ */ __name((v) => this._updateSetting(key, v, { rerender: true }), "onChange")
        })
      );
    }
    /**
     * @param {string} label
     * @param {string} key
     */
    _modelSelectInput(label, key) {
      const options = CLAUDE_MODELS.map(([value, text]) => [value, text]);
      const current = String(this._draft[key] || DEFAULT_SETTINGS.anthropicModel).trim();
      if (current && !options.some(([value]) => value === current)) {
        options.push([current, `${current} (current)`]);
      }
      return this._selectInput(label, key, options);
    }
    /**
     * Add a canonical property to a MANAGED collection, for the case the dropdown exists to solve:
     * the collection simply has no property of the right type, so Auto-detect finds nothing and
     * there is nothing to pick. Offering only a list of unusable properties is a dead end.
     *
     * Why this has to be code and not a README: Thymer assigns user-created properties an opaque
     * random id (e.g. "f66F2VNR6YHHQAZ"), so a human can NEVER hand-make a property whose id is
     * `meeting_url`. Writing the config ourselves is the only way those ids can exist.
     *
     * `saveConfiguration` reloads the plugin; the panel re-mounts itself in `onLoad`.
     *
     * @param {string} collectionGuid
     * @param {string} canonicalId
     */
    async _createCollectionField(collectionGuid, canonicalId) {
      const def = FIELD_DEFS[canonicalId];
      if (!def) return;
      const api = this._managedApi(collectionGuid) || this._collectionByGuid(collectionGuid);
      if (!api || typeof api.saveConfiguration !== "function") {
        this._toast(`Could not add "${def.label}"`, "Thymer did not hand over a writable config handle for that collection.");
        return;
      }
      return queuePluginConfigWrite(api, async () => {
        try {
          const live = api.getConfiguration?.() || {};
          const conf = JSON.parse(JSON.stringify(live));
          conf.fields = Array.isArray(conf.fields) ? conf.fields : [];
          if (conf.fields.some((field) => String(field.id) === canonicalId)) return;
          conf.fields.push({ ...def });
          this._ensureFieldVisible(conf, [canonicalId]);
          const ok = await api.saveConfiguration(conf);
          if (ok === false) throw new Error("Thymer rejected the change.");
          this._toast(`Added "${def.label}"`, `It is now available on ${this._collectionName(collectionGuid)}.`);
        } catch (err) {
          this._toast(`Could not add "${def.label}"`, this._errorMessage(err));
        }
      });
    }
    /** A property's user-visible label on a managed collection, falling back to its id. */
    /**
     * @param {string} collectionGuid
     * @param {string} fieldId
     */
    _fieldLabel(collectionGuid, fieldId) {
      const field = this._fieldById(collectionGuid, fieldId);
      return String(field && field.label || fieldId || "");
    }
    /**
     * One property picker, bound to a COLLECTION BINDING rather than to the prefs draft: which
     * property holds the meeting link is a fact about one collection, not a preference.
     *
     * @param {string} collectionGuid
     * @param {string} label
     * @param {string} key a binding mapping key
     * @param {any} types
     * @param {{filter?: any, emptyTypeLabel?: string}} [opts]
     */
    _fieldSelectInput(collectionGuid, label, key, types, { filter, emptyTypeLabel } = {}) {
      const binding = (
        /** @type {any} */
        this._bindings()[collectionGuid] || newBinding("hosted")
      );
      const allowed = new Set((types || []).map((type) => String(type).toLowerCase()));
      const fields = this._collectionFields(collectionGuid).filter((field) => {
        if (allowed.size && !allowed.has(String(field.type || "").toLowerCase())) return false;
        return typeof filter !== "function" || filter(field);
      });
      const options = [["", binding.role === "owned" ? "Auto-detect" : "Not mapped"]];
      for (const field of fields) {
        options.push([field.id, `${field.label || field.id} (${field.id})`]);
      }
      const current = String(binding[key] || "");
      if (current && !options.some(([value]) => value === current)) options.push([current, current]);
      const canonical = CANONICAL_FIELD_FOR_SETTING[
        /** @type {keyof typeof CANONICAL_FIELD_FOR_SETTING} */
        key
      ] || "";
      const def = canonical ? FIELD_DEFS[canonical] : null;
      const missing = !!def && !this._fieldById(collectionGuid, canonical);
      if (missing) options.push([CREATE_FIELD_OPTION, `Create a "${def.label}" property\u2026`]);
      return h(
        "label",
        { class: `${ROOT_CLASS}-field` },
        h("span", { class: `${ROOT_CLASS}-field-label` }, label),
        this._dropdown({
          value: current,
          options,
          onChange: /* @__PURE__ */ __name((value) => {
            if (value === CREATE_FIELD_OPTION) return void this._createCollectionField(collectionGuid, canonical);
            void this._saveBinding(collectionGuid, { [key]: value });
          }, "onChange")
        }),
        missing && !fields.length ? h(
          "span",
          { class: `${ROOT_CLASS}-field-hint` },
          `This collection has no ${emptyTypeLabel || (types || []).join(" or ")} property Meetings can use. Create one from the list above.`
        ) : null
      );
    }
    /**
     * @param {string} label
     * @param {string} key
     * @param {number} [rows]
     * @param {string} [placeholder]
     */
    _textareaInput(label, key, rows = 4, placeholder = "") {
      return h(
        "label",
        { class: `${ROOT_CLASS}-field` },
        h("span", { class: `${ROOT_CLASS}-field-label` }, label),
        h("textarea", {
          rows,
          value: this._draft[key] || "",
          placeholder,
          onInput: /* @__PURE__ */ __name((event) => this._updateSetting(key, event.target.value), "onInput")
        })
      );
    }
    /**
     * @param {string} title
     * @param {string} message
     */
    _toast(title, message) {
      try {
        this.ui.addToaster({ title, message, dismissible: true, autoDestroyTime: 5e3 });
      } catch {
      }
    }
    /**
     * @param {string} message
     * @param {any} [data]
     */
    _log(message, data = {}) {
      try {
        console.info(`[Meetings] ${message}`, data);
      } catch {
      }
    }
    /**
     * @param {string} label
     * @param {any} fn
     */
    _safe(label, fn) {
      try {
        return fn();
      } catch (err) {
        this._log(`load step failed: ${label}`, { error: this._errorMessage(err) });
        return null;
      }
    }
    /**
     * @param {string} label
     * @param {any} fn
     */
    async _safeAsync(label, fn) {
      try {
        return await fn();
      } catch (err) {
        this._log(`load step failed: ${label}`, { error: this._errorMessage(err) });
        return null;
      }
    }
    /** @param {any} err */
    _errorMessage(err) {
      const message = err && err.message ? err.message : String(err);
      if (/failed to fetch/i.test(message) && !this._bridgeUrl()) {
        return "Browser request was blocked before reaching Recall. Add the hosted Bridge URL in Plugin: Meetings.";
      }
      return message;
    }
    _css() {
      return `
			/* Tab bar as top-level panel nav: a filled track (segmented-control look) that wraps rather
			   than overflowing a narrow panel. Full-perimeter border \u2014 never a single-edge accent. */
			.${ROOT_CLASS}-panel .tps-tabs {
				display: flex;
				flex-wrap: wrap;
				width: 100%;
				gap: 4px;
				margin: 2px 0 14px;
				padding: 4px;
				background: var(--tps-bg-hover, var(--hover-subtle, rgba(127, 127, 127, 0.06)));
				border: 1px solid var(--tps-divider, var(--divider-color, rgba(127, 127, 127, 0.12)));
				border-radius: var(--tps-radius-md, 6px);
			}
			/* Send button(s) injected into the Recall Status property row on the record page. */
			.${ROOT_CLASS}__pagebtns {
				display: inline-flex;
				gap: 6px;
				align-items: center;
			}
			.${ROOT_CLASS}__pagebtn {
				flex: none;
			}
			.${ROOT_CLASS}__pagebtn:hover,
			.${ROOT_CLASS}__pagebtn:focus-visible {
				background: color-mix(in srgb, var(--tps-text, currentColor) 12%, transparent);
				outline: 2px solid color-mix(in srgb, var(--tps-text, currentColor) 45%, transparent);
				outline-offset: 1px;
			}
			.${ROOT_CLASS}__inline-button {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				width: 18px;
				height: 18px;
				margin-inline-start: 4px;
				margin-inline-end: 1px;
				padding: 0;
				border: 1px solid var(--tps-divider, color-mix(in srgb, currentColor 18%, transparent));
				border-radius: 4px;
				background: var(--tps-bg-hover, color-mix(in srgb, currentColor 8%, transparent));
				color: var(--text-muted, currentColor);
				font: inherit;
				font-size: 12px;
				line-height: 1;
				vertical-align: -2px;
				cursor: pointer;
				user-select: none;
			}
			.${ROOT_CLASS}__inline-button:hover,
			.${ROOT_CLASS}__inline-button:focus-visible {
				background: color-mix(in srgb, var(--tps-text, currentColor) 14%, transparent);
				border-color: color-mix(in srgb, var(--tps-text, currentColor) 55%, transparent);
				color: var(--tps-text, currentColor);
				box-shadow: 0 0 0 2px color-mix(in srgb, var(--tps-text, currentColor) 28%, transparent);
				outline: none;
			}
			/* Managed-collection rows in the Collections tab. Full-perimeter borders only \u2014
			   a single-edge accent bar is never used to mark the selected row. */
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-coll-row {
				display: flex;
				align-items: center;
				gap: 8px;
				padding: 6px 8px;
				border: 1px solid var(--tps-divider);
				border-radius: var(--tps-radius-md, 6px);
				background: var(--tps-bg-input);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-coll-row + .${ROOT_CLASS}-coll-row {
				margin-top: 6px;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-coll-row--selected {
				border-color: color-mix(in srgb, var(--tps-accent) 55%, transparent);
				background: color-mix(in srgb, var(--tps-accent) 10%, transparent);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-coll-pick {
				flex: 1 1 auto;
				display: flex;
				align-items: baseline;
				gap: 10px;
				min-width: 0;
				padding: 0;
				font: inherit;
				text-align: left;
				color: var(--tps-text);
				background: transparent;
				border: 0;
				cursor: pointer;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-coll-name {
				flex: 0 1 auto;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				font-size: var(--tps-fs-label);
				font-weight: var(--tps-fw-medium);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-coll-role,
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-coll-status {
				flex: 0 0 auto;
				font-size: var(--tps-fs-hint);
				color: var(--tps-text-muted);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-coll-status--warn { color: var(--tps-warning, #d97706); }
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-coll-status--fail { color: var(--tps-danger); }
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-coll-status--pass { color: var(--tps-success, #10b981); }
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-field {
				display: grid;
				gap: 6px;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-field-label {
				color: var(--tps-text, inherit);
				font-size: 13px;
				font-weight: 500;
				line-height: 1.3;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-field-hint {
				color: color-mix(in srgb, currentColor 58%, transparent);
				font-size: 12px;
				line-height: 1.45;
				margin-top: 2px;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-field-hint a {
				color: var(--tps-accent);
				text-decoration: underline;
				text-underline-offset: 2px;
			}
			/* Costs: one row per line item \u2014 name and estimate on the first line, the pricing detail
			   underneath at full width \u2014 so a narrow panel wraps sentences, not single words. */
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-cost-grid {
				display: grid;
				grid-template-columns: minmax(0, 1fr);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-cost-row {
				display: grid;
				grid-template-columns: minmax(0, 1fr) auto;
				column-gap: 16px;
				row-gap: 3px;
				align-items: baseline;
				padding: 10px 0;
				border-top: 1px solid color-mix(in srgb, currentColor 12%, transparent);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-cost-row:first-child {
				border-top: 0;
				padding-top: 0;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-cost-estimate {
				color: var(--tps-text, inherit);
				text-align: right;
				white-space: nowrap;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-cost-detail {
				grid-column: 1 / -1;
			}
			/* The native file input is hidden, not removed \u2014 it still does the picking. */
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-file-native {
				position: absolute;
				width: 1px;
				height: 1px;
				padding: 0;
				margin: -1px;
				overflow: hidden;
				clip: rect(0 0 0 0);
				white-space: nowrap;
				border: 0;
			}
			/* Green = a semantic success action, matching Save Settings: green border and text over a
			   subtle green fill. Full perimeter, never a single-edge accent. */
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-upload {
				display: inline-flex;
				align-items: center;
				gap: 6px;
				align-self: flex-start;
				width: auto;
				height: var(--tps-control-h-md, 32px);
				padding: 0 14px;
				font: inherit;
				font-size: var(--tps-fs-button, 12px);
				font-weight: var(--tps-fw-medium, 500);
				color: var(--tps-text, inherit);
				background: color-mix(in srgb, currentColor 6%, transparent);
				border: 1px solid color-mix(in srgb, currentColor 22%, transparent);
				border-radius: var(--tps-radius-sm, 4px);
				cursor: pointer;
				transition: background-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
				            border-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-upload:hover {
				background: color-mix(in srgb, currentColor 11%, transparent);
				border-color: color-mix(in srgb, currentColor 34%, transparent);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-upload:focus-visible {
				outline: 2px solid var(--tps-accent, #04d1ab);
				outline-offset: 2px;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-upload-icon {
				font-size: 14px;
				line-height: 1;
			}
			/* Already set: show the image, its name, and the two things you can do to it. */
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-file-set {
				display: flex;
				align-items: center;
				gap: 10px;
				padding: 8px 10px;
				border: 1px solid var(--tps-divider);
				border-radius: var(--tps-radius-md, 6px);
				background: var(--tps-bg-input);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-avatar {
				flex: 0 0 auto;
				width: 36px;
				height: 36px;
				border-radius: var(--tps-radius-circle, 50%);
				object-fit: cover;
				box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127, 127, 127, 0.18));
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-file-name {
				flex: 1 1 auto;
				min-width: 0;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				font-size: var(--tps-fs-hint);
				color: var(--tps-text);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-file-remove {
				flex: 0 0 auto;
				width: auto;
				height: var(--tps-control-h-sm, 28px);
				padding: 0 10px;
				font: inherit;
				font-size: var(--tps-fs-button, 12px);
				color: var(--tps-text-muted);
				background: transparent;
				border: 1px solid var(--tps-divider);
				border-radius: var(--tps-radius-sm, 4px);
				cursor: pointer;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-file-remove:hover {
				color: var(--tps-danger);
				border-color: color-mix(in srgb, var(--tps-danger) 40%, transparent);
				background: var(--tps-danger-soft);
			}
			/* Sits above the numbered steps, inside Setup \u2014 context, not a step. */
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-collection-note {
				margin: 0 0 12px;
				padding: 0 0 12px;
				border-bottom: 1px solid var(--tps-divider);
				color: var(--tps-text-muted);
				font-size: var(--tps-fs-hint);
				line-height: 1.5;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-steps {
				margin: 0;
				padding-left: 20px;
				display: grid;
				gap: 10px;
				color: var(--tps-text-muted);
				font-size: var(--tps-fs-hint);
				line-height: 1.5;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-steps li::marker {
				color: var(--tps-text);
				font-weight: var(--tps-fw-medium);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-steps a {
				color: var(--tps-accent);
				text-decoration: underline;
				text-underline-offset: 2px;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-setup-copy {
				display: inline-flex;
				align-items: baseline;
				gap: 4px;
				white-space: nowrap;
				vertical-align: baseline;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-setup-copy code {
				-webkit-user-select: text;
				user-select: text;
				cursor: text;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-setup-copy-button {
				display: inline-flex;
				align-items: center;
				gap: 3px;
				padding: 1px 5px;
				font: inherit;
				font-size: 0.9em;
				line-height: 1.3;
				color: var(--tps-text-muted);
				background: transparent;
				border: 0;
				border-radius: var(--tps-radius-sm, 4px);
				cursor: pointer;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-setup-copy-button:hover,
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-setup-copy-button:focus-visible,
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-setup-copy-button--copied {
				color: var(--tps-text, inherit);
				background: color-mix(in srgb, var(--tps-text, currentColor) 12%, transparent);
				border: 1px solid color-mix(in srgb, var(--tps-text, currentColor) 50%, transparent);
				box-shadow: 0 0 0 2px color-mix(in srgb, var(--tps-text, currentColor) 26%, transparent);
				outline: none;
			}
			/* Setup Doctor is a section like any other \u2014 no accent-tinted card of its own. */
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-doctor-card {
				margin-top: 0;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-doctor-label {
				display: flex;
				align-items: center;
				gap: var(--tps-space-2);
				color: var(--tps-text);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-doctor-icon {
				color: var(--tps-accent);
				font-size: 14px;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-doctor-card .tps-button--ghost:hover,
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-doctor-card .tps-button--ghost:focus-visible {
				color: var(--tps-text, inherit);
				background: color-mix(in srgb, var(--tps-text, currentColor) 12%, transparent);
				border-color: color-mix(in srgb, var(--tps-text, currentColor) 50%, transparent);
				box-shadow: 0 0 0 2px color-mix(in srgb, var(--tps-text, currentColor) 26%, transparent);
			}
			/* Setup Doctor results are a list, not cards: hairline dividers between rows, a real icon
			   size, the check name in the text color and the message muted. */
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-doctor-results {
				display: block;
				padding-left: 12px;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-doctor-result {
				display: flex;
				align-items: flex-start;
				gap: 12px;
				padding: 11px 0;
				border: 0;
				border-top: 1px solid var(--tps-divider);
				color: var(--tps-text-muted);
				font-size: 12.5px;
				line-height: 1.45;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-doctor-result:first-child {
				border-top: 0;
				padding-top: 4px;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-doctor-result strong {
				color: var(--tps-text);
				font-weight: 600;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-doctor-result > i {
				flex: 0 0 20px;
				width: 20px;
				font-size: 20px;
				line-height: 1;
				margin-top: -1px;
				text-align: center;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-doctor-result--pass i { color: var(--tps-success, #10b981); }
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-doctor-result--warn i { color: var(--tps-warning, #f59e0b); }
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-doctor-result--fail i { color: var(--tps-danger, #ef4444); }
			.${ROOT_CLASS}-panel input:not([type="checkbox"]):not([type="radio"]):not([type="file"]):not([type="range"]),
			.${ROOT_CLASS}-panel textarea {
				width: 100%;
				border: 1px solid var(--tps-divider);
				border-radius: var(--tps-radius-sm);
				background: var(--tps-bg-input);
				color: var(--tps-text);
				font: inherit;
				font-size: var(--tps-fs-body);
				padding: 8px 10px;
			}
			.${ROOT_CLASS}-panel textarea {
				resize: vertical;
				min-height: 76px;
				line-height: 1.4;
			}
			.${ROOT_CLASS}-panel input:not([type="checkbox"]):not([type="radio"]):focus,
			.${ROOT_CLASS}-panel textarea:focus {
				outline: none;
				border-color: var(--tps-accent);
			}
			.${ROOT_CLASS}-confirm-overlay {
				position: fixed;
				inset: 0;
				z-index: 10000;
				display: flex;
				align-items: center;
				justify-content: center;
				background: color-mix(in srgb, #000 46%, transparent);
			}
			.${ROOT_CLASS}-confirm-dialog {
				width: min(440px, calc(100vw - 40px));
				max-height: calc(100vh - 48px);
				overflow: auto;
				padding: 22px 24px 18px;
				border-radius: 12px;
				background: var(--tps-bg, var(--bg-default, #1c1c1c));
				color: var(--tps-text, var(--text-default, inherit));
				border: 1px solid var(--tps-divider, rgba(127,127,127,0.18));
				box-shadow: 0 16px 48px rgba(0,0,0,0.28);
				font-family: inherit;
			}
			.${ROOT_CLASS}-confirm-title {
				margin: 0 0 10px;
				font-size: 16px;
				font-weight: 600;
				letter-spacing: -0.01em;
				line-height: 1.25;
			}
			.${ROOT_CLASS}-confirm-lede,
			.${ROOT_CLASS}-confirm-note {
				margin: 0 0 10px;
				color: var(--tps-text-muted, var(--text-muted, inherit));
				font: inherit;
				font-size: 13px;
				line-height: 1.5;
				white-space: normal;
			}
			.${ROOT_CLASS}-confirm-note { margin-bottom: 4px; }
			.${ROOT_CLASS}-confirm-bullets {
				margin: 0 0 10px;
				padding-left: 1.2em;
				font: inherit;
				font-size: 13px;
				line-height: 1.5;
				color: var(--tps-text, inherit);
			}
			.${ROOT_CLASS}-confirm-bullets li { margin: 0 0 6px; }
			.${ROOT_CLASS}-confirm-bullets li:last-child { margin-bottom: 0; }
			.${ROOT_CLASS}-confirm-report {
				margin: 0 0 4px;
				max-height: 36vh;
				overflow: auto;
				padding: 10px 12px;
				border-radius: 8px;
				border: 1px solid var(--tps-divider, rgba(127,127,127,0.18));
				background: color-mix(in srgb, var(--tps-text, currentColor) 5%, transparent);
				color: var(--tps-text, inherit);
				font: inherit;
				font-size: 12px;
				line-height: 1.45;
				white-space: pre-wrap;
				word-break: break-word;
			}
			.${ROOT_CLASS}-confirm-list { display: grid; gap: 12px; margin: 0 0 4px; }
			.${ROOT_CLASS}-confirm-row {
				display: grid;
				grid-template-columns: auto 1fr;
				gap: 10px;
				align-items: start;
			}
			.${ROOT_CLASS}-confirm-fields { display: grid; gap: 6px; }
			.${ROOT_CLASS}-confirm-recall {
				font-size: 12px;
				color: var(--tps-text-muted, var(--text-muted, inherit));
			}
			.${ROOT_CLASS}-confirm-input {
				width: 100%;
				padding: 6px 8px;
				border-radius: 6px;
				border: 1px solid var(--tps-divider, rgba(127,127,127,0.2));
				background: var(--tps-bg-input, rgba(127,127,127,0.06));
				color: inherit;
				font: inherit;
			}
			.${ROOT_CLASS}-confirm-actions {
				display: flex;
				flex-wrap: wrap;
				justify-content: flex-end;
				gap: 8px;
				margin-top: 16px;
			}
			.${ROOT_CLASS}-confirm-save,
			.${ROOT_CLASS}-confirm-skip,
			.${ROOT_CLASS}-choice-item {
				font: inherit;
				font-size: 13px;
				font-weight: 500;
				min-height: 32px;
				padding: 0 12px;
				border-radius: 8px;
				border: 1px solid color-mix(in srgb, var(--tps-text, currentColor) 22%, transparent);
				background: transparent;
				color: inherit;
				cursor: pointer;
				transition: background-color 80ms ease, border-color 80ms ease, box-shadow 80ms ease;
			}
			.${ROOT_CLASS}-confirm-skip:hover,
			.${ROOT_CLASS}-confirm-skip:focus-visible,
			.${ROOT_CLASS}-choice-item:hover,
			.${ROOT_CLASS}-choice-item:focus-visible {
				background: color-mix(in srgb, var(--tps-text, currentColor) 12%, transparent);
				border-color: color-mix(in srgb, var(--tps-text, currentColor) 55%, transparent);
				box-shadow: 0 0 0 2px color-mix(in srgb, var(--tps-text, currentColor) 28%, transparent);
				outline: none;
			}
			.${ROOT_CLASS}-confirm-skip:active,
			.${ROOT_CLASS}-choice-item:active {
				background: color-mix(in srgb, var(--tps-text, currentColor) 18%, transparent);
			}
			.${ROOT_CLASS}-confirm-save {
				color: var(--enum-green-fg, #10b981);
				background: color-mix(in srgb, var(--enum-green-fg, #10b981) 14%, transparent);
				border-color: color-mix(in srgb, var(--enum-green-fg, #10b981) 50%, transparent);
			}
			.${ROOT_CLASS}-confirm-save:hover,
			.${ROOT_CLASS}-confirm-save:focus-visible {
				background: color-mix(in srgb, var(--enum-green-fg, #10b981) 26%, transparent);
				border-color: var(--enum-green-fg, #10b981);
				box-shadow: 0 0 0 2px color-mix(in srgb, var(--enum-green-fg, #10b981) 40%, transparent);
				outline: none;
			}
			.${ROOT_CLASS}-confirm-save:active {
				background: color-mix(in srgb, var(--enum-green-fg, #10b981) 34%, transparent);
			}
			.${ROOT_CLASS}-confirm-save:disabled {
				opacity: 0.45;
				cursor: default;
				box-shadow: none;
			}
			.${ROOT_CLASS}-choice-list {
				display: grid;
				gap: 8px;
				margin: 4px 0 0;
			}
			.${ROOT_CLASS}-choice-item {
				display: grid;
				gap: 2px;
				width: 100%;
				padding: 10px 12px;
				text-align: left;
			}
			.${ROOT_CLASS}-choice-item.is-selected,
			.${ROOT_CLASS}-choice-item.is-selected:hover,
			.${ROOT_CLASS}-choice-item.is-selected:focus-visible {
				color: var(--enum-green-fg, #10b981);
				background: color-mix(in srgb, var(--enum-green-fg, #10b981) 16%, transparent);
				border-color: color-mix(in srgb, var(--enum-green-fg, #10b981) 70%, transparent);
				box-shadow: 0 0 0 2px color-mix(in srgb, var(--enum-green-fg, #10b981) 35%, transparent);
			}
			.${ROOT_CLASS}-choice-item-label {
				font-weight: 600;
			}
			.${ROOT_CLASS}-choice-item-detail {
				color: var(--tps-text-muted, var(--text-muted, inherit));
				font-size: 12px;
				line-height: 1.4;
			}
			.${ROOT_CLASS}-panel .tps-button--ghost:hover,
			.${ROOT_CLASS}-panel .tps-button--ghost:focus-visible,
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-doctor-card .tps-button--ghost:hover {
				color: var(--tps-text, inherit);
				background: color-mix(in srgb, var(--tps-text, currentColor) 12%, transparent);
				border-color: color-mix(in srgb, var(--tps-text, currentColor) 50%, transparent);
				box-shadow: 0 0 0 2px color-mix(in srgb, var(--tps-text, currentColor) 26%, transparent);
				outline: none;
			}
			.${ROOT_CLASS}-panel .tps-button--primary:hover,
			.${ROOT_CLASS}-panel .tps-button--primary:focus-visible {
				filter: none;
				background: color-mix(in srgb, var(--tps-accent) 86%, #fff);
				box-shadow: 0 0 0 2px color-mix(in srgb, var(--tps-accent) 42%, transparent);
				outline: none;
			}

			/* \u2500\u2500 Panel hierarchy (kept last so it wins over the shared primitives) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
			   One text column: every title, label, hint and checkbox is indented by the same 12px the
			   controls pad their own text with, so all text shares a left edge while the control boxes
			   span the card. Every color is a design-system token (which resolve to Thymer's theme
			   variables): card = hover surface, control = input surface with the strong border. */
			/* Accent follows the active THEME (its --color-primary-500), not the fixed logo teal the shared
			   panel token defaults to. Declared on the panel root at the same specificity as the token block
			   and injected after it, so every accent-derived token (soft, strong) recomputes from it. */
			.tps-panel.${ROOT_CLASS}-panel {
				--tps-accent: var(--color-primary-500, var(--logo-color, #04d1ab));
				/* Secondary text levels as fixed fractions of the text color: the theme's own subtle and
				   disabled tokens land anywhere from near-text to invisible, so they cannot carry a ladder. */
				--tps-text-muted: color-mix(in srgb, var(--tps-text) 74%, transparent);
				--tps-text-faint: color-mix(in srgb, var(--tps-text) 60%, transparent);
				--tps-text-whisper: color-mix(in srgb, var(--tps-text) 50%, transparent);
			}
			.${ROOT_CLASS}-panel .tps-tabs {
				margin: 18px 0 18px;
				border-radius: 4px;
			}
			.${ROOT_CLASS}-panel .tps-section {
				background: var(--tps-bg-hover);
				border: 1px solid var(--tps-divider);
				border-radius: 4px;
				padding: 20px 16px 22px;
			}
			.${ROOT_CLASS}-panel .tps-section + .tps-section {
				margin-top: 18px;
				padding-top: 20px;
				border-top: 1px solid var(--tps-divider);
			}
			.${ROOT_CLASS}-panel .tps-section-label {
				font-size: 16px;
				line-height: 1.3;
				font-weight: 600;
				letter-spacing: 0;
				text-transform: none;
				color: var(--tps-text);
				margin: 0 0 6px;
				padding-left: 12px;
			}
			.${ROOT_CLASS}-panel .tps-section-hint {
				font-size: 12.5px;
				line-height: 1.5;
				color: var(--tps-text-faint);
				margin: 0 0 24px;
				padding-left: 12px;
			}
			.${ROOT_CLASS}-panel .tps-section-body {
				gap: 26px;
				margin-top: 22px;
			}
			.${ROOT_CLASS}-panel .tps-section-hint + .tps-section-body {
				margin-top: 0;
			}
			.${ROOT_CLASS}-panel .tps-section-body:has(> .tps-opt) {
				gap: 12px;
			}
			/* Sub-headers sit one step below the title on the text ladder \u2014 never the accent, which is
			   reserved for interactive states. */
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-field-label {
				color: var(--tps-text-muted);
				font-size: 12.5px;
				font-weight: 600;
				letter-spacing: 0.01em;
				padding-left: 12px;
				margin-bottom: 2px;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-field {
				gap: 8px;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-field-hint,
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-collection-note,
			.${ROOT_CLASS}-panel .tps-opt-desc {
				font-size: 12px;
				line-height: 1.45;
				color: var(--tps-text-faint);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-field-hint,
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-collection-note {
				padding-left: 12px;
			}
			/* Controls sit on the input surface with the strong border so they read as things you
			   can operate, not as more card. */
			.${ROOT_CLASS}-panel input:not([type="checkbox"]):not([type="radio"]):not([type="file"]):not([type="range"]),
			.${ROOT_CLASS}-panel textarea,
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-select {
				padding-left: 12px;
				padding-right: 12px;
				color: var(--tps-text);
				background-color: var(--tps-bg-input);
				border: 1px solid var(--tps-border-strong);
				border-radius: var(--tps-radius-md, 6px);
			}
			.${ROOT_CLASS}-panel input:not([type="checkbox"]):not([type="radio"]):not([type="file"]):not([type="range"]):focus,
			.${ROOT_CLASS}-panel textarea:focus,
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-select:focus-visible {
				border-color: var(--tps-accent);
				outline: none;
			}
			/* Dropdowns are Thymer's own menu (ui.createDropdown) behind a trigger that looks like every
			   other control: value on the left, chevron inset 16px on the right. Never a native select. */
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-select {
				display: flex;
				align-items: center;
				justify-content: space-between;
				gap: 12px;
				width: 100%;
				min-height: 34px;
				padding-right: 16px;
				font: inherit;
				font-size: var(--tps-fs-body);
				text-align: left;
				cursor: pointer;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-select:hover {
				border-color: var(--tps-text-faint);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-select__value {
				flex: 1 1 auto;
				min-width: 0;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-select__value--empty {
				color: var(--tps-text-faint);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-select__chevron {
				flex: 0 0 auto;
				font-size: 14px;
				color: var(--tps-text-muted);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-doctor-results {
				margin-top: 16px;
			}
			/* Meta lines (timestamps, empty states): quieter than hints, never body copy. */
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-meta {
				display: block;
				font-size: 11.5px;
				line-height: 1.4;
				color: var(--tps-text-whisper, var(--tps-text-faint));
				padding-left: 12px;
				margin-top: 6px;
			}
			/* Checkbox rows start on the text column like everything else; no hover slab. */
			.${ROOT_CLASS}-panel .tps-opt {
				margin: 0 0 0 12px;
				padding: 2px 0;
				column-gap: 12px;
				background: none;
			}
			.${ROOT_CLASS}-panel .tps-opt:hover {
				background: none;
			}
			.${ROOT_CLASS}-panel .tps-opt > .tps-opt-label,
			.${ROOT_CLASS}-panel .tps-opt > input:checked ~ .tps-opt-label {
				font-size: 13px;
				font-weight: 500;
				color: var(--tps-text);
			}
			/* Buttons: sized to their label, never wrapping, never stretched across a card. Quiet
			   variant on the input surface with the strong border; the accent only on the primary. */
			.${ROOT_CLASS}-panel .tps-button {
				min-height: 32px;
				padding: 0 14px;
				font-size: 12.5px;
				font-weight: 500;
				white-space: nowrap;
				width: auto;
				justify-self: start;
				align-self: center;
				flex: 0 0 auto;
			}
			.${ROOT_CLASS}-panel .tps-button--ghost {
				background: var(--tps-bg-input);
				border: 1px solid var(--tps-border-strong);
				color: var(--tps-text);
			}
			.${ROOT_CLASS}-panel .tps-button--ghost:hover {
				background: var(--tps-bg-active);
				border-color: var(--tps-text-faint);
			}
			.${ROOT_CLASS}-panel .tps-button--primary {
				background: var(--tps-accent);
				border: 1px solid var(--tps-accent);
				color: var(--tps-on-accent);
			}
			.${ROOT_CLASS}-panel .tps-button--primary:hover {
				background: var(--tps-accent-strong);
				border-color: var(--tps-accent-strong);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-coll-pick {
				align-items: center;
			}
			/* Links: underlined at rest so they are findable, the underline lifts on hover and the
			   color deepens \u2014 one rule for every link in the panel. */
			.${ROOT_CLASS}-panel a,
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-field-hint a,
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-steps a {
				color: var(--tps-accent);
				text-decoration: underline;
				text-decoration-color: color-mix(in srgb, var(--tps-accent) 40%, transparent);
				text-decoration-thickness: 1px;
				text-underline-offset: 3px;
				transition: color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
			}
			.${ROOT_CLASS}-panel a:hover,
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-field-hint a:hover,
			.${ROOT_CLASS}-panel .${ROOT_CLASS}-steps a:hover {
				text-decoration: none;
				color: var(--tps-accent-strong);
			}
			.${ROOT_CLASS}-panel a:focus-visible {
				outline: 2px solid var(--tps-accent);
				outline-offset: 2px;
				border-radius: 2px;
			}
		`;
    }
  };
  async function fetchWithBackoff(url, options, maxAttempts = 5) {
    let lastResponse = null;
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      const response = await fetch(url, options);
      lastResponse = response;
      if (![429, 503, 507].includes(response.status)) return response;
      const retryAfter = Number(response.headers && response.headers.get ? response.headers.get("retry-after") : 0);
      const delayMs = Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter * 1e3 : Math.min(8e3, 500 * 2 ** attempt);
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
    return (
      /** @type {Response} */
      lastResponse
    );
  }
  __name(fetchWithBackoff, "fetchWithBackoff");
  function transcriptEntries(raw) {
    const rows = Array.isArray(raw) ? raw : Array.isArray(raw && raw.results) ? raw.results : Array.isArray(raw && raw.transcript) ? raw.transcript : [];
    const entries = [];
    for (const row of rows) {
      const nested = row && row.data && row.data.words ? row.data : row;
      const participant = row.participant || nested && nested.participant || {};
      const speaker = row.speaker || row.speaker_name || participant.name || "Speaker";
      const participantId = participant.id != null ? participant.id : row.speaker_id != null ? row.speaker_id : null;
      const speakerKey = participantId != null ? `id:${participantId}` : `name:${String(speaker).trim().toLowerCase()}`;
      const words = Array.isArray(row.words) ? row.words : Array.isArray(nested && nested.words) ? nested.words : [];
      const text = String(row.text || row.transcript || row.sentence || row.phrase || words.map((w) => w.text || w.word || "").join(" ") || "").trim();
      if (!text) continue;
      const firstWord = words[0] || {};
      const absoluteIso = firstStringVal(
        row.absoluteTime,
        firstWord.start_timestamp && firstWord.start_timestamp.absolute,
        row.start_timestamp && row.start_timestamp.absolute
      );
      const relativeSec = firstNumber(
        row.start_time,
        row.start_timestamp,
        row.relativeTime,
        firstWord.start_time,
        firstWord.start_timestamp,
        firstWord.start_timestamp && firstWord.start_timestamp.relative
      );
      entries.push({
        speaker: String(speaker),
        speakerKey,
        text,
        absoluteIso: absoluteIso || null,
        relativeSec,
        participant: {
          id: participant.id != null ? participant.id : null,
          name: String(participant.name || speaker || "").trim(),
          email: String(participant.email || "").trim(),
          is_host: participant.is_host == null ? null : !!participant.is_host,
          platform: participant.platform || null
        }
      });
    }
    return entries;
  }
  __name(transcriptEntries, "transcriptEntries");
  function formatEntryHeader(entry, settings) {
    const stamp = settings.utteranceTimestamps ? entryStamp(entry, settings) || "" : "";
    const template = settings.turnHeaderTemplate || "[{Time}] {Speaker}";
    const filled = template.replace(/\{Speaker\}/gi, entry.speaker || "").replace(/\{Time\}/gi, stamp);
    const tidied = stamp ? filled : filled.replace(/[\s\[\]|•·—–-]+$/, "").replace(/^[\s\[\]|•·—–-]+/, "");
    return tidied.replace(/\s{2,}/g, " ").trim() || (entry.speaker || "");
  }
  __name(formatEntryHeader, "formatEntryHeader");
  function formatSectionHeading(title, firstEntry, lastEntry, settings) {
    const range = sectionRange(firstEntry, lastEntry, settings);
    const template = settings.sectionHeadingTemplate || "{Topic} | {Range}";
    const filled = template.replace(/\{Topic\}/gi, title || "").replace(/\{Range\}/gi, range || "");
    const tidied = range ? filled : filled.replace(/[\s|•·—–\-\[\]]+$/, "").replace(/^[\s|•·—–\-\[\]]+/, "");
    return tidied.replace(/\s{2,}/g, " ").trim() || (title || "");
  }
  __name(formatSectionHeading, "formatSectionHeading");
  function entriesToText(entries, settings) {
    if (settings.transcriptLayout === "inline") {
      return entries.map((e) => `${formatEntryHeader(e, settings)}: ${e.text}`).join("\n");
    }
    return entries.map((e) => `${formatEntryHeader(e, settings)}
	${e.text}`).join("\n\n");
  }
  __name(entriesToText, "entriesToText");
  function firstStringVal(...values) {
    for (const v of values) {
      if (typeof v === "string" && v.trim()) return v.trim();
    }
    return null;
  }
  __name(firstStringVal, "firstStringVal");
  function transcriptRowCount(raw) {
    if (Array.isArray(raw)) return raw.length;
    if (raw && Array.isArray(raw.results)) return raw.results.length;
    if (raw && Array.isArray(raw.transcript)) return raw.transcript.length;
    return 0;
  }
  __name(transcriptRowCount, "transcriptRowCount");
  function describeTranscriptState(transcript, bot) {
    const debug = transcript && transcript.debug || {};
    if (debug.kv === "MISSING") {
      return "The bridge has no KV namespace bound, so live transcript rows are being thrown away. In Cloudflare, open the Worker \u2192 Settings \u2192 Bindings and bind a KV namespace named RECALL_TRANSCRIPTS.";
    }
    if (debug.recordings > 0 && debug.realtimeEndpoints === 0) {
      return "Recall has registered no realtime endpoint for this bot, so nothing will stream live \u2014 though the full transcript will still arrive when the meeting ends. The webhook is attached when the bot is CREATED and cannot be added afterwards, so a bot sent before the Bridge URL was working will never stream. Send a new bot now that the bridge is set up.";
    }
    const parts = [];
    const status = debug.botStatus || latestRecallStatus(bot);
    if (status) parts.push(`bot=${status}`);
    if (debug.recordings != null) parts.push(`recordings=${debug.recordings}`);
    if (debug.transcriptArtifacts != null) parts.push(`transcripts=${debug.transcriptArtifacts}`);
    if (Array.isArray(debug.transcriptStatuses) && debug.transcriptStatuses.length) parts.push(`transcript_status=${debug.transcriptStatuses.join(",")}`);
    if (debug.hasDownloadUrl != null) parts.push(`download_url=${debug.hasDownloadUrl ? "yes" : "no"}`);
    if (debug.realtimeEndpoints != null) parts.push(`realtime_endpoints=${debug.realtimeEndpoints}`);
    if (Array.isArray(debug.realtimeEndpointStatuses) && debug.realtimeEndpointStatuses.length) {
      parts.push(`realtime_status=${debug.realtimeEndpointStatuses.join(",")}`);
    }
    if (Array.isArray(debug.realtimeEndpointEvents) && debug.realtimeEndpointEvents.length) {
      parts.push(`realtime_events=${debug.realtimeEndpointEvents.flat().join(",")}`);
    }
    if (debug.kv != null) parts.push(`kv=${debug.kv}`);
    if (debug.realtimePosts != null) parts.push(`realtime_posts=${debug.realtimePosts}`);
    if (debug.liveRows != null) parts.push(`live_rows=${debug.liveRows}`);
    if (transcript && transcript.pending) return `Transcript not ready yet${parts.length ? ` (${parts.join("; ")})` : ""}.`;
    if (transcript && transcript.live) return `No live transcript rows received yet${parts.length ? ` (${parts.join("; ")})` : ""}.`;
    return `No transcript rows found${parts.length ? ` (${parts.join("; ")})` : ""}.`;
  }
  __name(describeTranscriptState, "describeTranscriptState");
  function latestRecallStatus(bot) {
    if (!bot) return "";
    if (typeof bot.status === "string") return bot.status;
    if (bot.status && typeof bot.status.code === "string") return bot.status.code;
    const changes = Array.isArray(bot.status_changes) ? bot.status_changes : [];
    const last = changes[changes.length - 1];
    return last && (last.code || last.status || last.message) || "";
  }
  __name(latestRecallStatus, "latestRecallStatus");
  function isTerminalStatus(status) {
    const normalized = String(status || "").toLowerCase();
    return DONE_STATUSES.has(normalized) || FATAL_STATUSES.has(normalized) || normalized.includes("done") || normalized.includes("fatal");
  }
  __name(isTerminalStatus, "isTerminalStatus");
  function isFatalStatus(status) {
    const normalized = String(status || "").toLowerCase();
    return FATAL_STATUSES.has(normalized) || normalized.includes("fatal") || normalized.includes("failed");
  }
  __name(isFatalStatus, "isFatalStatus");
  function isMeetingEndedStatus(status) {
    const normalized = String(status || "").toLowerCase();
    return isTerminalStatus(normalized) || normalized === "call_ended" || normalized === "processing transcript";
  }
  __name(isMeetingEndedStatus, "isMeetingEndedStatus");
  function recallError(json, status) {
    if (json && typeof json.detail === "string") return json.detail;
    if (json && typeof json.error === "string") return json.error;
    if (json && json.error && json.error.message) return json.error.message;
    return `Recall returned ${status}`;
  }
  __name(recallError, "recallError");
  function anthropicError(json, status) {
    if (json && json.error && json.error.message) return json.error.message;
    return `Anthropic returned ${status}`;
  }
  __name(anthropicError, "anthropicError");
  function formatBridgeError(json, status) {
    const base = json && (json.error || json.message) || `Bridge returned ${status}`;
    const detail = errorDetail(json && json.detail);
    if (!detail || detail === base) return base;
    return `${base}: ${detail}`;
  }
  __name(formatBridgeError, "formatBridgeError");
  function errorDetail(value) {
    if (!value) return "";
    if (typeof value === "string") return value.trim();
    if (Array.isArray(value)) {
      return value.map(errorDetail).filter(Boolean).join("; ");
    }
    if (typeof value === "object") {
      for (const key of ["detail", "message", "error"]) {
        const nested = (
          /** @type {string} */
          errorDetail(value[key])
        );
        if (nested) return nested;
      }
      try {
        return JSON.stringify(value);
      } catch {
      }
    }
    return "";
  }
  __name(errorDetail, "errorDetail");
  function firstNumber(...values) {
    for (const value of values) {
      const n = Number(value);
      if (Number.isFinite(n)) return n;
    }
    return null;
  }
  __name(firstNumber, "firstNumber");
  function bytesToBase64(bytes) {
    let binary = "";
    const chunk = 32768;
    for (let i = 0; i < bytes.length; i += chunk) {
      binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
    }
    return btoa(binary);
  }
  __name(bytesToBase64, "bytesToBase64");
  function clampNumber(value, min, max, fallback) {
    const n = Number(value);
    if (!Number.isFinite(n)) return fallback;
    return Math.min(max, Math.max(min, n));
  }
  __name(clampNumber, "clampNumber");
  function compareVersions(left, right) {
    const a = String(left || "").split(".").map((part) => parseInt(part, 10) || 0);
    const b = String(right || "").split(".").map((part) => parseInt(part, 10) || 0);
    for (let index = 0; index < Math.max(a.length, b.length); index++) {
      if ((a[index] || 0) !== (b[index] || 0)) return (a[index] || 0) > (b[index] || 0) ? 1 : -1;
    }
    return 0;
  }
  __name(compareVersions, "compareVersions");
  function propertyValueToText(value) {
    if (value == null) return "";
    if (typeof value === "string" || typeof value === "number") return String(value).trim();
    if (typeof value !== "object") return "";
    for (const key of ["url", "href", "value", "text", "label", "title"]) {
      const nested = value[key];
      if (typeof nested === "string" || typeof nested === "number") {
        const text = String(nested).trim();
        if (text) return text;
      }
    }
    return "";
  }
  __name(propertyValueToText, "propertyValueToText");
  return __toCommonJS(plugin_exports);
})();
var Plugin = plugins.Plugin;
