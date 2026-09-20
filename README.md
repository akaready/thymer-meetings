# Meetings

Collection plugin for a Thymer Meetings collection. It sends a Recall.ai bot to the meeting URL on a record, polls Recall for the transcript, and writes a Claude-generated summary after the meeting.

Recall settings autosave locally in the browser, overriding defaults from `custom.recallAi` in the plugin JSON. If direct browser requests are blocked, set `Bridge URL` to a hosted copy of the bridge in `backend/bridge-worker.js`.

Plugins are made with 🤍 for the Thymer community. Free to use, fork, and hack on for <a href="LICENSE" target="_blank" rel="noopener noreferrer">non-commercial use</a>.

Plug-ins take effort, hours, and credits to build. If you find them helpful for you and your workflows, a star ⭐ on the repo, a <a href="https://buymeacoffee.com/akaready" target="_blank" rel="noopener noreferrer">coffee</a> ☕, and a link back to <a href="https://akaready.com" target="_blank" rel="noopener noreferrer">@akaready</a> 🔗 all go a long way. Optional of course, but always appreciated.

Enjoy! 🙏

<p align="left">
  <a href="https://buymeacoffee.com/akaready" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="40" alt="Buy me a coffee">
  </a>
</p>

![Meetings plugin UI](./meetings.png)

&nbsp;

## 📦 Install

