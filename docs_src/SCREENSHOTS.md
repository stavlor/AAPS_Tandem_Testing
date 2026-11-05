# Screenshot inventory and refresh shot list

This file is not part of the published docs. It tracks which screenshots are current (AAPS 4
Compose UI) and which still need to be retaken.

Pages mark each outdated image with a `% SCREENSHOT:` comment next to it, so
`grep -rn "% SCREENSHOT" docs_src` lists every place still waiting for a new capture.

## How to capture

1. Use the same phone for every shot, in **dark theme**, at 100% battery if possible, with no
   personal notifications showing.
2. Capture with the phone's screenshot button, or over USB with
   `python docs_src/tools/screenshots.py capture <name>` (see `--help`).
3. **Redact** the pump serial number, Bluetooth address and anything personal before committing.
   `screenshots.py redact` can black out a rectangle.
4. Save as `docs_src/images/<name>.jpg`, using the file names below, then run
   `python docs_src/tools/screenshots.py normalize docs_src/images/<name>.jpg` to resize to
   1080 px wide and recompress.
5. Update the `{figure}` path on the page and delete its `% SCREENSHOT:` comment.

## Status

✅ current (v4 Compose UI) · 🔁 retake (old UI) · ➕ missing (no image yet) · ⚪ other app, still valid

| # | New file name | Page | What to show | Replaces | Status |
|---|---|---|---|---|---|
| 1 | `v4_overview.jpg` | using/overview-tab | Tandem Mobi tab, connected, temp basal running, NOTIFICATION/EVENTS/HISTORY labels visible, Display Driver Version on | `overview_v2.jpg` | ✅ |
| 1b | `v4_overview_bolus.jpg` | using/overview-tab | Overview while an SMB is delivering (top command card, Active Bolus row) | — | ✅ |
| 1c | `v4_bolus_progress.jpg` | reference/how-it-works | Bolus progress dialog, cropped to the dialog only (no BG/HR data) | — | ✅ |
| 2 | `v4_overview_error.jpg` | using/overview-tab | Same tab with section 5 (driver error) visible | — | ➕ optional |
| 3 | `v4_preferences_top.jpg` | using/preferences | Mobi preferences, top: Use Shared Connection, Shared Connection Data, Max Bolus, Max Basal | `pref_v2_1.jpg` | ✅ |
| 4 | `v4_preferences_bottom.jpg` | using/preferences | Mobi preferences, scrolled down: display options, Auto confirm, Quick Bolus | `pref_v2_2.jpg` | ✅ |
| 5 | `v4_preferences_shared.jpg` | using/preferences | Preferences with Use Shared Connection **on**, showing Shared Connection Data | — | ➕ |
| 5b | `v4_overview_pair_button.jpg` | using/overview-tab | Overview with the Pump Pair button visible (Hide Pump Pair Button off) | — | ➕ |
| 6 | `v4_pairing_wizard_1.jpg` … `_n.jpg` | setup/connection | Each step of the AAPS pairing wizard (Mobi overview → Pump Pair) | — | ➕ |
| 7 | `v4_data_main.jpg` | using/data | Data screen with the three entries | `data_main.jpg` | ✅ |
| 8 | `v4_data_notifications.jpg` | using/data | Notifications with at least one alert and one malfunction | `data_notifications.jpg` | 🔁 |
| 9 | `v4_data_events.jpg` | using/data | Events list | `data_events.jpg` | ✅ |
| 10 | `v4_data_history.jpg` | using/data | Pump History with Group and Time Range filters | `data_pump_history.jpg` | ✅ |
| 11 | `v4_data_history_details.jpg` | using/data | History Log Details dialog | `data_pump_history_details.jpg` | ✅ |
| 12 | `v4_actions_suspended.jpg` | using/actions | Actions screen, delivery suspended | `start_pump.png` | ✅ `v4_insulin_start_before.jpg` |
| 13 | `v4_actions_running.jpg` | using/actions | Actions screen, delivery enabled | — | ✅ `v4_insulin_stop_before.jpg` |
| 14 | `v4_actions_tbr_running.jpg` | using/actions | Actions screen while a temp basal runs (Stop Temp Rate visible) | — | ✅ |
| 15 | — | using/actions | Resume / Stop insulin dialogs | — | ✅ `v4_insulin_start.jpg`, `v4_insulin_stop.jpg` |
| 14b | `v4_stop_temp_rate.jpg` | using/actions | Stop Temp Rate confirmation dialog | — | ✅ |
| 16 | — | using/actions | Cartridge Setup screen | `cartridge_actions.png` | ✅ `v4_cartridge_setup.jpg` |
| 17 | `v4_change_cart_step3.jpg` | using/actions | Change Cartridge step 3 (in progress) | — | ➕ |
| 18 | `v4_filltubing_step3.jpg` | using/actions | Fill Tubing step 3 (passes automatically, may need a quick capture) | — | ➕ |
| 19 | `v4_fill_cannula_1.jpg`, `_2.jpg` | using/actions | Fill Cannula: amount entry, then progress/complete | — | ➕ |
| 20 | `v4_site_reminder.jpg` | using/actions | Site Reminder with a preset selected | `site_reminder.jpg`, `SiteReminder.jpg` | 🔁 |
| 21 | `v4_pump_info.jpg` | using/actions | Pump Info (serial numbers redacted) | `pump_info.jpg` | ✅ |
| 22 | `v4_notification_blocking.jpg` | using/actions | Change Cartridge step 1 when a notification is active (shows the blocking message) | — | ➕ optional |
| 23 | `controlx2_view_pump_state.jpg` | setup/connection | ControlX2 Settings → Debug → View Pump State, with Save to Clipboard (JSON redacted) | — | ➕ |
| 24 | — | setup/connection | ControlX2 pump search / App info / permissions | — | ⚪ `controlx2_*.png` |
| 25 | — | archive/phase-1 | Phase 1 tab and preferences | — | ⚪ keep as historical |

## Unused images in the old `docs/pics`

- `pref_v2_up.jpg`, `pref_v2_down.jpg`: crops of the old preferences; replaced by the full
  screenshots.
- `SiteReminder.jpg`: older, lower-quality duplicate of `site_reminder.jpg`.
- `start_pump.png`, `cartridge_actions.png`: superseded by v4 images.

These are not copied into `docs_src/images`.

## Content to verify

Pages also carry `% VERIFY:` comments where the old text was out of date or uncertain. List them
with `grep -rn "% VERIFY" docs_src`.
