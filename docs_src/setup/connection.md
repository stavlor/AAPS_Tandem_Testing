# Connection setup

There are two ways to connect AAPS to the Mobi:

- **[A) Shared connection with ControlX2](#a-shared-connection-with-controlx2)**: pair with
  ControlX2 first, then hand the pairing data to AAPS. This is the more reliable option today.
- **[B) Pairing with AAPS only](#b-pairing-with-aaps-only)**: pair directly from the AAPS
  connection wizard.

The Mobi pump has no screen, so if something goes wrong there are limited options for fixing the
pump from within AAPS. To solve serious problems with the pump you need either the official
"Tandem Mobi" app (iPhone; an Android version was expected by the end of Q1 2026) or
ControlX2 alongside AAPS.

:::{important}
Re-pairing the Mobi requires a wireless charger. **While testing Mobi with AAPS, keep a wireless
charger available at all times** in case you need to re-pair, switch from AAPS to the official
Mobi app, or switch phones.

Any Qi-compatible wireless charger works; you don't need the official Tandem charging pad.
MagSafe chargers also work, but keep the cartridge area of the pump away from the magnets to avoid
damaging the piston.
:::

## About ControlX2

[ControlX2](https://github.com/jwoglom/controlX2) is a small, open-source Android app by
@jwoglom, one of the co-authors of this integration. It can monitor your pump, deliver boluses and
temp basals, and change (nearly) all pump settings. Newer versions add Mobi-specific commands such
as Change Cartridge and Fill Cannula, some of which this driver uses directly.

ControlX2 can send any supported command to the pump directly, with more ability to debug
problems. Installing ControlX2 doesn't mean running both apps at once. **Only one app can be
connected to the pump at a time**; running both will confuse the pump and cause disconnections.
If something goes wrong, force-stop AAPS, then start ControlX2 to troubleshoot the pump.

Once the pump is configured and AAPS is running, **the AAPS connection to the Mobi is 24/7**: the
driver never disconnects from the pump. This mirrors how the official app works, and the Mobi is
designed for this with Bluetooth Low Energy.

(pairing-the-pump)=
## Putting the Mobi in pairing mode

Both connection options need the pump in pairing mode. Pairing is a little temperamental, because
it isn't designed to be done often; it may take several tries.

1. Place the pump on the charging pad and wait for the white LEDs to pulse, which shows the pump
   is charging. If any alerts are active you will see blinking red lights; wait until they stop.
2. Pick the pump up off the charger and wait about 2–3 seconds.
3. Press the pump button twice. You may need to do this slowly and deliberately: press for a
   quarter of a second, release, wait half a second, then press again.
4. When pairing mode starts, the pump vibrates and beeps twice.

The video below shows an unsuccessful attempt where the pump doesn't beep or vibrate (first try),
followed by a successful attempt where it beeps and vibrates (second try).

```{raw} html
<div class="video">
  <iframe src="https://www.youtube.com/embed/u6wuikEiY8Y" title="Putting the Mobi into pairing mode"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
```

## A) Shared connection with ControlX2

1. Install the latest ControlX2 release from the
   [ControlX2 releases page](https://github.com/jwoglom/controlX2/releases)
   ({{ controlx2_version }} at the time of writing) on the **same phone** you will use for AAPS.
2. Launch ControlX2 and grant the permissions it requests so it can scan for pumps.
3. Follow the ControlX2 pairing wizard, putting the pump in
   [pairing mode](#pairing-the-pump) when asked.
4. Once ControlX2 is communicating with the pump, open **Settings → Debug → View Pump State**.
   This shows a JSON string with all the connection data. Tap **Save to Clipboard**.
5. **Force-stop ControlX2**, then start AAPS.
6. In AAPS, select **Tandem Mobi** as the pump and open its preferences. Enable
   **Use Shared Connection**, which makes **Shared Connection Data** visible.
7. Tap **Shared Connection Data**, paste the JSON string from ControlX2, and leave the
   preferences screen.

AAPS should now connect to your pump. If it doesn't straight away, force-stop AAPS and start it
again.

### If ControlX2 can't find the pump

You may get stuck on a screen like this one, with no pumps found:

:::{figure} ../images/controlx2_pairing_stuck.png
:class: screenshot
:align: center

ControlX2 searching for pumps without finding any.
:::

If this happens, and you are sure the Mobi is in pairing mode, open the Android **App info**
screen for ControlX2 and check that every permission under **Permissions** is listed as
**Allowed**:

:::{container} screens
```{figure} ../images/controlx2_appinfo_1.png
Open **App info** for ControlX2 (from recent apps, or by long-pressing its icon).
```
```{figure} ../images/controlx2_appinfo_2.png
Open **Permissions**.
```
```{figure} ../images/controlx2_appinfo_3.png
Every permission should be under **Allowed**.
```
:::

Some phones need the **Location** permission before they can find all Bluetooth devices. If you
can't find your pump, tap **Location** and allow it either "while using the app" or "all the
time".

## B) Pairing with AAPS only

:::{note}
Native pairing in AAPS is a newer addition to the Mobi driver and is not yet as reliable as
pairing through ControlX2.
:::

1. Select **Tandem Mobi** as your pump in the Config Builder or in the AAPS setup wizard.
2. Force-stop and restart AAPS, or restart your phone.
3. Open the Mobi overview and tap **Pump Pair**. If the button isn't there, open the preferences
   (gear icon) and turn off **Use Shared Connection** and **Hide Pump Pair Button in Overview**.

% VERIFY: the steps above are inferred from the "Hide Pump Pair Button in Overview" preference.
% Confirm the button name and that it opens the pairing wizard.
4. Follow the wizard, putting the pump in [pairing mode](#pairing-the-pump) when asked. If the
   pump isn't found, see the tips in [If ControlX2 can't find the pump](#if-controlx2-cant-find-the-pump);
   the same permission issues apply to AAPS.

```{raw} html
<div class="video">
  <iframe src="https://www.youtube.com/embed/wsXEqxq8lGg" title="Pairing the Mobi with AAPS"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
```
