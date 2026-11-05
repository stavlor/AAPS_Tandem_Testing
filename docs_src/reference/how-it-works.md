# How the driver and the Mobi work

## Mobi-specific limitations

:::{important}
Testers should be aware that **the pump can't be made fully silent while DIY looping**. Depending
on your settings, the pump beeps (at low, medium or high volume) or vibrates whenever AAPS sends
it a temp basal or a bolus. **There is currently no known technical workaround.**
:::

Whether or not you use Control-IQ (Tandem's built-in closed loop), the pump beeps or vibrates when
*you* set a temp rate or bolus from your phone. The Control-IQ algorithm runs on the pump itself,
so its own basal adjustments and boluses make no sound. AAPS, and potential future Loop/Trio
integrations for the Mobi, trigger the sounds because, as far as the pump knows, a person is
making every temp basal and bolus, not the built-in algorithm.

We hope Tandem will eventually allow finer control over sound and vibration, so DIY looping can be
silent. That depends on Tandem releasing a firmware update with a "silent mode", or quieter (or no)
volume and vibration. There is no software fix for this today. Thank you for your understanding.

In the meantime, use ControlX2 or the official Mobi app to change the **General** sound setting,
which controls the sound or vibration used for temp basals and boluses.

## Startup sequence

Every time AAPS starts and the driver connects to the pump, it runs a sequence of commands to read
the initial data and check that the pump is working and what state it is in. This can take up to
2 minutes, depending on how fast your phone is, how good the Bluetooth connection is, and whether
this is one of the first times you run the driver.

The driver runs these commands:

1. Check the pump time and correct it if needed.
2. Read any active alarms or alerts.
3. Read the pump status (running or suspended).
4. Read the history. For roughly the first day, up to 1000 records are read at startup and on
   every 5-minute status check; after that only new records are read. See
   [Pump History](../using/data.md#pump-history).
5. Read the remaining insulin.
6. Read the battery level.
7. Read all settings and check they are set correctly; any that aren't are updated on the pump.
8. Read the last bolus.
9. Read the basal profile.

The buttons on the Mobi overview are disabled while the startup sequence runs.

:::{important}
On every start the driver checks whether Control-IQ (the Mobi's built-in partial closed loop) is
enabled, and disables it as a safety measure. **Control-IQ and AAPS must never run at the same
time.** To switch back to Control-IQ, disable AAPS and re-enable Control-IQ in ControlX2.
:::

## Pump notifications

"Notifications" covers four types of message. Follow the links to see the values for each type in
the PumpX2 reference:

- **[Pump alerts](https://jwoglom.github.io/pumpX2/javadoc/messages/com/jwoglom/pumpx2/pump/messages/response/currentStatus/AlertStatusResponse.AlertResponseType.html)**
  (least severe).
- **[CGM alerts](https://jwoglom.github.io/pumpX2/javadoc/messages/com/jwoglom/pumpx2/pump/messages/response/currentStatus/CGMAlertStatusResponse.CGMAlert.html)**:
  only relevant when the Mobi itself is connected directly to a CGM, which AAPS doesn't currently
  support.
- **[Alarms](https://jwoglom.github.io/pumpX2/javadoc/messages/com/jwoglom/pumpx2/pump/messages/response/currentStatus/AlarmStatusResponse.AlarmResponseType.html)**.
- **Malfunctions** (most severe). Some correspond directly to an alarm, but most are
  undocumented. The most severe malfunctions mean the pump must be reset or replaced by Tandem
  (for example, a hardware failure).

:::{warning}
The PumpX2 library currently shows some malfunction codes that the official Tandem Mobi app does
not treat as malfunctions. Some disappear when you acknowledge the related alarm in the
Notifications view. **Don't contact Tandem about malfunction codes shown in AAPS.** See
[Troubleshooting](../troubleshooting.md#i-am-receiving-a-malfunction-code).
:::

Most notifications cause an [event](#events) to be created. For the most part, you can treat
notifications, events, alarms and alerts as the same thing.

Because the pump has no screen, it signals notifications with beeps, vibrations and the lights
next to the button. It also sends the alarm or alert over Bluetooth to AAPS or ControlX2. The
driver reads notifications explicitly every 5 minutes, and when there are any, the NOTIFICATIONS
indicator on the [Mobi overview](../using/overview-tab.md) is highlighted. Usually the pump also
sends an event when a notification occurs, and the driver requests the details right away instead
of waiting for the next 5-minute check.

To see and confirm notifications, tap **Data → Notifications**, or tap the NOTIFICATIONS label
above the pump picture. Tapping a notification dismisses it on the pump, and the pump stops
beeping or vibrating every few minutes.

Most notifications (alerts) are informational, but alarms and some other notifications block pump
commands. For example, while an alarm is unacknowledged you can't start or stop insulin or do any
cartridge or cannula actions, so confirming notifications is an important step. These alarms
aren't only for problems: some just tell you that insulin delivery has been suspended for a long
time.

## Events

AAPS stays connected to the pump 24/7, mainly because of events, which give real-time warnings,
notifications and information from the pump. An event tells the phone that it should ask the pump
for more information, which may need to be shown to the user.

## Data refresh schedule

To keep the driver working correctly, it refreshes data from the pump regularly:

| Data | Refreshed |
| --- | --- |
| Pump status, alerts, alarms, history | Every 5 minutes |
| Remaining insulin | Every hour above 50%, every 30 minutes above 20%, every 15 minutes below 20% |
| Battery level | Every hour above 30%, every 30 minutes above 20%, every 15 minutes below 20% |

When events from the pump work correctly, this information is also fetched whenever the pump
reports a change, for example a drop in insulin or battery level.

## Bolus

The Mobi driver supports both standard boluses and SMBs. While a bolus runs, a progress dialog
shows the amount being delivered and a **Stop** button. The
[Mobi overview](../using/overview-tab.md) also shows the bolus in its **Active Bolus** row.

:::{figure} ../images/v4_bolus_progress.jpg
:class: screenshot-wide

Bolus progress dialog during a 0.46 U SMB.
:::

:::{note}
Bolus progress is only an estimate. The Mobi doesn't report how much of a bolus has been
delivered, so the driver estimates it from how long the bolus has been running. The bolus may
finish before the progress bar reaches the end, or the bar may reach the end while the bolus is
still delivering. PumpX2 provides some ways to detect when a bolus has finished, but AAPS doesn't
fully use them yet.
:::
