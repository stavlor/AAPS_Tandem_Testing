# Data

Tap **Data** at the bottom of the [Mobi overview](overview-tab.md), or tap one of the
NOTIFICATIONS, EVENTS or HISTORY labels above the pump picture.

:::{figure} ../images/v4_data_main.jpg
:class: screenshot
:align: right

The Data screen.
:::

The Data screen gives access to three views:

- **[Notifications](#notifications)**: notifications sent by the pump. These can, and must, be
  confirmed by you.
- **[Events](#events)**: qualifying events sent by the pump. Informational only.
- **[Pump History](#pump-history)**: history records stored on the pump. Informational only.

```{raw} html
<div class="clear"></div>
```

## Notifications

% SCREENSHOT: data_notifications.jpg is pre-Compose UI (SCREENSHOTS.md: data_notifications).
:::{figure} ../images/data_notifications.jpg
:class: screenshot
:align: right

Notifications view with an alert and a malfunction.
:::

This view shows all notifications currently active on the pump.

- **Tap a notification to confirm it.** It is dismissed on the pump and disappears from the list,
  and the pump stops beeping or vibrating about it.
- Most alerts and alarms come with a malfunction. Malfunctions can't be confirmed, but they
  disappear when the related alert or alarm is confirmed.
- Some malfunctions are filtered out. We are gradually adding filtering for all known
  malfunctions.

For background on the types of notifications, see
[Pump notifications](../reference/how-it-works.md#pump-notifications).

```{raw} html
<div class="clear"></div>
```

## Events

:::{figure} ../images/v4_data_events.jpg
:class: screenshot
:align: right

Events view.
:::

When something happens on the pump, it sends an event. This view lists them with the date, time
and event keyword. Events are informational only, and there is currently no plan to extend this
view.

The driver doesn't rely on events alone: it still polls the pump on a schedule so nothing is
missed (see [Data refresh schedule](../reference/how-it-works.md#data-refresh-schedule)).

% VERIFY: the old text said event support "is not fully working yet in library".
% Confirm whether that is still true.

```{raw} html
<div class="clear"></div>
```

## Pump History

:::{container} screens
```{figure} ../images/v4_data_history.jpg
Pump History list, filtered by group and time range.
```
```{figure} ../images/v4_data_history_details.jpg
Tap a record to see its details.
```
:::

Pump history is read every 5 minutes, together with the pump status check.

- History is read from newest to oldest, in up to 5 chunks of 200 records each. Once records are
  older than 1.5 months, no more history is read.
- At first many records are read; after that, only new ones.
- Records older than 1.5 months are removed from the database so it doesn't grow needlessly.
- Tap an item to see its details.
- Filter by **Group** (the default shows everything except unknown items) and by **Time Range**.

History is not fully parsed. The view shows whatever fields the PumpX2 library recognizes, with
some minor parsing of a few known fields. History is informational and not used by the driver,
but it is useful for validation testing: it is a durable log, kept by the pump, of the operations
performed, which you can check against the actions AAPS logged.

For the list of known history logs, see the
[PumpX2 history log reference](https://jwoglom.github.io/pumpX2/javadoc/messages/com/jwoglom/pumpx2/pump/messages/response/historyLog/package-summary.html).
The names of some records are known even when not all of their fields can be decoded.
