# Troubleshooting

## I forgot to charge my pump and it has powered down

Don't panic. Charge the pump for about 15 minutes, then wake it from sleep mode (see
[Powering on the Mobi](setup/powering-on.md)). Start AAPS and the pump should be running.

You will then need to:

1. Acknowledge the notification that the pump shut down. Clear any other notifications too; they
   block the next steps.
2. Change the cartridge.
3. Tap **Start Insulin**.

See [Actions](using/actions.md) for these procedures.

## I am receiving a malfunction code

The PumpX2 library currently shows some malfunction codes that the official Tandem Mobi app does
not treat as malfunctions. The official app appears to allow-list specific codes as "real"
malfunctions that require you to call Tandem. Some malfunctions disappear when you acknowledge
the related alarm in the Notifications view.

**Please don't contact Tandem about malfunction codes shown in AAPS.** If you suspect the pump
hardware is faulty, switch back to the official Tandem Mobi app to check whether the malfunction
is real.

## ControlX2 or AAPS can't find the pump when pairing

Check the app's permissions, including Location. See
[If ControlX2 can't find the pump](setup/connection.md#if-controlx2-cant-find-the-pump).

## Bluetooth errors after switching between AAPS and ControlX2

Force-stopping the app connected to the pump doesn't always release the connection. If you get a
Bluetooth error when starting the other app:

1. Force-stop the app. Turn Bluetooth off, wait 10 seconds, turn it back on, and start the app
   again. This works most of the time.
2. If that doesn't help, restart the phone.

% VERIFY: this tip comes from the Phase 1 documentation. Confirm it still applies.

This section will grow as we find more areas that need troubleshooting.