**Recommended:** Use the [Thymer Plugins Manager](https://github.com/ahpatel/thymer-plugins-manager) and install via [this repo's URL](https://github.com/akaready/thymer-meetings) for automatic updates.

**Manual:** copy <a href="plugin.js" target="_blank" rel="noopener noreferrer"><code>plugin.js</code></a> and <a href="plugin.json" target="_blank" rel="noopener noreferrer"><code>plugin.json</code></a> from this repo into Thymer's plugin editor.


&nbsp;

## 📋 Fields

- `Meeting URL` is the meeting link sent to Recall.
- `Date` is the meeting start, like a calendar event. Leave it empty for an undated meeting
  (no scheduled bot; **Join Now** still works). When Date is set, Recall's `join_at` is **two
  minutes before** that time so the notetaker is in the room as people arrive.
- The transcript and Claude summary are written directly into the Meeting page body, where headings,
  tasks, speaker blocks, and citation links render correctly. There are no Transcript or Summary text properties.
  New meetings start with four top-level headings: **Summary**, **Action items**, **Notes**, and **Transcript**.
  Notes is for you — the plugin never overwrites what you type there. The live transcript only appends under
  Transcript, so it does not reshuffle Summary or Notes.
- `Attendees` is the roster. After the meeting, confident email or unique-name matches are linked
  silently. Unmatched display names get a confirmation dialog so you can set a full name and email
  before creating a Person — the plugin does not auto-create poorly named People pages. The old
  plaintext Participant Names property is hidden (kept in the schema, not shown).
- `Related` is an unrestricted multi-record collection-link so you can attach a meeting to a job, client,
  or any other record in Thymer.
- `Recall Bot ID`, `Recall Status`, and `Last Error` track integration state.

On upgrade, the old `Transcript` and `Summary` text properties are hidden and removed from the page/table
layouts, not deleted, so any values previously stored there remain recoverable.


















&nbsp;

## 🛠️ Setup

You need three things before your first meeting: a **Recall key** (sends the notetaker), a
**Claude key** (writes the summary), and a **bridge** (a tiny free helper you put online).

Open `Plugin: Recall.ai Meetings` from the command palette — the **Setup** section in the panel
walks you through the same steps with clickable links.

### 1. Get a Recall key

Grab it from your Recall dashboard at `https://<region>.recall.ai/dashboard/developers/api-keys`
— for example [us-east-1](https://us-east-1.recall.ai/dashboard/developers/api-keys). Pay-as-you-go
accounts use the [us-west-2](https://us-west-2.recall.ai/dashboard/developers/api-keys) dashboard.

> **Keys belong to one region.** Whichever region you take the key from, pick that same one in the
> plugin's **Region** setting, or Recall will reject it with a 401.

### 2. Get a Claude key

From the [Anthropic console](https://console.anthropic.com/settings/keys). This writes the summary.

### 3. Put the bridge online

**Free, ~2 minutes, no terminal.** → **[Follow the bridge guide](./backend/)**

Thymer runs inside your browser, and browsers aren't allowed to call Recall and Claude directly —
they block the request before it leaves your machine (you'd just see `Failed to fetch`). The bridge
is a tiny program you host that passes those requests along. Your keys stay yours; the bridge stores
no secrets.

### 4. Paste them into the plugin

Put the bridge address and both keys into the **Connection** section of the settings panel.
Then open **Setup → Setup Doctor** and click **Run setup check**. It validates the bridge version,
KV binding, webhook-verification mode, Recall key/region, Claude key/model, and field bindings without
creating a bot or generating a summary.

The **Costs** tab shows an API cost preview before the first call. It uses public
pay-as-you-go list prices and shows Recall recording + transcription, the Claude summary estimate and
combined total for every selectable model, and storage separately. Estimates assume a one-hour active
bot and a typical one-hour transcript/summary; the assumptions and direct pricing links are shown in
the panel. Waiting-room time, credits, custom plans, transcript length, and generated output can change
the real bill. Sonnet 5 introductory pricing switches automatically to its announced standard rate on
September 1, 2026.

Recall sends live transcript lines to the bridge’s public webhook while a meeting is running. If
Setup Doctor shows **Live transcript security (optional)** in compatibility mode, streaming still
works, but the endpoint cannot prove that a post came from Recall; another sender could forge
transcript rows or spam the Worker. In Recall, open **Developers → API Keys & Secrets**, click
**Create Workspace Secret**, then add that value to the Cloudflare Worker under **Settings →
Variables and Secrets** as an encrypted variable named exactly
`RECALL_WORKSPACE_VERIFICATION_SECRET`. Redeploy the Worker and run Setup Doctor again. This makes
the Worker reject events that are not cryptographically signed by Recall; it does not enable the
webhook itself. See [Recall’s request-verification guide](https://docs.recall.ai/docs/authenticating-requests-from-recallai).

### 5. Send the notetaker

Add a meeting link to a Meeting record. What the button says depends on when the meeting is:

| `Date` | Button | What happens |
| --- | --- | --- |
| Empty, or too soon for Recall to schedule | **Join Now** | The notetaker joins **immediately**. |
| Far enough out (~12 min, so join time is 10+ min away) | **Schedule Bot** | The notetaker is **booked** and joins **two minutes before** Date. A **Join now** button sits next to it if you'd rather send one in early anyway. |

Why the 10-minute line? It's Recall's, not ours: a bot booked 10+ minutes ahead is a *scheduled*
bot, which Recall **guarantees** joins on time. Anything sooner is an *ad-hoc* bot, which Recall
says to use sparingly and doesn't promise will be punctual. Ad-hoc is still the right call for
"I'm in a meeting right now" — which is why **Join Now** is always one click away.

Want it fully hands-off? **Send the bot automatically to scheduled meetings** is on by default, so any
meeting with a `Date` far enough out gets a notetaker with no click at all. Turn it off if you
prefer to book by hand. It deliberately never auto-sends for imminent meetings, so a bot is never billed
sitting in an empty room.

Clicking a booked **Scheduled** bot cancels it through Recall's scheduled-bot delete operation; it
does not try to use the active-call leave operation. The Meeting can be scheduled again afterward.

You can also send one from the **Recall Status** column in the table view, or from the microphone
button on an inline reference to a Meeting record in the editor.

### 6. Attendees and Related

The plugin creates the multi-record `Attendees` collection-link property automatically. Matching is on
by default: at meeting finalization, Recall's participant artifact supplies the full roster, including
people who never spoke. Confident matches are attached to `Attendees`. Ambiguous or unmatched names
open a confirmation dialog after the meeting so you can set a full name and email, skip, or create
a Person. Existing Attendees links are never overwritten.

You do not have to discover a mapping toggle to get this. Restrict Attendees to your People or Contacts
collection for the tightest matches; if the relation is unrestricted, matching uses an auto-detected
People/Contacts/Team/Staff collection. The plugin never auto-creates People from a Zoom display name —
unmatched participants wait for the confirmation dialog.

`Related` is a separate unrestricted multi-record link. Use it to connect a meeting to a job, client,
project, or any other record from anywhere in Thymer.

&nbsp;

## ⚙️ All settings

| Setting | What it does |
| --- | --- |
| **Bridge URL** | Address of your bridge (step 3). |
| **Recall API key** / **Region** | Your Recall key and the region it came from — they must match. |
| **Recall media retention** | How long future bots keep Recall’s audio/video, transcript, participant, and debug artifacts. Defaults to 7 days, inside Recall’s free storage window. |
| **Anthropic API key** / **Claude model** | Key and model used to write the summary. |
| **Costs** | One-hour planning estimate for Recall plus every Claude model, with the selected model highlighted and storage shown separately. |
| **Field mapping** | Point Meeting URL, Date, Attendees, and Related at existing properties instead of the plugin defaults. Transcript, summary, action items, and notes always use the page body. |
| **Match participants to Attendees** | On by default. Confident email or unique-name matches are linked silently. Unmatched people get a confirmation dialog after the meeting. Existing links are preserved. If Attendees is unrestricted, matching uses an auto-detected People/Contacts collection. |
| **Citation label** | Chip text on new summary citations: name and time, name only, or time only. The trailing arrow is Thymer chrome and cannot be removed. |
| **Send the bot automatically to scheduled meetings** | On by default. When Date is far enough out, book the notetaker automatically (it joins two minutes early). Cancel anytime. |
| **Bot name** | The name the notetaker shows in the meeting. |
| **Bot image** | Optional. A public HTTPS JPEG, 16:9, ideally 1280×720 and under 1.3 MB. Sent to Recall as `automatic_video_output`. |
| **Join chat message** | Optional message the bot posts when it joins. |
| **Poll interval** | How often the plugin checks Recall for progress. |
| **Summary prompt** | The instructions Claude follows when summarizing. Default: one short Overview paragraph, then brief `- ` bullets under Decisions / Open Questions (never numbered), and a separate `### Action Items` checkbox list. |

The retention setting is sent as `recording_config.retention` on every future bot. Seven days is the
default because Recall does not charge for media stored for seven days or less, while still leaving a
repair/debugging window. Expiration is permanent and does not delete the transcript or summary
already written into the Thymer page body. It does not change existing bots; remove those from the Recall bot
dashboard with **⋯ → Delete media**, or call Recall’s irreversible
[Delete Bot Media API](https://docs.recall.ai/reference/bot_delete_media_create). Zero-data retention
is intentionally not offered because this plugin needs Recall’s finalized post-call artifact to
guarantee the complete transcript, summary, citations, and attendee roster.

There is no Save button — edits apply and persist immediately (API keys save when you leave the
field). The scope pill in the panel header shows whether preferences follow the workspace
(**All devices**) or this device's own edits (**This device**), with push/discard controls to
promote or revert them.

**Your API keys follow you across your devices.** They sync through your workspace's
end-to-end-encrypted plugin configuration, scoped per user — so in a shared workspace different
users' keys never mix, and your bots always run on your own keys. One honest caveat: other members
of a shared workspace can technically inspect the raw plugin configuration, so treat workspace
members as trusted — the per-user slots prevent accidental cross-user key use, not member-level
secrecy (Thymer has no per-user-private plugin storage). Keys never appear in this repository or
the public mirror.

**The uploaded bot image stays per-device.** It is kept in browser local storage only — re-upload
it on each device where you want it (or use the image URL setting, which does sync).

&nbsp;

## 🔄 How Polling Works

After a bot is created, the plugin periodically calls Recall directly or through the bridge:

```text
GET /api/v1/bot/{bot_id}/
GET recordings[].media_shortcuts.transcript.data.download_url from the bot response
GET recordings[].media_shortcuts.participant_events.data.participants_download_url
```

The default interval is 30 seconds. You can also click the hammer (**Repair Meeting**) later on a
Meeting record with a `Recall Bot ID`. Repair asks first, then re-fetches Recall's authoritative
final artifacts and fills only **missing** plugin-owned transcript turns, summary / action-item
sections, citations, and attendee links. It does not replace a healthy existing summary, task
checkboxes, Notes, or unowned body content. If the summary landed as one glued blob
(`Planningnn### Overview`, literal `\n`) or leftover `{ "summary": ... }` JSON, Repair also runs
**Heal mashed summaries** on those plugin-owned nodes.

**Join Now** hides from the action bar once the Transcript section has content (empty heading still
shows Join). Recording / scheduled / processing states stay visible so you can stop or cancel.

**Regenerate** is one refresh icon on the action bar. It opens a menu — **Summary** or **Action
items** — then a confirm overlay before writing. Summary rewrite leaves Action items, Notes, and
Transcript alone. Action-item rewrite leaves Summary, Notes, and Transcript alone (`- [ ] `
checkboxes, `"<action> — <owner>"`; edited checkboxes are overwritten). It does not join a new bot.
No transcript yet toasts that there is nothing to summarize. Cancel does nothing.

**Heal mashed summaries** and **Apply to existing meetings** live in
**Plugin: Meetings → Setup → Diagnostics** only — they are not in the command palette.
Heal rewrites only plugin-owned Summary / Action items nodes — never Notes or Transcript —
and leaves already-healthy outlines alone. Apply heading format relabels, resizes, and reorders
the four section headings on Meetings records and inserts an empty heading for any missing
section (for example Action items on older meetings).

Use the record's stethoscope (**Diagnostics**) action to see received webhook events, parsed rows, last-event time, KV state,
transcript artifacts, realtime endpoints, and bridge version. Diagnostics copies a support-ready,
allow-listed report to the clipboard (and logs a fallback to the console) without including keys,
meeting URLs, transcript wording, or Recall account data.

Recall's `Call Ended`/`Done` state is not treated as plugin completion: the plugin keeps polling until
the authoritative final artifact arrives. The final plugin status is **Transcribed** when automatic
summaries are off, **Summarized** after a successful summary, or **Summary Failed** when the transcript
was saved but summarization needs repair. Status labels are title-cased in plugin-rendered UI while
the underlying lifecycle codes remain normalized for reliable retries.

> **Kill switch note:** the toggle in the settings-panel header disables the whole plugin at runtime — including transcript polling. A meeting recorded while the plugin is disabled won't stream into Thymer until you re-enable and run **Repair Meeting**.

When `Bridge URL` is set, the plugin also asks Recall to send real-time `transcript.data` events to
`POST /api/recall/realtime` on the bridge. Each accepted event gets its own idempotent, seven-day KV
entry, so concurrent webhooks cannot overwrite one another. Bind a Cloudflare KV namespace named
`RECALL_TRANSCRIPTS` for reliable live updates across Worker isolates; final post-meeting transcript,
attendees, and summary polling still work without KV. The final Recall artifact remains authoritative.
Recall perfect diarization is enabled with
`recording_config.transcript.diarization.use_separate_streams_when_available`.

Topic-section summaries cite the most relevant wording or topic heading with native Thymer reference
chips. Action items are written as real interactive tasks under their own heading. If you typed
anything under **Notes**, Claude treats that as higher priority than the transcript. The plugin marks
every body node it creates with persistent ownership metadata so retries and other devices recover the
same structure instead of replaying the transcript or duplicating the summary.


















&nbsp;

## 🌉 Bridge

If Recall shows the API key was never used and Thymer shows `Failed to fetch`, the browser request was blocked before it reached Recall. Deploy `backend/bridge-worker.js` to a hosted Worker and paste that URL into `Bridge URL`. The bridge forwards the plugin's per-request keys to Recall/Anthropic.


&nbsp;

## 📁 Its collection

Installing Recall.ai creates a **Meetings** collection, and that is where it runs for good. A Thymer
plugin is bound to its collection for its whole life, so there is nothing to choose and nothing to
configure here — the settings panel simply tells you which collection it is.

You can rename that collection, add your own properties to it, and use it for whatever else you like.
If it is missing a property Recall.ai needs, the Field Mapping section will offer to create it.

Other plugins can still add their own features on top — `Build Title from Properties`, for instance,
will happily build your meeting titles from their properties. That works because such plugins
*append* a hook rather than taking the collection over.


&nbsp;

## 📊 Anonymous Usage Counter

This plugin pings a <a href="https://www.goatcounter.com/" target="_blank" rel="noopener noreferrer">privacy-respecting counter</a> on first install and once per day of active use. It exists so I can see which plugins are worth continuing to invest in — both "did anyone install it" and "is anyone still using it after a week." Combined with the coffee donations, this is what tells me whether to keep building. It tracks the plugin slug only, no other telemetry or user data, and you can see exactly what I see on the <a href="https://thymer-plugins.goatcounter.com" target="_blank" rel="noopener noreferrer">public dashboard</a>.

**Opt out:** Do Not Track, or `localStorage.setItem('tps-telemetry-opt-out','1')` in the console.
