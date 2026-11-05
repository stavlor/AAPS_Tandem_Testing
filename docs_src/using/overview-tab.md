# Mobi overview

Once the Mobi is configured, the **Mobi** overview screen shows all the important
information about the pump. It is divided into six sections, with the action buttons at the
bottom.

:::{container} screens
```{figure} ../images/v4_overview.jpg
Idle, with a temp basal running and new events and history.
```
```{figure} ../images/v4_overview_bolus.jpg
While an SMB is being delivered.
```
:::

The gear icon at the top right opens the [preferences](preferences.md).

**Section 1: Pump information.** Firmware, serial number and Bluetooth address. If
[Display Driver Version](preferences.md#display) is enabled, the version of the
AAPS Mobi driver is shown too. Include this version whenever you report a bug: it helps us find
the problem and check whether it has already been fixed.

**Section 2: Connection state.** **BT State** shows **Connected** when the pump is connected
and idle. While a command is running, BT State shows what the driver is doing (for example
**Set Bolus**), and a card at the top of the screen shows the running command (for example
**SMB BOLUS 0.46 U**). The card is hidden when no command is running.

% VERIFY: the old text said the queue of pending commands is also shown. Confirm whether the
% top card lists queued commands.

**Section 3: Battery, reservoir and last connection.** Battery level, insulin remaining in the
cartridge, and when the last command was processed.

**Section 4: Insulin delivery.** Last bolus, base basal rate, and the current temp basal (with its
values) if one is running. While a bolus is being delivered, an **Active Bolus** row shows the
amount delivered so far against the amount requested, and when it started.

**Section 5: Driver errors.** Shown mostly when there is a configuration problem or the
connection to the pump was lost. This section is hidden when there are no errors. If you lose the
connection to the pump, force-stop and restart AAPS.

% VERIFY: the old text said auto-reconnect would be added in Phase 3 and ended with "TODO".
% Confirm current reconnect behaviour and update the sentence above.

**Section 6: Pump data indicators.** Three labels:

NOTIFICATIONS
: Notifications sent by the pump (e.g. low insulin, cartridge errors). Shown in red when there
  are new items.

EVENTS
: Events that have occurred, as tracked by AAPS. Shown in green when there are new items.

HISTORY
: Pump history records. Shown in blue when there are new items.

When a label is in the normal theme color there is nothing new to see. Tap a label to open that
view directly; see [Data](data.md).

:::{important}
The notification indicator matters most when setting up a pump for the first time or changing the
cartridge. The Mobi rejects Change Cartridge and Fill Tubing until you have acknowledged the
notifications about insulin delivery being suspended.
:::

```{raw} html
<div class="clear"></div>
```

## Buttons

At the bottom of the screen are three buttons, plus a fourth, **Pump Pair**, unless
[Hide Pump Pair Button in Overview](preferences.md#connection) is on:

Refresh
: Forces a refresh of all pump data. This is the same data retrieval that runs when AAPS starts
  (see [Startup sequence](../reference/how-it-works.md#startup-sequence)).

Data
: Opens the notifications, events and pump history views. See [Data](data.md).

Actions
: Opens the **Actions** screen: start/stop insulin, cartridge and cannula setup, and pump info.
  See [Actions](actions.md).

Pump Pair
: Starts pairing the pump from AAPS. See
  [Pairing with AAPS only](../setup/connection.md#b-pairing-with-aaps-only).

The buttons are disabled while the startup sequence is running.
